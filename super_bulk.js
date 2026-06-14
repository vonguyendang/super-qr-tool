let generatedResults = [];
let selectedIds = new Set();
const PAGE_SIZE = 10;
let currentPage = 1;
let currentActiveTab = 'Website';

document.addEventListener("DOMContentLoaded", () => {
    // Initialize tabs
    let firstTab = document.querySelector(".tab-button");
    if(firstTab) firstTab.click();

    let excelInput = document.getElementById("excelInput");
    if(excelInput) excelInput.addEventListener("change", handleExcelUpload);

    let mainGenBtn = document.getElementById("mainGenerateBtn");
    if(mainGenBtn) {
        mainGenBtn.addEventListener("click", () => {
            generateBulkQRCodes(currentActiveTab);
        });
    }
});

function openTab(evt, tabName) {
    currentActiveTab = tabName;
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active-tab-anim");
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    let target = document.getElementById(tabName);
    if(target) {
        target.style.display = "block";
        // small delay to trigger animation
        setTimeout(()=> target.classList.add("active-tab-anim"), 10);
    }
    evt.currentTarget.className += " active";
}

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
            
            showSuccess(`Đã import thành công ${urls.length} liên kết!`);
        } catch (err) {
            showError("Lỗi khi đọc file Excel: " + err.message);
        }
        event.target.value = '';
    };
    reader.readAsArrayBuffer(file);
}

function downloadTemplate() {
    let ws_data = [
        ["URL (Mỗi dòng 1 link)"],
        ["https://google.com"],
        ["https://facebook.com"],
        ["https://github.com"]
    ];
    let ws = XLSX.utils.aoa_to_sheet(ws_data);
    let wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, "qrcode_template.xlsx");
}

function showSuccess(msg) {
    let errBox = document.getElementById("validationErrors");
    if(errBox) {
        errBox.innerHTML = msg;
        errBox.style.display = "block";
        errBox.style.backgroundColor = "#ECFDF5";
        errBox.style.borderColor = "#10B981";
        errBox.style.color = "#047857";
        setTimeout(() => { errBox.style.display = "none"; }, 4000);
    }
}

function showError(msg) {
    let errBox = document.getElementById("validationErrors");
    if(errBox) {
        errBox.innerHTML = msg;
        errBox.style.display = "block";
        errBox.style.backgroundColor = "#FEF2F2";
        errBox.style.borderColor = "#F87171";
        errBox.style.color = "#991B1B";
        setTimeout(() => { errBox.style.display = "none"; }, 5000);
    } else {
        alert(msg);
    }
}

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

