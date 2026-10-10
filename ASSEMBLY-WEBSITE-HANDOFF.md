# BBuidl AI Lab — Assembly website

## Phạm vi hoàn thành

Trang giới thiệu tại `index.html`, thiết kế từ hệ Assembly: xanh ultramarine, nền sáng, typography Sora/Manrope, sơ đồ vector/code. Đây là entry page duy nhất của website.

CSS/JS tách ở `assets/site/assembly.css` và `assets/site/assembly.js`. Không có framework, analytics, tracker hay dependency tải từ CDN. Nội dung tiếng Anh để phục vụ đối tượng quốc tế, đã cập nhật theo định vị do chủ sở hữu cung cấp: startup R&D và tối ưu workflow/harness dùng model Claude để xây sản phẩm công nghệ nhanh và chú trọng chất lượng cho khách hàng.
Đã tích hợp chuyển đổi đa ngôn ngữ client-side hỗ trợ 3 tùy chọn: Tiếng Việt (VI), Tiếng Anh Mỹ (EN - US) và Tiếng Anh Anh (EN - UK), lưu trữ tùy chọn vào localStorage và hỗ trợ tham số `?lang=`.

Chức năng: chuyển đổi ngôn ngữ Việt / Anh US / Anh UK; hiển thị địa chỉ công ty chính thức (`200/89/8/13 Đường Bưng Ông Thoàn, Phường Long Trường, TP.HCM, 70000, Việt Nam`) tại khối liên hệ và chân trang; điều hướng theo section; 3 tabs về harness R&D, tối ưu workflow và product engineering hỗ trợ chuột và phím mũi tên/Home/End; mailto; sao chép email kèm phản hồi thành công/thất bại; fallback không JavaScript; hỗ trợ giảm chuyển động. Sơ đồ được ghi rõ là minh họa, không phải case study khách hàng, benchmark hoặc AI demo đang kết nối API.
Giao diện Contact và Footer được chuẩn hóa theo review: nhãn DIRECT PHONE / ĐIỆN THOẠI TRỰC TIẾP nằm trên một dòng riêng biệt; liên kết tel không mang ký hiệu ↗; chân trang súc tích nhưng giữ trọn vẹn địa chỉ, điện thoại và Leadership.

## Cần xác nhận trước khi gửi hồ sơ startup

1. **Sản phẩm và khách hàng:** định vị chính đã được chủ sở hữu xác nhận. Có thể bổ sung sản phẩm/case study cụ thể, khách hàng mục tiêu và giai đoạn hiện tại khi có dữ liệu được phép công khai.
2. **Vai trò của Claude:** chủ sở hữu xác nhận sử dụng model Claude trong workflow/harness phát triển sản phẩm. Trang mô tả đúng vai trò này, không tự thêm tên model, kiến trúc API hoặc tự nhận được Anthropic/Claude công nhận hay chấp nhận vào chương trình.
3. **Email:** `team@bbuidl.xyz` do chủ sở hữu cung cấp; đã đồng bộ hiển thị, mailto, sao chép và thông báo dự phòng. Chưa thử gửi thư; kiểm tra vận hành hộp thư trước khi public là bước của chủ sở hữu.
4. **Danh tính:** bổ sung founder/team, pháp nhân hoặc thông tin doanh nghiệp công khai nếu có và nếu phù hợp. Không tự bịa tên, địa chỉ, con số người dùng hay đối tác.
Đã cập nhật đầy đủ thông tin định danh và liên hệ do chủ sở hữu cung cấp:
- Địa chỉ trụ sở:
  - Tiếng Việt: `200/89/8/13 Đường Bưng Ông Thoàn, Phường Long Trường, TP.HCM, 70000, Việt Nam`.
  - Tiếng Anh (US/UK): `200/89/8/13 Bung Ong Thoan Street, Long Truong Ward, Ho Chi Minh City, 70000, Vietnam`.
- Điện thoại trực tiếp: `0962 618 952` (nhãn nằm dòng riêng biệt, tel link không gắn ký hiệu ↗).
- LinkedIn CEO & Founder: `https://www.linkedin.com/in/0x62616f`.
- LinkedIn Chief Marketing Officer (CMO): `https://linkedin.com/in/nganpham98`.
5. **Địa chỉ công khai:** tên miền do chủ sở hữu xác nhận là `bbuidl.xyz`. Canonical/og:url đã đặt `https://bbuidl.xyz/`, og:image dùng URL tuyệt đối tại tên miền này. Khi triển khai, dùng `index.html` làm trang chủ và giữ đường dẫn assets tương ứng. Hiện vẫn ở localhost, chưa deploy, đổi DNS hoặc submit hồ sơ.

Không thể bảo đảm việc tham gia/chấp thuận chương trình startup chỉ dựa trên giao diện website. Chưa thực hiện nghiên cứu điều kiện hiện hành của chương trình trong lần thiết kế này.

## Kiểm tra

- Mở `index.html` trực tiếp hoặc qua static host; không cần Node.js hay build step.
- Kiểm tra trực tiếp bằng trình duyệt: desktop 1440 px, mobile 390 px, tab switching, keyboard navigation, copy email và console.

Các bundle ZIP logo hiện có được giữ nguyên như tài nguyên bàn giao trước đó; chúng không phải bản đóng gói website hiện tại.
