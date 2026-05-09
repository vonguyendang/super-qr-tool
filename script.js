let currentLogoUrl = null;
let generatedResults = []; // Array of { id, original, encode, png, svg, html }
let selectedIds = new Set(); // Persistent selection across pages

// --- UI Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-button").click();
    document.getElementById("logoInput").addEventListener("change", handleLogoUpload);
    document.getElementById("removeLogoButton").addEventListener("click", removeLogo);

    document.getElementById("excelInput").addEventListener("change", handleExcelUpload);

    fetchStats();
});

// --- Tab Logic ---
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// --- Logo Handling ---
function handleLogoUpload(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            currentLogoUrl = e.target.result;
            let logoImage = document.getElementById("logoImage");
            logoImage.src = currentLogoUrl;
            document.getElementById("logoPreviewContainer").style.display = "flex";
        };
        reader.readAsDataURL(file);
    }
}

function removeLogo() {
    currentLogoUrl = null;
    let logoImage = document.getElementById("logoImage");
    logoImage.src = "";
    document.getElementById("logoPreviewContainer").style.display = "none";
    document.getElementById("logoInput").value = "";
}

// --- Excel Handling ---
function handleExcelUpload(event) {
    let file = event.target.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = function (e) {
        try {
            let data = new Uint8Array(e.target.result);
            let workbook = XLSX.read(data, { type: 'array' });
            let firstSheet = workbook.SheetNames[0];
            let worksheet = workbook.Sheets[firstSheet];
            let json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            // Extract all non-empty cells assuming they are URLs
            let urls = [];
            json.forEach(row => {
                row.forEach(cell => {
                    if (cell && typeof cell === 'string' && cell.trim() !== '') {
                        urls.push(cell.trim());
                    }
                });
            });

            let textarea = document.getElementById('websiteUrls');
            let currentText = textarea.value.trim();
            textarea.value = currentText ? currentText + '\n' + urls.join('\n') : urls.join('\n');

        } catch (err) {
            showError("Lỗi khi đọc file Excel: " + err.message);
        }
        // Reset input so it can be selected again
        event.target.value = '';
    };
    reader.readAsArrayBuffer(file);
}

function downloadTemplate() {
    let ws_data = [
        ["URL (Mỗi dòng 1 link)"], // Header
        ["https://google.com"],
        ["https://facebook.com"],
        ["https://github.com"]
    ];
    let ws = XLSX.utils.aoa_to_sheet(ws_data);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, "qrcode_template.xlsx");
}

function showError(msg) {
    let errBox = document.getElementById("validationErrors");
    errBox.innerHTML = msg;
    errBox.style.display = "block";
    setTimeout(() => { errBox.style.display = "none"; }, 5000);
}

