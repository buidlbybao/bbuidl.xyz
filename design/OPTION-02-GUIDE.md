# BBuidl AI Lab — Phương án 02: Assembly

Đây là phương án độc lập để lựa chọn, không thay thế hoặc sửa phương án 01.

## Ý tưởng và lựa chọn thiết kế

Hai chữ **b** thường ghép cạnh nhau, chữ sau cao hơn chữ trước. Khối biểu tượng gợi việc xây dựng từ các thành phần nhỏ, liên kết và tiến về phía trước. Tên thương hiệu vẫn viết chính xác **BBuidl AI Lab**, tên miền **BBuidl.xyz**; việc viết thường trong biểu tượng là lựa chọn hình học, không đổi tên thương hiệu.

Biểu tượng được vẽ trực tiếp bằng vector trong ô 160 × 160 đơn vị. Nét đứng 24 đơn vị, độ nâng 32 đơn vị, góc ngoài cắt 18 đơn vị theo góc 45°. Hai khoảng rỗng được giữ thông thoáng. Bản chính dùng một đường bao liền để tránh khe do khử răng cưa ở điểm ghép. Bản micro mở rộng khoảng rỗng để cải thiện hiển thị nhỏ.

Chữ Sora Semibold có khoảng chữ tùy chỉnh; AI LAB dùng Sora Medium, giãn chữ. Sora được chọn sau khi đối chiếu với Space Grotesk: hai chữ B không có phần nhô ngang bên trái, tạo cảm giác thống nhất hơn với biểu tượng vuông vức. Tất cả chữ trong SVG đều đã outline, không yêu cầu máy nhận file có font.

## So với phương án 01

| Phương án 01 — Shared Structure | Phương án 02 — Assembly |
| --- | --- |
| Chữ B hoa, đường cong lặp | Hai chữ b thường ghép bậc |
| Xanh rừng, ngà, chanh | Ultramarine, đen than, lavender nhạt |
| Trầm, ổn định, thiên doanh nghiệp | Kỹ thuật, năng động, thiên sản phẩm |

Đề xuất thẩm mỹ: chọn bản 02 nếu muốn nhấn mạnh tinh thần startup xây sản phẩm AI; chọn bản 01 nếu muốn thương hiệu trầm và chững chạc hơn. Không trộn biểu tượng của một bản với phần chữ hoặc bảng màu của bản còn lại.

## Tài nguyên

Thư mục `dist/option-02/` chứa:

- `svg/bbuidl-02-logo.svg`: logo chính, biểu tượng xanh và chữ đen than, nền trong suốt.
- `svg/bbuidl-02-logo-black.svg`, `bbuidl-02-logo-white.svg`, `bbuidl-02-logo-blue.svg`: phiên bản một màu.
- `svg/bbuidl-02-logo-inverse.svg`: chữ trắng và biểu tượng lavender cho nền đen than.
- `svg/bbuidl-02-logo-on-paper.svg`, `bbuidl-02-logo-on-ink.svg`: phiên bản có nền sẵn.
- `svg/bbuidl-02-horizontal.svg`: logo ngang cho thanh điều hướng; có bản trắng tương ứng.
- `svg/bbuidl-02-stacked.svg`: bố cục dọc có tên miền.
- `svg/bbuidl-02-mark.svg`: biểu tượng chuẩn, có thêm bản đen và trắng.
- `svg/bbuidl-02-mark-micro.svg`: biểu tượng mở rộng khoảng âm cho 16–24 px.
- `png/`: các phiên bản PNG tương ứng, chiều rộng được ghi trong tên file. Logo chính có bản rộng 2.560 px.
- `png/bbuidl-02-avatar-1024w.png`: avatar 1.024 × 1.024 px.
- `favicon.ico`: favicon chứa 16, 32 và 48 px. `svg/bbuidl-02-favicon.svg` là bản vector.
- `social/bbuidl-02-open-graph.png`: ảnh chia sẻ link 1.200 × 630 px.
- `logo-preview.png`, `brand-board.png`, `comparison.png`: bản xem nhanh, bảng nhận diện, so sánh với phương án 01. Có SVG tương ứng.
- `qa/optical-proof.png`: tờ kiểm tra biểu tượng nhỏ; không phải tài nguyên thương hiệu.

## Màu sắc và sử dụng

| Vai trò | HEX |
| --- | --- |
| Ultramarine — biểu tượng, nền nhấn | `#3847E8` |
| Ink — chữ, nền tối | `#171A25` |
| Paper — nền sáng | `#F1F2F4` |
| Lavender — biểu tượng trên Ink | `#DCDFFF` |
| Trắng — phiên bản đảo màu | `#FFFFFF` |

- Giữ khoảng trống tối thiểu bằng một nét đứng biểu tượng (24/160 chiều cao biểu tượng), ưu tiên gấp đôi khi có đủ diện tích.
- Logo chính khuyến nghị rộng từ 240 px, logo ngang từ 280 px để AI LAB đủ rõ. Với không gian nhỏ hơn, dùng biểu tượng độc lập.
- Biểu tượng chuẩn dùng từ 32 px; 16–24 px dùng bản micro. Favicon dùng bản nền xanh riêng, không thu nhỏ cả tên công ty.
- Avatar được chừa khoảng an toàn để biểu tượng không bị cắt khi hiển thị tròn.
- Không kéo méo, xoay, tách hai chữ b, đổi độ nâng hoặc thêm bóng/gradient/viền.
- Không đặt biểu tượng xanh ultramarine trực tiếp trên nền đen than: dùng lavender hoặc trắng.
- Khi in, ưu tiên SVG một màu. Mã màu là sRGB, cần nhà in chuyển đổi theo profile vật liệu và duyệt proof thực tế.

## Phạm vi và giấy phép

Biểu tượng được dựng mới cho dự án này. Chưa thực hiện tra cứu xung đột nhãn hiệu; cần tra cứu trước khi đăng ký bảo hộ.

Sora dùng SIL Open Font License; file font và giấy phép nằm trong `assets/fonts/sora/`. Bản phác thảo Space Grotesk chỉ nằm trong workspace, không phải font của phương án bàn giao. Các dòng tiếng Anh trên bảng là copy minh họa, không phải slogan đã được doanh nghiệp duyệt.

## Nguồn và kiểm tra trong workspace

Các asset của hệ Assembly đã xuất sẵn trong `dist/option-02/`. Bộ ZIP bàn giao tập trung vào file sử dụng và hướng dẫn. Website dùng trang gốc `index.html` sau khi giải nén đúng cấu trúc.
