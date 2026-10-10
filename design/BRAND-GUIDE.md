# BBuidl AI Lab

Bộ nhận diện vector cho doanh nghiệp công nghệ AI. Tên hiển thị: **BBuidl AI Lab**. Tên miền: **BBuidl.xyz**. Giữ đúng hai chữ B viết hoa; không tự đổi thành BBuild hay BBuILD.

## Ý tưởng

Hai chữ B dùng chung nét đứng và cấu trúc. Hai khoảng âm lặp bên phải tạo nhịp điệu của việc tiếp tục xây dựng. Biểu tượng được vẽ bằng đường Bézier, không phải ảnh raster trace. Phần chữ sử dụng Manrope Bold với khoảng chữ tùy chỉnh; dòng AI LAB nhỏ, giãn chữ để phân cấp rõ.

Chủ đích thẩm mỹ: rõ ràng, bền vững, tập trung vào chữ và hình khối. Không sử dụng bộ não, robot, mạch điện, hiệu ứng phát sáng hoặc gradient trong logo.

## File nên dùng

| Nhu cầu | File trong bộ tài nguyên |
| --- | --- |
| Logo chính trên nền sáng | `dist/svg/bbuidl-logo-forest.svg` |
| Logo chính trên nền tối | `dist/svg/bbuidl-logo-white.svg` |
| In một màu đen | `dist/svg/bbuidl-logo-black.svg` |
| Thanh điều hướng website | `dist/svg/bbuidl-horizontal.svg` |
| Bố cục đứng, có tên miền | `dist/svg/bbuidl-stacked.svg` |
| Biểu tượng độc lập | `dist/svg/bbuidl-mark-forest.svg` |
| Biểu tượng nhỏ 16–23 px | `dist/svg/bbuidl-mark-micro.svg` |
| Avatar | `dist/png/bbuidl-avatar-1024w.png` |
| Favicon | `dist/favicon.ico` và `dist/svg/bbuidl-favicon.svg` |
| Ảnh chia sẻ link | `dist/social/bbuidl-open-graph.png` |
| Bảng trình bày | `dist/brand-board.png` |

Toàn bộ chữ trong SVG đã được chuyển thành path. File không phụ thuộc font cài trên máy, không có ảnh nhúng, không tải tài nguyên ngoài. Bản trắng có nền trong suốt; xem trên nền tối để thấy rõ. Các bản `on-paper` và `on-forest` đã có nền.

## Bảng màu

| Màu | HEX | RGB | Vai trò |
| --- | --- | --- | --- |
| Forest | `#183E35` | 24, 62, 53 | Logo, chữ chính, nền tối |
| Paper | `#F4F1E9` | 244, 241, 233 | Nền chính |
| Citron | `#D9EF87` | 217, 239, 135 | Điểm nhấn, biểu tượng trên nền tối |

Logo vẫn phải nhận diện được khi dùng một màu. Citron dùng cùng Forest, không dùng làm chữ nhỏ trên nền Paper. Mã màu là sRGB; khi in, yêu cầu nhà in chuyển đổi theo profile giấy/máy và duyệt bản proof, không tự coi giá trị CMYK quy đổi chung là tiêu chuẩn.

## Khoảng trống và kích thước

- Quy ước `u` bằng độ dày nét đứng biểu tượng, tức 20/134 chiều cao biểu tượng chính.
- Giữ khoảng trống tối thiểu `1u` quanh hình và chữ. Khi có không gian, dùng `2u`.
- Logo hai dòng: khuyến nghị rộng tối thiểu 220 px khi hiển thị số.
- Logo ngang: khuyến nghị rộng tối thiểu 240 px để AI LAB không quá nhỏ.
- Biểu tượng chuẩn: khuyến nghị cao tối thiểu 24 px. Ở 16–23 px dùng bản micro với khoảng âm mở rộng.
- Favicon là bản micro riêng trong ô vuông có nền, xuất 16/32/48 px trong ICO.
- In ấn: ưu tiên logo chính rộng từ 40 mm; vẫn cần kiểm tra thực tế theo công nghệ in.
- Không kéo méo, xoay, thêm viền, bóng, gradient hoặc đổi khoảng cách giữa biểu tượng và chữ.
- Tên miền là thành phần phụ, không cố ghép vào favicon hoặc logo quá nhỏ.

## Font và bản quyền

Manrope là font mã nguồn mở theo SIL Open Font License 1.1. Bản font và giấy phép có trong `assets/fonts/`. Các file logo được outline; font đi kèm chỉ phục vụ biên tập và tái tạo. Nội dung tiếng Anh “Built with intent.” và “Ideas, built into intelligence.” trên các bố cục chỉ là copy minh họa, không phải slogan đã được doanh nghiệp phê duyệt.

Biểu tượng được dựng mới trong dự án này. Chưa thực hiện tra cứu nhãn hiệu hoặc kiểm tra xung đột với mọi logo trên thị trường; cần tra cứu trước khi đăng ký bảo hộ.

## Tái tạo và kiểm tra

Các asset thương hiệu đã xuất sẵn trong `dist/`; mở `index.html` để xem website. Tài liệu này lưu lại quy tắc nhận diện đã chọn; không kèm pipeline build hoặc các phác thảo ban đầu.
