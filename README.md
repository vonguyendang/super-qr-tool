# 🔲 QR Code Generator

Ứng dụng web tạo mã QR hiện đại, hỗ trợ nhiều loại nội dung, tạo hàng loạt, quản lý kết quả theo bảng có phân trang, tải xuống đơn lẻ hoặc hàng loạt dạng ZIP, chèn logo tùy chỉnh và thống kê số lượt tạo.

---

## ✨ Tính năng

### 🗂 Các loại mã QR hỗ trợ
| Tab | Nội dung |
|-----|----------|
| **Website** | URL đơn hoặc danh sách URL, hỗ trợ import Excel/CSV |
| **VCard** | Thẻ danh bạ điện tử (tên, điện thoại, email, công ty, website) |
| **Text** | Văn bản thuần tuý |
| **Email** | Địa chỉ email, chủ đề, nội dung |
| **Facebook** | Link Profile hoặc Page Facebook |
| **Wifi** | SSID, mật khẩu, loại bảo mật (WPA/WEP/None) |
| **Phone** | Số điện thoại |
| **SMS** | Số điện thoại + nội dung tin nhắn |

### 📋 Tạo QR hàng loạt (Tab Website)
- Nhập danh sách URL vào textarea (mỗi dòng 1 URL).
- Import từ file **Excel (.xlsx, .xls)** hoặc **CSV** — tự động đọc tất cả ô có giá trị.
- Tải **file Excel mẫu** để làm theo định dạng chuẩn.
- Validate URL không hợp lệ trước khi tạo, thông báo lỗi rõ ràng.

### 🖼 Logo tùy chỉnh
- Upload ảnh logo (PNG, JPG, SVG...) để chèn vào giữa mã QR.
- Logo được vẽ **hình vuông, bo 4 góc**, có **khoảng đệm trắng** xung quanh.
- Đồng nhất giữa các định dạng xuất (PNG, SVG, HTML).

### 📊 Bảng kết quả có phân trang
- Hiển thị kết quả dưới dạng bảng gọn gàng.
- Phân trang tự động khi có **hơn 10 mã QR**, 10 dòng mỗi trang.
- Thanh phân trang có nút ← →, số trang, dấu `…`, nhãn `X–Y / Tổng`.

### ✅ Chọn lọc xuyên trang
- Trạng thái tick chọn được **lưu bộ nhớ riêng** (không phụ thuộc DOM), cho phép chọn rải rác ở nhiều trang khác nhau mà không bị mất khi chuyển trang.
- **Badge đếm** hiển thị số mã đang được chọn ngay cạnh nút tải ZIP.
- Nút **"Chọn tất cả"** chọn toàn bộ mã QR trên tất cả các trang.
- Checkbox trong header bảng chỉ chọn/bỏ chọn trang hiện tại.

### 📥 Tải xuống linh hoạt
- **Tải từng mã:** PNG, SVG, HTML ngay trên mỗi dòng bảng.
- **Tải hàng loạt:** Chọn định dạng (PNG / SVG / HTML) rồi tải tất cả mã đã tick thành 1 file **ZIP**.

### 🏷 Đặt tên file thông minh
| Loại URL | Tên file |
|----------|----------|
| Trỏ đến file có đuôi mở rộng (`.pdf`, `.png`...) | Lấy theo tên file gốc |
| Trang web thông thường | `qr_DDMMYYYY_HH-mm-ss_ID` |

### 🔍 Preview mã QR
- Nút **Xem** mở Modal phóng to mã QR.
- Có nút tải nhanh PNG / SVG / HTML ngay trong Modal.

### 📐 Chất lượng ảnh
- Kích thước render: **1200 × 1200 px** (phù hợp in ấn).
- Mức sửa lỗi: `H` (30%) — đảm bảo mã QR vẫn đọc được khi logo che một phần.

### 📈 Thống kê (Footer)
| Ô thống kê | Ý nghĩa |
|------------|---------|
| Tổng QR Đã Tạo | Tổng số mã QR đã sinh ra từ trước đến nay |
| Số Lần Tạo QR | Số lần nhấn nút Generate |
| Lần Tạo Hôm Nay | Số lần nhấn Generate trong ngày hiện tại |
| Cập Nhật Lần Cuối | Thời gian của lần nhấn gần nhất |

Số liệu được tự động cập nhật sau mỗi lần nhấn Generate.

---

## 🗂 Cấu trúc thư mục

```
qrcode-generator/
├── index.html          # Giao diện chính
├── style.css           # CSS thiết kế
├── script.js           # Logic JavaScript
├── qrcode.min.js       # Thư viện QRCode (offline, tránh lỗi CDN)
├── api/
│   ├── track.php       # Nhận sự kiện generate và ghi vào logs.json
│   └── stats.php       # Trả về thống kê từ logs.json (JSON API)
├── data/
│   └── logs.json       # File lưu lịch sử generate (tự tạo)
└── README.md
```

---

## 🚀 Hướng dẫn chạy

### Yêu cầu
- PHP 7.4+ (hoặc 8.x)
- Không cần database, không cần Node.js

### Chạy local

```bash
cd qrcode-generator
php -S localhost:8000
```

Truy cập: [http://localhost:8000](http://localhost:8000)

### Deploy lên hosting / VPS

1. Upload toàn bộ thư mục lên thư mục `public_html` (hoặc `www`) của hosting.
2. Đảm bảo thư mục `data/` có **quyền ghi**:
   ```bash
   chmod 755 data/
   ```
3. Nếu thư mục `data/` chưa tồn tại, `api/track.php` sẽ tự tạo khi có lần generate đầu tiên.

> ⚠️ **Bảo mật:** Nên thêm rule trong `.htaccess` để chặn truy cập trực tiếp vào thư mục `data/`:
> ```apache
> <FilesMatch "\.json$">
>     Order Allow,Deny
>     Deny from all
> </FilesMatch>
> ```

---

## 📦 Thư viện sử dụng

| Thư viện | Vai trò |
|----------|---------|
| [`qrcode`](https://github.com/soldair/node-qrcode) | Tạo mã QR (PNG/SVG) — lưu offline tại `qrcode.min.js` |
| [JSZip](https://stuk.github.io/jszip/) | Đóng gói nhiều file thành `.zip` ngay trên trình duyệt |
| [FileSaver.js](https://github.com/eligrey/FileSaver.js/) | Kích hoạt tải file từ trình duyệt |
| [SheetJS (xlsx)](https://sheetjs.com/) | Đọc file Excel/CSV và tạo file Excel mẫu |

---

## 🔌 API nội bộ

### `POST api/track.php`
Ghi nhận 1 lần nhấn Generate.

**Request body:**
```json
{ "qr_count": 15 }
```

**Response:**
```json
{ "success": true }
```

---

### `GET api/stats.php`
Trả về thống kê tổng hợp.

**Response:**
```json
{
  "totalQR": 150,
  "totalSessions": 12,
  "todaySessions": 3,
  "lastUpdated": "2026-05-08T21:00:00+07:00"
}
```

---

## 📝 Định dạng `data/logs.json`

Mỗi lần nhấn Generate tạo ra 1 bản ghi:

```json
[
  {
    "event": "generate",
    "qr_count": 10,
    "timestamp": "2026-05-08T21:00:00+07:00"
  }
]
```

---

## 📱 Responsive

Giao diện tương thích tốt trên cả:
- 🖥 Desktop (≥ 1024px)
- 📱 Mobile (< 768px): Tab tự xuống dòng, bảng kết quả cuộn ngang, các nút action xếp dọc.