// --- URL Validation ---
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// --- Generation Logic ---
async function generateBulkQRCodes(type) {
    let dataList = []; // Array of { original, encode }

    // Extract data based on type
    if (type === 'website') {
        let text = document.getElementById("websiteUrls").value;
        let lines = text.split('\n').map(l => l.trim()).filter(l => l !== '');

        if (lines.length === 0) {
            return showError("Vui lòng nhập ít nhất 1 URL");
        }

        let invalidLines = [];

        // Calculate Base URL to support subfolders
        let baseUrl = window.location.href.split('?')[0].split('#')[0];
        if (baseUrl.endsWith('.html')) {
            baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/'));
        }
        if (!baseUrl.endsWith('/')) baseUrl += '/';

        lines.forEach((line, index) => {
            if (!isValidUrl(line)) {
                invalidLines.push(index + 1);
            } else {
                dataList.push({ original: line, encode: line }); // Direct URL, no redirect
            }
        });

        if (invalidLines.length > 0) {
            return showError("Có URL không hợp lệ ở các dòng: " + invalidLines.join(', '));
        }
    } else {
        // Handle other types
        let data = '';
        let original = '';
        switch (type) {
            case 'vcard':
                let firstName = document.getElementById("vcardFirstName").value;
                let lastName = document.getElementById("vcardLastName").value;
                let phone = document.getElementById("vcardPhone").value;
                let email = document.getElementById("vcardEmail").value;
                let company = document.getElementById("vcardCompany").value;
                let jobTitle = document.getElementById("vcardJobTitle").value;
                let companyPhone = document.getElementById("vcardCompanyPhone").value;
                let fax = document.getElementById("vcardFax").value;
                let companyEmail = document.getElementById("vcardCompanyEmail").value;
                let companyWebsite = document.getElementById("vcardCompanyWebsite").value;
                let street = document.getElementById("vcardStreet").value;
                let city = document.getElementById("vcardCity").value;
                let state = document.getElementById("vcardState").value;
                let country = document.getElementById("vcardCountry").value;
                let zip = document.getElementById("vcardZip").value;
                let postalCode = document.getElementById("vcardPostalCode").value;

                data = `BEGIN:VCARD\nVERSION:3.0\nFN:${firstName} ${lastName}\nTEL:${phone}\nEMAIL:${email}\nORG:${company}\nTITLE:${jobTitle}\nTEL;TYPE=WORK,VOICE:${companyPhone}\nTEL;TYPE=FAX:${fax}\nEMAIL;TYPE=INTERNET:${companyEmail}\nURL:${companyWebsite}\nADR;TYPE=WORK:;;${street};${city};${state};${country};${zip};${postalCode}\nEND:VCARD`;
                original = `VCard: ${firstName} ${lastName}`;
                break;
            case 'text':
                data = document.getElementById("textContent").value;
                original = `Text: ${data.substring(0, 30)}...`;
                break;
            case 'email':
                let emailAddress = document.getElementById("emailAddress").value;
                let emailSubject = document.getElementById("emailSubject").value;
                let emailBody = document.getElementById("emailBody").value;
                data = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                original = `Email: ${emailAddress}`;
                break;
            case 'facebook':
                data = document.getElementById("facebookLink").value;
                original = `FB: ${data}`;
                break;
            case 'wifi':
                let wifiName = document.getElementById("wifiName").value;
                let wifiPassword = document.getElementById("wifiPassword").value;
                let wifiEncryption = document.getElementById("wifiEncryption").value;
                data = `WIFI:S:${wifiName};T:${wifiEncryption};P:${wifiPassword};;`;
                original = `Wifi: ${wifiName}`;
                break;
            case 'phone':
                data = `tel:${document.getElementById("phoneNumber").value}`;
                original = `Phone: ${document.getElementById("phoneNumber").value}`;
                break;
            case 'sms':
                let smsPhoneNumber = document.getElementById("smsPhoneNumber").value;
                let smsMessage = document.getElementById("smsMessage").value;
                data = `SMSTO:${smsPhoneNumber}:${smsMessage}`;
                original = `SMS: ${smsPhoneNumber}`;
                break;
        }

        if (!data || data.trim() === '') return showError("Vui lòng điền thông tin");
        dataList.push({ original: original, encode: data });
    }

    // Change button state
    let btn = document.querySelector('.tab-content[style*="display: block"] .generate-btn')
        || document.querySelector('.tab-content[style*="display:block"] .generate-btn')
        || document.activeElement;

    if (!btn || !btn.classList.contains('generate-btn')) {
        let tabs = document.querySelectorAll('.tab-content');
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].style.display === 'block') {
                btn = tabs[i].querySelector('.generate-btn');
                break;
            }
        }
    }

    let originalBtnText = btn ? btn.innerText : 'Generate';
    if (btn) {
        btn.innerText = "Đang tạo...";
        btn.disabled = true;
    }

    generatedResults = [];
    selectedIds.clear();

    // Generate QR for each item
    for (let i = 0; i < dataList.length; i++) {
        let item = dataList[i];
        try {
            let qrOptions = {
                errorCorrectionLevel: 'H',
                margin: 2,
                width: 1200,
                color: {
                    dark: '#000000',
                    light: '#ffffff'
                }
            };

            // Generate basic DataURL for PNG and SVG
            let pngDataUrl = await QRCode.toDataURL(item.encode, qrOptions);
            let svgString = await QRCode.toString(item.encode, { ...qrOptions, type: 'svg' });

            // If logo exists, composite it into PNG and SVG
            if (currentLogoUrl) {
                pngDataUrl = await overlayLogo(pngDataUrl, currentLogoUrl);
                svgString = insertLogoToSvg(svgString, currentLogoUrl);
            }

            // Generate HTML
            let htmlContent = `
                <!DOCTYPE html>
                <html>
                <head><title>QR Code</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
                <body style="display:flex;justify-content:center;align-items:center;min-height:100vh;background:#f0f0f0;margin:0;">
                    <div style="background:white;padding:20px;border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,0.1);text-align:center;">
                        <img src="${pngDataUrl}" alt="QR Code" style="max-width:100%;height:auto;width:300px;"/>
                        <p style="margin-top:20px;font-family:sans-serif;color:#333;word-break:break-all;">${item.original}</p>
                    </div>
                </body>
                </html>
            `;
            let htmlBlob = new Blob([htmlContent], { type: 'text/html' });
            let htmlUrl = URL.createObjectURL(htmlBlob);

            generatedResults.push({
                id: i + 1,
                original: item.original,
                encode: item.encode,
                png: pngDataUrl,
                svg: svgString,
                html: htmlUrl
            });

        } catch (err) {
            console.error(err);
        }
    }

    // Track generation stats
    if (type === 'website') {
        trackGeneration(dataList.length);
    }

    // Render Table
    renderTable();

    if (btn) {
        btn.innerText = originalBtnText;
        btn.disabled = false;
    }

    // Show results section
    document.getElementById("resultsSection").style.display = "block";
    document.getElementById("resultsSection").scrollIntoView({ behavior: 'smooth' });
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

