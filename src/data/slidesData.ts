export interface SlideMeta {
  id: string;
  index: number;
  sectionLabel: string;
  title: string;
  shortTitle: string;
  summary: string;
}

export const SLIDES_META: SlideMeta[] = [
  {
    id: 'cover',
    index: 0,
    sectionLabel: 'Mở đầu',
    title: 'Tia X (Tia Röntgen)',
    shortTitle: 'Trang bìa',
    summary: 'Khám phá bức xạ điện từ bước sóng cực ngắn từ cơ chế tạo tia đến ứng dụng hiện đại.',
  },
  {
    id: 'history',
    index: 1,
    sectionLabel: 'Lịch sử phát minh',
    title: 'Phát hiện 1895 & Giải Nobel Vật lí 1901',
    shortTitle: 'Lịch sử 1895',
    summary: 'Wilhelm Conrad Röntgen phát hiện tia vô hình, đặt tên Tia X và chụp bàn tay đeo nhẫn.',
  },
  {
    id: 'wave-nature',
    index: 2,
    sectionLabel: '1.a · Giới thiệu',
    title: 'Giải mã bản chất sóng điện từ (1912–1914)',
    shortTitle: 'Sóng điện từ',
    summary: 'Max von Laue chứng minh tia X là sóng điện từ bước sóng 10⁻¹¹ m đến 10⁻⁸ m (Nobel 1914).',
  },
  {
    id: 'tube-structure',
    index: 3,
    sectionLabel: '1.b · Phương pháp tạo',
    title: 'Cấu tạo ống phát tia X chân không',
    shortTitle: 'Cấu tạo ống',
    summary: 'Ống thủy tinh chân không 10⁻³ mmHg, cathode nung nóng, anode đồng gắn bia Pt/W, cao áp 200 kV.',
  },
  {
    id: 'mechanism-process',
    index: 4,
    sectionLabel: '1.c · Cách tạo ra',
    title: 'Cơ chế tạo tia X & Hiệu suất 1% / 99%',
    shortTitle: 'Cơ chế 1%',
    summary: 'Electron gia tốc đập vào bia phát tia X (1%), hơn 99% làm nóng bia nên cần làm nguội.',
  },
  {
    id: 'two-types',
    index: 5,
    sectionLabel: 'Em có biết',
    title: 'Hai dạng tia X: Bức xạ hãm & Tia X đặc trưng',
    shortTitle: '2 dạng tia X',
    summary: 'Phân biệt bức xạ hãm (chủ yếu trong y học) và tia X đặc trưng (electron nhảy mức năng lượng).',
  },
  {
    id: 'control',
    index: 6,
    sectionLabel: '1.d · Điều khiển',
    title: 'Tia X cứng, mềm & 3 cách điều khiển',
    shortTitle: 'Điều khiển',
    summary: 'Điều chỉnh dòng nung cathode, hiệu điện thế anode–cathode và bộ lọc hấp thụ tia X mềm.',
  },
  {
    id: 'properties',
    index: 7,
    sectionLabel: 'Phần II · Tính chất',
    title: '4 Tính chất cốt lõi của tia X',
    shortTitle: 'Tính chất',
    summary: 'Truyền trong chân không, không lệch trong điện/từ trường, đâm xuyên mạnh, tác dụng sinh lí.',
  },
  {
    id: 'attenuation',
    index: 8,
    sectionLabel: 'Phần III · Suy giảm',
    title: 'Hiện tượng và định luật suy giảm tia X',
    shortTitle: 'Suy giảm',
    summary: 'Cường độ I = P/S (W·m⁻²) và công thức hấp thụ qua lớp vật liệu đồng nhất I = I₀e^(−μd).',
  },
  {
    id: 'app-medicine',
    index: 9,
    sectionLabel: 'Phần IV · Ứng dụng 1',
    title: 'Y học (Quan trọng nhất): Chẩn đoán & Xạ trị',
    shortTitle: 'Y học',
    summary: 'Chụp X-quang thường quy, chụp cắt lớp vi tính CT Scanner 3D và xạ trị tế bào ung thư nông.',
  },
  {
    id: 'app-industry',
    index: 10,
    sectionLabel: 'Phần IV · Ứng dụng 2',
    title: 'Công nghiệp & Cơ khí: Kiểm tra không phá hủy',
    shortTitle: 'Công nghiệp',
    summary: 'Quét phát hiện dị vật đóng gói thực phẩm và kiểm tra bọt khí, vết nứt ngầm trong mối hàn.',
  },
  {
    id: 'app-security',
    index: 11,
    sectionLabel: 'Phần IV · Ứng dụng 3',
    title: 'Kiểm tra an ninh sân bay, cửa khẩu',
    shortTitle: 'An ninh',
    summary: 'Soi chiếu hành lý, hàng hóa và phân tích mức hấp thụ để tô màu phân biệt chất hữu cơ & kim loại.',
  },
  {
    id: 'app-analysis',
    index: 12,
    sectionLabel: 'Phần IV · Ứng dụng 4',
    title: 'Phân tích cấu trúc & thành phần hóa học',
    shortTitle: 'EDX & XRD',
    summary: 'Phổ EDX/XRF xác định thành phần hóa học và nhiễu xạ XRD giải mã tinh thể, xoắn kép DNA.',
  },
  {
    id: 'app-astronomy',
    index: 13,
    sectionLabel: 'Phần IV · Ứng dụng 5',
    title: 'Thiên văn học tia X ngoài không gian',
    shortTitle: 'Thiên văn',
    summary: 'Nghiên cứu lỗ đen, sao neutron nhiệt độ hàng triệu độ C do khí quyển Trái Đất hấp thụ tia X.',
  },
  {
    id: 'safety',
    index: 14,
    sectionLabel: 'Phần IV · 6. An toàn',
    title: 'Tác hại & Biện pháp bảo vệ bức xạ',
    shortTitle: 'An toàn bức xạ',
    summary: 'Nguy cơ ion hóa gây tổn thương tế bào, tháo trang sức kim loại và mặc tạp dề Chì (Pb).',
  },
  {
    id: 'quiz',
    index: 15,
    sectionLabel: 'Tương tác thuyết trình',
    title: 'Câu hỏi củng cố & Thảo luận cùng lớp',
    shortTitle: 'Tương tác Q&A',
    summary: '4 câu hỏi trắc nghiệm nhanh kiểm tra kiến thức về cơ chế, điều khiển, suy giảm và an toàn tia X.',
  },
];

