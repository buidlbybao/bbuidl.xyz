const tablist = document.querySelector('[role="tablist"]');
const tabs = [...tablist.querySelectorAll('[role="tab"]')];

function activateTab(tab, moveFocus = false) {
  for (const item of tabs) {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  }
  if (moveFocus) tab.focus();
}

for (const [index, tab] of tabs.entries()) {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); activateTab(tabs[next], true); }
  });
}

// Keep the accessibility orientation in sync with the responsive layout.
const tabletLayout = matchMedia('(min-width: 601px) and (max-width: 800px)');
const setOrientation = () => tablist.setAttribute('aria-orientation', tabletLayout.matches ? 'horizontal' : 'vertical');
setOrientation();
tabletLayout.addEventListener('change', setOrientation);

const copyButton = document.querySelector('[data-copy]');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  copyButton.disabled = true;
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['en-US'];
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    copyStatus.textContent = dict.copy_success;
  } catch {
    copyStatus.textContent = dict.copy_error(copyButton.dataset.copy);
  } finally {
    copyButton.disabled = false;
  }
});

const TRANSLATIONS = {
  'en-US': {
    meta_title: 'BBuidl AI Lab — Intelligence, assembled.',
    meta_desc: 'BBuidl AI Lab researches and optimizes AI workflows and harnesses using Claude models to build technology products faster, with quality at the core.',
    skip_content: 'Skip to content',
    nav_lab: 'The lab',
    nav_explorations: 'What we do',
    nav_approach: 'Our approach',
    nav_contact: 'Let’s talk',
    hero_eyebrow: '<span class="square" aria-hidden="true"></span> AI R&amp;D / Workflows / Product engineering',
    hero_title: 'Intelligence,<br><span>assembled.</span>',
    hero_desc: 'Claude-powered workflows.<br class="desktop-break"> Better products, built faster.',
    hero_detail: 'We research and optimize AI workflows and harnesses using Claude models — helping us build technology products for our customers with speed, care and a focus on quality.',
    hero_btn_explore: 'See what we do <span aria-hidden="true">↗</span>',
    hero_btn_discuss: 'Discuss your product <span aria-hidden="true">↗</span>',
    fig_top_title: 'BB / ASSEMBLY',
    fig_bottom_text: 'Independent parts.<br>Shared purpose.',
    hero_footer_left: 'From workflow research to customer products.',
    hero_footer_scroll: 'SCROLL TO EXPLORE <span aria-hidden="true">↓</span>',
    lab_index: '01 / THE LAB',
    lab_title: 'The model is only<br>the beginning.',
    lab_lead: 'BBuidl AI Lab is a startup focused on the systems around AI: the workflows and harnesses that turn model capabilities into practical product development.',
    lab_muted: 'We combine R&amp;D with hands-on engineering, using Claude models to build technology products for customers. A harness is the surrounding setup — context, tools, execution and feedback — that helps a model work effectively on a task.',
    principle_01_h3: 'Research the workflow.',
    principle_01_p: 'Understand the task and its constraints. Improve the way models, tools and people work together.',
    principle_02_h3: 'Build for the customer.',
    principle_02_p: 'Connect technical choices to the product a customer needs, from the first idea to implementation.',
    principle_03_h3: 'Move fast, with care.',
    principle_03_p: 'Shorten the path to a working product while keeping quality and human review part of the process.',
    explorations_index: '02 / WHAT WE DO',
    explorations_aside: 'RESEARCH → WORKFLOW → PRODUCT',
    explorations_title: 'Research the system.<br>Build the product.',
    explorations_subtitle: 'R&amp;D and product engineering, connected.<br>Claude models at work inside the workflow.',
    tab_01_strong: 'Harness R&amp;D',
    tab_01_small: 'Build the system around the model.',
    tab_02_strong: 'Workflow optimization',
    tab_02_small: 'Connect tasks, tools and human review.',
    tab_03_strong: 'Product engineering',
    tab_03_small: 'Turn customer needs into working software.',
    concept_badge: 'Illustrative',
    diag_ctx: 'Context',
    diag_tools: 'Tools',
    diag_feedback: 'Feedback',
    diag_answer: '<span class="tiny-square" aria-hidden="true"></span> A working product iteration <span aria-hidden="true">↗</span>',
    panel_01_h3: 'Better systems around capable models.',
    panel_01_p: 'Research how context, tools and feedback can help Claude models work more effectively on product development tasks.',
    flow_step_01: '<span>01</span>Define the task<i aria-hidden="true">↓</i>',
    flow_step_02: '<span>02</span>Develop with Claude<i aria-hidden="true">↓</i>',
    flow_step_03: '<span>03</span>Test and review<i aria-hidden="true">↓</i>',
    flow_step_04: '<span>04</span>Refine the next iteration',
    panel_02_h3: 'Less friction between idea and implementation.',
    panel_02_p: 'Optimize how tasks move through model-assisted development, tools and review, with speed and quality as shared goals.',
    window_label: 'PRODUCT ITERATION',
    window_p: 'A customer need, turned into working software.',
    source_tag: 'Customer feedback → next iteration',
    opt_build: 'Build',
    opt_review: 'Review',
    opt_refine: 'Refine',
    panel_03_h3: 'R&amp;D that serves a real product.',
    panel_03_p: 'Apply workflow and harness improvements to technology products built around customers’ requirements.',
    exploration_note: 'Diagrams illustrate our areas of work. They are not live AI outputs, customer case studies or performance benchmarks.',
    approach_index: '03 / OUR APPROACH',
    approach_title: 'Small loops.<br>Serious attention.',
    approach_desc: 'Our working principle: learn through making,<br>then be honest about what works.',
    step_01_h3: 'Understand.',
    step_01_p: 'Define the customer’s product requirements, priorities and constraints before choosing the workflow.',
    step_02_h3: 'Assemble.',
    step_02_p: 'Bring Claude models, context and tools together in a harness suited to the development task.',
    step_03_h3: 'Evaluate.',
    step_03_p: 'Review working iterations against product requirements. Look for errors, gaps and opportunities to improve.',
    step_04_h3: 'Refine.',
    step_04_p: 'Feed lessons back into the product and the workflow, improving how the next iteration gets built.',
    belief_index: 'THE IDEA BEHIND BBUIDL',
    belief_title: 'Progress isn’t just<br>what a model can do.<br><span>It’s what people can<br>do with it.</span>',
    belief_mark: 'Two parts. One shared purpose.<br>The Assembly mark.',
    contact_index: '04 / LET’S CONNECT',
    contact_title: 'Have a product<br>worth building?',
    contact_desc: 'Tell us what your customers need.<br>Let’s explore how to build it.',
    contact_label: 'START A CONVERSATION',
    contact_footnote: 'Product development · Workflow R&amp;D · Collaboration',
    contact_copy: 'Copy email address <span aria-hidden="true">⧉</span>',
    copy_success: 'Email copied. Ready when you are.',
    copy_error: (email) => `Please select and copy ${email}, or use the email link.`,
    phone_label: 'DIRECT PHONE',
    leadership_label: 'LEADERSHIP',
    role_ceo: 'CEO &amp; Founder',
    role_cmo: 'Chief Marketing Officer (CMO)',
    address_label: 'COMPANY ADDRESS',
    company_address: '200/89/8/13 Bung Ong Thoan Street, Long Truong Ward, Ho Chi Minh City, 70000, Vietnam',
    footer_slogan: 'Applied intelligence.<br>Assembled with care.',
    footer_meta_label: 'Headquarters / Trụ sở:',
    footer_leadership_label: 'Leadership / Ban điều hành:',
    phone_prefix: 'Tel:',
    footer_back_to_top: 'Back to top <span aria-hidden="true">↑</span>',
    footer_brand_kit: 'Brand kit <span aria-hidden="true">↓</span>'
  },
  'en-GB': {
    meta_title: 'BBuidl AI Lab — Intelligence, assembled.',
    meta_desc: 'BBuidl AI Lab researches and optimises AI workflows and harnesses using Claude models to build technology products faster, with quality at the core.',
    skip_content: 'Skip to content',
    nav_lab: 'The lab',
    nav_explorations: 'What we do',
    nav_approach: 'Our approach',
    nav_contact: 'Let’s talk',
    hero_eyebrow: '<span class="square" aria-hidden="true"></span> AI R&amp;D / Workflows / Product engineering',
    hero_title: 'Intelligence,<br><span>assembled.</span>',
    hero_desc: 'Claude-powered workflows.<br class="desktop-break"> Better products, built faster.',
    hero_detail: 'We research and optimise AI workflows and harnesses using Claude models — helping us build technology products for our customers with speed, care and a focus on quality.',
    hero_btn_explore: 'See what we do <span aria-hidden="true">↗</span>',
    hero_btn_discuss: 'Discuss your product <span aria-hidden="true">↗</span>',
    fig_top_title: 'BB / ASSEMBLY',
    fig_bottom_text: 'Independent parts.<br>Shared purpose.',
    hero_footer_left: 'From workflow research to customer products.',
    hero_footer_scroll: 'SCROLL TO EXPLORE <span aria-hidden="true">↓</span>',
    lab_index: '01 / THE LAB',
    lab_title: 'The model is only<br>the beginning.',
    lab_lead: 'BBuidl AI Lab is a startup focused on the systems around AI: the workflows and harnesses that turn model capabilities into practical product development.',
    lab_muted: 'We combine R&amp;D with hands-on engineering, using Claude models to build technology products for customers. A harness is the surrounding setup — context, tools, execution and feedback — that helps a model work effectively on a task.',
    principle_01_h3: 'Research the workflow.',
    principle_01_p: 'Understand the task and its constraints. Improve the way models, tools and people work together.',
    principle_02_h3: 'Build for the customer.',
    principle_02_p: 'Connect technical choices to the product a customer needs, from the first idea to implementation.',
    principle_03_h3: 'Move fast, with care.',
    principle_03_p: 'Shorten the path to a working product while keeping quality and human review part of the process.',
    explorations_index: '02 / WHAT WE DO',
    explorations_aside: 'RESEARCH → WORKFLOW → PRODUCT',
    explorations_title: 'Research the system.<br>Build the product.',
    explorations_subtitle: 'R&amp;D and product engineering, connected.<br>Claude models at work inside the workflow.',
    tab_01_strong: 'Harness R&amp;D',
    tab_01_small: 'Build the system around the model.',
    tab_02_strong: 'Workflow optimisation',
    tab_02_small: 'Connect tasks, tools and human review.',
    tab_03_strong: 'Product engineering',
    tab_03_small: 'Turn customer needs into working software.',
    concept_badge: 'Illustrative',
    diag_ctx: 'Context',
    diag_tools: 'Tools',
    diag_feedback: 'Feedback',
    diag_answer: '<span class="tiny-square" aria-hidden="true"></span> A working product iteration <span aria-hidden="true">↗</span>',
    panel_01_h3: 'Better systems around capable models.',
    panel_01_p: 'Research how context, tools and feedback can help Claude models work more effectively on product development tasks.',
    flow_step_01: '<span>01</span>Define the task<i aria-hidden="true">↓</i>',
    flow_step_02: '<span>02</span>Develop with Claude<i aria-hidden="true">↓</i>',
    flow_step_03: '<span>03</span>Test and review<i aria-hidden="true">↓</i>',
    flow_step_04: '<span>04</span>Refine the next iteration',
    panel_02_h3: 'Less friction between idea and implementation.',
    panel_02_p: 'Optimise how tasks move through model-assisted development, tools and review, with speed and quality as shared goals.',
    window_label: 'PRODUCT ITERATION',
    window_p: 'A customer need, turned into working software.',
    source_tag: 'Customer feedback → next iteration',
    opt_build: 'Build',
    opt_review: 'Review',
    opt_refine: 'Refine',
    panel_03_h3: 'R&amp;D that serves a real product.',
    panel_03_p: 'Apply workflow and harness improvements to technology products built around customers’ requirements.',
    exploration_note: 'Diagrams illustrate our areas of work. They are not live AI outputs, customer case studies or performance benchmarks.',
    approach_index: '03 / OUR APPROACH',
    approach_title: 'Small loops.<br>Serious attention.',
    approach_desc: 'Our working principle: learn through making,<br>then be honest about what works.',
    step_01_h3: 'Understand.',
    step_01_p: 'Define the customer’s product requirements, priorities and constraints before choosing the workflow.',
    step_02_h3: 'Assemble.',
    step_02_p: 'Bring Claude models, context and tools together in a harness suited to the development task.',
    step_03_h3: 'Evaluate.',
    step_03_p: 'Review working iterations against product requirements. Look for errors, gaps and opportunities to improve.',
    step_04_h3: 'Refine.',
    step_04_p: 'Feed lessons back into the product and the workflow, improving how the next iteration gets built.',
    belief_index: 'THE IDEA BEHIND BBUIDL',
    belief_title: 'Progress isn’t just<br>what a model can do.<br><span>It’s what people can<br>do with it.</span>',
    belief_mark: 'Two parts. One shared purpose.<br>The Assembly mark.',
    contact_index: '04 / LET’S CONNECT',
    contact_title: 'Have a product<br>worth building?',
    contact_desc: 'Tell us what your customers need.<br>Let’s explore how to build it.',
    contact_label: 'START A CONVERSATION',
    contact_footnote: 'Product development · Workflow R&amp;D · Collaboration',
    contact_copy: 'Copy email address <span aria-hidden="true">⧉</span>',
    copy_success: 'Email copied. Ready when you are.',
    copy_error: (email) => `Please select and copy ${email}, or use the email link.`,
    phone_label: 'DIRECT PHONE',
    leadership_label: 'LEADERSHIP',
    role_ceo: 'CEO &amp; Founder',
    role_cmo: 'Chief Marketing Officer (CMO)',
    address_label: 'COMPANY ADDRESS',
    company_address: '200/89/8/13 Bung Ong Thoan Street, Long Truong Ward, Ho Chi Minh City, 70000, Vietnam',
    footer_slogan: 'Applied intelligence.<br>Assembled with care.',
    footer_meta_label: 'Headquarters / Trụ sở:',
    footer_leadership_label: 'Leadership / Ban điều hành:',
    phone_prefix: 'Tel:',
    footer_back_to_top: 'Back to top <span aria-hidden="true">↑</span>',
    footer_brand_kit: 'Brand kit <span aria-hidden="true">↓</span>'
  },
  'vi': {
    meta_title: 'BBuidl AI Lab — Trí tuệ, hoàn thiện qua lắp ghép.',
    meta_desc: 'BBuidl AI Lab nghiên cứu và tối ưu hóa quy trình làm việc cùng harness ứng dụng các mô hình Claude để xây dựng sản phẩm công nghệ nhanh hơn với trọng tâm là chất lượng.',
    skip_content: 'Chuyển đến nội dung chính',
    nav_lab: 'Phòng lab',
    nav_explorations: 'Lĩnh vực hoạt động',
    nav_approach: 'Phương pháp',
    nav_contact: 'Liên hệ',
    hero_eyebrow: '<span class="square" aria-hidden="true"></span> R&amp;D AI / Quy trình / Kỹ thuật sản phẩm',
    hero_title: 'Trí tuệ nhân tạo,<br><span>lắp ghép chuẩn xác.</span>',
    hero_desc: 'Quy trình tối ưu cùng các mô hình Claude.<br class="desktop-break"> Sản phẩm tốt hơn, hoàn thiện nhanh hơn.',
    hero_detail: 'Chúng tôi nghiên cứu và tối ưu hóa quy trình làm việc cùng hệ thống harness ứng dụng các mô hình Claude — giúp xây dựng sản phẩm công nghệ cho khách hàng với tốc độ cao, sự cẩn trọng và chất lượng vượt trội.',
    hero_btn_explore: 'Xem lĩnh vực hoạt động <span aria-hidden="true">↗</span>',
    hero_btn_discuss: 'Trao đổi về sản phẩm <span aria-hidden="true">↗</span>',
    fig_top_title: 'BB / LẮP GHÉP',
    fig_bottom_text: 'Từng phần độc lập.<br>Chung một mục tiêu.',
    hero_footer_left: 'Từ nghiên cứu quy trình đến sản phẩm thực tế cho khách hàng.',
    hero_footer_scroll: 'CUỘN ĐỂ KHÁM PHÁ <span aria-hidden="true">↓</span>',
    lab_index: '01 / PHÒNG LAB',
    lab_title: 'Mô hình AI chỉ là<br>điểm khởi đầu.',
    lab_lead: 'BBuidl AI Lab là một startup tập trung vào các hệ thống xoay quanh AI: quy trình và harness giúp biến năng lực mô hình thành sản phẩm thực tế.',
    lab_muted: 'Chúng tôi kết hợp nghiên cứu R&amp;D với kỹ thuật thực chiến, sử dụng các mô hình Claude để xây dựng sản phẩm công nghệ cho khách hàng. Harness là thiết lập bao quanh — ngữ cảnh, công cụ, thực thi và phản hồi — giúp mô hình hoạt động hiệu quả cho từng tác vụ.',
    principle_01_h3: 'Nghiên cứu quy trình.',
    principle_01_p: 'Thấu hiểu tác vụ và ràng buộc. Nâng cao cách thức mô hình, công cụ và con người phối hợp cùng nhau.',
    principle_02_h3: 'Xây dựng vì khách hàng.',
    principle_02_p: 'Gắn kết các quyết định kỹ thuật với sản phẩm khách hàng cần, từ ý tưởng ban đầu đến hiện thực hóa.',
    principle_03_h3: 'Tốc độ đi đôi với cẩn trọng.',
    principle_03_p: 'Rút ngắn con đường đến sản phẩm hoàn chỉnh mà vẫn đảm bảo chất lượng và sự kiểm duyệt của con người.',
    explorations_index: '02 / LĨNH VỰC HOẠT ĐỘNG',
    explorations_aside: 'NGHIÊN CỨU → QUY TRÌNH → SẢN PHẨM',
    explorations_title: 'Nghiên cứu hệ thống.<br>Xây dựng sản phẩm.',
    explorations_subtitle: 'Kết nối chặt chẽ giữa R&amp;D và kỹ thuật sản phẩm.<br>Các mô hình Claude vận hành trực tiếp trong quy trình.',
    tab_01_strong: 'R&amp;D Harness',
    tab_01_small: 'Xây dựng hệ thống vận hành quanh mô hình.',
    tab_02_strong: 'Tối ưu hóa quy trình',
    tab_02_small: 'Gắn kết tác vụ, công cụ và sự kiểm duyệt của con người.',
    tab_03_strong: 'Kỹ thuật phát triển sản phẩm',
    tab_03_small: 'Biến nhu cầu khách hàng thành phần mềm thực tế.',
    concept_badge: 'Minh họa',
    diag_ctx: 'Ngữ cảnh',
    diag_tools: 'Công cụ',
    diag_feedback: 'Phản hồi',
    diag_answer: '<span class="tiny-square" aria-hidden="true"></span> Bản thử nghiệm sản phẩm hoàn chỉnh <span aria-hidden="true">↗</span>',
    panel_01_h3: 'Hệ thống tối ưu quanh các mô hình mạnh mẽ.',
    panel_01_p: 'Nghiên cứu cách ngữ cảnh, công cụ và phản hồi giúp các mô hình Claude làm việc hiệu quả hơn trong phát triển sản phẩm.',
    flow_step_01: '<span>01</span>Xác định tác vụ<i aria-hidden="true">↓</i>',
    flow_step_02: '<span>02</span>Phát triển cùng Claude<i aria-hidden="true">↓</i>',
    flow_step_03: '<span>03</span>Kiểm thử &amp; đánh giá<i aria-hidden="true">↓</i>',
    flow_step_04: '<span>04</span>Cải tiến phiên bản tiếp theo',
    panel_02_h3: 'Giảm thiểu ma sát giữa ý tưởng và triển khai.',
    panel_02_p: 'Tối ưu hóa dòng chảy công việc qua phát triển có mô hình hỗ trợ, công cụ và đánh giá, hướng đến tốc độ và chất lượng.',
    window_label: 'PHIÊN BẢN SẢN PHẨM',
    window_p: 'Nhu cầu của khách hàng, chuyển hóa thành phần mềm.',
    source_tag: 'Phản hồi từ khách hàng → phiên bản tiếp theo',
    opt_build: 'Xây dựng',
    opt_review: 'Đánh giá',
    opt_refine: 'Tinh chỉnh',
    panel_03_h3: 'R&amp;D phục vụ sản phẩm thực tế.',
    panel_03_p: 'Ứng dụng những cải tiến về quy trình và harness vào các sản phẩm công nghệ xây dựng theo yêu cầu khách hàng.',
    exploration_note: 'Các sơ đồ thể hiện minh họa lĩnh vực hoạt động của chúng tôi. Đây không phải kết quả AI trực tiếp, case study khách hàng hay bài kiểm tra hiệu năng chuẩn.',
    approach_index: '03 / PHƯƠNG PHÁP',
    approach_title: 'Vòng lặp ngắn.<br>Tập trung cao độ.',
    approach_desc: 'Nguyên tắc làm việc của chúng tôi: học hỏi qua thực hành,<br>và thẳng thắn nhìn nhận những gì thực sự hiệu quả.',
    step_01_h3: 'Thấu hiểu.',
    step_01_p: 'Làm rõ yêu cầu, độ ưu tiên và các ràng buộc của khách hàng trước khi lựa chọn quy trình phát triển.',
    step_02_h3: 'Lắp ghép.',
    step_02_p: 'Tập hợp các mô hình Claude, ngữ cảnh và công cụ trong một harness phù hợp với tác vụ phát triển.',
    step_03_h3: 'Đánh giá.',
    step_03_p: 'Kiểm tra các phiên bản đang chạy đối chiếu với yêu cầu sản phẩm. Tìm lỗi, khoảng trống và cơ hội hoàn thiện.',
    step_04_h3: 'Tinh chỉnh.',
    step_04_p: 'Đưa bài học thực tế trở lại sản phẩm và quy trình, nâng cao chất lượng xây dựng các vòng lặp tiếp theo.',
    belief_index: 'Ý TƯỞNG PHÍA SAU BBUIDL',
    belief_title: 'Tiến bộ không chỉ là<br>những gì mô hình làm được.<br><span>Mà là những gì con người<br>có thể làm với nó.</span>',
    belief_mark: 'Hai phần độc lập. Một mục tiêu chung.<br>Biểu tượng Assembly.',
    contact_index: '04 / KẾT NỐI VỚI CHÚNG TÔI',
    contact_title: 'Bạn có một sản phẩm<br>đáng để xây dựng?',
    contact_desc: 'Hãy chia sẻ điều khách hàng của bạn cần.<br>Cùng nhau khám phá phương thức tạo dựng.',
    contact_label: 'BẮT ĐẦU CUỘC TRÒ CHUYỆN',
    contact_footnote: 'Phát triển sản phẩm · R&amp;D quy trình · Hợp tác',
    contact_copy: 'Sao chép địa chỉ email <span aria-hidden="true">⧉</span>',
    copy_success: 'Đã sao chép email. Chúng tôi sẵn sàng khi bạn sẵn sàng.',
    copy_error: (email) => `Vui lòng chọn và sao chép ${email}, hoặc sử dụng liên kết gửi email.`,
    phone_label: 'ĐIỆN THOẠI TRỰC TIẾP',
    leadership_label: 'BAN ĐIỀU HÀNH',
    role_ceo: 'Nhà sáng lập &amp; CEO',
    role_cmo: 'Giám đốc Tiếp thị (CMO)',
    address_label: 'ĐỊA CHỈ CÔNG TY',
    company_address: '200/89/8/13 Đường Bưng Ông Thoàn, Phường Long Trường, TP.HCM, 70000, Việt Nam',
    footer_slogan: 'Trí tuệ ứng dụng.<br>Hoàn thiện với sự cẩn trọng.',
    footer_meta_label: 'Trụ sở chính / Địa chỉ:',
    footer_leadership_label: 'Ban điều hành / Leadership:',
    phone_prefix: 'Hotline:',
    footer_back_to_top: 'Về đầu trang <span aria-hidden="true">↑</span>',
    footer_brand_kit: 'Bộ nhận diện thương hiệu <span aria-hidden="true">↓</span>'
  }
};

let currentLang = 'en-US';

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const active = btn.dataset.langBtn === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  if (dict.meta_title) document.title = dict.meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.meta_desc) metaDesc.setAttribute('content', dict.meta_desc);

  try {
    localStorage.setItem('bbuidl_lang', lang);
  } catch (_) {}
}

document.querySelectorAll('[data-lang-btn]').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.langBtn);
  });
});

try {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const storedLang = localStorage.getItem('bbuidl_lang');
  const initialLang = urlLang || storedLang;
  if (initialLang && TRANSLATIONS[initialLang]) {
    setLanguage(initialLang);
  }
} catch (_) {}
