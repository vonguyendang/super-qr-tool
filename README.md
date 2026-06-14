<div align="center">
  <h1>Super QR Tool 🚀</h1>
  <p>A premium, feature-rich, and completely free static web application for generating and customizing QR Codes.</p>
  <p>
    <a href="#english">🇬🇧 English</a> | <a href="#tiếng-việt">🇻🇳 Tiếng Việt</a>
  </p>
</div>

---

<a name="english"></a>
# Super QR Tool 🚀 (English)
*👉 [🇻🇳 Đọc bằng Tiếng Việt (Read in Vietnamese)](#tiếng-việt)*

Super QR Tool is a powerful, client-side only static web application that allows you to easily generate, customize, and bulk-download QR codes. It runs entirely in your web browser, requiring absolutely **no backend**, **no database**, and **no installation**.

## ✨ Key Features

- **Multi-Type Support**: Create QR codes for URLs, vCards, Text, Emails, Social Media profiles, Wi-Fi, Phone numbers, SMS, GPS Locations, Events, Crypto wallets, and App Store links.
- **Bulk Generation**: Easily generate hundreds of QR codes at once by pasting a list of URLs/texts or by importing an Excel/CSV file.
- **Advanced Customization**:
  - **Styles**: Change the shapes of the data patterns and the "eyes" of the QR code.
  - **Colors**: Apply solid colors, gradients, or even background images.
  - **Logos**: Insert your own logo into the center of the QR code with customizable shapes.
  - **Frames & Borders**: Add creative borders to make your QR code stand out.
  - **Text**: Insert a custom text above or below the QR code.
- **VietQR Transfer Codes**: Built-in integration to quickly generate Vietnamese Bank Transfer (VietQR) codes.
- **Live Preview**: All customizations are rendered instantly in real-time.
- **Flexible Export**: Download single or bulk QR codes in formats such as PNG, JPG, SVG, HTML, and ZIP archives.
- **Bilingual Interface**: Seamlessly switch between English and Vietnamese.

## 🚀 Installation & Quick Start

Since this is a fully static web application, no Node.js environment or Web Server is strictly required for local usage. 

### Method 1: Direct Execution (No Server Needed)
1. **Download the project**: Clone this repository or download it as a ZIP file.
   ```bash
   git clone https://github.com/vonguyendang/super-qr-tool.git
   ```
2. **Open the App**: Simply double-click the `index.html` file to open it in your preferred web browser (Chrome, Firefox, Safari). The app will work perfectly offline!

### Method 2: Local Web Server (For Development)
If you prefer to run it via a local server (to avoid any strict browser CORS issues when loading local assets):
1. **Using Python (Built-in)**:
   ```bash
   cd super-qr-tool
   python3 -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your browser.
2. **Using Node.js (http-server)**:
   ```bash
   npx http-server .
   ```

## 📖 Usage Guide

### 1. Generating a Single QR Code
1. Select the desired tab based on your data type (e.g., URL, vCard, Text, Location).
2. Fill out the form fields with your data.
3. The QR Code will dynamically update in the **Preview Panel** on the right side.

### 2. Bulk Generation (Multiple QR Codes)
1. At the top of the interface, you will see a large text area.
2. Paste multiple lines of data (one URL/text per line), or click **Import from Excel/CSV** to upload a spreadsheet.
3. Click **Generate QR Codes**. 
4. A table will appear listing all the generated QR codes. You can preview them individually or click **Download All (ZIP)** to grab them all at once.

### 3. Advanced Customization
1. Click the **Setting** button (gear icon) in the preview panel.
2. Navigate through the tabs (**Style, Logo, Border, Color, etc.**) to modify the aesthetic of your QR code.
3. Click **Download** to save your customized QR code to your device.

## 🌐 Deployment

Super QR Tool is extremely lightweight and can be hosted on any static hosting provider for **free** in just a few clicks.

- **GitHub Pages**: Simply push this code to a repository and enable GitHub Pages on the `main` branch.
- **Vercel / Netlify / Cloudflare Pages**: Drag and drop the project folder into their dashboard, or link your GitHub repository. No build command or output directory configuration is needed.
- **Standard Web Hosting (cPanel/FTP)**: Upload the entire folder to your `public_html` directory.

## 💻 Technologies Used

- **Frontend Core**: HTML5, CSS3, Vanilla JavaScript
- **Libraries**:
  - [Vue.js](https://vuejs.org/) (via CDN) for data binding & i18n.
  - [Element UI](https://element.eleme.io/) for UI components.
  - [JSZip](https://stuk.github.io/jszip/) & [FileSaver.js](https://github.com/eligrey/FileSaver.js) for bulk downloading.
  - [SheetJS (xlsx)](https://sheetjs.com/) for Excel data parsing.

---

<a name="tiếng-việt"></a>
# Super QR Tool 🚀 (Tiếng Việt)
*👉 [🇬🇧 Read in English (Đọc bằng Tiếng Anh)](#english)*

Super QR Tool là một công cụ web tĩnh cao cấp, đa tính năng và hoàn toàn miễn phí cho phép bạn tạo, tùy chỉnh và tải hàng loạt mã QR một cách chuyên nghiệp. Ứng dụng này chạy 100% trên trình duyệt của bạn, **không cần backend**, **không cần cơ sở dữ liệu** và **không yêu cầu cài đặt phần mềm**.

## ✨ Tính năng nổi bật

- **Hỗ trợ đa dạng**: Tạo mã QR cho Đường dẫn (URL), Danh thiếp (vCard), Văn bản, Email, Mạng xã hội, Wi-Fi, Điện thoại, SMS, Vị trí GPS, Sự kiện, Tiền điện tử (Crypto), và Liên kết tải App.
- **Tạo mã hàng loạt (Bulk Generation)**: Dễ dàng tạo hàng trăm mã QR cùng lúc bằng cách dán danh sách URL/văn bản hoặc tải lên tệp Excel/CSV.
- **Tùy chỉnh chuyên sâu**:
  - **Kiểu dáng**: Thay đổi hình dạng của các điểm dữ liệu và "mắt" mã QR.
  - **Màu sắc**: Sử dụng màu đơn sắc, đổ màu (gradient), hoặc chèn hình nền.
  - **Thêm Logo**: Chèn logo vào giữa mã QR với nhiều tùy chọn cắt gọt (tròn, vuông).
  - **Khung viền**: Thêm các loại khung viền sáng tạo và bắt mắt.
  - **Thêm văn bản**: Chèn thêm dòng chữ hướng dẫn ở phía trên hoặc dưới mã.
- **Mã chuyển khoản VietQR**: Tích hợp sẵn nút tạo mã QR chuyển khoản ngân hàng Việt Nam (VietQR) nhanh chóng.
- **Xem trước trực tiếp (Live Preview)**: Mọi thay đổi về màu sắc, thiết kế đều được cập nhật và hiển thị ngay lập tức.
- **Tải xuống linh hoạt**: Hỗ trợ tải mã đơn lẻ hoặc hàng loạt dưới định dạng PNG, JPG, SVG, HTML và tệp nén ZIP.
- **Đa ngôn ngữ**: Chuyển đổi mượt mà giữa tiếng Anh và tiếng Việt.

## 🚀 Cài đặt & Khởi chạy

Vì đây là một ứng dụng web tĩnh thuần túy, bạn hoàn toàn không cần cài đặt môi trường Node.js hay bất kỳ Web Server phức tạp nào.

### Cách 1: Chạy trực tiếp (Không cần Server)
1. **Tải dự án**: Clone kho lưu trữ này hoặc tải về dưới dạng file ZIP.
   ```bash
   git clone https://github.com/vonguyendang/super-qr-tool.git
   ```
2. **Mở ứng dụng**: Chỉ cần nhấn đúp vào tệp `index.html` để mở bằng trình duyệt web của bạn (Chrome, Cốc Cốc, Safari...). Ứng dụng hoạt động hoàn hảo ngay cả khi không có kết nối mạng (Offline)!

### Cách 2: Chạy qua Local Server (Dành cho nhà phát triển)
Nếu bạn muốn chạy ứng dụng qua localhost (để tránh một số lỗi CORS khắt khe của trình duyệt khi load các file local):
1. **Sử dụng Python (Có sẵn trên máy Mac/Linux)**:
   ```bash
   cd super-qr-tool
   python3 -m http.server 8000
   ```
   Sau đó truy cập `http://localhost:8000` trên trình duyệt.
2. **Sử dụng Node.js (http-server)**:
   ```bash
   npx http-server .
   ```

## 📖 Hướng dẫn sử dụng

### 1. Tạo một mã QR đơn lẻ
1. Chọn tab tương ứng với loại dữ liệu bạn muốn tạo (VD: Đường dẫn, Danh thiếp, Vị trí...).
2. Điền thông tin vào các trường dữ liệu.
3. Mã QR của bạn sẽ tự động cập nhật ở **Khung xem trước** bên phải màn hình.

### 2. Tạo mã hàng loạt (Nhiều mã QR cùng lúc)
1. Ở phần trên cùng của giao diện, bạn sẽ thấy một ô nhập liệu lớn.
2. Dán nhiều dòng dữ liệu vào ô này (mỗi dòng là một mã QR), hoặc bấm **Import từ Excel/CSV** để tải lên file bảng tính.
3. Bấm nút **Tạo mã QR**.
4. Một bảng danh sách các mã QR sẽ hiện ra. Bạn có thể xem trước từng mã hoặc bấm **Tải tất cả (ZIP)** để tải về toàn bộ cùng lúc.

### 3. Tùy chỉnh giao diện nâng cao
1. Nhấp vào nút **Cài đặt** (biểu tượng bánh răng) ở khu vực xem trước.
2. Sử dụng các tab (**Style, Logo, Border, Color...**) để biến tấu màu sắc và hình dáng mã QR theo ý muốn.
3. Bấm **Tải xuống** để lưu tác phẩm đã được thiết kế về máy tính của bạn.

## 🌐 Triển khai (Deployment)

Super QR Tool cực kỳ nhẹ và có thể được triển khai lên mạng **miễn phí** chỉ trong vài cú click chuột.

- **GitHub Pages**: Đẩy mã nguồn này lên kho lưu trữ GitHub của bạn và bật tính năng GitHub Pages ở nhánh `main`.
- **Vercel / Netlify / Cloudflare Pages**: Kéo thả thư mục dự án vào trang quản trị của họ, hoặc liên kết trực tiếp với repository GitHub. Không cần cấu hình lệnh Build hay thư mục Output.
- **Hosting Truyền thống (cPanel/FTP)**: Upload toàn bộ các file trong thư mục này vào thư mục `public_html` của bạn là xong.

## 💻 Công nghệ sử dụng

- **Mã nguồn cốt lõi**: HTML5, CSS3, Vanilla JavaScript
- **Thư viện tích hợp**:
  - [Vue.js](https://vuejs.org/) (qua CDN): Xử lý giao diện và đa ngôn ngữ.
  - [Element UI](https://element.eleme.io/): Bộ công cụ xây dựng giao diện.
  - [JSZip](https://stuk.github.io/jszip/) & [FileSaver.js](https://github.com/eligrey/FileSaver.js): Xử lý tải xuống file nén ZIP hàng loạt.
  - [SheetJS (xlsx)](https://sheetjs.com/): Đọc dữ liệu từ file Excel.