export interface HistoryMilestone {
  year: string;
  scientist: string;
  headline: string;
  detail: string;
  highlight: string;
}

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    year: '1895',
    scientist: 'Wilhelm Conrad Röntgen',
    headline: 'Phát hiện tình cờ trong phòng thí nghiệm',
    detail:
      'Nhà vật lí người Đức tình cờ phát hiện ra một loại tia vô hình phát ra từ ống tia cathode làm phát quang màn huỳnh quang gần đó, dù ống đã bọc giấy đen kín.',
    highlight: 'Vì chưa rõ bản chất nên ông đặt tên là Tia X ("X" tượng trưng cho ẩn số toán học), còn gọi là tia Rơn-ghen.',
  },
  {
    year: '1895',
    scientist: 'Dấu mốc vĩ đại',
    headline: 'Bức ảnh X-quang đầu tiên trên thế giới',
    detail:
      'Bức ảnh chụp X-quang đầu tiên trên thế giới là bàn tay đeo nhẫn của vợ ông. Lần đầu tiên con người quan sát được cấu trúc xương cơ quan trong cơ thể sống.',
    highlight: 'Xương và chiếc nhẫn kim loại cản tia X mạnh hơn mô mềm nên hiện hình rõ nét.',
  },
  {
    year: '1901',
    scientist: 'Giải Nobel Vật lí đầu tiên',
    headline: 'Vinh danh phát minh thay đổi nhân loại',
    detail:
      'Phát hiện ra loại tia đặc biệt giúp quan sát cấu trúc cơ quan trong cơ thể mang về cho Wilhelm Conrad Röntgen giải Nobel Vật lí đầu tiên trong lịch sử (1901).',
    highlight: 'Nobel Vật lí 1901 — bước khởi đầu cho ngành chẩn đoán hình ảnh hiện đại.',
  },
];

export interface TubeComponentInfo {
  id: 'glass' | 'cathode' | 'anode' | 'voltage' | 'cooling';
  name: string;
  badge: string;
  summary: string;
  specs: string[];
}