async function generateBulkQRCodes(type) {
    let dataList = []; 
    let typeLower = type.toLowerCase();

    if (typeLower === 'website') {
        let text = document.getElementById("websiteUrls").value;
        let lines = text.split('\n').map(l => l.trim()).filter(l => l !== '');

        if (lines.length === 0) return alert(window.i18n.t('bulk.alertEmpty'));

        lines.forEach(line => {
            dataList.push({ original: line, encode: line });
        });

    } else {
        let data = '';
        let original = '';
        switch (typeLower) {
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
            case 'social':
                let network = document.getElementById("socialNetwork").value;
                let socialLink = document.getElementById("socialLink").value.trim();
                if (network === 'zalo' && !socialLink.startsWith('http')) {
                    data = 'https://zalo.me/' + socialLink;
                } else if (network === 'whatsapp' && !socialLink.startsWith('http')) {
                    let cleanPhone = socialLink.replace(/[^\d+]/g, '');
                    data = 'https://wa.me/' + cleanPhone;
                } else {
                    data = socialLink;
                }
                original = `Social: ${data}`;
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
            case 'location':
                let lat = document.getElementById("locLatitude").value.trim();
                let lng = document.getElementById("locLongitude").value.trim();
                data = `geo:${lat},${lng}`;
                original = `Location: ${lat}, ${lng}`;
                break;
            case 'event':
                let eName = document.getElementById("eventName").value.trim();
                let eStart = document.getElementById("eventStart").value.trim().replace(/-|:/g, '');
                let eEnd = document.getElementById("eventEnd").value.trim().replace(/-|:/g, '');
                let eLoc = document.getElementById("eventLocation").value.trim();
                data = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${eName}\nDTSTART:${eStart}00Z\nDTEND:${eEnd}00Z\nLOCATION:${eLoc}\nEND:VEVENT\nEND:VCALENDAR`;
                original = `Event: ${eName}`;
                break;
            case 'crypto':
                let cCurrency = document.getElementById("cryptoCurrency").value;
                let cAddress = document.getElementById("cryptoAddress").value.trim();
                let cAmount = document.getElementById("cryptoAmount").value.trim();
                if (cCurrency === 'bitcoin') {
                    data = `bitcoin:${cAddress}?amount=${cAmount}`;
                } else if (cCurrency === 'ethereum') {
                    data = `ethereum:${cAddress}?value=${cAmount}`;
                }
                original = `Crypto: ${cCurrency.toUpperCase()} - ${cAmount}`;
                break;
            case 'app':
                let aType = document.getElementById("appStoreType").value;
                let aLink = document.getElementById("appLink").value.trim();
                data = aLink;
                original = `App: ${aType === 'appstore' ? 'iOS' : 'Android'} - ${aLink}`;
                break;
        }

        if (!data || data.trim() === '' || original.replace(/.*:\s*/, '').trim() === '') {
            return showError("Vui lòng điền đầy đủ thông tin");
        }
        dataList.push({ original: original, encode: data });
    }

    let btn = document.getElementById("mainGenerateBtn");
    let originalBtnText = btn ? btn.innerHTML : 'Generate';
    if (btn) {
        btn.innerHTML = `<i class="el-icon-loading"></i><span>Đang tạo...</span>`;
        btn.disabled = true;
    }

    generatedResults = [];
    selectedIds.clear();

    let vueInstance = window.vm;
    if(!vueInstance) {
        if (btn) { btn.innerHTML = originalBtnText; btn.disabled = false; }
        return showError("Lỗi hệ thống: Không tìm thấy QR Engine.");
    }

    for (let i = 0; i < dataList.length; i++) {
        let item = dataList[i];
        try {
            let tempDiv = document.createElement("div");
            
            let paramCopy = JSON.parse(JSON.stringify(vueInstance.qrCodeParameter));
            paramCopy.text = item.encode;
            let o = {
                text: item.encode,
                width: 300,
                height: 300,
                correctLevel: window.QRCode.CorrectLevel[paramCopy.eclevel || 2] || window.QRCode.CorrectLevel.M
            };
            
            let qrc = new window.QRCode(tempDiv, o);
            let base64Url = await window.QRCodeGenerate(paramCopy, qrc);

            if (i === 0) {
                let codeImg = document.getElementById("codeImg");
                if(codeImg) {
                    codeImg.src = base64Url;
                    vueInstance.code_img = base64Url;
                }
            }
            
            let htmlContent = `
                <!DOCTYPE html>
                <html>
                <head><title>QR Code</title><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
                <body style="display:flex;justify-content:center;align-items:center;min-height:100vh;background:#f0f0f0;margin:0;">
                    <div style="background:white;padding:20px;border-radius:10px;box-shadow:0 4px 10px rgba(0,0,0,0.1);text-align:center;">
                        <img src="${base64Url}" alt="QR Code" style="max-width:100%;height:auto;width:300px;"/>
                        <p style="margin-top:20px;font-family:sans-serif;color:#333;word-break:break-all;">${item.original}</p>
                    </div>
                </body>
                </html>
            `;
            let htmlBlob = new Blob([htmlContent], { type: 'text/html' });
            let htmlUrl = URL.createObjectURL(htmlBlob);

            let formatExt = 'png';
            let formatName = 'PNG';
            switch (vueInstance.qrCodeParameter.ImageType) {
                case 0: formatExt = 'jpg'; formatName = 'JPG'; break;
                case 1: formatExt = 'png'; formatName = 'PNG'; break;
                case 2: formatExt = 'gif'; formatName = 'GIF'; break;
                case 3: formatExt = 'svg'; formatName = 'SVG'; break;
            }
            let zipLabel = document.getElementById("zipImgLabel");
            if (zipLabel) zipLabel.innerText = formatName;

            generatedResults.push({
                id: i + 1,
                original: item.original,
                encode: item.encode,
                imgUrl: base64Url,
                formatExt: formatExt,
                formatName: formatName,
                html: htmlUrl
            });

        } catch (err) {
            console.error(err);
        }
    }

    renderTable();

    if (btn) {
        btn.innerHTML = originalBtnText;
        btn.disabled = false;
    }

    let rs = document.getElementById("resultsSection");
    if(rs) {
        rs.style.display = "block";
        setTimeout(()=> {
            rs.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // Call tracking
    if (generatedResults.length > 0 && typeof trackGeneration === 'function') {
        trackGeneration(generatedResults.length);
    }
}


function renderTable() {
    const totalItems = generatedResults.length;
    const totalPages = Math.ceil(totalItems / PAGE_SIZE);

    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

    const start = (currentPage - 1) * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, totalItems);
    const pageItems = generatedResults.slice(start, end);

    let tbody = document.getElementById("qrTableBody");
    if(!tbody) return;
    tbody.innerHTML = '';

    pageItems.forEach(res => {
        let tr = document.createElement("tr");

        let tdCheck = document.createElement("td");
        let cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'row-check custom-checkbox';
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
            <button class="btn-action btn-download" onclick="downloadSingle(${res.id}, 'img')">${res.formatName}</button>
            <button class="btn-action btn-download" onclick="downloadSingle(${res.id}, 'html')">HTML</button>
        `;

        let tdShow = document.createElement("td");
        tdShow.innerHTML = `<button class="btn-action btn-view" onclick="openPreview(${res.id})">${window.i18n.t('bulk.btnPreview')}</button>`;

        tr.appendChild(tdCheck);
        tr.appendChild(tdId);
        tr.appendChild(tdUrl);
        tr.appendChild(tdDown);
        tr.appendChild(tdShow);

        tbody.appendChild(tr);
    });

    updateCheckAllState();
    updateSelectedBadge();
    renderPagination(totalItems, totalPages);
}