function overlayLogo(qrDataUrl, logoUrl) {
    return new Promise((resolve) => {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let qrImg = new Image();
        qrImg.onload = () => {
            canvas.width = qrImg.width;
            canvas.height = qrImg.height;
            ctx.drawImage(qrImg, 0, 0);

            let logoImg = new Image();
            logoImg.onload = () => {
                let logoSize = canvas.width * 0.25; // 25% of QR code size
                let logoX = (canvas.width - logoSize) / 2;
                let logoY = (canvas.height - logoSize) / 2;

                let padding = canvas.width * 0.02; // 3.5% padding
                let radius = canvas.width * 0.05;  // corner radius

                // Draw rounded white background for logo padding
                ctx.fillStyle = "white";
                drawRoundedRect(ctx, logoX - padding, logoY - padding, logoSize + padding * 2, logoSize + padding * 2, radius);
                ctx.fill();

                // Draw rounded logo image
                ctx.save();
                let innerRadius = Math.max(0, radius - padding);
                drawRoundedRect(ctx, logoX, logoY, logoSize, logoSize, innerRadius);
                ctx.clip();
                ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
                ctx.restore();

                resolve(canvas.toDataURL("image/png"));
            };
            logoImg.src = logoUrl;
        };
        qrImg.src = qrDataUrl;
    });
}

function insertLogoToSvg(svgStr, logoUrl) {
    try {
        let sizeMatch = svgStr.match(/viewBox="0 0 (\d+) (\d+)"/);
        if (sizeMatch) {
            let width = parseInt(sizeMatch[1]);
            let logoSize = width * 0.25;
            let logoX = (width - logoSize) / 2;
            let logoY = (width - logoSize) / 2;
            let pad = width * 0.035;
            let radius = width * 0.05;

            let clipId = "clip-logo-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
            let innerRadius = Math.max(0, radius - pad);

            let imageTag = `
                <rect x="${logoX - pad}" y="${logoY - pad}" width="${logoSize + pad * 2}" height="${logoSize + pad * 2}" rx="${radius}" ry="${radius}" fill="white" />
                <clipPath id="${clipId}">
                    <rect x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" rx="${innerRadius}" ry="${innerRadius}" />
                </clipPath>
                <image href="${logoUrl}" x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${clipId})" />
            `;
            return svgStr.replace('</svg>', imageTag + '</svg>');
        }
    } catch (e) {
        console.error("SVG logo embedding error", e);
    }
    return svgStr;
}

