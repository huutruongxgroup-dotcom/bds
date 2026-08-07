/**
 * questionsData.js - Master Data Provider
 */
if (typeof SAMPLE_FILES_DATA === 'undefined') {
  var SAMPLE_FILES_DATA = [
    {
        "fileName":  "CĐ1 Luật KD BĐS.docx",
        "topic":  "CĐ1 Luật KD BĐS",
        "questions":  [
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 có hiệu lực thi hành từ ngày nào?",
                              "options":  [
                                              "01/01/2025",
                                              "01/08/2024",
                                              "28/11/2023",
                                              "01/01/2015"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, \"Kinh doanh bất động sản\" được hiểu là gì?",
                              "options":  [
                                              "Chỉ bao gồm việc mua bán nhà ở.",
                                              "Chỉ bao gồm hoạt động môi giới và tư vấn bất động sản.",
                                              "Việc bỏ vốn đầu tư tạo lập, mua, nhận chuyển nhượng, thuê, thuê mua BĐS để bán, chuyển nhượng, cho thuê, cho thuê lại, cho thuê mua nhằm mục đích lợi nhuận.",
                                              "Chỉ việc xây dựng dự án bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây KHÔNG thuộc phạm vi điều chỉnh của Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Kinh doanh dịch vụ môi giới bất động sản.",
                                              "Bán nhà ở hình thành trong tương lai của chủ đầu tư dự án.",
                                              "Việc bán nhà ở của cơ quan nhà nước do phá sản, giải thể.",
                                              "Cho thuê văn phòng của doanh nghiệp kinh doanh BĐS."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây bị nghiêm cấm theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Kinh doanh bất động sản đủ điều kiện theo quy định.",
                                              "Công khai đầy đủ thông tin về dự án bất động sản",
                                              "Thu tiền đặt cọc mua nhà hình thành trong tương lai không quá 5% giá bán.",
                                              "Giả mạo tài liệu, cố ý làm sai lệch thông tin về bất động sản."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện về vốn chủ sở hữu đối với doanh nghiệp kinh doanh BĐS làm chủ đầu tư dự án có quy mô sử dụng đất dưới 20 ha theo Luật kinh doanh bất động sản 2023 là gì?",
                              "options":  [
                                              "Tối thiểu 20 tỷ đồng.",
                                              "Không thấp hơn 15% tổng vốn đầu tư",
                                              "Không thấp hơn 20% tổng vốn đầu tư.",
                                              "Không quy định cụ thể."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện nào KHÔNG bắt buộc đối với nhà ở, công trình xây dựng có sẵn được đưa vào kinh doanh theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Có Giấy chứng nhận quyền sở hữu hoặc giấy tờ tương đương.",
                                              "Không có tranh chấp về quyền sở hữu, quyền sử dụng.",
                                              "Phải nằm trong dự án bất động sản đã được phê duyệt.",
                                              "Không bị kê biên để bảo đảm thi hành án."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, chủ đầu tư phải làm gì trước khi bán nhà ở hình thành trong tương lai?",
                              "options":  [
                                              "Đã hoàn thành phần móng và nghiệm thu phần móng.",
                                              "Hoàn thành nghĩa vụ tài chính về đất đai và có văn bản chấp thuận đủ điều kiện bán của Sở Xây dựng.",
                                              "Có hợp đồng bảo lãnh ngân hàng là đủ.",
                                              "Hoàn thiện toàn bộ công trình và có Giấy chứng nhận."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điểm thay đổi quan trọng trong điều kiện chuyển nhượng dự án BĐS theo Luật kinh doanh bất động sản 2023 so với Luật 2014 là gì?",
                              "options":  [
                                              "Bắt buộc phải có Giấy chứng nhận quyền sử dụng đất đối với toàn bộ dự án.",
                                              "Bỏ yêu cầu chủ đầu tư bên chuyển nhượng phải có Giấy chứng nhận quyền sử dụng đất nếu đã hoàn thành nghĩa vụ tài chính về đất đai.",
                                              "Chỉ cho phép chuyển nhượng dự án đã hoàn thiện 100%.",
                                              "Yêu cầu bên nhận chuyển nhượng phải là doanh nghiệp nhà nước."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức đặt cọc tối đa mà chủ đầu tư được thu khi bán nhà ở hình thành trong tương lai theo Luật kinh doanh bất động sản 2023 là bao nhiêu?",
                              "options":  [
                                              "0% giá bán",
                                              "5% giá bán",
                                              "30% giá bán",
                                              "Không giới hạn"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức thanh toán lần đầu sau khi ký hợp đồng mua nhà ở hình thành trong tương lai theo Luật kinh doanh bất động sản 2023 tối đa là bao nhiêu (bao gồm cả tiền đặt cọc)?",
                              "options":  [
                                              "50% giá trị hợp đồng",
                                              "70% giá trị hợp đồng",
                                              "30% giá trị hợp đồng",
                                              "95% giá trị hợp đồng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với hợp đồng thuê mua nhà ở hình thành trong tương lai, tổng số tiền thanh toán trước khi bàn giao nhà theo Luật kinh doanh bất động sản 2023 không được vượt quá bao nhiêu % giá trị hợp đồng?",
                              "options":  [
                                              "30%",
                                              "50%",
                                              "70%",
                                              "95%"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 yêu cầu các bên phải ghi thông tin nào vào hợp đồng kinh doanh BĐS một cách chính xác?",
                              "options":  [
                                              "Chỉ cần ghi giá tham khảo trên thị trường.",
                                              "Giá giao dịch thực tế.",
                                              "Giá tính thuế theo bảng giá đất của Nhà nước.",
                                              "Giá thỏa thuận nhưng không cần công khai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương thức thanh toán bắt buộc đối với giao dịch giữa chủ đầu tư, doanh nghiệp kinh doanh BĐS với khách hàng theo Luật kinh doanh bất động sản 2023 là gì (trừ trường hợp quy mô nhỏ)?",
                              "options":  [
                                              "Tiền mặt",
                                              "Chuyển khoản qua ngân hàng",
                                              "Vàng hoặc ngoại tệ",
                                              "Bất kỳ phương thức nào các bên thỏa thuận"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thông tin về bất động sản, dự án bất động sản phải được công khai vào thời điểm nào theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Sau khi ký hợp đồng mua bán.",
                                              "Trong quá trình xây dựng.",
                                              "Trước khi đưa bất động sản, dự án bất động sản vào kinh doanh.",
                                              "Chỉ khi có yêu cầu của khách hàng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện hành nghề của cá nhân môi giới bất động sản theo Luật Kinh doanh Bất động sản 2023 có thay đổi quan trọng nào so với Luật Kinh doanh Bất động sản 2014?",
                              "options":  [
                                              "Không cần chứng chỉ hành nghề nữa.",
                                              "Phải có bằng đại học chuyên ngành bất động sản.",
                                              "Phải hành nghề trong một doanh nghiệp kinh doanh dịch vụ bất động sản, không được hoạt động độc lập.",
                                              "Chỉ cần đăng ký thuế là đủ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp kinh doanh dịch vụ môi giới bất động sản theo Luật kinh doanh bất động sản 2023 cần tối thiểu bao nhiêu người có chứng chỉ hành nghề môi giới bất động sản?",
                              "options":  [
                                              "01 người",
                                              "02 người",
                                              "03 người",
                                              "Không quy định"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sàn giao dịch bất động sản theo Luật kinh doanh bất động sản 2023 có cần phải được cấp phép hoạt động không?",
                              "options":  [
                                              "Không, chỉ cần thông báo cho Sở Xây dựng.",
                                              "Có, phải gửi hồ sơ đến Sở Xây dựng để được cấp Giấy phép hoạt động sàn.",
                                              "Chỉ cần có giấy đăng ký kinh doanh là đủ.",
                                              "Chỉ các sàn quy mô lớn mới cần giấy phép."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 có bắt buộc mọi giao dịch bất động sản phải thực hiện qua sàn giao dịch không?",
                              "options":  [
                                              "Có, tất cả giao dịch phải qua sàn.",
                                              "Chỉ các giao dịch nhà ở hình thành trong tương lai phải qua sàn.",
                                              "Chỉ các giao dịch có yếu tố nước ngoài phải qua sàn.",
                                              "Không bắt buộc, việc giao dịch qua sàn là tự nguyện."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân kinh doanh bất động sản quy mô nhỏ theo Luật kinh doanh bất động sản 2023 có bắt buộc phải thành lập doanh nghiệp không?",
                              "options":  [
                                              "Có, mọi hoạt động kinh doanh BĐS đều phải lập doanh nghiệp",
                                              "Không, nhưng phải kê khai nộp thuế theo quy định",
                                              "Chỉ cần đăng ký hộ kinh doanh cá thể",
                                              "Chỉ được miễn nếu giao dịch dưới 100 triệu đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tiêu chí định lượng để xác định \"cá nhân kinh doanh BĐS quy mô nhỏ\" theo Nghị định 96/2024/NĐ-CP là gì?",
                              "options":  [
                                              "Dưới 5 giao dịch/năm và dưới 100 tỷ/hợp đồng.",
                                              "Dưới 10 giao dịch/năm và dưới 500 tỷ/hợp đồng",
                                              "Không quá 10 giao dịch/năm và không quá 300 tỷ đồng/hợp đồng.",
                                              "Chỉ cần không thuộc diện phải lập dự án đầu tư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, trường hợp nào sau đây HỢP ĐỒNG bắt buộc phải công chứng hoặc chứng thực?",
                              "options":  [
                                              "Hợp đồng mua bán căn hộ giữa chủ đầu tư và khách hàng cá nhân.",
                                              "Hợp đồng thuê văn phòng giữa hai doanh nghiệp.",
                                              "Hợp đồng mua bán nhà ở giữa hai cá nhân với nhau.",
                                              "Hợp đồng môi giới BĐS giữa doanh nghiệp môi giới và khách hàng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ai có thẩm quyền cấp chứng chỉ hành nghề môi giới BĐS theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Bộ Xây dựng",
                                              "Hiệp hội Bất động sản Việt Nam",
                                              "Sở Xây dựng cấp tỉnh",
                                              "Doanh nghiệp kinh doanh dịch vụ BĐS"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thông tin nào KHÔNG bắt buộc phải công khai đối với nhà ở hình thành trong tương lai theo Điều 6 Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Giấy phép xây dựng (nếu có).",
                                              "Biên bản nghiệm thu hoàn thành phần móng (đối với chung cư).",
                                              "Danh sách các nhà thầu phụ tham gia dự án.",
                                              "Văn bản của Sở Xây dựng về nhà ở đủ điều kiện bán."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư có được thu phí liên quan đến việc chuyển nhượng hợp đồng mua bán nhà ở hình thành trong tương lai không?",
                              "options":  [
                                              "Có, được thu phí quản lý theo thỏa thuận.",
                                              "Có, nhưng không quá 2% giá trị hợp đồng.",
                                              "Không, chủ đầu tư không được thu bất kỳ khoản chi phí nào liên quan đến việc này.",
                                              "Chỉ được thu phí nếu việc chuyển nhượng làm thay đổi thiết kế."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 quy định thời điểm xác lập quyền sở hữu nhà ở, công trình xây dựng đối với bên mua, thuê mua là khi nào (trừ thỏa thuận khác)?",
                              "options":  [
                                              "Kể từ thời điểm ký hợp đồng.",
                                              "Kể từ thời điểm thanh toán đủ 95% giá trị.",
                                              "Kể từ thời điểm bên mua, thuê mua đã thanh toán đủ tiền và đã nhận bàn giao nhà ở, công trình.",
                                              "Kể từ thời điểm được cấp Giấy chứng nhận."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư có trách nhiệm gì sau khi chuyển nhượng quyền sử dụng đất đã có hạ tầng kỹ thuật cho cá nhân tự xây nhà ở?",
                              "options":  [
                                              "Không còn trách nhiệm gì.",
                                              "Hỗ trợ người mua vay vốn ngân hàng.",
                                              "Giám sát việc người mua xây dựng nhà ở theo đúng quy hoạch, thiết kế được duyệt.",
                                              "Xây dựng phần thô nhà ở cho người mua."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào liên quan đến chứng chỉ hành nghề môi giới BĐS bị nghiêm cấm theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Thi lấy chứng chỉ hành nghề môi giới BĐS.",
                                              "Sử dụng chứng chỉ hết hạn để hành nghề.",
                                              "Yêu cầu nhân viên môi giới phải có chứng chỉ.",
                                              "Cấp và sử dụng chứng chỉ hành nghề môi giới BĐS không đúng quy định."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi chuyển nhượng toàn bộ dự án BĐS, bên nhận chuyển nhượng có phải làm lại hồ sơ dự án, quy hoạch, giấy phép xây dựng không nếu không thay đổi nội dung dự án?",
                              "options":  [
                                              "Có, phải làm lại toàn bộ thủ tục từ đầu.",
                                              "Chỉ cần làm lại giấy phép xây dựng.",
                                              "Không, không phải làm lại nếu không có thay đổi nội dung.",
                                              "Phải làm lại quy hoạch chi tiết 1/500."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, tổ chức, cá nhân kinh doanh BĐS được phép kinh doanh BĐS ở đâu?",
                              "options":  [
                                              "Chỉ trong phạm vi tỉnh/thành phố nơi đăng ký kinh doanh.",
                                              "Trên toàn lãnh thổ Việt Nam.",
                                              "Chỉ tại các khu đô thị đã được quy hoạch.",
                                              "Ngoài phạm vi khu vực bảo vệ theo quy định của pháp luật về quốc phòng, an ninh."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào chủ đầu tư dự án BĐS KHÔNG được thu tiền đặt cọc theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Khi nhà ở, công trình xây dựng chưa đủ điều kiện đưa vào kinh doanh.",
                                              "Khi đã nhận đủ tiền đặt cọc từ 10 khách hàng đầu tiên.",
                                              "Khi dự án chưa hoàn thành giải phóng mặt bằng",
                                              "Khi giá trị đặt cọc dưới 1% giá bán."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục tiêu chính của việc yêu cầu công khai thông tin BĐS, dự án BĐS theo Luật kinh doanh bất động sản 2023 là gì?",
                              "options":  [
                                              "Giúp cơ quan thuế dễ dàng thu thuế hơn.",
                                              "Tăng doanh thu cho các công ty môi giới BĐS.",
                                              "Đảm bảo tính minh bạch thị trường, giảm bất cân xứng thông tin, bảo vệ người tiêu dùng",
                                              "Hạn chế số lượng dự án BĐS mới được triển khai."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện \"hoàn thành nghĩa vụ tài chính về đất đai\" đối với BĐS hình thành trong tương lai và quyền sử dụng đất có hạ tầng trước khi đưa vào kinh doanh nhằm mục đích chính là gì?",
                              "options":  [
                                              "Đảm bảo chủ đầu tư có đủ lợi nhuận từ dự án.",
                                              "Đơn giản hóa thủ tục cấp Giấy chứng nhận cho người mua sau này.",
                                              "Đảm bảo Nhà nước thu đủ thuế, phí và quyền sử dụng đất của chủ đầu tư đối với dự án là hợp pháp trước khi bán cho khách hàng.",
                                              "Khuyến khích chủ đầu tư đẩy nhanh tiến độ xây dựng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao Luật kinh doanh bất động sản 2023 lại mở rộng đáng kể các khu vực cấm \"phân lô, bán nền\"?",
                              "options":  [
                                              "Để tăng giá đất nền tại các khu vực được phép.",
                                              "Để khuyến khích người dân mua căn hộ chung cư thay vì đất nền.",
                                              "Để kiểm soát chặt chẽ hơn sự phát triển đô thị, khuyến khích các dự án đồng bộ, cải thiện quy hoạch và cảnh quan tại các đô thị lớn và vừa.",
                                              "Để tạo điều kiện cho các chủ đầu tư lớn độc quyền thị trường đất nền."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hệ thống thông tin về nhà ở và thị trường BĐS theo Luật kinh doanh bất động sản 2023 có vai trò chính là gì?",
                              "options":  [
                                              "Chỉ để lưu trữ hồ sơ dự án của Bộ Xây dựng.",
                                              "Là nơi duy nhất được phép đăng quảng cáo BĐS.",
                                              "Là kênh công khai, chính thống các thông tin về doanh nghiệp, dự án, BĐS đưa vào kinh doanh để các bên tra cứu, giám sát.",
                                              "Là nơi thực hiện các giao dịch BĐS trực tuyến."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc cá nhân môi giới BĐS phải hoạt động trong một doanh nghiệp dịch vụ BĐS theo Luật kinh doanh bất động sản 2023 nhằm mục đích gì?",
                              "options":  [
                                              "Giảm số lượng môi giới trên thị trường.",
                                              "Tăng doanh thu cho các sàn giao dịch BĐS.",
                                              "Chuyên nghiệp hóa hoạt động môi giới, tăng trách nhiệm giải trình, dễ quản lý và giám sát hơn.",
                                              "Buộc các môi giới phải chia sẻ hoa hồng với doanh nghiệp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Loại hình công trình xây dựng nào được Luật kinh doanh bất động sản 2023 bổ sung, làm rõ là đối tượng được phép kinh doanh?",
                              "options":  [
                                              "Chỉ nhà ở và văn phòng.",
                                              "Bao gồm cả công trình có công năng phục vụ du lịch, lưu trú (như condotel, officetel), giáo dục, y tế, thể thao, văn hóa, thương mại, dịch vụ, công nghiệp, hỗn hợp.",
                                              "Chỉ các công trình xây dựng có sẵn, không bao gồm hình thành trong tương lai.",
                                              "Chỉ công trình do Nhà nước đầu tư."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một dự án BĐS đang được thế chấp tại ngân hàng, chủ đầu tư có được phép chuyển nhượng dự án đó không?",
                              "options":  [
                                              "Không, tuyệt đối cấm chuyển nhượng dự án đang thế chấp.",
                                              "Có, nhưng phải được ngân hàng nhận thế chấp đồng ý hoặc phải thực hiện giải chấp trước khi chuyển nhượng.",
                                              "Có, không cần sự đồng ý của ngân hàng.",
                                              "Chỉ được chuyển nhượng phần dự án không bị thế chấp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sự khác biệt về yêu cầu công chứng, chứng thực hợp đồng mua bán nhà ở giữa giao dịch có doanh nghiệp kinh doanh bất động sản tham gia và giao dịch chỉ giữa các cá nhân là gì theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Mọi hợp đồng đều bắt buộc công chứng/chứng thực.",
                                              "Giao dịch có doanh nghiệp tham gia thì bắt buộc, giao dịch giữa cá nhân thì không.",
                                              "Giao dịch giữa các cá nhân với nhau thì bắt buộc công chứng/chứng thực, giao dịch có doanh nghiệp tham gia thì theo yêu cầu của các bên.",
                                              "Không có sự khác biệt, đều không bắt buộc."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc ghi đúng giá giao dịch thực tế trong hợp đồng nhằm mục đích chính nào sau đây?",
                              "options":  [
                                              "Giúp người mua dễ dàng so sánh giá.",
                                              "Chống thất thu thuế và tăng tính minh bạch của dữ liệu thị trường.",
                                              "Đảm bảo chủ đầu tư không bán phá giá.",
                                              "Là cơ sở để tính phí môi giới."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu hợp đồng kinh doanh BĐS có công chứng/chứng thực, thời điểm có hiệu lực của hợp đồng là khi nào?",
                              "options":  [
                                              "Thời điểm bên sau cùng ký vào hợp đồng.",
                                              "Thời điểm các bên thỏa thuận trong hợp đồng.",
                                              "Thời điểm văn bản công chứng, chứng thực có hiệu lực theo quy định pháp luật về công chứng, chứng thực.",
                                              "Sau 7 ngày kể từ ngày công chứng/chứng thực."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp kinh doanh dịch vụ BĐS (môi giới, sàn, tư vấn, quản lý) có bắt buộc phải gửi thông tin về doanh nghiệp đến Sở Xây dựng trước khi hoạt động không?",
                              "options":  [
                                              "Không, chỉ cần đăng ký kinh doanh là đủ.",
                                              "Chỉ sàn giao dịch mới phải thông báo.",
                                              "Chỉ doanh nghiệp môi giới mới phải thông báo.",
                                              "Có, tất cả các loại hình doanh nghiệp dịch vụ BĐS đều phải thông báo/đăng ký hoạt động với Sở Xây dựng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người Việt Nam định cư ở nước ngoài mà KHÔNG phải là công dân Việt Nam được kinh doanh BĐS tại Việt Nam dưới hình thức nào theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Được kinh doanh mọi hình thức như công dân Việt Nam.",
                                              "Chỉ được mua nhà ở để ở, không được kinh doanh.",
                                              "Chủ yếu được đầu tư xây dựng dự án để bán/cho thuê/cho thuê mua, thuê nhà/công trình để cho thuê lại, nhận chuyển nhượng dự án.",
                                              "Chỉ được kinh doanh dịch vụ BĐS."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với nhà chung cư, tòa nhà hỗn hợp có nhà ở hình thành trong tương lai, giấy tờ nghiệm thu nào là điều kiện bắt buộc phải có trước khi đưa vào kinh doanh?",
                              "options":  [
                                              "Nghiệm thu hoàn thành toàn bộ công trình.",
                                              "Nghiệm thu hoàn thành phần thân.",
                                              "Nghiệm thu hoàn thành phần móng.",
                                              "Nghiệm thu hệ thống phòng cháy chữa cháy."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân hành nghề môi giới BĐS được nhận thù lao/hoa hồng từ đâu theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Trực tiếp từ khách hàng (bên mua/bên bán).",
                                              "Từ chủ đầu tư dự án.",
                                              "Từ sàn giao dịch BĐS hoặc doanh nghiệp kinh doanh dịch vụ môi giới BĐS nơi cá nhân đó làm việc.",
                                              "Từ cơ quan quản lý nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một cá nhân chỉ bán duy nhất 01 căn nhà thuộc sở hữu hợp pháp của mình trong năm, giá trị 10 tỷ đồng, thì có phải thành lập doanh nghiệp kinh doanh bất động sản không?",
                              "options":  [
                                              "Có, vì giá trị trên 300 triệu đồng.",
                                              "Không, vì đây là bán tài sản không nhằm mục đích kinh doanh / dưới mức quy mô nhỏ.",
                                              "Có, vì hoạt động bán nhà là kinh doanh BĐS.",
                                              "Phải thành lập nếu căn nhà đó nằm trong dự án BĐS."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sàn giao dịch BĐS có trách nhiệm gì đối với hồ sơ pháp lý của BĐS được đưa vào kinh doanh tại sàn?",
                              "options":  [
                                              "Chỉ cần niêm yết thông tin do chủ đầu tư cung cấp",
                                              "Phải kiểm tra hồ sơ pháp lý, nếu đủ điều kiện mới được giới thiệu cho khách hàng.",
                                              "Chỉ chịu trách nhiệm nếu khách hàng khiếu nại.",
                                              "Không có trách nhiệm kiểm tra, chỉ là nơi trung gian."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 có quy định cụ thể về mức thù lao, hoa hồng tối đa cho dịch vụ môi giới BĐS không?",
                              "options":  [
                                              "Có, tối đa 2% giá trị giao dịch.",
                                              "Có, theo khung giá do UBND cấp tỉnh ban hành.",
                                              "Không, mức thù lao/hoa hồng do các bên tự thỏa thuận trong hợp đồng.",
                                              "Chỉ quy định mức tối thiểu là 1%."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc chuyển nhượng quyền sử dụng đất đã có hạ tầng kỹ thuật trong dự án BĐS phải tuân thủ quy định của luật nào khác ngoài Luật kinh doanh bất động sản?",
                              "options":  [
                                              "Chỉ Luật Xây dựng.",
                                              "Chỉ Luật Đầu tư.",
                                              "Luật Đất đai (về hình thức, mục đích, thời hạn sử dụng đất, đăng ký đất đai).",
                                              "Chỉ Bộ luật Dân sự."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức nước ngoài muốn kinh doanh BĐS tại Việt Nam thì phải tuân thủ quy định của luật nào?",
                              "options":  [
                                              "Chỉ Luật kinh doanh bất động sản.",
                                              "Chỉ Luật Đầu tư.",
                                              "Cả Luật kinh doanh bất động sản và Luật Đầu tư, Luật Đất đai và các quy định pháp luật khác có liên quan",
                                              "Chỉ các điều ước quốc tế mà Việt Nam là thành viên."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ thể nào KHÔNG phải là đối tượng áp dụng của Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Doanh nghiệp môi giới BĐS.",
                                              "Cá nhân mua nhà để ở.",
                                              "Cơ quan nhà nước thực hiện bán tài sản công theo pháp luật về quản lý, sử dụng tài sản công.",
                                              "Chủ đầu tư dự án khu đô thị."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc phân định phần diện tích sở hữu chung, sở hữu riêng trong nhà chung cư, công trình hỗn hợp có cần được thể hiện trong thông tin công khai và hợp đồng mua bán không?",
                              "options":  [
                                              "Không cần thiết, chỉ cần ghi tổng diện tích căn hộ.",
                                              "Chỉ cần công khai bản vẽ thiết kế.",
                                              "Có, phải được phân định rõ và công khai trong thông tin, thể hiện trong hợp đồng.",
                                              "Chỉ cần thỏa thuận miệng khi bàn giao."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trình tự, thủ tục đầu tư xây dựng dự án BĐS phải tuân thủ quy định của những luật nào?",
                              "options":  [
                                              "Chỉ Luật kinh doanh bất động sản.",
                                              "Luật kinh doanh bất động sản và Luật Xây dựng.",
                                              "Luật kinh doanh bất động sản, Luật Quy hoạch, Luật Đầu tư, Luật Đất đai, Luật Xây dựng, Luật Nhà ở và pháp luật có liên quan.",
                                              "Chỉ Luật Đầu tư và Luật Đất đai."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu bên mua, thuê mua nhà ở, công trình xây dựng tự thực hiện việc xin cấp Giấy chứng nhận thì tổng số tiền thanh toán trước khi được cấp giấy không vượt quá bao nhiêu % giá trị hợp đồng?",
                              "options":  [
                                              "70%",
                                              "80%",
                                              "90%",
                                              "95%"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu KHÔNG phải là tác động tích cực được kỳ vọng từ việc áp dụng Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Thị trường BĐS minh bạch, ổn định và chuyên nghiệp hơn.",
                                              "Quyền lợi của người mua nhà được bảo vệ tốt hơn.",
                                              "Giảm thiểu tình trạng đầu cơ, sốt ảo trên thị trường.",
                                              "Giảm giá nhà ở trên diện rộng ngay lập tức."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao việc yêu cầu \"hoàn thành việc đầu tư xây dựng hạ tầng kỹ thuật thiết yếu\" trước khi kinh doanh quyền sử dụng đất lại quan trọng trong việc quản lý phát triển đô thị?",
                              "options":  [
                                              "Đảm bảo chủ đầu tư thu hồi vốn nhanh hơn.",
                                              "Tăng giá trị cho các lô đất nền.",
                                              "Ngăn chặn tình trạng hình thành các khu dân cư tự phát thiếu hạ tầng đồng bộ, đảm bảo điều kiện sống cơ bản và kết nối khu vực.",
                                              "Giúp việc cấp Giấy chứng nhận cho người mua dễ dàng hơn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 quy định \"Tổ chức, cá nhân kinh doanh BĐS phải ghi đúng giá giao dịch thực tế vào trong hợp đồng\". Biện pháp này có mối liên hệ chặt chẽ nhất với luật nào khác trong việc thực thi?",
                              "options":  [
                                              "Bộ luật Dân sự (về hiệu lực hợp đồng).",
                                              "Luật Nhà ở (về quản lý nhà ở).",
                                              "Luật Quản lý thuế (về cơ sở tính thuế và chống thất thu thuế).",
                                              "Luật Xây dựng (về chất lượng công trình)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yêu cầu về việc sàn giao dịch BĐS phải có \"quy chế hoạt động\" và \"thực hiện các biện pháp phòng chống rửa tiền\" thể hiện sự quan tâm của nhà làm luật đến khía cạnh nào?",
                              "options":  [
                                              "Chỉ quan tâm đến hiệu quả kinh doanh của sàn.",
                                              "Tăng cường tính chuyên nghiệp, minh bạch và ngăn ngừa rủi ro pháp lý, tài chính tiêu cực thông qua hoạt động của sàn.",
                                              "Đảm bảo cạnh tranh lành mạnh giữa các sàn.",
                                              "Giảm thủ tục hành chính cho các giao dịch qua sàn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc giảm yêu cầu số lượng người có chứng chỉ môi giới tối thiểu trong doanh nghiệp môi giới từ 02 (Luật kinh doanh bất động sản 2014) xuống 01 (Luật kinh doanh bất động sản 2023) có thể được hiểu là:",
                              "options":  [
                                              "Hạ thấp tiêu chuẩn ngành môi giới, nhằm giúp nhiều người hoạt động môi giới hơn.",
                                              "Tạo điều kiện thuận lợi hơn cho việc thành lập và hoạt động của các doanh nghiệp môi giới (đặc biệt là quy mô nhỏ), nhưng vẫn đảm bảo có người chịu trách nhiệm chuyên môn.",
                                              "Khuyến khích môi giới hoạt động độc lập trở lại, tăng nguồn thu cho ngân sách.",
                                              "Do thiếu hụt nguồn nhân lực môi giới có chứng chỉ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện nào sau đây KHÔNG phải là điều kiện để cá nhân được dự thi sát hạch cấp chứng chỉ hành nghề môi giới BĐS theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Có năng lực hành vi dân sự đầy đủ.",
                                              "Có trình độ tốt nghiệp từ cao đẳng trở lên.",
                                              "Có giấy chứng nhận hoàn thành khóa học đào tạo kiến thức hành nghề môi giới BĐS.",
                                              "Không đang trong tình trạng bị truy cứu trách nhiệm hình sự hoặc chấp hành án hình sự."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao Luật kinh doanh bất động sản 2023 lại nhấn mạnh việc \"Tổ chức, cá nhân được kinh doanh BĐS ngoài phạm vi khu vực bảo vệ theo quy định của pháp luật về quốc phòng, an ninh\"?",
                              "options":  [
                                              "Để khuyến khích đầu tư BĐS vào các khu vực biên giới, hải đảo.",
                                              "Để khẳng định chủ quyền quốc gia đối với các khu vực này.",
                                              "Để phân định rõ ràng phạm vi được phép kinh doanh BĐS, gắn hoạt động kinh tế với yêu cầu đảm bảo quốc phòng, an ninh quốc gia.",
                                              "Để tạo cơ chế đặc thù cho kinh doanh BĐS tại các khu kinh tế quốc phòng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghĩa vụ nào sau đây KHÔNG thuộc về bên nhận chuyển nhượng dự án BĐS?",
                              "options":  [
                                              "Kế thừa và thực hiện quyền, nghĩa vụ của chủ đầu tư chuyển nhượng đã chuyển giao",
                                              "Tiếp tục triển khai dự án theo đúng nội dung đã được chấp thuận.",
                                              "Chịu trách nhiệm về các vi phạm của chủ đầu tư cũ trước thời điểm chuyển nhượng.",
                                              "Thực hiện nghĩa vụ tài chính đối với Nhà nước theo quy định."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật kinh doanh bất động sản 2023 không quy định bắt buộc công chứng đối với hợp đồng mua bán BĐS giữa chủ đầu tư và khách hàng cá nhân có thể nhằm mục đích gì?",
                              "options":  [
                                              "Giảm tính pháp lý của hợp đồng.",
                                              "Giảm thủ tục hành chính, tạo sự linh hoạt cho giao dịch có tính chất kinh doanh chuyên nghiệp.",
                                              "Khuyến khích giao dịch bằng giấy viết tay.",
                                              "Tăng vai trò của sàn giao dịch BĐS."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền sử dụng đất đã có hạ tầng kỹ thuật trong dự án BĐS chỉ được đưa vào kinh doanh khi:",
                              "options":  [
                                              "Chủ đầu tư đã bán hết nhà ở hình thành trong tương lai của dự án.",
                                              "Đã có văn bản nghiệm thu hạ tầng và đáp ứng các điều kiện khác theo luật định.",
                                              "Đã có ít nhất 10% số lô đất được xây dựng nhà ở.",
                                              "Dự án đã hoàn thành trên 5 năm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một cá nhân môi giới BĐS có chứng chỉ hành nghề nhưng làm việc môi giới cho một công ty không đăng ký kinh doanh dịch vụ môi giới BĐS thì:",
                              "options":  [
                                              "Vẫn hợp pháp vì cá nhân có chứng chỉ.",
                                              "Chỉ vi phạm nếu không nộp thuế thu nhập cá nhân.",
                                              "Là vi phạm quy định của Luật kinh doanh bất động sản 2023 (cá nhân phải hành nghề trong doanh nghiệp dịch vụ BĐS).",
                                              "Chỉ công ty vi phạm, cá nhân không vi phạm."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc thu thập thông tin về \"số liệu điều tra, thống kê về nhà ở\", \"số liệu cấp GCN\" trong cơ sở dữ liệu quốc gia về nhà ở nhằm mục đích gì?",
                              "options":  [
                                              "Chỉ để báo cáo thành tích của ngành xây dựng.",
                                              "Cung cấp cái nhìn tổng quan, định lượng về tình hình nhà ở, thị trường và hiệu quả quản lý đất đai, làm cơ sở hoạch định chính sách.",
                                              "Xác định các cá nhân sở hữu nhiều nhà đất để áp thuế, tăng thu ngân sách.",
                                              "Phục vụ công tác quy hoạch đô thị chi tiết."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hạn tối thiểu mà sàn giao dịch BĐS phải đảm bảo về địa điểm hoạt động (ví dụ: hợp đồng thuê địa điểm) theo Nghị định 96/2024/NĐ-CP là bao lâu?",
                              "options":  [
                                              "03 tháng",
                                              "06 tháng",
                                              "12 tháng (01 năm)",
                                              "Không quy định"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 quy định các hành vi bị cấm liên quan đến việc thu và sử dụng tiền của khách hàng mua BĐS hình thành trong tương lai nhằm giải quyết vấn đề gì tồn tại trước đây?",
                              "options":  [
                                              "Tình trạng chủ đầu tư bán BĐS với giá quá cao.",
                                              "Tình trạng chủ đầu tư huy động vốn trái phép hoặc sử dụng vốn huy động không đúng mục đích, gây rủi ro cho khách hàng và dự án.",
                                              "Tình trạng khách hàng chậm thanh toán tiền mua nhà.",
                                              "Tình trạng các ngân hàng không muốn cho vay dự án BĐS."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật kinh doanh bất động sản 2023 cho phép kinh doanh BĐS là \"phần diện tích sàn xây dựng trong công trình xây dựng có công năng phục vụ mục đích du lịch, lưu trú\" có tác động như thế nào đến thị trường condotel, officetel?",
                              "options":  [
                                              "Hạn chế sự phát triển của loại hình này.",
                                              "Không có tác động gì đáng kể",
                                              "Tạo cơ sở pháp lý rõ ràng hơn cho việc đầu tư, kinh doanh, giao dịch loại hình này, có thể thúc đẩy thị trường phát triển minh bạch hơn.",
                                              "Biến các loại hình này thành nhà ở thông thường."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu Luật Đất đai, Luật Nhà ở có quy định khác với Luật kinh doanh bất động sản về cùng một vấn đề liên quan đến kinh doanh BĐS, nguyên tắc áp dụng pháp luật là gì?",
                              "options":  [
                                              "Luôn ưu tiên áp dụng Luật kinh doanh bất động sản hơn Luật Đất đai, Luật Nhà ở.",
                                              "Áp dụng luật được ban hành sau cùng, có thời gian hiệu lực gần nhất",
                                              "Tùy trường hợp cụ thể, ưu tiên áp dụng luật chuyên ngành trực tiếp điều chỉnh vấn đề đó (ví dụ: vấn đề về QSDĐ áp dụng Luật Đất đai, vấn đề về quản lý nhà ở áp dụng Luật Nhà ở).",
                                              "Các bên tự thỏa thuận luật áp dụng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật kinh doanh bất động sản 2023 quy định hợp đồng mẫu và yêu cầu công khai hợp đồng mẫu trước khi áp dụng mang lại lợi ích gì cho người mua BĐS?",
                              "options":  [
                                              "Giúp người mua có thể tự soạn thảo hợp đồng theo ý mình.",
                                              "Biết trước các điều khoản chính, giảm thiểu rủi ro bị cài cắm các điều khoản bất lợi, đảm bảo các quyền và nghĩa vụ cơ bản được quy định rõ ràng.",
                                              "Được miễn phí công chứng hợp đồng.",
                                              "Có thể yêu cầu chủ đầu tư thay đổi hoàn toàn hợp đồng mẫu."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thủ tục chuyển nhượng dự án BĐS theo Luật Đầu tư được áp dụng trong trường hợp nào?",
                              "options":  [
                                              "Chỉ khi dự án có vốn đầu tư trên 5000 tỷ đồng",
                                              "Đối với tất cả các dự án BĐS.",
                                              "Đối với dự án BĐS được chấp thuận nhà đầu tư hoặc được cấp Giấy chứng nhận đăng ký đầu tư theo Luật Đầu tư.",
                                              "Chỉ khi bên nhận chuyển nhượng là nhà đầu tư nước ngoài."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ sở dữ liệu về thị trường BĐS địa phương KHÔNG bao gồm thông tin nào sau đây?",
                              "options":  [
                                              "Thông tin về các dự án BĐS trên địa bàn (giao dịch, tồn kho).",
                                              "Hoạt động của các tổ chức kinh doanh dịch vụ BĐS tại địa phương.",
                                              "Thông tin chi tiết về thu nhập cá nhân của các nhà môi giới BĐS.",
                                              "Số lượng chứng chỉ môi giới BĐS được cấp trong kỳ tại địa phương."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một người Việt Nam định cư ở nước ngoài là công dân Việt Nam, họ có được phép mua nhà ở có sẵn từ một cá nhân khác tại Việt Nam để bán lại không?",
                              "options":  [
                                              "Không, chỉ được mua để ở.",
                                              "Không, chỉ được đầu tư xây dựng dự án mới.",
                                              "Có, vì họ được kinh doanh BĐS như công dân Việt Nam trong nước.",
                                              "Chỉ được phép nếu thành lập doanh nghiệp tại Việt Nam."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi nhận chuyển nhượng Quyền sử dụng đất đã có hạ tầng kỹ thuật, nghĩa vụ nào của bên nhận KHÔNG được nêu rõ trong Điều 30 Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Thanh toán tiền đầy đủ, đúng hạn.",
                                              "Sử dụng đất đúng mục đích, đúng ranh giới.",
                                              "Phải xây dựng nhà ở trong vòng 2 năm kể từ ngày nhận đất.",
                                              "Thực hiện nghĩa vụ tài chính đối với Nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích của việc yêu cầu chủ đầu tư thông báo và nhận được văn bản trả lời chấp thuận của Sở Xây dựng trước khi bán nhà ở hình thành trong tương lai là gì?",
                              "options":  [
                                              "Để Sở Xây dựng thu phí quản lý.",
                                              "Để xác nhận chính thức từ cơ quan quản lý nhà nước rằng nhà ở đó đã đáp ứng đủ các điều kiện pháp lý và kỹ thuật để được phép bán ra thị trường.",
                                              "Để Sở Xây dựng giới thiệu khách hàng tiềm năng cho chủ đầu tư.",
                                              "Chỉ là thủ tục mang tính hình thức."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật kinh doanh bất động sản 2023 không còn quy định về vốn pháp định tối thiểu (như Luật kinh doanh bất động sản 2014 từng có) mà thay bằng tỷ lệ vốn chủ sở hữu/tổng mức đầu tư có ý nghĩa gì?",
                              "options":  [
                                              "Giảm yêu cầu về vốn cho tất cả doanh nghiệp BĐS.",
                                              "Tăng yêu cầu về vốn cho tất cả doanh nghiệp BĐS.",
                                              "Giúp yêu cầu về vốn trở nên linh hoạt, phù hợp hơn với quy mô và rủi ro của từng dự án cụ thể, thay vì một mức cố định có thể không phù hợp.",
                                              "Chuyển trách nhiệm quản lý vốn từ cơ quan nhà nước sang các ngân hàng thương mại."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghĩa vụ chứng minh nhà ở, công trình xây dựng hình thành trong tương lai đủ điều kiện được bán, cho thuê mua thuộc về ai?",
                              "options":  [
                                              "Người mua, thuê mua.",
                                              "Ngân hàng bảo lãnh.",
                                              "Chủ đầu tư dự án.",
                                              "Cơ quan đăng ký đất đai."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan nào có trách nhiệm chính trong việc xây dựng, quản lý, vận hành Hệ thống thông tin, cơ sở dữ liệu về nhà ở và thị trường BĐS ở cấp Trung ương?",
                              "options":  [
                                              "Văn phòng Chính phủ.",
                                              "Bộ Tài nguyên và Môi trường.",
                                              "Bộ Xây dựng.",
                                              "Bộ Thông tin và Truyền thông."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc phải kê khai nộp thuế theo quy định của pháp luật có áp dụng đối với cá nhân kinh doanh BĐS quy mô nhỏ không?",
                              "options":  [
                                              "Không, vì được miễn thành lập doanh nghiệp.",
                                              "Chỉ áp dụng nếu có lãi trên 100 triệu đồng/năm.",
                                              "Có, mặc dù không phải lập doanh nghiệp nhưng vẫn phải kê khai và nộp thuế.",
                                              "Chỉ áp dụng nếu bán BĐS có giá trị trên 1 tỷ đồng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là hệ quả pháp lý quan trọng nhất khi một cá nhân môi giới BĐS hoạt động mà không có chứng chỉ hành nghề hoặc không thuộc một doanh nghiệp dịch vụ BĐS?",
                              "options":  [
                                              "Chỉ bị phạt tiền nếu bị phát hiện.",
                                              "Hoạt động đó là bất hợp pháp, vi phạm quy định của Luật kinh doanh bất động sản, có thể bị xử phạt và các giao dịch do môi giới đó thực hiện có thể bị ảnh hưởng về tính pháp lý.",
                                              "Khách hàng có quyền từ chối trả hoa hồng.",
                                              "Không có hệ quả gì nếu giao dịch thành công."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ10 Luật xử lý vi phạm hành chính (KTCS) done.docx",
        "topic":  "CĐ10 Luật xử lý vi phạm hành chính",
        "questions":  [
                          {
                              "question":  "Luật nào là văn bản pháp luật nền tảng quy định các nguyên tắc chung về xử phạt vi phạm hành chính tại Việt Nam?",
                              "options":  [
                                              "Luật Đất đai 2024",
                                              "Luật kinh doanh bất động sản 2023",
                                              "Bộ luật Dân sự 2015",
                                              "Luật Xử lý Vi phạm Hành chính (2012, sửa đổi 2020)"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo quy định chung, mức phạt tiền đối với tổ chức vi phạm hành chính trong lĩnh vực đất đai và kinh doanh BĐS thường như thế nào so với cá nhân có cùng hành vi?",
                              "options":  [
                                              "Bằng cá nhân",
                                              "Gấp đôi cá nhân",
                                              "Bằng một nửa cá nhân",
                                              "Gấp ba lần cá nhân"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực đất đai theo Nghị định 123/2024/NĐ-CP là bao lâu?",
                              "options":  [
                                              "1 năm",
                                              "2 năm",
                                              "3 năm",
                                              "5 năm"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối tượng nào sau đây KHÔNG thuộc phạm vi áp dụng của Nghị định 123/2024/NĐ-CP?",
                              "options":  [
                                              "Tổ chức, cá nhân trong nước",
                                              "Tổ chức, cá nhân nước ngoài",
                                              "Hộ gia đình, cộng đồng dân cư",
                                              "Cơ quan nhà nước có thẩm quyền xử phạt"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây KHÔNG phải là vi phạm về chuyển mục đích sử dụng đất theo Điều 8 - Điều 12 Nghị định 123/2024/NĐ-CP?",
                              "options":  [
                                              "Tự ý chuyển đất trồng lúa sang đất trồng cây lâu năm",
                                              "Chuyển đất ở sang đất nông nghiệp không được phép",
                                              "Chuyển đất nông nghiệp sang đất phi nông nghiệp không được phép",
                                              "Xây dựng nhà trên đất nông nghiệp khi chưa được phép"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tiền đối với hành vi chuyển mục đích sử dụng đất trái phép KHÔNG phụ thuộc vào yếu tố nào sau đây?",
                              "options":  [
                                              "Loại đất ban đầu và loại đất chuyển đến",
                                              "Diện tích đất vi phạm",
                                              "Vị trí đất (nông thôn/đô thị)",
                                              "Thời điểm thực hiện hành vi vi phạm"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp khắc phục hậu quả chính đối với hành vi chuyển mục đích sử dụng đất trái phép là gì?",
                              "options":  [
                                              "Buộc nộp tiền sử dụng đất",
                                              "Buộc khôi phục lại tình trạng ban đầu của đất",
                                              "Tịch thu toàn bộ diện tích đất vi phạm",
                                              "Phạt tù người vi phạm"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tiền tối đa đối với cá nhân có hành vi lấn, chiếm đất theo Nghị định 123/2024/NĐ-CP là bao nhiêu?",
                              "options":  [
                                              "200.000.000 đồng",
                                              "400.000.000 đồng",
                                              "500.000.000 đồng",
                                              "1.000.000.000 đồng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp khắc phục hậu quả đối với hành vi không đăng ký đất đai là gì?",
                              "options":  [
                                              "Buộc khôi phục tình trạng ban đầu",
                                              "Buộc nộp lại số lợi bất hợp pháp",
                                              "Buộc thực hiện thủ tục đăng ký đất đai theo quy định",
                                              "Tịch thu giấy tờ liên quan"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức xử phạt bổ sung nào được áp dụng đối với hành vi sử dụng giấy tờ giả trong thủ tục hành chính về đất đai?",
                              "options":  [
                                              "Tước quyền sử dụng đất",
                                              "Đình chỉ hoạt động",
                                              "Tịch thu giấy tờ giả đã sử dụng",
                                              "Cảnh cáo"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi không sử dụng đất trồng cây lâu năm liên tục trong bao lâu thì bị coi là vi phạm (bỏ hoang đất)?",
                              "options":  [
                                              "6 tháng",
                                              "12 tháng",
                                              "18 tháng",
                                              "24 tháng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp khắc phục hậu quả đối với hành vi bỏ hoang đất trồng cây lâu năm là gì?",
                              "options":  [
                                              "Buộc trả lại đất cho Nhà nước",
                                              "Buộc đưa đất vào sử dụng trong thời hạn 60 ngày",
                                              "Buộc nộp phạt gấp đôi",
                                              "Buộc chuyển sang loại đất khác"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức xử phạt bổ sung nào có thể áp dụng đối với tổ chức vi phạm điều kiện hoạt động dịch vụ tư vấn đất đai?",
                              "options":  [
                                              "Phạt tiền gấp 3 lần",
                                              "Tịch thu phương tiện hành nghề",
                                              "Tước quyền sử dụng giấy phép/chứng chỉ hành nghề hoặc Đình chỉ hoạt động",
                                              "Buộc giải thể tổ chức"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây KHÔNG phải là vi phạm quy định về Kinh doanh bất động sản theo Điều 58 Nghị định 16/2022/NĐ-CP?",
                              "options":  [
                                              "Kinh doanh BĐS không thành lập doanh nghiệp/HTX khi bắt buộc",
                                              "Công khai thông tin dự án BĐS đầy đủ, kịp thời",
                                              "Thu tiền mua BĐS hình thành trong tương lai vượt tỷ lệ quy định",
                                              "Bàn giao nhà khi chưa hoàn thành nghiệm thu theo quy định"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tiền cao nhất đối với tổ chức có hành vi vi phạm trong Kinh doanh bất động sản theo Điều 58 Nghị định 16/2022/NĐ-CP là bao nhiêu?",
                              "options":  [
                                              "500.000.000 đồng",
                                              "800.000.000 đồng",
                                              "1.000.000.000 đồng",
                                              "2.000.000.000 đồng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức xử phạt bổ sung nào có thể áp dụng cho hành vi kinh doanh BĐS không đủ điều kiện theo Điều 58 Nghị định 16/2022/NĐ-CP?",
                              "options":  [
                                              "Tịch thu BĐS",
                                              "Đình chỉ hoạt động kinh doanh BĐS từ 03 đến 06 tháng",
                                              "Phạt tiền gấp đôi",
                                              "Buộc phá dỡ công trình"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp khắc phục hậu quả nào áp dụng cho hành vi thu tiền mua BĐS hình thành trong tương lai vượt tỷ lệ quy định?",
                              "options":  [
                                              "Buộc hoàn trả phần tiền thu vượt",
                                              "Buộc giảm giá bán BĐS",
                                              "Buộc công khai thông tin",
                                              "Buộc dừng thi công dự án"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tiền đối với cá nhân môi giới độc lập không có chứng chỉ hành nghề là bao nhiêu?",
                              "options":  [
                                              "20 - 30 triệu đồng",
                                              "40 - 60 triệu đồng",
                                              "60 - 80 triệu đồng",
                                              "100 - 120 triệu đồng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây của sàn giao dịch BĐS bị phạt tiền từ 200 - 250 triệu đồng theo Điều 59 Khoản 3 Nghị định 16/2022/NĐ-CP?",
                              "options":  [
                                              "Hoạt động không có quy chế",
                                              "Không thực hiện chế độ báo cáo",
                                              "Đưa BĐS không đủ điều kiện lên sàn giao dịch",
                                              "Thu phí dịch vụ sai quy định"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức xử phạt bổ sung nào áp dụng cho sàn giao dịch BĐS đưa BĐS không đủ điều kiện lên sàn?",
                              "options":  [
                                              "Tước chứng chỉ hành nghề môi giới",
                                              "Đình chỉ hoạt động kinh doanh dịch vụ sàn giao dịch BĐS (6-9 tháng)",
                                              "Phạt tiền gấp đôi",
                                              "Buộc đóng cửa vĩnh viễn"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tiền đối với tổ chức có hành vi làm sai lệch, hư hỏng thông tin về nhà ở và thị trường BĐS là bao nhiêu?",
                              "options":  [
                                              "40 - 60 triệu đồng",
                                              "60 - 80 triệu đồng",
                                              "80 - 100 triệu đồng",
                                              "100 - 120 triệu đồng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục tiêu chính của các quy định xử phạt trong Kinh doanh bất động sản theo Nghị định 16/2022/NĐ-CP là gì?",
                              "options":  [
                                              "Tăng nguồn thu ngân sách",
                                              "Hạn chế số lượng doanh nghiệp BĐS",
                                              "Bảo vệ quyền lợi người tiêu dùng và đảm bảo tính minh bạch thị trường",
                                              "Khuyến khích đầu cơ bất động sản"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ngoài phạt tiền, hình thức xử phạt bổ sung nào KHÔNG được đề cập là phổ biến trên thế giới trong lĩnh vực này?",
                              "options":  [
                                              "Cảnh cáo",
                                              "Buộc lao động công ích",
                                              "Đình chỉ hoặc thu hồi giấy phép hoạt động",
                                              "Buộc chấm dứt hành vi vi phạm"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Bộ luật Dân sự 2015 quy định về hiệu lực của hợp đồng có ý nghĩa gì đối với việc xử phạt hành chính trong kinh doanh BĐS?",
                              "options":  [
                                              "Thay thế hoàn toàn việc xử phạt hành chính.",
                                              "Không liên quan đến xử phạt hành chính.",
                                              "Một hành vi vi phạm có thể vừa bị xử phạt hành chính, vừa dẫn đến hậu quả dân sự (ví dụ hợp đồng vô hiệu).",
                                              "Chỉ áp dụng nếu không có Nghị định xử phạt chuyên ngành"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào hành vi chuyển mục đích sử dụng đất trái phép có thể KHÔNG bị áp dụng biện pháp khắc phục hậu quả là buộc khôi phục tình trạng ban đầu?",
                              "options":  [
                                              "Khi người vi phạm tự nguyện nộp phạt gấp đôi.",
                                              "Khi việc chuyển mục đích phù hợp quy hoạch và người sử dụng đất đủ điều kiện được chuyển mục đích.",
                                              "Khi diện tích vi phạm dưới 10m2.",
                                              "Khi hành vi vi phạm xảy ra ở khu vực nông thôn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt đối với hành vi chuyển đất trồng lúa sang đất ở tại khu vực đô thị (phường, thị trấn) so với cùng hành vi tại khu vực nông thôn (xã) là như thế nào?",
                              "options":  [
                                              "Bằng nhau",
                                              "Gấp đôi",
                                              "Bằng một nửa",
                                              "Gấp ba lần"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi hủy hoại đất nào sau đây có khung phạt tiền cao hơn theo Điều 14 Nghị định 123/2024/NĐ-CP?",
                              "options":  [
                                              "Làm suy giảm chất lượng đất (mất tầng canh tác, ô nhiễm...)",
                                              "Làm biến dạng địa hình (thay đổi độ dốc, san lấp trái phép...)",
                                              "Cả hai hành vi có khung phạt như nhau.",
                                              "Chỉ hành vi gây ô nhiễm mới bị phạt."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp hủy hoại đất mà không thể khôi phục lại tình trạng ban đầu thì mức phạt tiền sẽ như thế nào?",
                              "options":  [
                                              "Giảm một nửa",
                                              "Giữ nguyên",
                                              "Tăng gấp đôi (nhưng không vượt mức tối đa)",
                                              "Miễn phạt tiền, chỉ áp dụng biện pháp khác"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi cản trở việc sử dụng đất của người khác bằng cách đào bới, xây tường, làm hàng rào có mức phạt tiền như thế nào so với việc chỉ đặt vật liệu gây cản trở?",
                              "options":  [
                                              "Thấp hơn",
                                              "Bằng nhau",
                                              "Cao hơn",
                                              "Tùy thuộc vào loại vật liệu"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi không đăng ký biến động đất đai khi có thay đổi (ví dụ: chuyển quyền, thế chấp) có mức phạt tiền như thế nào so với không đăng ký đất đai lần đầu?",
                              "options":  [
                                              "Thấp hơn",
                                              "Bằng nhau",
                                              "Cao hơn",
                                              "Tùy thuộc vào giá trị thửa đất"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân nhận chuyển nhượng đất trồng lúa vượt hạn mức mà không thành lập tổ chức kinh tế để tiếp tục sử dụng thì bị xử phạt như thế nào?",
                              "options":  [
                                              "Cảnh cáo",
                                              "Phạt tiền từ 50 triệu đến 100 triệu đồng",
                                              "Buộc trả lại đất ngay lập tức",
                                              "Buộc chuyển sang trồng cây khác"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi khai báo không trung thực dẫn đến sai lệch trong việc cấp Giấy chứng nhận quyền sử dụng đất bị phạt tiền ở mức nào đối với cá nhân?",
                              "options":  [
                                              "2 - 5 triệu đồng",
                                              "5 - 10 triệu đồng",
                                              "10 - 20 triệu đồng",
                                              "Cảnh cáo"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp khắc phục hậu quả nào áp dụng cho trường hợp sử dụng giấy tờ giả trong thủ tục hành chính về đất đai?",
                              "options":  [
                                              "Buộc làm lại giấy tờ thật",
                                              "Buộc nộp lại số lợi bất hợp pháp",
                                              "Hủy bỏ kết quả thực hiện thủ tục hành chính đã thực hiện",
                                              "Buộc xin lỗi công khai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi chậm cung cấp thông tin đất đai theo yêu cầu của cơ quan có thẩm quyền bị xử phạt như thế nào đối với cá nhân?",
                              "options":  [
                                              "Phạt tiền 2 - 5 triệu đồng",
                                              "Phạt tiền 5 - 10 triệu đồng",
                                              "Phạt cảnh cáo",
                                              "Không bị xử phạt nếu sau đó cung cấp đủ"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hạn buộc đưa đất vào sử dụng đối với hành vi bỏ hoang đất trồng rừng là bao lâu?",
                              "options":  [
                                              "30 ngày",
                                              "60 ngày",
                                              "90 ngày",
                                              "120 ngày"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tối đa đối với tổ chức có hành vi vi phạm về điều kiện hoạt động dịch vụ trong lĩnh vực đất đai (Điều 29 Nghị định 123/2024/NĐ-CP) là bao nhiêu?",
                              "options":  [
                                              "100 triệu đồng",
                                              "120 triệu đồng",
                                              "200 triệu đồng",
                                              "400 triệu đồng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào của chủ đầu tư bị phạt tiền ở mức cao nhất (800 triệu - 1 tỷ đồng) theo Điều 58 Nghị định 16/2022/NĐ-CP?",
                              "options":  [
                                              "Không công khai thông tin dự án",
                                              "Ký hợp đồng mua bán không gắn quyền sử dụng đất",
                                              "Sử dụng vốn huy động sai mục đích",
                                              "Thu tiền mua nhà hình thành trong tương lai vượt tỷ lệ 70% trước bàn giao"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào của cá nhân môi giới BĐS bị áp dụng hình thức xử phạt bổ sung là tước chứng chỉ hành nghề (3-6 tháng)?",
                              "options":  [
                                              "Không có chứng chỉ hành nghề",
                                              "Chứng chỉ hành nghề hết hạn",
                                              "Cho người khác mượn/thuê chứng chỉ hành nghề",
                                              "Môi giới đồng thời là một bên trong hợp đồng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp kinh doanh dịch vụ BĐS không đủ số người có chứng chỉ môi giới theo quy định bị xử phạt ở mức nào?",
                              "options":  [
                                              "40 - 60 triệu đồng",
                                              "120 - 160 triệu đồng",
                                              "200 - 250 triệu đồng",
                                              "400 - 600 triệu đồng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tiền đối với tổ chức có hành vi chia sẻ thông tin về nhà ở và thị trường BĐS trái phép là bao nhiêu?",
                              "options":  [
                                              "40 - 60 triệu đồng",
                                              "60 - 80 triệu đồng",
                                              "80 - 100 triệu đồng",
                                              "100 - 120 triệu đồng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi ủy quyền hoặc giao cho bên thứ ba (không phải đơn vị phân phối) ký hợp đồng mua bán/thuê mua BĐS thay mặt chủ đầu tư bị xử phạt như thế nào?",
                              "options":  [
                                              "Phạt tiền 100 - 120 triệu đồng",
                                              "Phạt tiền 120 - 160 triệu đồng",
                                              "Phạt tiền 400 - 600 triệu đồng và có thể bị đình chỉ hoạt động KD BĐS (3-6 tháng)",
                                              "Chỉ bị cảnh cáo"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư dự án BĐS không công khai thông tin về BĐS đưa vào kinh doanh theo quy định sẽ bị xử phạt ở mức nào theo Điều 58 Nghị định 16/2022?",
                              "options":  [
                                              "400 - 600 triệu đồng.",
                                              "800 triệu - 1 tỷ đồng.",
                                              "100 - 120 triệu đồng.",
                                              "120 - 160 triệu đồng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc chủ đầu tư ký hợp đồng mua bán nhà ở hình thành trong tương lai mà không có bảo lãnh hợp lệ của ngân hàng thương mại bị xử phạt ở khung nào?",
                              "options":  [
                                              "100 - 120 triệu đồng.",
                                              "120 - 160 triệu đồng.",
                                              "400 - 600 triệu đồng.",
                                              "800 triệu - 1 tỷ đồng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây của chủ đầu tư KHÔNG bị phạt tiền ở mức cao nhất (800 triệu - 1 tỷ đồng) theo Điều 58 Nghị định 16/2022?",
                              "options":  [
                                              "Chuyển nhượng toàn bộ dự án không đủ điều kiện.",
                                              "Bàn giao nhà ở khi chưa hoàn thành việc nghiệm thu đưa công trình vào sử dụng.",
                                              "Huy động vốn không đúng quy định.",
                                              "Ký hợp đồng mua bán nhà ở không gắn với quyền sử dụng đất."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức kinh doanh dịch vụ sàn giao dịch BĐS không có quy chế hoạt động theo quy định bị xử phạt ở mức nào?",
                              "options":  [
                                              "40 - 60 triệu đồng.",
                                              "120 - 160 triệu đồng.",
                                              "200 - 250 triệu đồng.",
                                              "Không bị xử phạt, chỉ bị nhắc nhở."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân môi giới BĐS có hành vi cho người khác mượn chứng chỉ hành nghề của mình sẽ bị áp dụng hình thức xử phạt nào?",
                              "options":  [
                                              "Chỉ phạt tiền 40 - 60 triệu đồng.",
                                              "Phạt tiền 40 - 60 triệu đồng và bị tước quyền sử dụng chứng chỉ hành nghề từ 3-6 tháng.",
                                              "Chỉ bị tước quyền sử dụng chứng chỉ hành nghề vĩnh viễn.",
                                              "Cảnh cáo."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc không tuân thủ thủ tục \"đăng ký biến động đất đai\" khi có thay đổi về người sử dụng đất có thể dẫn đến hậu quả trực tiếp nào theo Nghị định 123/2024?",
                              "options":  [
                                              "Bị thu hồi đất ngay lập tức.",
                                              "Bị phạt tiền từ 2 - 3 triệu đồng (cá nhân) và buộc thực hiện thủ tục đăng ký.",
                                              "Bị truy cứu trách nhiệm hình sự.",
                                              "Hợp đồng chuyển nhượng bị vô hiệu đương nhiên."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc kết hợp giữa phạt tiền và các biện pháp khắc phục hậu quả cụ thể (buộc khôi phục, buộc thực hiện thủ tục...) trong hệ thống xử phạt Việt Nam phản ánh mục tiêu gì?",
                              "options":  [
                                              "Chỉ nhằm tối đa hóa nguồn thu từ tiền phạt.",
                                              "Vừa răn đe, trừng phạt, vừa khắc phục hậu quả và lập lại trật tự quản lý.",
                                              "Tạo thêm công việc cho các cơ quan hành chính.",
                                              "Giảm gánh nặng cho hệ thống tòa án."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi xây dựng hàng rào kiên cố lấn sang phần đất lưu không hành lang an toàn giao thông đường bộ có thể bị xử phạt theo quy định nào?",
                              "options":  [
                                              "Chỉ theo pháp luật về giao thông đường bộ.",
                                              "Chỉ theo pháp luật về xây dựng.",
                                              "Có thể bị xử phạt về hành vi lấn chiếm đất (đất công do Nhà nước quản lý.",
                                              "Chỉ bị yêu cầu tháo dỡ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc một sàn giao dịch BĐS cung cấp thông tin không trung thực về một dự án có thể dẫn đến hậu quả nào theo Nghị định 16/2022?",
                              "options":  [
                                              "Chỉ bị phạt tiền mức thấp nhất.",
                                              "Bị phạt tiền từ 200-250 triệu đồng và có thể bị đình chỉ hoạt động sàn (6-9 tháng).",
                                              "Chỉ bị yêu cầu cải chính thông tin",
                                              "Được miễn trừ trách nhiệm nếu thông tin do chủ đầu tư cung cấp"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ11 Thị trường BĐS (KTCS) done.docx",
        "topic":  "CĐ11 Thị trường BĐS",
        "questions":  [
                          {
                              "question":  "Tính bất động của bất động sản có thể hiểu là:",
                              "options":  [
                                              "Bất động sản dù được đem chuyển nhượng, bán nhưng chỉ được quyền sử dụng và khai thác",
                                              "Bất động sản dù được đem chuyển nhượng, bán nhưng chỉ được quyền sử dụng và khai thác, không thể chuyển Bất động sản đến nơi khác",
                                              "Bất động sản dù được đem chuyển nhượng, bán nhưng chỉ được quyền sử dụng và khai thác, không thể mua bán được",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Định nghĩa: “Bất động sản là các tài sản bao gồm: Đất đai; Nhà, công trình xây dựng gắn liền với đất đai, kể các tài sản gắn kiền với nhà, công trình xây dựng đó; Các tài sản khác gắn liền với đất đai; Các tài sản khác do pháp luật quy định”, là theo:",
                              "options":  [
                                              "Luật kinh doanh bất động sản 2023",
                                              "Bộ luật dân sự 2005 và Bộ luật dân sự 2015",
                                              "Luật Nhà ở 2023",
                                              "Luật đất đai 2024"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thị trường bất động sản mang tính vùng, tính khu vực sâu sắc vì:",
                              "options":  [
                                              "Thị trường bất động sản mang tính không tập trung, trải rộng mọi vùng trên đất nước",
                                              "Bất động sản là một hàng hóa cố định và không thể di dời về mặt vị trí và nó chịu ảnh hưởng của các yếu tố tập quán, thị hiếu, tâm lý từng vùng, từng khu vực",
                                              "Mỗi thị trường mang tính chất địa phương với quy mô và trình độ khác nhau do có sự phát triển không đồng đều giữa các vùng, các miền",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các chủ thể chính tham gia vào hoạt động trên thị trường bất động sản:",
                              "options":  [
                                              "Người mua và người bán",
                                              "Người mua, người bán và người môi giới",
                                              "Người mua, người bán và người môi giới và cơ quan quản lý Nhà nước liên quan",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cạnh tranh trong thị trường bất động sản là:",
                              "options":  [
                                              "Cạnh tranh tự do",
                                              "Cạnh tranh độc quyền",
                                              "Cạnh tranh hoàn hảo",
                                              "Cạnh tranh không hoàn hảo"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thị trường bất động sản sẽ là kênh đầu tư kém hấp dẫn đối với các nhà đầu tư nước ngoài khi:",
                              "options":  [
                                              "Môi trường pháp lý để phát triển thị trường bất động sản chưa đầy đủ",
                                              "Nền kinh tế phát triển không bền vững, hiện tượng đầu cơ tràn lan khiến giá nhà đất tăng cao",
                                              "Tình hình chính trị không ổn định",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cung về bất động sản trong thị trường bất động sản được xác định bằng:",
                              "options":  [
                                              "Toàn bộ bất động sản có sẵn",
                                              "Toàn bộ bất động sản có sẵn và bất động sản hình thành trong tương lai",
                                              "Toàn bộ bất động sản có thể và sẵn sàng tham gia giao dịch tại một thời điểm nào đó với một giá cả nào đó",
                                              "Cả A, B và C đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đặc trưng của giai đoạn sơ khởi trong thị trường bất động sản là:",
                              "options":  [
                                              "Là giai đoạn thị trường phát triển mang tính tự phát.",
                                              "Là giai đoạn của có sự tham gia của doanh nghiệp Kinh doanh bất động sản.",
                                              "Là giai đoạn bất động sản được chứng khoán hóa.",
                                              "Tất cả đều sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bất động sản có thuộc tính:",
                              "options":  [
                                              "Bất động",
                                              "Không đồng nhất",
                                              "Khan hiếm, bền vững, đời sống kinh tế lâu dài",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đặc trưng nào sau đây không phải là đặc trưng của bất động sản:",
                              "options":  [
                                              "Khả năng co giãn của bất động sản kém",
                                              "Thời gian mua bán, giao dịch ngắn, chi phí mua bán giao dịch thấp",
                                              "Có tính thích ứng và chịu sự ảnh hưởng lẫn nhau",
                                              "Khả năng chuyển hóa thành tiền mặt kém linh hoạt, chịu sự can thiệp và quản lý chặt chẽ của nhà nước"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thị trường bất động sản được hình thành và phát triển chịu tác động của yếu tố nào sau đây:",
                              "options":  [
                                              "Kinh tế, pháp luật",
                                              "Chính trị, xã hội",
                                              "Tốc độ phát triển của dân cư",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các yếu tố nào sau đây không phải là yếu tố pháp lý liên quan đến bất động sản:",
                              "options":  [
                                              "Tình trạng pháp lý của bất động sản",
                                              "Các quy định về xây dựng và kiến trúc gắn với bất động sản",
                                              "Vị trí bất động sản",
                                              "Tình trạng tranh chấp bất động sản"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo bạn hàng hóa nào sau đây có khả năng chuyển hóa thành tiền mặt kém linh hoạt nhất?",
                              "options":  [
                                              "Vàng",
                                              "Kim cương",
                                              "Bất động sản",
                                              "Cổ phiếu"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vì sao bất động sản là tài sản đặc biệt?",
                              "options":  [
                                              "Vì bất động sản có tính bền vững theo thời gian, có vị trí cố định; có tính khan hiếm và đa chức năng sử dụng",
                                              "Vì bất động sản tăng giá theo thời gian",
                                              "Vì bất động sản khác biệt ở các vùng miền khác nhau",
                                              "Vì cung bất động sản có mức độ co giãn thấp, cầu bất động sản có mức độ co giãn cao (nhạy)"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu số lượng “cung” nhà ở cố định và “cầu” nhà ở giảm, giá nhà sẽ thay đổi như thế nào?",
                              "options":  [
                                              "Tăng",
                                              "Giảm",
                                              "Không đổi",
                                              "Tăng xong giảm"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào không phải là yếu tố tác động đến “cầu” thị trường nhà ở?",
                              "options":  [
                                              "Chi phí nguyên vật liệu; chi phí nhân công",
                                              "Chi phí giao dịch",
                                              "Chi phí môi giới",
                                              "Đáp án D"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thị trường bất động sản là:",
                              "options":  [
                                              "Một môi trường trong đó giữa người mua và người bán tác động qua lại lẫn nhau để thực hiện việc mua bán bất động sản thông qua cơ chế giá.",
                                              "Một hệ thống các quan hệ, thông qua đó các giao dịch về bất động sản của bên tham gia được thực hiện",
                                              "Cả A và B đều đúng",
                                              "Cả A và B đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tính bất động của bất động sản được hiểu là:",
                              "options":  [
                                              "Bất động sản dù được đem chuyển nhượng, bán nhưng chỉ được quyền sử dụng và khai thác",
                                              "Bất động sản dù được đem chuyển nhượng, bán nhưng chỉ được quyền sử dụng và khai thác, không thể chuyển Bất động sản đến nơi khác.",
                                              "Bất động sản dù được đem chuyển nhượng, bán nhưng chỉ được quyền sử dụng và khai thác, không thể mua bán được.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đặc trưng quan trọng nhất của thị trường bất động sản",
                              "options":  [
                                              "Khả năng chuyển hoá thành tiền mặt kém linh hoạt",
                                              "Sự can thịệp và quản lý của Nhà nước chặt chẽ",
                                              "Không có thị trường trung tâm",
                                              "Khả năng co giãn của cung bất động sản kém"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sự thay đổi chính sách của Chính phủ, sự thay đổi dự báo tương lai ảnh hưởng đến",
                              "options":  [
                                              "Cung bất động sản",
                                              "Cầu bất động sản",
                                              "Cả A và B đều đúng",
                                              "Cả A và B đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cung bất động sản phụ thuộc vào.",
                              "options":  [
                                              "Chính sách xã hội",
                                              "Sự bùng phát trong xây dựng",
                                              "Tính năng động của thị trường tài chính",
                                              "Tất cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lạm phát có tác động ________ lên thị trường bất động sản.",
                              "options":  [
                                              "Tích cực",
                                              "Tiêu cực",
                                              "Vừa tích cực vừa tiêu cực",
                                              "Không tác động"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lãi suất tăng sẽ tác động _______ lên thị trường bất động sản.",
                              "options":  [
                                              "Tích cực",
                                              "Tiêu cực",
                                              "Vừa tích cực vừa tiêu cực",
                                              "Không tác động"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vì sao giá đất lại khác nhau dù ở vị trí kế cận:",
                              "options":  [
                                              "Vì quyền sử dụng đất khác nhau",
                                              "Điều kiện sinh thái, kinh thế xã hội của đất khác nhau",
                                              "Phương thức sử dụng khác nhau",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vai trò của nhà nước đối với thị trường bất động sản",
                              "options":  [
                                              "Định hướng phát triển, điều tiết thị trường, tạo môi trường pháp lý, cơ chế, chính sách thuận lợi, hỗ trợ phát triển, kết cấu hạ tầng, an sinh xã hội;",
                                              "Ổn định kinh tế vĩ mô.",
                                              "Kiểm tra, giám sát",
                                              "Cả A, B và C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tính chất nào không phải là tính chất của bất động sản",
                              "options":  [
                                              "Tính bền vững",
                                              "Có giá trị lớn",
                                              "Tính khác biệt",
                                              "Tính không cố định về vị trí"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nghiên cứu thị trường nhằm để:",
                              "options":  [
                                              "Dự báo thị trường mục tiêu,",
                                              "Dự báo triển vọng phát triển của từng loại dịch vụ;",
                                              "Dự báo các rủi ro có thể xảy ra trên thị trường:",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thị trường bất động sản cư trú bao gồm:",
                              "options":  [
                                              "Nhà biệt thự, nhà vườn, nhà phố riêng biệt và phố liên kết, căn hộ chung cư cao tầng.",
                                              "Nhà máy, xí nghiệp, các sàn giao dịch bất động sản, văn phòng công ty.",
                                              "Đường xá, cầu cống, các cửa hàng kinh doanh thương mại.",
                                              "Không có đáp án nào đúng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một bất động sản để có giá trị cần thiết phải có các đặc tính sau:",
                              "options":  [
                                              "Có tính hữu ích",
                                              "Có tính khan hiếm",
                                              "Có tính yêu cầu và có thể chuyển giao được",
                                              "Bao gồm cả A, B, C."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên nhân thị trường bất động sản mang tính vùng miền sâu sắc",
                              "options":  [
                                              "Do hàng hoá bất động sản có đăc tính này và điều kiện tự nhiên và trình độ phát triển kinh tế xã hội của các vùng là khác nhau.",
                                              "Do thị trường bất động sản có mối liên hệ mật thiết với thị trường vốn, tài chính",
                                              "Do thị trường bất động sản ngày càng chịu sự chi phối chặt chẽ của pháp luật.",
                                              "Tất cả sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá thành bất động sản bao gồm:",
                              "options":  [
                                              "Chi phí đất đai, chi phí chuẩn bị xây dựng, chi phí xây dựng",
                                              "Chi phí đất đai, chi phí chuẩn bị xây dựng, chi phí xây dựng, chi phí quản lý doanh nghiệp, chi phí tiêu thụ",
                                              "Chi phí đất đai, chi phí chuẩn bị xây dựng, chi phí xây dựng, chi phí quản lý doanh nghiệp, chi phí tiêu thụ, thuế phí và chi phí dự phòng",
                                              "Tất cả đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hàng hóa bất động sản có những đặc điểm riêng sau:",
                              "options":  [
                                              "Khả năng co giãn của cung bất động sản kém; thời gian mua bán, giao dịch dài chi phí mua bán giao dịch cao;",
                                              "Có tính thích ứng và chịu sự ảnh hưởng lẫn nhau;",
                                              "Khả năng chuyển hóa thành tiền mặt kém linh hoạt, sự can thiệp và quản lý của nhà nước chặt chẽ;",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi phân tích thông tin về bất động sản cần phải phân tích những thông tin gì?",
                              "options":  [
                                              "Thông tin về đặc trưng của thị trường bất động sản cần định giá",
                                              "Thông tin về khách hàng (đặc điểm, sở thích, nhu cầu của khách hàng);",
                                              "Thông tin khảo sát từ thị trường bất động sản",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong thị trường bất động sản, vai trò của môi giới bất động sản là:",
                              "options":  [
                                              "Trợ giúp người đầu tư phát triển từ lúc lập kế hoạch phát triển các hạng mục cho đến lúc hoàn thành việc tiêu thụ, thực hiện được mục tiêu thu lợi nhuận",
                                              "Thông qua điều tra thị trường mà tìm hiểu các yêu cầu tiềm năng của thị trường, dự báo hành vi, sở thích, phong trào và thị hiếu của khách hàng tiềm năng để giúp các nhà đầu tư định vị thị trường đúng đắn.",
                                              "Thông qua các hoạt động quảng cáo, tuyên truyền để thu hút các nhà đầu tư kinh doanh (cho thuê)",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chức năng cơ bản của nhà nước đối với thị trường bất động sản được thể hiện trên các phương diện sau:",
                              "options":  [
                                              "Tạo khung pháp lý.",
                                              "Xây dựng hệ thống quản lý.",
                                              "Thực hiện điều tiết thị trường.",
                                              "Tất cả đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thông thường khi cầu bất động sản tăng mà cung bất động sản giữ ổn định thì trong ngắn hạn:",
                              "options":  [
                                              "Giá của bất động sản có xu hướng tăng.",
                                              "Giá của bất động sản có xu hướng giảm xuống.",
                                              "Giá của bất động sản có xu hướng ổn định",
                                              "Giá của bất động sản có xu hướng giảm rồi tăng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguồn cầu bất động sản có thể là những đối tượng nào sau đây?",
                              "options":  [
                                              "Tổ chức, doanh nghiệp kinh doanh bất động sản.",
                                              "Các cá nhân có nhu cầu thuê, mua bất động sản.",
                                              "Các nhà đầu tư bất động sản.",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá thành khai phá bất động sản ảnh hưởng đến",
                              "options":  [
                                              "Cung bất động sản",
                                              "Cầu bất động sản",
                                              "Cả A và B đều đúng",
                                              "Cả A và B đều sai"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sự thay đổi thu nhập ảnh hưởng đến",
                              "options":  [
                                              "Cung bất động sản",
                                              "Cầu bất động sản",
                                              "Cả A và B đều đúng",
                                              "Cả A và B đều sai"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo quan điểm thị trường Cầu bất động sản là gì?",
                              "options":  [
                                              "Là số người có nhu cầu mua bất động sản.",
                                              "Là khối lượng hàng hóa bất động sản mà người tiêu dùng sẵn sàng chi trả để có được và có khả năng thanh toán với mức giá nhất định để nhận khối lượng hang hóa đó trên thị trường.",
                                              "Là số lượng người có nhu cầu bán bất động sản.",
                                              "Tất cả đều sai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo quan điểm thị trường Cung bất động sản trên thị trường là gì?",
                              "options":  [
                                              "Là số lượng hàng hóa người có nhu cầu mua bất động sản",
                                              "Là toàn bộ khối lượng hàng hóa bất động sản được đưa ra thị trường tại một thời điểm nhất định với mức giá nhất định.",
                                              "Là số lượng hàng hóa người có nhu cầu bán bất động sản.",
                                              "Tất cả đều sai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cầu bất động sản chịu ảnh hưởng bởi yếu tố nào?",
                              "options":  [
                                              "Cung, cầu bất động sản thay thế.",
                                              "Tâm lý và kỳ vọng trên thị trường.",
                                              "Cung tiền trên thị trường tài chính; sự thay đổi ở thị trường chứng khoán.",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là chủ thể tham gia trên thị trường bất động sản?",
                              "options":  [
                                              "Kinh tế, pháp luật.",
                                              "Chính trị, xã hội.",
                                              "Tốc độ phát triển của dân cư.",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thị trường bất động sản được hình thành và phát triển chịu tác động của các yếu tố nào sau đây:",
                              "options":  [
                                              "Kinh tế, pháp luật.",
                                              "Chính trị, xã hội.",
                                              "Tốc độ phát triển của dân cư.",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thị trường bất động sản tư liệu sản xuất bao gồm:",
                              "options":  [
                                              "Thị trường đất đai",
                                              "Thị trường bất động sản mặt bằng và nhà xưởng công nghiệp.",
                                              "Cả A và B đều sai.",
                                              "Cả A và B đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố sau đây nào ảnh hưởng đến giá trị bất động sản?",
                              "options":  [
                                              "Các yếu tố nội tại bất động sản như đăc điểm kinh tế, kỹ thuật, pháp lý của bất động sản",
                                              "Vị trí bất động sản và các yếu tố quy hoạch kinh tế, xã hội của khu vực; mức sinh lợi và triển vọng của bất động sản.",
                                              "Triển vọng phát triển và mức sinh lời của ngành sử dụng bất động sản",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là đặc điểm của Bất động sản:",
                              "options":  [
                                              "Tính cố định về vị trí.",
                                              "Tính dị biệt.",
                                              "Tính ảnh hưởng lẫn nhau.",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhận xét nào sau đây là sai?",
                              "options":  [
                                              "Thị trường bất động sản là thị trường hoàn hảo.",
                                              "Thị trường bất động sản mang tính vùng và tính khu vực sâu sắc.",
                                              "Thị trường bất động sản có liên hệ mật thiết với thị trường vốn.",
                                              "Thị trường bất động sản có sự tách biệt giữa hàng hóa và địa điểm giao dịch"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền sử dụng đất được gọi là hàng hóa khi:",
                              "options":  [
                                              "Được mọi người cho phép tham gia vào thị trường.",
                                              "Có đủ điều kiện tham gia vào thị trường theo quy định của pháp luật đất đai.",
                                              "Cả A và B đều đúng",
                                              "Cả A và B đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bất động sản được phân loại là bất động sản dịch vụ gồm:",
                              "options":  [
                                              "Văn phòng, cửa hàng, siêu thị kho, bãi",
                                              "Khách sạn, nhà nghỉ hay nhà trọ, nhà liền kề, nhà xưởng",
                                              "Khách sạn, nhà nghỉ, văn phòng, cửa hàng, siêu thị",
                                              "Văn phòng, cửa hàng, siêu thị, nhà liền kề hay nhà vườn"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ12 Nguyên Lý hình giá, tư vấn giá BĐS (KTCS) done.docx",
        "topic":  "CĐ12 Nguyên Lý hình giá, tư vấn giá BĐS",
        "questions":  [
                          {
                              "question":  "Khái niệm nào sau đây thể hiện tốt nhất mức giá ước tính mà tài sản có thể được mua bán vào ngày thẩm định giá, giữa các bên sẵn lòng, hành động có hiểu biết, thận trọng và không bị ép buộc?",
                              "options":  [
                                              "Giá trị sử dụng",
                                              "Giá trị đầu tư",
                                              "Giá trị thị trường",
                                              "Giá cả giao dịch"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá trị của bất động sản có xu hướng được giới hạn bởi chi phí để có được một bất động sản thay thế tương đương là thể hiện của nguyên tắc nào?",
                              "options":  [
                                              "Nguyên tắc Cung - Cầu",
                                              "Nguyên tắc Thay thế",
                                              "Nguyên tắc Đóng góp",
                                              "Nguyên tắc Sử dụng cao nhất và hiệu quả nhất"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp định giá đất nào dựa trên việc xác định giá trị quyền sử dụng đất bằng cách lấy tổng doanh thu phát triển ước tính trừ đi tổng chi phí phát triển ước tính?",
                              "options":  [
                                              "Phương pháp so sánh",
                                              "Phương pháp thu nhập",
                                              "Phương pháp thặng dư",
                                              "Phương pháp hệ số điều chỉnh giá đất"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Đất đai 2024, cơ quan nào có thẩm quyền ban hành Bảng giá đất?",
                              "options":  [
                                              "Chính phủ",
                                              "Bộ Tài nguyên và Môi trường",
                                              "Hội đồng nhân dân cấp tỉnh",
                                              "Ủy ban nhân dân cấp tỉnh"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Giá 2023 có hiệu lực thi hành từ ngày nào?",
                              "options":  [
                                              "01/01/2024",
                                              "01/07/2024",
                                              "01/08/2024",
                                              "01/01/2025"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu KHÔNG phải là một trong các nguyên tắc định giá đất theo Điều 158 Luật Đất đai 2024?",
                              "options":  [
                                              "Theo nguyên tắc thị trường",
                                              "Theo nguyên tắc lợi nhuận tối đa",
                                              "Tuân thủ phương pháp, trình tự, thủ tục",
                                              "Bảo đảm tính độc lập giữa các chủ thể"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá đất cụ thể được áp dụng trong trường hợp nào sau đây theo Luật Đất đai 2024?",
                              "options":  [
                                              "Tính thuế sử dụng đất phi nông nghiệp đối với hộ gia đình",
                                              "Tính tiền thuê đất trả tiền hàng năm",
                                              "Tính tiền bồi thường khi Nhà nước thu hồi đất",
                                              "Tính phí trước bạ khi chuyển nhượng quyền sử dụng đất"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hoạt động thẩm định giá tài sản (bao gồm bất động sản trừ định giá đất) chủ yếu chịu sự điều chỉnh của luật nào?",
                              "options":  [
                                              "Luật Đất đai 2024",
                                              "Luật kinh doanh bất động sản 2023",
                                              "Luật Giá 2023",
                                              "Luật Xây dựng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân muốn hành nghề thẩm định viên về giá cần đáp ứng điều kiện nào về kinh nghiệm công tác thực tế theo Luật Giá 2023 (trường hợp không có bằng ĐH chuyên ngành giá/TĐG)?",
                              "options":  [
                                              "Từ đủ 12 tháng",
                                              "Từ đủ 24 tháng",
                                              "Từ đủ 36 tháng",
                                              "Từ đủ 48 tháng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc đạo đức nghề nghiệp nào yêu cầu thẩm định viên về giá phải trung thực, thẳng thắn trong công việc và các mối quan hệ nghề nghiệp?",
                              "options":  [
                                              "Tính độc lập, khách quan",
                                              "Tính chính trực",
                                              "Năng lực chuyên môn và tính thận trọng",
                                              "Tính bảo mật"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, dịch vụ tư vấn giá bất động sản phải do đối tượng nào cung cấp?",
                              "options":  [
                                              "Cá nhân có kinh nghiệm về giá",
                                              "Chuyên gia kinh tế độc lập",
                                              "Doanh nghiệp kinh doanh dịch vụ bất động sản",
                                              "Doanh nghiệp thẩm định giá"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bảng giá đất lần đầu theo Luật Đất đai 2024 sẽ được công bố và áp dụng thống nhất trên cả nước từ ngày nào?",
                              "options":  [
                                              "01/08/2024",
                                              "01/01/2025",
                                              "01/07/2025",
                                              "01/01/2026"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp định giá đất nào sử dụng giá đất trong Bảng giá đất nhân với một hệ số điều chỉnh (K)?",
                              "options":  [
                                              "Phương pháp so sánh",
                                              "Phương pháp thu nhập",
                                              "Phương pháp thặng dư",
                                              "Phương pháp hệ số điều chỉnh giá đất"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là một trong những yêu cầu về thông tin đầu vào khi định giá đất theo Điều 158 Luật Đất đai 2024?",
                              "options":  [
                                              "Giá đất ghi trong hợp đồng chuyển nhượng quyền sử dụng đất (hình thành trong vòng 36 tháng)",
                                              "Giá đất do UBND cấp xã công bố",
                                              "Giá đất trúng đấu giá quyền sử dụng đất (sau khi hoàn thành nghĩa vụ tài chính, hình thành trong vòng 24 tháng)",
                                              "Giá đất theo khung giá đất của Chính phủ"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi áp dụng phương pháp so sánh để định giá đất, cần lựa chọn tối thiểu bao nhiêu thửa đất so sánh?",
                              "options":  [
                                              "1 thửa",
                                              "2 thửa",
                                              "3 thửa",
                                              "5 thửa"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối tượng nào sau đây KHÔNG được hành nghề thẩm định giá theo quy định tại Khoản 2 Điều 45 Luật Giá 2023?",
                              "options":  [
                                              "Người có Thẻ thẩm định viên về giá hết hạn.",
                                              "Người đang trong thời gian bị khởi tố, truy tố, xét xử.",
                                              "Người có bằng đại học chuyên ngành thẩm định giá.",
                                              "Người làm việc tại doanh nghiệp thẩm định giá."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc định giá nào cho rằng giá trị của một bộ phận BĐS được đo bằng mức độ đóng góp vào tổng giá trị của toàn bộ BĐS?",
                              "options":  [
                                              "Nguyên tắc Thay thế",
                                              "Nguyên tắc Đóng góp",
                                              "Nguyên tắc Cân bằng",
                                              "Nguyên tắc Phù hợp"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ sở giá trị nào thường được sử dụng phổ biến nhất trong thẩm định giá bất động sản?",
                              "options":  [
                                              "Giá trị thanh lý",
                                              "Giá trị bảo hiểm",
                                              "Giá trị thị trường",
                                              "Giá trị tài sản bắt buộc phải bán"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bước nào sau đây thường KHÔNG nằm trong quy trình thẩm định giá BĐS chuyên nghiệp?",
                              "options":  [
                                              "Xác định nhiệm vụ định giá và cơ sở giá trị.",
                                              "Khảo sát hiện trường và thu thập thông tin.",
                                              "Quyết định giá bán cuối cùng cho khách hàng.",
                                              "Lựa chọn phương pháp và ước tính giá trị BĐS."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp chi phí thường được ưu tiên sử dụng cho loại bất động sản nào?",
                              "options":  [
                                              "Bất động sản tạo thu nhập ổn định (văn phòng cho thuê).",
                                              "Đất trống có tiềm năng phát triển dự án.",
                                              "Bất động sản công cộng, chuyên dùng, ít có giao dịch (trường học, bệnh viện).",
                                              "Căn hộ chung cư trong dự án mới mở bán."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Giảm giá tích lũy\" trong phương pháp chi phí bao gồm những loại nào?",
                              "options":  [
                                              "Chỉ hao mòn vật lý.",
                                              "Chỉ lỗi thời chức năng.",
                                              "Hao mòn vật lý, lỗi thời chức năng và lỗi thời kinh tế (bên ngoài).",
                                              "Chỉ lỗi thời kinh tế (bên ngoài)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Đất đai 2024, thông tin về giá đất ghi trong hợp đồng chuyển nhượng được sử dụng làm căn cứ định giá đất phải được hình thành trong thời gian tối đa bao lâu tính đến thời điểm định giá?",
                              "options":  [
                                              "6 tháng",
                                              "12 tháng",
                                              "24 tháng",
                                              "36 tháng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để được cấp Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ thẩm định giá, doanh nghiệp phải có tối thiểu bao nhiêu thẩm định viên về giá đăng ký hành nghề tại trụ sở chính?",
                              "options":  [
                                              "1 người",
                                              "3 người",
                                              "5 người",
                                              "7 người"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích chính của việc xác định \"Giá đất cụ thể\" là gì?",
                              "options":  [
                                              "Làm cơ sở tính thuế sử dụng đất hàng năm cho mọi đối tượng.",
                                              "Phản ánh giá trị thị trường tại thời điểm cho các giao dịch/quyết định quan trọng (bồi thường, đấu giá, giao đất cho tổ chức...).",
                                              "Công bố công khai để người dân tham khảo khi giao dịch.",
                                              "Làm căn cứ tính phí trước bạ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi áp dụng phương pháp thặng dư, \"lợi nhuận của nhà đầu tư\" được tính vào đâu?",
                              "options":  [
                                              "Tổng doanh thu phát triển (DT)",
                                              "Tổng chi phí phát triển (CP)",
                                              "Giá trị còn lại của đất (V)",
                                              "Chi phí tài chính"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bước đầu tiên trong quy trình định giá đất bằng phương pháp so sánh theo Nghị định 71/2024/NĐ-CP là gì?",
                              "options":  [
                                              "Lựa chọn các thửa đất so sánh.",
                                              "Điều chỉnh giá các thửa đất so sánh.",
                                              "Khảo sát, thu thập thông tin về thửa đất cần định giá và các thửa đất dự kiến so sánh.",
                                              "Ước tính giá trị thửa đất cần định giá."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân có Thẻ thẩm định viên về giá thì có cần Giấy chứng nhận hoàn thành khóa đào tạo nghiệp vụ về giá đất để hành nghề tư vấn xác định giá đất không?",
                              "options":  [
                                              "Có, bắt buộc phải có cả hai.",
                                              "Không, chỉ cần Thẻ thẩm định viên về giá là đủ.",
                                              "Chỉ cần khi tư vấn cho dự án lớn.",
                                              "Tùy thuộc vào yêu cầu của từng tỉnh."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong các cách tiếp cận thẩm định giá BĐS theo Chuẩn mực Việt Nam, cách tiếp cận nào KHÔNG được liệt kê?",
                              "options":  [
                                              "Cách tiếp cận từ thị trường",
                                              "Cách tiếp cận từ chi phí",
                                              "Cách tiếp cận từ thu nhập",
                                              "Cách tiếp cận từ lợi nhuận kỳ vọng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc lập \"Báo cáo kết quả thẩm định giá\" và phát hành \"Chứng thư thẩm định giá\" là bước nào trong quy trình thẩm định giá?",
                              "options":  [
                                              "Bước đầu tiên",
                                              "Bước khảo sát hiện trường",
                                              "Bước phân tích thông tin",
                                              "Bước cuối cùng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc nào nhấn mạnh rằng giá trị BĐS được hình thành bởi sự kỳ vọng về những lợi ích trong tương lai?",
                              "options":  [
                                              "Nguyên tắc Thay đổi",
                                              "Nguyên tắc Phù hợp",
                                              "Nguyên tắc Dự báo (Lường trước)",
                                              "Nguyên tắc Cạnh tranh"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp định giá đất nào phù hợp nhất để xác định giá đất nông nghiệp dựa trên thu nhập ổn định hàng năm?",
                              "options":  [
                                              "Phương pháp so sánh",
                                              "Phương pháp thu nhập",
                                              "Phương pháp thặng dư",
                                              "Phương pháp hệ số điều chỉnh"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xây dựng Bảng giá đất chi tiết đến từng thửa đất theo Luật Đất đai 2024 yêu cầu phải có điều kiện gì về hạ tầng thông tin?",
                              "options":  [
                                              "Mạng lưới internet tốc độ cao",
                                              "Hệ thống định vị toàn cầu (GPS)",
                                              "Bản đồ địa chính số và cơ sở dữ liệu giá đất",
                                              "Hệ thống camera giám sát"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây bị nghiêm cấm trong lĩnh vực thẩm định giá theo Luật Giá 2023?",
                              "options":  [
                                              "Thu thập thông tin thị trường để thẩm định giá.",
                                              "Áp dụng nhiều phương pháp thẩm định giá.",
                                              "Cạnh tranh không lành mạnh về giá dịch vụ thẩm định giá.",
                                              "Báo cáo kết quả thẩm định giá cho khách hàng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi định giá đất bằng phương pháp so sánh, việc điều chỉnh giá của thửa đất so sánh được thực hiện như thế nào nếu thửa đất so sánh tốt hơn thửa đất cần định giá về một yếu tố nào đó?",
                              "options":  [
                                              "Cộng thêm một khoản tiền vào giá thửa đất so sánh.",
                                              "Trừ đi một khoản tiền khỏi giá thửa đất so sánh.",
                                              "Giữ nguyên giá thửa đất so sánh.",
                                              "Nhân giá thửa đất so sánh với một hệ số lớn hơn 1."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức nào chịu trách nhiệm chính trong việc ban hành hệ thống Chuẩn mực thẩm định giá Việt Nam?",
                              "options":  [
                                              "Chính phủ",
                                              "Bộ Tài nguyên và Môi trường",
                                              "Bộ Xây dựng",
                                              "Bộ Tài chính"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Kinh doanh BĐS 2023, cá nhân hành nghề tư vấn bất động sản cần đáp ứng yêu cầu gì?",
                              "options":  [
                                              "Phải có Thẻ thẩm định viên về giá.",
                                              "Phải có Chứng chỉ hành nghề môi giới BĐS.",
                                              "Phải có bằng cấp, chứng chỉ về lĩnh vực mình trực tiếp tư vấn.",
                                              "Không yêu cầu bằng cấp, chỉ cần kinh nghiệm."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích của việc phân tích \"sử dụng cao nhất và hiệu quả nhất\" trong thẩm định giá BĐS là gì?",
                              "options":  [
                                              "Xác định chi phí xây dựng tối thiểu.",
                                              "Tìm ra phương án sử dụng mang lại giá trị cao nhất cho BĐS trong điều kiện cho phép.",
                                              "Đánh giá tuổi thọ còn lại của công trình.",
                                              "Xác định giá trị thanh lý của BĐS."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo quy định tại Luật Đất đai 2024, phương thức xây dựng Bảng giá đất chi tiết đến từng thửa đất (dự kiến áp dụng từ 01/01/2026) sẽ dựa trên việc xác định các yếu tố nào?",
                              "options":  [
                                              "Giá giao dịch thành công gần nhất của chính thửa đất đó.",
                                              "Giá đất trung bình của toàn tỉnh/thành phố.",
                                              "Vùng giá trị và các thửa đất chuẩn đại diện trong vùng.",
                                              "Đơn giá bồi thường do Nhà nước quy định."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thông tin nào sau đây KHÔNG được Luật Đất đai 2024 (Điều 158) liệt kê là căn cứ trực tiếp để định giá đất?",
                              "options":  [
                                              "Mục đích sử dụng đất được giao, cho thuê, công nhận.",
                                              "Thời hạn sử dụng đất còn lại.",
                                              "Giá đất trong Bảng giá đất do UBND cấp tỉnh ban hành.",
                                              "Giá đất thị trường trúng đấu giá quyền sử dụng đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc đạo đức \"Năng lực chuyên môn và Tính thận trọng\" đòi hỏi thẩm định viên về giá phải làm gì?",
                              "options":  [
                                              "Luôn đưa ra mức giá trị cao nhất có thể.",
                                              "Chỉ nhận thực hiện công việc thuộc lĩnh vực mình có chuyên môn và kinh nghiệm.",
                                              "Duy trì kiến thức, kỹ năng chuyên môn cần thiết và hành động cẩn trọng, tuân thủ chuẩn mực.",
                                              "Bảo mật tuyệt đối mọi thông tin của khách hàng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Giá 2023, danh sách thẩm định viên về giá đủ điều kiện hành nghề được cơ quan nào thông báo công khai?",
                              "options":  [
                                              "Doanh nghiệp thẩm định giá nơi thẩm định viên làm việc.",
                                              "Sở Tài chính cấp tỉnh.",
                                              "Bộ Tài chính.",
                                              "Hội Thẩm định giá Việt Nam."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi áp dụng phương pháp so sánh, tại sao các giao dịch giữa người thân trong gia đình hoặc bán tài sản trong tình trạng khẩn cấp thường không được coi là bằng chứng thị trường đáng tin cậy để xác định giá trị thị trường?",
                              "options":  [
                                              "Vì giá trị giao dịch thường thấp hơn giá thị trường.",
                                              "Vì thông tin về các giao dịch này khó thu thập.",
                                              "Vì các bên tham gia có thể không hành động hoàn toàn khách quan, tự nguyện hoặc không có đủ thời gian tiếp thị.",
                                              "Vì pháp luật cấm sử dụng các giao dịch này."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây bắt buộc phải sử dụng \"Giá đất cụ thể\" thay vì \"Bảng giá đất\" theo Luật Đất đai 2024?",
                              "options":  [
                                              "Tính tiền thuê đất trả tiền hàng năm đối với hộ gia đình.",
                                              "Tính thuế sử dụng đất nông nghiệp.",
                                              "Tính tiền sử dụng đất khi Nhà nước giao đất có thu tiền sử dụng đất cho tổ chức kinh tế (không qua đấu giá).",
                                              "Tính lệ phí trước bạ nhà đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khái niệm \"Giá cả\" (Price) khác với \"Giá trị thị trường\" (Market Value) ở điểm cơ bản nào?",
                              "options":  [
                                              "Giá cả luôn thấp hơn giá trị thị trường.",
                                              "Giá cả là số tiền giao dịch thực tế trong một hoàn cảnh cụ thể, còn giá trị thị trường là mức giá ước tính theo điều kiện chuẩn.",
                                              "Giá cả do Nhà nước quy định, giá trị thị trường do doanh nghiệp thẩm định giá xác định.",
                                              "Giá cả chỉ áp dụng cho bất động sản mới, giá trị thị trường áp dụng cho bất động sản mới cũ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp thẩm định giá vi phạm nghiêm trọng Chuẩn mực thẩm định giá Việt Nam hoặc quy tắc đạo đức nghề nghiệp có thể dẫn đến hậu quả pháp lý nào theo Luật Giá 2023?",
                              "options":  [
                                              "Chỉ bị phạt tiền.",
                                              "Bị cảnh cáo và yêu cầu khắc phục.",
                                              "Có thể bị đình chỉ kinh doanh hoặc thu hồi Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ thẩm định giá.",
                                              "Người đại diện pháp luật bị cấm hành nghề vĩnh viễn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan nào chịu trách nhiệm chính trong việc kiểm tra, theo dõi việc chấp hành pháp luật về tư vấn xác định giá đất của các tổ chức, cá nhân trên địa bàn tỉnh?",
                              "options":  [
                                              "Bộ Tài nguyên và Môi trường",
                                              "Thanh tra Chính phủ",
                                              "Cơ quan có chức năng quản lý đất đai cấp tỉnh (Sở Nông nghiệp và Môi trường)",
                                              "Công an tỉnh"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Rủi ro lớn nhất khi thẩm định viên quá tin tưởng vào các bằng chứng giao dịch trong quá khứ khi áp dụng phương pháp so sánh là gì?",
                              "options":  [
                                              "Bỏ qua các yếu tố lỗi thời của BĐS mục tiêu.",
                                              "Không phản ánh đúng giá trị thị trường tại thời điểm thẩm định giá nếu thị trường đã có những thay đổi đáng kể.",
                                              "Ước tính sai chi phí xây dựng.",
                                              "Vi phạm nguyên tắc bảo mật thông tin."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Giá 2023, việc Nhà nước định giá đối với hàng hóa, dịch vụ cụ thể phải tuân theo nguyên tắc nào?",
                              "options":  [
                                              "Đảm bảo lợi nhuận cao nhất cho nhà sản xuất.",
                                              "Phù hợp với giá thế giới.",
                                              "Bù đắp chi phí sản xuất, kinh doanh hợp lý, lợi nhuận phù hợp thị trường, cân đối cung cầu và chính sách Kinh tế - xã hội.",
                                              "Thấp hơn giá thị trường để hỗ trợ người tiêu dùng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu phương pháp so sánh và phương pháp thu nhập cho cùng một BĐS đưa ra hai kết quả giá trị khác nhau đáng kể, thẩm định viên nên làm gì trong bước hòa hợp kết quả?",
                              "options":  [
                                              "Lấy trung bình cộng của hai kết quả.",
                                              "Chọn kết quả cao hơn.",
                                              "Chọn kết quả thấp hơn.",
                                              "Xem xét lại toàn bộ dữ liệu, các bước phân tích, điều chỉnh của từng phương pháp, đánh giá độ tin cậy và sự phù hợp của từng phương pháp để đưa ra kết luận cuối cùng có giải trình hợp lý."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật Đất đai 2024 yêu cầu Bảng giá đất phải được điều chỉnh, sửa đổi, bổ sung hàng năm (áp dụng từ 01/01/2026) nhằm mục đích gì?",
                              "options":  [
                                              "Giảm khối lượng công việc cho cơ quan định giá.",
                                              "Tạo sự ổn định tuyệt đối cho thị trường.",
                                              "Giúp Bảng giá đất phản ánh kịp thời hơn những biến động của giá thị trường so với chu kỳ 5 năm trước đây.",
                                              "Tăng nguồn thu thuế đất đột biến hàng năm."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ13 TỔNG QUAN MÔI GIỚI 1 (KTCM 1-50).docx",
        "topic":  "CĐ13 TỔNG QUAN MÔI GIỚI 1 (KTCM 1-50)",
        "questions":  [
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023 (hiệu lực 01/08/2024), điều kiện tiên quyết để một cá nhân được hành nghề môi giới bất động sản là gì?",
                              "options":  [
                                              "Có ít nhất 5 năm kinh nghiệm.",
                                              "Phải là thành viên của Hiệp hội bất động sản Việt Nam.",
                                              "Có Chứng chỉ hành nghề môi giới bất động sản và phải làm việc trong một tổ chức kinh doanh dịch vụ bất động sản.",
                                              "Phải có bằng đại học chuyên ngành Luật hoặc Kinh tế."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố \"Hội nhập quốc tế\" ảnh hưởng đến nghề môi giới bất động sản Việt Nam chủ yếu ở khía cạnh nào?",
                              "options":  [
                                              "Làm giảm số lượng nhà môi giới bất động sản trong nước.",
                                              "Đòi hỏi nâng cao tính chuyên nghiệp, kỹ năng (ngoại ngữ, đàm phán quốc tế), hiểu biết luật pháp và thông lệ quốc tế để phục vụ khách hàng/đối tác nước ngoài.",
                                              "Khiến mức phí hoa hồng giảm xuống.",
                                              "Hạn chế vai trò của các sàn giao dịch bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc đạo đức \"Trung thành\" (Loyalty) của nhà môi giới bất động sản đối với khách hàng bị vi phạm trong trường hợp nào sau đây?",
                              "options":  [
                                              "Môi giới tư vấn cho người bán nên sửa chữa lại nhà trước khi bán để được giá tốt hơn.",
                                              "Môi giới đại diện người mua nhưng lại cố tình giới thiệu bất động sản giá cao hơn thị trường để nhận hoa hồng cao hơn từ người bán (nếu có thỏa thuận ngầm).",
                                              "Môi giới từ chối tiết lộ thông tin tài chính cá nhân của người bán cho người mua.",
                                              "Môi giới nỗ lực đàm phán để đạt được các điều khoản có lợi nhất cho khách hàng của mình."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc pháp luật yêu cầu nhà môi giới bất động sản phải có Chứng chỉ hành nghề nhằm mục đích chính là gì?",
                              "options":  [
                                              "Tăng nguồn thu từ lệ phí thi và cấp chứng chỉ.",
                                              "Hạn chế số lượng người tham gia vào nghề môi giới bất động sản.",
                                              "Đảm bảo nhà môi giới bất động sản có kiến thức chuyên môn, pháp luật và đạo đức cơ bản, góp phần nâng cao chất lượng dịch vụ và bảo vệ người tiêu dùng.",
                                              "Giúp các trường đại học có thêm chương trình đào tạo."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một cá nhân có Chứng chỉ hành nghề môi giới bất động sản nhưng không làm việc cho công ty nào, tự đứng ra nhận tiền của khách để tìm nhà giúp họ từ ngày 01/08/2024. Hành vi này có phù hợp với quy định mới không?",
                              "options":  [
                                              "Hoàn toàn phù hợp vì đã có chứng chỉ.",
                                              "Không phù hợp, cá nhân phải hành nghề thông qua một tổ chức kinh doanh dịch vụ bất động sản.",
                                              "Chỉ phù hợp nếu giao dịch giá trị thấp.",
                                              "Chỉ phù hợp nếu khách hàng đồng ý."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện về \"cơ sở vật chất, kỹ thuật\" đối với doanh nghiệp kinh doanh dịch vụ môi giới bất động sản nhằm đảm bảo điều gì?",
                              "options":  [
                                              "Văn phòng phải thật sang trọng, hoành tráng.",
                                              "Doanh nghiệp có địa điểm hoạt động rõ ràng, có đủ trang thiết bị tối thiểu để phục vụ hoạt động nghiệp vụ và lưu trữ hồ sơ theo quy định.",
                                              "Doanh nghiệp phải có website riêng.",
                                              "Doanh nghiệp phải có ít nhất 10 máy tính."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây có ảnh hưởng GIÁN TIẾP nhưng lại mang tính quyết định đến sự sôi động hay trầm lắng của nghề môi giới bất động sản trong dài hạn?\n0 điểm",
                              "options":  [
                                              "Quy định về mẫu hợp đồng môi giới.",
                                              "Số lượng các khóa đào tạo môi giới được mở.",
                                              "Tình hình kinh tế vĩ mô và chu kỳ của thị trường bất động sản.",
                                              "Mức lệ phí cấp chứng chỉ hành nghề."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc \"Công bằng, minh bạch\" trong hoạt động môi giới đòi hỏi nhà môi giới bất động sản KHÔNG được làm điều gì?",
                              "options":  [
                                              "Cung cấp thông tin về quy hoạch cho người mua.",
                                              "Che giấu thông tin về một khoản phí mà khách hàng phải trả không được báo trước.",
                                              "Giải thích rõ các điều khoản trong hợp đồng.",
                                              "Nỗ lực tìm kiếm Bất động sản phù hợp nhất với nhu cầu khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật kinh doanh bất động sản Việt Nam công nhận và quy định về nghề môi giới bất đống sản có ý nghĩa gì đối với sự phát triển của nghề?",
                              "options":  [
                                              "Hạn chế sự phát triển của nghề.",
                                              "Tạo cơ sở pháp lý chính thức, khẳng định vai trò xã hội, thúc đẩy sự chuyên nghiệp hóa và tạo điều kiện cho nghề phát triển một cách bài bản, có quản lý.",
                                              "Khiến việc hành nghề trở nên khó khăn hơn không cần thiết.",
                                              "Không có ý nghĩa gì đáng kể."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao nhà môi giới bất động sản cần có kiến thức về các yếu tố ảnh hưởng đến cung, cầu BĐS (kinh tế vĩ mô, tài chính, xã hội...)?",
                              "options":  [
                                              "Chỉ để phục vụ việc thi lấy chứng chỉ.",
                                              "Để có thể phân tích, dự báo (ở mức độ nhất định) xu hướng thị trường, từ đó tư vấn chiến lược phù hợp cho khách hàng (thời điểm mua/bán, mức giá hợp lý, tiềm năng đầu tư...).",
                                              "Để có thể tự đầu tư Bất động sản hiệu quả hơn.",
                                              "Để có chuyện nói với khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Công ty môi giới bất động sản M chỉ có một người duy nhất sở hữu Chứng chỉ hành nghề môi giới bất động sản BĐS. Nếu người này nghỉ việc, công ty M có còn đủ điều kiện kinh doanh dịch vụ môi giới bất động sản theo Luật KDBĐS 2023 không?",
                              "options":  [
                                              "Vẫn đủ điều kiện bình thường.",
                                              "Không còn đủ điều kiện và phải bổ sung người có chứng chỉ khác hoặc tạm dừng hoạt động.",
                                              "Chỉ cần giám đốc công ty có chứng chỉ là đủ.",
                                              "Vẫn đủ điều kiện nếu công ty có doanh thu cao."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nhà môi giới bất động sản từ chối tham gia vào một giao dịch có dấu hiệu rửa tiền, mặc dù có thể mang lại hoa hồng rất lớn, thể hiện việc tuân thủ nguyên tắc nào?",
                              "options":  [
                                              "Nguyên tắc lấy lợi ích khách hàng làm định hướng.",
                                              "Nguyên tắc tuân thủ pháp luật và đạo đức nghề nghiệp.",
                                              "Nguyên tắc công khai, minh bạch.",
                                              "Nguyên tắc hoạt động dựa trên chuyên môn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sự phát triển của các nền tảng công nghệ bất động sản (Proptech) tại Việt Nam ảnh hưởng đến vai trò của nhà môi giới bất động sản truyền thống như thế nào?",
                              "options":  [
                                              "Hoàn toàn thay thế vai trò của nhà môi giới bất động sản.",
                                              "Không ảnh hưởng gì đáng kể.",
                                              "Tạo ra cả thách thức (yêu cầu môi giới phải nâng cao kỹ năng công nghệ, đối mặt cạnh tranh từ nền tảng) và cơ hội (công cụ tìm kiếm khách hàng, quản lý công việc, marketing hiệu quả hơn).",
                                              "Chỉ làm tăng chi phí hoạt động cho nhà môi giới bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc \"Hoạt động dựa trên nền tảng kiến thức chuyên môn và kinh nghiệm\" đòi hỏi nhà môi giới bất động sản phải làm gì liên tục?",
                              "options":  [
                                              "Chỉ dựa vào kinh nghiệm cá nhân đã có.",
                                              "Luôn học hỏi, cập nhật kiến thức mới về thị trường, pháp luật, công nghệ và trau dồi kỹ năng nghiệp vụ.",
                                              "Chỉ cần có chứng chỉ hành nghề là đủ.",
                                              "Thường xuyên thay đổi lĩnh vực hoạt động."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc thành lập Sàn giao dịch Bất động sản ở Việt Nam có yêu cầu gì khác biệt cơ bản so với thành lập một doanh nghiệp môi giới thông thường?",
                              "options":  [
                                              "Không cần người có chứng chỉ môi giới.",
                                              "Phải đăng ký hoạt động với Sở Xây dựng, đáp ứng điều kiện khắt khe hơn về cơ sở vật chất và người quản lý/điều hành phải có chứng nhận đào tạo quản lý sàn, được cấp giấy phép thành lập sàn.",
                                              "Chỉ được phép giao dịch BĐS hình thành trong tương lai.",
                                              "Không được phép thu hoa hồng môi giới."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao nguyên tắc đạo đức \"Không phân biệt đối xử\" lại quan trọng trong hoạt động môi giới bất động sản?",
                              "options":  [
                                              "Giúp nhà môi giới bất động sản có nhiều khách hàng hơn.",
                                              "Đảm bảo sự công bằng trong việc cung cấp dịch vụ, tuân thủ pháp luật về chống phân biệt đối xử và xây dựng hình ảnh nhân văn, chuyên nghiệp cho nghề.",
                                              "Giúp nhà môi giới bất động sản dễ dàng định giá bất động sản hơn.",
                                              "Chỉ áp dụng khi làm việc với khách hàng nước ngoài."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố \"Lợi nhuận hấp dẫn\" ảnh hưởng đến sự phát triển nghề môi giới bất động sản như thế nào?",
                              "options":  [
                                              "Chỉ có tác động tiêu cực, làm nhiều người thiếu năng lực tham gia.",
                                              "Là động lực thu hút nhân lực tham gia vào nghề, nhưng cũng đòi hỏi phải có cơ chế quản lý, đào tạo và đạo đức để đảm bảo sự phát triển bền vững, chuyên nghiệp.",
                                              "Không ảnh hưởng gì đến sự phát triển của nghề.",
                                              "Chỉ ảnh hưởng đến các nhà môi giới bất động sản làm việc độc lập."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu nhà môi giới bất động sản không có Chứng chỉ hành nghề mà vẫn thực hiện hoạt động môi giới và thu phí, họ có thể đối mặt với hậu quả pháp lý nào?",
                              "options":  [
                                              "Chỉ bị khách hàng nhắc nhở.",
                                              "Bị xử phạt vi phạm hành chính theo quy định của pháp luật về kinh doanh Bất động sản và có thể không được pháp luật bảo vệ quyền lợi về hoa hồng.",
                                              "Được phép tiếp tục hành nghề nếu nộp phạt.",
                                              "Không có hậu quả gì nếu khách hàng không khiếu nại."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nhà môi giới bất động sản chủ động tham gia các khóa đào tạo liên tục mang lại lợi ích kép là gì?",
                              "options":  [
                                              "Chỉ để đáp ứng yêu cầu gia hạn giấy phép/chứng chỉ.",
                                              "Vừa đáp ứng yêu cầu pháp lý/nghề nghiệp để duy trì quyền hành nghề, vừa giúp cập nhật kiến thức, nâng cao kỹ năng và năng lực cạnh tranh.",
                                              "Chỉ giúp mở rộng mối quan hệ.",
                                              "Chỉ tốn kém chi phí và thời gian."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Một sàn giao dịch bất động sản không công khai thông tin về chủ đầu tư và tình trạng pháp lý của dự án đang bán trên website của mình. Hành vi này vi phạm nguyên tắc nào?",
                              "options":  [
                                              "Nguyên tắc Tuân thủ pháp luật (có thể vi phạm quy định về công khai thông tin).",
                                              "Nguyên tắc Công khai, minh bạch.",
                                              "Không vi phạm nguyên tắc nào.",
                                              "Cả A và B."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong các yếu tố ảnh hưởng gián tiếp đến sự phát triển nghề môi giới bất động sản, yếu tố nào phản ánh khả năng chi trả và quyết định mua bất động sản của người dân rõ rệt nhất?",
                              "options":  [
                                              "Chi phí xây dựng.",
                                              "Chính sách quy hoạch đô thị.",
                                              "Sức mua, thu nhập bình quân và khả năng tiếp cận tín dụng.",
                                              "Số lượng dự án bất động sản mới được cấp phép."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vai trò \"Khai thác nguồn thu cho ngân sách nhà nước\" của hoạt động môi giới thể hiện như thế nào?",
                              "options":  [
                                              "Nhà môi giới bất động sản trực tiếp thu thuế thay nhà nước.",
                                              "Hoạt động môi giới thúc đẩy các giao dịch bất động sản diễn ra thành công và hợp pháp, từ đó tạo cơ sở cho việc thu các loại thuế, phí liên quan đến giao dịch đó.",
                                              "Nhà môi giới bất động sản phải đóng góp một phần hoa hồng cho nhà",
                                              "Nhà môi giới bất động sản tư vấn cho khách hàng cách tránh thuế."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Nhà môi giới bất động sản A được người bán ủy thác bán nhà. Sau đó, chính môi giới A lại muốn mua căn nhà đó. Để đảm bảo đạo đức và tránh xung đột lợi ích, môi giới A cần làm gì?",
                              "options":  [
                                              "Tự mình mua với giá thấp hơn thị trường vì đang là người môi giới.",
                                              "Thông báo rõ ràng ý định muốn mua của mình cho người bán, từ bỏ vai trò môi giới đại diện cho người bán trong giao dịch này và tiến hành mua bán một cách công bằng như một người mua thông thường (có thể cần bên thứ ba hỗ trợ).",
                                              "Nhờ người nhà đứng tên mua hộ để che giấu.",
                                              "Vừa đóng vai trò môi giới vừa là người mua để tự thương lượng giá."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố \"Sự chuyển đổi cơ cấu kinh tế - xã hội\" (ví dụ: từ nông nghiệp sang công nghiệp, dịch vụ) ảnh hưởng đến nhu cầu loại hình bất động sản nào nhiều nhất?",
                              "options":  [
                                              "Chỉ ảnh hưởng đến nhu cầu đất nông nghiệp.",
                                              "Gần như không ảnh hưởng đến thị trường bất động sản.",
                                              "Tạo ra và thay đổi mạnh mẽ nhu cầu đối với các loại hình bất động sản khác nhau (nhà ở đô thị, bất động sản công nghiệp, văn phòng, thương mại, dịch vụ...).",
                                              "Chỉ ảnh hưởng đến bất động sản ở khu vực nông thôn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Doanh nghiệp môi giới bất động sản B sử dụng Chứng chỉ hành nghề môi giới bất động sản của nhân viên C (đã nghỉ việc) để đăng ký hoạt động. Hành vi này có vi phạm pháp luật không?",
                              "options":  [
                                              "Không vi phạm nếu nhân viên C đồng ý.",
                                              "Vi phạm nghiêm trọng quy định về điều kiện kinh doanh dịch vụ môi giới (sử dụng chứng chỉ không đúng người, không còn người đủ điều kiện làm việc).",
                                              "Chỉ vi phạm nếu bị cơ quan chức năng phát hiện.",
                                              "Không vi phạm nếu doanh nghiệp vẫn hoạt động tốt."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây KHÔNG phải là vai trò trực tiếp của nhà môi giới bất động sản chuyên nghiệp?",
                              "options":  [
                                              "Cung cấp thông tin thị trường.",
                                              "Thúc đẩy giao dịch thành công",
                                              "Quyết định phê duyệt quy hoạch đô thị.",
                                              "Tư vấn về quy trình, thủ tục pháp lý cơ bản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Một sàn giao dịch BĐS bị khách hàng khiếu nại về việc nhân viên tư vấn sai thông tin pháp lý dẫn đến thiệt hại. Ai sẽ là người chịu trách nhiệm chính trước khách hàng và pháp luật?",
                              "options":  [
                                              "Chỉ cá nhân nhân viên tư vấn đó.",
                                              "Sàn giao dịch BĐS (pháp nhân kinh doanh) và người đại diện theo pháp luật/người quản lý sàn phải chịu trách nhiệm về hoạt động của nhân viên thuộc quyền quản lý của mình.",
                                              "Khách hàng phải tự chịu trách nhiệm vì đã tin lời tư vấn.",
                                              "Hiệp hội Bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố \"sự phát triển của thị trường tài chính\" ảnh hưởng đến nghề môi giới bất động sản như thế nào?",
                              "options":  [
                                              "Làm giảm nhu cầu về dịch vụ môi giới.",
                                              "Tạo điều kiện cho người mua dễ dàng tiếp cận vốn vay hơn, thúc đẩy cầu bất động sản; đồng thời cũng tạo ra các sản phẩm đầu tư bất động sản phức tạp hơn đòi hỏi sự tư vấn chuyên sâu từ môi giới.",
                                              "Chỉ ảnh hưởng đến các nhà đầu tư lớn.",
                                              "Khiến việc định giá bất động sản trở nên dễ dàng hơn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc đạo đức nào bị vi phạm khi nhà môi giới bất động sản tiết lộ cho đối thủ cạnh tranh biết về chiến lược marketing hoặc danh sách khách hàng tiềm năng của công ty mình?",
                              "options":  [
                                              "Nguyên tắc Công bằng, minh bạch.",
                                              "Nguyên tắc Trung thành (với công ty/người sử dụng lao động) và Bảo mật thông tin kinh doanh.",
                                              "Nguyên tắc Tuân thủ pháp luật.",
                                              "Nguyên tắc Chuyên môn và Trách nhiệm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc quy định doanh nghiệp môi giới phải có \"quy chế hoạt động dịch vụ\" nhằm mục đích gì?",
                              "options":  [
                                              "Chỉ để làm thủ tục đăng ký kinh doanh.",
                                              "Thiết lập các quy tắc, quy trình làm việc nội bộ rõ ràng, đảm bảo hoạt động chuyên nghiệp, tuân thủ pháp luật và quản lý rủi ro hiệu quả.",
                                              "Hạn chế quyền tự do kinh doanh của doanh nghiệp.",
                                              "Quy định mức lương tối thiểu cho nhân viên."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây KHÔNG ảnh hưởng trực tiếp đến mức phí hoa hồng môi giới bất động sản?",
                              "options":  [
                                              "Giá trị của bất động sản giao dịch.",
                                              "Tỷ lệ hoa hồng thỏa thuận trong hợp đồng dịch vụ.",
                                              "Tình trạng pháp lý của nhà môi giới bất động sản (có chứng chỉ hay không).",
                                              "Mức độ phức tạp của giao dịch và công sức của nhà môi giới bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào là quan trọng nhất đảm bảo sự thành công lâu dài của một Sàn giao dịch bất động sản tại Việt Nam?",
                              "options":  [
                                              "Vị trí văn phòng thật đẹp.",
                                              "Xây dựng được uy tín, nguồn hàng phong phú, đa dạng, đội ngũ môi giới chuyên nghiệp và quy trình hoạt động minh bạch, hiệu quả.",
                                              "Mức phí thu từ các nhà môi giới bất động sản thành viên thật cao.",
                                              "Chỉ niêm yết các bất động sản giá rẻ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nhà môi giới bất động sản phải \"hành động trong khuôn khổ được ủy quyền trong hợp đồng môi giới\" có nghĩa là gì?",
                              "options":  [
                                              "Được phép làm mọi thứ để bán được nhà.",
                                              "Chỉ được thực hiện những công việc, hành động đã được khách hàng đồng ý và ghi rõ trong phạm vi thỏa thuận của hợp đồng dịch vụ.",
                                              "Phải luôn xin ý kiến khách hàng cho từng hành động nhỏ.",
                                              "Có thể tự quyết định thay đổi giá bán mà không cần hỏi khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Doanh nghiệp môi giới bất động sản C thường xuyên tổ chức các buổi đào tạo nội bộ về kỹ năng mềm (giao tiếp, đàm phán) cho nhân viên. Việc này mang lại lợi ích gì trực tiếp nhất?",
                              "options":  [
                                              "Tăng chi phí đào tạo cho công ty.",
                                              "Nâng cao khả năng tương tác, thuyết phục khách hàng và xử lý tình huống của nhân viên, từ đó cải thiện tỷ lệ chốt giao dịch và sự hài lòng của khách hàng.",
                                              "Giảm thời gian nhân viên đi gặp khách hàng.",
                                              "Giúp nhân viên có thêm bằng cấp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao nói hoạt động môi giới bất động sản góp phần \"thúc đẩy đổi mới chính sách quản lý bất động sản\"?",
                              "options":  [
                                              "Vì nhà môi giới bất động sản trực tiếp tham gia soạn thảo luật.",
                                              "Vì các vướng mắc, bất cập phát sinh trong thực tế hoạt động môi giới là nguồn thông tin phản hồi quan trọng để cơ quan quản lý xem xét, điều chỉnh chính sách cho phù hợp hơn.",
                                              "Vì nhà môi giới bất động sản luôn yêu cầu thay đổi chính sách.",
                                              "Vì hoạt động môi giới làm giảm vai trò của cơ quan quản lý."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc một nhà môi giới bất động sản chủ động tư vấn cho khách hàng về các rủi ro tiềm ẩn của một bất động sản (thay vì chỉ nói về ưu điểm) thể hiện điều gì?",
                              "options":  [
                                              "Sự thiếu tự tin vào khả năng bán hàng.",
                                              "Tính chuyên nghiệp, trung thực và đặt lợi ích lâu dài của khách hàng lên trên việc chốt giao dịch bằng mọi giá.",
                                              "Sự thiếu hiểu biết về marketing.",
                                              "Mong muốn làm nản lòng khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sự khác biệt cơ bản giữa \"Sàn giao dịch bất động sản\" và \"Văn phòng môi giới\" thông thường tại Việt Nam là gì?",
                              "options":  [
                                              "Văn phòng môi giới không được phép thu hoa hồng.",
                                              "Sàn giao dịch thường có quy mô lớn hơn, phải đáp ứng điều kiện chặt chẽ hơn về cơ sở vật chất, nhân sự quản lý và phải đăng ký và được cấp phép hoạt động bởi Sở Xây dựng.",
                                              "Chỉ Sàn giao dịch mới được môi giới bất động sản hình thành trong tương lai.",
                                              "Văn phòng môi giới không cần người có chứng chỉ hành nghề, không cần lập công ty kinh doanh dịch vụ bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu KHÔNG phải là nguồn cung cấp thông tin trực tiếp về bất động sản đang chào bán?",
                              "options":  [
                                              "Chủ đầu tư dự án.",
                                              "Người dân treo biển \"Bán nhà\".",
                                              "Báo cáo phân tích thị trường của công ty tư vấn.",
                                              "Sàn giao dịch bất động sản nhận ký gửi."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây ảnh hưởng trực tiếp đến nguồn cung bất động sản?",
                              "options":  [
                                              "Lãi suất cho vay mua nhà của ngân hàng.",
                                              "Thu nhập bình quân của người dân.",
                                              "Chính sách về quy hoạch sử dụng đất.",
                                              "Tỷ lệ đô thị hóa."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi thu thập thông tin về một bất động sản, yếu tố \"Hướng nhà\" thuộc nhóm thông tin nào?",
                              "options":  [
                                              "Pháp lý",
                                              "Lịch sử - Xã hội",
                                              "Kinh tế - Kỹ thuật",
                                              "Tài chính"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vì sao nhà môi giới cần tìm hiểu lý do bán/cho thuê của chủ sở hữu?",
                              "options":  [
                                              "Để xác định giá trị thực của bất động sản.",
                                              "Để đánh giá mức độ thiện chí và khả năng thương lượng của chủ sở hữu.",
                                              "Để kiểm tra tình trạng pháp lý của bất động sản.",
                                              "Để tính phí hoa hồng môi giới."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tìm kiếm khách hàng thông qua việc gọi điện thoại trực tiếp đến các khách hàng tiềm năng thuộc phương pháp thu thập thông tin về cầu bất động sản nào?",
                              "options":  [
                                              "Chủ động",
                                              "Thụ động",
                                              "Ngẫu nhiên",
                                              "Gián tiếp"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi phân loại khách hàng mua bất động sản, nhóm \"Mua để đầu tư\" thường có đặc điểm gì?",
                              "options":  [
                                              "Quan tâm chính đến tiện ích sống và không gian cho gia đình.",
                                              "Tìm kiếm bất động sản có tiềm năng tăng giá hoặc tạo dòng tiền cho thuê.",
                                              "Mục tiêu chính là bảo toàn vốn khỏi lạm phát.",
                                              "Ưu tiên các yếu tố về phong thủy và lịch sử nhà."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích chính của việc lập Hồ sơ thương vụ môi giới là gì?",
                              "options":  [
                                              "Để quảng cáo bất động sản hiệu quả hơn.",
                                              "Để lưu trữ thông tin, theo dõi tiến độ và làm bằng chứng pháp lý.",
                                              "Để tính toán chi phí hoạt động của nhà môi giới.",
                                              "Để xác định giá trị bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới có nên giữ bản gốc Giấy chứng nhận (GCN - Sổ hồng /Sổ đỏ) của khách hàng không?",
                              "options":  [
                                              "Nên giữ để đảm bảo khách hàng không bán cho người khác.",
                                              "Chỉ nên giữ khi khách hàng yêu cầu.",
                                              "Tuyệt đối không nên giữ, chỉ xem, sao chụp và hoàn trả ngay.",
                                              "Nên giữ và giao cho ngân hàng nếu khách hàng vay vốn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng Dịch vụ Môi giới Bất động sản là thỏa thuận giữa ai với ai?",
                              "options":  [
                                              "Giữa người mua và người bán.",
                                              "Giữa nhà môi giới và cơ quan quản lý nhà nước.",
                                              "Giữa nhà môi giới/công ty môi giới và khách hàng (bên bán/cho thuê hoặc bên mua/thuê).",
                                              "Giữa nhà môi giới và ngân hàng cho vay."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc đăng ký thế chấp quyền sử dụng đất tại cơ quan nhà nước có thẩm quyền nhằm mục đích gì?",
                              "options":  [
                                              "Để tính thuế sử dụng đất.",
                                              "Để xác định giá trị bất động sản.",
                                              "Để làm thủ tục cấp Sổ hồng (GCN) mới.",
                                              "Để công khai hóa việc tài sản đang được dùng làm bảo đảm và có giá trị pháp lý với người thứ ba."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bước đầu tiên trong quy trình thực hiện thương vụ môi giới bất động sản là gì?",
                              "options":  [
                                              "Đàm phán giá cả.",
                                              "Ký hợp đồng đặt cọc.",
                                              "Tìm kiếm, tiếp nhận và chuẩn bị thông tin.",
                                              "Bàn giao Bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Kỹ năng nào là nền tảng quan trọng nhất để thấu hiểu nhu cầu khách hàng?",
                              "options":  [
                                              "Kỹ năng trình bày.",
                                              "Kỹ năng đàm phán.",
                                              "Kỹ năng lắng nghe chủ động.",
                                              "Kỹ năng quản lý thời gian."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Câu hỏi: \"Anh/chị dự định ngân sách tối đa cho việc mua nhà là bao nhiêu ạ?\" thuộc loại câu hỏi gì?",
                              "options":  [
                                              "Câu hỏi mở.",
                                              "Câu hỏi đóng.",
                                              "Câu hỏi dẫn dắt.",
                                              "Câu hỏi tu từ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ13 TỔNG QUAN MÔI GIỚI 2 (KTCM 51-100).docx",
        "topic":  "CĐ13 TỔNG QUAN MÔI GIỚI 2 (KTCM 51-100)",
        "questions":  [
                          {
                              "question":  "Tại sao cần tập trung trình bày \"lợi ích\" thay vì chỉ \"đặc tính\" của bất động sản?",
                              "options":  [
                                              "Vì lợi ích dễ nhớ hơn đặc tính.",
                                              "Vì khách hàng mua bất động sản vì những giá trị, giải pháp mà bất động sản mang lại cho họ (lợi ích), chứ không chỉ vì bản thân đặc tính đó.",
                                              "Vì trình bày lợi ích giúp tăng giá bán bất động sản.",
                                              "Vì đặc tính bất động sản thường khó mô tả."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc cơ bản nhất khi xử lý phản đối của khách hàng là gì?",
                              "options":  [
                                              "Phớt lờ lời phản đối và tiếp tục trình bày.",
                                              "Tranh luận để chứng minh khách hàng sai.",
                                              "Lắng nghe, đồng cảm, làm rõ vấn đề và giải đáp bằng thông tin khách quan.",
                                              "Giảm giá ngay lập tức để khách hàng hài lòng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Kênh giao tiếp nào phù hợp nhất để thảo luận các vấn đề phức tạp, nhạy cảm trong giao dịch bất động sản?",
                              "options":  [
                                              "Tin nhắn Zalo/SMS.",
                                              "Email.",
                                              "Gặp mặt trực tiếp.",
                                              "Bình luận trên mạng xã hội."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc quan trọng nhất trong quản lý thông tin khách hàng là gì?",
                              "options":  [
                                              "Chia sẻ thông tin rộng rãi để nhiều người biết.",
                                              "Bảo mật thông tin cá nhân và giao dịch của khách hàng.",
                                              "Chỉ lưu trữ thông tin khách hàng trong thời gian ngắn.",
                                              "Sử dụng thông tin khách hàng để quảng cáo cho sản phẩm khác."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục tiêu lý tưởng nhất trong đàm phán bất động sản là mô hình kết quả nào?",
                              "options":  [
                                              "Win - Lose (Thắng - Thua)",
                                              "Lose - Win (Thua - Thắng)",
                                              "Lose - Lose (Cùng thua)",
                                              "Win - Win (Cùng thắng)"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi người bán muốn giá 2 tỷ, người mua trả 1.9 tỷ, chiến thuật nào KHÔNG phù hợp để môi giới thu hẹp khoảng cách?",
                              "options":  [
                                              "Đề xuất chia đôi khoảng chênh lệch (mỗi bên nhích 50 triệu).",
                                              "Tìm kiếm các yếu tố phi giá cả để thương lượng (nội thất, thời gian bàn giao...).",
                                              "Nhấn mạnh vào điểm yếu của bất động sản để ép người bán giảm giá sâu hơn nữa.",
                                              "Phân tích chi phí cơ hội nếu không đạt được thỏa thuận cho cả hai bên."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong đàm phán, việc tập trung vào \"lợi ích\" thay vì \"lập trường\" có nghĩa là gì?",
                              "options":  [
                                              "Chỉ quan tâm đến lợi ích của mình.",
                                              "Tìm hiểu lý do sâu xa đằng sau yêu cầu của mỗi bên để tìm giải pháp đáp ứng nhu cầu thực sự.",
                                              "Luôn giữ vững quan điểm ban đầu của mình.",
                                              "Ưu tiên các yếu tố tài chính hơn các yếu tố khác."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mô hình SOFTEN (các kỹ thuật giao tiếp phi ngôn ngữ) được áp dụng trong giai đoạn nào của hoạt động môi giới?",
                              "options":  [
                                              "Chỉ khi đàm phán giá.",
                                              "Chỉ khi ký hợp đồng.",
                                              "Trong suốt quá trình giao tiếp trực tiếp với khách hàng.",
                                              "Chỉ khi xử lý khiếu nại."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nhà môi giới nhấn mạnh \"Khu vực này sắp có trung tâm thương mại lớn và tuyến metro đi qua\" là đang tập trung vào yếu tố nào để nâng cao giá trị cảm nhận bất động sản?",
                              "options":  [
                                              "Chất lượng xây dựng.",
                                              "Tiềm năng tăng giá và tiện ích tương lai.",
                                              "Giá bán so với quá khứ.",
                                              "Thiết kế nội thất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi xây dựng chiến lược kinh doanh cho văn phòng môi giới, việc phân tích đối thủ cạnh tranh KHÔNG nhằm mục đích gì?",
                              "options":  [
                                              "Hiểu điểm mạnh, điểm yếu của đối thủ.",
                                              "Sao chép hoàn toàn mô hình kinh doanh của đối thủ.",
                                              "Xác định lợi thế cạnh tranh của văn phòng mình.",
                                              "Xây dựng chiến lược giá và dịch vụ phù hợp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào thường được xem là quan trọng nhất khi lựa chọn nhân sự cho văn phòng môi giới?",
                              "options":  [
                                              "Chỉ cần bằng cấp cao.",
                                              "Chỉ cần ngoại hình ưa nhìn.",
                                              "Năng lực chuyên môn, kỹ năng, thái độ và đạo đức nghề nghiệp.",
                                              "Chỉ cần mối quan hệ rộng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục tiêu chính của việc lập kế hoạch ngân sách hoạt động cho văn phòng môi giới là gì?",
                              "options":  [
                                              "Để báo cáo cho cơ quan thuế.",
                                              "Để dự trù và kiểm soát các khoản thu chi, đảm bảo hoạt động hiệu quả.",
                                              "Để tính lương cho nhân viên.",
                                              "Để xác định giá bán bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chỉ số \"Lợi nhuận / Giao dịch\" giúp nhà quản lý đánh giá điều gì?",
                              "options":  [
                                              "Năng suất lao động của nhân viên.",
                                              "Quy mô và chất lượng trung bình của các thương vụ thành công.",
                                              "Tỷ suất lợi nhuận trên tổng doanh thu.",
                                              "Chi phí hoạt động của văn phòng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều khoản nào bắt buộc phải có trong Hợp đồng Dịch vụ Môi giới bất động sản?",
                              "options":  [
                                              "Mô tả chi tiết nội thất bất động sản.",
                                              "Mức phí, thù lao môi giới và điều kiện thanh toán.",
                                              "Lịch trình thanh toán tiền mua bất động sản.",
                                              "Chữ ký của công chứng viên."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc \"Điều gì không có trong hợp đồng thì nó không tồn tại\" nhấn mạnh điều gì khi soạn thảo/rà soát hợp đồng giao dịch?",
                              "options":  [
                                              "Hợp đồng càng ngắn càng tốt.",
                                              "Mọi thỏa thuận quan trọng phải được ghi nhận rõ ràng, đầy đủ bằng văn bản trong hợp đồng.",
                                              "Chỉ cần thỏa thuận miệng là đủ.",
                                              "Hợp đồng chỉ cần chữ ký, không cần nội dung chi tiết."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi mua nhà ở hình thành trong tương lai, người mua cần đặc biệt chú ý kiểm tra giấy tờ pháp lý nào của dự án?",
                              "options":  [
                                              "Sổ hồng (GCN) của các căn đã bán trước đó.",
                                              "Giấy phép xây dựng, Văn bản đủ điều kiện bán nhà ở hình thành trong tương lai, Bảo lãnh ngân hàng (nếu có).",
                                              "Hợp đồng lao động của công nhân xây dựng.",
                                              "Báo cáo tài chính của chủ đầu tư."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để phòng ngừa rủi ro bất động sản bị giả mạo giấy tờ (sổ giả), biện pháp nào hiệu quả nhất?",
                              "options":  [
                                              "Chỉ tin vào lời nói của người bán.",
                                              "Yêu cầu người bán cung cấp bản photo sổ.",
                                              "Đối chiếu thông tin sổ với cơ sở dữ liệu của văn phòng đăng ký đấtg đai hoặc yêu cầu công chứng viên kiểm tra kỹ.",
                                              "So sánh sổ với sổ của hàng xóm."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Rủi ro quy hoạch trong giao dịch bất động sản là gì?",
                              "options":  [
                                              "Bất động sản bị tranh chấp về quyền sở hữu.",
                                              "Bất động sản nằm trong khu vực dự kiến bị thu hồi đất hoặc thay đổi chức năng sử dụng theo quy hoạch của nhà nước.",
                                              "Bên bán không bàn giao nhà đúng hẹn.",
                                              "Diện tích thực tế của bất động sản nhỏ hơn trên giấy tờ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp nào giúp phòng ngừa rủi ro tranh chấp quyền sở hữu bất động sản?",
                              "options":  [
                                              "Thanh toán toàn bộ tiền mua ngay khi xem nhà.",
                                              "Kiểm tra thông tin ngăn chặn giao dịch tại VPĐKĐĐ/Phòng công chứng và yêu cầu văn bản đồng ý của đồng sở hữu (nếu có).",
                                              "Chỉ làm việc với người bán lớn tuổi.",
                                              "Yêu cầu người bán giảm giá sâu."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc bên mua không thanh toán đúng hạn theo thỏa thuận trong hợp đồng thuộc loại rủi ro nào?",
                              "options":  [
                                              "Rủi ro quy hoạch.",
                                              "Rủi ro bàn giao.",
                                              "Rủi ro thanh toán.",
                                              "Rủi ro pháp lý dự án."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mạng xã hội KHÔNG thể giúp nhà môi giới bất động sản trong hoạt động nào sau đây?",
                              "options":  [
                                              "Xây dựng thương hiệu cá nhân.",
                                              "Đăng ký quyền sở hữu bất động sản cho khách hàng.",
                                              "Tìm kiếm khách hàng tiềm năng và quảng cáo bất động sản.",
                                              "Tương tác, chăm sóc khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc phân tích dữ liệu lớn (Big Data) trong Bất động sản có thể giúp nhà môi giới làm gì?",
                              "options":  [
                                              "Sửa chữa các lỗi kỹ thuật của bất động sản.",
                                              "Ký hợp đồng mua bán trực tuyến.",
                                              "Nhận diện xu hướng thị trường, hành vi khách hàng để tối ưu chiến lược kinh doanh.",
                                              "Thiết kế nội thất cho bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới nên làm gì khi khách hàng đưa ra một mức giá đề nghị (offer) thấp hơn đáng kể so với giá chào bán?",
                              "options":  [
                                              "Từ chối ngay lập tức và không làm việc với khách hàng đó nữa.",
                                              "Chấp nhận ngay để nhanh chóng chốt giao dịch.",
                                              "Tiếp nhận đề nghị một cách chuyên nghiệp, trình bày lại cho bên bán và hỗ trợ quá trình thương lượng.",
                                              "Tự ý nâng giá đề nghị của khách hàng lên khi báo cho bên bán."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Kỹ thuật đặt câu hỏi phễu (Funneling) được áp dụng như thế nào?",
                              "options":  [
                                              "Chỉ đặt các câu hỏi đóng.",
                                              "Chỉ đặt các câu hỏi mở.",
                                              "Bắt đầu bằng câu hỏi tổng quát, sau đó đi sâu vào chi tiết bằng các câu hỏi cụ thể hơn.",
                                              "Đặt các câu hỏi không liên quan để đánh lạc hướng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một bất động sản đang được thế chấp tại ngân hàng, người bán có được quyền bán bất động sản đó không?",
                              "options":  [
                                              "Không được phép bán trong mọi trường hợp.",
                                              "Được phép bán nếu có sự đồng ý của ngân hàng nhận thế chấp và thực hiện thủ tục giải chấp hoặc chuyển nợ theo quy định.",
                                              "Chỉ được bán nếu người mua đồng ý trả nợ thay.",
                                              "Chỉ được bán sau khi đã trả hết nợ ngân hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Bộ tài liệu bán hàng\" (Sales Kit) thường bao gồm những gì?",
                              "options":  [
                                              "Chỉ có hợp đồng mẫu.",
                                              "Chỉ có hình ảnh BĐS.",
                                              "Tập hợp các tài liệu giới thiệu về BĐS một cách chuyên nghiệp (thông tin chi tiết, mặt bằng, hình ảnh, bảng giá, chính sách bán hàng...).",
                                              "Chỉ có danh thiếp của nhà môi giới."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi làm việc với khách hàng mua là nhà đầu tư \"lướt sóng\", nhà môi giới cần tập trung tư vấn vào yếu tố nào?",
                              "options":  [
                                              "Thiết kế nội thất đẹp và sang trọng.",
                                              "Tính thanh khoản cao và khả năng tăng giá trong ngắn hạn.",
                                              "Sự yên tĩnh và không gian xanh của khu vực.",
                                              "Lịch sử lâu đời và yếu tố tâm linh của BĐS."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu KHÔNG phải là rủi ro pháp lý thường gặp khi mua nhà đất dự án?",
                              "options":  [
                                              "Chủ đầu tư chưa hoàn thiện pháp lý đã bán hàng.",
                                              "Tiến độ xây dựng bị chậm trễ so với cam kết.",
                                              "Chất lượng xây dựng không đảm bảo như quảng cáo.",
                                              "Người mua được cấp Sổ hồng (GCN) ngay khi ký hợp đồng mua bán."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Chiến thuật cộng trong đàm phán\" dựa trên việc nêu bật yếu tố nào?",
                              "options":  [
                                              "Những khiếm khuyết, lỗi của bất động sản.",
                                              "Tình hình thị trường đang đi xuống.",
                                              "Những ưu điểm, giá trị độc đáo của bất động sản, tiềm năng tăng giá.",
                                              "Khả năng tài chính hạn chế của người mua."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vai trò của nhà môi giới KHÔNG bao gồm việc nào sau đây?",
                              "options":  [
                                              "Cung cấp thông tin thị trường cho khách hàng.",
                                              "Đưa ra quyết định cuối cùng thay cho khách hàng.",
                                              "Hỗ trợ khách hàng trong quá trình đàm phán.",
                                              "Tư vấn về quy trình, thủ tục giao dịch."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc kiểm tra \"lịch sử tâm linh\" của bất động sản thuộc nhóm thông tin nào cần thu thập?",
                              "options":  [
                                              "Kinh tế - Kỹ thuật.",
                                              "Pháp lý.",
                                              "Lịch sử - Xã hội.",
                                              "Tài chính."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Chiến thuật trừ trong đàm phán\" hiệu quả nhất khi nào?",
                              "options":  [
                                              "Khi bất động sản hoàn hảo không có điểm yếu.",
                                              "Khi thị trường đang rất sôi động, giá tăng mạnh.",
                                              "Khi có thể chỉ ra những điểm yếu khách quan của bất động sản hoặc dẫn chứng được giá giao dịch tương đồng thấp hơn.",
                                              "Khi người bán không cần bán gấp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi dẫn khách xem nhà, nếu khách hàng im lặng, ít đưa ra nhận xét, nhà môi giới nên làm gì?",
                              "options":  [
                                              "Cũng im lặng và chờ đợi.",
                                              "Giả định rằng khách hàng không thích và nhanh chóng chuyển sang bất động sản khác.",
                                              "Chủ động đặt câu hỏi gợi mở, khơi gợi câu chuyện về sở thích, mối quan tâm của họ để phá vỡ sự im lặng và tìm hiểu nhu cầu.",
                                              "Nói liên tục về các đặc điểm của bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là dấu hiệu cho thấy một cuộc đàm phán đang có nguy cơ đi vào bế tắc (deadlock)?",
                              "options":  [
                                              "Cả hai bên đều đưa ra nhiều phương án thay thế.",
                                              "Các bên không còn đưa ra nhượng bộ nào và giữ vững lập trường đối lập.",
                                              "Các bên đồng ý tạm dừng để suy nghĩ thêm.",
                                              "Các bên tập trung thảo luận về các chi tiết nhỏ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây KHÔNG phải là mục tiêu chính của hoạt động marketing BĐS?",
                              "options":  [
                                              "Thu hút khách hàng tiềm năng.",
                                              "Tăng nhận diện thương hiệu cho môi giới/sàn.",
                                              "Hoàn thiện thủ tục pháp lý cho giao dịch.",
                                              "Thúc đẩy giao dịch thành công."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong hợp đồng dịch vụ môi giới, điều khoản về \"thời hạn hợp đồng\" quy định điều gì?",
                              "options":  [
                                              "Thời gian khách hàng phải thanh toán phí.",
                                              "Thời gian nhà môi giới được phép cung cấp dịch vụ và hưởng hoa hồng theo thỏa thuận",
                                              "Thời gian tối đa để bán được bất động sản.",
                                              "Thời gian khách hàng được phép xem bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Rủi ro về \"chất lượng công trình\" thường khó phát hiện ngay và có thể thuộc loại nào?",
                              "options":  [
                                              "Rủi ro quy hoạch.",
                                              "Rủi ro pháp lý.",
                                              "Rủi ro bàn giao.",
                                              "Rủi ro tiềm ẩn."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi khách hàng có nhiều lựa chọn bất động sản và tỏ ra phân vân, nhà môi giới nên làm gì?",
                              "options":  [
                                              "Thúc ép khách hàng chọn đại một căn.",
                                              "Đưa thêm thật nhiều lựa chọn khác nữa.",
                                              "Giúp khách hàng hệ thống hóa lại các ưu nhược điểm của từng lựa chọn dựa trên nhu cầu của họ, tập trung vào các yếu tố quan trọng nhất để hỗ trợ ra quyết định.",
                                              "Bỏ mặc khách hàng tự quyết định."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc kiểm tra tình trạng \"ngăn chặn giao dịch\" của bất động sản tại văn phòng đăng ký đất đai giúp phòng ngừa rủi ro nào?",
                              "options":  [
                                              "Rủi ro về quy hoạch.",
                                              "Rủi ro bất động sản đang bị tranh chấp, kê biên hoặc đang thế chấp mà chưa được phép giao dịch.",
                                              "Rủi ro về diện tích.",
                                              "Rủi ro về chất lượng công trình."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Kỹ năng nào giúp nhà môi giới trình bày thông tin phức tạp (ví dụ: quy trình pháp lý) một cách dễ hiểu cho khách hàng?",
                              "options":  [
                                              "Kỹ năng đàm phán.",
                                              "Kỹ năng sử dụng ngôn ngữ đơn giản, ví dụ minh họa và chia nhỏ thông tin.",
                                              "Kỹ năng quản lý thời gian.",
                                              "Kỹ năng định giá bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi nhận được thông tin phản hồi tiêu cực từ khách hàng sau khi xem nhà, nhà môi giới nên làm gì?",
                              "options":  [
                                              "Bỏ qua và không quan tâm.",
                                              "Tranh cãi với khách hàng để bảo vệ BĐS.",
                                              "Lắng nghe cẩn thận, tìm hiểu rõ lý do không hài lòng, cảm ơn phản hồi và sử dụng thông tin đó để tìm BĐS phù hợp hơn hoặc tư vấn lại cho bên bán.",
                                              "Đổ lỗi cho khách hàng khó tính."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nhà môi giới chủ động đề xuất các giải pháp tài chính (ví dụ: giới thiệu ngân hàng cho vay) cho khách hàng mua thể hiện kỹ năng gì?",
                              "options":  [
                                              "Kỹ năng định giá.",
                                              "Kỹ năng đàm phán.",
                                              "Kỹ năng cung cấp dịch vụ hỗ trợ và gia tăng giá trị.",
                                              "Kỹ năng quản lý rủi ro."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong hợp đồng mua bán bất động sản, tại sao cần mô tả chi tiết bất động sản (địa chỉ, diện tích, số thửa...)?",
                              "options":  [
                                              "Để làm tăng giá trị hợp đồng.",
                                              "Để xác định chính xác đối tượng của hợp đồng, tránh nhầm lẫn và tranh chấp.",
                                              "Để cơ quan thuế dễ tính thuế.",
                                              "Chỉ là thủ tục hình thức."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Rủi ro nào có thể phát sinh nếu mua bất động sản thông qua hợp đồng ủy quyền không hợp lệ?",
                              "options":  [
                                              "Giao dịch có thể bị tuyên vô hiệu, người mua mất tiền và không có quyền sở hữu.",
                                              "Người mua phải trả thêm thuế.",
                                              "Bất động sản bị giảm giá trị.",
                                              "Không có rủi ro nào đáng kể."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi soạn thảo điều khoản về phí hoa hồng trong Hợp đồng Dịch vụ Môi giới, cần lưu ý điều gì nhất?",
                              "options":  [
                                              "Ghi mức phí càng cao càng tốt.",
                                              "Ghi mức phí một cách rõ ràng (tỷ lệ % hoặc số tiền cố định) và quy định cụ thể thời điểm, điều kiện thanh toán phí.",
                                              "Chỉ cần ghi chung chung \"theo thỏa thuận\".",
                                              "Để trống phần phí hoa hồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là biểu hiện của việc nhà môi giới \"tách biệt con người và vấn đề\" trong đàm phán?",
                              "options":  [
                                              "Chỉ trích cá nhân người đối diện khi họ không đồng ý.",
                                              "Tập trung vào việc giải quyết các bất đồng về điều khoản, giá cả một cách khách quan, giữ thái độ tôn trọng đối tác.",
                                              "Luôn đồng ý với mọi yêu cầu của đối tác để tránh xung đột.",
                                              "Từ chối đàm phán nếu không thích người đối diện."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc phân tích chỉ số \"Lợi nhuận / Số lao động\" giúp nhà quản lý văn phòng môi giới điều gì?",
                              "options":  [
                                              "Xác định quy mô giao dịch trung bình.",
                                              "Đánh giá năng suất, hiệu quả làm việc của đội ngũ nhân viên.",
                                              "Biết được tổng chi phí hoạt động.",
                                              "Đo lường tỷ suất lợi nhuận trên doanh thu."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi phân tích nguồn cung bất động sản, yếu tố \"tốc độ tăng trưởng và suy thoái của từng loại BĐS\" phản ánh điều gì rõ nhất?",
                              "options":  [
                                              "Chi phí xây dựng hiện tại.",
                                              "Chu kỳ của thị trường bất động sản và tâm lý đầu tư.",
                                              "Chính sách tín dụng của ngân hàng.",
                                              "Mật độ dân số khu vực."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thông tin nào sau đây về bất động sản thuộc nhóm Pháp lý nhưng thường KHÓ kiểm tra nhất chỉ qua giấy tờ và cần khảo sát thực địa/hỏi thăm?",
                              "options":  [
                                              "Tên chủ sở hữu trên Sổ hồng (GCN).",
                                              "Diện tích đất được công nhận.",
                                              "Tình trạng tranh chấp lối đi chung hoặc ranh giới với hàng xóm.",
                                              "Thông tin quy hoạch 1/500 tại cơ quan nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một khách hàng Việt Kiều muốn mua nhà tại Việt Nam. Yếu tố pháp lý nào nhà môi giới cần tư vấn ĐẦU TIÊN và quan trọng nhất cho khách hàng này?",
                              "options":  [
                                              "Thủ tục xin cấp Sổ hồng (GCN).",
                                              "Các loại thuế, phí phải nộp khi mua bán.",
                                              "Điều kiện và đối tượng người Việt Nam định cư ở nước ngoài được phép sở hữu nhà ở tại Việt Nam theo Luật Nhà ở.",
                                              "Cách thức vay vốn ngân hàng tại Việt Nam."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ13 TỔNG QUAN MÔI GIỚI 3 (KTCM 101-150).docx",
        "topic":  "CĐ13 TỔNG QUAN MÔI GIỚI 3 (KTCM 101-150)",
        "questions":  [
                          {
                              "question":  "Khi thẩm định pháp lý một căn nhà riêng lẻ đã qua sử dụng, ngoài Sổ hồng (GCN), giấy tờ nào cũng rất quan trọng để đánh giá tính hợp pháp của công trình xây dựng?",
                              "options":  [
                                              "Hợp đồng mua bán lần đầu với chủ đầu tư (nếu có).",
                                              "Giấy phép xây dựng (đối với nhà xây sau khi có quy định về cấp phép).",
                                              "Hóa đơn tiền điện, nước.",
                                              "Thông báo nộp thuế đất hàng năm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc bất động sản bị đưa vào danh sách \"ngăn chặn giao dịch\" tại Văn phòng Đăng ký đất đai có thể do nguyên nhân nào sau đây?",
                              "options":  [
                                              "Chủ nhà chưa nộp thuế sử dụng đất phi nông nghiệp năm nay.",
                                              "Có quyết định kê biên tài sản của tòa án hoặc cơ quan thi hành án.",
                                              "Chủ nhà đi công tác nước ngoài dài hạn.",
                                              "Bất động sản nằm trong khu vực quy hoạch công viên cây xanh."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong các loại tranh chấp bất động sản, loại nào thường phức tạp và khó giải quyết nhất liên quan đến yếu tố lịch sử và tình cảm?",
                              "options":  [
                                              "Tranh chấp do sai lệch diện tích đo đạc.",
                                              "Tranh chấp về việc nộp thuế, phí.",
                                              "Tranh chấp thừa kế quyền sử dụng đất giữa các thành viên trong gia đình.",
                                              "Tranh chấp về chất lượng công trình xây dựng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp nào là hữu hiệu nhất để phòng ngừa rủi ro mua phải bất động sản đã được bán cho nhiều người trước đó?",
                              "options":  [
                                              "Yêu cầu người bán cam kết bằng lời nói.",
                                              "Kiểm tra kỹ lịch sử giao dịch (nếu có thể), yêu cầu xem bản gốc giấy tờ pháp lý và thực hiện công chứng hợp đồng mua bán ngay khi có thể.",
                                              "Chỉ mua bất động sản của người quen.",
                                              "Đặt cọc một số tiền thật lớn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Chiến thuật Nhượng bộ Hợp lý\" trong đàm phán KHÔNG bao gồm hành động nào sau đây?",
                              "options":  [
                                              "Chuẩn bị trước các điểm có thể nhượng bộ.",
                                              "Nhượng bộ một cách vô điều kiện ngay khi đối tác yêu cầu.",
                                              "Yêu cầu đối tác có sự nhượng bộ tương ứng khi mình nhượng bộ.",
                                              "Giải thích lý do cho sự nhượng bộ (nếu có thể)."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi soạn thảo Hợp đồng Dịch vụ Môi giới độc quyền, điều khoản nào cần được định nghĩa rõ ràng nhất để tránh tranh chấp về sau?",
                              "options":  [
                                              "Màu sơn yêu thích của khách hàng.",
                                              "Phạm vi độc quyền (thời gian, loại hình giao dịch, BĐS cụ thể) và các trường hợp môi giới vẫn được hưởng phí ngay cả khi không trực tiếp tìm được khách.",
                                              "Số lần tối đa khách hàng được phép từ chối xem nhà.",
                                              "Tên các đối thủ cạnh tranh của nhà môi giới."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc \"Điều gì không có trong hợp đồng thì nó không tồn tại\" đặc biệt quan trọng khi thỏa thuận về vấn đề gì?",
                              "options":  [
                                              "Tình cảm cá nhân giữa các bên.",
                                              "Các trang thiết bị, nội thất người bán để lại cho người mua.",
                                              "Dự báo về giá bất động sản trong tương lai.",
                                              "Thời tiết vào ngày ký hợp đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới có nên đưa ra lời khuyên pháp lý chuyên sâu (ví dụ: giải thích chi tiết về luật thừa kế) cho khách hàng không?",
                              "options":  [
                                              "Nên làm để thể hiện sự hiểu biết rộng.",
                                              "Không nên, vì đó không phải chuyên môn chính và có thể gây rủi ro. Nên giới thiệu khách hàng tìm đến luật sư.",
                                              "Chỉ nên làm nếu khách hàng yêu cầu.",
                                              "Nên làm và thu thêm phí tư vấn pháp lý."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong hợp đồng mua bán nhà ở hình thành trong tương lai, điều khoản nào bảo vệ người mua tốt nhất nếu chủ đầu tư chậm bàn giao nhà?",
                              "options":  [
                                              "Điều khoản về thiết kế chi tiết căn hộ.",
                                              "Điều khoản quy định rõ mức phạt vi phạm hợp đồng (lãi phạt chậm bàn giao) cho chủ đầu tư.",
                                              "Điều khoản về phí quản lý vận hành tòa nhà.",
                                              "Điều khoản về việc chủ đầu tư được phép thay đổi vật liệu xây dựng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao việc xác định đúng \"người ra quyết định kinh tế\" trong một nhóm khách xem nhà lại quan trọng đối với chiến lược chào bán?",
                              "options":  [
                                              "Để chỉ tập trung nói chuyện với người đó, phớt lờ những người khác.",
                                              "Để điều chỉnh nội dung và trọng tâm thuyết trình, tập trung vào các yếu tố mà người đó quan tâm nhất (ví dụ: giá cả, tiềm năng đầu tư, chi phí...).",
                                              "Để yêu cầu người đó ký hợp đồng ngay lập tức.",
                                              "Để biết nên tặng quà cho ai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi trình bày về bất động sản, việc sử dụng câu chuyện (storytelling) có tác dụng gì?",
                              "options":  [
                                              "Làm mất thời gian của khách hàng.",
                                              "Giúp thông tin trở nên khô khan, khó nhớ.",
                                              "Tạo sự kết nối cảm xúc, làm bất động sản trở nên sinh động, đáng nhớ và dễ hình dung hơn về cuộc sống tương lai tại đó.",
                                              "Thay thế hoàn toàn cho việc cung cấp thông số kỹ thuật."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là ví dụ về việc áp dụng kỹ năng \"nâng cao giá trị cảm nhận\" cho một căn hộ cũ cần sửa chữa?",
                              "options":  [
                                              "Che giấu các khuyết điểm cần sửa chữa.",
                                              "Nhấn mạnh vào giá bán rất rẻ so với thị trường.",
                                              "Phân tích tiềm năng cải tạo (\"chỉ cần sơn sửa lại là đẹp lung linh\"), vị trí tốt, giá trị đất tăng theo thời gian và so sánh với giá căn hộ mới cùng khu vực.",
                                              "Từ chối dẫn khách xem vì nhà quá cũ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu chỉ số \"Lợi nhuận / Tổng doanh thu\" của văn phòng môi giới giảm sút, nhà quản lý cần xem xét yếu tố nào đầu tiên?",
                              "options":  [
                                              "Tăng số lượng nhân viên.",
                                              "Mở rộng thêm văn phòng mới.",
                                              "Phân tích cơ cấu chi phí (marketing, vận hành, lương...) và hiệu quả của các nguồn doanh thu.",
                                              "Giảm giờ làm việc của nhân viên."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc áp dụng nguyên tắc \"Tách biệt con người và vấn đề\" đặc biệt hữu ích trong tình huống nào?",
                              "options":  [
                                              "Khi đàm phán với người thân hoặc bạn bè.",
                                              "Khi trình bày về ưu điểm của BĐS.",
                                              "Khi xây dựng kế hoạch marketing.",
                                              "Khi tính toán lợi nhuận của văn phòng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc tham gia các hội thảo, khóa học về BĐS giúp nhà môi giới nâng cao điều gì nhất?",
                              "options":  [
                                              "Khả năng định giá chính xác mọi loại BĐS.",
                                              "Cập nhật kiến thức mới về thị trường, pháp luật, công nghệ và mở rộng mạng lưới quan hệ.",
                                              "Kỹ năng đàm phán với mọi đối tượng khách hàng.",
                                              "Thu nhập hàng tháng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới đang đại diện cho người bán. Một người mua tiềm năng đề nghị một mức giá hợp lý nhưng kèm điều kiện \"thanh toán 95% giá trị khi ký hợp đồng công chứng, 5% còn lại sau khi nhận Sổ hồng (GCN) đã sang tên\". Nhà môi giới nên tư vấn cho người bán như thế nào?",
                              "options":  [
                                              "Đồng ý ngay vì giá hợp lý.",
                                              "Từ chối vì điều kiện thanh toán rủi ro cho người bán",
                                              "Phân tích rủi ro cho người bán (việc giữ lại 5% có thể kéo dài, phức tạp nếu có trục trặc sang tên) và đề xuất phương án an toàn hơn (ví dụ: thanh toán đủ tại phòng công chứng, hoặc giữ lại một khoản nhỏ hơn và có thỏa thuận ràng buộc rõ ràng).",
                                              "Yêu cầu người mua phải đặt cọc thêm 5%."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là điểm khác biệt cơ bản giữa \"Marketing\" và \"Bán hàng\" trong lĩnh vực BĐS?",
                              "options":  [
                                              "Marketing chỉ làm online, bán hàng chỉ làm offline.",
                                              "Marketing tập trung vào việc tạo ra nhu cầu, thu hút khách hàng tiềm năng và xây dựng thương hiệu; Bán hàng tập trung vào việc chuyển đổi khách hàng tiềm năng thành giao dịch thực tế.",
                                              "Marketing do chủ đầu tư làm, bán hàng do môi giới làm.",
                                              "Marketing tốn nhiều chi phí hơn bán hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi thành lập công ty môi giới bất động sản, việc đăng ký ngành nghề kinh doanh cần tuân thủ theo quy định của luật nào là chính yếu?0 điểm",
                              "options":  [
                                              "Bộ luật Dân sự.",
                                              "Luật Nhà ở.",
                                              "Luật Đất đai.",
                                              "Luật Doanh nghiệp và Luật Kinh doanh Bất động sản."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nhà quản lý giao phó công việc cụ thể kèm theo quyền hạn và trách nhiệm rõ ràng cho nhân viên môi giới thể hiện kỹ năng quản lý nào?",
                              "options":  [
                                              "Kỹ năng lập kế hoạch.",
                                              "Kỹ năng tổ chức và phân công công việc.",
                                              "Kỹ năng kiểm tra, giám sát.",
                                              "Kỹ năng động viên, khích lệ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một Hợp đồng Dịch vụ Môi giới không quy định rõ \"thời điểm phát sinh quyền hưởng hoa hồng\" của nhà môi giới, điều gì có thể xảy ra?",
                              "options":  [
                                              "Nhà môi giới có quyền đòi hoa hồng ngay khi ký hợp đồng dịch vụ.",
                                              "Khách hàng có quyền từ chối trả hoa hồng.",
                                              "Dễ phát sinh tranh chấp về việc khi nào nhà môi giới được coi là đã hoàn thành công việc và được hưởng hoa hồng (ví dụ: khi tìm được khách đồng ý mua, khi ký HĐ đặt cọc, hay khi ký HĐ công chứng?).",
                                              "Hợp đồng dịch vụ đó bị vô hiệu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một bất động sản có vị trí đẹp nhưng thiết kế bên trong lỗi thời, khó bán. Nhà môi giới nên tư vấn cho người bán chiến lược nào hiệu quả nhất?",
                              "options":  [
                                              "Giữ nguyên hiện trạng và chỉ tập trung giảm giá sâu.",
                                              "Đầu tư cải tạo, sửa chữa lớn toàn bộ căn nhà trước khi bán.",
                                              "Tập trung marketing vào tiềm năng cải tạo, cung cấp ý tưởng/bản vẽ thiết kế gợi ý và định giá hợp lý phản ánh cả hiện trạng lẫn tiềm năng.",
                                              "Chỉ quảng cáo các bất động sản khác đẹp hơn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi đàm phán, việc nhà môi giới sử dụng kỹ thuật \"im lặng chiến lược\" (strategic silence) sau khi đưa ra một đề nghị hoặc nghe một yêu cầu có tác dụng gì?",
                              "options":  [
                                              "Thể hiện sự không đồng ý.",
                                              "Tạo áp lực tâm lý nhẹ nhàng, khuyến khích đối tác lên tiếng trước hoặc xem xét lại đề nghị.",
                                              "Cho thấy sự thiếu chuẩn bị.",
                                              "Làm mất thời gian đàm phán."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu phát hiện BĐS có dấu hiệu bị \"ô nhiễm tâm linh\" (theo niềm tin dân gian), nhà môi giới nên ứng xử thế nào với thông tin này?",
                              "options":  [
                                              "Hoàn toàn phớt lờ vì cho là mê tín.",
                                              "Chủ động thông báo cho mọi khách hàng tiềm năng.",
                                              "Tùy thuộc vào khách hàng và mức độ ảnh hưởng tiềm tàng đến giá trị/quyết định mua; có thể cần trao đổi tế nhị với người bán và cân nhắc thông báo cho người mua nếu đó là yếu tố quan trọng đối với họ.",
                                              "Sử dụng thông tin này để ép giá người bán."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi tư vấn cho khách hàng về việc vay ngân hàng mua bất động sản, nhà môi giới KHÔNG nên làm điều gì?",
                              "options":  [
                                              "Giới thiệu một số ngân hàng có chính sách tốt.",
                                              "Giải thích quy trình cơ bản của việc vay vốn.",
                                              "Đưa ra cam kết chắc chắn về việc khách hàng sẽ được duyệt vay với lãi suất cụ thể.",
                                              "Hỗ trợ khách hàng chuẩn bị một số giấy tờ cơ bản (nếu được yêu cầu)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là thách thức chính khi áp dụng công nghệ Blockchain vào quản lý giao dịch BĐS tại Việt Nam hiện nay?",
                              "options":  [
                                              "Công nghệ Blockchain quá đơn giản.",
                                              "Chi phí lưu trữ dữ liệu quá thấp.",
                                              "Hành lang pháp lý chưa hoàn thiện, sự chấp nhận và tích hợp với hệ thống quản lý đất đai hiện hành còn hạn chế.",
                                              "Thiếu chuyên gia công nghệ thông tin."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Chiến thuật đóng khung\" (Framing) trong đàm phán có thể được áp dụng như thế nào?",
                              "options":  [
                                              "Đóng khung ảnh BĐS thật đẹp để trình bày.",
                                              "Trình bày một vấn đề hoặc một đề xuất theo cách nhấn mạnh vào lợi ích hoặc tránh né mất mát để tác động đến cách nhìn nhận của đối tác.",
                                              "Yêu cầu đối tác phải trả lời trong một khung thời gian nhất định.",
                                              "Sử dụng khung pháp lý để ép đối tác."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Đại diện kép\" trong môi giới bất động sản tiềm ẩn rủi ro lớn nhất là gì?",
                              "options":  [
                                              "Môi giới không nhận được hoa hồng.",
                                              "Xung đột lợi ích, khó có thể bảo vệ tốt nhất quyền lợi của cả bên mua và bên bán cùng một lúc.",
                                              "Thủ tục pháp lý phức tạp hơn.",
                                              "Khách hàng không tin tưởng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong hợp đồng, một điều khoản được viết quá mơ hồ, có thể hiểu theo nhiều nghĩa khác nhau, sẽ dẫn đến hậu quả gì?",
                              "options":  [
                                              "Hợp đồng có giá trị pháp lý cao hơn.",
                                              "Dễ dàng thực hiện hơn.",
                                              "Có nguy cơ cao dẫn đến tranh chấp",
                                              "D. Giúp các bên linh hoạt hơn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu người mua phát hiện một lỗi tiềm ẩn nghiêm trọng của BĐS sau khi đã nhận nhà (ví dụ: thấm dột nặng vào mùa mưa), họ có quyền yêu cầu người bán chịu trách nhiệm không (theo Bộ luật Dân sự)?",
                              "options":  [
                                              "Không, vì đã nhận nhà nghĩa là chấp nhận mọi rủi ro.",
                                              "Có, nếu chứng minh được lỗi đó đã tồn tại trước thời điểm bàn giao và người bán đã cố tình che giấu hoặc không thông báo (trừ khi hợp đồng có thỏa thuận miễn trừ rõ ràng).",
                                              "Chỉ có quyền yêu cầu nhà môi giới chịu trách nhiệm.",
                                              "Chỉ có quyền tự bỏ tiền ra sửa chữa."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi tư vấn cho khách hàng lựa chọn giữa việc mua căn hộ chung cư và nhà đất thổ cư, nhà môi giới cần tập trung phân tích dựa trên yếu tố nào là chính?",
                              "options":  [
                                              "Chỉ dựa vào sở thích cá nhân của nhà môi giới.",
                                              "Phân tích ưu nhược điểm của từng loại hình dựa trên nhu cầu cụ thể, khả năng tài chính, lối sống và mục tiêu dài hạn của khách hàng.",
                                              "Chỉ dựa vào giá bán của hai loại hình.",
                                              "Chỉ tư vấn loại hình mà môi giới có nguồn hàng nhiều hơn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc sử dụng \"ngôn ngữ tích cực\" trong giao tiếp với khách hàng có tác dụng gì?",
                              "options":  [
                                              "Làm cho vấn đề trở nên nghiêm trọng hơn.",
                                              "Tạo cảm giác lạc quan, xây dựng, khuyến khích sự hợp tác và giảm thiểu xung đột.",
                                              "Che giấu sự thật về những điểm yếu của BĐS.",
                                              "Khiến nhà môi giới trông thiếu chuyên nghiệp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là một ví dụ về việc áp dụng kỹ năng \"quản lý thời gian\" hiệu quả của nhà môi giới?",
                              "options":  [
                                              "Dành cả ngày để lướt mạng xã hội.",
                                              "Lập kế hoạch làm việc hàng ngày/tuần.",
                                              "Luôn nhận lời mọi cuộc hẹn ngay cả khi trùng lịch.",
                                              "Chỉ làm việc khi có khách hàng gọi đến."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong hợp đồng mua bán nhà ở hình thành trong tương lai, điều khoản về \"bảo lãnh ngân hàng\" có ý nghĩa gì đối với người mua?",
                              "options":  [
                                              "Đảm bảo người mua chắc chắn được vay vốn.",
                                              "Ngân hàng sẽ thay chủ đầu tư hoàn thiện căn hộ nếu cần.",
                                              "Ngân hàng sẽ hoàn lại tiền cho người mua nếu chủ đầu tư không bàn giao nhà đúng cam kết theo các điều kiện trong thư bảo lãnh.",
                                              "Đảm bảo giá bán căn hộ sẽ không tăng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào thể hiện tầm nhìn chiến lược của một nhà quản lý văn phòng môi giới bất động sản?",
                              "options":  [
                                              "Khả năng dự báo xu hướng thị trường, xác định cơ hội phát triển dài hạn,",
                                              "Xây dựng đội ngũ kế cận",
                                              "Đầu tư vào công nghệ, thương hiệu một cách bền vững.",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Nhà môi giới A đang dẫn khách xem một căn nhà. Khách hàng rất thích vị trí nhưng chê bai gay gắt về thiết kế nội thất đã lỗi thời và tuyên bố chỉ mua nếu chủ nhà giảm giá mạnh để họ sửa chữa. Nhà môi giới biết chủ nhà là người lớn tuổi, rất yêu quý căn nhà và không muốn giảm giá. Hướng xử lý nào thể hiện kỹ năng đàm phán và tâm lý tốt nhất?",
                              "options":  [
                                              "Đồng ý ngay với khách hàng và hứa sẽ ép chủ nhà giảm giá mạnh.",
                                              "Bảo vệ quan điểm của chủ nhà, nói rằng thiết kế đó rất đẹp và khách hàng không có mắt thẩm mỹ.",
                                              "Ghi nhận ý kiến khách hàng, đồng cảm về nhu cầu sửa chữa, sau đó khéo léo chuyển hướng sang các ưu điểm khác (vị trí, kết cấu, tiềm năng) và đề xuất thương lượng một mức giá hợp lý hơn phản ánh cả ưu điểm lẫn nhược điểm.",
                                              "Từ chối làm việc tiếp với khách hàng vì cho rằng họ đòi hỏi quá đáng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Khách hàng B (người mua) rất muốn mua căn hộ X nhưng còn thiếu khoảng 10% tài chính, đang chờ người thân gửi tiền về trong 1 tháng tới. Người bán cần bán gấp trong 2 tuần. Nhà môi giới nên tư vấn cho khách hàng B giải pháp nào khả thi và ít rủi ro nhất?",
                              "options":  [
                                              "Khuyên khách hàng B vay nóng lãi suất cao để đủ tiền ngay.",
                                              "Đề nghị khách hàng B đặt cọc cao và cam kết thanh toán đủ trong 2 tuần, bất chấp rủi ro không nhận được tiền kịp.",
                                              "Trao đổi thẳng thắn với người bán về tình hình của người mua, đề xuất phương án thương lượng (ví dụ: đặt cọc trước một phần, ký hợp đồng mua bán nhưng thỏa thuận thời gian thanh toán kéo dài hơn 2 tuần và có biện pháp bảo đảm cho người bán).",
                                              "Tìm một căn hộ khác rẻ hơn cho khách hàng B."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Nhà môi giới C phát hiện Sổ hồng (GCN) của BĐS đang giới thiệu có ghi chú \"Thửa đất nằm trong quy hoạch mở rộng đường giao thông\" nhưng người bán lại khẳng định quy hoạch đó đã bị hủy bỏ và đưa ra một văn bản photocopy không rõ nguồn gốc. Hành động nào thể hiện sự cẩn trọng và đúng đắn nhất?",
                              "options":  [
                                              "Tin lời người bán và thông tin trên văn bản photocopy.",
                                              "Thông báo cho người mua về ghi chú trên sổ và thông tin người bán cung cấp, để người mua tự quyết định.",
                                              "Yêu cầu người bán cung cấp văn bản gốc có dấu đỏ của cơ quan chức năng xác nhận hủy bỏ quy hoạch, hoặc tự mình/hướng dẫn người mua đến Phòng Quản lý Đô thị để kiểm tra thông tin quy hoạch mới nhất, chính xác nhất.",
                                              "Tư vấn người mua nên mua nhanh vì có thể quy hoạch bị hủy thật."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Hợp đồng đặt cọc đã ký, bên mua đã giao tiền cọc. Tuy nhiên, đến ngày ký hợp đồng công chứng, bên bán đột ngột đổi ý không bán nữa vì có người khác trả giá cao hơn. Nhà môi giới nên tư vấn cho bên mua (khách hàng của mình) như thế nào?",
                              "options":  [
                                              "Khuyên bên mua chấp nhận mất cơ hội và tìm bất động sản khác.",
                                              "Tư vấn bên mua về quyền lợi của mình theo hợp đồng đặt cọc (thường là yêu cầu bên bán trả lại tiền cọc và bồi thường một khoản tương đương tiền cọc), hỗ trợ họ thực hiện các bước pháp lý cần thiết (nếu cần).",
                                              "Khuyên bên mua trả thêm tiền để cạnh tranh với người trả giá cao hơn.",
                                              "Đổ lỗi cho bên bán và không làm gì thêm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Hợp đồng mua bán đã công chứng, bên mua đã thanh toán 95%. Khi chuẩn bị bàn giao nhà, phát hiện có một vụ cháy nhỏ xảy ra làm hư hỏng một phần nội thất. Trách nhiệm xử lý thuộc về ai nếu hợp đồng không quy định rõ về rủi ro này?",
                              "options":  [
                                              "Bên mua phải chịu vì sắp nhận nhà.",
                                              "Bên bán vẫn phải chịu trách nhiệm sửa chữa hoặc bồi thường",
                                              "Nhà môi giới phải chịu trách nhiệm.",
                                              "Công ty bảo hiểm phải chịu (nếu có)."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Hợp đồng dịch vụ môi giới quy định hoa hồng là 2% trên giá bán. Giao dịch thành công ở mức 5 tỷ đồng. Tuy nhiên, để \"giúp\" người mua giảm lệ phí trước bạ, người bán và người mua thỏa thuận chỉ ghi giá trên hợp đồng công chứng là 3 tỷ đồng. Nhà môi giới nên tính hoa hồng dựa trên giá trị nào?",
                              "options":  [
                                              "3 tỷ đồng (theo hợp đồng công chứng).",
                                              "5 tỷ đồng (giá trị giao dịch thực tế).",
                                              "Trung bình cộng của hai giá (4 tỷ đồng).",
                                              "Tùy theo sự hào phóng của khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Trong hợp đồng đặt cọc, có điều khoản \"nếu bên mua không được ngân hàng duyệt cho vay đủ 70% giá trị BĐS thì hợp đồng này tự động hủy và bên bán hoàn trả lại toàn bộ tiền cọc\". Đây là loại điều khoản gì?",
                              "options":  [
                                              "Điều khoản phạt vi phạm.",
                                              "Điều khoản về bất khả kháng.",
                                              "Điều khoản về điều kiện có hiệu lực hoặc hủy bỏ hợp đồng",
                                              "Điều khoản về bảo mật thông tin."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Là người quản lý, bạn muốn xây dựng một cơ chế đánh giá hiệu quả làm việc (KPIs) công bằng cho đội ngũ môi giới. Chỉ số nào sau đây KHÔNG nên là chỉ số duy nhất hoặc quan trọng nhất?",
                              "options":  [
                                              "Doanh số bán hàng cá nhân.",
                                              "Số lượng khách hàng mới mang về.",
                                              "Mức độ hài lòng của khách hàng (thông qua khảo sát).",
                                              "Số giờ làm việc tại văn phòng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Khách hàng G (người bán) rất bận rộn và đề nghị nhà môi giới H thay mặt toàn bộ trong việc đàm phán giá cả và ký kết hợp đồng đặt cọc. Nhà môi giới H nên:",
                              "options":  [
                                              "Đồng ý ngay vì được khách hàng tin tưởng.",
                                              "Yêu cầu khách hàng lập Hợp đồng ủy quyền bằng văn bản, công chứng theo quy định pháp luật, trong đó ghi rõ phạm vi ủy quyền (được phép đàm phán giá trong khoảng nào, được ký hợp đồng đặt cọc...).",
                                              "Chỉ nhận ủy quyền bằng lời nói.",
                                              "Từ chối vì sợ trách nhiệm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Nhà môi giới L đang làm việc với cả người mua và người bán (đại diện kép) cho cùng một BĐS. Để đảm bảo tính minh bạch và giảm thiểu xung đột lợi ích, việc nào là quan trọng nhất?",
                              "options":  [
                                              "Chỉ tiết lộ thông tin có lợi cho người trả hoa hồng cao hơn.",
                                              "Giữ bí mật hoàn toàn thông tin của mỗi bên đối với bên kia.",
                                              "Thông báo rõ ràng cho cả hai bên về vai trò đại diện kép của mình, có được sự đồng ý bằng văn bản và cam kết hành động công bằng, trung thực, cung cấp thông tin khách quan như nhau cho cả hai bên.",
                                              "Đứng về phía người mua để giúp họ mua được giá rẻ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc kinh doanh bất động sản là:",
                              "options":  [
                                              "Công khai, minh bạch;",
                                              "Tự do thỏa thuận trên cơ sở tôn trọng quyền và lợi ích hợp pháp của các bên thông qua hợp đồng,",
                                              "Không vi phạm điều cấm của luật",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người được cấp chứng chỉ hành nghề môi giới bất động sản cho người khác mượn, thuê chứng chỉ hành nghề môi giới Bất động sản để hành nghề thì sẽ:",
                              "options":  [
                                              "Phạt tiền từ 40.000.000 đồng đến 60.000.000 đồng",
                                              "Tước quyền sử dụng chứng chỉ hành nghề từ 03 tháng đến 06 tháng",
                                              "Cả A và B đều sai",
                                              "Bao gồm cả A và B đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức, cá nhân kinh doanh dịch vụ môi giới bất động sản đồng thời vừa là nhà môi giới vừa là một bên thực hiện hợp đồng trong một giao dịch kinh doanh bất động sản thì bị xử phạt bao nhiêu:",
                              "options":  [
                                              "20.000.000 đồng đến 30 triệu đồng",
                                              "40.000.000 đồng đến 60.000.000 đồng",
                                              "80.000.000 đồng đến 120.000.000 đ",
                                              "Không bị phạt tiền"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khoản hoa hồng nào sau đây là phạm luật?",
                              "options":  [
                                              "Tiền giờ công",
                                              "Phần trăm trên giá mua",
                                              "Khoản phí mà khách hàng phải trả khi ký hợp đồng nhờ môi giới bán nhà",
                                              "Không có khoản nào kể trên được xem là \"hoa hồng\" trong môi giới bất động sản"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp kinh doanh dịch vụ môi giới bất động sản có các quyền nào:",
                              "options":  [
                                              "Yêu cầu các tổ chức, cá nhân có liên quan cung cấp hồ sơ, thông tin bất động sản thực hiện giao dịch;",
                                              "Thu phí dịch vụ của khách hàng theo thỏa thuận của các bên;",
                                              "Từ chối môi giới bất động sản không đủ điều kiện đưa vào kinh doanh;",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân hành nghề môi giới bất động sản có các quyền hưởng thù lao, hoa hồng môi giới bất động sản từ đâu:",
                              "options":  [
                                              "Doanh nghiệp kinh doanh dịch vụ sàn giao dịch bất động sản hoặc doanh nghiệp kinh doanh dịch vụ môi giới bất động sản",
                                              "Khách hàng",
                                              "Cả A và B",
                                              "Đáp án D"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 1 (KTCM 1-50).docx",
        "topic":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 1 (KTCM 1-50)",
        "questions":  [
                          {
                              "question":  "\"Cung Bất động sản\" được định nghĩa là gì?",
                              "options":  [
                                              "Tổng số lượng bất động sản đã được xây dựng trong một khu vực.",
                                              "Lượng bất động sản sẵn sàng bán/cho thuê tại một thời điểm và mức giá nhất định.",
                                              "Nhu cầu mua bất động sản của người dân tại một thời điểm.",
                                              "Số lượng dự án bất động sản đang được triển khai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để kiểm tra thông tin quy hoạch chi tiết của một thửa đất, nhà môi giới nên đến cơ quan nào?",
                              "options":  [
                                              "Cơ quan Thuế.",
                                              "Văn phòng Đăng ký đất đai.",
                                              "UBND phường/xã.",
                                              "Công an phường/xã."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuế Thu nhập cá nhân (TNCN) khi chuyển nhượng bất động sản thường do ai chịu trách nhiệm nộp theo thông lệ (trừ khi có thỏa thuận khác)?*",
                              "options":  [
                                              "Người mua.",
                                              "Người bán.",
                                              "Nhà môi giới.",
                                              "Cơ quan công chứng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Năng lực hành vi dân sự đầy đủ\" của cá nhân được xác định khi nào?*",
                              "options":  [
                                              "Từ khi sinh ra.",
                                              "Khi đủ 15 tuổi.",
                                              "Khi đủ 18 tuổi và không bị Tòa án tuyên mất hoặc hạn chế năng lực hành vi.",
                                              "Khi có tài sản riêng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây ảnh hưởng trực tiếp đến NGUỒN CẦU bất động sản?*",
                              "options":  [
                                              "Chi phí xây dựng tăng cao.",
                                              "Khả năng vay vốn và lãi suất tín dụng bất động sản.",
                                              "Thủ tục cấp phép dự án kéo dài.",
                                              "Lượng hàng tồn kho bất động sản lớn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi phân loại khách hàng mua bất động sản, nhóm \"Mua để ở\" thường có đặc điểm gì?*",
                              "options":  [
                                              "Quan tâm chính đến tiện ích sống và không gian cho gia đình.",
                                              "Tìm kiếm bất động sản có tiềm năng tăng giá.",
                                              "Mục tiêu chính là bảo toàn vốn khỏi lạm phát.",
                                              "Tìm kiếm các bất động sản tạo dòng tiền cho thuê."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Thế chấp\" bất động sản là gì?*",
                              "options":  [
                                              "Bán bất động sản trả góp.",
                                              "Cho thuê bất động sản dài hạn.",
                                              "Dùng bất động sản làm tài sản bảo đảm cho khoản vay mà không giao bất động sản.",
                                              "Chuyển nhượng quyền sử dụng bất động sản có thời hạn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng đặt cọc trong giao dịch bất động sản có ý nghĩa gì?*",
                              "options":  [
                                              "Là hợp đồng mua bán chính thức.",
                                              "Là thỏa thuận ban đầu, ghi nhận việc bên mua giao tiền cọc để đảm bảo giao kết hợp đồng chính thức.",
                                              "Là hợp đồng thuê bất động sản ngắn hạn.",
                                              "Là hợp đồng dịch vụ môi giới."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hoạt động nào KHÔNG thuộc Bước 4: Kết thúc thương vụ và Chăm sóc sau bán hàng?*",
                              "options":  [
                                              "Phối hợp bàn giao bất động sản.",
                                              "Nhận phí hoa hồng môi giới.",
                                              "Soạn thảo và đăng tin quảng cáo bất động sản.",
                                              "Hỗ trợ thủ tục sang tên sổ đỏ (nếu có thỏa thuận)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong mô hình SOFTEN, chữ \"F\" (Forward Lean) thể hiện điều gì?*",
                              "options":  [
                                              "Nụ cười thân thiện.",
                                              "Tư thế cởi mở.",
                                              "Hơi nghiêng người về phía trước để thể hiện sự quan tâm.",
                                              "Giọng điệu tích cực."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mô hình SOFTEN “Smile (mỉm cười), Open (cởi mở), Forward (nghiêng tới), Touch (bắt tay, chạm), Eyes (mắt nhìn mắt), và Nod (gật đầu)” được áp dụng trong giai đoạn nào của hoạt động môi giới?*",
                              "options":  [
                                              "Chỉ khi đàm phán giá.",
                                              "Chỉ khi ký hợp đồng.",
                                              "Trong suốt quá trình giao tiếp trực tiếp với khách hàng.",
                                              "Chỉ khi xử lý khiếu nại."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là nguyên tắc có thể dẫn đến đàm phán trong kinh doanh thành công:*",
                              "options":  [
                                              "Nhà đàm phán ngồi vào bàn đàm phán chỉ với 1 phương án duy nhất mà không có phương án thay thế",
                                              "Nhà đàm phán phải xác định rõ mục tiêu đàm phán và luôn bám sát nó trong suốt quá trình đàm phán",
                                              "Nhà đàm phán có những định kiến với đối tác",
                                              "Nhà đàm phán luôn nói nhiều thay vì hỏi nhiều"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi phân tích nguồn cung bất động sản, yếu tố \"tốc độ tăng trưởng và suy thoái của từng loại bất động sản\" phản ánh điều gì rõ nhất?*",
                              "options":  [
                                              "Chi phí xây dựng hiện tại.",
                                              "Chu kỳ của thị trường bất động sản và tâm lý đầu tư.",
                                              "Chính sách tín dụng của ngân hàng.",
                                              "Mật độ dân số khu vực."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới phát hiện thông tin trên Sổ hồng (diện tích) có sai khác nhỏ so với đo đạc thực tế. Hành động nào thể hiện sự chuyên nghiệp và quản lý rủi ro tốt nhất?*",
                              "options":  [
                                              "Phớt lờ sự khác biệt vì cho rằng không đáng kể.",
                                              "Chỉ thông báo cho bên có lợi từ sự khác biệt đó.",
                                              "Minh bạch thông báo cho cả bên mua và bên bán về sự khác biệt, giải thích về sai số cho phép (nếu có) và tư vấn các bên kiểm tra kỹ lưỡng hoặc đo đạc lại nếu cần.",
                                              "Tự ý sửa lại thông tin trên hồ sơ giới thiệu cho khớp với Sổ hồng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Năng lực pháp luật dân sự\" và \"Năng lực hành vi dân sự\" khác nhau cơ bản ở điểm nào?*",
                              "options":  [
                                              "Năng lực pháp luật liên quan đến quyền, còn năng lực hành vi liên quan đến khả năng thực hiện quyền đó bằng hành vi của mình.",
                                              "Năng lực pháp luật chỉ có ở người trưởng thành, năng lực hành vi có từ khi sinh ra.",
                                              "Năng lực pháp luật do Tòa án quyết định, năng lực hành vi do cá nhân tự quyết định.",
                                              "Không có sự khác biệt đáng kể giữa hai khái niệm này."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Rủi ro lớn nhất khi mua bán BĐS thông qua hợp đồng ủy quyền là gì?*",
                              "options":  [
                                              "Phí ủy quyền cao.",
                                              "Thời gian làm thủ tục lâu hơn.",
                                              "Hợp đồng ủy quyền có thể không hợp lệ (hết hạn, người ủy quyền mất năng lực hành vi, nội dung không đúng...) dẫn đến giao dịch bị vô hiệu.",
                                              "Khó vay vốn ngân hàng hơn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ngoài các giấy tờ pháp lý, kỹ thuật, việc lưu trữ \"ghi chú các buổi làm việc/khảo sát, thư chào giá, biên bản thương lượng\" trong hồ sơ thương vụ có ý nghĩa gì?*",
                              "options":  [
                                              "Chỉ làm hồ sơ dày thêm, không cần thiết.",
                                              "Làm bằng chứng về quá trình làm việc, các thỏa thuận từng bước và cơ sở cho việc giải quyết tranh chấp (nếu có) về sau.",
                                              "Để tính toán thời gian làm việc của môi giới.",
                                              "Để gửi báo cáo cho hiệp hội bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong Bước 3 (Giao dịch với khách hàng) của quy trình môi giới, sau khi các bên đã thống nhất các điều khoản cơ bản, bước tiếp theo quan trọng nhất là gì?*",
                              "options":  [
                                              "Bàn giao ngay BĐS.",
                                              "Ký Hợp đồng Đặt cọc để ràng buộc trách nhiệm ban đầu.",
                                              "Chuyển toàn bộ tiền mua bán.",
                                              "Đi đăng ký sang tên Sổ hồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao nhà môi giới cần giúp khách hàng (đặc biệt là người mua lần đầu) hiểu rõ các điều khoản trong Hợp đồng Đặt cọc/Mua bán?*",
                              "options":  [
                                              "Để thể hiện mình là người soạn thảo hợp đồng giỏi.",
                                              "Vì khách hàng thường chủ quan, không đọc kỹ hoặc không hiểu hết các thuật ngữ pháp lý, có thể dẫn đến rủi ro hoặc tranh chấp không đáng có.",
                                              "Để kéo dài thời gian ký kết hợp đồng.",
                                              "Để tính thêm phí tư vấn hợp đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi đàm phán, việc hiểu rõ BATNA (Giải pháp thay thế tốt nhất nếu không đạt được thỏa thuận) của khách hàng mình đại diện giúp nhà môi giới làm gì?*",
                              "options":  [
                                              "Bỏ qua mọi đề nghị của đối tác.",
                                              "Xác định được \"lằn ranh đỏ\" và đưa ra chiến lược đàm phán phù hợp.",
                                              "Tự tin đưa ra yêu cầu cao hơn nhiều so với thị trường.",
                                              "Nhanh chóng chấp nhận đề nghị đầu tiên của đối tác."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong tình huống đàm phán căng thẳng, một bên đưa ra lời chỉ trích cá nhân đối với bên kia.  Nhà môi giới nên phản ứng thế nào là tốt nhất?*",
                              "options":  [
                                              "Hùa theo lời chỉ trích để làm hài lòng một bên.",
                                              "Ngắt lời và yêu cầu hai bên dừng đàm phán ngay lập tức.",
                                              "Giữ bình tĩnh, khéo léo lái cuộc thảo luận quay trở lại vấn đề chính, nhắc nhở về mục tiêu chung và giữ thái độ tôn trọng đối với cả hai bên.",
                                              "Rời khỏi cuộc đàm phán vì cho rằng không thể tiếp tục."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong quản trị nhân sự, chính sách \"lương cứng + lương mềm (hoa hồng)\" nhằm mục đích gì?*",
                              "options":  [
                                              "Chỉ để giảm chi phí lương cho công ty",
                                              "Đảm bảo thu nhập cơ bản cho nhân viên, đồng thời tạo động lực mạnh mẽ để họ nỗ lực đạt kết quả kinh doanh tốt hơn thông qua hoa hồng.",
                                              "Gây khó khăn cho việc tính lương.",
                                              "Chỉ áp dụng cho nhân viên mới."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi thuyết phục khách hàng sử dụng dịch vụ môi giới của mình, yếu tố nào thường có sức nặng nhất*",
                              "options":  [
                                              "Sự am hiểu thị trường.",
                                              "Mạng lưới khách hàng và cam kết mang lại giá trị thực sự cho khách hàng.",
                                              "Năng lực chuyên môn,",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới có nên từ chối làm việc với một khách hàng có yêu cầu phi thực tế hoặc không rõ ràng sau khi đã cố gắng tư vấn không?*",
                              "options":  [
                                              "Không bao giờ, phải cố gắng đáp ứng mọi yêu cầu.",
                                              "Nên từ chối một cách lịch sự và chuyên nghiệp.",
                                              "Nên tiếp tục làm việc nhưng không cần nỗ lực nhiều.",
                                              "Nên báo cáo khách hàng này với hiệp hội BĐS."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào thể hiện rõ nhất đạo đức nghề nghiệp của nhà môi giới trong giao dịch?*",
                              "options":  [
                                              "Luôn đạt được mức hoa hồng cao nhất.",
                                              "Luôn đặt lợi ích hợp pháp của khách hàng lên hàng đầu, trung thực, minh bạch và bảo mật thông tin.",
                                              "Luôn nói tốt về mọi bất động sản mình giới thiệu.",
                                              "Chỉ làm việc với những khách hàng giàu có."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong trường hợp nào thì việc sử dụng \"Hợp đồng Ủy quyền\" để mua bán bất động sản là hợp lệ và ít rủi ro nhất?*",
                              "options":  [
                                              "Người ủy quyền đang ở nước ngoài không thể về ký bán.",
                                              "Người ủy quyền và người được ủy quyền là vợ chồng/cha mẹ con cái ruột, nội dung ủy quyền rõ ràng, hợp pháp và còn hiệu lực.",
                                              "Người mua muốn nhờ người khác đứng tên hộ.",
                                              "Hợp đồng ủy quyền được lập bằng giấy viết tay."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là hạn chế chính của việc chỉ dựa vào các mối quan hệ cá nhân để tìm kiếm khách hàng trong môi giới bất động sản?*",
                              "options":  [
                                              "Khách hàng từ mối quan hệ thường khó tính hơn.",
                                              "Nguồn khách hàng bị giới hạn trong phạm vi mạng lưới quen biết, khó mở rộng quy mô kinh doanh.",
                                              "Phí hoa hồng thường thấp hơn.",
                                              "Khó xây dựng lòng tin với khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng mua bán bất động sản được công chứng có giá trị pháp lý như thế nào so với hợp đồng không công chứng (viết tay)?*",
                              "options":  [
                                              "Giá trị pháp lý như nhau.",
                                              "Hợp đồng công chứng có giá trị chứng cứ cao hơn.",
                                              "Hợp đồng viết tay có giá trị hơn vì thể hiện đúng ý chí các bên.",
                                              "Chỉ hợp đồng công chứng mới phải nộp thuế."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc sử dụng các công cụ phân tích dữ liệu website (ví dụ: Google Analytics) giúp nhà môi giới bất động sản làm gì?*",
                              "options":  [
                                              "Tự động đăng tin BĐS.",
                                              "Hiểu rõ hành vi của người truy cập website (họ xem tin nào nhiều, đến từ đâu, ở lại bao lâu...), từ đó tối ưu nội dung và chiến lược marketing online.",
                                              "Thiết kế lại giao diện website",
                                              "Tăng tốc độ tải trang web."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thái độ nào là KHÔNG phù hợp khi nhà môi giới nhận được một lời phàn nàn gay gắt từ khách hàng?*",
                              "options":  [
                                              "Lắng nghe chăm chú để hiểu rõ vấn đề.",
                                              "Đổ lỗi ngược lại cho khách hàng hoặc bên thứ ba.",
                                              "Xin lỗi về trải nghiệm không tốt của khách hàng (ngay cả khi lỗi không hoàn toàn do mình).",
                                              "Đề xuất hướng giải quyết hoặc khắc phục (nếu có thể)."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều gì tạo nên sự khác biệt cốt lõi giữa một nhà môi giới bất động sản đơn thuần và một nhà tư vấn bất động sản chuyên nghiệp?*",
                              "options":  [
                                              "Số lượng giao dịch thành công.",
                                              "Mức phí hoa hồng cao hơn.",
                                              "Khả năng cung cấp giải pháp toàn diện, dựa trên sự thấu hiểu sâu sắc nhu cầu khách hàng, kiến thức thị trường và phân tích chuyên môn, thay vì chỉ kết nối mua bán.",
                                              "Thời gian hoạt động trong nghề lâu hơn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi thị trường bất động sản có dấu hiệu trầm lắng, người bán không muốn giảm giá, nhà môi giới nên tập trung vào chiến lược nào?*",
                              "options":  [
                                              "Tạm dừng mọi hoạt động marketing.",
                                              "Chuyển sang chỉ làm việc với người mua.",
                                              "Tăng cường marketing sáng tạo, nhấn mạnh các giá trị độc đáo của bất động sản",
                                              "Yêu cầu người bán phải giảm giá bằng mọi cách."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là rủi ro khi nhà môi giới quá tập trung vào việc \"chốt sale\" nhanh chóng mà bỏ qua bước thẩm định thông tin kỹ lưỡng?*",
                              "options":  [
                                              "Nhận được hoa hồng nhanh hơn.",
                                              "Có thể dẫn đến giao dịch thất bại giữa chừng, tranh chấp pháp lý, mất uy tín và gây thiệt hại cho khách hàng.",
                                              "Được khách hàng đánh giá cao vì sự nhanh nhẹn.",
                                              "Tiết kiệm được chi phí hoạt động."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong hợp đồng mua bán, điều khoản Bất khả kháng thường đề cập đến vấn đề gì?*",
                              "options":  [
                                              "Quyền đơn phương chấm dứt hợp đồng của người mua.",
                                              "Các sự kiện khách quan, không lường trước được (thiên tai, dịch bệnh, chiến tranh...) làm ảnh hưởng đến việc thực hiện hợp đồng và miễn trừ trách nhiệm cho các bên.",
                                              "Nghĩa vụ nộp thuế của các bên.",
                                              "Mức phạt vi phạm hợp đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc sử dụng \"bằng chứng xã hội\" trong marketing BĐS có thể là hình thức nào?*",
                              "options":  [
                                              "Đưa ra mức giá cao nhất thị trường.",
                                              "Sử dụng lời chứng thực của khách hàng cũ hài lòng, hiển thị các giải thưởng, chứng nhận uy tín.",
                                              "Che giấu thông tin về các giao dịch thất bại.",
                                              "Quảng cáo sai sự thật về tiện ích dự án."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong trường hợp thị trường bất động sản biến động mạnh (tăng hoặc giảm giá nhanh), kỹ năng nào của nhà môi giới trở nên đặc biệt quan trọng?*",
                              "options":  [
                                              "Kỹ năng thiết kế nội thất.",
                                              "Kỹ năng phân tích thị trường, dự báo (ở mức độ nhất định) và tư vấn chiến lược kịp thời, linh hoạt cho khách hàng.",
                                              "Kỹ năng chụp ảnh BĐS.",
                                              "Kỹ năng soạn thảo văn bản hành chính."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc từ chối cung cấp thông tin sai lệch theo yêu cầu của khách hàng (ví dụ: yêu cầu nói dối về tình trạng BĐS) thể hiện điều gì ở nhà môi giới?*",
                              "options":  [
                                              "Sự thiếu linh hoạt.",
                                              "Sự cứng nhắc, không biết chiều khách.",
                                              "Tính chính trực và tuân thủ đạo đức nghề nghiệp.",
                                              "Sự thiếu tự tin vào khả năng bán hàng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi quản lý một đội ngũ nhân viên môi giới, việc xây dựng cơ chế chia sẻ thông tin và hợp tác (co-broke) nội bộ hiệu quả mang lại lợi ích gì?*",
                              "options":  [
                                              "Tăng sự cạnh tranh gay gắt giữa các nhân viên.",
                                              "Giảm tổng doanh thu của công ty.",
                                              "Tăng khả năng chốt giao dịch nhờ tận dụng được nguồn hàng và nguồn khách của nhau, tạo môi trường làm việc hợp tác.",
                                              "Làm lộ thông tin khách hàng ra ngoài."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là hạn chế của việc thẩm định giá bất động sản chỉ dựa vào phương pháp so sánh thị trường?*",
                              "options":  [
                                              "Phương pháp này quá phức tạp.",
                                              "Có thể không chính xác nếu thị trường có ít giao dịch tương đồng hoặc bất động sản có tính độc đáo cao.",
                                              "Chỉ áp dụng được cho bất động sản thương mại.",
                                              "Luôn cho ra kết quả thấp hơn giá trị thực."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Kỹ năng \"quản lý kỳ vọng\" của khách hàng có nghĩa là gì?*",
                              "options":  [
                                              "Luôn hứa hẹn những điều vượt quá khả năng để làm khách hàng hài lòng ban đầu.",
                                              "Đặt ra những kỳ vọng thực tế, rõ ràng cho khách hàng về quy trình, thời gian, kết quả có thể đạt được ngay từ đầu, tránh gây thất vọng về sau.",
                                              "Yêu cầu khách hàng không nên có kỳ vọng gì.",
                                              "Bỏ qua những kỳ vọng của khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nhà môi giới chủ động tìm hiểu và tuân thủ các quy định về quảng cáo BĐS (ví dụ: không quảng cáo sai sự thật, phải ghi rõ thông tin liên hệ...) nhằm mục đích gì?*",
                              "options":  [
                                              "Tránh bị xử phạt vi phạm hành chính",
                                              "Xây dựng hình ảnh chuyên nghiệp, tuân thủ pháp luật.",
                                              "Cả A và B đúng",
                                              "Cả A và B sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công nghệ nào cho phép nhà môi giới phân tích hành vi người dùng trên website để cá nhân hóa trải nghiệm và đề xuất bất động sản phù hợp?*",
                              "options":  [
                                              "IoT.",
                                              "Blockchain.",
                                              "Big Data và AI.",
                                              "GPS."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi gặp một khách hàng có kiến thức sâu về bất động sản và thị trường, nhà môi giới nên thể hiện vai trò của mình như thế nào?*",
                              "options":  [
                                              "Tranh luận để chứng tỏ mình giỏi hơn.",
                                              "Thể hiện sự tôn trọng kiến thức của khách hàng, tập trung vào việc cung cấp giá trị gia tăng khác",
                                              "Lảng tránh các câu hỏi chuyên sâu",
                                              "Chỉ đóng vai trò người dẫn đi xem nhà."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là giới hạn của việc sử dụng công nghệ AI trong định giá BĐS?*",
                              "options":  [
                                              "Công nghệ AI không thể xử lý được số lượng lớn dữ liệu.",
                                              "Kết quả định giá của công nghệ AI có thể không phản ánh được các yếu tố đặc thù, độc đáo hoặc các yếu tố cảm tính, tâm lý thị trường mà con người có thể cảm nhận.",
                                              "Công nghệ AI luôn đưa ra mức giá thấp hơn thực tế.",
                                              "Chi phí sử dụng AI quá cao cho việc định giá."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi kết thúc một thương vụ thành công, hành động nào thể hiện sự chuyên nghiệp và giúp duy trì mối quan hệ tốt đẹp với khách hàng?*",
                              "options":  [
                                              "Ngắt mọi liên lạc với khách hàng.",
                                              "Gửi lời cảm ơn chân thành, hỏi thăm về trải nghiệm và đề nghị hỗ trợ nếu có vấn đề phát sinh (trong phạm vi hợp lý).",
                                              "Yêu cầu khách hàng viết đánh giá tốt ngay lập tức.",
                                              "Chỉ gửi hóa đơn thu phí hoa hồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong đàm phán, nếu đối tác liên tục sử dụng chiến thuật gây áp lực thời gian (\"Tôi cần quyết định ngay trong hôm nay\"), nhà môi giới nên phản ứng thế nào?*",
                              "options":  [
                                              "Đồng ý ngay lập tức với mọi điều kiện.",
                                              "Cũng tạo áp lực ngược lại.",
                                              "Giữ bình tĩnh, không bị cuốn theo áp lực, đề nghị có thêm thời gian hợp lý để xem xét nếu cần, hoặc yêu cầu đối tác giải thích lý do của sự gấp rút đó.",
                                              "Từ chối đàm phán tiếp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là lợi ích của việc đa dạng hóa các kênh marketing (cả online và offline) cho văn phòng môi giới?*",
                              "options":  [
                                              "Tốn kém chi phí hơn.",
                                              "Tiếp cận được nhiều đối tượng khách hàng khác nhau và giảm sự phụ thuộc vào một kênh duy nhất.",
                                              "Khó quản lý và đo lường hiệu quả hơn.",
                                              "Chỉ phù hợp với thị trường bất động sản cao cấp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Hợp đồng mua bán có điều khoản \"Giá bán không bao gồm thuế, phí liên quan đến việc chuyển nhượng\". Vậy, lệ phí trước bạ sẽ do ai chịu trách nhiệm nộp?*",
                              "options":  [
                                              "Người bán.",
                                              "Người mua.",
                                              "Nhà môi giới.",
                                              "Cơ quan công chứng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Nhà môi giới M muốn sử dụng hình ảnh khách hàng đã giao dịch thành công để làm tư liệu marketing (testimonial). Nhà môi giới M cần làm gì trước tiên?*",
                              "options":  [
                                              "Tự ý lấy ảnh trên Facebook của khách hàng và đăng tải.",
                                              "Xin phép khách hàng một cách rõ ràng bằng văn bản (hoặc hình thức có giá trị tương đương) về việc sử dụng hình ảnh và ý kiến của họ cho mục đích marketing.",
                                              "Chỉ sử dụng hình ảnh che mặt của khách hàng.",
                                              "Yêu cầu khách hàng bắt buộc phải cung cấp testimonial."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Một bất động sản được đồng sở hữu bởi 3 anh em. Một người trong số đó liên hệ nhà môi giới N để bán. Nhà môi giới N cần yêu cầu giấy tờ gì để đảm bảo giao dịch hợp lệ?*",
                              "options":  [
                                              "Chỉ cần CMND/CCCD của người liên hệ.",
                                              "Giấy chứng nhận quyền sử dụng đất và văn bản đồng ý/ủy quyền bán có chữ ký hợp lệ của cả 3 anh em (nên được công chứng/chứng thực).",
                                              "Giấy khai sinh của cả 3 anh em.",
                                              "Hợp đồng lao động của người liên hệ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 2 (KTCM 51-100).docx",
        "topic":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 2 (KTCM 51-100)",
        "questions":  [
                          {
                              "question":  "Tình huống: Trong hợp đồng thuê nhà, điều khoản \"Tiền thuê nhà sẽ được điều chỉnh hàng năm theo chỉ số giá tiêu dùng (CPI) do Tổng cục Thống kê công bố\" có lợi và bất lợi gì?",
                              "options":  [
                                              "Chỉ có lợi cho chủ nhà vì tiền thuê luôn tăng.",
                                              "Có lợi cho cả hai bên vì tạo ra cơ chế điều chỉnh giá khách quan, tránh tranh cãi; nhưng cũng có thể bất lợi nếu CPI tăng quá cao hoặc giảm sâu.",
                                              "Chỉ có lợi cho người thuê vì CPI thường tăng chậm.",
                                              "Chỉ làm hợp đồng thêm phức tạp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Hợp đồng mua bán bất động sản có điều khoản \"Bên bán cam kết bất động sản không có bất kỳ tranh chấp nào\". Sau khi mua, bên mua phát hiện có tranh chấp ranh giới từ trước đó. Bên mua có quyền gì?",
                              "options":  [
                                              "Không có quyền gì vì đã ký hợp đồng.",
                                              "Có quyền yêu cầu bên bán giải quyết dứt điểm tranh chấp hoặc yêu cầu hủy hợp đồng và bồi thường thiệt hại do bên bán đã vi phạm cam kết.",
                                              "Chỉ có quyền yêu cầu giảm giá bán.",
                                              "Phải tự mình giải quyết tranh chấp với hàng xóm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Hợp đồng mua bán bất động sản quy định thời hạn bên bán phải bàn giao nhà là 30 ngày sau khi ký công chứng. Đến ngày thứ 30, bên bán vẫn chưa dọn đi và xin thêm 1 tuần. Bên mua nên:",
                              "options":  [
                                              "Đồng ý ngay lập tức mà không cần điều kiện gì.",
                                              "Yêu cầu bên bán bồi thường thiệt hại do chậm bàn giao.",
                                              "Xem xét lý do chậm trễ, nếu hợp lý có thể đồng ý gia hạn nhưng nên lập thành văn bản (phụ lục hợp đồng) ghi rõ thời hạn mới và có thể kèm theo điều kiện (ví dụ: bên bán chịu chi phí thuê nhà phát sinh cho bên mua trong 1 tuần đó).",
                                              "Thuê người đến chuyển đồ của bên bán đi."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Trong quá trình đàm phán, nhà môi giới O nhận thấy cả bên mua và bên bán đều có thiện chí nhưng gặp khó khăn trong việc tìm tiếng nói chung về một vài điều khoản nhỏ. Nhà môi giới O nên đóng vai trò gì?",
                              "options":  [
                                              "Đứng về phía bên trả hoa hồng cao hơn.",
                                              "Đề xuất các giải pháp trung gian, các phương án thỏa hiệp công bằng cho các điều khoản nhỏ đó để giúp hai bên vượt qua điểm nghẽn và đi đến thỏa thuận cuối cùng.",
                                              "Để hai bên tự giải quyết các vấn đề nhỏ đó.",
                                              "Tuyên bố đàm phán thất bại."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Hợp đồng đặt cọc không ghi rõ về việc ai sẽ chịu chi phí công chứng hợp đồng mua bán. Theo thông lệ tại nhiều địa phương ở Việt Nam, chi phí này thường do ai chịu?",
                              "options":  [
                                              "Người bán chịu hoàn toàn.",
                                              "Người mua chịu hoàn toàn.",
                                              "Nhà môi giới chịu.",
                                              "Thường do người mua chịu, hoặc hai bên thỏa thuận chia đôi."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng nào sau đây không phải là hợp đồng kinh doanh bất động sản?",
                              "options":  [
                                              "Hợp đồng mua bán nhà, công trình xây dựng",
                                              "Hợp đồng thuê mua nhà, công trình xây dựng",
                                              "Hợp đồng quản lý bất động sản",
                                              "Hợp đồng chuyển nhượng, cho thuê, cho thuê lại quyền sử dụng đất"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục nào sau đây không phải là một chiến lược đàm phán hay?",
                              "options":  [
                                              "Bày tỏ thiện ý sớm để chứng tỏ rằng bạn đang thương thảo với mục đích tích cực",
                                              "Xác định tâm ý và những điều kiện mà khách hàng có thể chấp nhận được",
                                              "Đưa ra những điều kiện ưu đãi như thanh toán nhanh hoặc mong muốn đạt được sự giao dịch sớm",
                                              "Áp dụng kỹ năng đàm phán win-win trong đó mỗi bên đầu cảm thấy thỏa mãn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong quá trình đổi mới và phát triển kinh tế trong hơn 20 năm qua, nhu cầu về bất động sản tại Việt Nam đã tăng lên rất cao, theo anh chị nguyên nhân là do:",
                              "options":  [
                                              "Quy mô dân số tăng nhanh đã thúc đẩy nhu cầu về nhà ở tăng theo",
                                              "Việc bùng nổ quá trình đô thị hóa ở Việt Nam",
                                              "Việc phát triển kinh thế theo hướng công nghiệp hóa – hiện đại hóa",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tương sinh đúng trong Ngũ hành theo quan niệm phong thủy",
                              "options":  [
                                              "Thủy sinh mộc, mộc sinh hỏa, hỏa sinh thổ, thổ sinh kim, kim sinh thủy",
                                              "Thủy sinh kim, kim sinh thổ, thổ sinh mộc, mộc sinh thủy, thủy sinh hỏa",
                                              "Thổ sinh hỏa, hỏa sinh kim, kim sinh thủy, thủy sinh mộc, mộc sinh thổ",
                                              "Cả 3 câu trên đều đúng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích của việc khám phá nhu cầu khách hàng trong mua bán bất động sản là",
                              "options":  [
                                              "Xác định nhu cầu mua bán",
                                              "Khả năng thanh toán",
                                              "Động lực của khách hàng",
                                              "Tất cả đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp đánh giá bất động sản dựa trên dữ liệu thị trường có thể yêu cầu một vài điều chỉnh dựa trên việc so sánh những khoản sau, ngoại trừ:",
                              "options":  [
                                              "Ngày, thời điểm mua bán",
                                              "Diện tích kích thước nền nhà và vị trí khu vực",
                                              "Phương thức thanh toán tài chính của người mua",
                                              "Chi phí thay thế sửa chữa kiến trúc"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quá trình chia một thị trường toàn phần hoặc một khu vực thị trường thành những thị trường nhỏ, những nhóm khách hàng vì mục đích marketing, gọi là:",
                              "options":  [
                                              "Thâm nhập thị trường.",
                                              "Phân khúc thị trường.",
                                              "Chọn thị trường mục tiêu.",
                                              "Phát triển thị trường."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc quan trọng nhất cần nắm để viết thư bán hàng bất động sản",
                              "options":  [
                                              "Làm nổi bật vai trò của khách hàng",
                                              "Nhấn mạnh một đặc điểm của sản phẩm",
                                              "Sử dụng ngôn ngữ chuyên môn",
                                              "Sử dụng các danh từ cụ thể và các động từ chủ động"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều nào thể hiện lập trường của đàm phán kiểu mềm?",
                              "options":  [
                                              "Ôn hòa, trao đổi, lắng nghe các đề xuất, dung hòa lập trường của các bên.",
                                              "Cứng rắn, không nhượng bộ, cố gắng bảo vệ lập trường đến cùng.",
                                              "Không cứng rắn, không nhượng bộ, dung hòa lập trường các bên",
                                              "Lắng nghe các đề xuất nhưng không nhượng bộ, cố gắng bảo vệ lập trường của mình"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quy trình môi giới sản phẩm bất động sản bao gồm các bước sau, ngoại trừ:",
                              "options":  [
                                              "Đánh giá tiềm năng của sản phẩm và nhu cầu của khách hàng;",
                                              "Thu thập và cập nhật thông tin về thị trường, sản phẩm và pháp lý",
                                              "Tìm kiếm khách hàng và chuẩn bị tư vấn cho khách hàng, lập hồ sơ thương vụ môi giới; thương lượng, đàm phán và thuyết phục khách hàng, soạn thảo hợp đồng, chăm sóc khách hàng;",
                                              "Thu thập thông tin thực hiện thủ tục thẩm định giá cho khách hàng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới bất động sản có được phép nhận đặt cọc để mua căn hộ từ khách hàng không?",
                              "options":  [
                                              "Được phép khi có văn bản ủy quyền của chủ đầu tư và/hoặc chủ bất động sản",
                                              "Không được phép thực hiện theo đúng nội dung ủy quyền",
                                              "Hoàn toàn không được phép",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều nào không phải là đặc điểm của phương pháp đàm phán nguyên tắc?",
                              "options":  [
                                              "Ôn hòa với người, cứng rắn với công việc",
                                              "Sự tín nhiệm không liên quan đến đàm phán",
                                              "Tìm ra phương án đối tác có thể chấp thuận",
                                              "Cả 2 bên cùng có lợi"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một đàm phán được coi là thành công phải đảm bảo nguyên tắc?",
                              "options":  [
                                              "Một trong hai bên đạt được mục đích",
                                              "Hòa bình, hữu nghị",
                                              "Đôi bên cùng có lợi",
                                              "Không xảy ra xung đột"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi kinh doanh dịch vụ tư vấn đầu tư kinh doanh Bất động sản, cần lưu ý vấn đề nào:",
                              "options":  [
                                              "Tỉ suất lợi nhuận trên vốn đầu tư",
                                              "Tính thanh khoản của vốn đầu tư",
                                              "Lợi ích trên chi phí",
                                              "Tất cả đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong giai đoạn chuẩn bị đàm phán xúc tiến ký kết hợp đồng, cần xác định nhu cầu, mong muốn của khách hàng và sơ bộ định dạng đối tác. Theo đó, có thể tạm chia khách hàng \"sẵn sàng đánh đổi chi phí để lấy chất lượng mà họ đã biết rõ, họ ngại rủi ro có thể xảy ra nếu với những đối tác mới\" vào loại:",
                              "options":  [
                                              "Khách hàng trọng giá cả",
                                              "Khách hàng trọng giá trị",
                                              "Khách hàng trung thành",
                                              "Khách hàng trọng tiện lợi"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi đàm phán về giá, chủ bán khư khư không giảm giá bán, dù chỉ 1 xu, môi giới nên áp dụng chiến lược đàm phán nào?",
                              "options":  [
                                              "Thua-thua",
                                              "Thắng-thua",
                                              "Thua-thắng",
                                              "Thắng-thắng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bước đầu tiên trong quy trình mua nhà đất mà nhân viên kinh doanh bất động sản cần xác định với khách hàng là gì?",
                              "options":  [
                                              "Hỏi về tài chính của họ",
                                              "Hỏi về sở thích của họ",
                                              "Hỏi về kinh nghiệm sở hữu bất động sản trước đây của họ",
                                              "Hỏi về gia đình họ"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Marketing bất động sản mang nội dung nào",
                              "options":  [
                                              "Phương thức tiếp thị, trưng bày bất động sản",
                                              "Các chiến lược quảng cáo bất động sản",
                                              "Xúc tiến bán hàng",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ sở hữu chung cư thường có quyền gì đối với đất đai dùng để tạo lập nên tòa nhà chung cư đó?",
                              "options":  [
                                              "Quyền sở hữu đất",
                                              "Quyền sử dụng riêng",
                                              "Quyền sử dụng chung",
                                              "Không có quyền gì"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi gọi khai thác khách hàng bán qua điện thoại, khi mới bắt đầu câu chuyện với khách hàng, người môi giới nên:",
                              "options":  [
                                              "Hỏi chi tiết về thông tin bất động sản",
                                              "Hỏi mục đích bán của khách hàng",
                                              "Giới thiệu mình bên công ty bất động sản",
                                              "Hỏi giá bán và tiến hành trả giá"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp chủ đầu tư đã thế chấp nhà ở hình thành trong tương lai tại ngân hàng, trước khi ký hợp đồng mua bán, thuê mua nhà ở đó với khách hàng, phải đáp ứng điều kiện nào sau đây",
                              "options":  [
                                              "Phải giải chấp nhà ở trước khi ký hợp đồng huy động vốn, trừ trường hợp bên mua và ngân hàng đồng ý",
                                              "Có văn bản thông báo nhà ở đủ điều kiện được bán của Sở Xây Dựng",
                                              "Miễn là khách hàng đồng ý mua, không cần sự đồng ý của ngân hàng",
                                              "Cả A và B đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các thông tin cần nắm khi học dự án mới trước khi triển khai bán cho chủ đầu tư là gì?",
                              "options":  [
                                              "Thông tin về chủ đầu tư.",
                                              "Thông tin về pháp lý dự án.",
                                              "Thông tin về chính sách bảo hành, nội thất và tiến độ thi công.",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bên đơn phương chấm dứt thực hiện hợp đồng thuê nhà, công trình xây dựng thì phải báo cho bên kia biết trước bao lâu nếu không có sự thỏa thuận?",
                              "options":  [
                                              "1 tháng",
                                              "2 tháng",
                                              "15 ngày",
                                              "90 ngày"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chức năng môi giới bất động sản bao gồm:",
                              "options":  [
                                              "Cung cấp thông tin và tư vấn cho khách hàng về diễn biến tổng thể của thị trường bất động sản",
                                              "Cung cấp thông tin các sản phẩm bđs giúp khách hàng thực hiện giao dịch theo yêu cầu của khách hàng và vì lợi ích của khách hàng",
                                              "Cung cấp các dịch vụ tư vấn pháp lý, tài chính, giá bđs",
                                              "Tất cả các mục trên"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một bất động sản có chi phí cao hơn thu nhập được mô tả là có",
                              "options":  [
                                              "Dòng tiền dương.",
                                              "Dòng tiền âm.",
                                              "Khấu hao âm.",
                                              "Khấu hao quá mức."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để tránh sự phản ứng, chống đối của khách hàng khi người môi giới tiếp xúc với khách hàng, với tư cách hành nghề môi giới chuyên nghiệp, môi giới viên cần tiếp cận khách hàng với mục tiêu:",
                              "options":  [
                                              "Vì tiền",
                                              "Vì thách thức",
                                              "Vì thích nghề môi giới bất động sản/vì phấn khích",
                                              "Giúp khách hàng đạt mục tiêu tài chính của mình, thông qua đó đạt được các mục tiêu cá nhân"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục nào sau đây không thuộc phạm vi của Thương lượng?",
                              "options":  [
                                              "Quá trình tìm kiếm và thỏa thuận về các điều khoản, điều kiện, hoặc giá cả của một giao dịch",
                                              "Tìm kiếm giải pháp chung và thỏa thuận mà cả hai bên đều hài lòng",
                                              "Tập trung vào tìm giải pháp chung và tạo điều kiện để đạt được sự hài lòng từ cả hai bên",
                                              "Có thể coi đối tác là đối thủ trong quá trình"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây không bị cấm trong hoạt động kinh doanh bất động sản?",
                              "options":  [
                                              "Huy động vốn của người mua bất động sản khi hội đủ điều kiện",
                                              "Không thực hiện đúng nghĩa vụ tài chính đối với Nhà nước",
                                              "Không đăng ký kinh doanh theo quy định pháp luật",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các chỉ tiêu nào cần đạt được trong quản lý kênh phân phối bán hàng?",
                              "options":  [
                                              "Thỏa mãn nhu cầu của khách hàng",
                                              "Doanh thu",
                                              "Lợi nhuận",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chiến lược “kéo” áp dụng trong kinh doanh bất động sản được hiểu như thế nào:",
                              "options":  [
                                              "Tạo ra sự đồng thuận về cảm nhận sản phẩm",
                                              "Tạo ra sự nhận biết về thương hiệu và sự hấp dẫn khách hàng bằng các sản phẩm khác biệt",
                                              "Truyền tải thông tin do chủ đầu tư thực hiện nhằm gây ảnh hưởng tới thái độ, hành vi và nhận thức của người mua",
                                              "Tìm cách đẩy sản phẩm đến các nhà phân phối và khách hàng bằng các chương trình khuyến mãi, tặng quà, chiết khấu hoa hồng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người môi giới cần nắm rõ quy hoạch đầu tư xây dựng của một vùng thị trường để có phương án môi giới cụ thể. Quy hoạch đầu tư xây dựng được thể hiện thông qua:",
                              "options":  [
                                              "Việc tổ chức không gian đô thị và điểm dân cư, hệ thống công trình hạ tầng kỹ thuật, hạ tầng xã hội",
                                              "Đồ án quy hoạch xây dựng (sơ đồ, bản vẽ, mô hình, thuyết minh)",
                                              "Các cơ sở để các hoạt động lập dự án đầu tư, xin giao đất, thuê đất... được thực hiện",
                                              "Tổ chức sắp xếp không gian lãnh thổ trên cơ sở khai thác và sử dụng tài nguyên thiên nhiên"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phân tích lợi nhuận trên tổng doanh thu là nhằm:",
                              "options":  [
                                              "Xem xét mức độ lợi nhuận so với khách hàng từng giai đoạn để từ đó đưa ra những biện pháp phù hợp",
                                              "Đo lường quy mô của các giao dịch cho thấy hiệu quả của việc tìm kiếm các giao dịch có giá trị lớn",
                                              "Đánh giá được năng suất lao động của các nhân viên giữa các thời kỳ khác nhau trong một năm hay cùng kỳ năm trước",
                                              "Tất cả sai"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi đàm phán về giá, khách mua và chủ bán nhất quyết không tăng hay giảm giá mua-bán, dù chênh lệch giá mua bán chỉ khoảng 20tr đồng. Vụ giao dịch này có nguy cơ thất bại. Là môi giới trong trường hợp này, bạn nên áp dụng chiến thuật đàm phán nào?",
                              "options":  [
                                              "Thua-thua. (Xem xét \"cắt máu\" giảm bớt tiền hoa hồng.)",
                                              "Thắng-thua",
                                              "Thua-thắng",
                                              "Thắng-thắng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phong cách đàm phán cạnh tranh được áp dụng trong trường hợp nào?",
                              "options":  [
                                              "Khi phát sinh tình huống đột xuất, không nằm trong dự kiến đàm phán của các bên.",
                                              "Khi các bên hướng đến mục tiêu chung, lợi ích chung.",
                                              "Khi chủ thể đàm phán không đạt được mục tiêu, lợi ích riêng",
                                              "Khi không có quyền hạn quyết định, thiếu thông tin về các nội dung đàm phán"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chứng chỉ môi giới bất động sản đã được cấp trước ngày 01/08/2024:",
                              "options":  [
                                              "Có giá trị pháp lý trong thời hạn 05 năm kể từ ngày 01/08/2024",
                                              "Có giá trị pháp lý trong thời hạn 05 năm kể từ ngày cấp",
                                              "Không có giá trị pháp lý do đã có luật mới, người môi giới phải học lại và thi sát hạch",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sàn giao dịch bất động sản phải có:",
                              "options":  [
                                              "Vốn pháp định",
                                              "Quy chế hoạt động của sàn giao dịch",
                                              "Cả A, B đều đúng",
                                              "Cả A, B đều sai"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá trị nhà được tính theo quy định của Bộ Xây Dựng dựa trên:",
                              "options":  [
                                              "Phân loại nhà",
                                              "Định mức xây dựng",
                                              "Giá trị thực tế còn lại của căn nhà",
                                              "Tất cả đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Truyền thông marketing là gì?",
                              "options":  [
                                              "Là một quá trình truyền tải thông tin do người mua thực hiền nhằm gây ảnh hưởng tới thái độ, hành vi và nhận thức của người bán",
                                              "Là một quá trình truyền tải thông tin do nhà sản xuất thực hiện nhằm gây ảnh hưởng tới thái độ, hành vi và nhận thức của người mua",
                                              "Là một quá trình truyền tải thông tin do người bán thực hiện nhằm gây ảnh hưởng tới thái độ, hành vi và nhận thức của người mua",
                                              "Câu B, C đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người quản lý, điều hành sàn giao dịch bất động sản phải có các điều kiện nào:",
                              "options":  [
                                              "Có giấy chứng nhận đã hoàn thành khóa đào tạo, bồi dưỡng kiến thức về quản lý, điều hành sàn giao dịch bất động sản",
                                              "Có chứng chỉ hành nghề môi giới bất động sản. Có năng lực hành vi dân sự đầy đủ, không đang trong tình trạng bị truy cứu trách nhiệm hình sự hoặc chấp hành án phạt tù. Không bị cấm hành nghề theo quyết định của cơ quan có thẩm quyền",
                                              "Chưa có văn bản luật hướng dẫn điều này",
                                              "Bao gồm cả A và B"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hạn chế của đàm phán kiểu cứng là:",
                              "options":  [
                                              "Lợi ích các bên giảm xuống, không đạt được những mục tiêu riêng của các bên.",
                                              "Hy sinh nhiều lợi ích, tốn kém chi phí và thời gian cho việc thực hiện cam kết sau đàm phán",
                                              "Gây tình trạng căng thẳng, đàm phán dễ tan vỡ hoặc khó thực hiện sau này.",
                                              "Mất lòng tin từ các đối tác dẫn đến mất quan hệ hợp tác quốc tế."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bên môi giới không được đồng thời là?",
                              "options":  [
                                              "Bên bán trong cùng giao dịch môi giới",
                                              "Bên mua trong cùng giao dịch môi giới",
                                              "Cả A và B đều được phép",
                                              "Cả A và B đều không được phép"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc đầu tiên cần làm trong tiếp nhận than phiền từ khách hàng là",
                              "options":  [
                                              "Đưa ra giải pháp xử lý vấn đề",
                                              "Khuyến khích khách hàng kể lại câu chuyện",
                                              "Xác nhận vấn đề/sự kiện",
                                              "Xác nhận lỗi của bên mua hay bên bán"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trở ngại tâm lý của khách hàng khi tiếp xúc với người môi giới bất động sản là",
                              "options":  [
                                              "Không an toàn khi tiếp xúc người lạ",
                                              "Sợ tốn kém thời gian",
                                              "Sợ bị quấy rầy liên tục",
                                              "Cả A và C đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp thu thập thông tin về cầu bất động sản chủ động không bao gồm hoạt động nào sau đây:",
                              "options":  [
                                              "Đón tại văn phòng môi giới bất động sản",
                                              "Tiếp cận tận nơi: đón hoặc gọi điện",
                                              "Tìm kiếm qua các phương tiện thông tin đại chúng",
                                              "Gửi thư trực tiếp tới khách hàng tiềm năng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Có thể sử dụng yếu tố nào để thuyết phục trong trường hợp khách hàng cho rằng BĐS là cao",
                              "options":  [
                                              "Yếu tố BĐS có giá trị gia tăng nhanh theo thời gian",
                                              "Yếu tố BĐS đảm bảo an toàn về mặt quy hoạch, pháp lý",
                                              "Yếu tố uy tín, chất lượng dịch vụ của công ty môi giới",
                                              "Cả 3 câu trả lời trên đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 3 (KTCM 101-150).docx",
        "topic":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 3 (KTCM 101-150)",
        "questions":  [
                          {
                              "question":  "Khi chất lượng sản phẩm như nhau thì phải lấy yếu tố nào để cạnh tranh trên thị trường?",
                              "options":  [
                                              "Thông tin",
                                              "Dịch vụ khách hàng",
                                              "Sản phẩm",
                                              "Cả A, B và C đều sai"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Người mua đặt cọc 100 triệu đồng để mua căn nhà với giá 1.6 tỷ đồng. Người bán đổi ý không bán. Giả sử trong hợp đồng đặt cọc không có điều khoản phạt vi phạm, thì người bán phải trả tiền đặt cọc và đền bù tiền thiệt hại cho người mua theo luật, tổng cộng số tiền trả lại cộng với phạt vi phạm:",
                              "options":  [
                                              "200 triệu đồng",
                                              "100 triệu đồng",
                                              "400 triệu đồng",
                                              "Không phạt vi phạm"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để tăng khả năng thành công khi môi giới, người môi giới cần hiểu khách hàng của mình là ai, theo đó, người môi giới cần:",
                              "options":  [
                                              "Không để khách hàng nói quá nhiều",
                                              "Nói thật nhiều về dự án cho khách hàng",
                                              "Lắng nghe khách hàng nói",
                                              "Cả A, B và C đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Trong hợp đồng mua bán nhà ở có quy định về đặc điểm chính của nhà ở mua bán như sau: Diện tích sử dụng căn hộ F là: 55,04 m2 (được tính theo kích thước thông thủy theo quy định của pháp luật về nhà ở). Diện tích này là tạm tính và có thể tăng lên hoặc giảm đi theo thực tế đo đạc tại thời điểm bàn giao căn hộ. Bên Mua có trách nhiệm thanh toán số tiền mua căn hộ cho bên Bán theo diện tích thực tế khi bàn giao căn hộ; Trong trường hợp diện tích thực tế bằng hoặc chênh lệch thấp hơn 3% so với diện tích ghi trong hợp đồng này thì hai bên không phải điều chỉnh lại gía bán căn hộ. Nếu diện tích thực tế chênh lệch vượt quá 3% so với diện tích ghi trong hợp đồng này thì giá bán của căn hộ sẽ được điều chỉnh lại theo diện tích đo đạc thực tế khi bàn giao căn hộ. Khi bàn giao cho khách hàng căn hộ F có diện tích là 57,7 m2, khách hàng được quyền:",
                              "options":  [
                                              "Nhận căn hộ và thanh toán theo diện tích thực tế",
                                              "Từ chối nhận căn hộ và không bị coi là vi phạm các điều kiện bàn giao căn hộ",
                                              "Nhận căn hộ và thanh toán theo giá bán căn hộ như hợp đồng đã ký",
                                              "Cả A, B và C đều đúng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chiến lược “Đẩy” áp dụng trong kinh doanh BĐS được hiểu như thế nào?",
                              "options":  [
                                              "Tìm cách thu phục khách hàng mua sản phẩm",
                                              "Tìm cách đưa sản phẩm đến các nhà phân phối và khách hàng bằng các chương trình khuyến mãi, quà tặng, chiết khấu hoa hồng.",
                                              "Tìm ra sự nhận biết về thương hiệu và sự hấp dẫn khách hàng bằng sản phẩm khác",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điểm nào đặc biệt quan trọng đối với việc hoạch định chiến lược Marketing trong kinh doanh BĐS",
                              "options":  [
                                              "Chính sách nhà nước",
                                              "Nhu cầu khách hàng",
                                              "Lợi thế cạnh tranh",
                                              "Nguồn vốn"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc của người môi giới muốn phát triển dài hạn là",
                              "options":  [
                                              "Hướng đến khách hàng",
                                              "Làm đến đâu hay đến đó",
                                              "Bằng mọi giá hướng đến thu nhập của bản thân",
                                              "Cả A, B và C đều sai"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tiếp nhận sản phẩm từ Ban Giám đốc Công ty, việc đầu tiên người môi giới cần thực hiện",
                              "options":  [
                                              "Phân tích và đánh giá sản phẩm",
                                              "Lên kế hoạch tìm kiếm nguồn khách",
                                              "Lên kế hoạch marketing sản phẩm",
                                              "Phân tích khách hàng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khách hàng mua sản phẩm cho người môi giới là do",
                              "options":  [
                                              "Nhân viên tư vấn rõ ràng, phục vụ nhiệt tình, chu đáo",
                                              "Sản phẩm phù hợp nhu cầu",
                                              "Được người khác giới thiệu cho người môi giới",
                                              "Cả A và B đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Căn nhà giao dịch với giá 3,5 tỷ đồng. Ngân hàng định giá 2,7 tỷ đồng và ngân hàng cho vay 70% giá trị của BĐS, vậy số tiền ngân hàng cho vay là:",
                              "options":  [
                                              "2,45 tỷ đồng",
                                              "1,89 tỷ đồng",
                                              "1,75 tỷ đồng",
                                              "1,32 tỷ đồng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tình huống: Trong hợp đồng mua bán nhà ở có quy định về đặc điểm chính của nhà ở mua bán như sau: Diện tích sử dụng căn hộ F là: 55,04 m2 (được tính theo kích thước thông thủy theo quy định của pháp luật về nhà ở). Diện tích này là tạm tính và có thể tăng lên hoặc giảm đi theo thực tế đo đạc tại thời điểm bàn giao căn hộ. Bên Mua có trách nhiệm thanh toán số tiền mua căn hộ cho bên Bán theo diện tích thực tế khi bàn giao căn hộ; Trong trường hợp diện tích thực tế bằng hoặc chênh lệch thấp hơn 3% so với diện tích ghi trong hợp đồng này thì hai bên không phải điều chỉnh lại gía bán căn hộ. Nếu diện tích thực tế chênh lệch vượt quá 3% so với diện tích ghi trong hợp đồng này thì giá bán của căn hộ sẽ được điều chỉnh lại theo diện tích đo đạc thực tế khi bàn giao căn hộ. Khi bàn giao cho khách hàng căn hộ F có diện tích là 51,24 m2, khách hàng được quyền:",
                              "options":  [
                                              "Nhận căn hộ và thanh toán theo diện tích thực tế",
                                              "Nhận căn hộ và thanh toán theo hợp đồng đã ký",
                                              "Từ chối nhận căn hộ và yêu cầu chủ đầu tư đổi căn hộ khác có diện tích thương lượng",
                                              "Yêu cầu chủ đầu tư bồi thường giá trị hợp đồng đã thanh toán"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phong cách đàm phán cùng có lợi, hai bên cùng nhất trí với nhau về mục tiêu chung, không giấu diếm thông tin về nhau, không làm phương hại lợi ích của hai bên... đó là cách đàm phán",
                              "options":  [
                                              "Một bên chiến thắng một bên thất bại (Win/Lose)",
                                              "Thỏa hiệp (Compromising)",
                                              "Hai bên cùng thắng (Win/Win)",
                                              "Thua - Thua (Lose - Lose)"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuật ngữ dùng để miêu tả số phần trăm của giá trị đã được định giá của một tài sản mà tổ chức tài chính sẽ cho vay gọi là",
                              "options":  [
                                              "Tỷ lệ tài sản bị giữ lại (của người bán bất động sản)",
                                              "Tỷ lệ khoản vay trên giá trị tài sản",
                                              "Chứng nhận giá trị tài sản hợp lý",
                                              "Khoản đầu tư vốn"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong quá trình tư vấn khía cạnh vay - thuê tài chính cho khách hàng mua/thuê bđs, nhà môi giới thường giúp xác định các phương án sản xuất kinh doanh hay dự án đầu tư của khách hàng có khả thi không. Nội dung nào sau đây không thuộc phạm vi công việc này?",
                              "options":  [
                                              "Đánh giá khả năng trả nợ vay của khách hàng",
                                              "Đề xuất phương án cho vay",
                                              "Phân tích, đánh giá tình hình tài chính của khách hàng",
                                              "Xác minh tính chất hợp pháp và đánh giá tài sản thế chấp, cầm cố"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "mua.",
                              "options":  [
                                              "Giúp người đại diện biết mình nên giới thiệu căn nhà nào cho khách",
                                              "Xác định động cơ thúc đẩy của người mua",
                                              "Thực hiện việc kết thúc giao dịch",
                                              "Tất cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Kinh doanh Bất động sản năm 2023, nội dung dịch vụ môi giới bất động sản bao gồm những lĩnh vực sau đây, ngoại trừ:",
                              "options":  [
                                              "Tìm kiếm đối tác đáp ứng các điều kiện của khách hàng để tham gia đàm phán, ký hợp đồng",
                                              "Đại diện theo ủy quyền để thực hiện các công việc liên quan đến các thủ tục mua bán, chuyển nhượng, cho thuê, cho thuê lại, cho thuê mua BĐS.",
                                              "Cung cấp thông tin, hỗ trợ cho các bên trong việc đàm phán, ký hợp đồng mua bán, chuyển nhượng, cho thuê, cho thuê lại, cho thuê mua BĐS.",
                                              "Môi giới thành lập tổ chức pháp nhân có liên quan"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong tư vấn bán hàng, yếu tố quyết định thành công của người môi giới chuyên nghiệp là:",
                              "options":  [
                                              "Thái độ đối với khách hàng và đối với công việc",
                                              "Năng lực truyền đạt ý tưởng và kiến thức một cách hiệu quả",
                                              "Liên tục phát triển Tri thức nhà nghề, kỹ năng cá nhân và nghiệp vụ",
                                              "Các ý A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một hợp đồng môi giới nói chung có thể bị hủy giữa hai bên nếu:",
                              "options":  [
                                              "Sự gian lận bị phát hiện",
                                              "Một bên thay đổi quyết định",
                                              "Người bán đi vắng vào ngày kết thúc hợp đồng",
                                              "Có yêu cầu môi giới khác quan trọng hơn"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người đại diện cho người mua địa ốc được thuê để làm gì?",
                              "options":  [
                                              "Thể hiện ý kiến và mối quan tâm của người mua thông qua các giao dịch",
                                              "Trưng bày và giới thiệu tài sản",
                                              "Đàm phán trên cương vị của người mua",
                                              "Tất cả lựa chọn đều đúng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để tránh sự phản ứng, chống đối của khách hàng khi người môi giới tiếp xúc với khách hàng, với tư cách hành nghề môi giới chuyên nghiệp, môi giới viên cần tiếp cận khách hàng với mục tiêu",
                              "options":  [
                                              "Vì tiền",
                                              "Vì thách thức",
                                              "Vì thích nghề môi giới bất động sản/vì phấn khích",
                                              "Giúp khách hàng đạt mục tiêu tài chính của mình, thông qua đó đạt được các mục tiêu cá nhân"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một nhà môi giới đang giúp khách hàng của mình mua một căn biệt thự sang trọng. Chủ nhà muốn bán với giá cao trong khi ngôi biệt thự này có một khuyết điểm về hướng nhận ánh sáng theo quan điểm phong thủy. Nhà môi giới đề nghị khách hàng tập trung đàm phán ở điểm này nhằm bớt giá mua, yêu cầu chủ nhà xây thêm hàng rào chắn, bổ sung vào việc tặng không các nội thất trong nhà. Đổi lại, phương thức thanh toán sẽ linh hoạt và nhanh hơn. Theo anh chị, phương thức đàm phán mà họ sử dụng nghiêng về kiểu đàm phán nào?",
                              "options":  [
                                              "Kiểu dàn xếp (Accommodating)",
                                              "Kiểu thỏa hiệp (Compromising)",
                                              "Kiểu điều khiển (Controlling)",
                                              "Kiểu hợp tác (Collaborating)"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp đánh giá bất động sản dựa trên dữ liệu thị trường có thể yêu cầu một vài điều chỉnh dựa trên việc so sánh những khoản sau, ngoại trừ:",
                              "options":  [
                                              "Ngày, thời điểm mua bán",
                                              "Diện tích kích thước nền nhà và vị trí khu vực",
                                              "Phương thức thanh toán tài chính của người mua",
                                              "Chi phí thay thế sửa chữa kiến trúc"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để môi giới thành công, môi giới viên cần khắc phục 3 bất đồng, đó là các yếu tố sau, ngoại trừ:",
                              "options":  [
                                              "Bất đồng về sự tin tưởng (trust) - thiếu am hiểu về những động cơ thúc đẩy người mua/bán",
                                              "Bất đồng về sự đối kháng (resistance) - không tỏ ý muốn nhượng bộ người khác",
                                              "Bất đồng trong giao tiếp (communication) - hiểu sai những thông điệp ẩn ý bên trong lời nói",
                                              "Bất đồng trong mục tiêu của công việc (target) - hiểu sai mục đích mua bán bđs của nhau"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong tình hình thị trường bất động sản bị đóng băng, khi một người dự định bán bất động sản của mình, anh ta nên quảng cáo ở đâu thì có lợi và tốn ít chi phí nhất?",
                              "options":  [
                                              "Sử dụng tổng hợp các phương tiện",
                                              "Thông qua sàn giao dịch bất động sản hoặc các công ty môi giới",
                                              "Thông qua phương tiện truyền thông đại chúng",
                                              "Tự treo bảng trước nhà hoặc những nơi dễ nhìn thấy"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một khoản cho vay mua nhà trong vòng 7 năm được xem là có thời hạn vay",
                              "options":  [
                                              "Vay trung hạn",
                                              "Vay ngắn hạn",
                                              "Vay dài hạn",
                                              "Không kỳ hạn"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một nhà môi giới địa ốc hai đầu (hoặc hai mang) làm việc:",
                              "options":  [
                                              "Như là một đại lý hoặc cộng tác viên cho công ty môi giới địa ốc",
                                              "Cơ bản cho người mua",
                                              "Làm việc cho cả người bán và người mua",
                                              "Làm việc cơ bản cho người bán"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục nào sau đây không phải là một chiến lược đàm phán hay?",
                              "options":  [
                                              "Bày tỏ thiện ý sớm để chứng tỏ rằng bạn đang thương thảo với mục đích tích cực",
                                              "Xác định tâm ý và những điều kiện mà khách hàng có thể chấp nhận được",
                                              "Đưa ra những điều kiện ưu đãi như thanh toán nhanh hoặc mong muốn đạt được sự giao dịch sớm",
                                              "Áp dụng kỹ năng đàm phán win-win trong đó mỗi bên đầu cảm thấy thỏa mãn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều gì là quan trọng nhất của một quảng cáo bất động sản?",
                              "options":  [
                                              "Tiêu đề",
                                              "Sắp xếp, thiết kế",
                                              "Hình ảnh",
                                              "Giá cả"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi nhận dịch vụ do người môi giới bất động sản cung cấp, người đầu tư mong chờ người môi giới giúp ra các quyết định:",
                              "options":  [
                                              "Cho biết bất động sản nào nên mua/bán",
                                              "Cho biết giá cả hợp lý nên mua/bán",
                                              "Cho biết thông tin mới nhất về những gì đang diễn ra trên thị trường",
                                              "Cho biết bất động sản nào nên mua/bán với giá cả và các dịch vụ kèm theo theo như thế nào"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ông Tân chưa có nhà ở, đang chuẩn bị mua một căn nhà với một khoản vay trả góp từ ngân hàng, và đang yêu cầu thẩm định căn nhà định mua đó. Việc thẩm định này có ý nghĩa gì thiết thực nhất cho ông Tân?",
                              "options":  [
                                              "Xác định liệu chủ nhà đã bán đúng giá thị trường hay không",
                                              "Xác định tình trạng thực tế của căn nhà có đáp ứng yêu cầu của ông Tân hay không",
                                              "Xác định liệu giá trị của căn nhà có thể làm tài sản thế chấp có thỏa mãn điều kiện cho vay của ngân hàng hay không",
                                              "Xác định xem ông Tân đã thực hiện một cuộc đầu tư tốt và sinh lợi"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi môi giới, nhà môi giới sẽ gặp nhiều điều kiện thuận lợi hơn khi nắm bắt được định hướng lâu dài về truyền thống và giá trị tư tưởng trong xã hội của khách hàng. Đặc điểm nào sau đây không thuộc phạm trù xã hội theo định hướng lâu dài?",
                              "options":  [
                                              "Nêu cao đạo đức trong công việc",
                                              "Quan tâm đến những lợi ích lâu dài",
                                              "Chú trọng áp dụng những tiến bộ kỹ thuật của khoa học công nghệ",
                                              "Đặt ra những chính sách dài hạn"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Câu phát biểu nào sau đây sai liên quan đến tố chất của nhà môi giới?",
                              "options":  [
                                              "Ngôn ngữ rõ ràng, kỹ năng giao tiếp tốt",
                                              "Biết đặt câu hỏi tập trung, giải quyết thẳng vấn đề.",
                                              "Lắng nghe tích cực",
                                              "Nhà môi giới là người hiểu biết, thông minh nhưng ở mức độ cao hơn do tích lũy nhiều kiến thức (vì nghiên cứu, kinh nghiệm và học tập nhiều) và biết sử dụng chúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một hợp đồng ký gửi nên xác định nghĩa vụ của tổ chức môi giới (văn phòng môi giới/sàn) và ______________ của khách hàng.",
                              "options":  [
                                              "Quan điểm đàm phán về giá và phương thức mua bán",
                                              "Ngày kết thúc hợp đồng mong đợi",
                                              "Đại diện quyền bán bất động sản cho người bán",
                                              "Hướng dẫn của khách hàng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghề môi giới bất động sản nếu phân tích theo quan điểm kinh tế thị trường là:",
                              "options":  [
                                              "Công việc chuyên môn của các cá nhân",
                                              "Làm trung gian giúp cho việc mua, bán bất động sản được thực hiện",
                                              "Hình thành theo sự phân công lao động xã hội",
                                              "Kết nối nhu cầu của bên mua với nhu cầu của bên bán bđs"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bán hàng tư vấn trong môi giới là phương pháp bán hàng được triển khai theo chiều rộng một cách logic trên các cơ sở sau, ngoại trừ:",
                              "options":  [
                                              "Phương pháp bán hàng truyền thống",
                                              "Người môi giới cố gắng tìm hiểu những hàng hóa, sản phẩm khách hàng cần",
                                              "Người môi giới cố gắng đáp ứng nhu cầu của khách hàng một cách tốt nhất bằng các sản phẩm hay dịch vụ của mình",
                                              "Người môi giới phải cố gắng đáp ứng nhu cầu của khách hàng bằng các sản phẩm thích hợp"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khoản hoa hồng nào sau đây là phạm luật?",
                              "options":  [
                                              "Tiền thù lao/giờ công",
                                              "Phần trăm (%) phải trả trên giá mua",
                                              "Khoản phí mà khách hàng phải trả khi ký hợp đồng nhờ môi giới bán bđs",
                                              "Không có khoản nào kể trên được xem là \"hoa hồng\" trong môi giới bđs"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hoa hồng môi giới được hưởng bao nhiêu phần trăm trong hợp đồng",
                              "options":  [
                                              "2%",
                                              "5%",
                                              "10%",
                                              "Thỏa thuận (ghi trong hợp đồng môi giới)"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người sở hữu BĐS là căn hộ du lịch trong toà nhà hỗn hợp được phép?",
                              "options":  [
                                              "Đăng ký hộ khẩu thường trú",
                                              "Đăng ký tạm trú dài hạn",
                                              "Đăng ký lưu trú",
                                              "Cả A, B và C"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "BĐS nào dưới đây không phải là nhà ở?",
                              "options":  [
                                              "Khách sạn",
                                              "Biệt thự du lịch",
                                              "Căn hộ du lịch",
                                              "Cả A, B và C đều không phải là bất động sản nhà ở"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với khách hàng, một dịch vụ môi giới bất động sản có chất lượng là:",
                              "options":  [
                                              "Dịch vụ có chi phí thấp",
                                              "Dịch vụ khác biệt so với đối thủ cạnh tranh",
                                              "Dịch vụ khách hàng quan tâm và khác biệt với đối thủ cạnh tranh",
                                              "Dịch vụ đáp ứng và vượt qua sự kỳ vọng của khách hàng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong chu kỳ sống của một sản phẩm, giai đoạn bán nhanh trên thị trường và mức lợi nhuận tăng nhanh được gọi là:",
                              "options":  [
                                              "Giai đoạn Triển khai",
                                              "Giai đoạn Tăng trưởng",
                                              "Giai đoạn Suy thoái",
                                              "Giai đoạn Bão hòa"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là tiến trình cơ bản của cuộc đàm phán:",
                              "options":  [
                                              "Giai đoạn chuẩn bị, Giai đoạn đàm phán, Giai đoạn kết thúc, Giai đoạn xúc tiến",
                                              "Giai đoạn chuẩn bị, Giai đoạn đàm phán, Giai đoạn xúc tiến, Giai đoạn kết thúc",
                                              "Giai đoạn chuẩn bị, Giai đoạn xúc tiến, Giai đoạn đàm phán, Giai đoạn kết thúc",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là nguyên tắc có thể dẫn đến đàm phán trong kinh doanh thành công:",
                              "options":  [
                                              "Nhà đàm phán ngồi vào bàn đàm phán chỉ với 1 phương án duy nhất mà không có phương án thay thế.",
                                              "Nhà đàm phán có những định kiến với đối tác.",
                                              "Nhà đàm phán phải xác định rõ mục tiêu đàm phán và luôn bám sát nó trong suốt quá trình đàm phán.",
                                              "Nhà đàm phán luôn nói nhiều thay vì hỏi nhiều."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây gây ảnh hưởng rất ít đến quá trình giao tiếp trực tiếp với khách hàng của nhà môi giới?",
                              "options":  [
                                              "Cách lựa chọn từ ngữ",
                                              "Điệu bộ, tư thế",
                                              "Giọng nói",
                                              "Cú pháp"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thư chào bán bất động sản nên:",
                              "options":  [
                                              "Thu hút được sự chú ý của khách hàng.",
                                              "Giới thiệu rõ về sản phẩm.",
                                              "Thúc đẩy khách hàng hành động.",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phát biểu nào sau đây là đúng?",
                              "options":  [
                                              "Phương thức tính lãi kép là vốn gốc nhập lãi vào cuối mỗi kỳ trở thành vốn gốc mới để sinh lợi cho kỳ kế tiếp.",
                                              "Phương thức tính lãi kép là chỉ có vốn gốc sinh lãi trong mọi kỳ hạn",
                                              "Phương thức tính lãi kép là vốn gốc nhập lãi vào cuối kỳ đầu tiên, các kỳ tiếp theo chỉ có vốn gốc sinh lãi trong mọi kỳ hạn.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thứ tự các bước trong thực hiện thương vụ môi giới là:",
                              "options":  [
                                              "Ký hợp đồng đặt cọc – Ký kết hợp đồng khởi điểm – Giao nhận bất động sản – Ký hợp đồng công chứng.",
                                              "Ký hợp đồng công chứng – Ký hợp đồng đặt cọc – Ký hợp đồng khởi điểm – Giao nhận bất động sản",
                                              "Ký hợp đồng khởi điểm – Ký hợp đồng công chứng – Ký hợp đồng đặt cọc – Giao nhận bất động sản.",
                                              "Ký hợp đồng khởi điểm – Ký hợp đồng đặt cọc – Ký hợp đồng công chứng – Giao nhận bất động sản."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trình tự các bước xử lý phản đối của khách hàng là:",
                              "options":  [
                                              "Thăm dò để hiểu – thừa nhận phản đối – trả lời phản đối – thăm dò sự chấp thuận",
                                              "Thừa nhận phản đối – thăm dò để hiểu - trả lời phản đối – thăm dò sự chấp thuận",
                                              "Thừa nhận phản đối – trả lời phản đối – thăm dò để hiểu - thăm dò sự chấp thuận",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào ảnh hưởng đến marketing mà công ty có thể kiểm soát được?",
                              "options":  [
                                              "Chính phủ",
                                              "Đối thủ cạnh tranh",
                                              "Nhân viên bán hàng",
                                              "Các lực lượng xã hội"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nội dung nào sau đây không thuộc nội dung của chiến lược xúc tiến bán hàng?",
                              "options":  [
                                              "Quảng cáo",
                                              "Xác lập kênh phân phối.",
                                              "Khuyến mãi.",
                                              "Chào hàng cá nhân."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 4 (KTCM 151-200).docx",
        "topic":  "CĐ14 QUY TRÌNH \u0026 KỸ NĂNG MÔI GIỚI BDS 4 (KTCM 151-200)",
        "questions":  [
                          {
                              "question":  "Trong chu kỳ sống của một sản phẩm, giai đoạn bán nhanh trên thị trường và mức lợi nhuận tăng nhanh được gọi là:",
                              "options":  [
                                              "Giai đoạn Triển khai",
                                              "Giai đoạn Tăng trưởng",
                                              "Giai đoạn Suy thoái",
                                              "Giai đoạn Bão hòa"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là đặc điểm của giao tiếp kiểu Thắng – Thắng?",
                              "options":  [
                                              "Mọi người luôn mong muốn tìm lợi ích chung, làm cho các bên đều thỏa mãn nhu cầu của mình",
                                              "Mục đích của giao tiếp là làm sao cố gắng đè bẹp đối phương bằng mọi cách.",
                                              "Cả hai bên giao tiếp đều kiên quyết giữ vững lập trường, mối quan hệ trở nên căng thẳng, không đi đến thỏa thuận.",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là đặc điểm của kiểu giao tiếp “Thua – Thua”?",
                              "options":  [
                                              "Mọi người luôn mong muốn tìm lợi ích chung, làm cho các bên đều thỏa mãn nhu cầu của mình",
                                              "Mục đích của giao tiếp là làm sao cố gắng đè bẹp đối phương bằng mọi cách.",
                                              "Cả hai bên giao tiếp đều kiên quyết giữ vững lập trường, mối quan hệ trở nên căng thẳng, không đi đến thỏa thuận.",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi tiếp nhận sản phẩm từ một dự án khu căn hộ cao cấp, việc đầu tiên nhà môi giới nên làm là:",
                              "options":  [
                                              "Tìm hiểu về sản phẩm",
                                              "Lên kế hoạch tìm kiếm khách hàng tiềm năng",
                                              "Lên kế hoạch chạy quảng cáo",
                                              "Không phải các hoạt động trên"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nội dung nào sau đây không được quy định trong hợp đồng mua bán, cho thuê, cho thuê mua nhà, công trình xây dựng:",
                              "options":  [
                                              "Diện tích bất động sản",
                                              "Giá bán của bất động sản",
                                              "Hoa hồng môi giới bất động sản",
                                              "Thông tin bên mua/bên thuê và bên bán/bên cho thuê"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Những điều cần tránh làm khi giới thiệu sản phẩm bất động sản là:",
                              "options":  [
                                              "Luôn luôn dùng từ ngữ chuyên môn",
                                              "Giới thiệu bằng trực quan sống động",
                                              "Gợi ý những viễn cảnh tốt đẹp nếu khách hàng mua sản phẩm",
                                              "Chỉ ra những lợi ích tăng thêm cho khách hàng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều cần tránh trong đàm phán kinh doanh là:",
                              "options":  [
                                              "Ngồi vào bàn đàm phán với định kiến",
                                              "Xác định rõ mục tiêu đàm phám và bám sát nó trong suốt quá trình đàm phán",
                                              "Chú ý lắng nghe đối tác.",
                                              "Biết sử dụng từ ngữ một cách khôn khéo, linh hoạt."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong khi chào hàng hay giới thiệu bất động sản, vấn đề nào là quan trọng nhất cần được trình bày?",
                              "options":  [
                                              "Giá cả sản phẩm bán ra.",
                                              "Đặc điểm nổi bật trong thiết kế.",
                                              "Sản phẩm sẽ đem lại lợi ích gì cho người mua.",
                                              "Không phải các vấn đề trên."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong bốn tiêu chí sau, tiêu chí nào ảnh hưởng ít nhất đến quyết định mua bất động sản:",
                              "options":  [
                                              "Tiến trình đàm phán.",
                                              "Mối quan hệ trong gia đình.",
                                              "Giá cả của bất động sản.",
                                              "Vị trí của bất động sản."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Email chào bán bất động sản nên:",
                              "options":  [
                                              "Thu hút được sự chú ý của khách hàng.",
                                              "Giới thiệu rõ về sản phẩm.",
                                              "Thúc đẩy khách hàng hành động.",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là sai lầm khi viết email giới thiệu bất động sản cho khách hàng?",
                              "options":  [
                                              "Lựa chọn từ ngữ, cách xưng hô không phù hợp.",
                                              "Giới thiệu rõ về sản phẩm.",
                                              "Nhấn mạnh đặc điểm nổi trội của sản phẩm.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vì sao tuân thủ đạo đức nghề nghiệp là nguyên tắc quan trọng của nghề môi giới bất động sản?",
                              "options":  [
                                              "Vì pháp luật xét xử rất nặng hành vi lừa dối",
                                              "Vì khách hàng tẩy chay khiến công việc khó khan",
                                              "Vì bất động sản là tài sản lớn đối với cả bên mua và bán.",
                                              "Tất cả đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một nhà bất động sản giúp các khách hàng chọn lựa những phương án khác nhau (bao gồm mua, thuê, hoặc đầu tư bất động sản). Công việc nhà bất động sản đang làm là gì?",
                              "options":  [
                                              "Định giá bất động sản.",
                                              "Tư vấn bất động sản.",
                                              "Đào tạo bất động sản.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà môi giới bất động sản nên:",
                              "options":  [
                                              "Giới thiệu bất động sản bằng trực quan sinh động.",
                                              "Thúc đẩy khách mua bằng cách cho rằng giá trị của bất động sản là hợp lý.",
                                              "Tâng bốc quá sự thật về bất động sản giao dịch.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng nào sau đây không thuộc hợp đồng kinh doanh dịch vụ bất động sản?",
                              "options":  [
                                              "Hợp đồng môi giới bất động sản.",
                                              "Hợp đồng tư vấn bất động sản.",
                                              "Hợp đồng thuê bất động sản.",
                                              "Hợp đồng quản lý bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các vấn đề về bất động sản mà nhà môi giới cần quan tâm:",
                              "options":  [
                                              "Thông tin về pháp lý chủ quyền, quy hoạch kiến trúc.",
                                              "Hạ tầng kỹ thuật, hạ tầng xã hội.",
                                              "Tiềm năng phát triển, khả năng sinh lợi.",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tìm hiểu đối tượng bên cung bất động sản nhằm:",
                              "options":  [
                                              "Xác định nguyện vọng.",
                                              "Nắm bắt các thông tin về bất động sản.",
                                              "Xác lập các tiêu chí thỏa thuận.",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tìm hiểu đối tượng bên cầu bất động sản nhằm:",
                              "options":  [
                                              "Xác định khả năng tài chính, đánh giá mức độ quan tâm, kiểm tra nhằm hỗ trợ tính pháp lý.",
                                              "Xác định khả năng tài chính, nắm bắt các thông tin về bất động sản; đánh giá mức độ quan tâm.",
                                              "Xác định khả năng tài chính, nắm bắt các thông tin về bất động sản; kiểm tra nhằm hỗ trợ tính pháp lý.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong quá trình từ ý định mua hàng đến quyết định mua hàng của khách hàng, nhà môi giới nên thực hiện các hoạt động nào sau đây?",
                              "options":  [
                                              "Tiến hành các hoạt động xúc tiến bán (quà tặng, phiếu mua hàng giảm giá, quảng cáo…) để tác động lên quyết định mua.",
                                              "Không thực hiện hoạt động nào hết vì cho rằng khách hàng đã có ý định mua hàng thì sẽ không thay đổi.",
                                              "Tiến hành xác định lại nhu cầu của khách hàng.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là nhược điểm của hoạt động khuyến mãi?",
                              "options":  [
                                              "Chỉ có tác dụng trong thời gian ngắn.",
                                              "Cách tốt để kích thích nhu cầu.",
                                              "Các hình thức đa dạng.",
                                              "Cả A, B, C đều sai"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi tư vấn bất động sản, nhà môi giới phải cho khách hàng thấy:",
                              "options":  [
                                              "Uy tín của chủ đầu tư",
                                              "Khả năng sinh lời của bất động sản",
                                              "Tiến độ thi công",
                                              "Cả A, B, C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhận được những ý kiến phản hồi tiêu cực khi bạn đang trong buổi giao tiếp với khách, bạn nên:",
                              "options":  [
                                              "Phủ nhận vấn đề, xin lỗi hoặc biện hộ cho sự thiếu hiểu biết của mình",
                                              "Nổi giận và cố gắng bảo vệ quan điểm của mình.",
                                              "Lắng nghe, ghi nhận và tìm cách cải thiện vấn đề",
                                              "Bỏ về khi buổi giao tiếp chưa kết thúc."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để trình bày hiệu quả, tránh gây hiểu lầm cho đối phương trong quá trình đàm phán, nhà môi giới nên:",
                              "options":  [
                                              "Lập luận đúng mực, lịch sự, tế nhị.",
                                              "Trình bày với thái độ nhã nhặn, tự tin; tốc độ nói vừa phải; ngắn nhịp câu đúng lúc.",
                                              "Sử dụng câu có cấu trúc ngắn gọn, các khái niệm và thuật ngữ đơn giản, rõ ràng.",
                                              "Khi trình bày hướng về phía người ra quyết định"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để tạo một thông điệp hiệu quả, nhà môi giới nên:",
                              "options":  [
                                              "Sử dụng biệt ngữ và từ địa phương.",
                                              "Lựa chọn từ phù hợp, dễ hiểu",
                                              "Dùng thuật ngữ chuyên môn.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi nào giao tiếp bằng văn bản phù hợp hơn giao tiếp trực tiếp?",
                              "options":  [
                                              "Khi bạn muốn trình bày một ý tưởng phức tạp, đòi hỏi thời gian nghiên cứu",
                                              "Khi bạn muốn nhanh chóng nhận được ý kiến trả lời về một vấn đề.",
                                              "Khi bạn muốn đưa ra nhiều câu hỏi.",
                                              "Cả A, B, C đều sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhiệm vụ nào không phải nhiệm vụ chính của người môi giới bán hàng trực tiếp?",
                              "options":  [
                                              "Tìm kiếm khách hàng mới",
                                              "Truyền đạt thông tin về sản phẩm",
                                              "Thiết kế sản phẩm phù hợp với yêu cầu của khách hàng",
                                              "Cung cấp dịch vụ trước và sau khi bán hàng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là phát biểu đúng nhất?",
                              "options":  [
                                              "Định vị dịch vụ là khắc họa vào tâm trí khách hàng những hình ảnh, những khác biệt so với dịch vụ của đối thủ cạnh tranh.",
                                              "Định vị dịch vụ là xác định dịch vụ theo đoạn thị trường cụ thể mà doanh nghiệp phải thỏa mãn cho khách hàng mục tiêu của mình.",
                                              "Định vị dịch vụ là việc tạo ra một dịch vụ khác biệt trên thị trường.",
                                              "Định vị dịch vụ là việc xác định một dịch vụ nhằm thỏa mãn tối đa nhu cầu của khách hàng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Để truyền tải một thông điệp hiệu quả khi giao tiếp trực tiếp, đâu là yếu tố chiếm vai trò quan trọng nhất:",
                              "options":  [
                                              "Giọng nói.",
                                              "Hình ảnh và cử chỉ.",
                                              "Nội dung thông điệp.",
                                              "Không phải các yếu tố trên."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong Quy trình môi giới bất động sản, yếu tố nào đặc biệt quan trọng cho sự thành công chốt giao dịch của một môi giới viên?",
                              "options":  [
                                              "Khai thác khách hàng tiềm năng, tiếp nhận yêu cầu của khách hàng",
                                              "Tư vấn, tiếp thị, thương lượng",
                                              "Thực hiện giao dịch",
                                              "Kết thúc giao dịch, duy trì và chăm sóc khách hàng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi đàm phán về giá, chủ bán bất động sản khư khư không giảm giá bán, dù chỉ 1 xu, môi giới nên áp dụng chiến lược đàm phán nào?",
                              "options":  [
                                              "Thua-thua",
                                              "Thắng-thua",
                                              "Thua-thắng",
                                              "Thắng-thắng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuế suất nào được áp dụng để tính thuế thu nhập cá nhân khi cha vợ chuyển nhượng bất động sản cho con rể (trong trường hợp giá hợp đồng cao hơn giá Nhà nước quy định)?",
                              "options":  [
                                              "2% Giá trị hợp đồng",
                                              "5% Giá trị hợp đồng",
                                              "0.5% giá giao dịch",
                                              "Miễn thuế"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vai trò của người môi giới BĐS",
                              "options":  [
                                              "Cung cấp thông tin một cách công khai, trung thực cho các chủ thể tham gia giao dịch, làm cầu nối giữa người mua, người bán \u0026 hưởng phí môi giới",
                                              "Bán sản phẩm theo yêu cầu của chủ đầu tư",
                                              "Bán sản phẩm theo yêu cầu của khách hàng",
                                              "Có thể \"kê giá\" khi giới thiệu bán sản phẩm"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Là nhà môi giới bất động sản, công việc nào sau đây được thực hiện thường xuyên nhất?",
                              "options":  [
                                              "Xác định lượng cung bất động sản nói chung trên thị trường bất động sản.",
                                              "Xác định chi phí, lợi nhuận, thủ tục pháp lý, hỗ trợ khách hàng thực hiện các giao dịch mua bán bất động sản",
                                              "Xác định chu kỳ phát triển của bất động sản",
                                              "Không phải các công việc trên"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cho các nội dung sau: “Vị trí”, “Giá bán”, “Diện tích”, “Phong thuỷ”, “Chủ đầu tư”, “Mặt bằng”, “Ngân hàng”, “Thời gian bàn giao”, “Luật kinh doanh BĐS”. Nội dung nào cần cung cấp khi marketing BĐS?",
                              "options":  [
                                              "Vị trí - Giá bán - Diện tích",
                                              "Phong thuỷ - Chủ đầu tư - Mặt bằng",
                                              "Ngân hàng - Thời gian bàn giao - Luật kinh doanh BĐS",
                                              "Tất cả nội dung trên"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xây dựng và phát triển thương hiệu đảm bảo hiệu quả đối với một công ty kinh doanh BĐS có quy mô vừa và nhỏ, kinh phí hạn hẹp:",
                              "options":  [
                                              "Đầu tư vào các sản phẩm khác biệt và chăm sóc khách hàng",
                                              "Đầu tư vào chất lượng sản phẩm",
                                              "Đầu tư vào giá, khuyến mãi, cạnh tranh giảm giá",
                                              "Tất cả các ý trên"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các công ty BĐS thực hiện chiến lược tạo ra lợi thế cạnh tranh bằng sản phẩm vượt trội, khác biệt như thế nào:",
                              "options":  [
                                              "Tiếp cận thị trường theo chiến lược hớt ván dầu",
                                              "Sản phẩm chất lượng phù hợp, giá cả phải chăng",
                                              "Tạo ra sự khách biệt về đẳng cấp, theo đuổi sự tuyệt hảo về chất lượng sản phẩm",
                                              "Tìm ra “khe hở” thị trường, đầu tư chuyên biệt hoá tạo ra khoảng cách so với các đối thủ cạnh tranh"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các công ty BĐS thực hiện chiến lược tạo ra lợi thế cạnh tranh với chi phí thấp:",
                              "options":  [
                                              "Giảm giá hàng bán để tăng lợi thế cạnh tranh",
                                              "Tìm mua các nguồn lực đầu vào, quản trị hoạt động với chi phí thấp",
                                              "Đem lại cho khách hàng chi phí thấp trong mua và tiêu dùng BĐS",
                                              "Lựa chọn B \u0026 C đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một công ty BĐS có chương trình khuyến mại tặng TV khi mua nhà, nhưng khách hàng dự định mua nhà đề nghị được nhận tiền mặt thay cho nhận TV, nếu là người môi giới trong trường hợp này, bạn sẽ:",
                              "options":  [
                                              "Hứa với khách hàng và đề xuất ý kiến lên công ty",
                                              "Khẳng định công ty không có chính sách này, từ chối lời đề nghị",
                                              "Giải thích theo chính sách khuyến mại của công ty",
                                              "Tất cả những ý trên"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Căn hộ thuộc dự án A chưa có khách hàng đăng ký mua, khách hàng yêu cầu không thực hiện các bước đặt chỗ, đặt cọc, ký kết với các biên bản đặt chỗ, đặt cọc và thực hiện ký kết hợp đồng mua bán với chủ đầu tư:",
                              "options":  [
                                              "Môi giới khẳng định với khách hàng là buộc phải làm theo các bước này",
                                              "Môi giới hứa sẽ giải quyết theo yêu cầu của khách",
                                              "Người môi giới hướng dẫn khách hàng thực hiện việc ký kết hợp đồng mua bán",
                                              "Tất cả những ý trên"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Căn hộ A612 thuộc dự án X có rất nhiều khách hàng đăng ký mua, khách hàng B yêu cầu thực hiện bước đặt chỗ mua căn hộ với chủ đầu tư nhưng đến thời điểm thực hiện đặt cọc, khách hàng B vẫn chưa thực hiện việc đặt cọc, trong khi khách hàng C có nhu cầu đặt chỗ và đặt cọc căn hộ đó:",
                              "options":  [
                                              "Người môi giới liên lạc với khách hàng B xác nhận lần cuối việc huỷ thoả thuận đặt chỗ, sau đó tiến hành việc đặt cọc căn hộ cho khách hàng C",
                                              "Người môi giới tiến hành việc đặt cọc căn hộ cho khách hàng C",
                                              "Người môi giới vẫn giữ chỗ cho khách hàng B, đề xuất căn hộ khác cho khách hàng C mua",
                                              "Phản ánh tình huống khó giải quyết lên công ty để tìm kiếm giải pháp hỗ trợ"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khách hàng C đã tiến hành việc đặt chỗ và đến thời điểm đặt cọc, khách hàng C đã đưa tiền đặt cọc bằng tiền mặt cho người môi giới, hành vi nào sau đây là đúng:",
                              "options":  [
                                              "Người môi giới thực hiện nộp tiền theo thông tin của khách hàng C cho căn hộ có mã số theo yêu cầu (VD A216)",
                                              "Người môi giới dẫn khách C đi thực hiện thủ tục nộp tiền",
                                              "Người môi giới từ chối nhận tiền và hướng dẫn khách hàng C đi nộp tiền cho công ty",
                                              "Người môi giới giữ luôn tiền, \"đi nhậu\""
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chức năng quảng cáo trong kinh doanh BĐS gồm:",
                              "options":  [
                                              "Chức năng gợi nhớ, chức năng thông tin, thuyết phục",
                                              "Chức năng dẫn dắt",
                                              "Chức năng thúc đẩy nhu cầu",
                                              "Tất cả đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các chỉ tiêu cơ bản nào cần đạt được trong quản lý kênh phân phối bán hàng BĐS:",
                              "options":  [
                                              "Thoả mãn khách hàng – doanh thu – lợi nhuận",
                                              "Doanh số - Lợi nhuận – KPI",
                                              "Phân bổ sản phẩm - Doanh số đột biến - Lợi nhuận cao",
                                              "KPI - Doanh thu - Chi phí bán hàng - Lợi nhuận"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong quá trình marketing sản phẩm BĐS, công ty kinh doanh BĐS có một số chương trình khuyến mãi. Mục tiêu chủ yếu của khuyến mãi là gì?",
                              "options":  [
                                              "Tăng danh tiếng của công ty và đẩy mạnh tiêu thụ hàng hoá",
                                              "Bán và thanh lý hàng tồn kho",
                                              "Tạo sự khác biệt so với đối thủ, chiếm lĩnh thị phần của đối thủ cạnh tranh",
                                              "Tạo sự nhận biết thương hiệu và cảm tình từ khách hàng mục tiêu"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vì sao doanh nghiệp kinh doanh BĐS phải chọn thị trường mục tiêu?",
                              "options":  [
                                              "Vì phải theo phân khúc thị trường có lợi hơn",
                                              "Vì để tạo lợi thế cạnh tranh",
                                              "Để phục vụ khách hàng tốt nhất",
                                              "Là yếu tố khách hàng cần và mua, tạo hấp dẫn và lôi cuốn khách hàng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao trong các hoạt động quảng cáo truyền thông và bán hàng, các doanh nghiệp kinh doanh BĐS cần tập trung vào giá trị cốt lõi, giá trị khác biệt của sản phẩm trong việc cung ứng cho khách hàng:",
                              "options":  [
                                              "Vì phải theo phân khúc thị trường có lợi hơn",
                                              "Vì để tạo lợi thế cạnh tranh",
                                              "Để phục vụ khách hàng tốt nhất",
                                              "Là yếu tố khách hàng cần và mua, tạo hấp dẫn và lôi cuốn khách hàng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tranh thủ sự tín nhiệm của bạn bè thân, đề nghị họ giới thiệu hoặc cung cấp danh sách khách hàng và được lặp lại nhiều lần là đặc điểm của cách tiếp cận khách hàng theo kiểu:",
                              "options":  [
                                              "Tiêu thụ lặp lại",
                                              "Giới thiệu dây chuyền",
                                              "Tận dụng người tốt trong xã hội",
                                              "Tiêu thụ trực tiếp"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá trị BĐS buộc phải bán (bán trong điều kiện không bình thường) không phản ánh giá trị thị trường vì:",
                              "options":  [
                                              "Thời gian tiếp thị BĐS không phù hợp cho việc mua bán BĐS đó",
                                              "Người bán phải bán BĐS một cách gượng ép",
                                              "Người bán người mua tự quyết định giá bán",
                                              "Giá tính theo giá thanh lý hoặc đền bù giải tỏa"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi kết thúc thương vụ, người môi giới BĐS cần phải chú ý gì?",
                              "options":  [
                                              "Theo dõi, hỗ trợ các bên trong việc hoàn chỉnh hồ sơ; xem tính hợp pháp của người nhận cọc và người đặt cọc; các khoản phí phát sinh nếu có",
                                              "Tham gia ký hợp đồng thoả thuận, thời gian giao nhận tiền và ký hợp đồng mua bán, giao nhận BĐS, các điều khoản về vi phạm hợp đồng, các loại giấy tờ còn đang thiếu, tham gia vào quá trình thanh toán, nhận tiền hoa hồng",
                                              "Lấy tiền hoa hồng ngay, tránh bị \"luồn cò”",
                                              "Hoàn thành nghĩa vụ, tìm kiếm khách hàng mới"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quy trình môi giới sản phẩm BĐS bao gồm các bước sau, ngoại trừ:",
                              "options":  [
                                              "Đánh giá tiềm năng của sản phẩm và nhu cầu của khách hàng;",
                                              "Thu thập và cập nhật thông tin về thị trường, sản phẩm và pháp lý",
                                              "Tìm kiếm khách hàng và chuẩn bị tư vấn cho khách hàng, lập hồ sơ thương vụ môi giới; thương lượng, đàm phán và thuyết phục khách hàng, soạn thảo hợp đồng, chăm sóc khách hàng;",
                                              "Thu thập thông tin thực hiện thủ tục thẩm định giá cho khách hàng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ2 Luật nhà ở.docx",
        "topic":  "CĐ2 Luật nhà ở",
        "questions":  [
                          {
                              "question":  "Luật Nhà ở 2023 (Luật số 27/2023/QH15) định nghĩa \"Nhà ở\" như thế nào?",
                              "options":  [
                                              "Mọi công trình xây dựng có mái che và tường bao.",
                                              "Công trình xây dựng với mục đích để ở và phục vụ nhu cầu sinh hoạt của gia đình, cá nhân.",
                                              "Chỉ bao gồm các căn hộ trong dự án nhà ở thương mại.",
                                              "Công trình được sử dụng cho cả mục đích ở và sản xuất công nghiệp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khái niệm \"Nhà ở có mục đích sử dụng hỗn hợp\" theo Điều 3 Luật Nhà ở 2023 là gì?",
                              "options":  [
                                              "Nhà ở được nhiều hộ gia đình cùng chung sống.",
                                              "Nhà ở được sử dụng vào mục đích để ở và mục đích khác không bị pháp luật cấm.",
                                              "Nhà ở chỉ dùng làm văn phòng kết hợp kho bãi.",
                                              "Nhà ở có thể chuyển đổi mục đích sử dụng theo mùa."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Nhà ở thương mại\" theo Điều 3 Luật Nhà ở 2023 được hiểu là:",
                              "options":  [
                                              "Nhà ở do Nhà nước xây dựng và phân phối theo chính sách.",
                                              "Nhà ở được đầu tư xây dựng để bán, cho thuê mua, cho thuê theo cơ chế thị trường",
                                              "Nhà ở thuộc sở hữu của các tập đoàn thương mại lớn.",
                                              "Nhà ở được xây trong các khu thương mại, dịch vụ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Nhà ở xã hội (NOXH)\" theo Điều 3 Luật Nhà ở 2023 có đặc điểm gì?",
                              "options":  [
                                              "Là nhà ở cho thuê ngắn hạn dành cho khách du lịch",
                                              "Là nhà ở cao cấp có tiện ích xã hội đi kèm.",
                                              "Là nhà ở có sự hỗ trợ của Nhà nước dành cho các đối tượng hưởng chính sách hỗ trợ nhà ở.",
                                              "Là nhà ở bắt buộc phải có trong mọi dự án bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Định nghĩa \"Nhà chung cư\" theo Điều 3 Luật Nhà ở 2023 bao gồm đặc điểm nào?",
                              "options":  [
                                              "Phải có ít nhất 5 tầng và 100 căn hộ.",
                                              "Có từ 02 tầng trở lên, nhiều căn hộ, có lối đi, cầu thang chung, phần sở hữu riêng, phần sở hữu chung.",
                                              "Chỉ bao gồm các tòa nhà văn phòng cho thuê.",
                                              "Luôn thuộc sở hữu toàn dân do Nhà nước quản lý."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà ở nhiều tầng nhiều căn hộ của cá nhân (\"chung cư mini\") được quy định tại Điều 57 Luật Nhà ở 2023 là loại nhà ở:",
                              "options":  [
                                              "Do doanh nghiệp nhà nước xây dựng.",
                                              "Do cá nhân xây dựng trên đất ở hợp pháp của mình, đáp ứng điều kiện về số tầng và số căn hộ/mục đích sử dụng.",
                                              "Chỉ được phép xây dựng ở nông thôn.",
                                              "Phải có quy mô tối thiểu 50 căn hộ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Nhà ở hình thành trong tương lai\" theo Điều 3 Luật Nhà ở 2023 là nhà ở:",
                              "options":  [
                                              "Đã được cấp Giấy chứng nhận nhưng chưa bàn giao.",
                                              "Đang trong quá trình đầu tư xây dựng trong dự án thực hiện bởi chủ đầu tư và chưa được nghiệm thu bàn giao đưa vào sử dụng.",
                                              "Là các mô hình nhà ở thông minh trong dự án.",
                                              "Đã hoàn thiện phần thô và đang trong giai đoạn hoàn thiện nội thất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền sở hữu hợp pháp đối với nhà ở tại Việt Nam được bảo hộ như thế nào theo Luật Nhà ở 2023?",
                              "options":  [
                                              "Chỉ được bảo hộ nếu đăng ký kinh doanh.",
                                              "Được Nhà nước công nhận và bảo hộ; nhà ở thuộc sở hữu hợp pháp không bị quốc hữu hóa.",
                                              "Chỉ được bảo hộ đối với công dân Việt Nam.",
                                              "Được bảo hộ có thời hạn 50 năm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc công nhận quyền sở hữu nhà ở được Nhà nước thực hiện thông qua hình thức nào theo Luật Nhà ở 2023?",
                              "options":  [
                                              "Thông qua hợp đồng mua bán có công chứng.",
                                              "Thông qua việc cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất (trừ nhà ở thuộc tài sản công).",
                                              "Thông qua biên bản bàn giao nhà giữa các bên.",
                                              "Thông qua việc đăng ký tạm trú, thường trú."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Điều 12 Luật Nhà ở 2023, thời điểm xác lập quyền sở hữu nhà ở đối với trường hợp mua bán nhà ở (không phải từ chủ đầu tư dự án) là khi nào, nếu không có thỏa thuận khác?",
                              "options":  [
                                              "Khi hai bên ký hợp đồng đặt cọc.",
                                              "Khi bên mua thanh toán đủ tiền và nhận bàn giao nhà ở.",
                                              "Khi hoàn tất thủ tục sang tên Giấy chứng nhận.",
                                              "Sau 30 ngày kể từ ngày ký hợp đồng công chứng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Điều 8 Luật Nhà ở 2023, đối tượng nào sau đây được phép sở hữu nhà ở tại Việt Nam?",
                              "options":  [
                                              "Chỉ công dân Việt Nam có hộ khẩu thường trú.",
                                              "Tổ chức, cá nhân trong nước; Người Việt Nam định cư ở nước ngoài; Tổ chức, cá nhân nước ngoài (nếu đáp ứng điều kiện).",
                                              "Chỉ các doanh nghiệp đăng ký Kinh doanh bất động sản.",
                                              "Người nước ngoài nhập cảnh bằng visa du lịch."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người Việt Nam định cư ở nước ngoài có quốc tịch Việt Nam có quyền sở hữu nhà ở tại Việt Nam như thế nào theo Luật Nhà ở 2023?",
                              "options":  [
                                              "Chỉ được sở hữu 1 căn nhà duy nhất.",
                                              "Có đầy đủ quyền sở hữu nhà ở như cá nhân trong nước.",
                                              "Chỉ được sở hữu nhà ở thông qua thừa kế.",
                                              "Phải có dự án đầu tư tại Việt Nam."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Nhà ở 2023 và Luật Đất đai 2024, người gốc Việt Nam định cư ở nước ngoài (không có quốc tịch Việt Nam) có quyền sở hữu nhà ở:",
                              "options":  [
                                              "Hoàn toàn không được phép.",
                                              "Chỉ được thuê dài hạn.",
                                              "Gắn liền với quyền sử dụng đất ở theo quy định của pháp luật đất đai.",
                                              "Chỉ được sở hữu nhà ở xã hội."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức, cá nhân nước ngoài được sở hữu nhà ở tại Việt Nam thông qua hình thức nào theo Điều 19 Luật Nhà ở 2023?",
                              "options":  [
                                              "Mua nhà ở trực tiếp từ cá nhân trong nước.",
                                              "Tự xây dựng nhà ở trên đất được giao.",
                                              "Mua, thuê mua nhà ở thương mại trong dự án; nhận tặng cho, nhận thừa kế nhà ở thương mại trong dự án.",
                                              "Góp vốn bằng quyền sử dụng đất để xây nhà ở."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều 20 Luật Nhà ở 2023 quy định tổ chức, cá nhân nước ngoài không được sở hữu nhà ở tại đâu?",
                              "options":  [
                                              "Tại các thành phố trực thuộc trung ương.",
                                              "Tại các khu vực cần bảo đảm quốc phòng, an ninh.",
                                              "Tại các khu vực nông thôn, miền núi.",
                                              "Tại các dự án nhà ở xã hội."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Số lượng căn hộ tối đa trong một tòa nhà chung cư mà các tổ chức, cá nhân nước ngoài được phép sở hữu là bao nhiêu phần trăm (%) tổng số căn hộ theo Điều 20 Luật Nhà ở 2023?",
                              "options":  [
                                              "10%",
                                              "20%",
                                              "30%",
                                              "49%"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Điều 21 Luật Nhà ở 2023, thời hạn sở hữu nhà ở tối đa của cá nhân nước ngoài tại Việt Nam là bao nhiêu năm (kể từ ngày cấp Giấy chứng nhận)?",
                              "options":  [
                                              "30 năm, không gia hạn.",
                                              "50 năm, có thể gia hạn thêm một lần không quá 50 năm.",
                                              "70 năm.",
                                              "Bằng thời hạn của dự án đầu tư."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào cá nhân nước ngoài được sở hữu nhà ở ổn định, lâu dài như công dân Việt Nam theo Điều 21 Luật Nhà ở 2023?",
                              "options":  [
                                              "Có đóng góp đặc biệt cho Việt Nam.",
                                              "Được cơ quan nhà nước Việt Nam bảo lãnh.",
                                              "Kết hôn với công dân Việt Nam đang sinh sống tại Việt Nam.",
                                              "Là nhà đầu tư chiến lược theo Luật Đầu tư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện đối với nhà ở có sẵn đưa vào kinh doanh theo Luật kinh doanh bất động sản 2023 là gì?",
                              "options":  [
                                              "Phải được xây dựng bằng vật liệu cao cấp.",
                                              "Phải có Giấy chứng nhận; không tranh chấp; không bị kê biên; tuân thủ giấy phép xây dựng và đảm bảo chất lượng.",
                                              "Phải nằm trong khu đô thị loại I.",
                                              "Phải có giá trị tối thiểu 1 tỷ đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, nhà ở hình thành trong tương lai muốn được bán, cho thuê mua cần đáp ứng điều kiện nào về tiến độ xây dựng?",
                              "options":  [
                                              "Đã hoàn thành phần mái.",
                                              "Đã hoàn thành việc xây dựng phần móng.",
                                              "Đã xây xong toàn bộ phần thô.",
                                              "Đã hoàn thiện mặt ngoài tòa nhà."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghĩa vụ bảo lãnh của chủ đầu tư khi bán, cho thuê mua nhà ở hình thành trong tương lai theo Luật kinh doanh bất động sản 2023 là gì?",
                              "options":  [
                                              "Phải có bảo lãnh của Bộ Tài chính.",
                                              "Phải có bảo lãnh của ngân hàng thương mại đủ năng lực về nghĩa vụ tài chính của mình",
                                              "Phải mua bảo hiểm cho toàn bộ dự án.",
                                              "Phải ký quỹ tại Ngân hàng Nhà nước."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc thanh toán lần đầu trong hợp đồng mua bán nhà ở hình thành trong tương lai được giới hạn ở mức nào theo Điều 25 Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Không quá 15% giá trị hợp đồng.",
                                              "Không quá 30% giá trị hợp đồng (đã bao gồm tiền đặt cọc).",
                                              "Không quá 50% giá trị hợp đồng.",
                                              "Không quá 70% giá trị hợp đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư được phép nhận tiền đặt cọc cho việc mua bán nhà ở hình thành trong tương lai với mức tối đa bao nhiêu % giá bán khi nhà ở đã đủ điều kiện kinh doanh theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "1%",
                                              "5%",
                                              "10%",
                                              "Không giới hạn nếu khách hàng đồng ý."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Điều 89 Luật Nhà ở 2023, bên mua/thuê mua nhà ở xã hội có sẵn không được bán lại nhà ở trong thời hạn tối thiểu là bao nhiêu năm?",
                              "options":  [
                                              "1 năm kể từ ngày nhận nhà.",
                                              "3 năm kể từ ngày ký hợp đồng.",
                                              "5 năm kể từ ngày thanh toán đủ tiền.",
                                              "10 năm kể từ ngày cấp Giấy chứng nhận."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong thời hạn 5 năm hạn chế chuyển nhượng nhà ở xã hội, nếu có nhu cầu bán, bên mua/thuê mua chỉ được bán lại cho ai và với giá nào theo Điều 89 Luật Nhà ở 2023?",
                              "options":  [
                                              "Bán cho bất kỳ ai theo giá thị trường.",
                                              "Chỉ bán lại cho chủ đầu tư với giá bằng 70% giá gốc.",
                                              "Bán lại cho chủ đầu tư hoặc đối tượng thuộc diện được mua NOXH, với giá tối đa bằng giá bán nhà ở xã hội đó trong hợp đồng đã ký.",
                                              "Chỉ được bán cho cơ quan nhà nước có thẩm quyền."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các hình thức phát triển nhà ở xã hội được quy định trong Luật Nhà ở 2023 bao gồm:",
                              "options":  [
                                              "Chỉ do Nhà nước đầu tư xây dựng.",
                                              "Nhà nước đầu tư; Doanh nghiệp, HTX đầu tư; Tổng Liên đoàn Lao động VN đầu tư nhà lưu trú công nhân; Tổ chức kinh tế có vốn đầu tư nước ngoài tham gia đầu tư.",
                                              "Chỉ do các tổ chức phi lợi nhuận thực hiện.",
                                              "Chỉ do cá nhân tự xây dựng và đăng ký."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một trong những ưu đãi dành cho chủ đầu tư dự án nhà ở xã hội theo Luật Nhà ở 2023 là:",
                              "options":  [
                                              "Được phép bán 30% sản phẩm theo giá thương mại.",
                                              "Được miễn tiền sử dụng đất, tiền thuê đất đối với toàn bộ diện tích đất của dự án.",
                                              "Được miễn toàn bộ thuế trong suốt quá trình hoạt động.",
                                              "Không phải xin phép xây dựng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Điều 76 Luật Nhà ở 2023, đối tượng nào được bổ sung vào danh sách hưởng chính sách hỗ trợ về nhà ở xã hội so với luật cũ?",
                              "options":  [
                                              "Người cao tuổi neo đơn.",
                                              "Doanh nghiệp, hợp tác xã, liên hiệp hợp tác xã trong khu công nghiệp (mua, thuê nhà lưu trú công nhân).",
                                              "Sinh viên tốt nghiệp loại giỏi.",
                                              "Hộ gia đình có 3 thế hệ cùng chung sống."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện về nhà ở để được mua, thuê, thuê mua nhà ở xã hội theo Điều 77 Luật Nhà ở 2023 là gì?",
                              "options":  [
                                              "Phải đang ở nhà cấp 4 tạm bợ.",
                                              "Chưa có nhà ở thuộc sở hữu của mình tại tỉnh/thành phố nơi có dự án nhà ở xã hội.",
                                              "Có nhà ở nhưng diện tích dưới 20 m²/người.",
                                              "Đã bán nhà duy nhất để lấy tiền mua nhà ở xã hội."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Nhà ở 2023, nhà chung cư nào bắt buộc phải có đơn vị quản lý vận hành?",
                              "options":  [
                                              "Nhà chung cư từ 10 tầng trở lên.",
                                              "Nhà chung cư có thang máy.",
                                              "Tất cả các nhà chung cư, kể cả nhà chỉ có 2 tầng.",
                                              "Chỉ nhà chung cư thuộc sở hữu nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ai có trách nhiệm quản lý, sử dụng kinh phí bảo trì phần sở hữu chung sau khi Ban quản trị nhà chung cư được thành lập theo Luật Nhà ở 2023?",
                              "options":  [
                                              "Chủ đầu tư tiếp tục quản lý.",
                                              "Ban quản trị quản lý thông qua tài khoản riêng và sử dụng theo kế hoạch được Hội nghị nhà chung cư thông qua.",
                                              "Đơn vị quản lý vận hành được toàn quyền sử dụng.",
                                              "UBND cấp xã nơi có nhà chung cư."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây nhà chung cư thuộc diện phải phá dỡ để cải tạo, xây dựng lại theo Chương V Luật Nhà ở 2023?",
                              "options":  [
                                              "Nhà chung cư xuống cấp nhẹ, cần sơn sửa lại.",
                                              "Nhà chung cư hết niên hạn sử dụng theo thiết kế và có kết luận kiểm định không còn an toàn.",
                                              "Nhà chung cư có tỷ lệ trống trên 50%.",
                                              "Nhà chung cư được xây dựng trước năm 2000."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Nhà ở 2023 quy định về tiêu chuẩn diện tích căn hộ nhà ở thương mại như thế nào?",
                              "options":  [
                                              "Quy định diện tích tối thiểu 45m², tối đa 150m².",
                                              "Đối với căn hộ chung cư thì phải thiết kế, xây dựng khép kín, có diện tích sàn căn hộ không thấp hơn diện tích theo quy chuẩn kỹ thuật quốc gia về nhà chung cư.",
                                              "Chỉ quy định diện tích tối thiểu 25m².",
                                              "Giao UBND cấp tỉnh tự quy định."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Nhà ở 2023, việc phân biệt giữa \"nhà ở có sẵn\" và \"nhà ở hình thành trong tương lai\" có ý nghĩa pháp lý quan trọng như thế nào đối với hoạt động Kinh doanh bất động sản?",
                              "options":  [
                                              "Chỉ ảnh hưởng đến việc cấp Giấy chứng nhận.",
                                              "Chi phối việc áp dụng các điều kiện bán, cho thuê mua khác nhau theo Luật kinh doanh bất động sản 2023 (ví dụ: điều kiện móng, bảo lãnh ngân hàng, lịch thanh toán).",
                                              "Chỉ liên quan đến thủ tục nghiệm thu công trình.",
                                              "Chỉ quyết định loại thuế áp dụng khi giao dịch."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ngoài việc được phép nhập cảnh vào Việt Nam, cá nhân nước ngoài muốn mua nhà ở thương mại trong dự án cần đáp ứng thêm điều kiện nào theo quy định tại Nghị định 95/2024/NĐ-CP?",
                              "options":  [
                                              "Phải có tài khoản ngân hàng tại Việt Nam.",
                                              "Phải cam kết không thuộc diện hưởng ưu đãi, miễn trừ ngoại giao, lãnh sự.",
                                              "Phải chứng minh có thu nhập ổn định tại Việt Nam.",
                                              "Phải có người Việt Nam bảo lãnh."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giới hạn sở hữu nhà ở riêng lẻ của tổ chức, cá nhân nước ngoài trong một dự án đầu tư xây dựng nhà ở được xác định như thế nào theo Nghị định 95/2024/NĐ-CP?",
                              "options":  [
                                              "Không quá 50 căn trên toàn quốc.",
                                              "Tối đa 10% tổng số nhà ở riêng lẻ của dự án.",
                                              "Tùy thuộc quy mô dự án và quy định cụ thể (ví dụ: không quá 250 căn trên một đơn vị hành chính cấp phường).",
                                              "Không bị giới hạn số lượng, chỉ giới hạn về thời hạn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xác định một dự án nhà ở thương mại có nằm trong khu vực hạn chế sở hữu đối với người nước ngoài vì lý do quốc phòng, an ninh thường phụ thuộc vào yếu tố nào ngoài quy định chung tại Nghị định 95/2024/NĐ-CP?",
                              "options":  [
                                              "Ý kiến của đa số cư dân trong dự án.",
                                              "Quyết định của chủ đầu tư dự án.",
                                              "Các bản đồ quy hoạch chi tiết và văn bản xác định cụ thể của chính quyền cấp tỉnh.",
                                              "Giá bán của các căn hộ trong dự án."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong trường hợp trưng mua, trưng dụng nhà ở vì lý do quốc phòng, an ninh, lợi ích quốc gia, Nhà nước có nghĩa vụ gì đối với chủ sở hữu theo Luật Nhà ở 2023?",
                              "options":  [
                                              "Chỉ thông báo trước 30 ngày.",
                                              "Bồi thường theo giá thị trường tại thời điểm trưng mua/trưng dụng.",
                                              "Phải tuân thủ quy định về bồi thường, hỗ trợ, tái định cư.",
                                              "Không có nghĩa vụ bồi thường nếu vì lý do quốc phòng, an ninh."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, ngoài điều kiện về đăng ký kinh doanh, doanh nghiệp kinh doanh BĐS phải đáp ứng điều kiện nào về năng lực tài chính?",
                              "options":  [
                                              "Có lợi nhuận sau thuế dương trong 3 năm liên tiếp.",
                                              "Có vốn chủ sở hữu tối thiểu theo quy định (ví dụ: không thấp hơn 20% tổng vốn đầu tư đối với dự án quy mô dưới 20ha) và đảm bảo tỷ lệ dư nợ tín dụng/trái phiếu.",
                                              "Có tổng tài sản trên 1000 tỷ đồng.",
                                              "Được xếp hạng tín nhiệm AAA."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yêu cầu về bảo lãnh ngân hàng khi bán, cho thuê mua nhà ở hình thành trong tương lai theo Luật kinh doanh bất động sản 2023 có thể ảnh hưởng tiêu cực đến chủ đầu tư như thế nào?",
                              "options":  [
                                              "Tăng uy tín của chủ đầu tư trên thị trường.",
                                              "Tạo thêm gánh nặng chi phí (phí bảo lãnh) và thủ tục hành chính, có thể ảnh hưởng lợi nhuận hoặc giá bán.",
                                              "Giúp chủ đầu tư huy động vốn dễ dàng hơn.",
                                              "Giảm thiểu rủi ro pháp lý cho chủ đầu tư."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghĩa vụ công khai thông tin của chủ đầu tư, doanh nghiệp kinh doanh BĐS theo Điều 6 Luật kinh doanh bất động sản 2023 bao gồm những kênh nào?",
                              "options":  [
                                              "Chỉ trên báo giấy địa phương.",
                                              "Chỉ tại trụ sở dự án.",
                                              "Trên hệ thống thông tin về nhà ở và thị trường BĐS, trang thông tin điện tử của doanh nghiệp và tại trụ sở dự án.",
                                              "Chỉ thông qua các sàn giao dịch bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng mua bán, thuê mua nhà ở hình thành trong tương lai có bắt buộc phải tuân thủ hợp đồng mẫu không?",
                              "options":  [
                                              "Không bắt buộc, các bên tự thỏa thuận.",
                                              "Chỉ bắt buộc đối với dự án Nhà ở xã hội.",
                                              "Có, phải tuân thủ hợp đồng mẫu do Chính phủ quy định (ví dụ: Phụ lục I Nghị định 96/2024/NĐ-CP).",
                                              "Chỉ bắt buộc nếu giá trị hợp đồng trên 5 tỷ đồng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xác định tình trạng \"chưa có nhà ở thuộc sở hữu của mình\" để xét duyệt mua nhà ở xã hội (NOXH) theo Nghị định 100/2024/NĐ-CP dựa trên căn cứ nào?",
                              "options":  [
                                              "Lời cam đoan của người nộp đơn.",
                                              "Xác nhận của tổ trưởng dân phố.",
                                              "Việc người đứng đơn và vợ/chồng (nếu có) không có tên trên Giấy chứng nhận nhà ở, đất ở nào tại tỉnh/thành phố đó.",
                                              "Kết quả kiểm tra trên hệ thống đăng ký kinh doanh."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đơn vị quản lý vận hành (ĐVQLVH) nhà chung cư phải đáp ứng điều kiện năng lực nào theo quy định?",
                              "options":  [
                                              "Chỉ cần có đăng ký kinh doanh dịch vụ quản lý nhà.",
                                              "Phải có chức năng và đủ điều kiện năng lực (bộ máy chuyên môn, nghiệp vụ, được cơ quan có thẩm quyền xác nhận).",
                                              "Phải là doanh nghiệp có vốn nhà nước.",
                                              "Phải có kinh nghiệm quản lý ít nhất 5 tòa nhà."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá dịch vụ quản lý vận hành nhà chung cư sau khi có Ban quản trị được quyết định như thế nào?",
                              "options":  [
                                              "Do chủ đầu tư quyết định cố định.",
                                              "Do UBND cấp tỉnh ấn định hàng năm",
                                              "Do Hội nghị nhà chung cư quyết định trên cơ sở thỏa thuận với Đơn vị quản lý vận hành.",
                                              "Do Đơn vị quản lý vận hành tự đưa ra và thu của cư dân."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Điều 57 Luật Nhà ở 2023, cá nhân xây dựng \"chung cư mini\" để bán, cho thuê mua phải đáp ứng điều kiện gì?",
                              "options":  [
                                              "Chỉ cần có Giấy chứng nhận quyền sử dụng đất ở.",
                                              "Phải đáp ứng các điều kiện của một chủ đầu tư dự án đầu tư xây dựng nhà ở và tuân thủ quy định pháp luật liên quan.",
                                              "Chỉ cần tuân thủ quy định về PCCC.",
                                              "Phải thành lập doanh nghiệp hoặc hợp tác xã."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân xây dựng \"chung cư mini\" có từ 02 tầng và quy mô dưới 20 căn hộ để cho thuê phải đáp ứng yêu cầu tối thiểu nào về PCCC và hạ tầng theo Điều 57 Luật Nhà ở 2023?",
                              "options":  [
                                              "Không yêu cầu gì đặc biệt.",
                                              "Phải đáp ứng yêu cầu về PCCC theo quy định đối với nhà ở nhiều tầng nhiều căn hộ và đảm bảo đường giao thông cho xe chữa cháy tiếp cận.",
                                              "Chỉ cần trang bị bình chữa cháy mini cho mỗi căn hộ.",
                                              "Phải có hệ thống báo cháy tự động như nhà chung cư lớn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc quản lý vận hành nhà ở nhiều tầng nhiều căn hộ của cá nhân (\"chung cư mini\") phải tuân thủ theo quy định nào?",
                              "options":  [
                                              "Do chủ nhà tự đặt ra quy định riêng.",
                                              "Theo thỏa thuận dân sự giữa chủ nhà và người thuê.",
                                              "Theo Quy chế quản lý, sử dụng nhà chung cư do Bộ Xây dựng ban hành (hiện hành là Thông tư 05/2024/TT-BXD).",
                                              "Theo quy định quản lý nhà trọ của địa phương."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Xu hướng chính của khung pháp lý mới về nhà ở và Kinh doanh bất động sản (Luật Nhà ở 2023, Luật Kinh doanh BĐS 2023) là gì?",
                              "options":  [
                                              "Nới lỏng các điều kiện kinh doanh để thúc đẩy thị trường.",
                                              "Tăng cường sự quản lý của nhà nước, nâng cao tính minh bạch và bảo vệ quyền lợi người mua nhà.",
                                              "Tập trung chủ yếu vào phát triển nhà ở thương mại cao cấp.",
                                              "Giảm bớt các quy định về nhà ở xã hội."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thách thức lớn nhất trong việc thực thi chính sách cải tạo, xây dựng lại nhà chung cư cũ, kể cả với cơ chế \"quy gom\", là gì?",
                              "options":  [
                                              "Thiếu nguồn vốn đầu tư từ ngân hàng",
                                              "Khó khăn trong việc thiết kế kiến trúc mới.",
                                              "Đạt được sự đồng thuận của các chủ sở hữu về phương án bồi thường, tái định cư; lựa chọn được nhà đầu tư đủ năng lực và thiện chí.",
                                              "Thiếu các quy chuẩn, tiêu chuẩn xây dựng cho nhà tái định cư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ3 Luật đất đai.docx",
        "topic":  "CĐ3 Luật đất đai",
        "questions":  [
                          {
                              "question":  "Nguyên tắc cốt lõi nào chi phối pháp luật đất đai Việt Nam?",
                              "options":  [
                                              "Đất đai thuộc sở hữu tư nhân.",
                                              "Đất đai thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và thống nhất quản lý.",
                                              "Đất đai thuộc sở hữu của các tổ chức kinh tế.",
                                              "Đất đai thuộc sở hữu của cộng đồng dân cư."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Đất đai 2024 (Luật số 31/2024/QH15) chính thức có hiệu lực thi hành từ ngày nào?",
                              "options":  [
                                              "18/01/2024",
                                              "01/01/2025",
                                              "01/08/2024",
                                              "15/10/1993"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền sử dụng đất (QSDĐ) tại Việt Nam có đặc điểm gì?",
                              "options":  [
                                              "Là quyền sở hữu tuyệt đối về đất đai.",
                                              "Không được coi là tài sản và không có giá trị bằng tiền.",
                                              "Là quyền khai thác, sử dụng đất theo mục đích, thời hạn do pháp luật quy định và được công nhận là một loại tài sản đặc biệt.",
                                              "Chỉ được Nhà nước giao cho cá nhân trong nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Đất đai 2024, \"Chuyển mục đích sử dụng đất\" được hiểu là gì?",
                              "options":  [
                                              "Việc chuyển giao quyền sử dụng đất cho người khác.",
                                              "Việc Nhà nước thu lại quyền sử dụng đất.",
                                              "Việc thay đổi mục đích sử dụng đất được pháp luật cho phép.",
                                              "Việc đăng ký quyền sử dụng đất lần đầu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối tượng nào sau đây KHÔNG còn là đối tượng sử dụng đất được Nhà nước giao đất, cho thuê đất, công nhận quyền sử dụng đất theo Luật Đất đai 2024 (áp dụng cho các giao dịch mới)?",
                              "options":  [
                                              "Tổ chức kinh tế trong nước.",
                                              "Cá nhân trong nước.",
                                              "Hộ gia đình.",
                                              "Tổ chức kinh tế có vốn đầu tư nước ngoài."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Đất đai 2024 phân loại đất thành mấy nhóm chính?",
                              "options":  [
                                              "2 nhóm (Đất nông nghiệp và Đất phi nông nghiệp)",
                                              "3 nhóm (Đất nông nghiệp, Đất phi nông nghiệp, Đất chưa sử dụng)",
                                              "4 nhóm (Đất ở, Đất sản xuất kinh doanh, Đất nông nghiệp, Đất công cộng)",
                                              "5 nhóm (Đất đô thị, Đất nông thôn, Đất rừng, Đất mặt nước, Đất khác)"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đất xây dựng khu công nghiệp, cụm công nghiệp thuộc nhóm đất nào?",
                              "options":  [
                                              "Đất nông nghiệp",
                                              "Đất phi nông nghiệp",
                                              "Đất chưa sử dụng",
                                              "Đất ở"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quỹ phát triển đất (QPTĐ) là gì?",
                              "options":  [
                                              "Quỹ đầu tư tư nhân vào đất đai.",
                                              "Quỹ tài chính nhà nước ngoài ngân sách do UBND cấp tỉnh thành lập để ứng vốn cho các hoạt động liên quan đến đất đai.",
                                              "Tổ chức tín dụng chuyên cho vay thế chấp bất động sản.",
                                              "Quỹ bảo hiểm rủi ro trong Kinh doanh bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền nào sau đây KHÔNG phải là quyền chung của mọi người sử dụng đất hợp pháp theo Luật Đất đai 2024?",
                              "options":  [
                                              "Được cấp Giấy chứng nhận khi đủ điều kiện.",
                                              "Hưởng thành quả lao động, kết quả đầu tư trên đất.",
                                              "Tự ý chuyển đổi mục đích sử dụng đất không cần xin phép.",
                                              "Được bồi thường, hỗ trợ, tái định cư khi Nhà nước thu hồi đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghĩa vụ nào sau đây là nghĩa vụ chung của mọi người sử dụng đất theo Điều 31 Luật Đất đai 2024?",
                              "options":  [
                                              "Sử dụng đất đúng mục đích, ranh giới.",
                                              "Kê khai đăng ký đất đai.",
                                              "Thực hiện nghĩa vụ tài chính về đất đai.",
                                              "Cả A, B, C đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức kinh tế trong nước được Nhà nước cho thuê đất trả tiền hằng năm có được chuyển nhượng quyền sử dụng đất không?",
                              "options":  [
                                              "Có, được chuyển nhượng tự do.",
                                              "Không, trừ trường hợp chuyển nhượng quyền thuê trong hợp đồng thuê đất.",
                                              "Chỉ được chuyển nhượng cho Nhà nước.",
                                              "Chỉ được chuyển nhượng sau khi đã trả hết tiền thuê."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân trong nước được Nhà nước giao đất ở có thu tiền sử dụng đất có quyền thế chấp quyền sử dụng đất không?",
                              "options":  [
                                              "Không được phép.",
                                              "Có, được phép thế chấp.",
                                              "Chỉ được thế chấp tại Ngân hàng Chính sách xã hội.",
                                              "Chỉ được thế chấp sau 5 năm sử dụng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức nào KHÔNG phải là hình thức chính để Nhà nước giao/cho thuê đất theo Luật Đất đai 2024?",
                              "options":  [
                                              "Giao đất, cho thuê đất không thông qua đấu giá, đấu thầu.",
                                              "Giao đất, cho thuê đất thông qua đấu giá quyền sử dụng đất.",
                                              "Giao đất, cho thuê đất thông qua thỏa thuận trực tiếp với người sử dụng đất.",
                                              "Giao đất, cho thuê đất thông qua đấu thầu lựa chọn nhà đầu tư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây bắt buộc phải xin phép cơ quan nhà nước có thẩm quyền khi chuyển mục đích sử dụng đất?",
                              "options":  [
                                              "Chuyển đất trồng cây hàng năm khác sang đất nuôi trồng thủy sản.",
                                              "Chuyển đất ở tại nông thôn sang đất ở tại đô thị",
                                              "Chuyển đất nông nghiệp sang đất phi nông nghiệp (ví dụ: sang đất ở).",
                                              "Chuyển đất thương mại, dịch vụ sang đất cơ sở sản xuất phi nông nghiệp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi chuyển mục đích sử dụng đất thuộc trường hợp phải xin phép, người sử dụng đất có nghĩa vụ gì?",
                              "options":  [
                                              "Không cần thực hiện nghĩa vụ gì thêm.",
                                              "Chỉ cần nộp đơn xin phép.",
                                              "Phải thực hiện nghĩa vụ tài chính theo quy định (nộp tiền sử dụng đất hoặc tiền thuê đất chênh lệch).",
                                              "Phải trả lại đất cho Nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây là căn cứ thu hồi đất để phát triển kinh tế - xã hội vì lợi ích quốc gia, công cộng theo Điều 79 Luật Đất đai 2024?",
                              "options":  [
                                              "Sử dụng đất sai mục đích đã được giao, cho thuê.",
                                              "Người sử dụng đất tự nguyện trả lại đất.",
                                              "Thực hiện dự án xây dựng khu công nghiệp, cụm công nghiệp.",
                                              "Đất không được sử dụng liên tục trong thời hạn quy định."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một điểm mới quan trọng trong trình tự, thủ tục thu hồi đất theo Luật Đất đai 2024 là gì",
                              "options":  [
                                              "Chỉ cần thông báo thu hồi đất trước 30 ngày.",
                                              "Việc phê duyệt phương án bồi thường, hỗ trợ, tái định cư (BTHTTĐC) và bố trí tái định cư phải hoàn thành trước khi ban hành quyết định thu hồi đất.",
                                              "Người dân không được tham gia ý kiến vào phương án BTHTTĐC.",
                                              "Cưỡng chế thu hồi đất được thực hiện ngay sau khi có thông báo thu hồi."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc bồi thường về đất khi Nhà nước thu hồi đất là gì?",
                              "options":  [
                                              "Luôn bồi thường bằng tiền mặt.",
                                              "Bồi thường bằng việc giao đất cùng mục đích sử dụng; nếu không có đất thì bồi thường bằng tiền theo giá đất cụ thể tại thời điểm phê duyệt phương án.",
                                              "Chỉ bồi thường cho đất ở, không bồi thường cho đất nông nghiệp.",
                                              "Bồi thường theo giá đất trong Bảng giá đất hàng năm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chính sách hỗ trợ nào KHÔNG được liệt kê trong các loại hình hỗ trợ chính khi Nhà nước thu hồi đất theo Luật Đất đai 2024 và Nghị định 88/2024/NĐ-CP?",
                              "options":  [
                                              "Hỗ trợ ổn định đời sống.",
                                              "Hỗ trợ đào tạo, chuyển đổi nghề và tìm kiếm việc làm.",
                                              "Hỗ trợ mua xe ô tô mới.",
                                              "Hỗ trợ tái định cư (đối với trường hợp tự lo chỗ ở)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Đất đai 2024, việc đăng ký đất đai có bắt buộc không?",
                              "options":  [
                                              "Chỉ bắt buộc đối với tổ chức.",
                                              "Chỉ bắt buộc đối với đất ở.",
                                              "Bắt buộc đối với mọi người sử dụng đất và người được giao đất để quản lý.",
                                              "Không bắt buộc, chỉ thực hiện khi có yêu cầu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây KHÔNG phải đăng ký biến động đất đai?",
                              "options":  [
                                              "Chuyển nhượng quyền sử dụng đất.",
                                              "Thay đổi tên của người sử dụng đất đã được ghi trên Giấy chứng nhận.",
                                              "Xây dựng hàng rào tạm trên đất.",
                                              "Chuyển mục đích sử dụng đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Đất đai 2024 quy định thống nhất tên gọi của giấy chứng nhận là gì?",
                              "options":  [
                                              "Giấy chứng nhận quyền sử dụng đất.",
                                              "Giấy chứng nhận quyền sở hữu nhà ở và quyền sử dụng đất ở.",
                                              "Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất.",
                                              "Sổ đỏ và Sổ hồng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp hộ gia đình, cá nhân sử dụng đất ổn định trước ngày 01/7/2014, không có giấy tờ về QSDĐ, không tranh chấp, được UBND cấp xã xác nhận, có được xem xét Giấy chứng nhận quyền sử dụng đất (LURC) không?",
                              "options":  [
                                              "Không, vì không có giấy tờ.",
                                              "Có, được xem xét Giấy chứng nhận quyền sử dụng đất (LURC) theo quy định tại Điều 138",
                                              "Chỉ được cấp nếu sử dụng đất trước 15/10/1993.",
                                              "Chỉ được cấp nếu nộp đủ tiền sử dụng đất theo giá thị trường."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khoản thu nào sau đây KHÔNG phải là nguồn thu ngân sách nhà nước từ đất đai theo Điều 153 Luật Đất đai 2024?",
                              "options":  [
                                              "Tiền sử dụng đất.",
                                              "Thuế thu nhập từ chuyển quyền sử dụng đất.",
                                              "Lợi nhuận từ Kinh doanh bất động sản của doanh nghiệp.",
                                              "Tiền thuê đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc định giá đất nào được nhấn mạnh trong Luật Đất đai 2024?",
                              "options":  [
                                              "Định giá theo chi phí đầu tư.",
                                              "Định giá theo khung giá đất của Chính phủ.",
                                              "Định giá theo nguyên tắc thị trường.",
                                              "Định giá theo thỏa thuận giữa các bên."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phương pháp định giá đất nào dựa trên việc chuyển đổi dòng thu nhập ròng hàng năm dự kiến từ việc sử dụng đất thành giá trị hiện tại?",
                              "options":  [
                                              "Phương pháp so sánh.",
                                              "Phương pháp thu nhập.",
                                              "Phương pháp thặng dư.",
                                              "Phương pháp hệ số điều chỉnh giá đất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Đất đai 2024 bãi bỏ quy định nào về giá đất so với Luật 2013?",
                              "options":  [
                                              "Bảng giá đất cấp tỉnh.",
                                              "Giá đất cụ thể.",
                                              "Khung giá đất của Chính phủ.",
                                              "Hệ số điều chỉnh giá đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bảng giá đất theo Luật Đất đai 2024 được UBND cấp tỉnh xây dựng và ban hành với tần suất nào (áp dụng từ 01/01/2026)?",
                              "options":  [
                                              "5 năm một lần.",
                                              "3 năm một lần.",
                                              "Hàng năm.",
                                              "Khi có biến động lớn về giá."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá đất cụ thể được áp dụng trong trường hợp nào sau đây?",
                              "options":  [
                                              "Tính thuế sử dụng đất phi nông nghiệp của hộ gia đình.",
                                              "Tính tiền thuê đất trả tiền hàng năm.",
                                              "Tính tiền bồi thường khi Nhà nước thu hồi đất.",
                                              "Tính lệ phí trước bạ khi đăng ký nhà đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Từ ngày 01/01/2025, giá tính thuế sử dụng đất phi nông nghiệp là gì?",
                              "options":  [
                                              "Giá đất do UBND cấp tỉnh quy định ổn định 5 năm.",
                                              "Giá đất trong Bảng giá đất hàng năm do UBND cấp tỉnh ban hành.",
                                              "Giá đất thị trường tại thời điểm tính thuế.",
                                              "Giá đất ghi trên hợp đồng chuyển nhượng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hệ thống thông tin quốc gia về đất đai bao gồm thành phần nào?",
                              "options":  [
                                              "Chỉ bao gồm cơ sở dữ liệu địa chính.",
                                              "Chỉ bao gồm phần mềm quản lý đất đai.",
                                              "Gồm Hạ tầng kỹ thuật CNTT, Phần mềm hệ thống và ứng dụng, Cơ sở dữ liệu quốc gia về đất đai.",
                                              "Chỉ bao gồm bản đồ địa chính giấy."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thanh tra chuyên ngành đất đai có thể được tiến hành dưới hình thức nào?",
                              "options":  [
                                              "Chỉ theo kế hoạch định kỳ hàng năm",
                                              "Chỉ khi có đơn tố cáo của công dân.",
                                              "Theo kế hoạch định kỳ hoặc đột xuất.",
                                              "Chỉ do Bộ Nông nghiệp và Môi trường thực hiện."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp khắc phục hậu quả nào có thể được áp dụng đối với hành vi lấn, chiếm đất?",
                              "options":  [
                                              "Chỉ phạt tiền.",
                                              "Buộc khôi phục tình trạng ban đầu của đất và buộc trả lại đất.",
                                              "Tịch thu toàn bộ tài sản của người vi phạm.",
                                              "Buộc chuyển mục đích sử dụng đất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trước khi cơ quan nhà nước có thẩm quyền giải quyết tranh chấp đất đai (trừ một số trường hợp đặc thù), thủ tục nào là bắt buộc phải thực hiện tại UBND cấp xã?",
                              "options":  [
                                              "Nộp đơn khởi kiện.",
                                              "Xin cấp Giấy chứng nhận.",
                                              "Hòa giải.",
                                              "Thanh tra đất đai."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật Đất đai 2024 loại bỏ \"Hộ gia đình\" khỏi danh sách đối tượng sử dụng đất mới có ý nghĩa gì đối với các Giấy chứng nhận đã cấp cho hộ gia đình trước đây?",
                              "options":  [
                                              "Các Giấy chứng nhận đó không còn giá trị pháp lý.",
                                              "Các Giấy chứng nhận đó vẫn có giá trị pháp lý cho đến khi có giao dịch mới hoặc cấp đổi.",
                                              "Phải làm thủ tục chuyển đổi sang tên cá nhân ngay lập tức.",
                                              "Chỉ có chủ hộ mới có quyền quyết định đối với đất đó."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Đất chăn nuôi tập trung\" theo phân loại của Luật Đất đai 2024 được định nghĩa dựa trên yếu tố nào?",
                              "options":  [
                                              "Diện tích tối thiểu.",
                                              "Số lượng vật nuôi tối thiểu.",
                                              "Việc xây dựng trang trại chăn nuôi quy mô lớn theo quy định của pháp luật về chăn nuôi",
                                              "Khoảng cách tối thiểu đến khu dân cư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc nào được nhấn mạnh trong việc lập quy hoạch, kế hoạch sử dụng đất theo Luật Đất đai 2024?",
                              "options":  [
                                              "Ưu tiên tối đa cho phát triển công nghiệp.",
                                              "Chỉ dựa trên nhu cầu của các nhà đầu tư lớn.",
                                              "Tăng cường công khai, minh bạch và đảm bảo sự tham gia của tổ chức, cộng đồng, cá nhân.",
                                              "Giữ nguyên hiện trạng sử dụng đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp đất thuộc quyền sử dụng chung của nhiều người (ví dụ: đồng thừa kế) mà không phân chia được theo phần, việc thực hiện quyền chuyển nhượng cần điều kiện gì?",
                              "options":  [
                                              "Chỉ cần một người đại diện đứng ra thực hiện.",
                                              "Phải có sự ủy quyền bằng văn bản hoặc sự đồng ý bằng văn bản của tất cả các thành viên chung quyền sử dụng.",
                                              "Phải bán đấu giá công khai.",
                                              "Không được phép chuyển nhượng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng nào sau đây KHÔNG bắt buộc phải công chứng/chứng thực theo Luật Đất đai 2024, trừ khi các bên có yêu cầu?",
                              "options":  [
                                              "Hợp đồng tặng cho quyền sử dụng đất giữa cá nhân với cá nhân.",
                                              "Hợp đồng thế chấp quyền sử dụng đất tại tổ chức tín dụng.",
                                              "Hợp đồng cho thuê quyền sử dụng đất giữa hai tổ chức kinh tế.",
                                              "Hợp đồng góp vốn bằng quyền sử dụng đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghĩa vụ \"Sử dụng đất đúng quy định về sử dụng không gian dưới lòng đất và trên không\" có ý nghĩa quan trọng đối với loại hình bất động sản nào?",
                              "options":  [
                                              "Đất nông nghiệp trồng lúa.",
                                              "Đất rừng phòng hộ.",
                                              "Các dự án xây dựng công trình ngầm, nhà cao tầng, đường trên cao.",
                                              "Đất làm muối."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện về năng lực tài chính của người được giao đất, cho thuê đất để thực hiện dự án đầu tư nhằm mục đích gì?",
                              "options":  [
                                              "Đảm bảo nộp đủ tiền sử dụng đất, tiền thuê đất.",
                                              "Đảm bảo có đủ vốn để thực hiện dự án đúng tiến độ.",
                                              "Để tính toán mức miễn, giảm tiền sử dụng đất.",
                                              "Để xác định thời hạn giao đất, cho thuê đất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây thuộc diện \"Giao đất không thu tiền sử dụng đất\" theo Điều 118 luật đất đai 2024?",
                              "options":  [
                                              "Tổ chức kinh tế làm dự án nhà ở thương mại.",
                                              "Cá nhân được giao đất ở trong hạn mức.",
                                              "Đất xây dựng trụ sở cơ quan nhà nước, đơn vị vũ trang.",
                                              "Tổ chức kinh tế có vốn đầu tư nước ngoài làm dự án khu công nghiệp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đất đưa ra đấu giá quyền sử dụng đất phải đáp ứng điều kiện nào về hạ tầng?",
                              "options":  [
                                              "Không cần có hạ tầng, người trúng đấu giá tự đầu tư.",
                                              "Phải có hạ tầng kỹ thuật kết nối cơ bản (đường giao thông, cấp thoát nước, điện...).",
                                              "Phải hoàn thiện toàn bộ hạ tầng xã hội (trường học, bệnh viện...).",
                                              "Chỉ cần có đường vào khu đất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc \"Bồi thường bằng việc giao đất có cùng mục đích sử dụng\" được ưu tiên áp dụng nhằm mục đích gì?",
                              "options":  [
                                              "Giúp Nhà nước tiết kiệm chi phí bồi thường bằng tiền.",
                                              "Đảm bảo người bị thu hồi đất có điều kiện tiếp tục sản xuất, ổn định cuộc sống tương tự như trước khi bị thu hồi.",
                                              "Khuyến khích người dân chuyển đổi sang các ngành nghề phi nông nghiệp.",
                                              "Tăng quỹ đất dự trữ cho địa phương."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao việc phê duyệt phương án bồi thường hỗ trợ tái định cư và bố trí tái định cư phải hoàn thành trước khi có quyết định thu hồi đất lại được coi là điểm tiến bộ quan trọng?",
                              "options":  [
                                              "Giúp đẩy nhanh tiến độ giải phóng mặt bằng.",
                                              "Giảm thủ tục hành chính cho cơ quan nhà nước.",
                                              "Đảm bảo người dân có nơi ở và phương án hỗ trợ rõ ràng trước khi bị mất đất, giảm thiểu xung đột và đảm bảo an sinh xã hội.",
                                              "Tăng giá trị bồi thường cho người dân."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây KHÔNG được cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo Điều 151 Luật đất đai 2024?",
                              "options":  [
                                              "Đất nông nghiệp sử dụng vào mục đích công ích của xã, phường, đặc khu.",
                                              "Đất do tổ chức được Nhà nước giao đất không thu tiền để sử dụng vào mục đích xây dựng công trình sự nghiệp.",
                                              "Đất ở do cá nhân nhận chuyển nhượng hợp pháp.",
                                              "Nhà ở thuộc sở hữu của cá nhân đã được cấp phép xây dựng trên đất ở hợp pháp."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xây dựng Bảng giá đất hàng năm (thay vì 5 năm) đặt ra thách thức lớn nhất là gì cho các địa phương?",
                              "options":  [
                                              "Khó khăn trong việc in ấn và phát hành bảng giá mới.",
                                              "Yêu cầu phải có nguồn lực, cơ sở dữ liệu giá đất thị trường đầy đủ, cập nhật và năng lực định giá tốt hơn.",
                                              "Gây khó khăn cho người dân trong việc tra cứu.",
                                              "Làm tăng chi phí hành chính không đáng kể."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vai trò của Hội đồng thẩm định giá đất cụ thể là gì?",
                              "options":  [
                                              "Trực tiếp đi khảo sát và đưa ra mức giá đất cụ thể.",
                                              "Quyết định cuối cùng về giá đất cụ thể.",
                                              "Thẩm định phương án giá đất cụ thể do cơ quan nông nghiệp \u0026 môi trường lập hoặc do tổ chức tư vấn định giá thực hiện trước khi trình UBND phê duyệt.",
                                              "Thu thập thông tin giá đất trên thị trường."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực đất đai là bao lâu?",
                              "options":  [
                                              "6 tháng.",
                                              "1 năm.",
                                              "2 năm.",
                                              "Không có thời hiệu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với người sử dụng đất là cá nhân, việc nắm rõ quy trình và quyền lợi khi Nhà nước thu hồi đất có ý nghĩa gì?",
                              "options":  [
                                              "Giúp họ đòi hỏi mức bồi thường cao hơn quy định.",
                                              "Để chủ động bảo vệ quyền lợi hợp pháp của mình về bồi thường, hỗ trợ, tái định cư và thực hiện đúng các thủ tục khiếu nại nếu cần.",
                                              "Giúp họ trì hoãn việc bàn giao đất cho Nhà nước.",
                                              "Để có thể tự thỏa thuận giá bồi thường với chủ đầu tư dự án."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ4 Luật đầu tư.docx",
        "topic":  "CĐ4 Luật đầu tư",
        "questions":  [
                          {
                              "question":  "Nguyên tắc nào KHÔNG phải là nguyên tắc cơ bản của hoạt động Kinh doanh bất động sản theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Công khai, minh bạch thông tin về bất động sản.",
                                              "Tự do thỏa thuận trên cơ sở tôn trọng pháp luật.",
                                              "Ưu tiên lợi nhuận tối đa cho chủ đầu tư.",
                                              "Tuân thủ điều kiện kinh doanh đối với bất động sản và dự án."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức, cá nhân Kinh doanh bất động sản (trừ quy mô nhỏ, không thường xuyên) phải đáp ứng điều kiện nào về chủ thể theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Chỉ cần đăng ký hộ kinh doanh cá thể.",
                                              "Phải thành lập doanh nghiệp hoặc hợp tác xã, liên hiệp hợp tác xã.",
                                              "Có thể hoạt động dưới danh nghĩa cá nhân nếu có đủ vốn.",
                                              "Bắt buộc phải là công ty cổ phần."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư dự án bất động sản có quy mô sử dụng đất dưới 20 ha phải đảm bảo vốn chủ sở hữu tối thiểu là bao nhiêu phần trăm tổng vốn đầu tư theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "10%",
                                              "15%",
                                              "20%",
                                              "25%"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư dự án bất động sản có quy mô sử dụng đất từ 20 ha trở lên phải đảm bảo vốn chủ sở hữu tối thiểu là bao nhiêu phần trăm tổng vốn đầu tư theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "10%",
                                              "15%",
                                              "20%",
                                              "25%"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân Kinh doanh bất động sản quy mô nhỏ theo Luật kinh doanh bất động sản 2023 có bắt buộc phải thành lập doanh nghiệp không?",
                              "options":  [
                                              "Bắt buộc phải thành lập doanh nghiệp TNHH.",
                                              "Bắt buộc phải thành lập hợp tác xã.",
                                              "Không bắt buộc thành lập doanh nghiệp nhưng phải kê khai, nộp thuế.",
                                              "Chỉ cần có chứng chỉ hành nghề môi giới."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây bị nghiêm cấm trong Kinh doanh bất động sản theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Công khai thông tin về dự án bất động sản.",
                                              "Kinh doanh bất động sản không đủ điều kiện theo quy định.",
                                              "Thu tiền đặt cọc không quá 5% giá bán nhà ở hình thành trong tương lai đủ điều kiện.",
                                              "Sử dụng hợp đồng theo mẫu do Chính phủ quy định."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc không công khai thông tin về bất động sản, dự án bất động sản đưa vào kinh doanh bị xử lý như thế nào theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Bị nhắc nhở.",
                                              "Bị phạt hành chính.",
                                              "Là hành vi bị nghiêm cấm.",
                                              "Chỉ bị yêu cầu bổ sung thông tin."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức nào sau đây KHÔNG phải là hình thức đầu tư mà nhà đầu tư nước ngoài có thể lựa chọn theo Luật Đầu tư 2020?",
                              "options":  [
                                              "Thành lập tổ chức kinh tế 100% vốn nước ngoài.",
                                              "Đầu tư góp vốn, mua cổ phần doanh nghiệp Việt Nam.",
                                              "Mua đất nông nghiệp để tự do chuyển đổi mục đích.",
                                              "Đầu tư theo hình thức hợp đồng hợp tác kinh doanh (BCC)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà đầu tư nước ngoài có bị giới hạn tỷ lệ sở hữu vốn điều lệ trong doanh nghiệp Kinh doanh bất động sản tại Việt Nam theo quy định chung hiện hành không?",
                              "options":  [
                                              "Bị giới hạn tối đa 49%.",
                                              "Bị giới hạn tối đa 70%.",
                                              "Không quy định giới hạn chung, có thể sở hữu 100% vốn (trừ các trường hợp đặc biệt).",
                                              "Bắt buộc phải liên doanh với đối tác Việt Nam."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phạm vi hoạt động Kinh doanh bất động sản của nhà đầu tư nước ngoài so với nhà đầu tư trong nước theo Luật kinh doanh bất động sản 2023 như thế nào?",
                              "options":  [
                                              "Rộng hơn nhà đầu tư trong nước.",
                                              "Tương đương nhà đầu tư trong nước.",
                                              "Hẹp hơn nhà đầu tư trong nước.",
                                              "Chỉ được phép kinh doanh dịch vụ bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức nào thường được áp dụng khi Nhà nước giao đất có thu tiền sử dụng đất để thực hiện dự án nhà ở thương mại theo Luật Đất đai 2024?",
                              "options":  [
                                              "Giao đất trực tiếp không qua đấu giá, đấu thầu.",
                                              "Đấu giá quyền sử dụng đất.",
                                              "Đấu thầu lựa chọn nhà đầu tư.",
                                              "Cho thuê đất trả tiền hàng năm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giấy tờ nào sau đây KHÔNG bắt buộc phải có trong hồ sơ đề nghị cấp Giấy phép xây dựng cho dự án theo Luật Xây dựng và Nghị định 15/2021/NĐ-CP?",
                              "options":  [
                                              "Đơn đề nghị cấp GPXD.",
                                              "Giấy tờ chứng minh quyền sử dụng đất.",
                                              "Hợp đồng mua bán nhà ở hình thành trong tương lai.",
                                              "Giấy chứng nhận thẩm duyệt thiết kế về PCCC (nếu có yêu cầu)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan nào thực hiện thẩm duyệt thiết kế về Phòng cháy chữa cháy (PCCC) cho các dự án, công trình?",
                              "options":  [
                                              "Sở Xây dựng.",
                                              "Bộ Công an hoặc Công an cấp tỉnh",
                                              "Chủ đầu tư tự thẩm duyệt.",
                                              "Đơn vị tư vấn thiết kế."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư có được phép đưa công trình vào khai thác, sử dụng ngay sau khi tự tổ chức nghiệm thu hoàn thành không?",
                              "options":  [
                                              "Được phép đối với mọi công trình.",
                                              "Chỉ được phép đối với công trình nhà ở riêng lẻ.",
                                              "Phải có văn bản chấp thuận kết quả nghiệm thu của cơ quan chuyên môn về xây dựng đối với các công trình quan trọng, quy mô lớn, ảnh hưởng cộng đồng.",
                                              "Chỉ cần có biên bản nghiệm thu của nhà thầu thi công."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện nào là bắt buộc đối với nhà chung cư hình thành trong tương lai trước khi chủ đầu tư được phép bán hoặc cho thuê mua theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Hoàn thành xây dựng phần mái.",
                                              "Hoàn thành sơn, trang trí mặt ngoài.",
                                              "Có biên bản nghiệm thu đã hoàn thành xong phần móng.",
                                              "Có giấy chứng nhận quyền sở hữu cho từng căn hộ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là một trong những thách thức tiềm ẩn khi triển khai các luật mới về bất động sản có hiệu lực từ 01/8/2024?",
                              "options":  [
                                              "Giảm giá bất động sản đột ngột.",
                                              "Sự thiếu rõ ràng trong một số quy định, khả năng diễn giải khác nhau, thời gian xử lý thủ tục.",
                                              "Nhà đầu tư nước ngoài rút vốn hàng loạt.",
                                              "Thị trường bất động sản đóng băng hoàn toàn."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Đầu tư 2020, dự án đầu tư tại khu vực biên giới, ven biển, hải đảo hoặc ảnh hưởng quốc phòng, an ninh cần có sự chấp thuận của cơ quan nào?",
                              "options":  [
                                              "Chỉ cần UBND cấp tỉnh.",
                                              "Bộ Tài nguyên và Môi trường.",
                                              "Bộ Quốc phòng, Bộ Công an.",
                                              "Quốc hội."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc quản lý vận hành nhà ở nhiều tầng nhiều căn hộ của cá nhân (chung cư mini) phải tuân theo quy chế nào?",
                              "options":  [
                                              "Do chủ nhà tự ban hành.",
                                              "Theo thỏa thuận của các hộ dân.",
                                              "Theo Quy chế quản lý, sử dụng nhà chung cư do Bộ Xây dựng ban hành.",
                                              "Theo quy định của UBND cấp xã."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp cá nhân bán, cho thuê mua nhà ở, công trình xây dựng không nhằm mục đích kinh doanh hoặc dưới mức quy mô nhỏ, yêu cầu nào là bắt buộc về mặt hình thức hợp đồng theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Hợp đồng phải được đăng ký tại Sở Xây dựng.",
                                              "Hợp đồng phải được lập thành văn bản có công chứng hoặc chứng thực.",
                                              "Hợp đồng phải theo mẫu do Bộ Tài chính ban hành.",
                                              "Không có yêu cầu đặc biệt về hình thức hợp đồng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà đầu tư trong nước tự nguyện xin cấp Giấy chứng nhận đăng ký đầu tư (IRC) thì quy trình thủ tục sẽ như thế nào so với nhà đầu tư nước ngoài?",
                              "options":  [
                                              "Phức tạp hơn do phải chứng minh nguồn gốc vốn trong nước.",
                                              "Tương tự, nhưng không phải đáp ứng các điều kiện tiếp cận thị trường dành riêng cho nhà đầu tư nước ngoài.",
                                              "Đơn giản hơn nhiều, chỉ cần nộp đơn và giấy đăng ký kinh doanh.",
                                              "Bắt buộc phải thông qua đấu thầu lựa chọn nhà đầu tư."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà đầu tư không được Nhà nước giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất nếu vi phạm quy định nào của pháp luật đất đai theo Luật Đất đai 2024?",
                              "options":  [
                                              "Chậm nộp thuế thu nhập doanh nghiệp.",
                                              "Có hành vi vi phạm pháp luật đất đai đối với đất đang sử dụng do Nhà nước giao, cho thuê mà chưa chấp hành xong quyết định xử lý.",
                                              "Không tham gia hoạt động xã hội tại địa phương.",
                                              "Sử dụng công nghệ lạc hậu trong dự án."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà đầu tư trúng đấu giá quyền sử dụng đất để thực hiện dự án nhà ở thương mại, căn cứ để được giao đất là gì?",
                              "options":  [
                                              "Quyết định chấp thuận chủ trương đầu tư.",
                                              "Giấy chứng nhận đăng ký đầu tư.",
                                              "Kết quả trúng đấu giá quyền sử dụng đất đã được cơ quan nhà nước có thẩm quyền phê duyệt.",
                                              "Hợp đồng mua bán tài sản đấu giá."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc thẩm duyệt thiết kế Phòng cháy chữa cháy theo Nghị định 136/2020/NĐ-CP được thực hiện ở những giai đoạn thiết kế nào của dự án?",
                              "options":  [
                                              "Chỉ ở giai đoạn thiết kế bản vẽ thi công.",
                                              "Chỉ ở giai đoạn thiết kế cơ sở.",
                                              "Ở cả giai đoạn thiết kế cơ sở và thiết kế kỹ thuật/thiết kế bản vẽ thi công.",
                                              "Chỉ khi dự án chuẩn bị nghiệm thu đưa vào sử dụng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ngoài các điều kiện về giấy tờ pháp lý và nghiệm thu móng/hạ tầng, chủ đầu tư phải thực hiện thủ tục gì với cơ quan nhà nước trước khi bán/cho thuê mua nhà ở hình thành trong tương lai theo Luật kinh doanh bất động sản 2023?",
                              "options":  [
                                              "Xin giấy phép bán hàng từ Bộ Công Thương.",
                                              "Đăng ký giá bán tại Sở Tài chính.",
                                              "Có văn bản thông báo cho cơ quan quản lý nhà ở cấp tỉnh về việc nhà ở đủ điều kiện được bán, cho thuê mua.",
                                              "Nộp báo cáo tiến độ dự án hàng tháng cho UBND tỉnh."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhà đầu tư nước ngoài thành lập doanh nghiệp 100% vốn nước ngoài để thực hiện dự án BĐS tại Việt Nam. Doanh nghiệp này sau đó có được đối xử như nhà đầu tư trong nước về mọi mặt không?",
                              "options":  [
                                              "Có, hoàn toàn như nhà đầu tư trong nước.",
                                              "Không, doanh nghiệp này vẫn được xem là \"tổ chức kinh tế có vốn đầu tư nước ngoài\" và phải tuân thủ các quy định riêng (ví dụ về điều kiện tiếp cận thị trường khi đầu tư vào lĩnh vực khác, điều kiện về đất đai...).",
                                              "Chỉ khác biệt về thủ tục báo cáo đầu tư.",
                                              "Chỉ khác biệt về tỷ giá hối đoái áp dụng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 KHÔNG áp dụng cho trường hợp chuyển nhượng bất động sản nào sau đây?",
                              "options":  [
                                              "Chuyển nhượng nhà ở hình thành trong tương lai.",
                                              "Chuyển nhượng quyền sử dụng đất đã có hạ tầng trong dự án.",
                                              "Bán, chuyển nhượng tài sản là bất động sản theo quyết định của tòa án khi giải quyết phá sản doanh nghiệp.",
                                              "Cho thuê lại văn phòng thương mại."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Đầu tư 2020, dự án đầu tư xây dựng nhà ở, khu đô thị tại khu vực hạn chế phát triển hoặc nội đô lịch sử của đô thị loại đặc biệt thuộc thẩm quyền chấp thuận chủ trương đầu tư của cơ quan nào?",
                              "options":  [
                                              "Quốc hội.",
                                              "Thủ tướng Chính phủ.",
                                              "Ủy ban nhân dân cấp tỉnh.",
                                              "Bộ Xây dựng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào nhà đầu tư KHÔNG phải thực hiện ký quỹ bảo đảm thực hiện dự án khi được Nhà nước giao đất, cho thuê đất?",
                              "options":  [
                                              "Dự án đầu tư xây dựng nhà ở xã hội.",
                                              "Dự án đầu tư tại địa bàn có điều kiện kinh tế - xã hội khó khăn.",
                                              "Nhà đầu tư nhận chuyển nhượng quyền sử dụng đất, tài sản gắn liền với đất từ người sử dụng đất khác để thực hiện dự án đầu tư.",
                                              "Dự án có sử dụng công nghệ cao."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trình tự thực hiện một dự án đầu tư Kinh doanh bất động sản gồm các bước nào sau đây?",
                              "options":  [
                                              "Lập dự án → Giao đất → Thiết kế kỹ thuật → Thi công",
                                              "Lập dự án → Thẩm định, chấp thuận chủ trương đầu tư → Giao đất/cho thuê đất → Phê duyệt quy hoạch chi tiết → Triển khai dự án",
                                              "Chấp thuận chủ trương đầu tư → Giao đất → Xây dựng → Bán sản phẩm",
                                              "Giao đất → Nộp tiền sử dụng đất → Lập dự án → Xây dựng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi lập dự án đầu tư bất động sản, nhà đầu tư phải có quyền sử dụng đất hợp pháp hoặc:",
                              "options":  [
                                              "Có thỏa thuận nguyên tắc với chính quyền địa phương",
                                              "Có cam kết bảo lãnh ngân hàng về tài chính",
                                              "Được Nhà nước cam kết giao đất, cho thuê đất",
                                              "Có chứng nhận đủ năng lực tài chính"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một trong các tiêu chí để lựa chọn nhà đầu tư dự án bất động sản là gì?",
                              "options":  [
                                              "Mức giá bán sản phẩm cao nhất",
                                              "Kết nối quan hệ với cơ quan quản lý",
                                              "Phương án đầu tư dự án khả thi và hiệu quả nhất",
                                              "Thời gian thi công càng nhanh càng tốt"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổng số vốn chủ sở hữu, dư nợ vay tại tổ chức tín dụng và dư nợ trái phiếu doanh nghiệp để thực hiện một dự án bất động sản đã được chấp thuận làm chủ đầu tư không được vượt quá bao nhiêu phần trăm tổng vốn đầu tư của dự án đó?",
                              "options":  [
                                              "80%",
                                              "90%",
                                              "100%",
                                              "120%"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vốn chủ sở hữu của doanh nghiệp  đầu tư dự án Kinh doanh bất động sản được xác định dựa trên tài liệu nào sau đây?",
                              "options":  [
                                              "Báo cáo tài chính đã được kiểm toán",
                                              "Cam kết góp vốn của cổ đông",
                                              "Hợp đồng vay vốn với ngân hàng",
                                              "Giấy chứng nhận đăng ký doanh nghiệp"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư dự án Kinh doanh bất động sản được cấp Giấy chứng nhận quyền sử dụng đất khi nào?",
                              "options":  [
                                              "Ngay sau khi được chấp thuận chủ trương đầu tư",
                                              "Sau khi khởi công công trình chính của dự án",
                                              "Sau khi hoàn thành nghĩa vụ tài chính về đất đai",
                                              "Sau khi bán hết sản phẩm bất động sản"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư được phép phân lô, bán nền tại một số khu vực khi đáp ứng điều kiện nào sau đây?",
                              "options":  [
                                              "Dự án được phê duyệt chủ trương đầu tư và đã có giấy phép xây dựng",
                                              "Đã đầu tư xây dựng hạ tầng kỹ thuật theo quy hoạch chi tiết được duyệt",
                                              "Đã có người mua cam kết xây dựng nhà trong 12 tháng",
                                              "Đã hoàn thiện thủ tục bàn giao đất"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư phải thực hiện nghĩa vụ tài chính đối với nhà nước trong giai đoạn nào của dự án?",
                              "options":  [
                                              "Sau khi dự án hoàn thành xây dựng",
                                              "Trước khi triển khai xây dựng công trình",
                                              "Sau khi được phê duyệt quy hoạch tổng mặt bằng",
                                              "Sau khi hoàn thành đền bù giải phóng mặt bằng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi Nhà nước thu hồi đất để thực hiện dự án đầu tư xây dựng, nguyên tắc đầu tiên cần đảm bảo là gì?",
                              "options":  [
                                              "Ưu tiên giải phóng mặt bằng nhanh chóng",
                                              "Đảm bảo quyền lợi tối đa cho nhà đầu tư",
                                              "Có phương án bồi thường, hỗ trợ, tái định cư (nếu có) được phê duyệt",
                                              "Không cần thỏa thuận với người dân nếu đã có quyết định thu hồi đất"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi người dân bị thu hồi đất và có đủ điều kiện tái định cư, Nhà nước phải bố trí tái định cư trong thời điểm nào?",
                              "options":  [
                                              "Sau khi hoàn tất toàn bộ dự án",
                                              "Ngay sau khi quyết định thu hồi đất",
                                              "Trước hoặc cùng thời điểm thu hồi đất",
                                              "Trong vòng 6 tháng kể từ ngày bàn giao mặt bằng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thủ tục cuối cùng trong quá trình thực hiện một dự án đầu tư Kinh doanh bất động sản là:",
                              "options":  [
                                              "Nghiệm thu đưa công trình vào sử dụng và cấp sổ cho khách hàng",
                                              "Ký hợp đồng thi công giai đoạn cuối",
                                              "Xin phép chuyển nhượng quyền sử dụng đất",
                                              "Thực hiện báo cáo tài chính dự án"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trách nhiệm của chủ đầu tư trong giai đoạn thực hiện dự án không bao gồm nội dung nào sau đây?",
                              "options":  [
                                              "Bảo đảm tiến độ và chất lượng công trình",
                                              "Cung cấp thông tin dự án cho khách hàng",
                                              "Tự ý điều chỉnh quy hoạch chi tiết 1/500",
                                              "Ký hợp đồng mua bán theo mẫu đã đăng ký"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu chủ đầu tư đưa công trình chưa đủ điều kiện vào kinh doanh, hậu quả pháp lý là gì?",
                              "options":  [
                                              "Bị buộc tạm dừng kinh doanh",
                                              "Bị xử phạt hành chính và buộc khắc phục hậu quả, thậm chí có thể bị truy cứu trách nhiệm hình sự",
                                              "Bị rút giấy phép xây dựng",
                                              "Chỉ cần nộp phạt tiền theo mức độ vi phạm"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ thể nào có trách nhiệm công khai thông tin dự án bất động sản đưa vào kinh doanh?",
                              "options":  [
                                              "Người mua bất động sản",
                                              "Cơ quan quản lý nhà nước về xây dựng",
                                              "Chủ đầu tư dự án bất động sản",
                                              "Sàn giao dịch bất động sản trung gian"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư phải công khai thông tin dự án bất động sản từ thời điểm nào sau đây?",
                              "options":  [
                                              "Sau khi ký hợp đồng mua bán",
                                              "Sau khi hoàn thành xây dựng phần móng",
                                              "Trước khi huy động vốn, chào bán, cho thuê hoặc cho thuê mua bất động sản",
                                              "Sau khi nghiệm thu toàn bộ dự án"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người mua nhà ở thương mại hình thành trong tương lai có quyền nào sau đây?",
                              "options":  [
                                              "Yêu cầu chủ đầu tư cam kết lợi nhuận",
                                              "Được tự quyết định thiết kế lại căn hộ",
                                              "Yêu cầu bàn giao đúng tiến độ, đúng chất lượng, và có bảo hành",
                                              "Không phải thanh toán nếu nhà bàn giao trễ"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ đầu tư không được phép chuyển nhượng quyền sở hữu nhà ở thương mại trong trường hợp nào?",
                              "options":  [
                                              "Sau khi bàn giao nhưng chưa có sổ hồng",
                                              "Nhà ở đang bị thế chấp, chưa được giải chấp hoặc không có thỏa thuận với bên nhận thế chấp",
                                              "Sau khi hoàn công nhưng chưa nghiệm thu",
                                              "Sau khi ký hợp đồng đặt cọc"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nội dung nào dưới đây không bắt buộc phải công khai theo quy định pháp luật khi đưa dự án vào kinh doanh?",
                              "options":  [
                                              "Thông tin pháp lý dự án",
                                              "Quy hoạch chi tiết 1/500",
                                              "Tiến độ thực hiện",
                                              "Chiến lược marketing sản phẩm"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo quy định hiện hành, dự án đầu tư Kinh doanh bất động sản bao gồm những loại hình nào?",
                              "options":  [
                                              "Nhà ở thương mại, khu công nghiệp",
                                              "Nhà ở, công trình xây dựng để bán, cho thuê, cho thuê mua; quyền sử dụng đất đã có hạ tầng kỹ thuật",
                                              "Các công trình phúc lợi công cộng",
                                              "Các dự án nhà nước đầu tư không vì mục tiêu lợi nhuận"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổng Liên đoàn Lao động Việt Nam được phép đầu tư xây dựng nhà ở xã hội bằng nguồn tài chính nào và cho đối tượng nào thuê theo Luật Nhà ở 2023?",
                              "options":  [
                                              "Bằng vốn ngân sách nhà nước, cho mọi đối tượng thuê.",
                                              "Bằng nguồn tài chính công đoàn, cho công nhân, người lao động thuộc đối tượng được hưởng chính sách nhà ở xã hội thuê.",
                                              "Bằng vốn vay ưu đãi, cho cán bộ công đoàn thuê.",
                                              "Bằng vốn xã hội hóa, cho đoàn viên công đoàn có thu nhập cao thuê."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp người mua nhà ở xã hội bán lại nhà sau thời hạn tối thiểu 05 năm, họ được phép bán cho đối tượng nào?",
                              "options":  [
                                              "Bất kỳ ai có nhu cầu mua.",
                                              "Chỉ được bán lại cho chủ đầu tư dự án",
                                              "Cho các đối tượng thuộc diện được mua nhà ở xã hội theo quy định hoặc bán lại cho chủ đầu tư (nếu chủ đầu tư có nhu cầu mua lại).",
                                              "Chỉ cho người có hộ khẩu thường trú tại địa phương."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan chuyên môn về xây dựng thực hiện kiểm tra công tác nghiệm thu của chủ đầu tư đối với loại công trình nào theo Nghị định 06/2021/NĐ-CP?",
                              "options":  [
                                              "Mọi công trình xây dựng.",
                                              "Chỉ công trình nhà ở riêng lẻ.",
                                              "Công trình quan trọng quốc gia, quy mô lớn, kỹ thuật phức tạp, sử dụng vốn công/nhà nước ngoài đầu tư công, có ảnh hưởng lớn đến an toàn, lợi ích cộng đồng.",
                                              "Chỉ công trình có vốn đầu tư nước ngoài."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ5 Luật Dân sự.docx",
        "topic":  "CĐ5 Luật Dân sự",
        "questions":  [
                          {
                              "question":  "Theo Bộ luật Dân sự (BLDS) 2015, loại tài sản nào sau đây được xem là bất động sản",
                              "options":  [
                                              "Chỉ có đất đai.",
                                              "Đất đai; Nhà, công trình xây dựng gắn liền với đất đai; Tài sản khác gắn liền với đất đai, nhà, công trình xây dựng; Tài sản khác do pháp luật quy định.",
                                              "Chỉ có nhà ở và công trình xây dựng.",
                                              "Chỉ có quyền sử dụng đất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền sở hữu bất động sản theo Bộ luật Dân sự 2015 bao gồm những quyền năng cơ bản nào",
                              "options":  [
                                              "Quyền sử dụng và quyền định đoạt.",
                                              "Quyền chiếm hữu, quyền sử dụng và quyền định đoạt.",
                                              "Quyền chiếm hữu và quyền sử dụng.",
                                              "Quyền khai thác và quyền chuyển nhượng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Bộ luật Dân sự 2015, \"tài sản hình thành trong tương lai\" có thể là đối tượng của giao dịch dân sự không",
                              "options":  [
                                              "Không, chỉ tài sản hiện có mới được giao dịch.",
                                              "Có, bao gồm cả bất động sản chưa hình thành hoặc chưa xác lập quyền sở hữu tại thời điểm giao dịch.",
                                              "Chỉ áp dụng cho động sản, không áp dụng cho bất động sản.",
                                              "Chỉ khi có sự đồng ý của cơ quan nhà nước có thẩm quyền."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức bắt buộc đối với hợp đồng mua bán bất động sản theo quy định chung của Bộ luật Dân sự 2015 là gì",
                              "options":  [
                                              "Bằng lời nói.",
                                              "Phải lập thành văn bản, có công chứng hoặc chứng thực (trừ trường hợp luật có quy định khác).",
                                              "Chỉ cần lập thành văn bản.",
                                              "Bằng thông điệp dữ liệu điện tử."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời điểm chuyển quyền sở hữu bất động sản trong hợp đồng mua bán thường được xác định là khi nào",
                              "options":  [
                                              "Kể từ thời điểm ký kết hợp đồng.",
                                              "Kể từ thời điểm thanh toán đủ tiền.",
                                              "Kể từ thời điểm đăng ký quyền sở hữu tại cơ quan nhà nước có thẩm quyền, trừ thỏa thuận hoặc luật định khác.",
                                              "Kể từ thời điểm bàn giao bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng tặng cho bất động sản có hiệu lực kể từ thời điểm nào nếu bất động sản đó phải đăng ký quyền sở hữu",
                              "options":  [
                                              "Kể từ thời điểm các bên ký hợp đồng.",
                                              "Kể từ thời điểm hợp đồng được công chứng/chứng thực.",
                                              "Kể từ thời điểm đăng ký quyền sở hữu.",
                                              "Kể từ thời điểm bên được tặng cho nhận tài sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Bên thuê bất động sản có được phép cho thuê lại không",
                              "options":  [
                                              "Không được phép trong mọi trường hợp.",
                                              "Được phép nếu có sự đồng ý bằng văn bản của bên cho thuê.",
                                              "Chỉ được phép khi thời hạn thuê còn trên 1 năm.",
                                              "Được phép tự do mà không cần sự đồng ý."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Di sản thừa kế theo Bộ luật Dân sự 2015 bao gồm những gì",
                              "options":  [
                                              "Chỉ tài sản riêng của người chết.",
                                              "Chỉ phần tài sản của người chết trong tài sản chung với người khác.",
                                              "Tài sản riêng của người chết và phần tài sản của người chết trong tài sản chung với người khác.",
                                              "Chỉ bất động sản của người chết."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức di chúc nào được khuyến nghị để đảm bảo tính pháp lý và tránh tranh chấp đối với di sản là bất động sản",
                              "options":  [
                                              "Di chúc miệng.",
                                              "Di chúc viết tay không có người làm chứng.",
                                              "Di chúc bằng văn bản có công chứng hoặc chứng thực.",
                                              "Di chúc có người làm chứng nhưng không công chứng/chứng thực."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Điều 644 Bộ luật Dân sự 2015, phần di sản mà người thừa kế không phụ thuộc vào nội dung di chúc được hưởng là bao nhiêu",
                              "options":  [
                                              "Bằng một nửa (1/2) suất của một người thừa kế theo pháp luật.",
                                              "Bằng hai phần ba (2/3) suất của một người thừa kế theo pháp luật.",
                                              "Bằng một suất của một người thừa kế theo pháp luật.",
                                              "Tùy thuộc vào giá trị di sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ai thuộc hàng thừa kế thứ nhất theo pháp luật (Điều 651 Bộ luật Dân sự 2015)",
                              "options":  [
                                              "Ông bà nội, ông bà ngoại, anh chị em ruột.",
                                              "Vợ, chồng, cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi, con đẻ, con nuôi.",
                                              "Cụ nội, cụ ngoại, bác chú cậu cô dì ruột.",
                                              "Cháu ruột, chắt ruột."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Hôn nhân và Gia đình (LHN\u0026GĐ) 2014, quyền sử dụng đất mà vợ chồng có được sau khi kết hôn được xác định là tài sản gì",
                              "options":  [
                                              "Luôn là tài sản riêng của người đứng tên trên Giấy chứng nhận.",
                                              "Là tài sản chung, trừ trường hợp được thừa kế riêng, tặng cho riêng hoặc có được qua giao dịch bằng tài sản riêng.",
                                              "Luôn là tài sản chung không có ngoại lệ.",
                                              "Là tài sản riêng của chồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc định đoạt bất động sản là tài sản chung của vợ chồng yêu cầu điều kiện gì theo Điều 35 Luật Hôn nhân và Gia đình 2014",
                              "options":  [
                                              "Chỉ cần sự đồng ý của người đứng tên trên Giấy chứng nhận.",
                                              "Phải có sự thỏa thuận bằng văn bản của cả vợ và chồng.",
                                              "Chỉ cần sự đồng ý của vợ.",
                                              "Có thể do một bên tự quyết định."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hậu quả pháp lý nếu một giao dịch liên quan đến bất động sản là tài sản chung được thực hiện mà thiếu sự thỏa thuận của vợ/chồng (khi pháp luật yêu cầu) là gì",
                              "options":  [
                                              "Giao dịch vẫn có hiệu lực nhưng bên còn lại được bồi thường.",
                                              "Giao dịch bị tạm dừng để bổ sung chữ ký.",
                                              "Bên còn lại có quyền yêu cầu Tòa án tuyên bố giao dịch đó vô hiệu.",
                                              "Giao dịch chỉ vô hiệu một phần tương ứng với phần tài sản của bên không đồng ý."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi phân chia bất động sản là tài sản chung khi ly hôn, Tòa án KHÔNG xem xét yếu tố nào sau đây",
                              "options":  [
                                              "Hoàn cảnh của gia đình và của vợ, chồng.",
                                              "Công sức đóng góp của mỗi bên.",
                                              "Lỗi của mỗi bên trong vi phạm quyền, nghĩa vụ vợ chồng.",
                                              "Giới tính của vợ hoặc chồng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là sự khác biệt cơ bản giữa công chứng và chứng thực hợp đồng, giao dịch",
                              "options":  [
                                              "Công chứng do UBND thực hiện, chứng thực do Văn phòng công chứng thực hiện.",
                                              "Công chứng đảm bảo tính xác thực, hợp pháp về nội dung và ý chí các bên; chứng thực chủ yếu xác nhận thời gian, địa điểm, chữ ký, năng lực hành vi.",
                                              "Chỉ công chứng mới có giá trị pháp lý.",
                                              "Công chứng áp dụng cho mọi loại giao dịch, chứng thực chỉ áp dụng cho giấy tờ."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giao dịch nào sau đây về nhà ở BẮT BUỘC phải công chứng hoặc chứng thực theo Luật Nhà ở 2023 (trừ các ngoại lệ)",
                              "options":  [
                                              "Cho thuê nhà ở dưới 6 tháng.",
                                              "Mua bán, thuê mua, tặng cho, đổi, góp vốn, thế chấp nhà ở.",
                                              "Ủy quyền quản lý nhà ở.",
                                              "Mượn nhà ở."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng mua bán nhà ở, công trình xây dựng giữa các cá nhân với nhau có bắt buộc công chứng/chứng thực theo Luật kinh doanh bất động sản (KD BĐS) 2023 không",
                              "options":  [
                                              "Không, chỉ cần lập văn bản.",
                                              "Có, bắt buộc phải công chứng hoặc chứng thực.",
                                              "Chỉ bắt buộc nếu giá trị trên 1 tỷ đồng.",
                                              "Theo yêu cầu của một trong các bên."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công chứng viên có được công chứng hợp đồng, giao dịch về bất động sản ở ngoài phạm vi tỉnh, thành phố nơi tổ chức hành nghề công chứng đặt trụ sở không",
                              "options":  [
                                              "Được phép tự do.",
                                              "Chỉ được công chứng trong phạm vi tỉnh/thành phố nơi đặt trụ sở, trừ di chúc, văn bản từ chối nhận di sản, văn bản ủy quyền liên quan đến BĐS.",
                                              "Chỉ được nếu có sự đồng ý của Sở Tư pháp địa phương nơi có BĐS.",
                                              "Chỉ được đối với các giao dịch không bắt buộc công chứng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hạn SỞ HỮU nhà chung cư theo Luật Nhà ở 2023 được xác định như thế nào",
                              "options":  [
                                              "Có thời hạn theo thời hạn sử dụng đất của dự án.",
                                              "Có thời hạn theo thiết kế của tòa nhà (ví dụ 50 năm, 70 năm).",
                                              "Không quy định thời hạn sở hữu, chỉ có thời hạn sử dụng theo hồ sơ thiết kế và kết luận kiểm định. Quyền sử dụng đất là ổn định lâu dài.",
                                              "Phụ thuộc vào thỏa thuận trong hợp đồng mua bán."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người Việt Nam định cư ở nước ngoài là công dân Việt Nam có quyền về đất đai như thế nào theo Luật Đất đai 2024",
                              "options":  [
                                              "Chỉ được nhận thừa kế quyền sử dụng đất.",
                                              "Có đầy đủ các quyền liên quan đến đất đai như công dân trong nước.",
                                              "Chỉ được mua nhà ở gắn liền với đất ở.",
                                              "Bị hạn chế nhiều quyền so với công dân trong nước."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích chính của việc yêu cầu công chứng, chứng thực đối với các giao dịch bất động sản là gì",
                              "options":  [
                                              "Tăng nguồn thu cho ngân sách nhà nước.",
                                              "Đảm bảo tính pháp lý, an toàn, minh bạch, hạn chế tranh chấp và tăng cường quản lý nhà nước.",
                                              "Tạo công việc cho các công chứng viên.",
                                              "Làm chậm quá trình giao dịch để các bên suy nghĩ kỹ hơn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền bề mặt (một trong các quyền khác đối với bất động sản theo BLDS 2015) bao gồm quyền khai thác những gì",
                              "options":  [
                                              "Chỉ quyền khai thác mặt đất để xây dựng.",
                                              "Chỉ quyền khai thác lòng đất.",
                                              "Quyền khai thác mặt đất, lòng đất, và khoảng không gian trên mặt đất gắn với việc sở hữu công trình xây dựng trên đất đó.",
                                              "Quyền khai thác hoa lợi, lợi tức từ bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hậu quả pháp lý trực tiếp của việc một giao dịch dân sự về bất động sản có mục đích hoặc nội dung vi phạm điều cấm của luật hoặc trái đạo đức xã hội là gì",
                              "options":  [
                                              "Giao dịch chỉ bị hạn chế hiệu lực.",
                                              "Giao dịch bị coi là vô hiệu.",
                                              "Các bên phải thỏa thuận lại nội dung.",
                                              "Chỉ bên vi phạm phải chịu trách nhiệm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp ngoại lệ nào tại Điều 129 bộ luật dân sự 2015 KHÔNG yêu cầu các bên phải thực hiện lại việc công chứng, chứng thực nếu Tòa án công nhận hiệu lực giao dịch",
                              "options":  [
                                              "Khi giao dịch được xác lập bằng lời nói nhưng các bên đã thực hiện toàn bộ nghĩa vụ.",
                                              "Khi giao dịch bằng văn bản vi phạm quy định bắt buộc về công chứng, chứng thực nhưng một hoặc các bên đã thực hiện ít nhất 2/3 nghĩa vụ.",
                                              "Khi giao dịch được xác lập qua email nhưng chưa có chữ ký điện tử.",
                                              "Khi giao dịch chỉ thiếu chữ ký của một bên nhưng bên đó đã nhận lợi ích."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giao dịch dân sự về bất động sản được xác lập do nhầm lẫn có thể bị tuyên vô hiệu khi nào",
                              "options":  [
                                              "Khi một bên nhầm lẫn về bất kỳ chi tiết nào của giao dịch.",
                                              "Khi việc nhầm lẫn làm cho một bên không đạt được mục đích của việc xác lập giao dịch, và bên kia biết hoặc phải biết về sự nhầm lẫn đó.",
                                              "Chỉ khi cả hai bên cùng nhầm lẫn về đối tượng giao dịch.",
                                              "Khi sự nhầm lẫn dẫn đến thiệt hại vật chất đáng kể."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Bộ luật dân sự 2015, trong hợp đồng mua bán bất động sản, bên bán có nghĩa vụ chịu trách nhiệm về khuyết tật của tài sản không",
                              "options":  [
                                              "Không, bên mua phải tự kiểm tra trước khi nhận.",
                                              "Có, luôn phải chịu trách nhiệm về mọi khuyết tật.",
                                              "Có, phải chịu trách nhiệm trừ khi có thỏa thuận khác hoặc bên mua biết hoặc phải biết về khuyết tật đó.",
                                              "Chỉ chịu trách nhiệm đối với khuyết tật ẩn giấu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Di chúc miệng chỉ được công nhận hợp pháp trong điều kiện nào sau đây",
                              "options":  [
                                              "Người lập di chúc minh mẫn và có ít nhất 1 người làm chứng.",
                                              "Tính mạng người lập di chúc bị cái chết đe dọa và không thể lập di chúc bằng văn bản, có ít nhất 2 người làm chứng ghi chép lại ngay và ký tên hoặc điểm chỉ",
                                              "Người lập di chúc trên 70 tuổi và không biết chữ.",
                                              "Di chúc được ghi âm và có xác nhận của người thân."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Di chúc miệng sẽ mặc nhiên bị hủy bỏ sau bao lâu kể từ ngày lập nếu người lập di chúc còn sống và minh mẫn, sáng suốt",
                              "options":  [
                                              "1 tháng.",
                                              "3 tháng.",
                                              "6 tháng.",
                                              "1 năm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công chứng viên hoặc người có thẩm quyền chứng thực tại UBND cấp xã có được phép công chứng, chứng thực di chúc nếu con của họ là người được hưởng thừa kế theo di chúc đó không",
                              "options":  [
                                              "Được phép nếu người lập di chúc đồng ý.",
                                              "Được phép nếu giá trị di sản không lớn.",
                                              "Không được phép.",
                                              "Chỉ không được phép nếu chính họ là người hưởng thừa kế."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hàng thừa kế thứ hai theo pháp luật (Điều 651 BLDS 2015) chỉ được hưởng thừa kế khi nào",
                              "options":  [
                                              "Khi không còn ai ở hàng thừa kế thứ nhất hoặc những người đó không có quyền hưởng, từ chối nhận hoặc đã chết.",
                                              "Khi tổng giá trị di sản vượt quá một mức nhất định.",
                                              "Khi di chúc chỉ định họ là người hưởng một phần di sản.",
                                              "Đáp án D"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hiệu yêu cầu Tòa án xác nhận quyền thừa kế của mình hoặc bác bỏ quyền thừa kế của người khác đối với di sản là bất động sản là bao nhiêu năm",
                              "options":  [
                                              "3 năm kể từ thời điểm mở thừa kế.",
                                              "10 năm kể từ thời điểm mở thừa kế.",
                                              "30 năm kể từ thời điểm mở thừa kế.",
                                              "Không giới hạn thời hiệu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hoa lợi, lợi tức phát sinh từ tài sản riêng của vợ hoặc chồng trong thời kỳ hôn nhân được xác định là tài sản gì, trừ khi có thỏa thuận khác",
                              "options":  [
                                              "Luôn là tài sản riêng của người có tài sản đó.",
                                              "Là tài sản chung của vợ chồng.",
                                              "Chia đôi giữa vợ và chồng.",
                                              "Thuộc sở hữu nhà nước."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào việc định đoạt tài sản riêng của vợ/chồng phải có sự đồng ý của người kia",
                              "options":  [
                                              "Khi tài sản riêng đó là bất động sản.",
                                              "Khi tài sản riêng đó có giá trị lớn.",
                                              "Khi hoa lợi, lợi tức từ tài sản riêng đó là nguồn sống duy nhất của gia đình.",
                                              "Không có trường hợp nào, tài sản riêng do người đó tự quyết định."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yếu tố nào sau đây được coi là \"lao động có thu nhập\" khi Tòa án xem xét công sức đóng góp của vợ, chồng vào việc tạo lập, duy trì tài sản chung khi ly hôn",
                              "options":  [
                                              "Chỉ công việc tạo ra tiền bạc trực tiếp.",
                                              "Lao động trong gia đình (nội trợ, chăm sóc con cái...).",
                                              "Chỉ việc đóng góp bằng tài sản riêng.",
                                              "Chỉ công việc được trả lương theo hợp đồng lao động."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giao dịch chuyển đổi quyền sử dụng đất nông nghiệp giữa các hộ gia đình, cá nhân có bắt buộc phải công chứng, chứng thực theo Luật Đất đai 2024 không",
                              "options":  [
                                              "Bắt buộc phải công chứng.",
                                              "Bắt buộc phải chứng thực tại UBND xã.",
                                              "Không bắt buộc, nhưng có thể công chứng/chứng thực theo yêu cầu.",
                                              "Chỉ bắt buộc nếu giá trị đất lớn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng thế chấp nhà ở hình thành trong tương lai cho tổ chức tín dụng có bắt buộc phải công chứng, chứng thực theo Luật Nhà ở 2023 không",
                              "options":  [
                                              "Bắt buộc phải công chứng.",
                                              "Bắt buộc phải chứng thực.",
                                              "Không bắt buộc công chứng, chứng thực.",
                                              "Chỉ bắt buộc nếu giá trị vay lớn hơn giá trị nhà."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Văn bản ủy quyền liên quan đến việc thực hiện các quyền đối với bất động sản có thể được công chứng ở đâu",
                              "options":  [
                                              "Chỉ tại tổ chức hành nghề công chứng nơi có bất động sản.",
                                              "Tại bất kỳ tổ chức hành nghề công chứng nào trên toàn quốc.",
                                              "Tại tổ chức hành nghề công chứng nơi người ủy quyền hoặc người được ủy quyền cư trú, hoặc nơi có bất động sản.",
                                              "Tại tổ chức hành nghề công chứng nơi người ủy quyền cư trú hoặc nơi có bất động sản (không bắt buộc phải là nơi đặt trụ sở của tổ chức công chứng đó)."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thỏa thuận đặt cọc để mua nhà ở hình thành trong tương lai theo Luật KD BĐS 2023 phải bao gồm nội dung gì về giá",
                              "options":  [
                                              "Không cần ghi giá, chỉ cần ghi số tiền cọc.",
                                              "Phải ghi rõ giá bán hoặc giá cho thuê mua dự kiến tại thời điểm ký thỏa thuận đặt cọc.",
                                              "Chỉ cần ghi khoảng giá tham khảo.",
                                              "Giá sẽ được xác định khi ký hợp đồng mua bán chính thức."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quy định bắt buộc thanh toán qua ngân hàng theo Điều 48 Luật KD BĐS 2023 KHÔNG áp dụng cho đối tượng nào",
                              "options":  [
                                              "Chủ đầu tư dự án bất động sản.",
                                              "Doanh nghiệp kinh doanh dịch vụ môi giới bất động sản.",
                                              "Cá nhân Kinh doanh bất động sản quy mô nhỏ hoặc bán nhà ở không nhằm mục đích kinh doanh.",
                                              "Doanh nghiệp kinh doanh sàn giao dịch bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tác động tiềm ẩn của việc áp dụng bảng giá đất hàng năm theo Luật Đất đai 2024 (từ 2026) là gì",
                              "options":  [
                                              "Luôn làm giảm chi phí sử dụng đất cho người dân và doanh nghiệp.",
                                              "Có thể làm tăng chi phí sử dụng đất, thuê đất, thuế, phí nhưng cũng đảm bảo giá trị bồi thường khi thu hồi đất sát thị trường hơn.",
                                              "Không ảnh hưởng gì đến giá giao dịch thực tế trên thị trường.",
                                              "Chỉ áp dụng cho đất nông nghiệp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật Đất đai 2024 không còn quy định \"hộ gia đình\" là đối tượng sử dụng đất mới có ý nghĩa gì",
                              "options":  [
                                              "Thu hồi lại đất đã cấp cho hộ gia đình trước đây.",
                                              "Đơn giản hóa chủ thể quan hệ pháp luật đất đai cho phù hợp với BLDS, các quyền đã cấp trước đó sẽ xử lý theo quy định chuyển tiếp.",
                                              "Buộc các thành viên hộ gia đình phải tách sổ đỏ riêng.",
                                              "Không có ý nghĩa gì quan trọng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Người gốc Việt Nam định cư ở nước ngoài (không còn quốc tịch Việt Nam) có được phép đầu tư xây dựng nhà ở để bán, cho thuê theo Luật Đất đai 2024 không",
                              "options":  [
                                              "Không, chỉ công dân Việt Nam định cư ở nước ngoài mới được.",
                                              "Có, được phép đầu tư xây dựng nhà ở, công trình xây dựng để bán, cho thuê, cho thuê mua và đầu tư hạ tầng kỹ thuật để chuyển nhượng, cho thuê QSDĐ.",
                                              "Chỉ được mua nhà ở để ở.",
                                              "Chỉ được đầu tư vào dự án nhà ở xã hội."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xác định quyền sử dụng đất của dự án chung cư (ổn định lâu dài hay có thời hạn) thuộc phạm vi điều chỉnh chính của luật nào",
                              "options":  [
                                              "Luật Nhà ở 2023.",
                                              "Luật kinh doanh bất động sản 2023.",
                                              "Luật Xây dựng.",
                                              "Luật Đất đai 2024."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một cá nhân mua căn hộ chung cư sau khi kết hôn và không dùng tài sản riêng, cũng không được tặng cho riêng hay thừa kế riêng, thì việc thế chấp căn hộ này sau đó cần sự đồng ý của ai",
                              "options":  [
                                              "Chỉ cần người đứng tên trên hợp đồng mua bán.",
                                              "Chỉ cần người đứng tên trên Giấy chứng nhận (nếu đã có).",
                                              "Cần sự thỏa thuận bằng văn bản của cả hai vợ chồng.",
                                              "Chỉ cần thông báo cho người vợ/chồng còn lại."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hợp đồng cho thuê nhà ở với thời hạn 5 tháng có bắt buộc phải công chứng hoặc chứng thực không",
                              "options":  [
                                              "Bắt buộc công chứng.",
                                              "Bắt buộc chứng thực.",
                                              "Không bắt buộc, trừ khi các bên có nhu cầu.",
                                              "Bắt buộc nếu giá thuê trên 10 triệu/tháng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi phân chia di sản là bất động sản theo pháp luật, nếu hàng thừa kế thứ nhất còn đầy đủ (vợ, 2 con), thì những người ở hàng thừa kế thứ hai (ví dụ: anh trai của người chết) có được hưởng thừa kế không",
                              "options":  [
                                              "Có, được chia một phần nhỏ hơn.",
                                              "Có, nếu được những người hàng thứ nhất đồng ý.",
                                              "Không, vì những người ở hàng sau chỉ được hưởng nếu không còn ai ở hàng trước.",
                                              "Chỉ được hưởng nếu di sản có giá trị rất lớn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một người lập di chúc truất quyền hưởng di sản của người con chưa thành niên. Di chúc này có hợp pháp về mặt nội dung truất quyền không",
                              "options":  [
                                              "Có, người lập di chúc có toàn quyền định đoạt.",
                                              "Không, vì con chưa thành niên thuộc diện người thừa kế không phụ thuộc vào nội dung di chúc nên không thể bị truất quyền hoàn toàn (vẫn được hưởng 2/3 suất theo pháp luật).",
                                              "Chỉ hợp pháp nếu người con đó hư hỏng, bất hiếu.",
                                              "Chỉ hợp pháp nếu người con đó đã có tài sản riêng đủ sống."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu hợp đồng thế chấp bất động sản đã được công chứng nhưng chưa đăng ký giao dịch bảo đảm, thì hiệu lực của hợp đồng này như thế nào",
                              "options":  [
                                              "Vô hiệu hoàn toàn.",
                                              "Có hiệu lực giữa các bên thế chấp và nhận thế chấp, nhưng chưa có hiệu lực đối kháng với người thứ ba.",
                                              "Chỉ có hiệu lực khi có tranh chấp xảy ra.",
                                              "Chỉ có hiệu lực về mặt hình thức."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công ty ký hợp đồng đặt cọc mua bất động sản với bên bán là cá nhân. Sau đó cá nhân bán cho người khác. Công ty có thể đòi lại tài sản hoặc kiện được không",
                              "options":  [
                                              "Không vì hợp đồng đặt cọc không phải hợp đồng chính thức",
                                              "Có, vì cá nhân đã vi phạm cam kết đặt cọc",
                                              "Không, vì tài sản đã thuộc về người khác",
                                              "Có, nếu có thỏa thuận rõ ràng về hủy đặt cọc"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ6 Luật Công chứng.docx",
        "topic":  "CĐ6 Luật Công chứng",
        "questions":  [
                          {
                              "question":  "Theo Luật Công chứng 2024, tổ chức hành nghề công chứng bao gồm những loại hình nào",
                              "options":  [
                                              "Chỉ có Phòng Công chứng.",
                                              "Chỉ có Văn phòng công chứng.",
                                              "Phòng Công chứng và Văn phòng công chứng.",
                                              "Văn phòng công chứng và Công ty luật có chức năng công chứng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Công chứng 2024 (hiệu lực 01/07/2025) có điểm mới nào về loại hình hoạt động của Văn phòng công chứng (VPCC)",
                              "options":  [
                                              "Chỉ cho phép loại hình công ty hợp danh.",
                                              "Chỉ cho phép loại hình doanh nghiệp tư nhân.",
                                              "Cho phép cả loại hình công ty hợp danh và doanh nghiệp tư nhân.",
                                              "Bắt buộc VPCC phải chuyển đổi thành Phòng Công chứng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguyên tắc cơ bản nào KHÔNG phải là nguyên tắc hành nghề công chứng theo Luật Công chứng 2024",
                              "options":  [
                                              "Tuân thủ Hiến pháp và pháp luật.",
                                              "Khách quan, trung thực.",
                                              "Ưu tiên lợi ích của bên yêu cầu công chứng có tiềm lực tài chính mạnh hơn.",
                                              "Chịu trách nhiệm trước pháp luật về việc hành nghề công chứng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Văn bản công chứng có giá trị pháp lý như thế nào",
                              "options":  [
                                              "Chỉ có giá trị tham khảo.",
                                              "Có hiệu lực thi hành đối với các bên và có giá trị chứng cứ cao.",
                                              "Cần phải được Tòa án phê duyệt mới có hiệu lực.",
                                              "Có giá trị tương đương văn bản chứng thực."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điểm khác biệt cơ bản nhất về trách nhiệm giữa công chứng viên khi công chứng hợp đồng và người thực hiện chứng thực khi chứng thực hợp đồng là gì",
                              "options":  [
                                              "Công chứng viên chịu trách nhiệm về cả nội dung và hình thức, người chứng thực chỉ chịu trách nhiệm về hình thức.",
                                              "Người chứng thực chịu trách nhiệm cao hơn về nội dung.",
                                              "Cả hai đều chỉ chịu trách nhiệm về hình thức ký kết.",
                                              "Công chứng viên không chịu trách nhiệm nếu các bên cung cấp thông tin sai."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây vẫn bắt buộc phải công chứng hoặc chứng thực theo quy định của Luật Đất đai 2024",
                              "options":  [
                                              "Hợp đồng cho thuê quyền sử dụng đất giữa hai doanh nghiệp.",
                                              "Hợp đồng chuyển nhượng quyền sử dụng đất mà một bên là doanh nghiệp kinh doanh bất động sản.",
                                              "Văn bản về thừa kế quyền sử dụng đất giữa các cá nhân.",
                                              "Hợp đồng chuyển đổi quyền sử dụng đất nông nghiệp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc nới lỏng yêu cầu công chứng bắt buộc đối với giao dịch bất động sản khi có doanh nghiệp bất động sản tham gia tiềm ẩn rủi ro gì",
                              "options":  [
                                              "Giảm bớt thủ tục hành chính cho doanh nghiệp.",
                                              "Bên yếu thế (cá nhân, Doanh nghiệp nhỏ) có thể gặp bất lợi trong hợp đồng do thiếu sự kiểm soát nội dung từ công chứng viên.",
                                              "Tăng chi phí giao dịch cho các bên",
                                              "Gây khó khăn cho công chứng viên trong việc hành nghề."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp kinh doanh bất động sản có thể lựa chọn công chứng hợp đồng, giao dịch bất động sản tại tổ chức hành nghề công chứng nào",
                              "options":  [
                                              "Chỉ tại Phòng Công chứng nơi doanh nghiệp đặt trụ sở chính.",
                                              "Chỉ tại Văn phòng công chứng nơi có bất động sản",
                                              "Tại bất kỳ Phòng Công chứng hoặc Văn phòng công chứng nào trên toàn quốc.",
                                              "Tại Phòng Công chứng hoặc Văn phòng công chứng trong phạm vi tỉnh/thành phố nơi có bất động sản."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào công chứng viên được phép công chứng giao dịch bất động sản ngoài phạm vi tỉnh/thành phố nơi đặt trụ sở",
                              "options":  [
                                              "Hợp đồng mua bán nhà ở giá trị lớn.",
                                              "Hợp đồng thế chấp quyền sử dụng đất.",
                                              "Văn bản ủy quyền liên quan đến việc thực hiện quyền đối với bất động sản.",
                                              "Hợp đồng góp vốn bằng bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hạn công chứng hợp đồng, giao dịch thông thường không quá bao nhiêu ngày kể từ ngày nhận đủ hồ sơ hợp lệ?",
                              "options":  [
                                              "Không quá 01 ngày làm việc.",
                                              "Không quá 02 ngày làm việc.",
                                              "Không quá 05 ngày làm việc.",
                                              "Không quá 10 ngày làm việc."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi doanh nghiệp công chứng hợp đồng, người ký thay mặt doanh nghiệp nếu không phải người đại diện theo pháp luật cần có giấy tờ gì",
                              "options":  [
                                              "Thẻ nhân viên của doanh nghiệp.",
                                              "Giấy giới thiệu của doanh nghiệp.",
                                              "Văn bản ủy quyền hợp lệ (có thể cần công chứng/chứng thực).",
                                              "Giấy xác nhận tình trạng hôn nhân."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với công ty cổ phần, việc công chứng hợp đồng chuyển nhượng bất động sản có giá trị lớn có thể cần thêm giấy tờ gì từ doanh nghiệp",
                              "options":  [
                                              "Báo cáo tài chính quý gần nhất.",
                                              "Quyết định hoặc Nghị quyết của Đại hội đồng cổ đông/Hội đồng quản trị phê duyệt giao dịch.",
                                              "Danh sách cổ đông sáng lập.",
                                              "Biên bản họp công đoàn công ty."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hồ sơ pháp lý quan trọng nào chứng minh nhà ở hình thành trong tương lai đủ điều kiện bán mà chủ đầu tư cần cung cấp khi công chứng Hợp đồng mua bán",
                              "options":  [
                                              "Giấy chứng nhận đăng ký doanh nghiệp của chủ đầu tư.",
                                              "Biên bản nghiệm thu đã hoàn thành xong phần móng của tòa nhà.",
                                              "Hợp đồng hợp tác đầu tư với nhà thầu xây dựng.",
                                              "Chứng thư thẩm định giá bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc chuyển nhượng hợp đồng mua bán nhà ở hình thành trong tương lai giữa cá nhân (không phải DN kinh doanh bất động sản) có bắt buộc phải công chứng hoặc chứng thực không",
                              "options":  [
                                              "Không bắt buộc.",
                                              "Chỉ bắt buộc nếu giá trị trên 1 tỷ đồng.",
                                              "Bắt buộc phải công chứng hoặc chứng thực.",
                                              "Chỉ cần xác nhận của chủ đầu tư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp có thu nhập từ chuyển nhượng bất động sản phải nộp loại thuế nào",
                              "options":  [
                                              "Chỉ Thuế Giá trị gia tăng (GTGT).",
                                              "Chỉ Thuế Thu nhập doanh nghiệp (TNDN).",
                                              "Cả Thuế GTGT và Thuế TNDN (nếu thuộc đối tượng chịu thuế).",
                                              "Chỉ Lệ phí trước bạ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuế suất Thuế Thu nhập doanh nghiệp đối với hoạt động chuyển nhượng Bất động sản hiện hành là bao nhiêu",
                              "options":  [
                                              "10%",
                                              "20%",
                                              "25%",
                                              "0.5%"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lệ phí công chứng hợp đồng kinh doanh Bất động sản được tính dựa trên cơ sở nào",
                              "options":  [
                                              "Diện tích Bất động sản.",
                                              "Giá trị tài sản hoặc giá trị hợp đồng/giao dịch theo biểu phí quy định.",
                                              "Thỏa thuận tự do giữa các bên và công chứng viên.",
                                              "Số lượng trang của hợp đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "“Thù lao công chứng\" là gì",
                              "options":  [
                                              "Tên gọi khác của Lệ phí công chứng.",
                                              "Khoản tiền nộp cho cơ quan thuế.",
                                              "Khoản tiền thỏa thuận trả cho công chứng viên đối với các công việc ngoài quy trình chuẩn (soạn thảo theo yêu cầu, công chứng ngoài trụ sở...).",
                                              "Khoản tiền phạt nếu hồ sơ công chứng không hợp lệ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Rủi ro lớn nhất khi doanh nghiệp chọn chứng thực hợp đồng thay vì công chứng (khi được lựa chọn) là gì",
                              "options":  [
                                              "Chi phí chứng thực cao hơn.",
                                              "Thủ tục chứng thực phức tạp hơn.",
                                              "Hợp đồng có thể chứa nội dung bất lợi hoặc không hợp pháp mà không được phát hiện.",
                                              "Khó tìm được UBND xã để thực hiện."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điểm mới quan trọng nhất của Luật Công chứng 2024 là gì",
                              "options":  [
                                              "Tăng lệ phí công chứng.",
                                              "Bỏ hoàn toàn Văn phòng công chứng.",
                                              "Quy định về công chứng điện tử.",
                                              "Yêu cầu công chứng viên phải là Thẩm phán."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công chứng điện tử trực tuyến (theo Luật Công chứng 2024) cho phép điều gì",
                              "options":  [
                                              "Các bên chỉ cần gửi hồ sơ qua email cho công chứng viên.",
                                              "Các bên không cần có mặt tại cùng địa điểm mà giao kết qua phương tiện trực tuyến dưới sự chứng kiến của công chứng viên.",
                                              "Công chứng viên tự động tạo hợp đồng bằng phần mềm.",
                                              "Chỉ áp dụng cho hợp đồng có giá trị dưới 100 triệu đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật Công chứng 2024 có thay đổi gì về việc công chứng bản dịch",
                              "options":  [
                                              "Cho phép công chứng viên tự dịch và công chứng.",
                                              "Tăng phí công chứng bản dịch.",
                                              "Công chứng viên không còn công chứng bản dịch mà chỉ chứng thực chữ ký người dịch.",
                                              "Yêu cầu bản dịch phải được Đại sứ quán xác nhận trước khi công chứng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lợi ích chính của công chứng điện tử đối với doanh nghiệp bất động sản là gì",
                              "options":  [
                                              "Giảm yêu cầu về năng lực tài chính của doanh nghiệp.",
                                              "Tiết kiệm thời gian, chi phí đi lại, tăng tốc độ giao dịch.",
                                              "Miễn hoàn toàn phí công chứng.",
                                              "Không cần phải nộp thuế thu nhập doanh nghiệp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thách thức lớn nhất khi triển khai công chứng điện tử là gì",
                              "options":  [
                                              "Thiếu công chứng viên biết sử dụng máy tính.",
                                              "Đảm bảo an ninh mạng, bảo mật dữ liệu và xác thực chính xác người tham gia trực tuyến.",
                                              "Người dân không muốn sử dụng công nghệ.",
                                              "Chi phí giấy và mực in tăng cao."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "\"Công chứng treo\" là thuật ngữ thường dùng để chỉ tình trạng nào",
                              "options":  [
                                              "Công chứng hợp đồng trên tầng cao nhất của tòa nhà.",
                                              "Hồ sơ công chứng bị tạm dừng do thiếu giấy tờ.",
                                              "Các bên đã ký hợp đồng nhưng công chứng viên chưa ký/đóng dấu chờ hoàn thiện thủ tục/giấy tờ.",
                                              "Hợp đồng được công chứng bằng mực tàng hình."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Rủi ro nào thường gặp nhất đối với hợp đồng đặt cọc mua BĐS, kể cả khi có công chứng",
                              "options":  [
                                              "Công chứng viên thu phí đặt cọc quá cao.",
                                              "Bên bán không giao BĐS đúng hạn.",
                                              "Đặt cọc trá hình huy động vốn cho dự án chưa đủ điều kiện hoặc đặt cọc qua môi giới không ràng buộc được chủ đầu tư.",
                                              "Hợp đồng đặt cọc quá dài."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình thức giải quyết tranh chấp nào yêu cầu phải có thỏa thuận trước của các bên",
                              "options":  [
                                              "Tòa án nhân dân.",
                                              "Trọng tài thương mại.",
                                              "Hòa giải tại UBND xã.",
                                              "Khiếu nại lên Sở Tư pháp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ưu điểm nổi bật của việc giải quyết tranh chấp bằng Trọng tài thương mại so với Tòa án là gì",
                              "options":  [
                                              "Chi phí luôn rẻ hơn.",
                                              "Thủ tục nhanh chóng, linh hoạt, bảo mật, trọng tài viên có chuyên môn cao.",
                                              "Phán quyết có thể bị kháng cáo lên Tòa án cấp cao.",
                                              "Không cần nộp bất kỳ khoản phí nào."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhược điểm của giải quyết tranh chấp bằng Trọng tài thương mại là gì",
                              "options":  [
                                              "Thời gian giải quyết quá dài.",
                                              "Phán quyết không có giá trị thi hành.",
                                              "Phải có thỏa thuận trọng tài thương mại; phạm vi áp dụng còn hạn chế, một số loại tranh chấp không được giải quyết bằng trọng tài; phán quyết trọng tài có thể bị hủy bởi tòa án",
                                              "Chỉ giải quyết được tranh chấp giữa các cá nhân."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao doanh nghiệp nên cân nhắc đưa điều khoản lựa chọn Trọng tài thương mại vào hợp đồng kinh doanh BĐS",
                              "options":  [
                                              "Để thể hiện sự giàu có của doanh nghiệp.",
                                              "Để có phương thức giải quyết tranh chấp nhanh chóng, bảo mật, chuyên môn cao khi cần thiết.",
                                              "Vì Tòa án không giải quyết tranh chấp BĐS.",
                                              "Để tránh phải công chứng hợp đồng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi một doanh nghiệp Việt Nam giao dịch BĐS với đối tác từ Mỹ (Common Law), doanh nghiệp cần lưu ý điều gì",
                              "options":  [
                                              "Vai trò của công chứng viên Mỹ rất quan trọng trong việc đảm bảo nội dung hợp đồng.",
                                              "Vai trò của luật sư đại diện cho mỗi bên là then chốt trong thẩm định và đàm phán.",
                                              "Không cần phải ký hợp đồng bằng văn bản.",
                                              "Chỉ cần tuân theo pháp luật Việt Nam."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan nào có trách nhiệm ban hành quy định chi tiết về quy trình công chứng điện tử theo Luật Công chứng 2024",
                              "options":  [
                                              "Tòa án nhân dân tối cao.",
                                              "Bộ Thông tin và Truyền thông.",
                                              "Chính phủ và các Bộ ngành liên quan (chủ yếu là Bộ Tư pháp).",
                                              "Hiệp hội Công chứng viên Việt Nam."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích của việc xây dựng Cơ sở dữ liệu công chứng quốc gia là gì",
                              "options":  [
                                              "Để công chứng viên tra cứu thông tin cá nhân của khách hàng.",
                                              "Để thu phí sử dụng dữ liệu từ người dân.",
                                              "Để phục vụ tra cứu, ngăn chặn giao dịch bất hợp pháp (giao dịch hai lần, tài sản bị ngăn chặn), tăng an toàn giao dịch.",
                                              "Để thay thế hoàn toàn vai trò của công chứng viên."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, việc công chứng Hợp đồng chuyển nhượng quyền sử dụng đất giữa hai doanh nghiệp, trong đó chỉ có một doanh nghiệp có chức năng kinh doanh Bất động sản, được quy định như thế nào",
                              "options":  [
                                              "Bắt buộc phải công chứng.",
                                              "Bắt buộc phải chứng thực.",
                                              "Không bắt buộc, theo yêu cầu của các bên.",
                                              "Chỉ bắt buộc nếu giá trị trên 100 tỷ đồng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Yêu cầu về  thời gian đào tạo nghề công chứng trong Luật Công chứng 2024 như thế nào đối với các luật sư có kinh nghiệm",
                              "options":  [
                                              "Luật sư từ 5 năm kinh nghiệm trở lên vẫn được miễn đào tạo như trước.",
                                              "Luật sư từ 10 năm kinh nghiệm mới được miễn đào tạo.",
                                              "Luật sư có kinh nghiệm hành nghề từ đủ 5 năm trở lên vẫn phải tham gia khóa đào tạo nghề công chứng 6 tháng.",
                                              "Chỉ cần tham gia khóa bồi dưỡng ngắn hạn thay vì đào tạo."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi công chứng Hợp đồng chuyển nhượng dự án BĐS, văn bản chấp thuận của cơ quan nhà nước có thẩm quyền cần được cung cấp ở giai đoạn nào",
                              "options":  [
                                              "Sau khi đã ký hợp đồng công chứng.",
                                              "Trước khi các bên ký kết hợp đồng công chứng.",
                                              "Chỉ cần khi làm thủ tục đăng ký biến động.",
                                              "Không cần thiết nếu các bên tự thỏa thuận."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Giá trị pháp lý của văn bản công chứng điện tử theo Luật Công chứng 2024 so với văn bản công chứng giấy là như thế nào",
                              "options":  [
                                              "Thấp hơn văn bản giấy.",
                                              "Cao hơn văn bản giấy.",
                                              "Tương đương văn bản giấy.",
                                              "Chỉ có giá trị khi được in ra và đóng dấu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật Công chứng 2024 quy định rõ trách nhiệm bồi thường của công chứng viên ngay cả khi đã miễn nhiệm/nghỉ hưu mang lại lợi ích gì cho doanh nghiệp",
                              "options":  [
                                              "Giảm phí công chứng.",
                                              "Tăng cường sự bảo vệ quyền lợi cho người bị thiệt hại, tổ chức có liên quan nếu phát hiện sai sót của công chứng viên gây thiệt hại sau này",
                                              "Cho phép doanh nghiệp kiện công chứng viên dễ dàng hơn.",
                                              "Buộc công chứng viên phải mua bảo hiểm đắt tiền hơn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện tiên quyết để có thể giải quyết tranh chấp hợp đồng kinh doanh BĐS bằng Trọng tài thương mại là gì",
                              "options":  [
                                              "Giá trị tranh chấp phải trên 10 tỷ đồng.",
                                              "Các bên phải có quốc tịch khác nhau.",
                                              "Các bên phải có thỏa thuận trọng tài hợp lệ.",
                                              "Tranh chấp phải liên quan đến yếu tố nước ngoài."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xét xử tại Trọng tài thương mại có tính chất công khai hay không công khai",
                              "options":  [
                                              "Luôn luôn công khai.",
                                              "Luôn luôn không công khai.",
                                              "Không công khai, trừ trường hợp các bên có thỏa thuận khác.",
                                              "Công khai, trừ trường hợp liên quan đến bí mật nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc Luật Công chứng 2024 giao Chính phủ quy định chi tiết Danh mục giao dịch bắt buộc công chứng có thể dẫn đến điều gì",
                              "options":  [
                                              "Danh mục sẽ không bao giờ được ban hành.",
                                              "Tính ổn định và dự đoán cao hơn cho doanh nghiệp.",
                                              "Tạo ra sự rõ ràng, dễ áp dụng khi có danh mục giao dịch bất động sản bắt buộc công chứng, nhưng cũng có thể dễ lạc hậu vì các giao dịch bất động sản ngày càng đa dạng, phong phú",
                                              "Giảm vai trò của Quốc hội trong việc lập pháp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hạn chế của việc công chứng trong việc đảm bảo chất lượng thực tế của BĐS hình thành trong tương lai là gì",
                              "options":  [
                                              "Công chứng viên không kiểm tra hồ sơ pháp lý.",
                                              "Công chứng viên chỉ chứng nhận tính hợp pháp của giao dịch trên giấy tờ tại thời điểm công chứng, không thể đảm bảo chất lượng xây dựng thực tế hoặc việc chủ đầu tư thực hiện đúng cam kết sau này.",
                                              "Phí công chứng quá cao làm tăng giá BĐS.",
                                              "Hợp đồng công chứng không có giá trị pháp lý đối với BĐS hình thành trong tương lai."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc xác định \"giá trị tài sản hoặc giá trị hợp đồng\" để tính phí công chứng đối với hợp đồng mua bán bất động sản thường dựa trên cơ sở nào",
                              "options":  [
                                              "Giá do công chứng viên tự ước tính.",
                                              "Giá do các bên thỏa thuận ghi trong hợp đồng, nhưng không được thấp hơn giá do UBND cấp tỉnh quy định (nếu có).",
                                              "Giá thị trường do tổ chức thẩm định giá độc lập xác định.",
                                              "Giá trị còn lại của tài sản sau khấu hao."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hậu quả pháp lý chính nếu một hợp đồng kinh doanh BĐS thuộc trường hợp bắt buộc công chứng nhưng các bên không thực hiện công chứng",
                              "options":  [
                                              "Hợp đồng chỉ có hiệu lực một phần.",
                                              "Hợp đồng có thể bị Tòa án tuyên vô hiệu do vi phạm về hình thức.",
                                              "Các bên chỉ bị phạt hành chính.",
                                              "Hợp đồng vẫn có hiệu lực nhưng không được đăng ký biến động."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi thực hiện công chứng điện tử trực tuyến, làm thế nào để đảm bảo tính toàn vẹn của văn bản điện tử sau khi ký",
                              "options":  [
                                              "In ra giấy và ký nháy.",
                                              "Sử dụng chữ ký số và dịch vụ cấp dấu thời gian (timestamping).",
                                              "Gửi email xác nhận giữa các bên.",
                                              "Lưu trữ trên nhiều thiết bị khác nhau."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp nào giúp giảm thiểu rủi ro cho khách hàng khi ký Hợp đồng đặt cọc mua BĐS hình thành trong tương lai",
                              "options":  [
                                              "Yêu cầu công chứng Hợp đồng đặt cọc với giá trị cao.",
                                              "Chỉ ký Hợp đồng đặt cọc trực tiếp với chủ đầu tư và yêu cầu xem hồ sơ pháp lý dự án chứng minh đủ điều kiện huy động vốn/bán hàng.",
                                              "Chuyển tiền đặt cọc qua tài khoản của công chứng viên.",
                                              "Yêu cầu môi giới cam kết bằng văn bản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một Văn phòng công chứng gây thiệt hại cho doanh nghiệp do lỗi của công chứng viên, trách nhiệm bồi thường thuộc về ai",
                              "options":  [
                                              "Chỉ công chứng viên gây ra lỗi.",
                                              "Văn phòng công chứng nơi công chứng viên đó hành nghề (và tổ chức này có thể yêu cầu công chứng viên hoàn trả).",
                                              "Sở Tư pháp nơi VPCC đăng ký hoạt động.",
                                              "Hiệp hội công chứng viên Việt Nam."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hòa giải thành trong quá trình tố tụng trọng tài thương mại có giá trị pháp lý như thế nào",
                              "options":  [
                                              "Chỉ có giá trị tham khảo cho các bên.",
                                              "Có giá trị như một thỏa thuận dân sự thông thường.",
                                              "Quyết định công nhận hòa giải thành có giá trị như phán quyết trọng tài",
                                              "Cần phải được Tòa án phê duyệt mới có hiệu lực."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Công chứng 2024, Chính phủ sẽ quy định Danh mục các giao dịch bắt buộc công chứng dựa trên tiêu chí nào",
                              "options":  [
                                              "Giá trị giao dịch.",
                                              "Loại hình tài sản giao dịch.",
                                              "Tính chất quan trọng, đòi hỏi mức độ an toàn pháp lý cao của giao dịch.",
                                              "Số lượng các bên tham gia giao dịch."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc công chứng Hợp đồng góp vốn bằng BĐS giữa một doanh nghiệp và một cá nhân có bắt buộc theo Luật Đất đai 2024 không",
                              "options":  [
                                              "Bắt buộc.",
                                              "Không bắt buộc nếu doanh nghiệp là doanh nghiệp kinh doanh bất động sản..",
                                              "Không bắt buộc trong mọi trường hợp.",
                                              "Chỉ bắt buộc nếu cá nhân góp vốn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ7 Luật Doanh nghiệp.docx",
        "topic":  "CĐ7 Luật Doanh nghiệp",
        "questions":  [
                          {
                              "question":  "Hoạt động Kinh doanh bất động sản (BĐS) tại Việt Nam chịu sự điều chỉnh của những luật cốt lõi nào?",
                              "options":  [
                                              "Chỉ Luật kinh doanh bất động sản.",
                                              "Luật kinh doanh bất động sản, Luật Doanh nghiệp, Luật Đầu tư, Luật Đất đai, Luật Nhà ở.",
                                              "Chỉ Luật Đất đai và Luật Nhà ở.",
                                              "Luật Doanh nghiệp và Luật Đầu tư."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vai trò chính của Văn bản hợp nhất (VBHN) trong hệ thống pháp luật BĐS là gì?",
                              "options":  [
                                              "Thay thế hoàn toàn văn bản gốc khi áp dụng pháp luật.",
                                              "Tổng hợp nội dung luật gốc và luật sửa đổi, giúp tra cứu thuận tiện hơn.",
                                              "Chỉ dành cho các luật sư tham khảo.",
                                              "Có giá trị pháp lý cao hơn luật gốc."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật nào quy định cụ thể về các loại Bất động sản được đưa vào kinh doanh, điều kiện đối với tổ chức, cá nhân kinh doanh bất động sản?",
                              "options":  [
                                              "Luật Doanh nghiệp 2020.",
                                              "Luật Đầu tư 2020.",
                                              "Luật kinh doanh bất động sản 2023.",
                                              "Luật Đất đai 2024."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật nào là nền tảng pháp lý cho việc thành lập và vận hành của hầu hết các chủ thể kinh doanh Bất động sản?",
                              "options":  [
                                              "Luật Nhà ở 2023.",
                                              "Luật Đất đai 2024.",
                                              "Luật kinh doanh bất động sản 2023.",
                                              "Luật Doanh nghiệp 2020."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản 2023, yêu cầu bắt buộc đối với tổ chức, cá nhân khi kinh doanh BĐS (trừ trường hợp quy mô nhỏ) là gì?",
                              "options":  [
                                              "Chỉ cần có vốn.",
                                              "Phải thành lập doanh nghiệp hoặc hợp tác xã/liên hiệp HTX và đăng ký ngành nghề kinh doanh bất động sản.",
                                              "Chỉ cần đăng ký thuế cá nhân.",
                                              "Phải là nhà đầu tư nước ngoài."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Loại hình doanh nghiệp nào mà thành viên chịu trách nhiệm hữu hạn trong phạm vi vốn góp và không được phát hành cổ phần?",
                              "options":  [
                                              "Công ty Cổ phần.",
                                              "Doanh nghiệp Tư nhân.",
                                              "Công ty Hợp danh.",
                                              "Công ty Trách nhiệm hữu hạn"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Loại hình doanh nghiệp nào phù hợp nhất cho các dự án BĐS quy mô lớn, cần huy động vốn từ đông đảo công chúng qua thị trường chứng khoán?",
                              "options":  [
                                              "Doanh nghiệp Tư nhân.",
                                              "Công ty TNHH một thành viên.",
                                              "Công ty Cổ phần.",
                                              "Công ty Hợp danh."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Loại hình doanh nghiệp nào có chủ sở hữu chịu trách nhiệm bằng toàn bộ tài sản của mình (trách nhiệm vô hạn) và không có tư cách pháp nhân?",
                              "options":  [
                                              "Công ty Cổ phần.",
                                              "Công ty TNHH.",
                                              "Doanh nghiệp Tư nhân.",
                                              "Công ty Hợp danh (đối với thành viên góp vốn)."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Loại hình Công ty Hợp danh có đặc điểm gì về trách nhiệm của thành viên?",
                              "options":  [
                                              "Tất cả thành viên đều chịu trách nhiệm hữu hạn.",
                                              "Tất cả thành viên đều chịu trách nhiệm vô hạn.",
                                              "Thành viên hợp danh chịu trách nhiệm vô hạn, thành viên góp vốn chịu trách nhiệm hữu hạn.",
                                              "Thành viên hợp danh chịu trách nhiệm hữu hạn, thành viên góp vốn chịu trách nhiệm vô hạn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Luật kinh doanh bất động sản 2023 ghi nhận chủ thể nào, bên cạnh doanh nghiệp, được phép kinh doanh BĐS?",
                              "options":  [
                                              "Chỉ tổ chức phi chính phủ.",
                                              "Hộ kinh doanh cá thể.",
                                              "Hợp tác xã, liên hiệp hợp tác xã.",
                                              "Quỹ đầu tư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện về năng lực tài chính đối với doanh nghiệp kinh doanh bất động sản thông qua dự án theo Luật kinh doanh bất động sản 2023 và NĐ 96/2024 là gì?",
                              "options":  [
                                              "Vốn pháp định tối thiểu 20 tỷ đồng.",
                                              "Chỉ cần có lãi trong 3 năm gần nhất.",
                                              "Vốn chủ sở hữu tối thiểu bằng 15%-20% tổng vốn đầu tư dự án và kiểm soát tỷ lệ dư nợ trên vốn chủ sở hữu.",
                                              "Không yêu cầu về vốn."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan nào có thẩm quyền cấp Giấy chứng nhận đăng ký doanh nghiệp (GCNĐKDN)?",
                              "options":  [
                                              "Ủy ban nhân dân cấp xã.",
                                              "Bộ Tài chính.",
                                              "Phòng Đăng ký kinh doanh thuộc Sở Tài chính.",
                                              "Cơ quan thuế."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sau khi được cấp Giấy chứng nhận đăng ký doanh nghiệp, doanh nghiệp có nghĩa vụ gì tiếp theo liên quan đến công bố thông tin?",
                              "options":  [
                                              "Không cần làm gì thêm.",
                                              "Thông báo trên báo giấy địa phương.",
                                              "Thông báo công khai nội dung đăng ký trên Cổng thông tin quốc gia về đăng ký doanh nghiệp trong 30 ngày.",
                                              "Chỉ cần thông báo cho cơ quan thuế."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hồ sơ đăng ký thành lập công ty cổ phần cần có những giấy tờ chính nào?",
                              "options":  [
                                              "Chỉ cần Giấy đề nghị đăng ký và Điều lệ.",
                                              "Giấy đề nghị đăng ký, Điều lệ công ty, Danh sách cổ đông sáng lập, Bản sao giấy tờ pháp lý của cổ đông và người đại diện theo pháp luật.",
                                              "Chỉ cần danh sách cổ đông và giấy tờ tùy thân.",
                                              "Chỉ cần Điều lệ và giấy ủy quyền."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi đăng ký ngành, nghề kinh doanh, doanh nghiệp phải tuân thủ hệ thống nào?",
                              "options":  [
                                              "Hệ thống tiêu chuẩn ISO.",
                                              "Hệ thống ngành kinh tế Việt Nam (VSIC 2018).",
                                              "Danh mục do Phòng Đăng ký kinh doanh tự quy định.",
                                              "Danh mục do doanh nghiệp tự đặt ra."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thủ tục nào theo Luật Đầu tư 2020 thường áp dụng cho các dự án BĐS quy mô lớn?",
                              "options":  [
                                              "Chỉ cần xin Giấy phép xây dựng.",
                                              "Chấp thuận chủ trương đầu tư.",
                                              "Chỉ cần đăng ký kinh doanh.",
                                              "Chỉ cần thẩm định giá đất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nguồn vốn nào được coi là nền tảng, thể hiện năng lực tài chính thực sự của chủ đầu tư dự án BĐS?",
                              "options":  [
                                              "Vốn vay ngân hàng.",
                                              "Vốn huy động từ khách hàng.",
                                              "Vốn chủ sở hữu (VCSH).",
                                              "Vốn phát hành trái phiếu."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công ty cổ phần có thể lựa chọn những mô hình tổ chức quản lý nào theo Luật Doanh nghiệp 2020?",
                              "options":  [
                                              "Chỉ có mô hình bao gồm ĐHĐCĐ, HĐQT, Giám đốc/TGĐ.",
                                              "Chỉ có mô hình bao gồm ĐHĐCĐ, HĐQT, Ban Kiểm soát, Giám đốc/TGĐ.",
                                              "Một trong hai mô hình: (1) Có Ban Kiểm soát hoặc (2) Không có Ban Kiểm soát nhưng HĐQT phải có thành viên độc lập và Ủy ban kiểm toán.",
                                              "Chỉ có mô hình do chủ tịch HĐQT quyết định."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp kinh doanh bất động sản phải công khai thông tin trên những kênh nào?",
                              "options":  [
                                              "Chỉ trên website của doanh nghiệp.",
                                              "Chỉ tại trụ sở Ban quản lý dự án.",
                                              "Đồng thời trên Hệ thống thông tin về nhà ở và thị trường BĐS của Bộ Xây dựng và trang thông tin điện tử của doanh nghiệp (và tại trụ sở BQLDA/sàn giao dịch nếu có).",
                                              "Chỉ trên báo chí trung ương."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện nào sau đây là bắt buộc đối với nhà ở, công trình xây dựng có sẵn được đưa vào kinh doanh?",
                              "options":  [
                                              "Phải là công trình mới xây.",
                                              "Phải có Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất (GCN).",
                                              "Không cần đảm bảo phòng cháy chữa cháy.",
                                              "Có thể đang trong tình trạng tranh chấp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lý do chính đằng sau việc Luật kinh doanh bất động sản 2023 bắt buộc thành lập doanh nghiệp/HTX khi kinh doanh bất động sản (trừ quy mô nhỏ) là gì?",
                              "options":  [
                                              "Tăng nguồn thu thuế cho nhà nước.",
                                              "Chuyên nghiệp hóa thị trường, nâng cao trách nhiệm chủ thể, tăng cường quản lý nhà nước và bảo vệ khách hàng.",
                                              "Hạn chế số lượng người tham gia thị trường BĐS.",
                                              "Tạo điều kiện cho các doanh nghiệp lớn thâu tóm thị trường."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ưu điểm chính của loại hình Công ty trách nhiệm hữu hạn so với công ty cổ phần khi thực hiện dự án BĐS quy mô vừa và nhỏ là gì?",
                              "options":  [
                                              "Khả năng huy động vốn đại chúng tốt hơn.",
                                              "Trách nhiệm vô hạn của thành viên.",
                                              "Cơ cấu tổ chức quản lý và điều hành thường đơn giản hơn.",
                                              "Được miễn thuế thu nhập doanh nghiệp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nhược điểm lớn nhất của loại hình Doanh nghiệp Tư nhân và Công ty Hợp danh (đối với thành viên hợp danh) khi kinh doanh bất động sản là gì?",
                              "options":  [
                                              "Thủ tục thành lập phức tạp.",
                                              "Chế độ trách nhiệm vô hạn, tiềm ẩn rủi ro rất cao cho chủ sở hữu/thành viên hợp danh.",
                                              "Bắt buộc phải có vốn pháp định cao.",
                                              "Không được phép kinh doanh ngành BĐS."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vốn chủ sở hữu (VCSH) của doanh nghiệp KINH DOANH BẤT ĐỘNG SẢN qua dự án được xác định dựa trên cơ sở nào theo Nghị định 96/2024?",
                              "options":  [
                                              "Vốn điều lệ ghi trong Giấy chứng nhận đăng ký doanh nghiệp.",
                                              "Báo cáo tài chính đã được kiểm toán gần nhất hoặc vốn điều lệ đã góp (đối với DN mới thành lập dưới 12 tháng).",
                                              "Tổng tài sản của doanh nghiệp.",
                                              "Lợi nhuận sau thuế của năm gần nhất."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc thay đổi từ yêu cầu vốn pháp định sang các tỷ lệ tài chính động (VCSH/Tổng VĐT, Dư nợ/VCSH) nhằm mục đích chính là gì?",
                              "options":  [
                                              "Giảm yêu cầu về vốn cho doanh nghiệp.",
                                              "Giám sát sức khỏe tài chính của doanh nghiệp trong suốt quá trình triển khai dự án, hạn chế chủ đầu tư yếu kém.",
                                              "Khuyến khích doanh nghiệp vay nợ nhiều hơn.",
                                              "Đơn giản hóa thủ tục hành chính."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật kinh doanh bất động sản năm 2023, trường hợp các cá nhân mua bán nhà ở với nhau thì hợp đồng mua bán đó có cần công chứng, chứng thực không ?",
                              "options":  [
                                              "Không cần thiết.",
                                              "Bắt buộc phải công chứng hoặc chứng thực.",
                                              "Chỉ cần nếu giá trị giao dịch lớn.",
                                              "Tùy thỏa thuận giữa các bên."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Doanh nghiệp 2020, việc thông báo mẫu dấu với cơ quan đăng ký kinh doanh trước khi sử dụng có còn bắt buộc không?",
                              "options":  [
                                              "Vẫn bắt buộc.",
                                              "Chỉ bắt buộc đối với CTCP.",
                                              "Đã được bãi bỏ, doanh nghiệp tự quyết định và quản lý con dấu.",
                                              "Chỉ bắt buộc đối với doanh nghiệp có vốn nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi đăng ký thành lập công ty TNHH 2 thành viên trở lên, ngoài Giấy đề nghị và Điều lệ, cần nộp thêm danh sách nào?",
                              "options":  [
                                              "Danh sách cổ đông sáng lập.",
                                              "Danh sách thành viên công ty.",
                                              "Danh sách Ban kiểm soát.",
                                              "Danh sách khách hàng tiềm năng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Sự phức tạp và chồng chéo thường gặp trong thực tiễn đầu tư dự án BĐS là giữa các thủ tục của hai luật nào?",
                              "options":  [
                                              "Luật Doanh nghiệp và Luật kinh doanh bất động sản.",
                                              "Luật Đầu tư và Luật Đất đai.",
                                              "Luật Nhà ở và Luật Xây dựng.",
                                              "Luật Thuế và Luật Chứng khoán."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong mô hình quản trị công ty cổ phần không có Ban Kiểm soát riêng, Ủy ban kiểm toán trực thuộc cơ quan nào?",
                              "options":  [
                                              "Đại hội đồng cổ đông.",
                                              "Giám đốc/Tổng giám đốc.",
                                              "Hội đồng quản trị.",
                                              "Một cơ quan độc lập bên ngoài công ty."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Quyền quyết định các vấn đề chiến lược, cơ cấu vốn, bầu/bãi nhiệm thành viên Hội đồng quản trị/ Ban kiểm soát trong Công ty cổ phần thuộc về cơ quan nào?",
                              "options":  [
                                              "Hội đồng quản trị.",
                                              "Ban kiểm soát/Ủy ban kiểm toán.",
                                              "Giám đốc/Tổng giám đốc.",
                                              "Đại hội đồng cổ đông."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nghĩa vụ bảo hành đối với nhà ở, công trình xây dựng đã bán, cho thuê mua của doanh nghiệp kinh doanh bất động sản được quy định chính ở đâu?",
                              "options":  [
                                              "Chỉ trong hợp đồng mua bán.",
                                              "Theo quy định của Luật kinh doanh bất động sản 2023.",
                                              "Theo quy định của pháp luật về xây dựng và nhà ở.",
                                              "Theo quyết định của chủ đầu tư."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc công khai thông tin về tình trạng giao dịch (số lượng sản phẩm đã bán, còn lại) nhằm mục đích gì?",
                              "options":  [
                                              "Giúp doanh nghiệp tăng giá bán.",
                                              "Cung cấp thông tin minh bạch cho thị trường và người mua về tiến độ bán hàng thực tế của dự án.",
                                              "Che giấu số lượng sản phẩm tồn kho.",
                                              "Chỉ là thủ tục hình thức."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Vốn pháp định tối thiểu để thành lập doanh nghiệp Kinh doanh bất động sản là:",
                              "options":  [
                                              "10 tỷ đồng",
                                              "20 tỷ đồng",
                                              "100 triệu đồng",
                                              "Không còn yêu cầu vốn pháp định"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp muốn Kinh doanh bất động sản phải thỏa mãn điều kiện nào sau đây?",
                              "options":  [
                                              "Có giấy phép xây dựng",
                                              "Có vốn pháp định từ 20 tỷ trở lên",
                                              "Đăng ký ngành nghề Kinh doanh bất động sản",
                                              "Có hợp đồng mua bán mẫu"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp tư nhân có được phép Kinh doanh bất động sản không?",
                              "options":  [
                                              "Có, nếu đăng ký ngành nghề Kinh doanh bất động sản",
                                              "Không, vì không có tư cách pháp nhân",
                                              "Chỉ khi được Nhà nước cấp giấy phép riêng",
                                              "Có, nhưng chỉ được môi giới"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thành viên góp vốn vào công ty TNHH khi kinh doanh BĐS:",
                              "options":  [
                                              "Được quyết định giá bán sản phẩm",
                                              "Phải chịu trách nhiệm vô hạn",
                                              "Chịu trách nhiệm trong phạm vi vốn góp vào doanh nghiệp",
                                              "Được thay đổi người đại diện pháp luật"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi muốn chuyển đổi mô hình để huy động vốn tốt hơn trong Kinh doanh bất động sản, công ty TNHH nên:",
                              "options":  [
                                              "Bán tài sản cho bên thứ ba",
                                              "Giảm vốn điều lệ",
                                              "Chuyển thành công ty cổ phần",
                                              "Tách thành hộ kinh doanh"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Doanh nghiệp 2020, cá nhân nào dưới đây có quyền thành lập doanh nghiệp Kinh doanh bất động sản?",
                              "options":  [
                                              "Người chưa đủ 18 tuổi",
                                              "Người đang bị cấm hành nghề theo bản án có hiệu lực",
                                              "Cán bộ, công chức, viên chức",
                                              "Người đủ 18 tuổi trở lên, có đầy đủ năng lực hành vi dân sự, không bị cấm bởi pháp luật"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tổ chức, cá nhân có thể góp vốn bằng hình thức nào để thành lập doanh nghiệp Kinh doanh bất động sản?",
                              "options":  [
                                              "Chỉ bằng tiền mặt",
                                              "Bằng tiền, quyền sử dụng đất, tài sản khác",
                                              "Chỉ bằng quyền sử dụng đất",
                                              "Chỉ bằng tài sản gắn liền với đất"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong thời hạn bao lâu kể từ ngày đăng ký doanh nghiệp, các thành viên phải góp đủ phần vốn cam kết?",
                              "options":  [
                                              "30 ngày",
                                              "60 ngày",
                                              "90 ngày",
                                              "180 ngày"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp Kinh doanh bất động sản phải thực hiện bước nào sau đây để được hoạt động hợp pháp?",
                              "options":  [
                                              "Đăng ký ngành nghề tại Sở Xây dựng",
                                              "Có chứng chỉ hành nghề bất động sản",
                                              "Đăng ký ngành nghề “Kinh doanh bất động sản”",
                                              "Xin giấy phép kinh doanh riêng về bất động sản"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây là đúng theo trình tự thành lập doanh nghiệp Kinh doanh bất động sản?",
                              "options":  [
                                              "Ký hợp đồng mua bán nhà → thành lập doanh nghiệp",
                                              "Nộp hồ sơ đăng ký doanh nghiệp → được cấp Giấy đăng ký doanh nghiệp → công bố nội dung đăng ký",
                                              "Nộp thuế trước → thành lập doanh nghiệp sau",
                                              "Ký hợp đồng thuê trụ sở → hoạt động kinh doanh ngay"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong thời hạn bao lâu kể từ ngày nhận hồ sơ hợp lệ, Phòng Đăng ký kinh doanh phải cấp Giấy chứng nhận đăng ký doanh nghiệp?",
                              "options":  [
                                              "01 ngày làm việc",
                                              "03 ngày làm việc",
                                              "05 ngày làm việc",
                                              "07 ngày làm việc"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp tư nhân có được phép Kinh doanh bất động sản hay không?",
                              "options":  [
                                              "Có, nếu đáp ứng điều kiện về ngành nghề",
                                              "Không, vì chỉ công ty cổ phần và TNHH mới được phép",
                                              "Có, nhưng phải có vốn pháp định 20 tỷ đồng trở lên",
                                              "Không, vì doanh nghiệp tư nhân không có tư cách pháp nhân"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ doanh nghiệp tư nhân có thể đồng thời là chủ của doanh nghiệp tư nhân khác không?",
                              "options":  [
                                              "Có, nếu doanh nghiệp hoạt động ở ngành nghề khác",
                                              "Có, nếu doanh nghiệp thứ hai hoạt động ở địa bàn khác",
                                              "Không, theo quy định Luật Doanh nghiệp 2020",
                                              "Có, nếu ủy quyền điều hành cho người khác"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công ty TNHH 2 thành viên có tư cách pháp nhân kể từ khi nào?",
                              "options":  [
                                              "Ngày nộp hồ sơ đăng ký",
                                              "Ngày nộp thuế môn bài",
                                              "Ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp",
                                              "Ngày bắt đầu hoạt động thực tế"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi thành lập công ty TNHH 2 thành viên  trở lên để Kinh doanh bất động sản, phải có ít nhất bao nhiêu thành viên góp vốn?",
                              "options":  [
                                              "1",
                                              "2",
                                              "3",
                                              "Không giới hạn"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cổ đông công ty cổ phần chịu trách nhiệm đối với các khoản nợ và nghĩa vụ tài sản của công ty như thế nào?",
                              "options":  [
                                              "Bằng toàn bộ tài sản cá nhân",
                                              "Theo tỷ lệ chia cổ tức",
                                              "Trong phạm vi số cổ phần đã góp",
                                              "Theo thỏa thuận trong điều lệ"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Công ty cổ phần có thể huy động vốn bằng cách nào sau đây?",
                              "options":  [
                                              "Vay từ ngân hàng",
                                              "Phát hành cổ phiếu",
                                              "Góp vốn liên doanh",
                                              "Tất cả các hình thức trên"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ8 Luật Thuế, Phí, Lệ Phí (KTCS).docx",
        "topic":  "CĐ8 Luật Thuế, Phí, Lệ Phí",
        "questions":  [
                          {
                              "question":  "Trong giao dịch mua bán nhà đất giữa vợ và chồng (quan hệ hôn nhân), loại thuế nào được miễn theo quy định",
                              "options":  [
                                              "Thuế thu nhập cá nhân",
                                              "Thuế giá trị gia tăng",
                                              "Thuế sử dụng đất phi nông nghiệp",
                                              "Thuế môn bài"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một hợp đồng chuyển nhượng bất động sản được ghi nhận sai giá (không phản ánh đúng giá giao dịch thực tế). Hậu quả của việc kê khai sai giá này là:",
                              "options":  [
                                              "Doanh nghiệp được giảm thuế phải nộp hợp pháp",
                                              "Dễ dẫn đến sai tính số thuế phải nộp và bị xử phạt",
                                              "Không ảnh hưởng vì chỉ là lỗi về hình thức",
                                              "Chỉ cần điều chỉnh hồ sơ trong lần kê khai sau"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với hoạt động kinh doanh bất động sản, thuế giá trị gia tăng thường áp dụng mức thuế suất nào",
                              "options":  [
                                              "5%",
                                              "10%",
                                              "15%",
                                              "20%"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuế sử dụng đất phi nông nghiệp đối với đất ở theo quy định hiện hành được tính theo mức nào sau đây",
                              "options":  [
                                              "Từ 0,01% đến 0,03%",
                                              "Từ 0,03% đến 0,15%",
                                              "Từ 0,2% đến 0,5%",
                                              "Từ 1% đến 2%"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một doanh nghiệp bất động sản phải nộp Thuế Giá Trị Gia Tăng (VAT) với mức thuế suất 10%. Cách tính VAT trong hoạt động Kinh doanh bất động sản là:",
                              "options":  [
                                              "Tính trên tổng doanh thu trước trừ chi phí",
                                              "Tính trên giá trị tăng thêm (chênh lệch giữa giá bán và giá mua hoặc chi phí)",
                                              "Tính trên lợi nhuận sau thuế",
                                              "Tính trên giá trị tài sản cố định"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuế sử dụng đất phi nông nghiệp áp dụng mức thuế từ 0,03% đến 0,15%. Cơ sở tính thuế này thường được xác định dựa trên:",
                              "options":  [
                                              "Diện tích đất và giá trị đất theo bảng giá đất của UBND tỉnh",
                                              "Tổng doanh thu của doanh nghiệp sử dụng đất",
                                              "Giá trị của công trình xây dựng trên đất",
                                              "Số năm sử dụng đất"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong giao dịch chuyển nhượng bất động sản, bên bán phải đóng Thuế Thu Nhập Cá Nhân (TNCN) là 2% trên giá chuyển nhượng ghi trên hợp đồng. Tuy nhiên, trường hợp nào bên bán có thể được miễn thuế TNCN",
                              "options":  [
                                              "Nếu bên bán đã sở hữu nhiều bất động sản",
                                              "Nếu bên bán là tổ chức kinh doanh",
                                              "Nếu bất động sản chuyển nhượng là duy nhất và đã sở hữu trên 183 ngày",
                                              "Nếu bên mua chịu toàn bộ chi phí thuế"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi giao dịch mua bán nhà đất, bên mua phải đóng lệ phí trước bạ với mức 0,5% trên giá đất theo bảng giá đất. Lỗi thường gặp khi tính lệ phí trước bạ là:",
                              "options":  [
                                              "Nhầm lẫn giữa diện tích đất và diện tích xây dựng",
                                              "Tính theo giá thị trường thay vì theo bảng giá đất do UBND cấp tỉnh quy định",
                                              "Áp dụng sai mức thuế suất VAT",
                                              "Sử dụng sai tỉ lệ phần trăm của Thuế Môn Bài"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong một giao dịch mua bán bất động sản, hai bên sử dụng “vi bằng” thay cho hợp đồng công chứng. Hệ quả của việc này là:",
                              "options":  [
                                              "Vi bằng có giá trị pháp lý như hợp đồng công chứng",
                                              "Người mua có thể không được đảm bảo quyền sử dụng tài sản do không có căn cứ pháp lý cao",
                                              "Vi bằng giúp giảm chi phí giao dịch mà không có rủi ro pháp lý",
                                              "Vi bằng chỉ áp dụng đối với giao dịch thương mại, không phải bất động sản"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ai là đối tượng phải nộp phí thẩm định hồ sơ cấp giấy chứng nhận quyền sử dụng đất",
                              "options":  [
                                              "Người xin cấp giấy chứng nhận lần đầu hoặc khi có nhu cầu cấp đổi, cấp lại giấy chứng nhận quyền sử dụng đất",
                                              "Tất cả hộ gia đình đang sử dụng đất",
                                              "Người thuê đất trả tiền thuê hàng năm",
                                              "Chỉ doanh nghiệp xin cấp giấy chứng nhận"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức lệ phí môn bài tối đa mà doanh nghiệp kinh doanh bất động sản phải nộp hàng năm là bao nhiêu?",
                              "options":  [
                                              "1.000.000 đồng",
                                              "2.000.000 đồng",
                                              "3.000.000 đồng",
                                              "5.000.000 đồng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuế bảo vệ môi trường được áp dụng đối với nhiều lĩnh vực, chẳng hạn như chất thải rắn sinh hoạt, túi ni lông, xăng dầu,… Mục đích chính của loại thuế này là:",
                              "options":  [
                                              "Tăng doanh thu cho ngân sách nhà nước",
                                              "Hạn chế các hành vi gây ô nhiễm và khuyến khích bảo vệ môi trường",
                                              "Giảm chi phí sản xuất cho doanh nghiệp",
                                              "Hỗ trợ phát triển ngành công nghiệp ô tô"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi chuyển nhượng nhà đất, mức thuế thu nhập cá nhân thường được áp dụng theo cách tính phổ biến nào",
                              "options":  [
                                              "10% trên thu nhập chịu thuế",
                                              "2% trên giá trị chuyển nhượng",
                                              "0,5% trên giá trị chuyển nhượng",
                                              "25% trên giá trị lợi nhuận"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một doanh nghiệp bất động sản nộp hồ sơ khai thuế quá thời hạn quy định. Hành vi này có thể dẫn đến:",
                              "options":  [
                                              "Không bị xử phạt nếu số thuế nộp đúng",
                                              "Bị xử phạt hành chính về thuế do vi phạm kê khai và nộp thuế đúng hạn",
                                              "Được miễn phạt nếu lý do khách quan",
                                              "Chỉ bị cảnh cáo mà không có hình thức phạt nào khác"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức thu lệ phí trước bạ đối với nhà, đất là bao nhiêu phần trăm",
                              "options":  [
                                              "1%",
                                              "0,5%",
                                              "2%",
                                              "5%"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi chuyển đổi mục đích sử dụng đất, hộ gia đình cần thực hiện các bước cơ bản nào sau đây",
                              "options":  [
                                              "Nộp hồ sơ chuyển mục đích sử dụng đất, chờ phê duyệt, thực hiện nghĩa vụ tài chính và nhận kết quả",
                                              "Chỉ cần nộp hồ sơ và tự cập nhật thông tin trên GCN",
                                              "Thực hiện đo đạc và tự điều chỉnh giá đất",
                                              "Liên hệ trực tiếp với UBND cấp tỉnh để được miễn phí chuyển đổi"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức thu phí đối với việc công chứng hợp đồng giao dịch bất động sản trị giá từ 100 triệu đến 1 tỷ đồng là bao nhiêu %",
                              "options":  [
                                              "0,1% giá trị tài sản",
                                              "0,2% giá trị tài sản",
                                              "0,5% giá trị tài sản",
                                              "1% giá trị tài sản"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức thu phí đối với việc công chứng hợp đồng giao dịch tài sản trị giá từ 50 triệu đến dưới 100 triệu đồng là bao nhiêu",
                              "options":  [
                                              "50.000 đ",
                                              "100.000 đ",
                                              "0,1% giá trị tài sản",
                                              "0,2% giá trị tài sản"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Những ai được miễn thuế thu nhập cá nhân khi chuyển nhượng nhà đất",
                              "options":  [
                                              "Người có nhiều nhà, đất",
                                              "Người không có mã số thuế",
                                              "Người có quan hệ hôn nhân, huyết thống, nuôi dưỡng",
                                              "Mọi trường hợp nếu giao dịch dưới 500 triệu đồng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong giao dịch chuyển nhượng bất động sản, bên bán phải nộp Thuế Thu Nhập Cá Nhân (TNCN) theo mức 2% trên giá chuyển nhượng ghi trên hợp đồng. Trường hợp nào bên bán có thể được miễn nộp thuế này",
                              "options":  [
                                              "Khi bất động sản chuyển nhượng có giá trị thấp",
                                              "Khi bất động sản chuyển nhượng là duy nhất và đã sở hữu trên 183 ngày",
                                              "Khi bên mua chịu toàn bộ chi phí thuế",
                                              "Khi bất động sản chuyển nhượng là của doanh nghiệp"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong một giao dịch mua bán nhà giữa anh H và chị L (quan hệ hôn nhân), bên bán có bị tính Thuế thu nhập cá nhân theo mức 2% không",
                              "options":  [
                                              "Có, vì thuế TNCN áp dụng cho mọi giao dịch chuyển nhượng",
                                              "Không, vì giao dịch giữa người có quan hệ hôn nhân được miễn thuế TNCN",
                                              "Có, nhưng thuế TNCN được tính theo biểu lũy tiến",
                                              "Đáp án D"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi giao dịch mua bán bất động sản, bên mua và bên bán sử dụng “vi bằng” thay cho hợp đồng công chứng. Hậu quả pháp lý của việc sử dụng vi bằng là:",
                              "options":  [
                                              "Vi bằng có giá trị pháp lý tương đương hợp đồng công chứng",
                                              "Người mua không được bảo đảm quyền sở hữu tài sản, gây tranh chấp sau này",
                                              "Vi bằng giúp tiết kiệm chi phí mà vẫn đảm bảo quyền lợi",
                                              "Cơ quan công chứng sẽ tự động chuyển đổi vi bằng thành hợp đồng công chứng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong giao dịch chuyển nhượng bất động sản, nếu hợp đồng chuyển nhượng ghi sai giá so với giá thực tế, hậu quả có thể bao gồm:",
                              "options":  [
                                              "Hợp đồng được cơ quan công chứng điều chỉnh tự động",
                                              "Sai sót dẫn đến tính sai số thuế (TNCN, lệ phí trước bạ) và nguy cơ bị xử phạt",
                                              "Không ảnh hưởng vì chỉ là lỗi về hình thức",
                                              "Bên mua và bên bán có thể tự thỏa thuận điều chỉnh sau này"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi giao dịch mua bán bất động sản, nếu bên bán kê khai sai thông tin về căn cứ pháp lý của bất động sản (ví dụ: giấy tờ không hợp lệ hoặc giả mạo), hậu quả có thể là:",
                              "options":  [
                                              "Bên bán phải chịu trách nhiệm về vi phạm của mình trước pháp luật",
                                              "Giao dịch vẫn được hoàn tất vì bên mua đã kiểm tra kỹ lưỡng",
                                              "Chỉ ảnh hưởng đến giá trị giao dịch, không liên quan đến pháp lý",
                                              "Cơ quan công chứng sẽ tự động điều chỉnh thông tin hợp đồng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong trường hợp doanh nghiệp bất động sản kê khai sai số liệu chi phí, dẫn đến lợi nhuận tính thuế bị tăng, hậu quả có thể là:",
                              "options":  [
                                              "Số thuế Thu nhập doanh nghiệp phải nộp sẽ bị tăng cao, gây bất lợi kinh doanh",
                                              "Doanh nghiệp được cơ quan thuế tự động điều chỉnh chi phí",
                                              "Không ảnh hưởng nếu doanh nghiệp bổ sung chứng từ sau",
                                              "Doanh nghiệp chỉ bị cảnh cáo mà không có xử phạt"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong trường hợp doanh nghiệp bất động sản kê khai sai thuế do không cập nhật đúng bảng giá đất của UBND, ngoài việc bị xử phạt, doanh nghiệp còn có nguy cơ:",
                              "options":  [
                                              "Bị truy thu số thuế thiếu nộp kèm lãi suất",
                                              "Được cơ quan thuế giảm bớt số thuế phải nộp trong kỳ sau",
                                              "Không ảnh hưởng vì sai sót này chỉ là kỹ thuật",
                                              "Chỉ bị xử phạt về hình thức mà không có hậu quả tài chính"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu bên mua nhà đất sử dụng số liệu diện tích không chính xác (do nhầm lẫn giữa diện tích xây dựng và diện tích đất) để tính lệ phí trước bạ, kết quả là:",
                              "options":  [
                                              "Lệ phí trước bạ được tính chính xác theo quy định",
                                              "Số lệ phí trước bạ kê khai sẽ sai lệch, có thể dẫn đến truy thu lệ phí nộp thiếu",
                                              "Sai sót này chỉ ảnh hưởng đến hồ sơ giao dịch mà không ảnh hưởng số tiền",
                                              "Cơ quan thuế sẽ tự động hiệu chỉnh số liệu dựa trên hồ sơ địa chính"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong thủ tục cấp giấy chứng nhận quyền sử dụng đất lần đầu, nếu người nộp hồ sơ không thực hiện đầy đủ nghĩa vụ tài chính (tiền sử dụng đất, tiền thuê đất, lệ phí trước bạ), kết quả sẽ là:",
                              "options":  [
                                              "Giấy chứng nhận quyền sử dụng đất vẫn được cấp, nhưng có ghi chú",
                                              "Quy trình cấp giấy chứng nhận quyền sử dụng đất bị dừng lại cho đến khi người nộp hoàn thành nghĩa vụ",
                                              "Người nộp hồ sơ được gia hạn thời gian nộp mà không ảnh hưởng đến tiến trình cấp giấy chứng nhận quyền sử dụng đất",
                                              "Cơ quan đăng ký sẽ tự động tính toán và điều chỉnh nghĩa vụ tài chính"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong trường hợp doanh nghiệp Kinh doanh bất động sản đăng ký sử dụng các chính sách ưu đãi thuế mà không đủ điều kiện, hậu quả có thể là:",
                              "options":  [
                                              "Doanh nghiệp được hưởng ưu đãi mà không bị kiểm tra lại",
                                              "Doanh nghiệp phải hoàn trả ưu đãi thuế đã được hưởng kèm theo lãi suất và bị xử phạt",
                                              "Ưu đãi thuế sẽ tự động điều chỉnh theo doanh thu",
                                              "Không có hậu quả vì các chính sách ưu đãi luôn linh hoạt áp dụng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong trường hợp giao dịch mua bán nhà đất giữa hai cá nhân không có quan hệ huyết thống, nếu bên mua kê khai sai thông tin cá nhân (ví dụ: sử dụng chứng minh nhân dân đã hết giá trị sử dụng, không hợp lệ), hậu quả có thể là:",
                              "options":  [
                                              "Hồ sơ giao dịch bị từ chối trong quá trình đăng bộ/sang tên",
                                              "Thủ tục đăng bộ vẫn được thực hiện nhưng bên mua phải bổ sung sau",
                                              "Sai sót này chỉ ảnh hưởng đến nội bộ bên mua",
                                              "Bên mua sẽ được cơ quan đăng ký hỗ trợ điều chỉnh hồ sơ"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo quy định pháp luật, thuế suất Thuế Thu nhập cá nhân (TNCN) đối với thu nhập từ chuyển nhượng bất động sản hiện hành là bao nhiêu?",
                              "options":  [
                                              "5% trên giá trị chuyển nhượng",
                                              "10% trên thu nhập tính thuế",
                                              "2% trên giá chuyển nhượng",
                                              "Áp dụng biểu thuế lũy tiến từng phần"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là những loại thuế chính mà các doanh nghiệp kinh doanh bất động sản phải nộp ?",
                              "options":  [
                                              "Thuế Thu nhập cá nhân (TNCN)",
                                              "Thuế thu nhập doanh nghiệp",
                                              "Lệ phí Môn bài",
                                              "Cả B và C đều đúng"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với doanh nghiệp kinh doanh bất động sản, thuế suất Thuế Thu nhập doanh nghiệp (TNDN) chung là bao nhiêu?",
                              "options":  [
                                              "25%",
                                              "20%",
                                              "15%",
                                              "Tùy thuộc vào quy mô doanh thu"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lệ phí trước bạ khi mua bán bất động sản được tính dựa trên cơ sở nào?",
                              "options":  [
                                              "Giá trị hợp đồng mua bán",
                                              "Giá đất theo bảng giá đất của tỉnh, thành phố",
                                              "Giá trị tính lệ phí trước bạ theo quy định của pháp luật",
                                              "Giá đất được ghi trong Giấy chứng nhận quyền sử dụng đất"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân môi giới bất động sản có thu nhập từ hoa hồng trên 2 triệu đồng/lần và không có hợp đồng lao động hoặc hợp đồng lao động dưới 3 tháng thì phải bị khấu trừ thuế thu nhập cá nhân với mức bao nhiêu?",
                              "options":  [
                                              "10% trên hoa hồng",
                                              "20% trên hoa hồng",
                                              "5% trên hoa hồng",
                                              "Theo biểu thuế lũy tiến từng phần"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tiền sử dụng đất khi chuyển mục đích sử dụng đất được tính dựa trên văn bản nào?",
                              "options":  [
                                              "Luật Đất đai",
                                              "Luật đất đai và Nghị định quy định chi tiết về tiền sử dụng đất",
                                              "Quyết định của Ủy ban nhân dân cấp tỉnh",
                                              "Cả A, B và C đều đúng"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Nghị định 125/2020/NĐ-CP, hành vi khai sai, khai không đầy đủ hồ sơ thuế dẫn đến thiếu số tiền thuế phải nộp sẽ bị xử phạt như thế nào?",
                              "options":  [
                                              "Chỉ bị truy thu thuế",
                                              "Bị phạt tiền và truy thu thuế",
                                              "Bị phạt tiền, truy thu thuế và buộc nộp tiền chậm nộp",
                                              "Bị truy cứu trách nhiệm hình sự"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tiền chậm nộp thuế được tính như thế nào?",
                              "options":  [
                                              "0,03% mỗi ngày trên số tiền thuế chậm nộp",
                                              "0,05% mỗi ngày trên số tiền thuế chậm nộp",
                                              "0,07% mỗi ngày trên số tiền thuế chậm nộp",
                                              "0,01% mỗi ngày trên số tiền thuế chậm nộp"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân có thu nhập từ cho thuê bất động sản với doanh thu trên 100 triệu đồng/năm có phải nộp thuế giá trị gia tăng không",
                              "options":  [
                                              "Có, với thuế suất 10%",
                                              "Có, với thuế suất 5%",
                                              "Không, cá nhân không phải nộp thuế thuế giá trị gia tăng",
                                              "Có, với thuế suất 10% trên doanh thu vượt 100 triệu"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lệ phí trước bạ có phải là một loại thuế không",
                              "options":  [
                                              "Có, là một loại thuế trực thu",
                                              "Có, là một loại thuế gián thu",
                                              "Không, là một loại lệ phí hành chính",
                                              "Không, là một loại phí dịch vụ công"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thu nhập từ chuyển nhượng bất động sản của doanh nghiệp có được bù trừ lỗ từ các hoạt động kinh doanh khác không?",
                              "options":  [
                                              "Có, được bù trừ hoàn toàn",
                                              "Không, phải xác định và kê khai riêng",
                                              "Được bù trừ nếu lỗ từ hoạt động kinh doanh chính",
                                              "Tùy thuộc vào quyết định của cơ quan thuế"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Phí thẩm định hồ sơ cấp giấy chứng nhận quyền sử dụng đất có mức thu cố định trên toàn quốc không?",
                              "options":  [
                                              "Có, được quy định bởi Bộ Tài chính",
                                              "Có, được quy định bởi Bộ Tài nguyên và Môi trường",
                                              "Không, mức thu tùy thuộc vào từng địa phương",
                                              "Không, được quy định bởi từng cơ quan cấp giấy chứng nhận"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi nào sau đây có thể bị truy cứu trách nhiệm hình sự về tội trốn thuế?",
                              "options":  [
                                              "Khai sai thông tin trên hồ sơ thuế",
                                              "Khai thiếu số tiền thuế phải nộp",
                                              "Trốn thuế với số tiền lớn hoặc tái phạm nhiều lần",
                                              "Cả A và B đều đúng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây không phải nộp phí thẩm định hồ sơ cấp Giấy chứng nhận quyền sử dụng đất",
                              "options":  [
                                              "Cấp lại giấy chứng nhận do bị mất",
                                              "Cấp đổi giấy chứng nhận",
                                              "Các trường hợp được quy định cụ thể trong nghị quyết của Hội đồng nhân dân cấp tỉnh hoặc các văn bản khác có liên quan",
                                              "Chứng nhận biến động đất đai"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lệ phí địa chính là khoản phí mà tổ chức, cá nhân phải nộp khi được cơ quan nhà nước giải quyết các công việc về:",
                              "options":  [
                                              "Thẩm định hồ sơ",
                                              "Cấp giấy chứng nhận quyền sử dụng đất",
                                              "Địa chính",
                                              "Cả A, B và C đều đúng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thu nhập từ thừa kế/quà tặng bất động sản giữa cha mẹ và con nuôi có được miễn thuế thu nhập cá nhân không?",
                              "options":  [
                                              "Có",
                                              "Không",
                                              "Tùy thuộc vào giá trị tài sản",
                                              "Tùy thuộc vào thời gian sở hữu"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thuế suất Thuế GTGT 10% trong kinh doanh bất động sản được tính trên cơ sở nào?",
                              "options":  [
                                              "Giá trị hợp đồng chuyển nhượng",
                                              "Giá trị gia tăng của sản phẩm",
                                              "Giá trị đất được trừ",
                                              "Giá trị đất theo bảng giá đất"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tiền chậm nộp thuế được tính từ thời điểm nào?",
                              "options":  [
                                              "Ngày hết thời hạn nộp thuế",
                                              "Ngày phát hiện vi phạm",
                                              "Ngày cơ quan thuế ban hành quyết định",
                                              "Ngày nộp hồ sơ thuế"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Nghị định 10/2022/NĐ-CP, mức lệ phí trước bạ khi mua bán bất động sản là bao nhiêu?",
                              "options":  [
                                              "0.5% trên giá tính lệ phí trước bạ",
                                              "1% trên giá tính lệ phí trước bạ",
                                              "2% trên giá chuyển nhượng",
                                              "Tùy thuộc vào giá trị bất động sản"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan nào có thẩm quyền ban hành Bảng giá đất để làm căn cứ tính thuế?",
                              "options":  [
                                              "Quốc hội",
                                              "Bộ Nông nghiệp và Môi trường",
                                              "Chính phủ",
                                              "Ủy ban nhân dân cấp tỉnh"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hành vi khai sai giá trị chuyển nhượng bất động sản để trốn thuế được coi là vi phạm hành chính hay hình sự?",
                              "options":  [
                                              "Vi phạm hành chính",
                                              "Vi phạm hình sự",
                                              "Cả A và B, tùy thuộc vào mức độ vi phạm và số tiền trốn thuế",
                                              "Chỉ là vi phạm dân sự"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối với doanh nghiệp kinh doanh dịch vụ bất động sản (sàn giao dịch), loại thuế chính phải nộp là gì?",
                              "options":  [
                                              "Thuế Thu nhập doanh nghiệp và Thuế Giá trị gia tăng",
                                              "Thuế Thu nhập cá nhân và Thuế Môn bài",
                                              "Thuế Thu nhập doanh nghiệp và Thuế thu nhập cá nhân",
                                              "Thuế Giá trị gia tăng và Thuế Môn bài"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân chuyển nhượng bất động sản và cá nhân môi giới bất động sản có cùng một nghĩa vụ thuế TNCN không?",
                              "options":  [
                                              "Có, đều nộp thuế suất 2%",
                                              "Có, đều nộp thuế suất 10%",
                                              "Không, nghĩa vụ thuế khác nhau",
                                              "Tùy thuộc vào giá trị giao dịch"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lệ phí công chứng đối với hợp đồng chuyển nhượng bất động sản giữa cha mẹ và con ruột có khác gì so với hợp đồng giữa hai người xa lạ không?",
                              "options":  [
                                              "Lệ phí công chứng đối với hợp đồng giữa cha mẹ và con ruột thường thấp hơn",
                                              "Lệ phí công chứng đối với hợp đồng giữa cha mẹ và con ruột thường cao hơn",
                                              "Mức lệ phí không có sự khác biệt",
                                              "Tùy thuộc vào văn phòng công chứng"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mục đích của việc điều chỉnh giá đất nông nghiệp lên gần bằng giá đất ở trong các khu vực dân cư là gì?",
                              "options":  [
                                              "Để tăng thu ngân sách",
                                              "Để giảm gánh nặng cho người dân",
                                              "Để đảm bảo sự công bằng và hợp lý, phù hợp với giá thị trường",
                                              "Để khuyến khích chuyển đổi đất nông nghiệp"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật Đất đai 2024, tiền sử dụng đất khi chuyển mục đích sử dụng đất được tính như thế nào?",
                              "options":  [
                                              "Thu theo giá đất do UBND cấp tỉnh ban hành.",
                                              "Thu theo giá thị trường của thửa đất.",
                                              "Thu theo giá đất cụ thể do cơ quan nhà nước có thẩm quyền quyết định.",
                                              "Thu theo khung giá đất của Chính phủ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khi một cá nhân bán nhà ở duy nhất tại Việt Nam đã sở hữu được 2 năm, thu nhập này có phải nộp thuế thu nhập cá nhân không?",
                              "options":  [
                                              "Có, phải nộp thuế suất 2% trên giá chuyển nhượng.",
                                              "Có, phải nộp thuế suất 5% trên giá chuyển nhượng.",
                                              "Không, được miễn thuế thu nhập cá nhân.",
                                              "Tùy thuộc vào giá trị chuyển nhượng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trường hợp nào sau đây được miễn Thuế sử dụng đất phi nông nghiệp?",
                              "options":  [
                                              "Đất làm nhà ở xã hội.",
                                              "Đất của cơ sở thực hiện xã hội hóa trong lĩnh vực y tế, văn hóa.",
                                              "Đất xây dựng chung cư cao tầng.",
                                              "Cả A và B đều đúng."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân nhận thừa kế một bất động sản có giá trị tính thuế là 20 tỷ đồng, phải nộp thuế thu nhập cá nhân bao nhiêu? (Giả sử không có các trường hợp miễn giảm)",
                              "options":  [
                                              "1,99 tỷ đồng.",
                                              "1 tỷ đồng.",
                                              "200 triệu đồng.",
                                              "500 triệu đồng"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức lệ phí trước bạ khi mua bán bất động sản do hộ gia đình, cá nhân nộp là 0,5%. Tuy nhiên, trong trường hợp nào thì mức thu này có thể thay đổi?",
                              "options":  [
                                              "Không có trường hợp nào.",
                                              "Có thể thay đổi nếu giá trị bất động sản lớn.",
                                              "Có thể thay đổi theo quy định của Hội đồng nhân dân cấp tỉnh đối với một số khu vực đặc thù.",
                                              "Tùy thuộc vào mục đích sử dụng đất."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chi phí nào sau đây được trừ khi tính thu nhập chịu thuế thu nhập doanh nghiệp từ hoạt động chuyển nhượng bất động sản?",
                              "options":  [
                                              "Chi phí bồi thường, giải phóng mặt bằng.",
                                              "Chi phí đầu tư cơ sở hạ tầng.",
                                              "Chi phí quảng cáo, tiếp thị.",
                                              "Tất cả các chi phí trên nếu có đủ hóa đơn, chứng từ hợp lệ."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một cá nhân bán một căn hộ đã sở hữu được 5 năm nhưng đó là căn hộ thứ hai của họ. Thuế Thu nhập cá nhân phải nộp là bao nhiêu?",
                              "options":  [
                                              "Miễn thuế.",
                                              "2% trên giá chuyển nhượng.",
                                              "5% trên giá chuyển nhượng.",
                                              "10% trên thu nhập tính thuế."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chi phí bồi thường, giải phóng mặt bằng được tính vào giá vốn khi chuyển nhượng bất động sản có bao gồm cả các khoản chi phí liên quan đến việc hỗ trợ người bị thu hồi đất không?",
                              "options":  [
                                              "Có, nếu có đầy đủ chứng từ hợp lệ.",
                                              "Không, các chi phí này là chi phí riêng.",
                                              "Tùy thuộc vào loại bất động sản.",
                                              "Chỉ bao gồm chi phí trực tiếp bồi thường đất."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt chậm nộp thuế được tính trên cơ sở nào?",
                              "options":  [
                                              "Số ngày chậm nộp và số tiền thuế chậm nộp.",
                                              "Số tiền thuế chậm nộp và mức lãi suất ngân hàng.",
                                              "Số tiền thuế chậm nộp và mức phạt cố định.",
                                              "Tùy thuộc vào cơ quan thuế."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Lệ phí địa chính có thể được miễn hoặc giảm trong một số trường hợp không?",
                              "options":  [
                                              "Không, lệ phí này là bắt buộc.",
                                              "Có, tùy thuộc vào chính sách của từng địa phương.",
                                              "Chỉ miễn giảm cho hộ nghèo.",
                                              "Chỉ miễn giảm cho các dự án của nhà nước."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tiền sử dụng đất được coi là một khoản thuế hay một khoản thu ngân sách nhà nước",
                              "options":  [
                                              "Một loại thuế trực thu.",
                                              "Một loại lệ phí.",
                                              "Một khoản thu ngân sách nhà nước.",
                                              "Cả A và B đều đúng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cá nhân có thể tự kê khai và nộp thuế Thu nhập cá nhân từ chuyển nhượng bất động sản ở đâu?",
                              "options":  [
                                              "Tại cơ quan công chứng.",
                                              "Tại cơ quan thuế.",
                                              "Tại kho bạc nhà nước.",
                                              "Cả A và B đều đúng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các khoản tiền phạt vi phạm hành chính về thuế có được tính vào chi phí được trừ khi tính thuế Thu nhập doanh nghiệp không?",
                              "options":  [
                                              "Có.",
                                              "Không.",
                                              "Tùy thuộc vào mức phạt.",
                                              "Tùy thuộc vào loại vi phạm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là một trong những loại phí, lệ phí bắt buộc khi thực hiện công chứng hợp đồng mua bán bất động sản?",
                              "options":  [
                                              "Phí công chứng.",
                                              "Lệ phí địa chính.",
                                              "Phí thẩm định hồ sơ.",
                                              "Lệ phí trước bạ."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các chi phí nào sau đây không được tính vào chi phí được trừ khi tính thuế Thu nhập doanh nghiệp từ chuyển nhượng bất động sản của doanh nghiệp?",
                              "options":  [
                                              "Chi phí lãi vay.",
                                              "Chi phí quảng cáo, tiếp thị.",
                                              "Chi phí khấu hao tài sản cố định.",
                                              "Chi phí không có hóa đơn, chứng từ hợp lệ."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    },
    {
        "fileName":  "CĐ9 Luật Phòng, chống rửa tiền (KTCS) (1).docx",
        "topic":  "CĐ9 Luật Phòng, chống rửa tiền",
        "questions":  [
                          {
                              "question":  "Văn bản pháp luật nào hiện đang là văn bản pháp luật có hiệu lực cao nhất quy định về phòng chống rửa tiền tại Việt Nam?",
                              "options":  [
                                              "Nghị định 19/2023/NĐ-CP",
                                              "Luật Phòng, chống rửa tiền số 14/2022/QH15",
                                              "Thông tư 09/2023/TT-NHNN",
                                              "Bộ luật Hình sự 2015 (sửa đổi 2017)"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo Luật phòng, chống rửa tiền 2022, \"Rửa tiền\" được định nghĩa là gì?*",
                              "options":  [
                                              "Hành vi che giấu nguồn gốc tài sản hợp pháp.",
                                              "Hành vi sử dụng tài sản để tài trợ khủng bố.",
                                              "Hành vi của tổ chức, cá nhân nhằm hợp pháp hóa nguồn gốc của tài sản do phạm tội mà có.",
                                              "Hành vi không báo cáo giao dịch đáng ngờ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là cơ quan chủ trì thực hiện đánh giá rủi ro quốc gia về rửa tiền?*",
                              "options":  [
                                              "Bộ Tài chính",
                                              "Bộ Công an",
                                              "Chính phủ",
                                              "Ngân hàng Nhà nước Việt Nam (NHNN)"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức giao dịch có giá trị lớn phải báo cáo hiện hành theo Quyết định 11/2023/QĐ-TTg là bao nhiêu?*",
                              "options":  [
                                              "Từ 300 triệu đồng trở lên.",
                                              "Từ 400 triệu đồng trở lên.",
                                              "Từ 500 triệu đồng trở lên.",
                                              "Không quy định mức cụ thể, tùy thuộc vào đánh giá rủi ro."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hoạt động nào sau đây trong lĩnh vực bất động sản KHÔNG thuộc đối tượng phải báo cáo phòng, chống rửa tiền theo Luật phòng, chống rửa tiền 2022?*",
                              "options":  [
                                              "Kinh doanh dịch vụ môi giới bất động sản.",
                                              "Đầu tư, phát triển dự án bất động sản.",
                                              "Dịch vụ tư vấn bất động sản.",
                                              "Hoạt động của sàn giao dịch bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Doanh nghiệp Kinh doanh bất động sản phải báo cáo giao dịch có giá trị lớn khi nào?*",
                              "options":  [
                                              "Khi thực hiện bất kỳ giao dịch bất động sản nào.",
                                              "Khi giao dịch bằng tiền mặt hoặc ngoại tệ tiền mặt đạt từ 400 triệu VNĐ trở lên trong một ngày.",
                                              "Khi giao dịch có dấu hiệu đáng ngờ, bất kể giá trị.",
                                              "Chỉ khi giao dịch với khách hàng là người nước ngoài."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Dấu hiệu nào sau đây là dấu hiệu đáng ngờ đặc thù trong lĩnh vực bất động sản theo Điều 33 Luật phòng, chống rửa tiền 2022?*",
                              "options":  [
                                              "Khách hàng thanh toán bằng chuyển khoản ngân hàng.",
                                              "Khách hàng yêu cầu chiết khấu giá bán.",
                                              "Giao dịch bất động sản thông qua ủy quyền nhưng không có cơ sở pháp lý rõ ràng.",
                                              "Khách hàng là doanh nghiệp mới thành lập."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thời hạn báo cáo giao dịch đáng ngờ (STR) thông thường là bao lâu kể từ ngày phát sinh giao dịch?*\n2 điểm",
                              "options":  [
                                              "24 giờ.",
                                              "01 ngày làm việc.",
                                              "03 ngày làm việc.",
                                              "05 ngày làm việc."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu giao dịch đáng ngờ có dấu hiệu liên quan đến tội phạm, thời hạn báo cáo cho cơ quan nhà nước có thẩm quyền và NHNN là bao lâu?*\n2 điểm",
                              "options":  [
                                              "Trong vòng 24 giờ kể từ thời điểm phát hiện.",
                                              "Trong vòng 01 ngày làm việc.",
                                              "Trong vòng 03 ngày làm việc.",
                                              "Khi có yêu cầu bằng văn bản từ cơ quan chức năng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Cơ quan nào là đầu mối tiếp nhận và phân tích báo cáo giao dịch có giá trị lớn và giao dịch đáng ngờ từ các doanh nghiệp bất động sản?*\n2 điểm",
                              "options":  [
                                              "Bộ Xây dựng.",
                                              "Cơ quan điều tra công an.",
                                              "Cục Phòng, chống rửa tiền thuộc NHNN.",
                                              "Viện kiểm sát nhân dân."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Các doanh nghiệp bất động sản (trừ doanh nghiệp siêu nhỏ) có bắt buộc phải xây dựng quy định nội bộ về phòng, chống rửa tiền không?*\n2 điểm",
                              "options":  [
                                              "Không, chỉ khuyến khích.",
                                              "Có, bắt buộc phải xây dựng và ban hành.",
                                              "Chỉ bắt buộc đối với các doanh nghiệp có vốn đầu tư nước ngoài.",
                                              "Chỉ bắt buộc đối với các sàn giao dịch bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một thách thức tiềm ẩn đối với việc tuân thủ phòng, chống rửa tiền của các nhà môi giới bất động sản là gì?*\n2 điểm",
                              "options":  [
                                              "Thiếu công nghệ hỗ trợ.",
                                              "Quy định pháp luật quá phức tạp.",
                                              "Xung đột lợi ích giữa nghĩa vụ báo cáo và hoa hồng giao dịch.",
                                              "Khó khăn trong việc xác định giá trị bất động sản."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ai chịu trách nhiệm chính trong việc triển khai các biện pháp phòng chống rửa tiền tại một doanh nghiệp Kinh doanh bất động sản?*\n2 điểm",
                              "options":  [
                                              "Nhân viên môi giới.",
                                              "Khách hàng.",
                                              "Doanh nghiệp bất động sản đó (Đối tượng báo cáo).",
                                              "Ngân hàng Nhà nước."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trách nhiệm của khách hàng trong quy trình thực hiện nhận biết khách hàng (KYC) là gì?*\n2 điểm",
                              "options":  [
                                              "Tự đánh giá rủi ro của bản thân.",
                                              "Cung cấp thông tin chính xác, đầy đủ.",
                                              "Báo cáo giao dịch đáng ngờ của chính mình.",
                                              "Lưu trữ hồ sơ giao dịch."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc đánh giá rủi ro phòng, chống rửa tiền của doanh nghiệp bất động sản cần được cập nhật với tần suất như thế nào?*\n2 điểm",
                              "options":  [
                                              "Định kỳ 05 năm một lần.",
                                              "Khi có yêu cầu từ ngân hàng nhà nước.",
                                              "Hàng năm.",
                                              "Chỉ khi có thay đổi lớn trong hoạt động kinh doanh."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Chủ thể nào có thể bị truy cứu trách nhiệm hình sự về Tội rửa tiền theo Điều 324 BLHS 2015 (sửa đổi 2017)?*\n2 điểm",
                              "options":  [
                                              "Chỉ cá nhân từ đủ 18 tuổi trở lên.",
                                              "Chỉ pháp nhân thương mại.",
                                              "Cá nhân từ đủ 16 tuổi trở lên và pháp nhân thương mại.",
                                              "Chỉ người có chức vụ, quyền hạn trong tổ chức tài chính."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tiêu chuẩn \"biết hoặc có cơ sở để biết\" trong Tội rửa tiền có thể KHÔNG bao gồm trường hợp nào?*\n2 điểm",
                              "options":  [
                                              "Người phạm tội nguồn thông báo trực tiếp.",
                                              "Thông tin được đăng tải rộng rãi trên phương tiện thông tin đại chúng.",
                                              "Suy luận từ việc mua tài sản với giá rẻ bất thường.",
                                              "Nhận được tài sản từ người thân mà không nghi ngờ gì về nguồn gốc."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khung hình phạt tù cơ bản (Khoản 1 Điều 324) đối với cá nhân phạm tội rửa tiền là bao nhiêu?*\n2 điểm",
                              "options":  [
                                              "06 tháng đến 03 năm.",
                                              "01 năm đến 05 năm.",
                                              "05 năm đến 10 năm.",
                                              "10 năm đến 15 năm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mức phạt tù cao nhất đối với cá nhân phạm tội rửa tiền theo Điều 324 Bộ luật hình sự là bao nhiêu năm?*\n2 điểm",
                              "options":  [
                                              "05 năm.",
                                              "10 năm.",
                                              "15 năm.",
                                              "Tù chung thân"
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hình phạt nào sau đây có thể được áp dụng đối với pháp nhân thương mại phạm tội rửa tiền?*\n2 điểm",
                              "options":  [
                                              "Phạt tù đối với người đại diện theo pháp luật.",
                                              "Đình chỉ hoạt động vĩnh viễn.",
                                              "Cải tạo không giam giữ.",
                                              "Cảnh cáo."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc truy cứu trách nhiệm hình sự về Tội rửa tiền có loại trừ việc truy cứu trách nhiệm hình sự đối với tội phạm nguồn không?*\n2 điểm",
                              "options":  [
                                              "Có, nếu đã bị truy cứu về Tội rửa tiền thì không truy cứu tội phạm nguồn.",
                                              "Không, có thể tiến hành đồng thời và không loại trừ lẫn nhau.",
                                              "Tùy thuộc vào quyết định của Cơ quan điều tra.",
                                              "Chỉ truy cứu tội phạm nguồn nếu giá trị tài sản lớn."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Theo hướng dẫn của Nghị quyết 03/2019, hành vi nào được coi là \"dùng thủ đoạn tinh vi, xảo quyệt\"?*",
                              "options":  [
                                              "Mở nhiều tài khoản ngân hàng để giao dịch.",
                                              "Sử dụng công nghệ cao hoặc móc nối với cán bộ có thẩm quyền để phạm tội.",
                                              "Che giấu danh tính thật khi giao dịch.",
                                              "Thực hiện giao dịch qua nhiều quốc gia."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều kiện nào KHÔNG phải là điều kiện bắt buộc để truy cứu trách nhiệm hình sự pháp nhân thương mại về Tội rửa tiền?*",
                              "options":  [
                                              "Hành vi phạm tội được thực hiện nhân danh pháp nhân.",
                                              "Hành vi phạm tội được thực hiện vì lợi ích của pháp nhân.",
                                              "Hành vi phạm tội gây thiệt hại về tài sản cho Nhà nước.",
                                              "Có sự chỉ đạo, điều hành hoặc chấp thuận của người có thẩm quyền của pháp nhân."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc ban hành Luật phòng, chống rửa tiền 2022 thể hiện nỗ lực của Việt Nam trong việc nào sau đây?*",
                              "options":  [
                                              "Giảm thiểu thủ tục hành chính cho doanh nghiệp.",
                                              "Tăng cường thu hút đầu tư nước ngoài vào lĩnh vực tài chính.",
                                              "Nâng cao hiệu quả công tác phòng, chống rửa tiền và tiệm cận hơn với các khuyến nghị của Lực lượng đặc nhiệm tài chính về chống rửa tiền (FATF).",
                                              "Đơn giản hóa quy trình báo cáo giao dịch cho các ngân hàng."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hiệu quả thực sự của hệ thống pháp luật phòng, chống rửa tiền tại Việt Nam phụ thuộc vào yếu tố nào?*",
                              "options":  [
                                              "Chỉ phụ thuộc vào số lượng văn bản pháp luật được ban hành.",
                                              "Phụ thuộc vào việc triển khai nhất quán, giám sát chặt chẽ và năng lực phân tích, xử lý vi phạm.",
                                              "Chỉ phụ thuộc vào mức độ hợp tác quốc tế.",
                                              "Phụ thuộc chủ yếu vào sự tự giác của doanh nghiệp."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Ngoài Ngân hàng nhà nước, cơ quan nào có thể có vai trò trong việc giám sát hoạt động chung của các doanh nghiệp Kinh doanh bất động sản liên quan đến phòng, chống rửa tiền?*",
                              "options":  [
                                              "Bộ Tài chính.",
                                              "Bộ Tài nguyên và Môi trường.",
                                              "Bộ Xây dựng.",
                                              "Bộ Tư pháp."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc tăng ngưỡng báo cáo giao dịch có giá trị lớn (LCTR) từ 300 triệu lên 400 triệu đồng có ý nghĩa gì?*",
                              "options":  [
                                              "Giảm bớt gánh nặng báo cáo cho các giao dịch nhỏ hơn.",
                                              "Tăng cường giám sát các giao dịch có giá trị thực sự lớn.",
                                              "Phù hợp hơn với mức lạm phát.",
                                              "Cả A và C."
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc tuân thủ các quy định phòng, chống rửa tiền của doanh nghiệp bất động sản mang lại lợi ích gì ngoài việc tránh bị xử phạt?*\n2 điểm",
                              "options":  [
                                              "Tăng lợi nhuận kinh doanh.",
                                              "Giảm thời gian hoàn thành giao dịch.",
                                              "Góp phần vào sự minh bạch và ổn định của hệ thống tài chính quốc gia.",
                                              "Giảm yêu cầu về vốn điều lệ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao việc liệt kê cụ thể các \"hành vi bị nghiêm cấm\" tại Điều 8 Luật phòng, chống rửa tiền 2022 lại quan trọng hơn là chỉ cấm \"hành vi rửa tiền\"?*",
                              "options":  [
                                              "Để dễ dàng áp dụng hình phạt bổ sung.",
                                              "Để bao quát cả các hành vi tạo điều kiện, hỗ trợ hoặc cản trở công tác phòng, chống rửa tiền, không chỉ hành vi rửa tiền trực tiếp.",
                                              "Để phù hợp với quy định của Bộ luật Hình sự.",
                                              "Để giảm số lượng báo cáo giao dịch đáng ngờ (STR)."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Thông tin nào sau đây KHÔNG bắt buộc phải có trong quy định nội bộ về phòng, chống rửa tiền của một đối tượng báo cáo (trừ doanh nghiệp siêu nhỏ) theo hướng dẫn của Thông tư 09/2023/TT-NHNN?*",
                              "options":  [
                                              "Chính sách quản lý rủi ro và phân loại khách hàng.",
                                              "Quy trình báo cáo giao dịch có giá trị lớn (LCTR) và báo cáo giao dịch đáng ngờ (STR).",
                                              "Danh sách chi tiết tất cả khách hàng và giao dịch đã thực hiện.",
                                              "Quy định về đào tạo nhân viên và chỉ định cán bộ tuân thủ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc loại trừ \"dịch vụ tư vấn bất động sản\" khỏi đối tượng báo cáo phòng, chống rửa tiền có thể tạo ra kẽ hở nào?*",
                              "options":  [
                                              "Các nhà tư vấn có thể trực tiếp nhận tiền mặt lớn mà không cần báo cáo.",
                                              "Các đối tượng có thể lợi dụng danh nghĩa \"tư vấn\" để cấu trúc các giao dịch mua bán nhằm lách luật phòng, chống rửa tiền.",
                                              "Các công ty tư vấn không cần thực hiện KYC đối với khách hàng của mình.",
                                              "Không tạo ra kẽ hở nào vì hoạt động tư vấn không liên quan đến dòng tiền."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao việc quy định mẫu báo cáo giao dịch đáng ngờ (STR) riêng cho lĩnh vực bất động sản (Mẫu 05/Phụ lục II TT09) lại hữu ích?*",
                              "options":  [
                                              "Để giảm số lượng trường thông tin cần điền.",
                                              "Để thu thập các thông tin đặc thù của giao dịch bất động sản (loại BĐS, số hợp đồng, hình thức thanh toán), giúp cơ quan chức năng phân tích hiệu quả hơn.",
                                              "Để phân biệt báo cáo của ngành bất động sản với ngành ngân hàng.",
                                              "Để tăng thời hạn báo cáo cho ngành bất động sản."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một khách hàng mua bất động sản giá trị lớn, cung cấp đầy đủ giấy tờ tùy thân nhưng tỏ ra thờ ơ với giá cả và các khoản phí, đồng thời nguồn tiền thanh toán không rõ ràng. Đây là dấu hiệu cần xem xét để báo cáo theo loại nào?*",
                              "options":  [
                                              "Chỉ báo cáo giao dịch có giá trị lớn (LCTR) nếu giá trị vượt 400 triệu VNĐ.",
                                              "Báo cáo báo cáo giao dịch đáng ngờ (STR) do có dấu hiệu đáng ngờ (không quan tâm giá/phí, nguồn tiền không rõ).",
                                              "Không cần báo cáo vì khách hàng đã cung cấp đủ giấy tờ KYC.",
                                              "Chỉ cần lưu hồ sơ nội bộ để theo dõi thêm."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một người sử dụng tiền do tham ô mà có để mua một bất động sản đứng tên con cái. Ai là người có thể bị truy cứu trách nhiệm hình sự về Tội rửa tiền?*",
                              "options":  [
                                              "Chỉ người thực hiện hành vi tham ô (nếu họ trực tiếp mua).",
                                              "Chỉ người con đứng tên bất động sản.",
                                              "Cả người tham ô (nếu họ thực hiện hành vi mua bán/che giấu) và người con (nếu biết hoặc có cơ sở để biết nguồn tiền và cố ý đứng tên nhằm hợp pháp hóa).",
                                              "Không ai cả, vì đây là giao dịch trong gia đình."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu tài sản do phạm tội mà có đã được chuyển đổi qua nhiều hình thức (ví dụ: tiền mặt -\u003e vàng -\u003e bất động sản -\u003e cổ phiếu), thì tài sản ở dạng cuối cùng (cổ phiếu) có còn được coi là đối tượng của Tội rửa tiền không?*",
                              "options":  [
                                              "Không, chỉ tài sản ở dạng ban đầu (tiền mặt) mới là đối tượng.",
                                              "Có, khái niệm \"tài sản do phạm tội mà có\" bao gồm cả tài sản có được trực tiếp hoặc gián tiếp từ hành vi phạm tội.",
                                              "Chỉ khi giá trị cổ phiếu tương đương giá trị tiền mặt ban đầu.",
                                              "Tùy thuộc vào việc chuyển đổi có hợp pháp hay không."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Mối quan hệ giữa công tác phòng, chống rửa tiền và phòng, chống tham nhũng là gì?*",
                              "options":  [
                                              "Hai lĩnh vực hoàn toàn tách biệt.",
                                              "Rửa tiền thường là bước tiếp theo sau tham nhũng để hợp pháp hóa tài sản tham nhũng; do đó, chống rửa tiền hiệu quả sẽ góp phần chống tham nhũng.",
                                              "Chống tham nhũng là điều kiện tiên quyết để chống rửa tiền.",
                                              "Chỉ cần chống tham nhũng thì sẽ không còn rửa tiền."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Tại sao việc giám sát các giao dịch bất động sản bằng tiền mặt lại được đặc biệt chú trọng trong công tác phòng, chống rửa tiên (PCRT)?*",
                              "options":  [
                                              "Vì giao dịch tiền mặt dễ thực hiện hơn chuyển khoản.",
                                              "Vì tiền mặt khó truy vết nguồn gốc và dễ dàng che giấu danh tính hơn so với giao dịch qua hệ thống ngân hàng.",
                                              "Vì giao dịch tiền mặt thường có giá trị thấp hơn.",
                                              "Vì pháp luật chỉ cho phép giao dịch BĐS bằng tiền mặt."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu một doanh nghiệp bất động sản bị xử phạt hành chính nhiều lần vì vi phạm quy định PCRT (ví dụ: không báo cáo giao dịch đáng ngờ STR, KYC hời hợt), điều này có thể ảnh hưởng đến việc xem xét trách nhiệm hình sự theo Điều 324 Bộ luật hình sự không?*",
                              "options":  [
                                              "Không, xử phạt hành chính và trách nhiệm hình sự là độc lập.",
                                              "Có, việc tái phạm nhiều lần, có hệ thống các vi phạm hành chính có thể được xem là tình tiết tăng nặng hoặc củng cố bằng chứng về lỗi cố ý \"biết hoặc có cơ sở để biết\" nếu hành vi đó liên quan đến việc hợp pháp hóa tài sản phạm tội.",
                                              "Chỉ ảnh hưởng nếu tổng số tiền phạt hành chính vượt quá một mức nhất định.",
                                              "Chỉ ảnh hưởng nếu có đơn tố cáo từ khách hàng."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Hiệu quả của việc phân tích báo cáo giao dịch đáng ngờ (STR) và giao dịch có giá trị lớn (LCTR) tại Cục phòng, chống rửa tiền (PCRT) phụ thuộc chủ yếu vào yếu tố nào?*",
                              "options":  [
                                              "Số lượng báo cáo nhận được.",
                                              "Chất lượng thông tin trong báo cáo và năng lực phân tích, liên kết dữ liệu, sử dụng công nghệ của cán bộ Cục phòng, chống rửa tiền (PCRT).",
                                              "Mức độ hợp tác của các đối tượng báo cáo.",
                                              "Tốc độ gửi báo cáo của đối tượng báo cáo."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Việc pháp luật hình sự quy định hình phạt tịch thu một phần hoặc toàn bộ tài sản đối với tội rửa tiền có ý nghĩa gì?*",
                              "options":  [
                                              "Chỉ nhằm mục đích thu hồi tài sản cho Nhà nước.",
                                              "Nhằm tước bỏ công cụ, phương tiện và kết quả của hành vi phạm tội, làm mất đi động cơ kinh tế của việc rửa tiền.",
                                              "Chỉ áp dụng khi không thể áp dụng hình phạt tù.",
                                              "Chỉ áp dụng đối với pháp nhân thương mại."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Nếu Cục phòng, chống rửa tiền phân tích và phát hiện một mạng lưới rửa tiền phức tạp từ các báo cáo giao dịch đáng ngờ (STR), bước tiếp theo của Cục là gì?*",
                              "options":  [
                                              "Ra quyết định xử phạt hành chính đối với các đối tượng báo cáo liên quan.",
                                              "Công bố thông tin chi tiết lên trang web của ngân hàng nhà nước.",
                                              "Chuyển giao thông tin, kết quả phân tích cho cơ quan điều tra có thẩm quyền để tiến hành điều tra hình sự.",
                                              "Yêu cầu các đối tượng báo cáo tự điều tra nội bộ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Điều gì xảy ra nếu một giao dịch bất động sản có giá trị 390 triệu đồng tiền mặt nhưng lại có nhiều dấu hiệu đáng ngờ khác (ví dụ: bên mua không rõ nguồn gốc, cơ cấu sở hữu phức tạp)?*",
                              "options":  [
                                              "Không cần báo cáo gì vì chưa đạt ngưỡng giao dịch có giá trị lớn (LCTR).",
                                              "Chỉ cần báo cáo giao dịch có giá trị lớn (LCTR).",
                                              "Phải báo cáo giao dịch đáng ngờ (STR) do có dấu hiệu đáng ngờ, không phụ thuộc vào việc có đạt ngưỡng giao dịch có giá trị lớn (LCTR) hay không.",
                                              "Chỉ cần lưu ý trong hồ sơ nội bộ."
                                          ],
                              "correctAnswer":  2,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Khả năng một giao dịch bất động sản \"ủy quyền không rõ ràng\" bị lợi dụng để rửa tiền nằm ở đâu?*",
                              "options":  [
                                              "Che giấu danh tính thực sự của bên mua/bán hoặc chủ sở hữu hưởng lợi cuối cùng thông qua người được ủy quyền.",
                                              "Trốn tránh nghĩa vụ nộp thuế thu nhập cá nhân.",
                                              "Tạo điều kiện cho việc định giá bất động sản thấp hơn thực tế.",
                                              "Đơn giản hóa thủ tục hành chính tại văn phòng công chứng."
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đâu là thách thức lớn nhất trong việc hợp tác quốc tế về PCRT liên quan đến các giao dịch bất động sản xuyên biên giới?*",
                              "options":  [
                                              "Rào cản ngôn ngữ.",
                                              "Sự khác biệt về hệ thống pháp luật, tiêu chuẩn bảo mật thông tin và mức độ sẵn sàng chia sẻ thông tin tình báo tài chính giữa các quốc gia.",
                                              "Chi phí đi lại và phiên dịch.",
                                              "Thiếu các hiệp định tương trợ tư pháp song phương."
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong bốn biện pháp phòng chống rửa tiền, biện pháp nào sau đây không được liệt kê?*",
                              "options":  [
                                              "Phòng ngừa",
                                              "Phát hiện",
                                              "Ngăn chặn",
                                              "Điều tra"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Biện pháp “trì hoãn giao dịch” được áp dụng khi nào?*",
                              "options":  [
                                              "Khi có căn cứ nghi ngờ giao dịch liên quan đến hành vi rửa tiền",
                                              "Khi giao dịch được thực hiện theo lệnh của khách hàng",
                                              "Khi khách hàng yêu cầu trì hoãn giao dịch",
                                              "Khi giao dịch có giá trị nhỏ"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Đối tượng nào sau đây không thuộc phạm vi áp dụng của quy định phòng chống rửa tiền theo nội dung đã trình bày?*",
                              "options":  [
                                              "Tổ chức tài chính",
                                              "Tổ chức kinh doanh bất động sản",
                                              "Tổ chức cung cấp dịch vụ công chứng",
                                              "Tổ chức chuyên về dịch vụ giáo dục"
                                          ],
                              "correctAnswer":  3,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Trong lĩnh vực bất động sản, dấu hiệu nào sau đây là chỉ số rủi ro cao về rửa tiền?*",
                              "options":  [
                                              "Khách hàng yêu cầu cung cấp đầy đủ thông tin về pháp lý của bất động sản",
                                              "Giá thỏa thuận giữa các bên không phù hợp với giá thị trường",
                                              "Giao dịch được thực hiện qua ngân hàng với quy trình minh bạch",
                                              "Khách hàng bày tỏ sự quan tâm đến các dịch vụ tư vấn pháp lý"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một công ty bất động sản nhận được yêu cầu giao dịch qua trung gian (đối tượng báo cáo) mà không rõ nguồn gốc thông tin của trung gian này. Theo quy định, tổ chức cần:*",
                              "options":  [
                                              "Tiếp tục giao dịch và yêu cầu trung gian cung cấp thông tin sau",
                                              "Áp dụng biện pháp tạm thời (ví dụ: trì hoãn giao dịch) để kiểm tra thông tin của đối tượng trung gian",
                                              "Không cần kiểm tra vì trung gian đã được ủy quyền",
                                              "Báo cáo giao dịch ngay mà không cần xác minh thông tin"
                                          ],
                              "correctAnswer":  1,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          },
                          {
                              "question":  "Một doanh nghiệp cung cấp dịch vụ công chứng nhận được giao dịch với giá trị lớn từ khách hàng, nhưng khách hàng không thể cung cấp thông tin về nguồn gốc số tiền chuyển khoản. Trong tình huống này, hành động đúng là:*",
                              "options":  [
                                              "Báo cáo giao dịch vì đây là dấu hiệu nghi ngờ rửa tiền",
                                              "Tiếp tục cung cấp dịch vụ vì là giao dịch hợp pháp",
                                              "Chỉ lưu trữ hồ sơ mà không cần báo cáo",
                                              "Yêu cầu khách hàng ký cam kết sau giao dịch"
                                          ],
                              "correctAnswer":  0,
                              "explanation":  "Đáp án màu đỏ trích xuất từ file gốc."
                          }
                      ]
    }
];
}