function renderPagination(totalItems, totalPages) {
    let container = document.getElementById("paginationContainer");
    if(!container) return;
    if (totalItems <= PAGE_SIZE) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';
    container.innerHTML = '';

    let prev = document.createElement('button');
    prev.className = 'page-btn' + (currentPage === 1 ? ' disabled' : '');
    prev.innerHTML = '&#8592;';
    prev.disabled = currentPage === 1;
    prev.onclick = () => goToPage(currentPage - 1);
    container.appendChild(prev);

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

    let next = document.createElement('button');
    next.className = 'page-btn' + (currentPage === totalPages ? ' disabled' : '');
    next.innerHTML = '&#8594;';
    next.disabled = currentPage === totalPages;
    next.onclick = () => goToPage(currentPage + 1);
    container.appendChild(next);

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
    let pageCheckboxes = document.querySelectorAll('.row-check');
    let allChecked = pageCheckboxes.length > 0 && [...pageCheckboxes].every(cb => cb.checked);
    let checkAllEl = document.getElementById('checkAll');
    if(checkAllEl) checkAllEl.checked = allChecked;
}

window.toggleCheckAll = function(source) {
    let checkboxes = document.querySelectorAll('.row-check');
    checkboxes.forEach(cb => {
        cb.checked = source.checked;
        let id = parseInt(cb.value);
        if (source.checked) selectedIds.add(id);
        else selectedIds.delete(id);
    });
    updateSelectedBadge();
}