// --- Tracking ---
function trackGeneration(qrCount) {
    fetch('api/track.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qr_count: qrCount })
    }).then(() => {
        fetchStats();
    }).catch(e => console.error('Tracking error', e));
}

function fetchStats() {
    fetch('api/stats.php')
        .then(r => r.json())
        .then(data => {
            document.getElementById('stat-generated').innerHTML =
                `<span class="stat-label">Tổng QR Đã Tạo</span><span class="stat-value">${data.totalQR ?? 0}</span>`;
            document.getElementById('stat-scans').innerHTML =
                `<span class="stat-label">Số Lần Tạo QR</span><span class="stat-value">${data.totalSessions ?? 0}</span>`;
            document.getElementById('stat-today-scans').innerHTML =
                `<span class="stat-label">Lần Tạo Hôm Nay</span><span class="stat-value">${data.todaySessions ?? 0}</span>`;

            let lastUp = data.lastUpdated ? new Date(data.lastUpdated).toLocaleString('vi-VN') : 'Chưa có';
            document.getElementById('stat-last-updated').innerHTML =
                `<span class="stat-label">Cập Nhật Lần Cuối</span><span class="stat-value" style="font-size:1rem;margin-top:0.5rem;">${lastUp}</span>`;

            document.querySelectorAll('.stat-box').forEach(el => el.classList.remove('skeleton'));
        })
        .catch(e => console.error('Stats error', e));
}

// --- Table & Results ---
const PAGE_SIZE = 10;
let currentPage = 1;

function updateSelectedBadge() {
    let badge = document.getElementById('selectedBadge');
    if (!badge) return;
    let count = selectedIds.size;
    badge.textContent = count > 0 ? `${count} đã chọn` : '';
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

function renderTable() {
    const totalItems = generatedResults.length;
    const totalPages = Math.ceil(totalItems / PAGE_SIZE);

    // Clamp currentPage
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

    const start = (currentPage - 1) * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, totalItems);
    const pageItems = generatedResults.slice(start, end);

    let tbody = document.getElementById("qrTableBody");
    tbody.innerHTML = '';

    pageItems.forEach(res => {
        let tr = document.createElement("tr");

        let tdCheck = document.createElement("td");
        let cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'row-check';
        cb.value = res.id;
        cb.checked = selectedIds.has(res.id);
        cb.addEventListener('change', () => {
            if (cb.checked) selectedIds.add(res.id);
            else selectedIds.delete(res.id);
            updateCheckAllState();
            updateSelectedBadge();
        });
        tdCheck.appendChild(cb);

        let tdId = document.createElement("td");
        tdId.innerText = res.id;

        let tdUrl = document.createElement("td");
        tdUrl.className = "url-cell";
        tdUrl.title = res.original;
        tdUrl.innerText = res.original;

        let tdDown = document.createElement("td");
        tdDown.className = "download-group";
        tdDown.innerHTML = `
            <button class="btn-secondary icon-btn" onclick="downloadSingle(${res.id}, 'png')">PNG</button>
            <button class="btn-secondary icon-btn" onclick="downloadSingle(${res.id}, 'svg')">SVG</button>
            <button class="btn-secondary icon-btn" onclick="downloadSingle(${res.id}, 'html')">HTML</button>
        `;

        let tdShow = document.createElement("td");
        tdShow.innerHTML = `<button class="btn-secondary icon-btn" onclick="openPreview(${res.id})">Xem</button>`;

        tr.appendChild(tdCheck);
        tr.appendChild(tdId);
        tr.appendChild(tdUrl);
        tr.appendChild(tdDown);
        tr.appendChild(tdShow);

        tbody.appendChild(tr);
    });

    updateCheckAllState();
    updateSelectedBadge();

    // Render pagination
    renderPagination(totalItems, totalPages);
}