export const TUBE_COMPONENTS: TubeComponentInfo[] = [
  {
    id: 'glass',
    name: 'Ống thủy tinh chân không',
    badge: 'Áp suất ~ 10⁻³ mmHg',
    summary:
      'Ống thủy tinh được hút chân không, áp suất trong ống khoảng 10⁻³ mmHg để chùm electron chuyển động tự do mà không va chạm phân tử khí.',
    specs: ['Chân không cao: 10⁻³ mmHg', 'Ngăn cản tán xạ electron', 'Cửa sổ thoát tia X'],
  },
  {
    id: 'cathode',
    name: 'Cathode (Dây nung nóng)',
    badge: 'Cực âm · Nguồn nung riêng',
    summary:
      'Cathode thường là dây kim loại được nung nóng bằng một nguồn điện riêng để phát ra các electron.',
    specs: ['Nung nóng bằng nguồn điện riêng', 'Phát ra chùm electron tự do', 'Dòng nung quyết định cường độ tia'],
  },
  {
    id: 'anode',
    name: 'Anode & Bia (Đối cathode)',
    badge: 'Cực dương · Đồng gắn Pt / W',
    summary:
      'Anode là cực dương, đối diện cathode (bằng đồng). Trên bề mặt anode gắn tấm kim loại như platinum (Pt) hoặc wolfram (W), có nguyên tử lượng lớn dùng để hứng chùm electron (gọi là đối cathode hoặc bia).',
    specs: ['Thân cực dương bằng Đồng (Cu)', 'Bia kim loại Pt hoặc W (Z lớn)', 'Hứng chùm electron từ cathode'],
  },
  {
    id: 'voltage',
    name: 'Nguồn cao áp Anode – Cathode',
    badge: 'Hiệu điện thế ~ 200 kV',
    summary:
      'Hiệu điện thế giữa hai điện cực cathode và anode rất lớn, khoảng 200 kV, tạo điện trường mạnh gia tốc chùm electron.',
    specs: ['Hiệu điện thế cực lớn ~ 200 kV', 'Gia tốc electron đạt động năng cao', 'Quyết định năng lượng tia X'],
  },
  {
    id: 'cooling',
    name: 'Hệ thống làm nguội bia',
    badge: 'Giải phóng > 99% nhiệt năng',
    summary:
      'Vì chỉ khoảng 1% electron tạo ra tia X và hơn 99% còn lại chỉ làm nóng bia nên bia phải được làm nguội liên tục qua thân đồng.',
    specs: ['~1% electron → Tia X', '>99% năng lượng → Làm nóng bia', 'Tản nhiệt bảo vệ bia Pt / W'],
  },
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Khi electron đập vào bia kim loại trong ống phát tia X, phần lớn động năng của chúng chuyển hóa thành gì?',
    options: [
      'Khoảng 99% chuyển thành tia X, 1% tỏa nhiệt',
      'Khoảng 1% tạo ra tia X, hơn 99% làm nóng bia',
      '100% chuyển thành bức xạ tia X đặc trưng',
      '50% làm phát quang ống thủy tinh, 50% tạo tia X',
    ],
    correctIndex: 1,
    explanation: 'Chỉ khoảng 1% electron tạo ra tia X, hơn 99% năng lượng còn lại làm nóng bia nên bia phải được làm nguội.',
  },
  {
    id: 2,
    question: 'Để tăng năng lượng (độ đâm xuyên) của chùm tia X phát ra từ ống tia X, ta cần điều chỉnh đại lượng nào?',
    options: [
      'Tăng hiệu điện thế giữa anode và cathode',
      'Giảm áp suất chân không xuống 1 atm',
      'Tắt dòng điện nung nóng dây cathode',
      'Đặt ống tia X trong từ trường mạnh để bẻ cong tia X',
    ],
    correctIndex: 0,
    explanation: 'Tăng hiệu điện thế giữa anode và cathode giúp gia tốc electron mạnh hơn, tạo tia X cứng có năng lượng cao hơn và bước sóng ngắn hơn.',
  },
  {
    id: 3,
    question: 'Trong công thức suy giảm tia X I = I₀·e^(−μd), hệ số suy giảm tuyến tính μ phụ thuộc vào yếu tố nào?',
    options: [
      'Chỉ phụ thuộc vào diện tích mặt cắt S của chùm tia',
      'Bản chất vật liệu (mật độ, số hiệu nguyên tử) và năng lượng tia X',
      'Cường độ từ trường xung quanh vật liệu',
      'Thời gian phát hiện tia X của Röntgen năm 1895',
    ],
    correctIndex: 1,
    explanation: 'Hệ số μ (đơn vị m⁻¹) phụ thuộc vào bản chất vật liệu (mật độ, số hiệu nguyên tử Z) và năng lượng tia X.',
  },
  {
    id: 4,
    question: 'Vì sao khi chụp X-quang cần mặc tạp dề bằng Chì (Pb) và tháo bỏ trang sức kim loại?',
    options: [
      'Chì có hệ số suy giảm μ cực lớn giúp che chắn cơ quan nhạy cảm; trang sức tạo vệt trắng giả che tổn thương',
      'Chì giúp tăng cường độ tia X đi qua xương người bệnh',
      'Trang sức kim loại bị nhiễm từ trường của tia X',
      'Tạp dề Chì phản xạ 100% tia X vào phim chụp',
    ],
    correctIndex: 0,
    explanation: 'Chì là kim loại nặng có μ rất lớn để cản tia X bảo vệ cơ thể, còn trang sức kim loại hấp thụ mạnh sẽ tạo vệt trắng giả trên phim.',
  },
];