window.selectAll = function() {
    generatedResults.forEach(r => selectedIds.add(r.id));
    document.querySelectorAll('.row-check').forEach(cb => cb.checked = true);
    let checkAllEl = document.getElementById('checkAll');
    if(checkAllEl) checkAllEl.checked = true;
    updateSelectedBadge();
}

window.deselectAll = function() {
    selectedIds.clear();
    document.querySelectorAll('.row-check').forEach(cb => cb.checked = false);
    let checkAllEl = document.getElementById('checkAll');
    if(checkAllEl) checkAllEl.checked = false;
    updateSelectedBadge();
}

function updateSelectedBadge() {
    let badge = document.getElementById('selectedBadge');
    if (!badge) return;
    let count = selectedIds.size;
    badge.textContent = count > 0 ? `${count} đã chọn` : '';
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
}

function getQrFilename(str, id) {
    let name = "QR_Code";
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

    let now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0');
    let yyyy = now.getFullYear();
    let H = String(now.getHours()).padStart(2, '0');
    let M = String(now.getMinutes()).padStart(2, '0');
    let S = String(now.getSeconds()).padStart(2, '0');

    return `qr_${dd}${mm}${yyyy}_${H}-${M}-${S}_${id}_${name}`;
}

window.downloadSingle = function(id, format) {
    let res = generatedResults.find(r => r.id === id);
    if (!res) return;

    let a = document.createElement('a');
    let filename = getQrFilename(res.original, res.id);

    if (format === 'img') {
        a.href = res.imgUrl;
        a.download = `${filename}.${res.formatExt}`;
    } else if (format === 'html') {
        a.href = res.html;
        a.download = `${filename}.html`;
    }

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

window.downloadSelectedZip = async function() {
    if (selectedIds.size === 0) {
        return alert(window.i18n.t('bulk.alertSelect'));
    }

    let includeImg = document.getElementById("zipIncludeImg") ? document.getElementById("zipIncludeImg").checked : true;
    let includeHtml = document.getElementById("zipIncludeHtml") ? document.getElementById("zipIncludeHtml").checked : false;

    if (!includeImg && !includeHtml) {
        return alert(window.i18n.t('bulk.alertZipSelect'));
    }

    let btn = document.getElementById("btnDownloadZip");
    let origText = btn.innerText;
    btn.innerHTML = `<i class="el-icon-loading"></i> ${window.i18n.t('bulk.zipping')}`;
    btn.disabled = true;

    let zip = new JSZip();
    let folder = zip.folder("QRCodes");

    for (let id of selectedIds) {
        let res = generatedResults.find(r => r.id === id);
        if (res) {
            let baseName = getQrFilename(res.original, res.id);
            if (includeImg) {
                let base64Data = res.imgUrl.split(',')[1];
                folder.file(`${baseName}.${res.formatExt}`, base64Data, { base64: true });
            }
            if (includeHtml) {
                try {
                    let htmlBlob = await fetch(res.html).then(r => r.blob());
                    folder.file(`${baseName}.html`, htmlBlob);
                } catch(e){}
            }
        }
    }

    try {
        let content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `qrcodes_batch_${Date.now()}.zip`);
    } catch (err) {
        alert("Lỗi tạo file ZIP");
    }
    btn.innerText = origText;
    btn.disabled = false;
}