function renderPagination(totalItems, totalPages) {
    let container = document.getElementById("paginationContainer");

    if (totalItems <= PAGE_SIZE) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';
    container.innerHTML = '';

    // Prev button
    let prev = document.createElement('button');
    prev.className = 'page-btn' + (currentPage === 1 ? ' disabled' : '');
    prev.innerHTML = '&#8592;';
    prev.disabled = currentPage === 1;
    prev.onclick = () => goToPage(currentPage - 1);
    container.appendChild(prev);

    // Page buttons
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        container.appendChild(makePageBtn(1, totalPages));
        if (startPage > 2) {
            let dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.innerText = '…';
            container.appendChild(dots);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        container.appendChild(makePageBtn(i, totalPages));
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            let dots = document.createElement('span');
            dots.className = 'page-dots';
            dots.innerText = '…';
            container.appendChild(dots);
        }
        container.appendChild(makePageBtn(totalPages, totalPages));
    }

    // Next button
    let next = document.createElement('button');
    next.className = 'page-btn' + (currentPage === totalPages ? ' disabled' : '');
    next.innerHTML = '&#8594;';
    next.disabled = currentPage === totalPages;
    next.onclick = () => goToPage(currentPage + 1);
    container.appendChild(next);

    // Info label
    let info = document.createElement('span');
    info.className = 'page-info';
    info.innerText = `${(currentPage - 1) * PAGE_SIZE + 1}–${Math.min(currentPage * PAGE_SIZE, totalItems)} / ${totalItems}`;
    container.appendChild(info);
}

function makePageBtn(page, totalPages) {
    let btn = document.createElement('button');
    btn.className = 'page-btn' + (page === currentPage ? ' active' : '');
    btn.innerText = page;
    btn.onclick = () => goToPage(page);
    return btn;
}

function goToPage(page) {
    currentPage = page;
    renderTable();
}

function updateCheckAllState() {
    // Determine if all items on current page are selected
    let pageCheckboxes = document.querySelectorAll('.row-check');
    let allChecked = pageCheckboxes.length > 0 && [...pageCheckboxes].every(cb => cb.checked);
    document.getElementById('checkAll').checked = allChecked;
}

function toggleCheckAll(source) {
    // Toggle only current page items in DOM and update selectedIds
    let checkboxes = document.querySelectorAll('.row-check');
    checkboxes.forEach(cb => {
        cb.checked = source.checked;
        let id = parseInt(cb.value);
        if (source.checked) selectedIds.add(id);
        else selectedIds.delete(id);
    });
    updateSelectedBadge();
}

function selectAll() {
    // Select ALL items across all pages
    generatedResults.forEach(r => selectedIds.add(r.id));
    document.querySelectorAll('.row-check').forEach(cb => cb.checked = true);
    document.getElementById('checkAll').checked = true;
    updateSelectedBadge();
}

function deselectAll() {
    selectedIds.clear();
    document.querySelectorAll('.row-check').forEach(cb => cb.checked = false);
    document.getElementById('checkAll').checked = false;
    updateSelectedBadge();
}

