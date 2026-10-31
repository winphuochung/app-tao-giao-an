import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/services/aiGenerator.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Add import
if 'getIntelligentSectionsForTopic' not in text:
    old_imp = "import { SAMPLE_KHTN_7_BAI_9_DO_TOC_DO } from '../data/sampleKhtn7Bai9';"
    new_imp = "import { SAMPLE_KHTN_7_BAI_9_DO_TOC_DO } from '../data/sampleKhtn7Bai9';\nimport { getIntelligentSectionsForTopic } from '../data/textbookCurriculumKnowledge';"
    text = text.replace(old_imp, new_imp, 1)

# Find where the activities replacement begins
start_marker = "    // MỖI ĐỀ MỤC TRONG SÁCH GIÁO KHOA LÀ MỘT HOẠT ĐỘNG ĐỘC LẬP"
end_marker = "    {\n      id: `hd-${Date.now()}-3`,"

start_pos = text.find(start_marker)
end_pos = text.find(end_marker)

print("Found markers:", start_pos, end_pos)

# New dynamic activities construction using getIntelligentSectionsForTopic
new_activities = """    // MỖI ĐỀ MỤC TRONG SÁCH GIÁO KHOA LÀ MỘT HOẠT ĐỘNG ĐỘC LẬP (Hoạt động 2.1, 2.2, 2.3...)
    // Tự động phân tích nội dung SGK của đúng bài đó và soạn chi tiết theo từng đề mục
    ...(() => {
      const secKnowledge = getIntelligentSectionsForTopic(topic, subject, metadata.khoiLop, metadata.boSach);
      const isTH = isTieuHoc;

      return secKnowledge.map((sec, secIdx) => {
        const hdIndex = `2.${secIdx + 1}`;
        const isLastSec = secIdx === secKnowledge.length - 1;

        return {
          id: `hd-${Date.now()}-2-${secIdx + 1}`,
          soThuTu: 2,
          tenHoatDong: sec.tenHoatDong,
          thoiLuong: sec.thoiLuong || (secIdx === 0 ? '14 phút' : secIdx === 1 ? '16 phút' : '12 phút'),
          deMucSGK: sec.deMuc,
          mucTieu: sec.mucTieu,
          noiDung: sec.noiDung,
          sanPham: sec.sanPham,
          ...(secIdx === 1 ? {
            hoatDongNhomTichCuc: {
              ...(isTH ? HOAT_DONG_NHOM_TIEU_HOC : HOAT_DONG_NHOM_THCS),
              promptInfographic: generateInfographicPrompts(
                metadata,
                (isTH ? HOAT_DONG_NHOM_TIEU_HOC : HOAT_DONG_NHOM_THCS).phieuGiaoNhiemVu.cauHoiNhiemVu
              )
            }
          } : {}),
          bangHaiCot: [
            {
              id: `r-2-${secIdx + 1}-1`,
              buocSuPham: isTH ? `1. Chuyển giao nhiệm vụ ${sec.deMuc}` : `Bước 1: Chuyển giao nhiệm vụ (${sec.deMuc})`,
              hinhAnhSGK: {
                tenHinh: sec.tenHinhSGK || `Hình ${secIdx + 1}: Tranh ảnh/Sơ đồ ${sec.deMuc} (SGK ${subject} ${metadata.khoiLop} - ${metadata.boSach})`,
                moTa: sec.moTaHinhSGK || `Hình ảnh trực quan trong SGK minh họa nội dung, sơ đồ hoặc tình huống gắn với ${sec.deMuc}.`,
                imageUrl: secIdx === 0 ? sgkImg1 : secIdx === 1 ? sgkImg2 : undefined,
                cauHoiKhaiThac: sec.cauHoiKhaiThac || [
                  `1. Quan sát hình ảnh trong SGK: Em nhìn thấy những yếu tố, sự vật hay đối tượng nào?`,
                  `2. Thảo luận cặp đôi/nhóm: Rút ra định nghĩa hoặc quy tắc của ${sec.deMuc}.`
                ],
                ghiChuSuPham: 'Lấy HS làm trung tâm: Hướng dẫn HS tự quan sát, tự đặt câu hỏi và tự rút ra bản chất trước khi GV chốt.'
              },
              cot1Trai: isTH
                ? `- GV hướng dẫn HS mở SGK trang bài học, quan sát hình ảnh và đọc thông tin ${sec.deMuc}.\\n- Giao nhiệm vụ thảo luận: "Em hãy quan sát thật kĩ và trao đổi cùng bạn bên cạnh trong 3 phút."\\n${metadata.tichHop.nangLucSo && nangLucSoIndicators[secIdx] ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[secIdx].maChiBao}]: Hướng dẫn HS đối chiếu tranh SGK với hình ảnh/mô phỏng số trên màn hình tương tác.\\n` : ''}- GV đi vòng quanh lớp, khuyến khích các em tự tin nêu suy nghĩ cá nhân.`
                : `- GV yêu cầu HS mở SGK trang bài học, quan sát hình ảnh bám sát ${sec.deMuc}.\\n- [PHƯƠNG PHÁP TÍCH CỰC GDPT 2018]: GV giao phiếu học tập, yêu cầu HS làm việc cá nhân 2 phút rồi trao đổi cặp đôi/nhóm 3 phút.\\n${metadata.tichHop.nangLucSo && nangLucSoIndicators[secIdx] ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[secIdx].maChiBao}]: Khai thác phần mềm chuyên dụng / mô phỏng số để giải quyết nhiệm vụ.\\n` : ''}${metadata.tichHop.quocPhongAnNinh ? `- [BẢO VỆ AN NINH QUỐC PHÒNG (TT 08/2024/TT-BGDĐT)]: Lồng ghép tìm hiểu các công trình biên giới, biển đảo quốc gia gắn với bài học.\\n` : ''}- Quan sát, phát hiện những khó khăn của học sinh để kịp thời hỗ trợ.`,
              cot2Phai: sec.cot2Phai || `${sec.deMuc.toUpperCase()}\\n- HS chủ động mở SGK, quan sát kỹ chi tiết hình ảnh và ghi ý kiến cá nhân vào phiếu học tập.\\n- Thảo luận nhóm chia sẻ suy nghĩ và rút ra kết luận khoa học.`
            },
            {
              id: `r-2-${secIdx + 1}-2`,
              buocSuPham: isTH ? '2. Hướng dẫn học sinh thực hiện nhiệm vụ' : 'Bước 2: Hướng dẫn học sinh thực hiện nhiệm vụ',
              cot1Trai: secIdx === 1
                ? `- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ (4 MÀU MỰC)]:\\n  + Nhóm trưởng (Mực xanh): Điều phối và tổng hợp.\\n  + Thư ký (Mực đen): Ghi biên bản và kết quả.\\n  + Kỹ thuật viên (Mực tím): Thao tác dụng cụ/vẽ hình.\\n  + Báo cáo viên (Mực xanh lá): Trình bày trước lớp.\\n- GV đi bao quát lớp, nhắc nhở giữ đúng 4 màu mực.`
                : `- GV theo dõi tiến độ đọc SGK và thảo luận của các cặp đôi.\\n- Đặt câu hỏi gợi mở đối với các em học sinh còn lúng túng.`,
              cot2Phai: `- Học sinh tích cực đọc SGK, chỉ tay vào các chi tiết trong hình vẽ và thống nhất câu trả lời.\\n- Phân vai rõ ràng, mỗi thành viên viết đúng màu mực quy định trên phiếu nhóm.`
            },
            {
              id: `r-2-${secIdx + 1}-3`,
              buocSuPham: isTH ? '3. Báo cáo kết quả thảo luận' : 'Bước 3: Báo cáo kết quả và thảo luận',
              cot1Trai: `- GV gọi đại diện 2 nhóm/cặp đôi trình bày kết quả khám phá ${sec.deMuc}.\\n- Mời các nhóm khác lắng nghe, nhận xét và đặt câu hỏi phản biện nhẹ nhàng.`,
              cot2Phai: `- Đại diện HS trình bày to, rõ ràng, tự tin thuyết minh sản phẩm của nhóm.\\n- Các bạn trong lớp lắng nghe, ghi chép và bổ sung ý kiến.`
            },
            {
              id: `r-2-${secIdx + 1}-4`,
              buocSuPham: isTH ? `4. Kết luận, nhận định ${sec.deMuc}` : `Bước 4: Kết luận, nhận định (${sec.deMuc})`,
              cot1Trai: isLastSec
                ? `- GV chuẩn hóa toàn bộ kiến thức khoa học bám sát nội dung SGK, chiếu SƠ ĐỒ TƯ DUY 16:9 PHONG CÁCH 3D PIXAR lên bảng tương tác.\\n- Tổ chức cho học sinh nhìn sơ đồ tư duy, tự nhắc lại định nghĩa và các công thức cốt lõi để khắc sâu kiến thức lâu dài.`
                : `- GV nhận xét tinh thần học tập chủ động của cả lớp.\\n- Chuẩn hóa kiến thức khoa học của ${sec.deMuc} và hướng dẫn HS ghi ý chính vào vở.`,
              cot2Phai: isLastSec
                ? `GHI NHỚ CỐT LÕI (SƠ ĐỒ TƯ DUY 16:9 3D PIXAR):\\n• Hệ thống hóa toàn bộ định nghĩa, tính chất và các quy tắc chủ đạo của "${topic}".\\n• Khắc sâu bản chất khoa học bám sát SGK và chuẩn GDPT 2018.`
                : `* GHI NHỚ ${sec.deMuc.toUpperCase()}:\\n- HS ghi chép nội dung trọng tâm và công thức/quy tắc vào vở bài học.`,
              ...(isLastSec ? {
                soDoTuDuy: generateMindmapData(metadata, topic, subject, isTH)
              } : {})
            }
          ]
        };
      });
    })(),\\n"""

text2 = text[:start_pos] + new_activities + text[end_pos:]

with open('src/services/aiGenerator.ts', 'w', encoding='utf-8') as f:
    f.write(text2)

print("SUCCESS: Updated aiGenerator.ts with getIntelligentSectionsForTopic!")