window.openPreview = function(id) {
    let res = generatedResults.find(r => r.id === id);
    if (!res) return;

    let modalQrImg = document.getElementById("modalQrImg");
    if(modalQrImg) modalQrImg.src = res.imgUrl;
    let modalUrl = document.getElementById("modalUrl");
    if(modalUrl) modalUrl.innerText = res.original;

    let btnPng = document.getElementById("modalBtnPng");
    if(btnPng) {
        btnPng.innerText = `${window.i18n.t('preview.btnDownload')} ${res.formatName}`;
        btnPng.onclick = () => downloadSingle(id, 'img');
    }
    
    let btnHtml = document.getElementById("modalBtnHtml");
    if(btnHtml) {
        btnHtml.innerText = `${window.i18n.t('preview.btnDownload')} HTML`;
        btnHtml.onclick = () => downloadSingle(id, 'html');
    }

    let previewModal = document.getElementById("previewModal");
    if(previewModal) {
        if(typeof updateStaticText === "function") updateStaticText();
        previewModal.classList.add("show");
    }
}

window.closeModal = function() {
    let previewModal = document.getElementById("previewModal");
    if(previewModal) previewModal.classList.remove("show");
}

window.onclick = function (event) {
    let modal = document.getElementById("previewModal");
    if (event.target == modal) {
        closeModal();
    }
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
            let statGenerated = document.getElementById('stat-generated');
            if(statGenerated) statGenerated.innerHTML =
                `<span class="stat-label">${window.i18n.t('footer.totalQR')}</span><span class="stat-value">${data.totalQR ?? 0}</span>`;
            
            let statScans = document.getElementById('stat-scans');
            if(statScans) statScans.innerHTML =
                `<span class="stat-label">${window.i18n.t('footer.totalScans')}</span><span class="stat-value">${data.totalSessions ?? 0}</span>`;
            
            let statTodayScans = document.getElementById('stat-today-scans');
            if(statTodayScans) statTodayScans.innerHTML =
                `<span class="stat-label">${window.i18n.t('footer.todayScans')}</span><span class="stat-value">${data.todaySessions ?? 0}</span>`;

            let lastUp = data.lastUpdated ? new Date(data.lastUpdated).toLocaleString(window.i18n.locale === 'vi' ? 'vi-VN' : 'en-US') : window.i18n.t('footer.never');
            let statLastUpdated = document.getElementById('stat-last-updated');
            if(statLastUpdated) statLastUpdated.innerHTML =
                `<span class="stat-label">${window.i18n.t('footer.lastUpdated')}</span><span class="stat-value" style="font-size:1rem;margin-top:0.5rem;">${lastUp}</span>`;

            document.querySelectorAll('.stat-box').forEach(el => el.classList.remove('skeleton'));
        })
        .catch(e => console.error('Stats error', e));
}

// Initial fetch
document.addEventListener('DOMContentLoaded', () => {
    fetchStats();
});

window.updateStaticText = function() {
    if(typeof fetchStats === 'function') {
        fetchStats();
    }
    // Update Modal
    let modalTitle = document.getElementById('modalTitle');
    if(modalTitle) modalTitle.innerText = window.i18n.t('preview.title');
    
    let modalQrImg = document.getElementById('modalQrImg');
    if(modalQrImg) modalQrImg.alt = window.i18n.t('preview.title');

    // Update VietQR Button
    let vietqrBtnText = document.getElementById('vietqrBtnText');
    if(vietqrBtnText) vietqrBtnText.innerText = window.i18n.t('footer.vietqr');

    let copyright1Text = document.getElementById('copyright1Text');
    if(copyright1Text) copyright1Text.innerText = window.i18n.t('footer.copyright1');

    let copyright2Text = document.getElementById('copyright2Text');
    if(copyright2Text) copyright2Text.innerText = window.i18n.t('footer.copyright2');

    let disclaimerText = document.getElementById('disclaimerText');
    if(disclaimerText) disclaimerText.innerText = window.i18n.t('footer.disclaimer');
}

// Run immediately for static texts (defer script)
if(typeof window.updateStaticText === 'function') {
    window.updateStaticText();
}

window.toggleFooter = function() {
    const content = document.getElementById('footerCollapsibleContent');
    const icon = document.getElementById('footerToggleIcon');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.className = 'el-icon-arrow-down';
    } else {
        content.style.display = 'none';
        icon.className = 'el-icon-arrow-up';
    }
}
