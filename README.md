<div align="center">
  <h1>Super QR Tool 🚀</h1>
  <p>A premium, feature-rich, and completely free static web application for generating and customizing QR Codes. Includes a dynamic hit counter and DDoS protection, ready for Cloudflare deployment.</p>
  <p>
    <a href="#english">🇬🇧 English</a> | <a href="#tiếng-việt">🇻🇳 Tiếng Việt</a>
  </p>
</div>

---

<a name="english"></a>
# Super QR Tool 🚀 (English)
*👉 [🇻🇳 Đọc bằng Tiếng Việt (Read in Vietnamese)](#tiếng-việt)*

Super QR Tool is a powerful, client-side static web application that allows you to easily generate, customize, and bulk-download QR codes. It includes serverless functions designed to run on Cloudflare Pages to provide a dynamic statistics counter (with "fake" values for credibility) and DDoS protection.

## ✨ Key Features

- **Multi-Type Support**: Create QR codes for URLs, vCards, Text, Emails, Social Media profiles, Wi-Fi, Phone numbers, SMS, GPS Locations, Events, Crypto wallets, and App Store links.
- **Advanced Customization**: Shapes, colors, logos, borders, and text insertions.
- **Live Preview**: All customizations are rendered instantly in real-time.
- **Hit Counter with Fake Data**: Displays a generation counter that uses Cloudflare KV and a seeded algorithm to simulate realistic usage numbers over time.
- **DDoS Protection Ready**: Designed to work seamlessly behind Cloudflare WAF.

## 🌐 Deployment to Cloudflare Pages (Recommended)

Super QR Tool is designed to be hosted on **Cloudflare Pages** for free. The backend functions (hit counter) use Cloudflare Pages Functions and Cloudflare KV.

### Step 1: Push to GitHub
1. Create a new repository on GitHub.
2. Push the code from this folder to your new GitHub repository.

### Step 2: Create a Cloudflare KV Namespace
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages** -> **KV**.
3. Click **Create a namespace**, name it `QR_STATS`, and click **Add**.

### Step 3: Deploy via Cloudflare Pages
1. Go to **Workers & Pages** -> **Overview** and click **Create application**.
2. Select the **Pages** tab and click **Connect to Git**.
3. Select your GitHub repository and click **Begin setup**.
4. Leave the "Build command" and "Build output directory" empty (since it's a static site).
5. Before clicking "Save and Deploy", go to **Environment variables (advanced)** -> **KV namespace bindings**.
   - Variable name: `QR_STATS`
   - KV namespace: Select the `QR_STATS` namespace you created in Step 2.
6. Click **Save and Deploy**. Cloudflare will build and host your site.

### Step 4: Configure Anti-DDoS (Security)
To ensure the hit counter API doesn't get spammed:
1. Go to your Cloudflare Dashboard -> select the domain attached to your Pages project.
2. Navigate to **Security** -> **WAF** -> **Rate limiting rules**.
3. Create a rule for requests to `/api/track`. For example: 
   - If requests > 20 per 10 seconds per IP, then **Block**.
4. Navigate to **Security** -> **Bots** and enable **Bot Fight Mode**.
5. Navigate to **Security** -> **Settings** and set the **Security Level** to **High**.

---

<a name="tiếng-việt"></a>
# Super QR Tool 🚀 (Tiếng Việt)
*👉 [🇬🇧 Read in English (Đọc bằng Tiếng Anh)](#english)*

Super QR Tool là một công cụ web tĩnh cao cấp, đa tính năng và hoàn toàn miễn phí. Phiên bản này được tích hợp mã nguồn backend Serverless chạy trên Cloudflare Pages để hiển thị bộ đếm lượt truy cập (với thuật toán tạo số liệu giả lập tăng độ uy tín) cùng khả năng chống DDoS cực mạnh.

## ✨ Tính năng nổi bật

- **Hỗ trợ đa dạng**: Tạo mã QR cho URL, vCard, Văn bản, Mạng xã hội, Wi-Fi, Điện thoại...
- **Tùy chỉnh chuyên sâu**: Đổi màu sắc, kiểu dáng, chèn hình nền, logo, viền, chữ...
- **Bộ đếm lượt truy cập (Có tính năng Fake)**: Sử dụng Cloudflare KV để đếm số lượt tạo QR. Đi kèm với thuật toán giả lập tăng tự nhiên theo thời gian để tăng độ uy tín.
- **Sẵn sàng chống DDoS**: Tương thích hoàn hảo với hệ thống tường lửa (WAF) của Cloudflare.

## 🌐 Hướng dẫn triển khai lên Cloudflare Pages (Miễn phí 100%)

Để các tính năng thống kê hoạt động, bạn **BẮT BUỘC** phải deploy dự án này lên Cloudflare Pages và kết nối cơ sở dữ liệu KV.

### Bước 1: Đẩy mã nguồn lên GitHub
1. Tạo một kho lưu trữ (repository) mới trên GitHub.
2. Đẩy toàn bộ mã nguồn thư mục này lên GitHub.

### Bước 2: Tạo Cloudflare KV Namespace (Database)
1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Chuyển đến mục **Workers & Pages** -> **KV**.
3. Bấm **Create a namespace**, nhập tên là `QR_STATS`, rồi bấm **Add**.

### Bước 3: Deploy lên Cloudflare Pages
1. Trong Cloudflare Dashboard, vào **Workers & Pages** -> **Overview** -> Bấm **Create application**.
2. Chọn tab **Pages** và bấm **Connect to Git**.
3. Chọn repository chứa mã nguồn của bạn trên GitHub và bấm **Begin setup**.
4. Phần "Build command" và "Build output directory" để trống hoàn toàn.
5. Cuộn xuống phần **Environment variables (advanced)**, tìm mục **KV namespace bindings** và thêm:
   - Variable name: `QR_STATS`
   - KV namespace: Chọn `QR_STATS` bạn vừa tạo ở Bước 2.
6. Bấm **Save and Deploy**. Đợi vài phút để Cloudflare triển khai dự án.

### Bước 4: Thiết lập Chống DDoS & Spam
Để bảo vệ API đếm lượt tải không bị spam request:
1. Chọn tên miền dự án của bạn trên Cloudflare.
2. Vào phần **Security** -> **WAF** -> **Rate limiting rules**.
3. Tạo một quy tắc (rule) chặn spam vào API: Nếu đường dẫn chứa `/api/track` và có hơn 20 request / 10 giây từ cùng 1 IP -> Hành động: **Block**.
4. Vào **Security** -> **Bots** -> Bật **Bot Fight Mode**.
5. Vào **Security** -> **Settings** -> Chỉnh **Security Level** thành **High**.

## 💻 Công nghệ sử dụng
- **Frontend Core**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Cloudflare Pages Functions (JS) & Cloudflare KV
