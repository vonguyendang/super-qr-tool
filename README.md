# qrCode-tool: Công cụ tạo mã QR và Barcode

Đây là một công cụ web miễn phí cho phép bạn tạo và tùy chỉnh mã QR và mã vạch (barcode) một cách dễ dàng và nhanh chóng. Ứng dụng này chạy hoàn toàn trên trình duyệt của bạn, không yêu cầu cài đặt.

## Tính năng nổi bật

- **Tạo nhiều loại mã**: Hỗ trợ tạo cả mã QR (2D) và các loại mã vạch (1D).
- **Tùy chỉnh đa dạng**:
    - **Kiểu dáng**: Thay đổi hình dạng của các điểm dữ liệu và "mắt" của mã QR.
    - **Màu sắc**: Sử dụng màu đơn sắc, màu gradient, hoặc thậm chí là hình ảnh cho nền và mã.
    - **Thêm Logo**: Chèn logo của bạn vào giữa mã QR và tùy chỉnh kiểu hiển thị (tròn, vuông).
    - **Khung viền**: Thêm các loại khung viền sáng tạo để làm nổi bật mã QR.
    - **Thêm văn bản**: Chèn thêm một hoặc hai dòng văn bản bên trên hoặc bên dưới mã.
- **Xem trước trực tiếp**: Mọi thay đổi đều được cập nhật và hiển thị ngay lập tức.
- **Tải xuống linh hoạt**: Hỗ trợ tải mã về dưới nhiều định dạng khác nhau như PNG, JPG, SVG, và GIF.
- **Giao diện thân thiện**: Dễ dàng sử dụng với các tùy chọn được sắp xếp hợp lý.

## Hướng dẫn sử dụng

Vì đây là một ứng dụng web tĩnh, bạn không cần phải cài đặt bất kỳ web server nào.

1.  **Mở ứng dụng**:
    - Clone hoặc tải về toàn bộ dự án này.
    - Mở tệp `qr-code-generator/index.html` bằng trình duyệt web của bạn (ví dụ: Chrome, Firefox).

2.  **Tạo mã QR cơ bản**:
    - Nhập nội dung bạn muốn mã hóa (ví dụ: một URL, đoạn văn bản, email) vào ô "QR code data".
    - Mã QR sẽ tự động được tạo và hiển thị ở khung "Preview" bên phải.

3.  **Tùy chỉnh nâng cao**:
    - Nhấp vào nút **Setting** (biểu tượng bánh răng) để mở bảng điều khiển tùy chỉnh.
    - Sử dụng các tab (Style, Logo, Border, Color, v.v.) để thay đổi giao diện mã QR theo ý muốn.
    - Mọi thay đổi sẽ được áp dụng và hiển thị trong cửa sổ xem trước của hộp thoại cài đặt.

4.  **Tải về**:
    - Sau khi đã hài lòng với mã QR, nhấp vào nút **Download** ở màn hình chính hoặc trong hộp thoại cài đặt.
    - Chọn định dạng tệp bạn muốn và lưu về máy.

## Công nghệ sử dụng

- **Frontend**: HTML, CSS, JavaScript
- **Thư viện JavaScript**:
    - [Vue.js](https.vuejs.org/): Framework chính để xây dựng giao diện người dùng.
    - [Element UI](https://element.eleme.io/): Bộ công cụ UI cho Vue.js.
    - [jQuery](https://jquery.com/): Thư viện hỗ trợ thao tác DOM.
    - [qrcode.min.js](https://github.com/davidshimjs/qrcodejs): Thư viện tạo mã QR.
    - [bwip.js](https://github.com/metafloor/bwip-js): Thư viện tạo mã vạch.

## Cấu trúc thư mục

```
/
├── qr-code-generator/
│   └── index.html      # Trang chính của ứng dụng
├── themes/
│   ├── css/            # Các tệp CSS tùy chỉnh và của thư viện
│   ├── img/            # Hình ảnh, logo, và các tài nguyên đồ họa
│   └── js/             # Các tệp JavaScript của ứng dụng và thư viện
└── uploads/
    └── ...             # Thư mục (ví dụ) cho các tệp được tải lên
```
