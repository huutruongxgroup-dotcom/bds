/**
 * Sample Question Data - 20 Pre-loaded Files with Red-highlighted Correct Answers
 */
const SAMPLE_FILES_DATA = [
  {
    fileName: "File_01_Cong_Nghe_Thong_Tin.docx",
    topic: "Công Nghệ Thông Tin & Lập Trình",
    questions: [
      {
        question: "Đơn vị đo dung lượng thông tin nhỏ nhất trong máy tính là gì?",
        options: ["Bit", "Byte", "Kilobyte", "Megabyte"],
        correctAnswer: 0,
        explanation: "Bit (Binary Digit) là đơn vị nhỏ nhất biểu diễn thông tin dưới dạng 0 hoặc 1."
      },
      {
        question: "Ngôn ngữ lập trình nào được sử dụng phổ biến nhất cho phát triển Web Front-end?",
        options: ["Python", "C++", "JavaScript", "Java"],
        correctAnswer: 2,
        explanation: "JavaScript là ngôn ngữ tiêu chuẩn chạy trực tiếp trên các trình duyệt web."
      },
      {
        question: "Giao thức nào được sử dụng để truyền tải dữ liệu web bảo mật (mã hóa)?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        correctAnswer: 1,
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) tích hợp chứng chỉ SSL/TLS để mã hóa dữ liệu."
      },
      {
        question: "Trong kiến trúc máy tính Von Neumann, bộ phận nào thực hiện các phép tính số học và logic?",
        options: ["CU (Control Unit)", "ALU (Arithmetic Logic Unit)", "RAM", "ROM"],
        correctAnswer: 1,
        explanation: "ALU đảm nhận xử lý các phép toán cộng, trừ, nhân, chia và logic AND/OR/NOT."
      },
      {
        question: "Thuật ngữ HTML là viết tắt của cụm từ nào?",
        options: ["HyperText Markup Language", "HighText Machine Language", "HyperTransfer Text Process", "Home Tool Markup Language"],
        correctAnswer: 0,
        explanation: "HTML là HyperText Markup Language - Ngôn ngữ đánh dấu siêu văn bản."
      },
      {
        question: "Hệ điều hành Linux ban đầu do ai phát triển vào năm 1991?",
        options: ["Bill Gates", "Steve Jobs", "Linus Torvalds", "Mark Zuckerberg"],
        correctAnswer: 2,
        explanation: "Linus Torvalds tạo ra nhân Linux ban đầu khi còn là sinh viên Đại học Helsinki."
      },
      {
        question: "Trong cấu trúc dữ liệu, Stack hoạt động theo nguyên lý nào?",
        options: ["FIFO (First In First Out)", "LIFO (Last In First Out)", "LILO (Last In Last Out)", "Random Access"],
        correctAnswer: 1,
        explanation: "Stack là ngăn xếp hoạt động theo LIFO (Vào sau ra trước)."
      },
      {
        question: "Địa chỉ IP v4 gồm có bao nhiêu bit?",
        options: ["16 bit", "32 bit", "64 bit", "128 bit"],
        correctAnswer: 1,
        explanation: "IPv4 sử dụng địa chỉ 32 bit, viết dưới dạng 4 octet phân cách bằng dấu chấm."
      },
      {
        question: "Mã nguồn mở (Open Source Software) có đặc điểm nào dưới đây?",
        options: ["Không cho phép chỉnh sửa", "Công khai mã nguồn cho cộng đồng", "Chỉ chạy trên hệ điều hành Windows", "Bắt buộc phải trả phí duy trì"],
        correctAnswer: 1,
        explanation: "Phần mềm mã nguồn mở cho phép người dùng tự do xem, sửa đổi và phân phối mã nguồn."
      },
      {
        question: "Trong thuật toán sắp xếp QuickSort, độ phức tạp thời gian trung bình là bao nhiêu?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
        correctAnswer: 1,
        explanation: "QuickSort có độ phức tạp trung bình O(n log n), hiệu năng cao với tập dữ liệu lớn."
      },
      {
        question: "Khái niệm 'Cloud Computing' (Điện toán đám mây) mang lại lợi ích lớn nhất nào?",
        options: ["Không cần kết nối Internet", "Cung cấp tài nguyên máy tính linh hoạt theo nhu cầu qua Internet", "Giảm 100% dung lượng phần mềm", "Thay thế hoàn toàn con người"],
        correctAnswer: 1,
        explanation: "Cloud Computing giúp truy cập lưu trữ, server, database qua mạng một cách linh hoạt."
      },
      {
        question: "Cổng mặc định cho dịch vụ HTTP là bao nhiêu?",
        options: ["Cổng 21", "Cổng 80", "Cổng 443", "Cổng 8080"],
        correctAnswer: 1,
        explanation: "Cổng 80 là chuẩn giao tiếp mặc định cho HTTP (HTTPS dùng cổng 443)."
      },
      {
        question: "Khái niệm API viết tắt của cụm từ gì?",
        options: ["Application Programming Interface", "Automated Program Processing", "Advanced Protocol Integration", "Applied Process Intelligence"],
        correctAnswer: 0,
        explanation: "API (Application Programming Interface) là giao diện lập trình ứng dụng."
      }
    ]
  },
  {
    fileName: "File_02_Mang_May_Tinh_An_Ninh.docx",
    topic: "Mạng Máy Tính & An Ninh Mạng",
    questions: [
      {
        question: "Mô hình OSI gồm có tổng cộng bao nhiêu tầng (layers)?",
        options: ["5 tầng", "7 tầng", "4 tầng", "9 tầng"],
        correctAnswer: 1,
        explanation: "Mô hình OSI tiêu chuẩn có 7 tầng từ Physical đến Application."
      },
      {
        question: "Tầng nào trong mô hình OSI chịu trách nhiệm định tuyến (Routing) dữ liệu?",
        options: ["Tầng Vật lý (Physical)", "Tầng Liên kết dữ liệu (Data Link)", "Tầng Mạng (Network)", "Tầng Giao vận (Transport)"],
        correctAnswer: 2,
        explanation: "Tầng Mạng (Network Layer) phụ trách định tuyến gói tin qua IP."
      },
      {
        question: "Kỹ thuật tấn công từ chối dịch vụ phân tán được gọi là gì?",
        options: ["Phishing", "DDoS", "SQL Injection", "Man-in-the-Middle"],
        correctAnswer: 1,
        explanation: "DDoS (Distributed Denial of Service) huy động mạng botnet làm quá tải hệ thống."
      },
      {
        question: "Thiết bị mạng nào dùng để kết nối các mạng LAN độc lập với nhau?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        correctAnswer: 2,
        explanation: "Router (bộ định tuyến) định tuyến dữ liệu giữa các mạng riêng biệt."
      },
      {
        question: "Giao thức dịch giải tên miền thành địa chỉ IP là gì?",
        options: ["DHCP", "DNS", "SNMP", "ARP"],
        correctAnswer: 1,
        explanation: "DNS (Domain Name System) chuyển đổi tên miền như google.com thành IP."
      },
      {
        question: "Loại tường lửa nào kiểm soát lưu lượng dựa trên cổng và IP?",
        options: ["Packet Filtering Firewall", "Application Gateway Firewall", "Proxy Firewall", "Web Application Firewall"],
        correctAnswer: 0,
        explanation: "Tường lửa lọc gói tin (Packet Filtering) kiểm tra tiêu đề header của gói tin."
      },
      {
        question: "Phương thức mã hóa bất đối xứng nào sử dụng cặp khóa Public Key và Private Key?",
        options: ["AES", "DES", "RSA", "Blowfish"],
        correctAnswer: 2,
        explanation: "RSA là thuật toán mã hóa khóa công khai nổi tiếng dựa trên độ khó phân tích số nguyên tố."
      },
      {
        question: "Giao thức DHCP có chức năng chính là gì?",
        options: ["Gửi email tự động", "Tự động cấp phát địa chỉ IP cho các thiết bị trong mạng", "Dịch tên miền thành IP", "Quản lý tường lửa"],
        correctAnswer: 1,
        explanation: "DHCP (Dynamic Host Configuration Protocol) gán IP động cho client."
      },
      {
        question: "Hình thức tấn công mạo danh website hoặc email tin cậy để đánh cắp mật khẩu gọi là gì?",
        options: ["Phishing", "Ransomware", "Spyware", "Keylogger"],
        correctAnswer: 0,
        explanation: "Phishing (Lừa đảo) giả mạo giao diện chính chủ để thu thập thông tin nhạy cảm."
      },
      {
        question: "Mã hóa AES (Advanced Encryption Standard) thuộc loại mã hóa nào?",
        options: ["Mã hóa đối xứng (Symmetric Encryption)", "Mã hóa bất đối xứng (Asymmetric)", "Mã hóa băm 1 chiều (Hashing)", "Mã hóa cổ điển"],
        correctAnswer: 0,
        explanation: "AES sử dụng cùng 1 khóa bí mật cho cả mã hóa và giải mã."
      },
      {
        question: "Địa chỉ MAC (Media Access Control) nằm ở tầng nào trong mô hình OSI?",
        options: ["Tầng Physical", "Tầng Data Link", "Tầng Network", "Tầng Session"],
        correctAnswer: 1,
        explanation: "Địa chỉ MAC là địa chỉ vật lý duy nhất của card mạng nằm ở tầng Data Link."
      },
      {
        question: "Giao thức nào cho phép truy cập và điều khiển máy tính từ xa qua dòng lệnh mã hóa?",
        options: ["Telnet", "SSH", "FTP", "RDP"],
        correctAnswer: 1,
        explanation: "SSH (Secure Shell) cung cấp kênh kết nối từ xa được mã hóa bảo mật thay thế Telnet."
      }
    ]
  },
  {
    fileName: "File_03_Co_So_Du_Lieu_SQL.docx",
    topic: "Cơ Sở Dữ Liệu & Truy Vấn SQL",
    questions: [
      {
        question: "Mệnh đề nào trong SQL được dùng để lọc dữ liệu theo điều kiện?",
        options: ["SELECT", "WHERE", "GROUP BY", "ORDER BY"],
        correctAnswer: 1,
        explanation: "Mệnh đề WHERE chỉ định tiêu chí lọc các dòng thỏa mãn."
      },
      {
        question: "Từ khóa nào được dùng để lấy các bản ghi không trùng lặp trong câu lệnh SELECT?",
        options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
        correctAnswer: 1,
        explanation: "SELECT DISTINCT loại bỏ tất cả các dòng trùng lặp trong kết quả."
      },
      {
        question: "Khóa chính (Primary Key) trong cơ sở dữ liệu quan hệ có đặc điểm gì?",
        options: ["Có thể chứa giá trị NULL", "Duy nhất và không chứa giá trị NULL", "Chấp nhận các giá trị trùng nhau", "Chỉ được phép mang kiểu số integer"],
        correctAnswer: 1,
        explanation: "Primary Key định danh duy nhất mỗi bản ghi và tuyệt đối không được phép là NULL."
      },
      {
        question: "Hành động JOIN nào trả về tất cả các dòng từ bảng bên trái và các dòng khớp từ bảng bên phải?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        correctAnswer: 1,
        explanation: "LEFT JOIN (hoặc LEFT OUTER JOIN) bảo toàn toàn bộ hàng của bảng trái."
      },
      {
        question: "Lệnh SQL nào dùng để thêm một dòng mới vào bảng?",
        options: ["ADD ROW", "INSERT INTO", "UPDATE", "APPEND"],
        correctAnswer: 1,
        explanation: "Lệnh INSERT INTO tableName VALUES (...) thêm dữ liệu mới vào bảng."
      },
      {
        question: "Để sắp xếp kết quả theo thứ tự giảm dần trong SQL, ta dùng từ khóa nào sau ORDER BY?",
        options: ["ASC", "DESC", "DOWN", "TOP"],
        correctAnswer: 1,
        explanation: "DESC (Descending) sắp xếp giảm dần (mặc định không ghi là ASC tăng dần)."
      },
      {
        question: "Hàm gom nhóm (Aggregate Function) nào tính trung bình cộng các giá trị?",
        options: ["COUNT()", "SUM()", "AVG()", "MAX()"],
        correctAnswer: 2,
        explanation: "Hàm AVG() tính giá trị trung bình cột chỉ định."
      },
      {
        question: "Thuộc tính ACID trong giao dịch (Transaction) của CSDL đại diện cho điều gì?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Control, Integration, Data", "Access, Code, Index, Disk", "Authentication, Check, Information, Defense"],
        correctAnswer: 0,
        explanation: "ACID đảm bảo tính Tính toàn vẹn, Đồng nhất, Cô lập và Bền vững của transaction."
      },
      {
        question: "Lệnh DDL nào dùng để xóa hoàn toàn cấu trúc của một bảng khỏi cơ sở dữ liệu?",
        options: ["DELETE FROM table_name", "DROP TABLE table_name", "TRUNCATE TABLE table_name", "REMOVE TABLE table_name"],
        correctAnswer: 1,
        explanation: "DROP TABLE xóa sạch cả cấu trúc lẫn dữ liệu của bảng khỏi CSDL."
      },
      {
        question: "Index (Chỉ mục) trong CSDL có mục đích chính là gì?",
        options: ["Tăng tốc độ truy vấn SELECT dữ liệu", "Tiết kiệm dung lượng ổ cứng", "Mã hóa dữ liệu trong bảng", "Tự động sao lưu dữ liệu"],
        correctAnswer: 0,
        explanation: "Index tạo cấu trúc cây tìm kiếm để đẩy nhanh tốc độ đọc/truy vấn."
      },
      {
        question: "Chuẩn hóa cơ sở dữ liệu dạng 1NF (First Normal Form) yêu cầu điều gì?",
        options: ["Các thuộc tính phải chứa giá trị đơn (Atomic value)", "Không còn phụ thuộc bắc cầu", "Không còn phụ thuộc một phần", "Mọi thuộc tính đều là khóa ngoại"],
        correctAnswer: 0,
        explanation: "1NF yêu cầu mỗi ô chứa giá trị đơn nguyên tố, không có tập hợp/mảng."
      },
      {
        question: "Hệ quản trị CSDL nào dưới đây thuộc loại NoSQL (Non-Relational)?",
        options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle Database"],
        correctAnswer: 2,
        explanation: "MongoDB lưu dữ liệu dạng Document JSON (NoSQL), không dùng bảng bảng biểu truyền thống."
      }
    ]
  },
  {
    fileName: "File_04_Cau_Truc_Du_Lieu_Giai_Thuat.docx",
    topic: "Cấu Trúc Dữ Liệu & Giải Thuật",
    questions: [
      {
        question: "Giải thuật tìm kiếm nhị phân (Binary Search) yêu cầu mảng đầu vào phải có điều kiện gì?",
        options: ["Kích thước mảng là số chẵn", "Mảng đã được sắp xếp", "Mảng không chứa số âm", "Các phần tử là kiểu chuỗi string"],
        correctAnswer: 1,
        explanation: "Binary Search so sánh phần tử giữa, nên mảng bắt buộc phải được sắp xếp trước."
      },
      {
        question: "Hàng đợi (Queue) hoạt động theo nguyên tắc nào?",
        options: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "LILO", "Random"],
        correctAnswer: 1,
        explanation: "Queue là hàng đợi: Người vào trước sẽ được phục vụ ra trước (FIFO)."
      },
      {
        question: "Đồ thị (Graph) không chứa chu trình được gọi là gì?",
        options: ["Cây (Tree / DAG)", "Đồ thị đầy đủ", "Đồ thị vô hướng", "Ma trận kề"],
        correctAnswer: 0,
        explanation: "Một đồ thị liên thông không có chu trình chính là một Cây (Tree)."
      },
      {
        question: "Cấu trúc dữ liệu nào dựa trên nguyên lý Băm (Hash) để truy xuất O(1)?",
        options: ["Array", "Linked List", "Hash Table", "Binary Tree"],
        correctAnswer: 2,
        explanation: "Hash Table tính toán vị trí lưu trữ qua hàm băm, cho phép tìm kiếm O(1) lý tưởng."
      },
      {
        question: "Thuật toán sắp xếp nổi bọt có tên tiếng Anh là gì?",
        options: ["Selection Sort", "Bubble Sort", "Insertion Sort", "Merge Sort"],
        correctAnswer: 1,
        explanation: "Bubble Sort liên tục so sánh và đổi chỗ 2 phần tử kề nhau."
      },
      {
        question: "Duyệt cây nhị phân theo thứ tự In-order (Trung thứ) thực hiện như thế nào?",
        options: ["Node Gốc -> Cây Trái -> Cây Phải", "Cây Trái -> Node Gốc -> Cây Phải", "Cây Trái -> Cây Phải -> Node Gốc", "Duyệt theo mức (Level)"],
        correctAnswer: 1,
        explanation: "In-order duyệt Cây con trái trước, đến Gốc, rồi đến Cây con phải."
      },
      {
        question: "Thuật toán Dijkstra được sử dụng để giải bài toán nào?",
        options: ["Sắp xếp mảng số nguyên", "Tìm đường đi ngắn nhất từ một đỉnh trên đồ thị có trọng số không âm", "Tìm cây khung nhỏ nhất (MST)", "Duyệt đồ thị chiều rộng"],
        correctAnswer: 1,
        explanation: "Dijkstra tính đường đi ngắn nhất single-source trên đồ thị trọng số không âm."
      },
      {
        question: "Độ phức tạp không gian (Space Complexity) của thuật toán đệ quy tính giai thừa n! là bao nhiêu?",
        options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
        correctAnswer: 1,
        explanation: "Đệ quy gọi n tầng trên Call Stack, tốn bộ nhớ O(n)."
      },
      {
        question: "Kỹ thuật 'Quy hoạch động' (Dynamic Programming) cốt lõi dựa vào đặc điểm nào?",
        options: ["Giải bài toán bằng ngẫu nhiên", "Chia bài toán thành các bài toán con gối nhau và lưu trữ kết quả", "Thử tất cả khả năng (Brute force)", "Sử dụng con trỏ tĩnh"],
        correctAnswer: 1,
        explanation: "Quy hoạch động giải và lưu kết quả các bài toán con trùng lặp (Overlapping subproblems)."
      },
      {
        question: "Con trỏ Head trong Danh sách liên kết đơn (Singly Linked List) quản lý vị trí nào?",
        options: ["Phần tử cuối cùng", "Phần tử đầu tiên", "Phần tử ở giữa", "Đếm số phần tử"],
        correctAnswer: 1,
        explanation: "Head trỏ tới Node đầu tiên của danh sách liên kết."
      },
      {
        question: "Heap Sort sử dụng cấu trúc dữ liệu nào để thực hiện sắp xếp?",
        options: ["Binary Search Tree", "Max-Heap / Min-Heap", "Stack", "Queue"],
        correctAnswer: 1,
        explanation: "Heap Sort dựng cấu trúc cây đống (Heap) để lấy ra phần tử lớn nhất/nhỏ nhất."
      },
      {
        question: "Khái niệm 'Big O notation' biểu thị điều gì?",
        options: ["Tốc độ CPU của máy tính", "Giới hạn trên của độ tăng thời gian/bộ nhớ thuật toán khi dữ liệu n tiến tới vô cùng", "Dung lượng RAM tối đa", "Số lượng dòng code của chương trình"],
        correctAnswer: 1,
        explanation: "Big O đánh giá độ tăng về thời gian/bộ nhớ trong trường hợp xấu nhất."
      }
    ]
  },
  {
    fileName: "File_05_Tieng_Anh_Thuong_Mai.docx",
    topic: "Tiếng Anh Thương Mại (Business English)",
    questions: [
      {
        question: "Choose the correct phrase: 'We look forward to ______ from you soon.'",
        options: ["hear", "hearing", "heard", "hears"],
        correctAnswer: 1,
        explanation: "Sau cấu trúc 'look forward to' ta dùng động từ V-ing ('hearing')."
      },
      {
        question: "What does the abbreviation 'B2B' stand for in commerce?",
        options: ["Business to Business", "Back to Business", "Buyer to Business", "Bank to Bank"],
        correctAnswer: 0,
        explanation: "B2B có nghĩa là giao dịch Thương mại giữa các Doanh nghiệp với Doanh nghiệp."
      },
      {
        question: "Select the sentence with correct grammar:",
        options: [
          "The sales figures has increased significantly.",
          "The sales figures have increased significantly.",
          "The sales figures is increasing significantly.",
          "The sales figures increases significantly."
        ],
        correctAnswer: 1,
        explanation: "Chủ ngữ 'sales figures' là số nhiều, nên đi với trợ động từ 'have'."
      },
      {
        question: "What is the meaning of the term 'ROI' in business investments?",
        options: ["Rate of Interest", "Return on Investment", "Risk of Inflation", "Range of Income"],
        correctAnswer: 1,
        explanation: "ROI = Return on Investment (Tỷ lệ lợi nhuận trên tổng vốn đầu tư)."
      },
      {
        question: "Fill in the blank: 'Please find ______ the attached quarterly financial report.'",
        options: ["here", "in", "enclose", "enclosed"],
        correctAnswer: 3,
        explanation: "'Please find enclosed...' là câu mẫu văn thư thương mại thông dụng."
      },
      {
        question: "Which word is a synonym of 'Purchase'?",
        options: ["Sell", "Buy", "Borrow", "Rent"],
        correctAnswer: 1,
        explanation: "Purchase đồng nghĩa với Buy (Mua sắm hàng hóa/dịch vụ)."
      },
      {
        question: "Complete the sentence: 'The meeting has been postponed ______ next Monday.'",
        options: ["until", "at", "for", "on"],
        correctAnswer: 0,
        explanation: "'Postponed until...' có nghĩa là hoãn cuộc họp cho tới thời điểm nào đó."
      },
      {
        question: "What does 'CEO' stand for?",
        options: ["Chief Executive Officer", "Chief Economic Operator", "Central Executive Officer", "Corporate Executive Officer"],
        correctAnswer: 0,
        explanation: "CEO = Chief Executive Officer (Giám đốc điều hành cao nhất)."
      },
      {
        question: "Choose the correct preposition: 'He is responsible ______ handling customer complaints.'",
        options: ["with", "for", "about", "to"],
        correctAnswer: 1,
        explanation: "Cấu trúc 'be responsible for + V-ing/Noun' nghĩa là chịu trách nhiệm về cái gì."
      },
      {
        question: "What is the term for a detailed plan of a meeting's topics?",
        options: ["Invoice", "Agenda", "Receipt", "Syllabus"],
        correctAnswer: 1,
        explanation: "Agenda là Chương trình/Nội dung họp được lên lịch sẵn."
      },
      {
        question: "Fill in the blank: 'If our team ______ harder, we would have met the deadline.'",
        options: ["works", "had worked", "has worked", "working"],
        correctAnswer: 1,
        explanation: "Câu điều kiện loại 3 diễn tả giả định trái quá khứ: 'had + V3/ed'."
      },
      {
        question: "What does 'Gross Profit' mean?",
        options: ["Lợi nhuận ròng sau thuế", "Lợi nhuận gộp (Doanh thu trừ chi phí vốn hàng bán)", "Tổng doanh thu bán hàng", "Tỷ lệ lạm phát"],
        correctAnswer: 1,
        explanation: "Gross Profit là Lợi nhuận gộp trước khi trừ các chi phí quản lý vận hành."
      }
    ]
  },
  {
    fileName: "File_06_Tieng_Anh_Ngu_Phap_Tu_Vung.docx",
    topic: "Tiếng Anh Ngữ Pháp & Từ Vựng Tổng Hợp",
    questions: [
      {
        question: "She is capable ______ solving complex logical problems quickly.",
        options: ["in", "of", "with", "at"],
        correctAnswer: 1,
        explanation: "Tính từ 'capable' đi kèm giới từ 'of' (capable of doing sth)."
      },
      {
        question: "By the time we arrived at the station, the train ______.",
        options: ["left", "has left", "had left", "was leaving"],
        correctAnswer: 2,
        explanation: "Hành động xảy ra và hoàn thành trước thời điểm trong quá khứ dùng Quá khứ hoàn thành 'had left'."
      },
      {
        question: "Which of the following is an antonym for 'Abundant'?",
        options: ["Plentiful", "Scarce", "Copious", "Ample"],
        correctAnswer: 1,
        explanation: "Abundant (Dồi dào) trái nghĩa với Scarce (Khan hiếm)."
      },
      {
        question: "Identify the correct conditional sentence:",
        options: [
          "If I am you, I will apologize immediately.",
          "If I were you, I would apologize immediately.",
          "If I had been you, I would apologize immediately.",
          "If I will be you, I apologize."
        ],
        correctAnswer: 1,
        explanation: "Câu điều kiện loại 2 giả định không thực ở hiện tại: 'If I were you, I would...'"
      },
      {
        question: "The new product was a huge success ______ the lack of initial advertising.",
        options: ["although", "despite", "because of", "unless"],
        correctAnswer: 1,
        explanation: "'Despite + Noun phrase' có nghĩa là mặc dù / bất chấp."
      },
      {
        question: "Choose the correct word: 'He gave me some very useful ______.'",
        options: ["advices", "advice", "advise", "advises"],
        correctAnswer: 1,
        explanation: "'Advice' là danh từ không đếm được, không thêm 's'."
      },
      {
        question: "Hardly ______ when the thunder cracked loudly.",
        options: ["had we stepped outside", "we had stepped outside", "did we step outside", "we stepped outside"],
        correctAnswer: 0,
        explanation: "Cấu trúc đảo ngữ: 'Hardly + had + S + V3 + when...'"
      },
      {
        question: "Which word means 'the state of being very poor'?",
        options: ["Prosperity", "Poverty", "Affluence", "Wealth"],
        correctAnswer: 1,
        explanation: "Poverty có nghĩa là sự nghèo khó, túng thiếu."
      },
      {
        question: "Neither the manager nor his assistants ______ present at the conference yesterday.",
        options: ["was", "were", "is", "are"],
        correctAnswer: 1,
        explanation: "Cấu trúc 'Neither... nor...' chia động từ theo chủ ngữ gần nhất ('his assistants' -> 'were')."
      },
      {
        question: "He suggested that we ______ the project proposal again before submitting.",
        options: ["review", "reviewed", "reviews", "are reviewing"],
        correctAnswer: 0,
        explanation: "Thức giả định: 'suggest that + S + (should) V-bare' -> 'review'."
      },
      {
        question: "What is the past participle form of the verb 'Drive'?",
        options: ["Drove", "Driven", "Driving", "Drives"],
        correctAnswer: 1,
        explanation: "Động từ Drive -> Drove (V2) -> Driven (V3)."
      },
      {
        question: "Select the sentence with passive voice:",
        options: [
          "The engineer fixed the machine.",
          "The machine was fixed by the engineer.",
          "The engineer has been fixing the machine.",
          "The engineer fixes the machine quickly."
        ],
        correctAnswer: 1,
        explanation: "'The machine was fixed by...' là dạng bị động (Passive Voice)."
      }
    ]
  },
  {
    fileName: "File_07_Tin_Hoc_Van_Phong_Excel.docx",
    topic: "Tin Học Văn Phòng (Word & Excel)",
    questions: [
      {
        question: "Trong Microsoft Excel, hàm nào dùng để tính tổng các ô thỏa mãn điều kiện chỉ định?",
        options: ["SUM", "SUMIF", "COUNTIF", "TOTAL"],
        correctAnswer: 1,
        explanation: "Hàm SUMIF tính tổng dựa trên một tiêu chí lọc nhất định."
      },
      {
        question: "Tổ hợp phím tắt nào trong MS Word dùng để căn giữa (Center align) đoạn văn bản?",
        options: ["Ctrl + C", "Ctrl + E", "Ctrl + J", "Ctrl + R"],
        correctAnswer: 1,
        explanation: "Ctrl + E là phím tắt căn giữa văn bản trong MS Word."
      },
      {
        question: "Ký hiệu nào dùng để cố định ô (Địa chỉ tuyệt đối) trong công thức Excel?",
        options: ["%", "$", "#", "&"],
        correctAnswer: 1,
        explanation: "Ký hiệu $ (ví dụ $A$1) tạo địa chỉ tuyệt đối dòng và cột trong Excel."
      },
      {
        question: "Hàm VLOOKUP trong Excel thực hiện tìm kiếm dữ liệu theo chiều nào?",
        options: ["Theo hàng ngang (Horizontal)", "Theo cột dọc (Vertical)", "Theo đường chéo", "Tìm kiếm ngẫu nhiên"],
        correctAnswer: 1,
        explanation: "VLOOKUP tìm kiếm giá trị ở cột đầu tiên bên trái và trả về giá trị cùng dòng trên cột chỉ định."
      },
      {
        question: "Tính năng 'Mail Merge' trong Microsoft Word có công dụng chính là gì?",
        options: ["Tự động kiểm tra lỗi chính tả", "Trộn thư/tạo hàng loạt tài liệu theo danh sách dữ liệu có sẵn", "So sánh 2 tệp văn bản", "Đổi định dạng file sang PDF"],
        correctAnswer: 1,
        explanation: "Mail Merge giúp tạo hàng loạt thư mời, giấy báo, nhãn thư tự động."
      },
      {
        question: "Phím tắt F4 trong MS Excel khi đang nhập công thức có chức năng gì?",
        options: ["Xóa ô hiện tại", "Lần lượt chuyển đổi loại địa chỉ ô (Tương đối / Tuyệt đối)", "Lưu tập tin", "Chèn bảng mới"],
        correctAnswer: 1,
        explanation: "Phím F4 giúp chuyển đổi nhanh giữa A1, $A$1, A$1, $A1."
      },
      {
        question: "Hàm `=COUNTA(A1:A10)` trong Excel thực hiện đếm đối tượng nào?",
        options: ["Đếm số ô chứa số", "Đếm tất cả các ô không rỗng (chứa văn bản, số, lỗi)", "Đếm các ô trống", "Đếm các ô chứa công thức"],
        correctAnswer: 1,
        explanation: "COUNTA đếm tất cả các ô chứa bất kỳ dữ liệu nào (non-empty cells)."
      },
      {
        question: "Trong MS PowerPoint, tổ hợp phím nào bắt đầu trình chiếu từ slide đầu tiên?",
        options: ["F5", "Shift + F5", "Ctrl + P", "Alt + F5"],
        correctAnswer: 0,
        explanation: "F5 bắt đầu trình chiếu từ slide đầu tiên (Shift + F5 chiếu từ slide hiện tại)."
      },
      {
        question: "Định dạng file mặc định của bản tính Microsoft Excel từ phiên bản 2007 trở về sau là gì?",
        options: [".xls", ".xlsx", ".doc", ".pptx"],
        correctAnswer: 1,
        explanation: ".xlsx là định dạng bảng tính mã nguồn mở XML tiêu chuẩn từ Office 2007."
      },
      {
        question: "Công cụ 'Pivot Table' trong Excel dùng để làm gì?",
        options: ["Vẽ đồ thị 3D", "Tổng hợp, phân tích và xoay bảng dữ liệu lớn một cách nhanh chóng", "Gửi email hàng loạt", "Tạo mật khẩu cho file"],
        correctAnswer: 1,
        explanation: "Pivot Table là công cụ đắc lực để thống kê và phân tích báo cáo nhiều chiều."
      },
      {
        question: "Tổ hợp phím Ctrl + Z trong hầu hết các ứng dụng có tác dụng gì?",
        options: ["Cắt văn bản (Cut)", "Hoàn tác hành động vừa làm (Undo)", "Làm lại hành động (Redo)", "Lưu tài liệu (Save)"],
        correctAnswer: 1,
        explanation: "Ctrl + Z giúp Undo lại thao tác vừa thực hiện."
      },
      {
        question: "Biểu thức `=IF(5>3, 'Đúng', 'Sai')` trong Excel trả về kết quả nào?",
        options: ["Đúng", "Sai", "5", "TRUE"],
        correctAnswer: 0,
        explanation: "Vì 5 > 3 là mệnh đề đúng, hàm IF trả về giá trị thứ hai là 'Đúng'."
      }
    ]
  },
  {
    fileName: "File_08_Phap_Luat_Dai_Cuong.docx",
    topic: "Pháp Luật Đại Cương & Luật Lao Động",
    questions: [
      {
        question: "Văn bản quy phạm pháp luật nào có hiệu lực pháp lý cao nhất trong hệ thống pháp luật Việt Nam?",
        options: ["Bộ Luật Dân Sự", "Hiến Pháp", "Luật Lao Động", "Nghị Định Chính Phủ"],
        correctAnswer: 1,
        explanation: "Hiến Pháp là luật cơ bản của Nhà nước, có hiệu lực pháp lý tối cao."
      },
      {
        question: "Thời giờ làm việc bình thường của người lao động theo Bộ luật Lao động Việt Nam không quá bao nhiêu giờ trong 01 ngày?",
        options: ["6 giờ", "8 giờ", "10 giờ", "12 giờ"],
        correctAnswer: 1,
        explanation: "Theo Luật Lao động, thời giờ làm việc bình thường không quá 08 giờ/ngày và 48 giờ/tuần."
      },
      {
        question: "Cơ quan nào có thẩm quyền ban hành Hiến pháp và Luật tại Việt Nam?",
        options: ["Chính Phủ", "Quốc Hội", "Tòa Án Nhân Dân Tối Cao", "Viện Kiểm sát Nhân dân Tối cao"],
        correctAnswer: 1,
        explanation: "Quốc Hội là cơ quan duy nhất có quyền lập hiến và lập pháp."
      },
      {
        question: "Người lao động làm thêm giờ vào ngày nghỉ hằng tuần được trả lương ít nhất bằng bao nhiêu % theo đơn giá tiền lương công việc đang làm?",
        options: ["150%", "200%", "300%", "400%"],
        correctAnswer: 1,
        explanation: "Làm thêm vào ngày nghỉ hàng tuần được hưởng tối thiểu 200% lương."
      },
      {
        question: "Tuổi chịu trách nhiệm hình sự về mọi tội phạm theo Bộ luật Hình sự là từ đủ bao nhiêu tuổi?",
        options: ["14 tuổi", "16 tuổi", "18 tuổi", "21 tuổi"],
        correctAnswer: 1,
        explanation: "Người từ đủ 16 tuổi trở lên phải chịu trách nhiệm hình sự về mọi tội phạm."
      },
      {
        question: "Hợp đồng lao động có thể được ký kết dưới các hình thức nào?",
        options: ["Chỉ bằng văn bản", "Văn bản hoặc thông điệp dữ liệu điện tử / lời nói (trong trường hợp luật cho phép)", "Chỉ bằng lời nói", "Chỉ qua công chứng"],
        correctAnswer: 1,
        explanation: "Bộ luật Lao động công nhận HĐLĐ bằng văn bản, điện tử và lời nói (cho HĐ ngắn hạn dưới 1 tháng)."
      },
      {
        question: "Năng lực hành vi dân sự của cá nhân đạt mức đầy đủ khi cá nhân đạt điều kiện gì?",
        options: ["Đủ 15 tuổi", "Đủ 18 tuổi và không bị mất/hạn chế năng lực hành vi dân sự", "Có việc làm ổn định", "Đã kết hôn"],
        correctAnswer: 1,
        explanation: "Người từ đủ 18 tuổi trở lên không mắc bệnh tâm thần/hạn chế có năng lực hành vi dân sự đầy đủ."
      },
      {
        question: "Thời gian thử việc tối đa đối với công việc có chức danh quản lý doanh nghiệp là bao nhiêu ngày?",
        options: ["30 ngày", "60 ngày", "180 ngày", "360 ngày"],
        correctAnswer: 2,
        explanation: "Thời gian thử việc tối đa với quản lý doanh nghiệp theo Luật Lao động mới nhất là 180 ngày."
      },
      {
        question: "Quyền sở hữu tài sản bao gồm 3 quyền cơ bản nào?",
        options: ["Quyền chiếm hữu, Quyền sử dụng, Quyền định đoạt", "Quyền mua, Quyền bán, Quyền cho thuê", "Quyền quản lý, Quyền đầu tư, Quyền thu thuế", "Quyền giữ, Quyền xài, Quyền phá"],
        correctAnswer: 0,
        explanation: "Quyền sở hữu bao gồm: Quyền chiếm hữu, Quyền sử dụng và Quyền định đoạt."
      },
      {
        question: "Hình phạt tiền trong luật hình sự được xếp vào loại hình phạt nào?",
        options: ["Hình phạt bổ sung hoặc hình phạt chính", "Chỉ là biện pháp hành chính", "Chỉ là hình phạt bổ sung", "Không thuộc hình sự"],
        correctAnswer: 0,
        explanation: "Phạt tiền có thể là hình phạt chính hoặc hình phạt bổ sung tùy tội danh."
      },
      {
        question: "Nghị định do cơ quan nào sau đây ban hành?",
        options: ["Quốc hội", "Chính phủ", "Bộ Trưởng", "Hội đồng nhân dân"],
        correctAnswer: 1,
        explanation: "Nghị định là văn bản quy phạm pháp luật do Chính phủ ban hành."
      },
      {
        question: "Người lao động đơn phương chấm dứt hợp đồng lao động không xác định thời hạn phải báo trước ít nhất bao nhiêu ngày?",
        options: ["15 ngày", "30 ngày", "45 ngày", "60 ngày"],
        correctAnswer: 2,
        explanation: "HĐLĐ không xác định thời hạn yêu cầu người lao động báo trước ít nhất 45 ngày."
      }
    ]
  },
  {
    fileName: "File_09_Quan_Tri_Hoc.docx",
    topic: "Quản Trị Học & Kỹ Năng Lãnh Đạo",
    questions: [
      {
        question: "4 chức năng cơ bản của Quản trị học bao gồm:",
        options: [
          "Lập kế hoạch, Tổ chức, Lãnh đạo, Kiểm tra",
          "Dự báo, Sản xuất, Bán hàng, Thu tiền",
          "Tuyển dụng, Đào tạo, Kỷ luật, Khen thưởng",
          "Mua hàng, Lưu kho, Vận chuyển, Tiếp thị"
        ],
        correctAnswer: 0,
        explanation: "4 chức năng cốt lõi của Quản trị (POLC): Planning, Organizing, Leading, Controlling."
      },
      {
        question: "Mô hình SWOT phân tích các yếu tố nào của doanh nghiệp?",
        options: [
          "Strengths, Weaknesses, Opportunities, Threats",
          "Strategy, Work, Operations, Technology",
          "Sales, Workforce, Organization, Targets",
          "Structure, Wisdom, Output, Time"
        ],
        correctAnswer: 0,
        explanation: "SWOT: Điểm mạnh (S), Điểm yếu (W), Cơ hội (O), Thách thức (T)."
      },
      {
        question: "Tháp nhu cầu của Abraham Maslow gồm có mấy tầng nhu cầu?",
        options: ["3 tầng", "5 tầng", "7 tầng", "4 tầng"],
        correctAnswer: 1,
        explanation: "Tháp Maslow gồm 5 tầng từ Sinh lý, An toàn, Xã hội, Tự trọng đến Tự thể hiện."
      },
      {
        question: "Phong cách lãnh đạo nào nhà quản trị trao toàn quyền cho nhân viên tự quyết định?",
        options: ["Phong cách Độc đoán (Autocratic)", "Phong cách Dân chủ (Democratic)", "Phong cách Tự do (Laissez-faire)", "Phong cách Biến đổi (Transformational)"],
        correctAnswer: 2,
        explanation: "Phong cách Tự do (Laissez-faire) cho phép nhân viên có quyền chủ động tối đa."
      },
      {
        question: "Ma trận BCG (Boston Consulting Group) phân tích danh mục sản phẩm dựa trên 2 tiêu chí nào?",
        options: ["Giá thành & Chất lượng", "Tốc độ tăng trưởng thị trường & Tỷ lệ phần thị phần tương đối", "Lợi nhuận & Chi phí tiếp thị", "Số lượng nhân sự & Doanh số"],
        correctAnswer: 1,
        explanation: "Ma trận BCG dùng Tốc độ tăng trưởng ngành và Thị phần tương đối."
      },
      {
        question: "Mục tiêu SMART có từ 'M' là viết tắt của từ nào?",
        options: ["Meaningful", "Measurable", "Manageable", "Motivational"],
        correctAnswer: 1,
        explanation: "SMART: Specific, Measurable (Đo lường được), Achievable, Relevant, Time-bound."
      },
      {
        question: "Nguyên lý Pareto (Quy tắc 80/20) trong quản lý thời gian chỉ ra điều gì?",
        options: ["80% kết quả đến từ 20% nguyên nhân/nỗ lực quan trọng", "80% thời gian dành cho việc chơi", "20% nhân sự làm việc 80% thời gian", "80% chi phí dành cho 20% nguyên liệu"],
        correctAnswer: 0,
        explanation: "Nguyên lý 80/20 khẳng định 80% kết quả được tạo ra bởi 20% yếu tố cốt lõi."
      },
      {
        question: "Phương pháp quản trị MBO viết tắt của cụm từ nào?",
        options: ["Management by Objectives", "Management by Observation", "Marketing Business Operations", "Master of Business Organization"],
        correctAnswer: 0,
        explanation: "MBO (Management by Objectives) là Quản trị theo mục tiêu."
      },
      {
        question: "Trong sơ đồ Gantt (Gantt Chart), trục nằm ngang thường biểu diễn thông tin gì?",
        options: ["Chi phí thực hiện", "Thời gian (Tiến độ)", "Danh sách nhân sự", "Tên công việc"],
        correctAnswer: 1,
        explanation: "Sơ đồ Gantt dùng trục ngang biểu diễn mốc thời gian tiến độ của dự án."
      },
      {
        question: "Khái niệm 'Span of Control' (Tầm hạn quản trị) có nghĩa là gì?",
        options: ["Số lượng nhân viên cấp dưới mà một nhà quản trị có thể quản lý hiệu quả", "Số năm kinh nghiệm của sếp", "Thời gian họp hàng tuần", "Khoảng cách giữa các chi nhánh"],
        correctAnswer: 0,
        explanation: "Tầm hạn quản trị chỉ số lượng nhân viên trực tiếp dưới quyền 1 người quản lý."
      },
      {
        question: "Văn hóa doanh nghiệp (Corporate Culture) thể hiện qua yếu tố nào?",
        options: ["Chỉ ở logo công ty", "Giá trị cốt lõi, niềm tin, quy tắc ứng xử chung của tổ chức", "Số lượng máy tính", "Báo cáo tài chính năm"],
        correctAnswer: 1,
        explanation: "Văn hóa doanh nghiệp là tập hợp các giá trị, niềm tin và hành vi được chia sẻ."
      },
      {
        question: "Theo Fred Fiedler, mô hình quản trị tình huống cho rằng hiệu quả lãnh đạo phụ thuộc vào điều gì?",
        options: ["IQ của nhà lãnh đạo", "Sự phù hợp giữa phong cách lãnh đạo và mức độ thuận lợi của tình huống", "Số tiền trả lương", "Tuổi tác của quản lý"],
        correctAnswer: 1,
        explanation: "Thuyết tình huống Fiedler nhấn mạnh tính tương thích giữa phong cách và hoàn cảnh."
      }
    ]
  },
  {
    fileName: "File_10_Digital_Marketing.docx",
    topic: "Digital Marketing & Truyền Thông",
    questions: [
      {
        question: "SEO trong Digital Marketing là viết tắt của từ gì?",
        options: ["Search Engine Optimization", "Social Engagement Operation", "Site Email Organization", "Search Electronic Officer"],
        correctAnswer: 0,
        explanation: "SEO = Search Engine Optimization (Tối ưu hóa công cụ tìm kiếm)."
      },
      {
        question: "Chỉ số CPC (Cost Per Click) biểu thị điều gì trong quảng cáo trực tuyến?",
        options: ["Chi phí tính trên 1000 lượt hiển thị", "Chi phí trả cho mỗi lượt nhấp chuột của người dùng vào quảng cáo", "Chi phí mua tên miền", "Chi phí sản xuất video"],
        correctAnswer: 1,
        explanation: "CPC là mô hình trả tiền mỗi khi có người click vào link quảng cáo."
      },
      {
        question: "Mô hình AIDA trong truyền thông tiếp thị gồm 4 giai đoạn nào?",
        options: [
          "Attention, Interest, Desire, Action",
          "Awareness, Information, Decision, Acceptance",
          "Ad, Impression, Demand, Agreement",
          "Analysis, Implementation, Development, Assessment"
        ],
        correctAnswer: 0,
        explanation: "AIDA: Gây chú ý (Attention), Thích thú (Interest), Khao khát (Desire), Hành động (Action)."
      },
      {
        question: "Chỉ số CTR (Click-Through Rate) được tính bằng công thức nào?",
        options: ["(Số lượt Click / Số lượt Hiển thị) * 100%", "(Số lượt Click * Chi phí) / 100", "(Số đơn hàng / Số lượt Click) * 100%", "Tổng chi phí / Số lượt Click"],
        correctAnswer: 0,
        explanation: "CTR = (Total Clicks / Total Impressions) * 100%."
      },
      {
        question: "Google Analytics chủ yếu được dùng để làm gì?",
        options: ["Thiết kế banner quảng cáo", "Theo dõi, phân tích lưu lượng truy cập và hành vi người dùng trên website", "Gửi email hàng loạt", "Chỉnh sửa mã nguồn trang web"],
        correctAnswer: 1,
        explanation: "Google Analytics là công cụ đo lường và phân tích dữ liệu website hàng đầu."
      },
      {
        question: "Hình thức tiếp thị bằng nội dung có tên tiếng Anh là gì?",
        options: ["Content Marketing", "Affiliate Marketing", "Email Marketing", "Influencer Marketing"],
        correctAnswer: 0,
        explanation: "Content Marketing tập trung tạo và phân phối nội dung có giá trị để thu hút khách hàng."
      },
      {
        question: "Khái niệm 'Remarketing' (Tiếp thị lại) hướng tới đối tượng nào?",
        options: ["Những người chưa từng biết đến thương hiệu", "Những người đã từng truy cập website hoặc tương tác với thương hiệu", "Đối thủ cạnh tranh", "Trẻ em dưới 10 tuổi"],
        correctAnswer: 1,
        explanation: "Remarketing tiếp cận lại những người dùng đã từng tỏ ra quan tâm tới sản phẩm."
      },
      {
        question: "Kênh mạng xã hội nào thiên về hình ảnh và video ngắn phong cách đời sống?",
        options: ["LinkedIn", "Instagram", "GitHub", "Stack Overflow"],
        correctAnswer: 1,
        explanation: "Instagram tập trung trải nghiệm thị giác qua ảnh và hình ảnh/Reels."
      },
      {
        question: "Khái niệm 'KOL' là viết tắt của từ nào?",
        options: ["Key Opinion Leader", "Key Operation Logic", "Knowledge Officer Leader", "Known Online Licensee"],
        correctAnswer: 0,
        explanation: "KOL = Key Opinion Leader (Người có tầm ảnh hưởng lớn trong một lĩnh vực)."
      },
      {
        question: "Thuật ngữ 'Landing Page' là gì?",
        options: ["Trang chủ của công ty", "Trang web đơn tập trung cho một mục đích chuyển đổi cụ thể", "Trang báo lỗi 404", "Trang thanh toán ngân hàng"],
        correctAnswer: 1,
        explanation: "Landing Page thiết kế nhằm tối ưu hành động đăng ký/mua hàng của chiến dịch."
      },
      {
        question: "Khái niệm 'Bounce Rate' (Tỷ lệ thoát) trên website chỉ điều gì?",
        options: ["Tỷ lệ người dùng rời trang ngay từ trang đầu tiên mà không tương tác thêm", "Tốc độ tải trang", "Số lượt bấm nút Like", "Số tiền quảng cáo bị hoàn lại"],
        correctAnswer: 0,
        explanation: "Bounce Rate đo phần trăm phiên truy cập chỉ xem 1 trang rồi thoát ra."
      },
      {
        question: "Trong tiếp thị liên kết (Affiliate Marketing), người làm tiếp thị được hưởng lợi gì?",
        options: ["Nhận lương cố định hàng tháng", "Nhận hoa hồng dựa trên doanh số/hành động giới thiệu thành công", "Sở hữu toàn bộ công ty", "Miễn thuế thu nhập"],
        correctAnswer: 1,
        explanation: "Affiliate nhận % commission mỗi khi giới thiệu khách mua hàng thành công."
      }
    ]
  },
  {
    fileName: "File_11_Tai_Chinh_Ke_Toan.docx",
    topic: "Tài Chính Doanh Nghiệp & Kế Toán",
    questions: [
      {
        question: "Bảng cân đối kế toán (Balance Sheet) tuân theo phương trình kế toán cơ bản nào?",
        options: [
          "Tổng Tài Sản = Tổng Nợ Phải Trả + Vốn Chủ Sở Hữu",
          "Tổng Tài Sản = Doanh Thu - Chi Phí",
          "Vốn Chủ Sở Hữu = Tổng Tài Sản + Tổng Nợ",
          "Lợi Nhuận = Doanh Thu + Vốn"
        ],
        correctAnswer: 0,
        explanation: "Phương trình kế toán cân đối: Assets = Liabilities + Equity."
      },
      {
        question: "Tài sản ngắn hạn của doanh nghiệp là những tài sản có khả năng chuyển thành tiền mặt trong vòng bao lâu?",
        options: ["Dưới 12 tháng (hoặc 1 chu kỳ kinh doanh)", "Từ 3 đến 5 năm", "Trên 10 năm", "Vô hạn"],
        correctAnswer: 0,
        explanation: "Tài sản ngắn hạn có tính thanh khoản cao, thu hồi trong vòng 1 năm."
      },
      {
        question: "Khấu hao tài sản cố định (Depreciation) đại diện cho điều gì?",
        options: ["Sự giảm giá trị sử dụng và giá trị của tài sản qua thời gian", "Tiền mặt nộp phạt", "Lợi nhuận cổ tức", "Khoản vay ngân hàng"],
        correctAnswer: 0,
        explanation: "Khấu hao phân bổ chi phí tài sản cố định vào chi phí sản xuất kinh doanh."
      },
      {
        question: "Chỉ số EBITDA trong phân tích tài chính là viết tắt của từ gì?",
        options: [
          "Earnings Before Interest, Taxes, Depreciation, and Amortization",
          "Estimated Business Income Tax and Dividend Amount",
          "Equity Balance In Total Account",
          "Economic Banking Integration and Development Activity"
        ],
        correctAnswer: 0,
        explanation: "EBITDA: Lợi nhuận trước lãi vay, thuế và khấu hao."
      },
      {
        question: "Thuế Giá Trị Gia Tăng (VAT) thuộc loại thuế nào?",
        options: ["Thuế trực thu", "Thuế gián thu", "Thuế tài sản", "Thuế xuất nhập khẩu"],
        correctAnswer: 1,
        explanation: "VAT là thuế gián thu đánh vào người tiêu dùng cuối cùng qua giá hàng hóa."
      },
      {
        question: "Báo cáo lưu chuyển tiền tệ (Cash Flow Statement) chia dòng tiền thành 3 hoạt động nào?",
        options: [
          "Hoạt động kinh doanh, Hoạt động đầu tư, Hoạt động tài chính",
          "Hoạt động mua, Hoạt động bán, Hoạt động lưu kho",
          "Hoạt động trong nước, Hoạt động quốc tế, Hoạt động online",
          "Hoạt động ngắn hạn, Hoạt động trung hạn, Hoạt động dài hạn"
        ],
        correctAnswer: 0,
        explanation: "Cash Flow gồm 3 dòng tiền: Operating, Investing và Financing activities."
      },
      {
        question: "Tỷ số thanh toán nhanh (Quick Ratio / Acid-Test Ratio) loại bỏ yếu tố nào khỏi Tài sản ngắn hạn?",
        options: ["Tiền mặt", "Hàng tồn kho (Inventory)", "Phải thu khách hàng", "Đầu tư tài chính"],
        correctAnswer: 1,
        explanation: "Quick Ratio loại bỏ Hàng tồn kho vì tính thanh khoản kém hơn."
      },
      {
        question: "Lợi nhuận giữ lại (Retained Earnings) nằm ở phần nào trên Bảng Cân Đối Kế Toán?",
        options: ["Tài sản cố định", "Nợ ngắn hạn", "Vốn chủ sở hữu", "Nợ dài hạn"],
        correctAnswer: 2,
        explanation: "Lợi nhuận tích lũy chưa phân phối thuộc Vốn chủ sở hữu."
      },
      {
        question: "Điểm hòa vốn (Break-even Point) là điểm mà tại đó:",
        options: ["Tổng doanh thu bằng Tổng chi phí (Lợi nhuận = 0)", "Doanh thu gấp đôi chi phí", "Chi phí bằng 0", "Doanh thu đạt cực đại"],
        correctAnswer: 0,
        explanation: "Hòa vốn là mốc doanh thu vừa đủ bù đắp toàn bộ biến phí và định phí."
      },
      {
        question: "Cổ tức (Dividend) là gì?",
        options: ["Phần lợi nhuận sau thuế trả cho các cổ đông", "Lương trả cho giám đốc", "Lãi suất trả cho ngân hàng", "Thuế nộp cho nhà nước"],
        correctAnswer: 0,
        explanation: "Cổ tức là khoản chia lợi nhuận công ty cho cổ đông nắm giữ cổ phần."
      },
      {
        question: "Sổ cái (General Ledger) trong kế toán dùng để làm gì?",
        options: ["Ghi chép các tài khoản tổng hợp từ các nhật ký giao dịch", "Lưu biên bản họp", "In hóa đơn bán hàng", "Chấm công nhân viên"],
        correctAnswer: 0,
        explanation: "General Ledger theo dõi biến động số dư của tất cả các tài khoản kế toán."
      },
      {
        question: "Khái niệm 'Lạm phát' (Inflation) phản ánh điều gì?",
        options: ["Sự gia tăng mức giá chung liên tục của hàng hóa và dịch vụ", "Sự tăng trưởng vàng", "Giảm giá nhà đất", "Sự gia tăng tỷ lệ thất nghiệp"],
        correctAnswer: 0,
        explanation: "Lạm phát làm giảm sức mua của đồng tiền qua thời gian."
      }
    ]
  },
  {
    fileName: "File_12_Ky_Nang_Mem.docx",
    topic: "Kỹ Năng Mềm & Giao Tiếp Đàm Phán",
    questions: [
      {
        question: "Kỹ năng lắng nghe chủ động (Active Listening) đòi hỏi người nghe thực hiện hành động nào?",
        options: ["Liên tục cắt lời người nói", "Tập trung chú ý, duy trì tương tác mắt, phản hồi và xác nhận lại thông tin", "Suy nghĩ câu trả lời khác trong đầu", "Nhìn ra chỗ khác"],
        correctAnswer: 1,
        explanation: "Lắng nghe chủ động thể hiện qua sự tập trung, thấu hiểu và phản hồi tích cực."
      },
      {
        question: "Trong đàm phán, nguyên tắc 'Win-Win' hướng tới kết quả nào?",
        options: ["Cả hai bên đều đạt được lợi ích thỏa đáng và hài lòng", "Một bên thắng tuyệt đối, một bên thua", "Cả hai bên cùng chịu thiệt hại", "Hủy bỏ đàm phán"],
        correctAnswer: 0,
        explanation: "Win-Win tạo dựng mối quan hệ hợp tác bền vững lâu dài."
      },
      {
        question: "Thuật ngữ BATNA trong đàm phán là viết tắt của cụm từ gì?",
        options: [
          "Best Alternative to a Negotiated Agreement",
          "Business Agreement and Tactical Negotiating Action",
          "Basic Approach to New Agreement",
          "Best Answer to Negotiate Alliance"
        ],
        correctAnswer: 0,
        explanation: "BATNA là Phương án thay thế tốt nhất nếu đàm phán thất bại."
      },
      {
        question: "Ngôn ngữ cơ thể (Body Language) thuộc hình thức giao tiếp nào?",
        options: ["Giao tiếp phi ngôn ngữ (Non-verbal Communication)", "Giao tiếp bằng văn bản", "Giao tiếp điện tử", "Giao tiếp chính thức"],
        correctAnswer: 0,
        explanation: "Ánh mắt, cử chỉ, tư thế thuộc giao tiếp phi ngôn ngữ."
      },
      {
        question: "Phương pháp tư duy '6 chiếc mũ tư duy' do ai sáng tạo ra?",
        options: ["Edward de Bono", "Dale Carnegie", "Steve Jobs", "Tony Buzan"],
        correctAnswer: 0,
        explanation: "Edward de Bono tạo ra Six Thinking Hats giúp nhìn nhận vấn đề từ nhiều góc độ."
      },
      {
        question: "Kỹ năng quản lý thời gian Eisenhower Matrix chia công việc dựa trên 2 tiêu chí nào?",
        options: ["Độ Khẩn cấp & Độ Quan trọng", "Độ Khó & Độ Dễ", "Chi phí & Thời gian", "Sở thích & Bắt buộc"],
        correctAnswer: 0,
        explanation: "Ma trận Eisenhower phân loại: Khẩn cấp/Không khẩn cấp & Quan trọng/Không quan trọng."
      },
      {
        question: "Trí tuệ cảm xúc (EQ) bao gồm yếu tố cốt lõi nào dưới đây?",
        options: ["Khả năng nhận biết, hiểu và quản lý cảm xúc của bản thân và người khác", "Tốc độ tính nhẩm số học", "Khả năng nhớ tên đường phố", "Kinh nghiệm lập trình"],
        correctAnswer: 0,
        explanation: "EQ quyết định sự thành công trong giao tiếp và xây dựng mối quan hệ."
      },
      {
        question: "Quy tắc 7-38-55 của Albert Mehrabian trong giao tiếp trực tiếp cho rằng yếu tố nào chiếm 55% tác động?",
        options: ["Ngôn ngữ cơ thể (Hình ảnh, cử chỉ)", "Tông giọng (Voice tone)", "Từ ngữ nói ra (Words)", "Trang phục thương hiệu"],
        correctAnswer: 0,
        explanation: "55% tác động đến từ ngôn ngữ cơ thể, 38% đến từ giọng nói, và 7% từ nội dung từ ngữ."
      },
      {
        question: "Khi nhận phản hồi tiêu cực (Feedback) từ đồng nghiệp, thái độ phù hợp nhất là gì?",
        options: ["Lắng nghe cởi mở, ghi nhận, giữ bình tĩnh và rút kinh nghiệm cải thiện", "Tức giận và chỉ trích lại ngay lập tức", "Làm ngơ không quan tâm", "Bỏ việc ngay"],
        correctAnswer: 0,
        explanation: "Thái độ tích cực giúp phát triển bản thân chuyên nghiệp hơn."
      },
      {
        question: "Trong làm việc nhóm (Teamwork), vai trò của 'Facilitator' (Người điều phối) là gì?",
        options: ["Hỗ trợ định hướng buổi họp, giữ đúng thời gian và giúp nhóm đạt mục tiêu", "Quyết định thay tất cả mọi người", "Chỉ làm nhiệm vụ ghi chép", "Không tham gia vào buổi họp"],
        correctAnswer: 0,
        explanation: "Facilitator đảm bảo cuộc họp diễn ra hiệu quả và mọi thành viên được lắng nghe."
      },
      {
        question: "Giao tiếp quả quyết (Assertive Communication) là gì?",
        options: ["Thể hiện rõ ràng quan điểm, nhu cầu của mình một cách tôn trọng người khác", "Ép buộc người khác nghe theo mình", "Luôn đồng ý với tất cả yêu cầu dù không muốn", "Giữ im lặng"],
        correctAnswer: 0,
        explanation: "Assertive communication nằm ở giữa sự thụ động (Passive) và hung hăng (Aggressive)."
      },
      {
        question: "Kỹ thuật Elevator Pitch (Bài nói trong thang máy) yêu cầu độ dài thời gian khoảng bao lâu?",
        options: ["30 đến 60 giây", "15 phút", "1 tiếng", "5 giây"],
        correctAnswer: 0,
        explanation: "Elevator Pitch là bài giới thiệu bản thân/dự án cô đọng trong khoảng 30-60 giây."
      }
    ]
  },
  {
    fileName: "File_13_Lich_Su_Viet_Nam.docx",
    topic: "Lịch Sử Việt Nam & Thế Giới",
    questions: [
      {
        question: "Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu' diễn ra vào năm nào?",
        options: ["1945", "1954", "1975", "1968"],
        correctAnswer: 1,
        explanation: "Chiến thắng Điện Biên Phủ kết thúc vào ngày 7/5/1954."
      },
      {
        question: "Vị vua nào đã ban lệnh dời đô từ Hoa Lư về Thăng Long vào năm 1010?",
        options: ["Lý Thái Tổ (Lý Công Uẩn)", "Đinh Tiên Hoàng", "Lý Thường Kiệt", "Lê Lợi"],
        correctAnswer: 0,
        explanation: "Lý Thái Tổ viết Chiếu dời đô chuyển kinh đô về Thăng Long năm 1010."
      },
      {
        question: "Bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa được Bác Hồ đọc vào ngày tháng năm nào?",
        options: ["02/09/1945", "19/08/1945", "30/04/1975", "22/12/1944"],
        correctAnswer: 0,
        explanation: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình ngày 2/9/1945."
      },
      {
        question: "Trận chiến trên sông Bạch Đằng năm 938 do ai lãnh đạo đánh tan quân Nam Hán?",
        options: ["Ngo Quyền", "Lê Hoàn", "Trần Hưng Đạo", "Quang Trung"],
        correctAnswer: 0,
        explanation: "Ngô Quyền cắm cọc gỗ đầu nhọn trên sông Bạch Đằng đè bẹp quân Nam Hán năm 938."
      },
      {
        question: "Triều đại nhà Trần đã mấy lần đánh thắng quân xâm lược Nguyên Mông?",
        options: ["1 lần", "2 lần", "3 lần", "4 lần"],
        correctAnswer: 2,
        explanation: "Quân dân nhà Trần xuất sắc 3 lần chiến thắng đế quốc Nguyên Mông (1258, 1285, 1287-1288)."
      },
      {
        question: "Bác Hồ ra đi tìm đường cứu nước từ bến cảng Nhà Rồng vào ngày tháng năm nào?",
        options: ["05/06/1911", "19/05/1890", "03/02/1930", "02/09/1969"],
        correctAnswer: 0,
        explanation: "Người thanh niên Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville ngày 5/6/1911."
      },
      {
        question: "Chiến dịch Hồ Chí Minh giải phóng hoàn toàn miền Nam, thống nhất đất nước kết thúc vào mốc lịch sử nào?",
        options: ["30/04/1975", "01/05/1975", "27/01/1973", "12/12/1972"],
        correctAnswer: 0,
        explanation: "Trưa ngày 30/4/1975, lá cờ cách mạng tung bay trên Dinh Độc Lập."
      },
      {
        question: "Tác phẩm 'Bình Ngô Đại Cáo' được coi là bản Tuyên ngôn độc lập thứ hai của dân tộc do ai sáng tác?",
        options: ["Nguyễn Trãi", "Lê Lợi", "Trần Hưng Đạo", "Nguyễn Du"],
        correctAnswer: 0,
        explanation: "Nguyễn Trãi thừa lệnh Lê Lợi viết Bình Ngô Đại Cáo sau chiến thắng quân Minh."
      },
      {
        question: "Phong trào Cần Vương do ai xướng xuất sau sự biến kinh thành Huế năm 1885?",
        options: ["Vua Hàm Nghi và Tôn Thất Thuyết", "Vua Gia Long", "Phan Bội Châu", "Phan Châu Trinh"],
        correctAnswer: 0,
        explanation: "Vua Hàm Nghi ban chiếu Cần Vương kêu gọi sĩ phu và nhân dân chống Pháp."
      },
      {
        question: "Đại hội Đảng toàn quốc lần thứ VI (năm 1986) đã đề ra đường lối lịch sử nào?",
        options: ["Đổi Mới toàn diện đất nước", "Công nghiệp hóa nặng", "Hợp tác hóa nông nghiệp", "Cải cách ruộng đất"],
        correctAnswer: 0,
        explanation: "Đại hội VI (1986) mở ra thời kỳ Đổi Mới phát triển kinh tế thị trường định hướng XHCN."
      },
      {
        question: "Trận Ngọc Hồi - Đống Đa đại phá 29 vạn quân Thanh diễn ra vào mùa xuân năm nào dưới sự chỉ huy của ai?",
        options: ["Năm 1789 - Quang Trung (Nguyễn Huệ)", "Năm 1427 - Lê Lợi", "Năm 1077 - Lý Thường Kiệt", "Năm 1288 - Trần Quốc Tuấn"],
        correctAnswer: 0,
        explanation: "Vua Quang Trung đại phá quân Thanh vào Tết Kỷ Dậu năm 1789."
      },
      {
        question: "Tổ chức Liên Hợp Quốc (UN) chính thức thành lập vào năm nào sau Thế chiến thứ hai?",
        options: ["1945", "1918", "1950", "1960"],
        correctAnswer: 0,
        explanation: "Hiến chương Liên Hợp Quốc có hiệu lực từ ngày 24/10/1945."
      }
    ]
  },
  {
    fileName: "File_14_Dia_Ly_Viet_Nam.docx",
    topic: "Địa Lý Việt Nam & Kinh Tế Vùng",
    questions: [
      {
        question: "Đỉnh núi nào được mệnh danh là 'Nóc nhà Đông Dương'?",
        options: ["Fansipan", "Mẫu Sơn", "Pha Luông", "Langbiang"],
        correctAnswer: 0,
        explanation: "Đỉnh Fansipan thuộc dãy Hoàng Liên Sơn cao 3.143m."
      },
      {
        question: "Việt Nam có tổng cộng bao nhiêu tỉnh và thành phố trực thuộc Trung ương?",
        options: ["63", "64", "58", "60"],
        correctAnswer: 0,
        explanation: "Việt Nam hiện có 63 tỉnh/thành phố trực thuộc Trung ương."
      },
      {
        question: "Đồng bằng nào có diện tích lớn nhất Việt Nam?",
        options: ["Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Đồng bằng Duyên hải Mãi Trung", "Đồng bằng Thanh Hóa"],
        correctAnswer: 1,
        explanation: "Đồng bằng sông Cửu Long rộng khoảng 40.000 km²."
      },
      {
        question: "Quần đảo Hoàng Sa thuộc quản lý hành chính của tỉnh/thành phố nào ở Việt Nam?",
        options: ["Thành phố Đà Nẵng", "Tỉnh Khánh Hòa", "Tỉnh Quảng Ngãi", "Tỉnh Bình Thuận"],
        correctAnswer: 0,
        explanation: "Huyện đảo Hoàng Sa trực thuộc Thành phố Đà Nẵng."
      },
      {
        question: "Con sông nào dài nhất chảy hoàn toàn trong lãnh thổ Việt Nam?",
        options: ["Sông Hồng", "Sông Đồng Nai", "Sông Cả", "Sông Mã"],
        correctAnswer: 1,
        explanation: "Sông Đồng Nai có chiều dài chảy trong Việt Nam dài nhất (~586km)."
      },
      {
        question: "Vịnh Hạ Long - Di sản Thiên nhiên Thế giới thuộc tỉnh nào?",
        options: ["Quảng Ninh", "Hải Phòng", "Nam Định", "Thái Bình"],
        correctAnswer: 0,
        explanation: "Vịnh Hạ Long nằm ở tỉnh Quảng Ninh."
      },
      {
        question: "Đảo lớn nhất Việt Nam là đảo nào?",
        options: ["Đảo Cát Bà", "Đảo Phú Quốc", "Đảo Côn Đảo", "Đảo Lý Sơn"],
        correctAnswer: 1,
        explanation: "Phú Quốc (Kiên Giang) là hòn đảo lớn nhất nước ta (~589 km²)."
      },
      {
        question: "Tỉnh nào của Việt Nam giáp cả 2 nước Lào và Trung Quốc?",
        options: ["Điện Biên", "Lai Châu", "Hà Giang", "Lào Cai"],
        correctAnswer: 0,
        explanation: "Điện Biên có ngã ba biên giới A Pa Chải giáp Lào và Trung Quốc."
      },
      {
        question: "Gió mùa mùa hạ hoạt động ở Việt Nam chủ yếu theo hướng nào?",
        options: ["Đông Bắc", "Tây Nam", "Tây Bắc", "Đông Nam"],
        correctAnswer: 1,
        explanation: "Gió mùa mùa hạ mang mưa thổi theo hướng Tây Nam."
      },
      {
        question: "Vùng kinh tế trọng điểm nào đóng góp GDP lớn nhất cả nước?",
        options: ["Vùng kinh tế trọng điểm phía Nam", "Vùng kinh tế trọng điểm Bắc Bộ", "Vùng kinh tế trọng điểm Miền Trung", "Đồng bằng sông Cửu Long"],
        correctAnswer: 0,
        explanation: "Vùng KTTĐ phía Nam (TP.HCM, Bình Dương, Đồng Nai...) chiếm tỷ trọng GDP cao nhất."
      },
      {
        question: "Mũi Cà Mau là điểm cực nào của phần đất liền Việt Nam?",
        options: ["Cực Bắc", "Cực Nam", "Cực Tây", "Cực Đông"],
        correctAnswer: 1,
        explanation: "Mũi Cà Mau (xã Đất Mới, Cà Mau) là cực Nam đất liền."
      },
      {
        question: "Hồ nước ngọt tự nhiên trên núi lớn nhất Việt Nam là hồ nào?",
        options: ["Hồ Ba Bể", "Hồ Dầu Tiếng", "Hồ Trị An", "Hồ Thác Bà"],
        correctAnswer: 0,
        explanation: "Hồ Ba Bể (Bắc Kạn) là hồ nước ngọt tự nhiên trên núi đá vôi độc đáo."
      }
    ]
  },
  {
    fileName: "File_15_Vat_Ly_Dai_Cuong.docx",
    topic: "Vật Lý Đại Cương & Ứng Dụng",
    questions: [
      {
        question: "Vận tốc ánh sáng trong chân không có giá trị xấp xỉ bằng bao nhiêu?",
        options: ["300.000 km/s", "30.000 km/s", "3.000.000 km/s", "340 m/s"],
        correctAnswer: 0,
        explanation: "Vận tốc ánh sáng c ≈ 3 x 10^8 m/s = 300.000 km/s."
      },
      {
        question: "Định luật 2 Newton phát biểu mối quan hệ giữa Gia tốc (a), Lực (F) và Khối lượng (m) bằng công thức nào?",
        options: ["F = m * a", "F = m / a", "a = F * m", "F = m + a"],
        correctAnswer: 0,
        explanation: "Định luật 2 Newton: F = m.a."
      },
      {
        question: "Đơn vị đo điện trở trong hệ SI là gì?",
        options: ["Volt (V)", "Ampere (A)", "Ohm (Ω)", "Watt (W)"],
        correctAnswer: 2,
        explanation: "Ohm (Ω) là đơn vị đo điện trở."
      },
      {
        question: "Hạt nào trong nguyên tử mang điện tích âm?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        correctAnswer: 2,
        explanation: "Electron mang điện tích âm, Proton mang điện tích dương, Neutron không mang điện."
      },
      {
        question: "Hiện tượng ánh sáng bị lệch hướng khi truyền qua mặt phân cách giữa hai môi trường trong suốt gọi là gì?",
        options: ["Phản xạ ánh sáng", "Khúc xạ ánh sáng", "Nhiễu xạ ánh sáng", "Tán sắc ánh sáng"],
        correctAnswer: 1,
        explanation: "Khúc xạ là sự bẻ cong tia sáng khi đổi môi trường truyền."
      },
      {
        question: "Đơn vị đo công suất trong hệ SI là gì?",
        options: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"],
        correctAnswer: 1,
        explanation: "Watt (W) = Joule/giây là đơn vị đo công suất."
      },
      {
        question: "Sóng âm không thể truyền qua môi trường nào?",
        options: ["Chất rắn", "Chất lỏng", "Chất khí", "Chân không"],
        correctAnswer: 3,
        explanation: "Sóng âm là sóng cơ học nên bắt buộc cần môi trường vật chất, không truyền trong chân không."
      },
      {
        question: "Thấu kính hội tụ có đặc điểm hình dạng nào?",
        options: ["Phần rìa mỏng hơn phần giữa", "Phần rìa dày hơn phần giữa", "Mặt thấu kính phẳng hoàn toàn", "Hình cầu rỗng"],
        correctAnswer: 0,
        explanation: "Thấu kính hội tụ (mặt lồi) có rìa mỏng, giữa dày."
      },
      {
        question: "Công thức Einstein tính năng lượng nghỉ E từ khối lượng m là gì?",
        options: ["E = m * c²", "E = 1/2 m v²", "E = m g h", "E = h f"],
        correctAnswer: 0,
        explanation: "Công thức nổi tiếng E = mc²."
      },
      {
        question: "Định luật Bảo toàn Năng lượng phát biểu điều gì?",
        options: [
          "Năng lượng không tự nhiên sinh ra cũng không tự nhiên mất đi, chỉ chuyển hóa từ dạng này sang dạng khác",
          "Năng lượng luôn bị mất hoàn toàn sau mỗi chuyển động",
          "Tổng năng lượng của vũ trụ luôn bằng 0",
          "Khối lượng luôn tăng gấp đôi năng lượng"
        ],
        correctAnswer: 0,
        explanation: "Định luật bảo toàn và chuyển hóa năng lượng."
      },
      {
        question: "Dụng cụ nào dùng để đo cường độ dòng điện trong mạch?",
        options: ["Vôn kế", "Ampe kế", "Ôm kế", "Công tơ điện"],
        correctAnswer: 1,
        explanation: "Ampe kế (Ammeter) mắc nối tiếp để đo cường độ dòng điện."
      },
      {
        question: "Gia tốc trọng trường trên bề mặt Trái Đất có giá trị trung bình xấp xỉ bằng bao nhiêu?",
        options: ["9.8 m/s²", "1.6 m/s²", "3.14 m/s²", "12 m/s²"],
        correctAnswer: 0,
        explanation: "Gia tốc trọng trường g ≈ 9.8 m/s² (hoặc 9.81 m/s²)."
      }
    ]
  },
  {
    fileName: "File_16_Hoa_Hoc_Doi_Song.docx",
    topic: "Hóa Học Thường Thức & Đời Sống",
    questions: [
      {
        question: "Công thức hóa học của nước nguyên chất là gì?",
        options: ["CO2", "H2O", "NaCl", "O2"],
        correctAnswer: 1,
        explanation: "Nước gồm 2 nguyên tử Hydro và 1 nguyên tử Oxy (H2O)."
      },
      {
        question: "Khí nào chiếm tỷ lệ thể tích lớn nhất trong không khí Trái Đất (~78%)?",
        options: ["Khí Oxy (O2)", "Khí Nitơ (N2)", "Khí Cacbonic (CO2)", "Khí Argon (Ar)"],
        correctAnswer: 1,
        explanation: "Khí Nitơ chiếm ~78%, Oxy chiếm ~21% khí quyển."
      },
      {
        question: "Muối ăn hàng ngày dùng trong nấu ăn có công thức hóa học là gì?",
        options: ["NaHCO3", "NaCl", "KCl", "CaCO3"],
        correctAnswer: 1,
        explanation: "NaCl = Natri Clorua."
      },
      {
        question: "Chất nào được dùng để thử độ axit hoặc bazơ của một dung dịch?",
        options: ["Giấy quỳ tím", "Cồn 90 độ", "Nước vôi trong", "Dầu ăn"],
        correctAnswer: 0,
        explanation: "Quỳ tím hóa đỏ trong axit và hóa xanh trong bazơ."
      },
      {
        question: "Độ pH của nước nguyên chất trung tính ở 25°C là bao nhiêu?",
        options: ["pH = 0", "pH = 7", "pH = 14", "pH = 5"],
        correctAnswer: 1,
        explanation: "Môi trường trung tính có pH = 7."
      },
      {
        question: "Kim loại nào duy nhất ở trạng thái lỏng ở nhiệt độ phòng?",
        options: ["Thủy ngân (Hg)", "Sắt (Fe)", "Vàng (Au)", "Chì (Pb)"],
        correctAnswer: 0,
        explanation: "Thủy ngân (Mercury - Hg) là kim loại dạng lỏng duy nhất ở điều kiện thường."
      },
      {
        question: "Khí nào gây ra hiệu ứng nhà kính chính làm Trái Đất nóng lên?",
        options: ["O2", "CO2", "N2", "He"],
        correctAnswer: 1,
        explanation: "Khí Cacbonic (CO2) và Mêtan (CH4) là tác nhân nhà kính hàng đầu."
      },
      {
        question: "Nguyên tố hóa học nào phổ biến nhất trong vũ trụ?",
        options: ["Oxy", "Hydro", "Heli", "Cacbon"],
        correctAnswer: 1,
        explanation: "Hydro chiếm khoảng 75% khối lượng nguyên tố trong toàn vũ trụ."
      },
      {
        question: "Hiện tượng gỉ sắt trên các đồ dùng bằng sắt là do phản ứng nào?",
        options: ["Phản ứng Oxi hóa - Khử với Oxy và hơi nước", "Phản ứng phân hủy", "Phản ứng trung hòa", "Phản ứng nhiệt phân"],
        correctAnswer: 0,
        explanation: "Sắt bị oxy hóa tạo thành oxit sắt ngậm nước (gỉ sắt)."
      },
      {
        question: "Vitamin C có tên hóa học là gì?",
        options: ["Axit Ascorbic", "Axit Citric", "Axit Acetic", "Axit Lactic"],
        correctAnswer: 0,
        explanation: "Vitamin C chính là Ascorbic Acid."
      },
      {
        question: "Khí cười được dùng trong y tế gây mê nhẹ có công thức hóa học là gì?",
        options: ["N2O", "NO2", "CO", "SO2"],
        correctAnswer: 0,
        explanation: "N2O (Dinitơ Monoxit) là khí cười."
      },
      {
        question: "Kim loại nào dẫn điện tốt nhất trong tất cả các kim loại?",
        options: ["Đồng (Cu)", "Bạc (Ag)", "Vàng (Au)", "Nhôm (Al)"],
        correctAnswer: 1,
        explanation: "Bạc (Ag) dẫn điện tốt nhất, tiếp theo là Đồng (Cu) và Vàng (Au)."
      }
    ]
  },
  {
    fileName: "File_17_Sinh_Hoc_Suc_Khoe.docx",
    topic: "Sinh Học & Sức Khỏe Con Người",
    questions: [
      {
        question: "Cơ quan nào trong cơ thể người chịu trách nhiệm lọc máu và tạo ra nước tiểu?",
        options: ["Gan", "Thận", "Phổi", "Dạ dày"],
        correctAnswer: 1,
        explanation: "Hai quả thận đóng vai trò lọc chất thải khỏi máu tạo nước tiểu."
      },
      {
        question: "Nhóm máu nào được gọi là 'Nhóm máu chuyên cho' (Chuyên hiến)?",
        options: ["Nhóm máu A", "Nhóm máu B", "Nhóm máu AB", "Nhóm máu O"],
        correctAnswer: 3,
        explanation: "Nhóm máu O không có kháng nguyên A và B trên hồng cầu nên có thể hiến cho tất cả nhóm khác."
      },
      {
        question: "ADN (DNA) lưu trữ thông tin di truyền có cấu trúc dạng nào?",
        options: ["Chuỗi đơn thẳng", "Xoắn đôi (Double Helix)", "Vòng tròn kín", "Hình lập phương"],
        correctAnswer: 1,
        explanation: "Watson và Crick phát minh mô hình cấu trúc ADN xoắn đôi năm 1953."
      },
      {
        question: "Bộ nhiễm sắc thể đặc trưng của người bình thường gồm bao nhiêu chiếc (bao nhiêu cặp)?",
        options: ["46 chiếc (23 cặp)", "48 chiếc (24 cặp)", "44 chiếc (22 cặp)", "50 chiếc (25 cặp)"],
        correctAnswer: 0,
        explanation: "Người bình thường có 23 cặp NST (46 chiếc), trong đó có 1 cặp NST giới tính."
      },
      {
        question: "Quá trình quang hợp ở cây xanh diễn ra tại bào quan nào trong tế bào lá?",
        options: ["Ti thể", "Lục lạp (Chloroplast)", "Nhân tế bào", "Lưới nội chất"],
        correctAnswer: 1,
        explanation: "Lục lạp chứa chất diệp dịch (chlorophyll) thực hiện quang hợp."
      },
      {
        question: "Bệnh Tiểu đường (Đái tháo đường) liên quan đến sự thiếu hụt hoặc đề kháng của hormone nào?",
        options: ["Insulin", "Adrenaline", "Thyroxine", "Melatonin"],
        correctAnswer: 0,
        explanation: "Insulin do tuyến tụy tiết ra giúp hạ đường huyết."
      },
      {
        question: "Loại mạch máu nào dẫn máu từ tim đi khắp các cơ quan trong cơ thể?",
        options: ["Động mạch", "Tĩnh mạch", "Mao mạch", "Huyết tương"],
        correctAnswer: 0,
        explanation: "Động mạch co bóp đẩy máu giàu Oxy từ tim đi nuôi cơ thể."
      },
      {
        question: "Vi khuẩn khác với Virus ở đặc điểm cốt lõi nào?",
        options: [
          "Vi khuẩn là tế bào hoàn chỉnh sống độc lập, Virus chưa có cấu trúc tế bào và bắt buộc ký sinh",
          "Virus to hơn vi khuẩn",
          "Vi khuẩn không có ADN",
          "Virus có thể chữa bằng thuốc kháng sinh"
        ],
        correctAnswer: 0,
        explanation: "Vi khuẩn có tế bào sinh trưởng được, kháng sinh không tiêu diệt được virus."
      },
      {
        question: "Bộ phận nào trên não bộ điều khiển sự cân bằng và phối hợp cử động cử động?",
        options: ["Đại não", "Tiểu não (Cerebellum)", "Hành não", "Tủy sống"],
        correctAnswer: 1,
        explanation: "Tiểu não chịu trách nhiệm giữ thăng bằng và chính xác của vận động."
      },
      {
        question: "Hàm lượng Canxi trong cơ thể tập trung nhiều nhất ở đâu (~99%)?",
        options: ["Máu", "Xương và Răng", "Cơ bắp", "Tóc"],
        correctAnswer: 1,
        explanation: "99% lượng Canxi nằm trong cấu trúc Xương và Răng."
      },
      {
        question: "Số nhịp tim đập bình thường ở người trưởng thành lúc nghỉ ngơi là bao nhiêu?",
        options: ["60 - 100 nhịp/phút", "120 - 150 nhịp/phút", "30 - 40 nhịp/phút", "180 - 200 nhịp/phút"],
        correctAnswer: 0,
        explanation: "Nhịp tim bình thường lúc nghỉ ngơi dao động 60-100 bpm."
      },
      {
        question: "Khái niệm 'Kháng thể' (Antibody) do tế bào nào trong hệ miễn dịch sản xuất ra?",
        options: ["Tế bào Bạch cầu B (B-lymphocyte)", "Tế bào Hồng cầu", "Tiểu cầu", "Tế bào Cơ"],
        correctAnswer: 0,
        explanation: "Bạch cầu B tiết ra kháng thể để vô hiệu hóa kháng nguyên xâm nhập."
      }
    ]
  },
  {
    fileName: "File_18_Logic_Tu_Duy_Phan_Bien.docx",
    topic: "Logic Học & Tư Duy Phản Biện",
    questions: [
      {
        question: "Nếu tất cả A là B, và tất cả B là C, thì kết luận nào dưới đây luôn đúng?",
        options: ["Tất cả A là C", "Tất cả C là A", "Không có A nào là C", "Một số C không phải là B"],
        correctAnswer: 0,
        explanation: "Tính chất bắc cầu của tam cú luận: A ⊂ B ⊂ C ⇒ A ⊂ C."
      },
      {
        question: "Mệnh đề kéo theo 'P ⇒ Q' chỉ sai trong trường hợp nào?",
        options: ["P Đúng và Q Sai", "P Sai và Q Đúng", "P Sai và Q Sai", "P Đúng và Q Đúng"],
        correctAnswer: 0,
        explanation: "Mệnh đề kéo theo P ⇒ Q chỉ cho giá trị Sai khi Tiền đề P Đúng nhưng Kết luận Q Sai."
      },
      {
        question: "Nguỵ biện 'Ad Hominem' trong tranh luận có nghĩa là gì?",
        options: [
          "Tấn công vào cá nhân đối thủ thay vì phản bác luận điểm của họ",
          "Bóp méo luận điểm đối thủ thành bù nhìn",
          "Dựa vào đám đông để chứng minh",
          "Lặp lại kết luận để làm bằng chứng"
        ],
        correctAnswer: 0,
        explanation: "Ad Hominem là ngụy biện công kích cá nhân."
      },
      {
        question: "Tìm số tiếp theo trong dãy số: 2, 4, 8, 16, 32, ...?",
        options: ["64", "48", "50", "36"],
        correctAnswer: 0,
        explanation: "Quy luật cấp số nhân: Phần tử sau bằng phần tử trước nhân 2 (32 * 2 = 64)."
      },
      {
        question: "Tìm số tiếp theo trong dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, ...?",
        options: ["21", "18", "20", "26"],
        correctAnswer: 0,
        explanation: "Dãy Fibonacci: Số sau bằng tổng 2 số liền trước (8 + 13 = 21)."
      },
      {
        question: "Phủ định của mệnh đề 'Tất cả học sinh đều thích học Toán' là gì?",
        options: [
          "Có ít nhất một học sinh không thích học Toán",
          "Không có học sinh nào thích học Toán",
          "Tất cả học sinh đều ghét học Toán",
          "Học sinh thích học Văn hơn Toán"
        ],
        correctAnswer: 0,
        explanation: "Phủ định của 'Tất cả P(x)' là 'Tồn tại x không P(x)'."
      },
      {
        question: "Bình cao hơn An. An cao hơn Cường. Phát biểu nào sau đây đúng?",
        options: ["Bình cao nhất trong 3 người", "Cường cao nhất trong 3 người", "An cao nhất trong 3 người", "Bình thấp hơn Cường"],
        correctAnswer: 0,
        explanation: "Bình > An > Cường ⇒ Bình cao nhất."
      },
      {
        question: "Nếu ngày mai là Thứ Sáu, thì ngày hôm qua là Thứ mấy?",
        options: ["Thứ Tư", "Thứ Ba", "Thứ Phụ", "Thứ Bảy"],
        correctAnswer: 0,
        explanation: "Hôm nay là Thứ Năm ⇒ Hôm qua là Thứ Tư."
      },
      {
        question: "Ngụy biện 'Straw Man' (Nguỵ biện rơm/bù nhìn) là gì?",
        options: [
          "Xáo trộn, bóp méo luận điểm đối phương cho dễ công kích",
          "Đe dọa dùng vũ lực",
          "Dùng uy tín cá nhân để áp đặt",
          "Nói dối hoàn toàn"
        ],
        correctAnswer: 0,
        explanation: "Straw Man fallacy dựng lên một luận điểm giả dị bản để dễ dàng đánh đổ."
      },
      {
        question: "Phương pháp suy luận đi từ các trường hợp cụ thể để rút ra quy luật tổng quát gọi là gì?",
        options: ["Suy luận Quy nạp (Inductive reasoning)", "Suy luận Diễn dịch (Deductive reasoning)", "Suy luận Phản chứng", "Suy luận Loại trừ"],
        correctAnswer: 0,
        explanation: "Quy nạp đi từ các quan sát thực nghiệm riêng lẻ tới nguyên lý chung."
      },
      {
        question: "Một từ viết ngược là 'ROBOT'. Hỏi từ nguyên bản là từ nào?",
        options: ["TOBOR", "BOTOR", "OTORB", "TROBO"],
        correctAnswer: 0,
        explanation: "R-O-B-O-T viết đảo ngược thứ tự là T-O-B-O-R."
      },
      {
        question: "Tư duy phản biện (Critical Thinking) cốt lõi đòi hỏi kỹ năng nào?",
        options: [
          "Phân tích, đánh giá thông tin một cách khách quan trước khi chấp nhận kết luận",
          "Luôn phản đối mọi ý kiến của người khác",
          "Chỉ tin vào cảm giác cá nhân",
          "Bắt chước theo đám đông"
        ],
        correctAnswer: 0,
        explanation: "Tư duy phản biện là khả năng suy nghĩ độc lập, hoài nghi lành mạnh và đánh giá bằng chứng."
      }
    ]
  },
  {
    fileName: "File_19_Kien_Thuc_Xa_Hoi.docx",
    topic: "Kiến Thức Xã Hội & Thời Sự",
    questions: [
      {
        question: "Tổ chức ASEAN được thành lập tại Bangkok (Thái Lan) vào năm nào?",
        options: ["1967", "1975", "1995", "2000"],
        correctAnswer: 0,
        explanation: "Tuyên bố Bangkok ngày 8/8/1967 thành lập Hiệp hội các quốc gia Đông Nam Á."
      },
      {
        question: "Việt Nam chính thức gia nhập tổ chức Thương mại Thế giới (WTO) vào năm nào?",
        options: ["2007", "1995", "2000", "2010"],
        correctAnswer: 0,
        explanation: "Việt Nam trở thành thành viên thứ 150 của WTO vào tháng 1/2007."
      },
      {
        question: "Đơn vị tiền tệ chung của Liên minh Châu Âu (EU) là gì?",
        options: ["Euro (€)", "Bảng Anh (£)", "USD ($)", "Yên (¥)"],
        correctAnswer: 0,
        explanation: "Đồng Euro (€) được sử dụng chính thức trong Khu vực đồng Euro (Eurozone)."
      },
      {
        question: "Thành phố nào là thủ đô chính thức của nước Úc (Australia)?",
        options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        correctAnswer: 0,
        explanation: "Canberra mới là thủ đô của Úc (Sydney là thành phố lớn nhất)."
      },
      {
        question: "Ngày Quốc tế Phụ nữ được kỷ niệm vào ngày nào hằng năm?",
        options: ["08/03", "20/10", "01/05", "14/02"],
        correctAnswer: 0,
        explanation: "Ngày 8 tháng 3 là Ngày Quốc tế Phụ nữ."
      },
      {
        question: "Cuộc cách mạng công nghiệp lần thứ tư (Cách mạng 4.0) gắn liền với các công nghệ mũi nhọn nào?",
        options: ["AI, Internet of Things (IoT), Big Data, Cloud Computing", "Máy hơi nước và đường sắt", "Động cơ đốt trong và điện thoại", "Dây chuyền sản xuất hàng loạt"],
        correctAnswer: 0,
        explanation: "Cách mạng 4.0 tập trung vào Trí tuệ nhân tạo, IoT, Dữ liệu lớn và tự động hóa thông minh."
      },
      {
        question: "Di sản văn hóa phi vật thể nào của Việt Nam được UNESCO công nhận đầu tiên?",
        options: ["Nhã nhạc cung đình Huế", "Không gian văn hóa Cồng chiêng Tây Nguyên", "Dân ca Quan họ Bắc Ninh", "Hát Xoan"],
        correctAnswer: 0,
        explanation: "Nhã nhạc cung đình Huế được vinh danh năm 2003."
      },
      {
        question: "Kênh đào Suez nối liền hai vùng biển nào?",
        options: ["Địa Trung Hải và Biển Đỏ", "Đại Tây Dương và Thái Bình Dương", "Biển Đen và Địa Trung Hải", "Ấn Độ Dương và Thái Bình Dương"],
        correctAnswer: 0,
        explanation: "Kênh đào Suez cắt qua Ai Cập kết nối Địa Trung Hải và Biển Đỏ."
      },
      {
        question: "Diễn đàn Hợp tác Kinh tế Châu Á - Thái Bình Dương có tên viết tắt là gì?",
        options: ["APEC", "ASEAN", "OECD", "BRICS"],
        correctAnswer: 0,
        explanation: "APEC = Asia-Pacific Economic Cooperation."
      },
      {
        question: "Cơ quan nào có chức năng giải quyết các tranh chấp thương mại giữa các quốc gia trong WTO?",
        options: ["Cơ quan Giải quyết Tranh chấp (DSB)", "Tòa án Quốc tế Tội phạm", "Hội đồng Bảo an LHQ", "Ngân hàng Thế giới"],
        correctAnswer: 0,
        explanation: "DSB (Dispute Settlement Body) thuộc WTO xử lý tranh chấp thương mại."
      },
      {
        question: "Cầu Vàng nổi tiếng với hai bàn tay đá khổng lồ thuộc khu du lịch nào ở Việt Nam?",
        options: ["Bà Nà Hills (Đà Nẵng)", "Tràng An (Ninh Bình)", "Sa Pa (Lào Cai)", "Đà Lạt (Lâm Đồng)"],
        correctAnswer: 0,
        explanation: "Cầu Vàng tại Sun World Ba Na Hills Đà Nẵng gây sốt truyền thông quốc tế."
      },
      {
        question: "Giải thưởng Nobel được trao hàng năm tại đất nước nào (riêng Nobel Hòa bình trao tại Na Uy)?",
        options: ["Thụy Điển", "Thụy Sĩ", "Mỹ", "Đức"],
        correctAnswer: 0,
        explanation: "Các giải Nobel (Vật lý, Hóa học, Y học, Văn học, Kinh tế) được trao tại Stockholm, Thụy Điển."
      }
    ]
  },
  {
    fileName: "File_20_Van_Hoc_Van_Hoa.docx",
    topic: "Văn Học & Văn Hóa Dân Gian",
    questions: [
      {
        question: "Truyện Kiều - kiệt tác văn học dân tộc Việt Nam do danh nhân nào sáng tác?",
        options: ["Nguyễn Du", "Đoàn Thị Điểm", "Hồ Xuân Hương", "Nguyen Trãi"],
        correctAnswer: 0,
        explanation: "Đại thi hào Nguyễn Du viết Truyện Kiều (Đoạn trường tân thanh) bằng chữ Nôm."
      },
      {
        question: "Nhà thơ nào được mệnh danh là 'Bà chúa Thơ Nôm'?",
        options: ["Hồ Xuân Hương", "Bà Huyện Thanh Quan", "Anh Thơ", "Xuân Quỳnh"],
        correctAnswer: 0,
        explanation: "Hồ Xuân Hương là nhà thơ Nôm kiệt xuất với phong cách độc đáo."
      },
      {
        question: "Tác phẩm 'Tắt Đèn' phản ánh đời sống nông dân trước 1945 do ai sáng tác?",
        options: ["Ngô Tất Tố", "Nam Cao", "Vũ Trọng Phụng", "Nguyễn Công Hoan"],
        correctAnswer: 0,
        explanation: "Ngô Tất Tố khắc họa hình tượng Chị Dậu kiên cường trong Tắt Đèn."
      },
      {
        question: "Thể thơ truyền thống độc đáo riêng biệt của dân tộc Việt Nam là thể thơ nào?",
        options: ["Lục bát", "Thất ngôn bát cú", "Tự do", "Thơ 5 chữ"],
        correctAnswer: 0,
        explanation: "Thể thơ Lục bát (xen kẽ câu 6 tiếng và câu 8 tiếng) là thể thơ bản địa của người Việt."
      },
      {
        question: "Nhân vật Chí Phèo trong tác phẩm cùng tên của Nam Cao khao khát điều gì lớn nhất trước khi chết?",
        options: ["Được làm người lương thiện", "Có thật nhiều tiền", "Trở thành bá chủ làng Vũ Đại", "Đi đến thành phố lớn"],
        correctAnswer: 0,
        explanation: "Chí Phèo thốt lên câu thoại đau đớn: 'Ai cho tôi làm người lương thiện?'."
      },
      {
        question: "Bộ tiểu thuyết 'Tam Quốc Diễn Nghĩa' của Trung Quốc do tác giả nào viết?",
        options: ["La Quán Trung", "Thi Nại Am", "Ngô Thừa Ân", "Tào Tuyết Cần"],
        correctAnswer: 0,
        explanation: "La Quán Trung là tác giả tiểu thuyết lịch sử Tam Quốc Diễn Nghĩa."
      },
      {
        question: "Hình ảnh 'Chiếc thuyền ngoài xa' trong truyện ngắn cùng tên của Nguyễn Minh Châu mang ý nghĩa biểu tượng gì?",
        options: [
          "Mối quan hệ giữa nghệ thuật xa rời và thực tế đời sống con người đa chiều",
          "Vẻ đẹp biển cả đơn thuần",
          "Kỹ thuật đánh cá hiện đại",
          "Thuyền buôn quốc tế"
        ],
        correctAnswer: 0,
        explanation: "Nguyễn Minh Châu thức tỉnh góc nhìn nghệ thuật phải thấu hiểu hiện thực đời sống."
      },
      {
        question: "Bổn tự 'Dế Mèn Phiêu Lưu Ký' của nhà văn Tô Hoài thuộc thể loại nào?",
        options: ["Truyện đồng thoại cho thiếu nhi", "Kịch bản phim", "Thơ tự do", "Báo chí điều tra"],
        correctAnswer: 0,
        explanation: "Dế Mèn Phiêu Lưu Ký là tác phẩm văn học đồng thoại kinh điển."
      },
      {
        question: "Bài thơ 'Tây Tiến' sáng tác năm 1948 của nhà thơ nào?",
        options: ["Quang Dũng", "Tố Hữu", "Chế Lan Viên", "Huy Cận"],
        correctAnswer: 0,
        explanation: "Quang Dũng khắc họa người lính Tây Tiến hào hoa, bi hùng."
      },
      {
        question: "Hội Gióng ở đền Phù Đổng và đền Sóc được UNESCO công nhận là di sản văn hóa phi vật thể để tưởng nhớ ai?",
        options: ["Thánh Gióng (Phù Đổng Thiên Vương)", "Sơn Tinh", "Chử Đồng Tử", "Liễu Hạnh"],
        correctAnswer: 0,
        explanation: "Lễ hội Gióng tôn vinh vị anh hùng huyền thoại Thánh Gióng dẹp giặc Ân."
      },
      {
        question: "Thủ khoa bài thơ 'Đất Nước' (trích Trường ca Mặt đường khát vọng) là của nhà thơ nào?",
        options: ["Nguyễn Khoa Điềm", "Nguyễn Đình Thi", "Y Phương", "Thanh Thảo"],
        correctAnswer: 0,
        explanation: "Nguyễn Khoa Điềm viết 'Đất Nước của Nhân dân, Đất Nước của ca dao thần thoại'."
      },
      {
        question: "Khái niệm 'Nhất trụ kình thiên' trong ngôn ngữ văn học dùng để miêu tả hình ảnh gì?",
        options: ["Một cột chống trời (Thể hiện khí phách ngang tàng, chí lớn kiên cường)", "Chuyến đi xa", "Ngôi nhà nhỏ", "Cây cầu gỗ"],
        correctAnswer: 0,
        explanation: "Nhất trụ kình thiên tượng trưng cho bản lĩnh vững vàng gánh vác việc lớn."
      }
    ]
  }
];