// --- Download Logic ---
function downloadSingle(id, format) {
    let res = generatedResults.find(r => r.id === id);
    if (!res) return;

    let a = document.createElement('a');
    let filename = getQrFilename(res.original, res.id);

    if (format === 'png') {
        a.href = res.png;
        a.download = `${filename}.png`;
    } else if (format === 'svg') {
        let blob = new Blob([res.svg], { type: "image/svg+xml;charset=utf-8" });
        a.href = URL.createObjectURL(blob);
        a.download = `${filename}.svg`;
    } else if (format === 'html') {
        a.href = res.html;
        a.download = `${filename}.html`;
    }

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function downloadSelectedZip() {
    if (selectedIds.size === 0) {
        return alert("Vui lòng chọn ít nhất 1 mã QR để tải về");
    }

    let includePng = document.getElementById("zipIncludePng").checked;
    let includeSvg = document.getElementById("zipIncludeSvg").checked;
    let includeHtml = document.getElementById("zipIncludeHtml").checked;

    if (!includePng && !includeSvg && !includeHtml) {
        return alert("Vui lòng chọn ít nhất 1 định dạng (PNG, SVG, HTML) để tải về");
    }

    let btn = document.getElementById("btnDownloadZip");
    let origText = btn.innerText;
    btn.innerText = "Đang nén ZIP...";
    btn.disabled = true;

    let zip = new JSZip();
    let folder = zip.folder("QRCodes");
    let htmlPromises = [];

    selectedIds.forEach(id => {
        let res = generatedResults.find(r => r.id === id);
        if (res) {
            let baseName = getQrFilename(res.original, res.id);
            if (includePng) {
                let base64Data = res.png.split(',')[1];
                folder.file(`${baseName}.png`, base64Data, { base64: true });
            }
            if (includeSvg) {
                folder.file(`${baseName}.svg`, res.svg);
            }
            if (includeHtml) {
                let p = fetch(res.html).then(response => response.blob()).then(blob => {
                    folder.file(`${baseName}.html`, blob);
                }).catch(e => console.log("Can't add html to zip", e));
                htmlPromises.push(p);
            }
        }
    });

    Promise.all(htmlPromises).then(async () => {
        try {
            let content = await zip.generateAsync({ type: "blob" });
            saveAs(content, `qrcodes_batch_${Date.now()}.zip`);
        } catch (err) {
            alert("Lỗi tạo file ZIP");
        }
        btn.innerText = origText;
        btn.disabled = false;
    });
}

// --- Preview Modal Logic ---
function getQrFilename(str, id) {
    let name = null;
    try {
        let url = new URL(str);
        let pathname = url.pathname;
        let lastSegment = pathname.substring(pathname.lastIndexOf('/') + 1);
        if (lastSegment && lastSegment.includes('.')) {
            let parts = lastSegment.split('.');
            if (parts.length > 1) {
                parts.pop();
                name = parts.join('.');
                name = name.replace(/[^a-zA-Z0-9_\-]/g, '_');
            }
        }
    } catch (e) { }

    if (name && name.length > 0) {
        return `${name}`;
    }

    let now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0');
    let yyyy = now.getFullYear();
    let H = String(now.getHours()).padStart(2, '0');
    let M = String(now.getMinutes()).padStart(2, '0');
    let S = String(now.getSeconds()).padStart(2, '0');

    // We append the id at the end to guarantee uniqueness during batch downloads
    return `qr_${dd}${mm}${yyyy}_${H}-${M}-${S}_${id}`;
}

function openPreview(id) {
    let res = generatedResults.find(r => r.id === id);
    if (!res) return;

    document.getElementById("modalQrImg").src = res.png;
    document.getElementById("modalUrl").innerText = res.original;

    // Set up buttons
    document.getElementById("modalBtnPng").onclick = () => downloadSingle(id, 'png');
    document.getElementById("modalBtnSvg").onclick = () => downloadSingle(id, 'svg');
    document.getElementById("modalBtnHtml").onclick = () => downloadSingle(id, 'html');

    document.getElementById("previewModal").classList.add("show");
}
function closeModal() {
    document.getElementById("previewModal").classList.remove("show");
}

// Close modal when clicking outside
window.onclick = function (event) {
    let modal = document.getElementById("previewModal");
    if (event.target == modal) {
        closeModal();
    }
}