// Danh mục ĐẦY ĐỦ TOÀN BỘ CÁC MÔN của các Khối Lớp 1 - 9
// Chuẩn SGK "Kết nối tri thức với cuộc sống" (Bộ GD&ĐT) - Nguồn: taphuan.nxbgd.vn

export interface CurriculumLessonItem {
  id: string;
  name: string;
  chapter: string;
  periods: string;
  ppct?: string;
}

export const FULL_CURRICULUM_CATALOG: Record<string, CurriculumLessonItem[]> = {
  "6-khtn": [
    {
      "id": "khtn-6-bai-1",
      "name": "Bài 1: Giới thiệu về Khoa học tự nhiên",
      "chapter": "Mở đầu",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "khtn-6-bai-2",
      "name": "Bài 2: Các lĩnh vực chủ yếu của Khoa học tự nhiên",
      "chapter": "Mở đầu",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "khtn-6-bai-3",
      "name": "Bài 3: Quy định an toàn trong phòng thực hành",
      "chapter": "Mở đầu",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "khtn-6-bai-4",
      "name": "Bài 4: Đo chiều dài",
      "chapter": "Chương I: Các phép đo",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "khtn-6-bai-5",
      "name": "Bài 5: Đo khối lượng",
      "chapter": "Chương I: Các phép đo",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "khtn-6-bai-6",
      "name": "Bài 6: Đo thời gian",
      "chapter": "Chương I: Các phép đo",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "khtn-6-bai-7",
      "name": "Bài 7: Thang nhiệt độ Celsius. Đo nhiệt độ",
      "chapter": "Chương I: Các phép đo",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "khtn-6-bai-8",
      "name": "Bài 8: Sự đa dạng của chất",
      "chapter": "Chương II: Chất quanh ta",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "khtn-6-bai-9",
      "name": "Bài 9: Các thể của chất và sự chuyển thể",
      "chapter": "Chương II: Chất quanh ta",
      "periods": "3 tiết",
      "ppct": "Tiết 17 - 19"
    },
    {
      "id": "khtn-6-bai-10",
      "name": "Bài 10: Chất tinh khiết và hỗn hợp",
      "chapter": "Chương II: Chất quanh ta",
      "periods": "3 tiết",
      "ppct": "Tiết 20 - 22"
    },
    {
      "id": "khtn-6-bai-11",
      "name": "Bài 11: Dung dịch và huyền phù, nhũ tương",
      "chapter": "Chương II: Chất quanh ta",
      "periods": "2 tiết",
      "ppct": "Tiết 23 - 24"
    },
    {
      "id": "khtn-6-bai-12",
      "name": "Bài 12: Tách chất ra khỏi hỗn hợp",
      "chapter": "Chương II: Chất quanh ta",
      "periods": "3 tiết",
      "ppct": "Tiết 25 - 27"
    },
    {
      "id": "khtn-6-bai-13",
      "name": "Bài 13: Một số vật liệu thông dụng",
      "chapter": "Chương III: Vật liệu, nhiên liệu",
      "periods": "2 tiết",
      "ppct": "Tiết 28 - 29"
    },
    {
      "id": "khtn-6-bai-14",
      "name": "Bài 14: Một số nhiên liệu và nguyên liệu thông dụng",
      "chapter": "Chương III: Vật liệu, nhiên liệu",
      "periods": "3 tiết",
      "ppct": "Tiết 30 - 32"
    },
    {
      "id": "khtn-6-bai-15",
      "name": "Bài 15: Một số lương thực, thực phẩm thông dụng",
      "chapter": "Chương III: Vật liệu, nhiên liệu",
      "periods": "2 tiết",
      "ppct": "Tiết 33 - 34"
    },
    {
      "id": "khtn-6-bai-16",
      "name": "Bài 16: Tế bào - Đơn vị cơ bản của sự sống",
      "chapter": "Chương IV: Tế bào",
      "periods": "2 tiết",
      "ppct": "Tiết 35 - 36"
    },
    {
      "id": "khtn-6-bai-17",
      "name": "Bài 17: Cấu tạo và chức năng của các thành phần tế bào",
      "chapter": "Chương IV: Tế bào",
      "periods": "3 tiết",
      "ppct": "Tiết 37 - 39"
    },
    {
      "id": "khtn-6-bai-18",
      "name": "Bài 18: Sự lớn lên và phân chia của tế bào",
      "chapter": "Chương IV: Tế bào",
      "periods": "2 tiết",
      "ppct": "Tiết 40 - 41"
    },
    {
      "id": "khtn-6-bai-19",
      "name": "Bài 19: Thực hành: Quan sát tế bào sinh vật",
      "chapter": "Chương IV: Tế bào",
      "periods": "2 tiết",
      "ppct": "Tiết 42 - 43"
    },
    {
      "id": "khtn-6-bai-20",
      "name": "Bài 20: Sinh vật đơn bào và đa bào",
      "chapter": "Chương V: Từ tế bào đến cơ thể",
      "periods": "2 tiết",
      "ppct": "Tiết 44 - 45"
    },
    {
      "id": "khtn-6-bai-21",
      "name": "Bài 21: Các cấp độ tổ chức trong cơ thể đa bào",
      "chapter": "Chương V: Từ tế bào đến cơ thể",
      "periods": "2 tiết",
      "ppct": "Tiết 46 - 47"
    },
    {
      "id": "khtn-6-bai-22",
      "name": "Bài 22: Phân loại thế giới sống",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 48 - 49"
    },
    {
      "id": "khtn-6-bai-23",
      "name": "Bài 23: Khóa lưỡng phân",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 50 - 51"
    },
    {
      "id": "khtn-6-bai-24",
      "name": "Bài 24: Virus",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 52 - 53"
    },
    {
      "id": "khtn-6-bai-25",
      "name": "Bài 25: Vi khuẩn",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 54 - 55"
    },
    {
      "id": "khtn-6-bai-26",
      "name": "Bài 26: Thực hành: Quan sát vi khuẩn, làm sữa chua",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 56 - 57"
    },
    {
      "id": "khtn-6-bai-27",
      "name": "Bài 27: Nguyên sinh vật",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 58 - 59"
    },
    {
      "id": "khtn-6-bai-28",
      "name": "Bài 28: Nấm",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 60 - 61"
    },
    {
      "id": "khtn-6-bai-29",
      "name": "Bài 29: Thực vật",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "3 tiết",
      "ppct": "Tiết 62 - 64"
    },
    {
      "id": "khtn-6-bai-30",
      "name": "Bài 30: Động vật không xương sống",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "3 tiết",
      "ppct": "Tiết 65 - 67"
    },
    {
      "id": "khtn-6-bai-31",
      "name": "Bài 31: Động vật có xương sống",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "3 tiết",
      "ppct": "Tiết 68 - 70"
    },
    {
      "id": "khtn-6-bai-32",
      "name": "Bài 32: Đa dạng sinh học",
      "chapter": "Chương VI: Đa dạng thế giới sống",
      "periods": "2 tiết",
      "ppct": "Tiết 71 - 72"
    },
    {
      "id": "khtn-6-bai-33",
      "name": "Bài 33: Lực và tác dụng của lực",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 73 - 74"
    },
    {
      "id": "khtn-6-bai-34",
      "name": "Bài 34: Đo lực. Lò xo xoắn",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 75 - 76"
    },
    {
      "id": "khtn-6-bai-35",
      "name": "Bài 35: Lực tiếp xúc và lực không tiếp xúc",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 77 - 78"
    },
    {
      "id": "khtn-6-bai-36",
      "name": "Bài 36: Tác dụng của lực ép",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 79 - 80"
    },
    {
      "id": "khtn-6-bai-37",
      "name": "Bài 37: Lực ma sát",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 81 - 82"
    },
    {
      "id": "khtn-6-bai-38",
      "name": "Bài 38: Lực cản của nước",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 83 - 84"
    },
    {
      "id": "khtn-6-bai-39",
      "name": "Bài 39: Khối lượng và trọng lượng",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 85 - 86"
    },
    {
      "id": "khtn-6-bai-40",
      "name": "Bài 40: Biến dạng của lò xo",
      "chapter": "Chương VII: Lực trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 87 - 88"
    },
    {
      "id": "khtn-6-bai-41",
      "name": "Bài 41: Năng lượng",
      "chapter": "Chương VIII: Năng lượng trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 89 - 90"
    },
    {
      "id": "khtn-6-bai-42",
      "name": "Bài 42: Các dạng năng lượng",
      "chapter": "Chương VIII: Năng lượng trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 91 - 92"
    },
    {
      "id": "khtn-6-bai-43",
      "name": "Bài 43: Bảo toàn năng lượng và sử dụng năng lượng",
      "chapter": "Chương VIII: Năng lượng trong đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 93 - 94"
    },
    {
      "id": "khtn-6-bai-44",
      "name": "Bài 44: Chuyển động nhìn thấy của Mặt Trời",
      "chapter": "Chương IX: Trái Đất và Bầu trời",
      "periods": "2 tiết",
      "ppct": "Tiết 95 - 96"
    },
    {
      "id": "khtn-6-bai-45",
      "name": "Bài 45: Chuyển động nhìn thấy của Mặt Trăng",
      "chapter": "Chương IX: Trái Đất và Bầu trời",
      "periods": "2 tiết",
      "ppct": "Tiết 97 - 98"
    }
  ],
  "7-khtn": [
    {
      "id": "khtn-7-bai-1",
      "name": "Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên",
      "chapter": "Mở đầu",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "khtn-7-bai-2",
      "name": "Bài 2: Nguyên tử",
      "chapter": "Chương I: Nguyên tử - Sơ lược bảng tuần hoàn",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "khtn-7-bai-3",
      "name": "Bài 3: Nguyên tố hóa học",
      "chapter": "Chương I: Nguyên tử - Sơ lược bảng tuần hoàn",
      "periods": "2 tiết",
      "ppct": "Tiết 6 - 7"
    },
    {
      "id": "khtn-7-bai-4",
      "name": "Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hóa học",
      "chapter": "Chương I: Nguyên tử - Sơ lược bảng tuần hoàn",
      "periods": "4 tiết",
      "ppct": "Tiết 8 - 11"
    },
    {
      "id": "khtn-7-bai-5",
      "name": "Bài 5: Phân tử - Đơn chất - Hợp chất",
      "chapter": "Chương II: Phân tử. Liên kết hóa học",
      "periods": "3 tiết",
      "ppct": "Tiết 12 - 14"
    },
    {
      "id": "khtn-7-bai-6",
      "name": "Bài 6: Giới thiệu về liên kết hóa học",
      "chapter": "Chương II: Phân tử. Liên kết hóa học",
      "periods": "3 tiết",
      "ppct": "Tiết 15 - 17"
    },
    {
      "id": "khtn-7-bai-7",
      "name": "Bài 7: Hóa trị và công thức hóa học",
      "chapter": "Chương II: Phân tử. Liên kết hóa học",
      "periods": "4 tiết",
      "ppct": "Tiết 18 - 21"
    },
    {
      "id": "khtn-7-bai-8",
      "name": "Bài 8: Tốc độ chuyển động",
      "chapter": "Chương III: Tốc độ",
      "periods": "2 tiết",
      "ppct": "Tiết 28 - 29"
    },
    {
      "id": "khtn-7-bai-9",
      "name": "Bài 9: Đo tốc độ",
      "chapter": "Chương III: Tốc độ",
      "periods": "2 tiết",
      "ppct": "Tiết 30 - 31"
    },
    {
      "id": "khtn-7-bai-10",
      "name": "Bài 10: Đồ thị quãng đường - thời gian",
      "chapter": "Chương III: Tốc độ",
      "periods": "2 tiết",
      "ppct": "Tiết 32 - 33"
    },
    {
      "id": "khtn-7-bai-11",
      "name": "Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông",
      "chapter": "Chương III: Tốc độ",
      "periods": "1 tiết",
      "ppct": "Tiết 34"
    },
    {
      "id": "khtn-7-bai-12",
      "name": "Bài 12: Sóng âm",
      "chapter": "Chương IV: Âm thanh",
      "periods": "2 tiết",
      "ppct": "Tiết 35 - 36"
    },
    {
      "id": "khtn-7-bai-13",
      "name": "Bài 13: Độ to và độ cao của âm",
      "chapter": "Chương IV: Âm thanh",
      "periods": "2 tiết",
      "ppct": "Tiết 37 - 38"
    },
    {
      "id": "khtn-7-bai-14",
      "name": "Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn",
      "chapter": "Chương IV: Âm thanh",
      "periods": "2 tiết",
      "ppct": "Tiết 39 - 40"
    },
    {
      "id": "khtn-7-bai-15",
      "name": "Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối",
      "chapter": "Chương V: Ánh sáng",
      "periods": "3 tiết",
      "ppct": "Tiết 41 - 43"
    },
    {
      "id": "khtn-7-bai-16",
      "name": "Bài 16: Sự phản xạ ánh sáng",
      "chapter": "Chương V: Ánh sáng",
      "periods": "2 tiết",
      "ppct": "Tiết 44 - 45"
    },
    {
      "id": "khtn-7-bai-17",
      "name": "Bài 17: Định luật phản xạ ánh sáng",
      "chapter": "Chương V: Ánh sáng",
      "periods": "2 tiết",
      "ppct": "Tiết 46 - 47"
    },
    {
      "id": "khtn-7-bai-18",
      "name": "Bài 18: Nam châm",
      "chapter": "Chương VI: Từ",
      "periods": "2 tiết",
      "ppct": "Tiết 48 - 49"
    },
    {
      "id": "khtn-7-bai-19",
      "name": "Bài 19: Từ trường",
      "chapter": "Chương VI: Từ",
      "periods": "3 tiết",
      "ppct": "Tiết 50 - 52"
    },
    {
      "id": "khtn-7-bai-20",
      "name": "Bài 20: Chế tạo nam châm điện đơn giản",
      "chapter": "Chương VI: Từ",
      "periods": "2 tiết",
      "ppct": "Tiết 53 - 54"
    },
    {
      "id": "khtn-7-bai-21",
      "name": "Bài 21: Khái quát về trao đổi chất và chuyển hóa năng lượng",
      "chapter": "Chương VII: Trao đổi chất và năng lượng",
      "periods": "2 tiết",
      "ppct": "Tiết 55 - 56"
    },
    {
      "id": "khtn-7-bai-22",
      "name": "Bài 22: Quang hợp ở thực vật",
      "chapter": "Chương VII",
      "periods": "3 tiết",
      "ppct": "Tiết 57 - 59"
    },
    {
      "id": "khtn-7-bai-23",
      "name": "Bài 23: Một số yếu tố ảnh hưởng đến quang hợp",
      "chapter": "Chương VII",
      "periods": "2 tiết",
      "ppct": "Tiết 60 - 61"
    },
    {
      "id": "khtn-7-bai-24",
      "name": "Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh",
      "chapter": "Chương VII",
      "periods": "2 tiết",
      "ppct": "Tiết 62 - 63"
    },
    {
      "id": "khtn-7-bai-25",
      "name": "Bài 25: Hô hấp tế bào",
      "chapter": "Chương VII",
      "periods": "2 tiết",
      "ppct": "Tiết 64 - 65"
    },
    {
      "id": "khtn-7-bai-26",
      "name": "Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào",
      "chapter": "Chương VII",
      "periods": "2 tiết",
      "ppct": "Tiết 66 - 67"
    },
    {
      "id": "khtn-7-bai-27",
      "name": "Bài 27: Thực hành: Hô hấp ở thực vật",
      "chapter": "Chương VII",
      "periods": "2 tiết",
      "ppct": "Tiết 68 - 69"
    },
    {
      "id": "khtn-7-bai-28",
      "name": "Bài 28: Trao đổi khí ở sinh vật",
      "chapter": "Chương VII",
      "periods": "3 tiết",
      "ppct": "Tiết 70 - 72"
    },
    {
      "id": "khtn-7-bai-29",
      "name": "Bài 29: Vai trò của nước và dinh dưỡng đối với sinh vật",
      "chapter": "Chương VII",
      "periods": "2 tiết",
      "ppct": "Tiết 73 - 74"
    },
    {
      "id": "khtn-7-bai-30",
      "name": "Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật",
      "chapter": "Chương VII",
      "periods": "3 tiết",
      "ppct": "Tiết 75 - 77"
    },
    {
      "id": "khtn-7-bai-31",
      "name": "Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật",
      "chapter": "Chương VII",
      "periods": "3 tiết",
      "ppct": "Tiết 78 - 80"
    },
    {
      "id": "khtn-7-bai-32",
      "name": "Bài 32: Cảm ứng ở sinh vật",
      "chapter": "Chương VIII: Cảm ứng ở sinh vật",
      "periods": "2 tiết",
      "ppct": "Tiết 81 - 82"
    },
    {
      "id": "khtn-7-bai-33",
      "name": "Bài 33: Tập tính ở động vật",
      "chapter": "Chương VIII: Cảm ứng ở sinh vật",
      "periods": "2 tiết",
      "ppct": "Tiết 83 - 84"
    },
    {
      "id": "khtn-7-bai-34",
      "name": "Bài 34: Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn",
      "chapter": "Chương VIII",
      "periods": "2 tiết",
      "ppct": "Tiết 85 - 86"
    },
    {
      "id": "khtn-7-bai-35",
      "name": "Bài 35: Sinh trưởng và phát triển ở sinh vật",
      "chapter": "Chương IX: Sinh trưởng và phát triển",
      "periods": "2 tiết",
      "ppct": "Tiết 87 - 88"
    },
    {
      "id": "khtn-7-bai-36",
      "name": "Bài 36: Các yếu tố ảnh hưởng đến sinh trưởng và phát triển",
      "chapter": "Chương IX",
      "periods": "2 tiết",
      "ppct": "Tiết 89 - 90"
    },
    {
      "id": "khtn-7-bai-37",
      "name": "Bài 37: Ứng dụng sinh trưởng và phát triển vào thực tiễn",
      "chapter": "Chương IX",
      "periods": "2 tiết",
      "ppct": "Tiết 91 - 92"
    },
    {
      "id": "khtn-7-bai-38",
      "name": "Bài 38: Thực hành: Quan sát mô tả sự sinh trưởng của sinh vật",
      "chapter": "Chương IX",
      "periods": "2 tiết",
      "ppct": "Tiết 93 - 94"
    },
    {
      "id": "khtn-7-bai-39",
      "name": "Bài 39: Sinh sản vô tính ở sinh vật",
      "chapter": "Chương X: Sinh sản ở sinh vật",
      "periods": "3 tiết",
      "ppct": "Tiết 95 - 97"
    },
    {
      "id": "khtn-7-bai-40",
      "name": "Bài 40: Sinh sản hữu tính ở sinh vật",
      "chapter": "Chương X",
      "periods": "3 tiết",
      "ppct": "Tiết 98 - 100"
    },
    {
      "id": "khtn-7-bai-41",
      "name": "Bài 41: Một số yếu tố ảnh hưởng đến sinh sản ở sinh vật",
      "chapter": "Chương X",
      "periods": "2 tiết",
      "ppct": "Tiết 101 - 102"
    },
    {
      "id": "khtn-7-bai-42",
      "name": "Bài 42: Cơ thể sinh vật là một thể thống nhất",
      "chapter": "Chương X",
      "periods": "1 tiết",
      "ppct": "Tiết 103"
    }
  ],
  "8-khtn": [
    {
      "id": "khtn-8-bai-1",
      "name": "Bài 1: Sử dụng một số hóa chất, thiết bị trong phòng thí nghiệm",
      "chapter": "Chương I: Phản ứng hóa học",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "khtn-8-bai-2",
      "name": "Bài 2: Phản ứng hóa học",
      "chapter": "Chương I: Phản ứng hóa học",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "khtn-8-bai-3",
      "name": "Bài 3: Định luật bảo toàn khối lượng và phương trình hóa học",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 6 - 8"
    },
    {
      "id": "khtn-8-bai-4",
      "name": "Bài 4: Mol và tỉ khối của chất khí",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 9 - 11"
    },
    {
      "id": "khtn-8-bai-5",
      "name": "Bài 5: Nồng độ dung dịch",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 12 - 14"
    },
    {
      "id": "khtn-8-bai-6",
      "name": "Bài 6: Tốc độ phản ứng và chất xúc tác",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "khtn-8-bai-7",
      "name": "Bài 7: Khái niệm về acid và base",
      "chapter": "Chương II: Một số hợp chất thông dụng",
      "periods": "2 tiết",
      "ppct": "Tiết 17 - 18"
    },
    {
      "id": "khtn-8-bai-8",
      "name": "Bài 8: Acid",
      "chapter": "Chương II: Một số hợp chất thông dụng",
      "periods": "3 tiết",
      "ppct": "Tiết 19 - 21"
    },
    {
      "id": "khtn-8-bai-9",
      "name": "Bài 9: Base. Thang pH",
      "chapter": "Chương II: Một số hợp chất thông dụng",
      "periods": "3 tiết",
      "ppct": "Tiết 22 - 24"
    },
    {
      "id": "khtn-8-bai-10",
      "name": "Bài 10: Oxide",
      "chapter": "Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 25 - 26"
    },
    {
      "id": "khtn-8-bai-11",
      "name": "Bài 11: Muối",
      "chapter": "Chương II",
      "periods": "3 tiết",
      "ppct": "Tiết 27 - 29"
    },
    {
      "id": "khtn-8-bai-12",
      "name": "Bài 12: Phân bón hóa học",
      "chapter": "Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 30 - 31"
    },
    {
      "id": "khtn-8-bai-13",
      "name": "Bài 13: Khối lượng riêng và áp suất",
      "chapter": "Chương III: Khối lượng riêng và áp suất",
      "periods": "3 tiết",
      "ppct": "Tiết 32 - 34"
    },
    {
      "id": "khtn-8-bai-14",
      "name": "Bài 14: Áp suất chất lỏng và áp suất khí quyển",
      "chapter": "Chương III",
      "periods": "3 tiết",
      "ppct": "Tiết 35 - 37"
    },
    {
      "id": "khtn-8-bai-15",
      "name": "Bài 15: Đòn bẩy và tác dụng của đòn bẩy",
      "chapter": "Chương IV: Tác dụng làm quay của lực",
      "periods": "2 tiết",
      "ppct": "Tiết 38 - 39"
    },
    {
      "id": "khtn-8-bai-16",
      "name": "Bài 16: Lực đẩy Archimedes",
      "chapter": "Chương IV",
      "periods": "3 tiết",
      "ppct": "Tiết 40 - 42"
    },
    {
      "id": "khtn-8-bai-17",
      "name": "Bài 17: Mạch điện đơn giản",
      "chapter": "Chương V: Điện",
      "periods": "2 tiết",
      "ppct": "Tiết 43 - 44"
    },
    {
      "id": "khtn-8-bai-18",
      "name": "Bài 18: Tác dụng của dòng điện",
      "chapter": "Chương V",
      "periods": "2 tiết",
      "ppct": "Tiết 45 - 46"
    },
    {
      "id": "khtn-8-bai-19",
      "name": "Bài 19: Cường độ dòng điện và hiệu điện thế",
      "chapter": "Chương V",
      "periods": "3 tiết",
      "ppct": "Tiết 47 - 49"
    }
  ],
  "9-khtn": [
    {
      "id": "khtn-9-bai-1",
      "name": "Bài 1: Nhận biết một số dụng cụ, hóa chất phòng thí nghiệm",
      "chapter": "Mở đầu",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "khtn-9-bai-2",
      "name": "Bài 2: Tính chất chung của kim loại",
      "chapter": "Chương I: Kim loại",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "khtn-9-bai-3",
      "name": "Bài 3: Dãy hoạt động hóa học của kim loại",
      "chapter": "Chương I: Kim loại",
      "periods": "3 tiết",
      "ppct": "Tiết 6 - 8"
    },
    {
      "id": "khtn-9-bai-4",
      "name": "Bài 4: Tách kim loại và việc sử dụng hợp kim",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 9 - 11"
    },
    {
      "id": "khtn-9-bai-5",
      "name": "Bài 5: Khúc xạ ánh sáng",
      "chapter": "Chương II: Ánh sáng",
      "periods": "3 tiết",
      "ppct": "Tiết 12 - 14"
    },
    {
      "id": "khtn-9-bai-6",
      "name": "Bài 6: Phản xạ toàn phần",
      "chapter": "Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "khtn-9-bai-7",
      "name": "Bài 7: Thấu kính. Kính lúp",
      "chapter": "Chương II",
      "periods": "3 tiết",
      "ppct": "Tiết 17 - 19"
    },
    {
      "id": "khtn-9-bai-8",
      "name": "Bài 8: Điện năng. Công của dòng điện",
      "chapter": "Chương III: Điện từ học",
      "periods": "3 tiết",
      "ppct": "Tiết 20 - 22"
    },
    {
      "id": "khtn-9-bai-9",
      "name": "Bài 9: Cảm ứng điện từ. Dòng điện xoay chiều",
      "chapter": "Chương III",
      "periods": "3 tiết",
      "ppct": "Tiết 23 - 25"
    }
  ],
  "6-congnghe": [
    {
      "id": "cn-6-bai-1",
      "name": "Bài 1: Khái quát về nhà ở",
      "chapter": "Chương I: Nhà ở",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "cn-6-bai-2",
      "name": "Bài 2: Xây dựng nhà ở",
      "chapter": "Chương I: Nhà ở",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "cn-6-bai-3",
      "name": "Bài 3: Ngôi nhà thông minh",
      "chapter": "Chương I: Nhà ở",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "cn-6-bai-4",
      "name": "Bài 4: Thực phẩm và dinh dưỡng",
      "chapter": "Chương II: Bảo quản và chế biến thực phẩm",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "cn-6-bai-5",
      "name": "Bài 5: Phương pháp bảo quản và chế biến thực phẩm",
      "chapter": "Chương II",
      "periods": "3 tiết",
      "ppct": "Tiết 9 - 11"
    },
    {
      "id": "cn-6-bai-6",
      "name": "Bài 6: Dự án: Bữa ăn kết nối yêu thương",
      "chapter": "Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 12 - 13"
    },
    {
      "id": "cn-6-bai-7",
      "name": "Bài 7: Trang phục trong đời sống",
      "chapter": "Chương III: Trang phục và thời trang",
      "periods": "2 tiết",
      "ppct": "Tiết 14 - 15"
    },
    {
      "id": "cn-6-bai-8",
      "name": "Bài 8: Sử dụng và bảo quản trang phục",
      "chapter": "Chương III",
      "periods": "2 tiết",
      "ppct": "Tiết 16 - 17"
    },
    {
      "id": "cn-6-bai-9",
      "name": "Bài 9: Thời trang",
      "chapter": "Chương III",
      "periods": "2 tiết",
      "ppct": "Tiết 18 - 19"
    },
    {
      "id": "cn-6-bai-10",
      "name": "Bài 10: Khái quát về đồ dùng điện trong gia đình",
      "chapter": "Chương IV: Đồ dùng điện trong gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 20 - 21"
    },
    {
      "id": "cn-6-bai-11",
      "name": "Bài 11: Đèn điện",
      "chapter": "Chương IV",
      "periods": "2 tiết",
      "ppct": "Tiết 22 - 23"
    },
    {
      "id": "cn-6-bai-12",
      "name": "Bài 12: Nồi cơm điện",
      "chapter": "Chương IV",
      "periods": "2 tiết",
      "ppct": "Tiết 24 - 25"
    },
    {
      "id": "cn-6-bai-13",
      "name": "Bài 13: Bếp hồng ngoại",
      "chapter": "Chương IV",
      "periods": "2 tiết",
      "ppct": "Tiết 26 - 27"
    },
    {
      "id": "cn-6-bai-14",
      "name": "Bài 14: Dự án: An toàn và tiết kiệm điện trong gia đình",
      "chapter": "Chương IV",
      "periods": "2 tiết",
      "ppct": "Tiết 28 - 29"
    }
  ],
  "7-congnghe": [
    {
      "id": "cn-7-bai-1",
      "name": "Bài 1: Giới thiệu về trồng trọt",
      "chapter": "Phần 1: Trồng trọt",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "cn-7-bai-2",
      "name": "Bài 2: Làm đất trồng cây",
      "chapter": "Phần 1: Trồng trọt",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "cn-7-bai-3",
      "name": "Bài 3: Gieo trồng cây nông nghiệp",
      "chapter": "Phần 1: Trồng trọt",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "cn-7-bai-4",
      "name": "Bài 4: Chăm sóc cây trồng",
      "chapter": "Phần 1: Trồng trọt",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "cn-7-bai-5",
      "name": "Bài 5: Thu hoạch sản phẩm trồng trọt",
      "chapter": "Phần 1: Trồng trọt",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "cn-7-bai-6",
      "name": "Bài 6: Nhân giống vô tính cây trồng",
      "chapter": "Phần 1: Trồng trọt",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "cn-7-bai-7",
      "name": "Bài 7: Giới thiệu về rừng",
      "chapter": "Phần 2: Lâm nghiệp",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "cn-7-bai-8",
      "name": "Bài 8: Trồng và chăm sóc rừng",
      "chapter": "Phần 2: Lâm nghiệp",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "cn-7-bai-9",
      "name": "Bài 9: Bảo vệ rừng và môi trường sinh thái",
      "chapter": "Phần 2: Lâm nghiệp",
      "periods": "2 tiết",
      "ppct": "Tiết 17 - 18"
    },
    {
      "id": "cn-7-bai-10",
      "name": "Bài 10: Giới thiệu về chăn nuôi",
      "chapter": "Phần 3: Chăn nuôi",
      "periods": "2 tiết",
      "ppct": "Tiết 19 - 20"
    },
    {
      "id": "cn-7-bai-11",
      "name": "Bài 11: Nuôi dưỡng và chăm sóc vật nuôi",
      "chapter": "Phần 3: Chăn nuôi",
      "periods": "2 tiết",
      "ppct": "Tiết 21 - 22"
    },
    {
      "id": "cn-7-bai-12",
      "name": "Bài 12: Quản lý và phòng, trị bệnh cho vật nuôi",
      "chapter": "Phần 3: Chăn nuôi",
      "periods": "2 tiết",
      "ppct": "Tiết 23 - 24"
    },
    {
      "id": "cn-7-bai-13",
      "name": "Bài 13: Giới thiệu về thủy sản",
      "chapter": "Phần 4: Thủy sản",
      "periods": "2 tiết",
      "ppct": "Tiết 25 - 26"
    },
    {
      "id": "cn-7-bai-14",
      "name": "Bài 14: Nuôi cá trong ao",
      "chapter": "Phần 4: Thủy sản",
      "periods": "2 tiết",
      "ppct": "Tiết 27 - 28"
    }
  ],
  "8-congnghe": [
    {
      "id": "cn-8-bai-1",
      "name": "Bài 1: Tiêu chuẩn trình bày bản vẽ kĩ thuật",
      "chapter": "Chương I: Vẽ kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "cn-8-bai-2",
      "name": "Bài 2: Hình chiếu vuông góc",
      "chapter": "Chương I: Vẽ kĩ thuật",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "cn-8-bai-3",
      "name": "Bài 3: Bản vẽ chi tiết",
      "chapter": "Chương I: Vẽ kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 6 - 7"
    },
    {
      "id": "cn-8-bai-4",
      "name": "Bài 4: Bản vẽ lắp",
      "chapter": "Chương I: Vẽ kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 8 - 9"
    },
    {
      "id": "cn-8-bai-5",
      "name": "Bài 5: Bản vẽ nhà",
      "chapter": "Chương I: Vẽ kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 10 - 11"
    },
    {
      "id": "cn-8-bai-6",
      "name": "Bài 6: Vật liệu cơ khí",
      "chapter": "Chương II: Cơ khí",
      "periods": "2 tiết",
      "ppct": "Tiết 12 - 13"
    },
    {
      "id": "cn-8-bai-7",
      "name": "Bài 7: Truyền và biến đổi chuyển động",
      "chapter": "Chương II: Cơ khí",
      "periods": "3 tiết",
      "ppct": "Tiết 14 - 16"
    },
    {
      "id": "cn-8-bai-8",
      "name": "Bài 8: Gia công cơ khí bằng tay",
      "chapter": "Chương II: Cơ khí",
      "periods": "2 tiết",
      "ppct": "Tiết 17 - 18"
    },
    {
      "id": "cn-8-bai-9",
      "name": "Bài 9: Mạch điện cơ bản",
      "chapter": "Chương III: Kĩ thuật điện",
      "periods": "2 tiết",
      "ppct": "Tiết 19 - 20"
    },
    {
      "id": "cn-8-bai-10",
      "name": "Bài 10: Mạch điện điều khiển",
      "chapter": "Chương III: Kĩ thuật điện",
      "periods": "2 tiết",
      "ppct": "Tiết 21 - 22"
    },
    {
      "id": "cn-8-bai-11",
      "name": "Bài 11: An toàn điện",
      "chapter": "Chương III: Kĩ thuật điện",
      "periods": "2 tiết",
      "ppct": "Tiết 23 - 24"
    },
    {
      "id": "cn-8-bai-12",
      "name": "Bài 12: Khái quát về thiết kế kĩ thuật",
      "chapter": "Chương IV: Thiết kế kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 25 - 26"
    }
  ],
  "9-congnghe": [
    {
      "id": "cn-9-bai-1",
      "name": "Bài 1: Giới thiệu nghề điện dân dụng",
      "chapter": "Mô-đun Lắp đặt mạng điện",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "cn-9-bai-2",
      "name": "Bài 2: Dụng cụ và vật liệu dùng cho lắp đặt mạng điện",
      "chapter": "Mô-đun Lắp đặt mạng điện",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "cn-9-bai-3",
      "name": "Bài 3: Thực hành: Nối dây dẫn điện",
      "chapter": "Mô-đun Lắp đặt mạng điện",
      "periods": "3 tiết",
      "ppct": "Tiết 5 - 7"
    },
    {
      "id": "cn-9-bai-4",
      "name": "Bài 4: Thực hành: Lắp mạch điện bảng điện",
      "chapter": "Mô-đun Lắp đặt mạng điện",
      "periods": "3 tiết",
      "ppct": "Tiết 8 - 10"
    },
    {
      "id": "cn-9-bai-5",
      "name": "Bài 5: Thực hành: Lắp mạch điện đèn ống huỳnh quang / LED",
      "chapter": "Mô-đun Lắp đặt mạng điện",
      "periods": "3 tiết",
      "ppct": "Tiết 11 - 13"
    },
    {
      "id": "cn-9-bai-6",
      "name": "Bài 6: Khái quát về mô-đun Trồng cây ăn quả",
      "chapter": "Mô-đun Nông nghiệp",
      "periods": "2 tiết",
      "ppct": "Tiết 14 - 15"
    }
  ],
  "3-congnghe": [
    {
      "id": "cn-3-bai-1",
      "name": "Bài 1: Tự nhiên và công nghệ",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "cn-3-bai-2",
      "name": "Bài 2: Sử dụng đèn học",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "cn-3-bai-3",
      "name": "Bài 3: Sử dụng quạt điện",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "cn-3-bai-4",
      "name": "Bài 4: Sử dụng máy thu thanh (Radio)",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "cn-3-bai-5",
      "name": "Bài 5: Sử dụng máy thu hình (Tivi)",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "cn-3-bai-6",
      "name": "Bài 6: An toàn với môi trường công nghệ trong gia đình",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "cn-3-bai-7",
      "name": "Bài 7: Dụng cụ và vật liệu làm thủ công",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "cn-3-bai-8",
      "name": "Bài 8: Làm đồ dùng học tập",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "3 tiết",
      "ppct": "Tiết 15 - 17"
    },
    {
      "id": "cn-3-bai-9",
      "name": "Bài 9: Làm biển báo giao thông",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "3 tiết",
      "ppct": "Tiết 18 - 20"
    },
    {
      "id": "cn-3-bai-10",
      "name": "Bài 10: Làm đồ chơi",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "3 tiết",
      "ppct": "Tiết 21 - 23"
    }
  ],
  "4-congnghe": [
    {
      "id": "cn-4-bai-1",
      "name": "Bài 1: Lợi ích của hoa, cây cảnh",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "cn-4-bai-2",
      "name": "Bài 2: Một số loại hoa, cây cảnh phổ biến",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "cn-4-bai-3",
      "name": "Bài 3: Vật liệu và dụng cụ trồng hoa, cây cảnh",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "cn-4-bai-4",
      "name": "Bài 4: Gieo hạt và trồng cây con trong chậu",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "cn-4-bai-5",
      "name": "Bài 5: Trồng hoa, cây cảnh trong chậu",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "cn-4-bai-6",
      "name": "Bài 6: Chăm sóc hoa, cây cảnh trong chậu",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "cn-4-bai-7",
      "name": "Bài 7: Giới thiệu bộ lắp ghép mô hình kĩ thuật",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "cn-4-bai-8",
      "name": "Bài 8: Lắp ghép mô hình bập bênh",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "2 tiết",
      "ppct": "Tiết 17 - 18"
    },
    {
      "id": "cn-4-bai-9",
      "name": "Bài 9: Lắp ghép mô hình robot",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "3 tiết",
      "ppct": "Tiết 19 - 21"
    }
  ],
  "5-congnghe": [
    {
      "id": "cn-5-bai-1",
      "name": "Bài 1: Vai trò của công nghệ",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "cn-5-bai-2",
      "name": "Bài 2: Nhà sáng chế",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "cn-5-bai-3",
      "name": "Bài 3: Tìm hiểu thiết kế",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "cn-5-bai-4",
      "name": "Bài 4: Thiết kế sản phẩm công nghệ",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "cn-5-bai-5",
      "name": "Bài 5: Sử dụng điện thoại",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 10 - 11"
    },
    {
      "id": "cn-5-bai-6",
      "name": "Bài 6: Sử dụng tủ lạnh",
      "chapter": "Phần 1: Công nghệ và đời sống",
      "periods": "2 tiết",
      "ppct": "Tiết 12 - 13"
    },
    {
      "id": "cn-5-bai-7",
      "name": "Bài 7: Lắp ráp mô hình xe chạy bằng động cơ điện",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "3 tiết",
      "ppct": "Tiết 14 - 16"
    },
    {
      "id": "cn-5-bai-8",
      "name": "Bài 8: Mô hình máy phát điện gió",
      "chapter": "Phần 2: Thủ công kĩ thuật",
      "periods": "3 tiết",
      "ppct": "Tiết 17 - 19"
    }
  ],
  "6-tinhoc": [
    {
      "id": "th-6-bai-1",
      "name": "Bài 1: Thông tin và thu nhận thông tin",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "th-6-bai-2",
      "name": "Bài 2: Lưu trữ và trao đổi thông tin",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "th-6-bai-3",
      "name": "Bài 3: Máy tính trong hoạt động thông tin",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "th-6-bai-4",
      "name": "Bài 4: Mạng máy tính",
      "chapter": "Chủ đề 2: Mạng máy tính và Internet",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "th-6-bai-5",
      "name": "Bài 5: Internet",
      "chapter": "Chủ đề 2: Mạng máy tính và Internet",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "th-6-bai-6",
      "name": "Bài 6: Mạng thông tin toàn cầu",
      "chapter": "Chủ đề 2: Mạng máy tính và Internet",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "th-6-bai-7",
      "name": "Bài 7: Tìm kiếm thông tin trên Internet",
      "chapter": "Chủ đề 2: Mạng máy tính và Internet",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "th-6-bai-8",
      "name": "Bài 8: Thư điện tử",
      "chapter": "Chủ đề 2: Mạng máy tính và Internet",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "th-6-bai-9",
      "name": "Bài 9: An toàn thông tin trên Internet",
      "chapter": "Chủ đề 3: Đạo đức, pháp luật và văn hóa số",
      "periods": "2 tiết",
      "ppct": "Tiết 17 - 18"
    },
    {
      "id": "th-6-bai-10",
      "name": "Bài 10: Sơ đồ tư duy",
      "chapter": "Chủ đề 4: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 19 - 20"
    },
    {
      "id": "th-6-bai-11",
      "name": "Bài 11: Định dạng văn bản",
      "chapter": "Chủ đề 4: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 21 - 22"
    },
    {
      "id": "th-6-bai-12",
      "name": "Bài 12: Trình bày thông tin ở dạng bảng",
      "chapter": "Chủ đề 4: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 23 - 24"
    },
    {
      "id": "th-6-bai-13",
      "name": "Bài 13: Thực hành: Hoàn thiện văn bản",
      "chapter": "Chủ đề 4: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 25 - 26"
    },
    {
      "id": "th-6-bai-14",
      "name": "Bài 14: Thuật toán",
      "chapter": "Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính",
      "periods": "2 tiết",
      "ppct": "Tiết 27 - 28"
    },
    {
      "id": "th-6-bai-15",
      "name": "Bài 15: Các cấu trúc điều khiển cơ bản",
      "chapter": "Chủ đề 5",
      "periods": "2 tiết",
      "ppct": "Tiết 29 - 30"
    }
  ],
  "7-tinhoc": [
    {
      "id": "th-7-bai-1",
      "name": "Bài 1: Thiết bị vào - ra",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "th-7-bai-2",
      "name": "Bài 2: Phần mềm ứng dụng",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "th-7-bai-3",
      "name": "Bài 3: Quản lí dữ liệu trong máy tính",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "th-7-bai-4",
      "name": "Bài 4: Mạng xã hội",
      "chapter": "Chủ đề 2: Đạo đức, pháp luật và văn hóa số",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "th-7-bai-5",
      "name": "Bài 5: Ứng xử trên mạng xã hội",
      "chapter": "Chủ đề 2: Đạo đức, pháp luật và văn hóa số",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "th-7-bai-6",
      "name": "Bài 6: Làm quen với phần mềm bảng tính",
      "chapter": "Chủ đề 3: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "th-7-bai-7",
      "name": "Bài 7: Tính toán tự động trên bảng tính",
      "chapter": "Chủ đề 3: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "th-7-bai-8",
      "name": "Bài 8: Định dạng ô tính và sắp xếp dữ liệu",
      "chapter": "Chủ đề 3: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "th-7-bai-9",
      "name": "Bài 9: Trình bày biểu đồ dữ liệu",
      "chapter": "Chủ đề 3: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 17 - 18"
    },
    {
      "id": "th-7-bai-10",
      "name": "Bài 10: Thuật toán tìm kiếm tuần tự",
      "chapter": "Chủ đề 4: Giải quyết vấn đề với máy tính",
      "periods": "2 tiết",
      "ppct": "Tiết 19 - 20"
    },
    {
      "id": "th-7-bai-11",
      "name": "Bài 11: Thuật toán tìm kiếm nhị phân",
      "chapter": "Chủ đề 4: Giải quyết vấn đề với máy tính",
      "periods": "2 tiết",
      "ppct": "Tiết 21 - 22"
    },
    {
      "id": "th-7-bai-12",
      "name": "Bài 12: Thuật toán sắp xếp nổi bọt",
      "chapter": "Chủ đề 4: Giải quyết vấn đề với máy tính",
      "periods": "2 tiết",
      "ppct": "Tiết 23 - 24"
    }
  ],
  "8-tinhoc": [
    {
      "id": "th-8-bai-1",
      "name": "Bài 1: Lược sử công cụ tính toán",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "th-8-bai-2",
      "name": "Bài 2: Thông tin trong môi trường số",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "th-8-bai-3",
      "name": "Bài 3: Thực hành khai thác thông tin số",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "th-8-bai-4",
      "name": "Bài 4: Đạo đức và văn hóa số",
      "chapter": "Chủ đề 2: Đạo đức, pháp luật số",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "th-8-bai-5",
      "name": "Bài 5: Biểu diễn thuật toán bằng sơ đồ khối",
      "chapter": "Chủ đề 3: Giải quyết vấn đề",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "th-8-bai-6",
      "name": "Bài 6: Cấu trúc rẽ nhánh",
      "chapter": "Chủ đề 3",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "th-8-bai-7",
      "name": "Bài 7: Cấu trúc lặp",
      "chapter": "Chủ đề 3",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "th-8-bai-8",
      "name": "Bài 8: Lập trình Scratch giải bài toán thực tế",
      "chapter": "Chủ đề 3",
      "periods": "3 tiết",
      "ppct": "Tiết 15 - 17"
    }
  ],
  "9-tinhoc": [
    {
      "id": "th-9-bai-1",
      "name": "Bài 1: Thiết bị thông minh và vai trò trong xã hội hiện đại",
      "chapter": "Chủ đề 1: Máy tính và cộng đồng",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "th-9-bai-2",
      "name": "Bài 2: Mạng máy tính và điện toán đám mây",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "th-9-bai-3",
      "name": "Bài 3: Cơ sở dữ liệu và hệ quản trị CSDL",
      "chapter": "Chủ đề 2: Ứng dụng tin học",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "th-9-bai-4",
      "name": "Bài 4: Bảng và khóa trong cơ sở dữ liệu",
      "chapter": "Chủ đề 2",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "th-9-bai-5",
      "name": "Bài 5: Lập trình với ngôn ngữ bậc cao (Python)",
      "chapter": "Chủ đề 3: Lập trình",
      "periods": "3 tiết",
      "ppct": "Tiết 9 - 11"
    },
    {
      "id": "th-9-bai-6",
      "name": "Bài 6: Xử lý dữ liệu văn bản và mảng trong Python",
      "chapter": "Chủ đề 3",
      "periods": "3 tiết",
      "ppct": "Tiết 12 - 14"
    }
  ],
  "3-tinhoc": [
    {
      "id": "th-3-bai-1",
      "name": "Bài 1: Thông tin và quyết định",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "th-3-bai-2",
      "name": "Bài 2: Xử lí thông tin",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "th-3-bai-3",
      "name": "Bài 3: Máy tính - Người bạn mới",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "th-3-bai-4",
      "name": "Bài 4: Sử dụng chuột máy tính",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "th-3-bai-5",
      "name": "Bài 5: Sử dụng bàn phím máy tính",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "th-3-bai-6",
      "name": "Bài 6: Khám phá Internet",
      "chapter": "Chủ đề 2: Mạng máy tính",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "th-3-bai-7",
      "name": "Bài 7: Sắp xếp để dễ tìm",
      "chapter": "Chủ đề 3: Tổ chức thông tin",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "th-3-bai-8",
      "name": "Bài 8: Sơ đồ tư duy",
      "chapter": "Chủ đề 3",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    }
  ],
  "4-tinhoc": [
    {
      "id": "th-4-bai-1",
      "name": "Bài 1: Phần cứng và phần mềm máy tính",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "th-4-bai-2",
      "name": "Bài 2: Gõ bàn phím đúng cách",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "th-4-bai-3",
      "name": "Bài 3: Tìm kiếm thông tin trên Internet",
      "chapter": "Chủ đề 2: Internet",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "th-4-bai-4",
      "name": "Bài 4: Chèn hình ảnh vào văn bản",
      "chapter": "Chủ đề 3: Soạn thảo văn bản",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "th-4-bai-5",
      "name": "Bài 5: Chèn bảng vào văn bản",
      "chapter": "Chủ đề 3: Soạn thảo văn bản",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "th-4-bai-6",
      "name": "Bài 6: Tạo bài trình chiếu đơn giản",
      "chapter": "Chủ đề 4: Trình chiếu",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "th-4-bai-7",
      "name": "Bài 7: Làm quen với lập trình trực quan Scratch",
      "chapter": "Chủ đề 5: Lập trình",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    }
  ],
  "5-tinhoc": [
    {
      "id": "th-5-bai-1",
      "name": "Bài 1: Máy tính và thông tin kĩ thuật số",
      "chapter": "Chủ đề 1: Máy tính và em",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "th-5-bai-2",
      "name": "Bài 2: Tôn trọng bản quyền khi sử dụng thông tin",
      "chapter": "Chủ đề 2: Văn hóa số",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "th-5-bai-3",
      "name": "Bài 3: Thu thập và tổ chức dữ liệu",
      "chapter": "Chủ đề 3: Tổ chức lưu trữ",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "th-5-bai-4",
      "name": "Bài 4: Định dạng nâng cao trong soạn thảo văn bản",
      "chapter": "Chủ đề 4: Ứng dụng",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "th-5-bai-5",
      "name": "Bài 5: Hiệu ứng chuyển động trong trình chiếu",
      "chapter": "Chủ đề 4: Ứng dụng",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "th-5-bai-6",
      "name": "Bài 6: Cấu trúc rẽ nhánh trong Scratch",
      "chapter": "Chủ đề 5: Lập trình",
      "periods": "3 tiết",
      "ppct": "Tiết 11 - 13"
    },
    {
      "id": "th-5-bai-7",
      "name": "Bài 7: Cấu trúc lặp trong Scratch",
      "chapter": "Chủ đề 5: Lập trình",
      "periods": "3 tiết",
      "ppct": "Tiết 14 - 16"
    }
  ],
  "6-lsdl": [
    {
      "id": "ls-6-bai-1",
      "name": "Bài 1: Lịch sử và cuộc sống",
      "chapter": "Lịch sử - Chương I: Vì sao phải học lịch sử",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "ls-6-bai-2",
      "name": "Bài 2: Thời gian trong lịch sử",
      "chapter": "Lịch sử - Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "ls-6-bai-3",
      "name": "Bài 3: Nguồn gốc loài người",
      "chapter": "Lịch sử - Chương II: Xã hội nguyên thủy",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "ls-6-bai-4",
      "name": "Bài 4: Xã hội nguyên thủy",
      "chapter": "Lịch sử - Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "ls-6-bai-5",
      "name": "Bài 5: Chuyển biến từ xã hội nguyên thủy sang xã hội có giai cấp",
      "chapter": "Lịch sử - Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "ls-6-bai-6",
      "name": "Bài 6: Ai Cập và Lưỡng Hà cổ đại",
      "chapter": "Lịch sử - Chương III: Xã hội cổ đại",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "ls-6-bai-7",
      "name": "Bài 7: Ấn Độ cổ đại",
      "chapter": "Lịch sử - Chương III",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "ls-6-bai-8",
      "name": "Bài 8: Trung Quốc cổ đại",
      "chapter": "Lịch sử - Chương III",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    },
    {
      "id": "ls-6-bai-9",
      "name": "Bài 9: Hy Lạp và La Mã cổ đại",
      "chapter": "Lịch sử - Chương III",
      "periods": "3 tiết",
      "ppct": "Tiết 17 - 19"
    },
    {
      "id": "ls-6-bai-10",
      "name": "Bài 10: Nhà nước Văn Lang, Âu Lạc",
      "chapter": "Lịch sử - Chương IV: Việt Nam thời nguyên thủy đến TK X",
      "periods": "3 tiết",
      "ppct": "Tiết 20 - 22"
    },
    {
      "id": "dl-6-bai-1",
      "name": "Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí",
      "chapter": "Địa lí - Chương I: Bản đồ",
      "periods": "2 tiết",
      "ppct": "Tiết 23 - 24"
    },
    {
      "id": "dl-6-bai-2",
      "name": "Bài 2: Bản đồ. Một số lưới kinh vĩ tuyến",
      "chapter": "Địa lí - Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 25 - 26"
    },
    {
      "id": "dl-6-bai-3",
      "name": "Bài 3: Tỉ lệ bản đồ. Tính khoảng cách",
      "chapter": "Địa lí - Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 27 - 28"
    },
    {
      "id": "dl-6-bai-4",
      "name": "Bài 4: Vị trí của Trái Đất trong hệ Mặt Trời",
      "chapter": "Địa lí - Chương II: Trái Đất",
      "periods": "2 tiết",
      "ppct": "Tiết 29 - 30"
    },
    {
      "id": "dl-6-bai-5",
      "name": "Bài 5: Chuyển động tự quay quanh trục của Trái Đất",
      "chapter": "Địa lí - Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 31 - 32"
    },
    {
      "id": "dl-6-bai-6",
      "name": "Bài 6: Chuyển động của Trái Đất quanh Mặt Trời",
      "chapter": "Địa lí - Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 33 - 34"
    }
  ],
  "7-lsdl": [
    {
      "id": "ls-7-bai-1",
      "name": "Bài 1: Quá trình hình thành và phát triển của chế độ phong kiến Tây Âu",
      "chapter": "Lịch sử - Tây Âu thời trung đại",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "ls-7-bai-2",
      "name": "Bài 2: Các cuộc phát kiến địa lí và sự hình thành CNTB ở Tây Âu",
      "chapter": "Lịch sử",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "ls-7-bai-3",
      "name": "Bài 3: Phong trào Văn hóa Phục hưng và Cải cách tôn giáo",
      "chapter": "Lịch sử",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "ls-7-bai-4",
      "name": "Bài 4: Trung Quốc thời phong kiến",
      "chapter": "Lịch sử",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "ls-7-bai-5",
      "name": "Bài 5: Ấn Độ thời phong kiến",
      "chapter": "Lịch sử",
      "periods": "2 tiết",
      "ppct": "Tiết 10 - 11"
    },
    {
      "id": "dl-7-bai-1",
      "name": "Bài 1: Vị trí địa lí, đặc điểm tự nhiên châu Âu",
      "chapter": "Địa lí - Châu Âu",
      "periods": "2 tiết",
      "ppct": "Tiết 12 - 13"
    },
    {
      "id": "dl-7-bai-2",
      "name": "Bài 2: Đặc điểm dân cư, xã hội châu Âu",
      "chapter": "Địa lí - Châu Âu",
      "periods": "2 tiết",
      "ppct": "Tiết 14 - 15"
    },
    {
      "id": "dl-7-bai-3",
      "name": "Bài 3: Khái quát về châu Phi",
      "chapter": "Địa lí - Châu Phi",
      "periods": "2 tiết",
      "ppct": "Tiết 16 - 17"
    },
    {
      "id": "dl-7-bai-4",
      "name": "Bài 4: Đặc điểm tự nhiên châu Phi",
      "chapter": "Địa lí - Châu Phi",
      "periods": "2 tiết",
      "ppct": "Tiết 18 - 19"
    }
  ],
  "8-lsdl": [
    {
      "id": "ls-8-bai-1",
      "name": "Bài 1: Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mĩ",
      "chapter": "Lịch sử",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "ls-8-bai-2",
      "name": "Bài 2: Cách mạng tư sản Pháp cuối thế kỉ XVIII",
      "chapter": "Lịch sử",
      "periods": "2 tiết",
      "ppct": "Tiết 4 - 5"
    },
    {
      "id": "ls-8-bai-3",
      "name": "Bài 3: Cách mạng công nghiệp",
      "chapter": "Lịch sử",
      "periods": "3 tiết",
      "ppct": "Tiết 6 - 8"
    },
    {
      "id": "dl-8-bai-1",
      "name": "Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam",
      "chapter": "Địa lí - Địa lí Việt Nam",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "dl-8-bai-2",
      "name": "Bài 2: Địa hình Việt Nam",
      "chapter": "Địa lí - Địa lí Việt Nam",
      "periods": "3 tiết",
      "ppct": "Tiết 11 - 13"
    },
    {
      "id": "dl-8-bai-3",
      "name": "Bài 3: Khoáng sản Việt Nam",
      "chapter": "Địa lí - Địa lí Việt Nam",
      "periods": "2 tiết",
      "ppct": "Tiết 14 - 15"
    },
    {
      "id": "dl-8-bai-4",
      "name": "Bài 4: Khí hậu Việt Nam",
      "chapter": "Địa lí - Địa lí Việt Nam",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "9-lsdl": [
    {
      "id": "ls-9-bai-1",
      "name": "Bài 1: Liên Xô và các nước Đông Âu từ năm 1945 đến giữa những năm 70 của thế kỉ XX",
      "chapter": "Lịch sử thế giới",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "ls-9-bai-2",
      "name": "Bài 2: Các nước Á, Phi và Mĩ Latinh từ năm 1945 đến nay",
      "chapter": "Lịch sử",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "dl-9-bai-1",
      "name": "Bài 1: Dân tộc và sự phân bố dân cư Việt Nam",
      "chapter": "Địa lí dân cư Việt Nam",
      "periods": "2 tiết",
      "ppct": "Tiết 6 - 7"
    },
    {
      "id": "dl-9-bai-2",
      "name": "Bài 2: Dân số và gia tăng dân số",
      "chapter": "Địa lí",
      "periods": "2 tiết",
      "ppct": "Tiết 8 - 9"
    },
    {
      "id": "dl-9-bai-3",
      "name": "Bài 3: Phân bố các ngành kinh tế Việt Nam",
      "chapter": "Địa lí kinh tế",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    }
  ],
  "4-lsdl": [
    {
      "id": "lsdl-4-bai-1",
      "name": "Bài 1: Làm quen với phương tiện học tập môn Lịch sử và Địa lí",
      "chapter": "Mở đầu",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "lsdl-4-bai-2",
      "name": "Bài 2: Thiên nhiên và con người vùng Trung du và miền núi Bắc Bộ",
      "chapter": "Chủ đề 1: Trung du và miền núi Bắc Bộ",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "lsdl-4-bai-3",
      "name": "Bài 3: Đền Hùng và Lễ giỗ Tổ Hùng Vương",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 6 - 7"
    },
    {
      "id": "lsdl-4-bai-4",
      "name": "Bài 4: Thiên nhiên vùng Đồng bằng Bắc Bộ",
      "chapter": "Chủ đề 2: Đồng bằng Bắc Bộ",
      "periods": "2 tiết",
      "ppct": "Tiết 8 - 9"
    },
    {
      "id": "lsdl-4-bai-5",
      "name": "Bài 5: Thăng Long - Hà Nội",
      "chapter": "Chủ đề 2",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    }
  ],
  "5-lsdl": [
    {
      "id": "lsdl-5-bai-1",
      "name": "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính của Việt Nam",
      "chapter": "Chủ đề 1: Đất nước và con người Việt Nam",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "lsdl-5-bai-2",
      "name": "Bài 2: Thiên nhiên Việt Nam",
      "chapter": "Chủ đề 1",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "lsdl-5-bai-3",
      "name": "Bài 3: Biển, đảo Việt Nam",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 6 - 7"
    },
    {
      "id": "lsdl-5-bai-4",
      "name": "Bài 4: Nước Văn Lang, Âu Lạc",
      "chapter": "Chủ đề 2: Những quốc gia đầu tiên",
      "periods": "2 tiết",
      "ppct": "Tiết 8 - 9"
    }
  ],
  "6-gdcd": [
    {
      "id": "gdcd-6-bai-1",
      "name": "Bài 1: Tự hào về truyền thống gia đình, dòng họ",
      "chapter": "Chủ đề: Tự hào truyền thống",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "gdcd-6-bai-2",
      "name": "Bài 2: Yêu thương con người",
      "chapter": "Chủ đề: Yêu thương",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "gdcd-6-bai-3",
      "name": "Bài 3: Siêng năng, kiên trì",
      "chapter": "Chủ đề: Siêng năng",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "gdcd-6-bai-4",
      "name": "Bài 4: Tôn trọng sự thật",
      "chapter": "Chủ đề: Trung thực",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "gdcd-6-bai-5",
      "name": "Bài 5: Tự lập",
      "chapter": "Chủ đề: Tự lập",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "gdcd-6-bai-6",
      "name": "Bài 6: Tự nhận thức bản thân",
      "chapter": "Chủ đề: Tự nhận thức",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "gdcd-6-bai-7",
      "name": "Bài 7: Ứng phó với tình huống nguy hiểm",
      "chapter": "Chủ đề: Kĩ năng sống an toàn",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "gdcd-6-bai-8",
      "name": "Bài 8: Tiết kiệm",
      "chapter": "Chủ đề: Tiết kiệm",
      "periods": "2 tiết",
      "ppct": "Tiết 16 - 17"
    },
    {
      "id": "gdcd-6-bai-9",
      "name": "Bài 9: Công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam",
      "chapter": "Chủ đề: Pháp luật",
      "periods": "2 tiết",
      "ppct": "Tiết 18 - 19"
    },
    {
      "id": "gdcd-6-bai-10",
      "name": "Bài 10: Quyền và nghĩa vụ cơ bản của công dân",
      "chapter": "Chủ đề: Pháp luật",
      "periods": "2 tiết",
      "ppct": "Tiết 20 - 21"
    }
  ],
  "7-gdcd": [
    {
      "id": "gdcd-7-bai-1",
      "name": "Bài 1: Tự hào về truyền thống quê hương",
      "chapter": "Chủ đề: Quê hương",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "gdcd-7-bai-2",
      "name": "Bài 2: Bảo tồn di sản văn hóa",
      "chapter": "Chủ đề: Văn hóa",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "gdcd-7-bai-3",
      "name": "Bài 3: Quan tâm, cảm thông và chia sẻ",
      "chapter": "Chủ đề: Đạo đức",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "gdcd-7-bai-4",
      "name": "Bài 4: Học tập tự giác, tích cực",
      "chapter": "Chủ đề: Học tập",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "gdcd-7-bai-5",
      "name": "Bài 5: Giữ chữ tín",
      "chapter": "Chủ đề: Đạo đức",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "gdcd-7-bai-6",
      "name": "Bài 6: Quản lí tiền",
      "chapter": "Chủ đề: Kĩ năng sống",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    }
  ],
  "8-gdcd": [
    {
      "id": "gdcd-8-bai-1",
      "name": "Bài 1: Tự hào về truyền thống dân tộc Việt Nam",
      "chapter": "Chủ đề: Dân tộc",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "gdcd-8-bai-2",
      "name": "Bài 2: Tôn trọng sự đa dạng của các dân tộc",
      "chapter": "Chủ đề: Tôn trọng",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "gdcd-8-bai-3",
      "name": "Bài 3: Lao động cần cù, sáng tạo",
      "chapter": "Chủ đề: Lao động",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "gdcd-8-bai-4",
      "name": "Bài 4: Bảo vệ lẽ phải",
      "chapter": "Chủ đề: Pháp luật",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    }
  ],
  "9-gdcd": [
    {
      "id": "gdcd-9-bai-1",
      "name": "Bài 1: Chí công vô tư",
      "chapter": "Chủ đề: Phẩm chất đạo đức",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "gdcd-9-bai-2",
      "name": "Bài 2: Tự chủ",
      "chapter": "Chủ đề: Phẩm chất đạo đức",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "gdcd-9-bai-3",
      "name": "Bài 3: Dân chủ và kỉ luật",
      "chapter": "Chủ đề: Pháp luật",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "gdcd-9-bai-4",
      "name": "Bài 4: Bảo vệ hòa bình",
      "chapter": "Chủ đề: Hòa bình",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    }
  ],
  "1-daoduc": [
    {
      "id": "dd-1-bai-1",
      "name": "Bài 1: Em yêu trường em",
      "chapter": "Chủ đề 1: Em và trường học",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "dd-1-bai-2",
      "name": "Bài 2: Giữ gìn đồ dùng học tập",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "dd-1-bai-3",
      "name": "Bài 3: Thật thà trong học tập",
      "chapter": "Chủ đề 2: Trung thực",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    }
  ],
  "2-daoduc": [
    {
      "id": "dd-2-bai-1",
      "name": "Bài 1: Vẻ đẹp quê hương em",
      "chapter": "Chủ đề 1: Quê hương",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "dd-2-bai-2",
      "name": "Bài 2: Kính trọng thầy giáo, cô giáo",
      "chapter": "Chủ đề 2: Kính trọng thầy cô",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "dd-2-bai-3",
      "name": "Bài 3: Yêu quý bạn bè",
      "chapter": "Chủ đề 2",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    }
  ],
  "3-daoduc": [
    {
      "id": "dd-3-bai-1",
      "name": "Bài 1: Chào cờ và hát Quốc ca",
      "chapter": "Chủ đề 1: Tự hào truyền thống",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "dd-3-bai-2",
      "name": "Bài 2: Tự hào truyền thống trường em",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "dd-3-bai-3",
      "name": "Bài 3: Quan tâm hàng xóm láng giềng",
      "chapter": "Chủ đề 2: Yêu thương",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    }
  ],
  "4-daoduc": [
    {
      "id": "dd-4-bai-1",
      "name": "Bài 1: Biết ơn người lao động",
      "chapter": "Chủ đề 1: Biết ơn",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "dd-4-bai-2",
      "name": "Bài 2: Cảm thông, giúp đỡ người gặp khó khăn",
      "chapter": "Chủ đề 2: Nhân ái",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "dd-4-bai-3",
      "name": "Bài 3: Yêu lao động",
      "chapter": "Chủ đề 3: Chăm chỉ",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    }
  ],
  "5-daoduc": [
    {
      "id": "dd-5-bai-1",
      "name": "Bài 1: Em là học sinh lớp 5",
      "chapter": "Chủ đề 1: Tự giác",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "dd-5-bai-2",
      "name": "Bài 2: Trách nhiệm với việc làm của mình",
      "chapter": "Chủ đề 2: Trách nhiệm",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "dd-5-bai-3",
      "name": "Bài 3: Có chí thì nên",
      "chapter": "Chủ đề 3: Kiên trì",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    }
  ],
  "6-tienganh": [
    {
      "id": "ta-6-unit-1",
      "name": "Unit 1: My New School (Getting Started - A Closer Look)",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 1 - 5"
    },
    {
      "id": "ta-6-unit-2",
      "name": "Unit 2: My House",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 6 - 10"
    },
    {
      "id": "ta-6-unit-3",
      "name": "Unit 3: My Friends",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 11 - 15"
    },
    {
      "id": "ta-6-unit-4",
      "name": "Unit 4: My Neighbourhood",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 16 - 20"
    },
    {
      "id": "ta-6-unit-5",
      "name": "Unit 5: Natural Wonders of Viet Nam",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 21 - 25"
    },
    {
      "id": "ta-6-unit-6",
      "name": "Unit 6: Our Tet Holiday",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 26 - 30"
    },
    {
      "id": "ta-6-unit-7",
      "name": "Unit 7: Television",
      "chapter": "Học kì II",
      "periods": "5 tiết",
      "ppct": "Tiết 31 - 35"
    },
    {
      "id": "ta-6-unit-8",
      "name": "Unit 8: Sports and Games",
      "chapter": "Học kì II",
      "periods": "5 tiết",
      "ppct": "Tiết 36 - 40"
    },
    {
      "id": "ta-6-unit-9",
      "name": "Unit 9: Cities of the World",
      "chapter": "Học kì II",
      "periods": "5 tiết",
      "ppct": "Tiết 41 - 45"
    }
  ],
  "7-tienganh": [
    {
      "id": "ta-7-unit-1",
      "name": "Unit 1: Hobbies",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 1 - 5"
    },
    {
      "id": "ta-7-unit-2",
      "name": "Unit 2: Healthy Living",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 6 - 10"
    },
    {
      "id": "ta-7-unit-3",
      "name": "Unit 3: Community Service",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 11 - 15"
    },
    {
      "id": "ta-7-unit-4",
      "name": "Unit 4: Music and Arts",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 16 - 20"
    },
    {
      "id": "ta-7-unit-5",
      "name": "Unit 5: Food and Drink",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 21 - 25"
    },
    {
      "id": "ta-7-unit-6",
      "name": "Unit 6: A Visit to a School",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 26 - 30"
    },
    {
      "id": "ta-7-unit-7",
      "name": "Unit 7: Traffic",
      "chapter": "Học kì II",
      "periods": "5 tiết",
      "ppct": "Tiết 31 - 35"
    },
    {
      "id": "ta-7-unit-8",
      "name": "Unit 8: Films",
      "chapter": "Học kì II",
      "periods": "5 tiết",
      "ppct": "Tiết 36 - 40"
    }
  ],
  "8-tienganh": [
    {
      "id": "ta-8-unit-1",
      "name": "Unit 1: Leisure Time",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 1 - 5"
    },
    {
      "id": "ta-8-unit-2",
      "name": "Unit 2: Life in the Countryside",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 6 - 10"
    },
    {
      "id": "ta-8-unit-3",
      "name": "Unit 3: Teenagers",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 11 - 15"
    },
    {
      "id": "ta-8-unit-4",
      "name": "Unit 4: Ethnic Groups of Viet Nam",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 16 - 20"
    }
  ],
  "9-tienganh": [
    {
      "id": "ta-9-unit-1",
      "name": "Unit 1: Local Community",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 1 - 5"
    },
    {
      "id": "ta-9-unit-2",
      "name": "Unit 2: City Life",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 6 - 10"
    },
    {
      "id": "ta-9-unit-3",
      "name": "Unit 3: Healthy Living for Teens",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 11 - 15"
    },
    {
      "id": "ta-9-unit-4",
      "name": "Unit 4: Remembering the Past",
      "chapter": "Học kì I",
      "periods": "5 tiết",
      "ppct": "Tiết 16 - 20"
    }
  ],
  "3-tienganh": [
    {
      "id": "ta-3-unit-1",
      "name": "Unit 1: Hello",
      "chapter": "Học kì I",
      "periods": "4 tiết",
      "ppct": "Tiết 1 - 4"
    },
    {
      "id": "ta-3-unit-2",
      "name": "Unit 2: Our Names",
      "chapter": "Học kì I",
      "periods": "4 tiết",
      "ppct": "Tiết 5 - 8"
    },
    {
      "id": "ta-3-unit-3",
      "name": "Unit 3: Our Friends",
      "chapter": "Học kì I",
      "periods": "4 tiết",
      "ppct": "Tiết 9 - 12"
    },
    {
      "id": "ta-3-unit-4",
      "name": "Unit 4: Our Body",
      "chapter": "Học kì I",
      "periods": "4 tiết",
      "ppct": "Tiết 13 - 16"
    },
    {
      "id": "ta-3-unit-5",
      "name": "Unit 5: My Hobbies",
      "chapter": "Học kì I",
      "periods": "4 tiết",
      "ppct": "Tiết 17 - 20"
    }
  ],
  "1-tnxh": [
    {
      "id": "tnxh-1-bai-1",
      "name": "Bài 1: Kể về gia đình em",
      "chapter": "Chủ đề 1: Gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "tnxh-1-bai-2",
      "name": "Bài 2: Ngôi nhà của em",
      "chapter": "Chủ đề 1: Gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "tnxh-1-bai-3",
      "name": "Bài 3: Lớp học của em",
      "chapter": "Chủ đề 2: Trường học",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "tnxh-1-bai-4",
      "name": "Bài 4: Các bộ phận trên cơ thể em",
      "chapter": "Chủ đề 3: Con người và sức khỏe",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    }
  ],
  "2-tnxh": [
    {
      "id": "tnxh-2-bai-1",
      "name": "Bài 1: Các thế hệ trong gia đình",
      "chapter": "Chủ đề 1: Gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "tnxh-2-bai-2",
      "name": "Bài 2: Nghề nghiệp của người thân",
      "chapter": "Chủ đề 1: Gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "tnxh-2-bai-3",
      "name": "Bài 3: Cơ quan vận động",
      "chapter": "Chủ đề 2: Con người và sức khỏe",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "tnxh-2-bai-4",
      "name": "Bài 4: Cơ quan hô hấp",
      "chapter": "Chủ đề 2: Con người và sức khỏe",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    }
  ],
  "3-tnxh": [
    {
      "id": "tnxh-3-bai-1",
      "name": "Bài 1: Họ hàng nội, ngoại",
      "chapter": "Chủ đề 1: Gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "tnxh-3-bai-2",
      "name": "Bài 2: Phòng tránh hỏa hoạn khi ở nhà",
      "chapter": "Chủ đề 1: Gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "tnxh-3-bai-3",
      "name": "Bài 3: Vệ sinh xung quanh nhà ở",
      "chapter": "Chủ đề 1: Gia đình",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "tnxh-3-bai-4",
      "name": "Bài 4: Cơ quan tuần hoàn",
      "chapter": "Chủ đề 2: Con người và sức khỏe",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "tnxh-3-bai-5",
      "name": "Bài 5: Chăm sóc và bảo vệ cơ quan tuần hoàn",
      "chapter": "Chủ đề 2",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "tnxh-3-bai-6",
      "name": "Bài 6: Cơ quan thần kinh",
      "chapter": "Chủ đề 2",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "tnxh-3-bai-7",
      "name": "Bài 7: Thực vật và động vật xung quanh em",
      "chapter": "Chủ đề 3: Thực vật và động vật",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "tnxh-3-bai-8",
      "name": "Bài 8: Trái Đất và các đới khí hậu",
      "chapter": "Chủ đề 4: Trái Đất và bầu trời",
      "periods": "2 tiết",
      "ppct": "Tiết 15 - 16"
    }
  ],
  "4-khoahoc": [
    {
      "id": "kh-4-bai-1",
      "name": "Bài 1: Một số tính chất của nước",
      "chapter": "Chủ đề 1: Chất",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "kh-4-bai-2",
      "name": "Bài 2: Sự chuyển thể của nước",
      "chapter": "Chủ đề 1: Chất",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "kh-4-bai-3",
      "name": "Bài 3: Ô nhiễm và bảo vệ nguồn nước",
      "chapter": "Chủ đề 1: Chất",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "kh-4-bai-4",
      "name": "Bài 4: Không khí quanh ta",
      "chapter": "Chủ đề 1: Chất",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "kh-4-bai-5",
      "name": "Bài 5: Vai trò của không khí và bảo vệ môi trường không khí",
      "chapter": "Chủ đề 1: Chất",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "kh-4-bai-6",
      "name": "Bài 6: Ánh sáng và vai trò của ánh sáng",
      "chapter": "Chủ đề 2: Năng lượng",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "kh-4-bai-7",
      "name": "Bài 7: Âm thanh trong cuộc sống",
      "chapter": "Chủ đề 2: Năng lượng",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    }
  ],
  "5-khoahoc": [
    {
      "id": "kh-5-bai-1",
      "name": "Bài 1: Sự biến đổi hóa học của chất",
      "chapter": "Chủ đề 1: Chất",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "kh-5-bai-2",
      "name": "Bài 2: Dung dịch và hỗn hợp",
      "chapter": "Chủ đề 1: Chất",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "kh-5-bai-3",
      "name": "Bài 3: Năng lượng và các nguồn năng lượng",
      "chapter": "Chủ đề 2: Năng lượng",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "kh-5-bai-4",
      "name": "Bài 4: Sử dụng năng lượng điện an toàn, tiết kiệm",
      "chapter": "Chủ đề 2",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "kh-5-bai-5",
      "name": "Bài 5: Sinh sản của thực vật có hoa",
      "chapter": "Chủ đề 3: Thực vật và động vật",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "kh-5-bai-6",
      "name": "Bài 6: Sinh sản của động vật",
      "chapter": "Chủ đề 3: Thực vật và động vật",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    }
  ],
  "1-hdtn": [
    {
      "id": "hdtn-1-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-1-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-1-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-1-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-1-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-1-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "2-hdtn": [
    {
      "id": "hdtn-2-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-2-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-2-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-2-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-2-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-2-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "3-hdtn": [
    {
      "id": "hdtn-3-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-3-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-3-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-3-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-3-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-3-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "4-hdtn": [
    {
      "id": "hdtn-4-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-4-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-4-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-4-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-4-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-4-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "5-hdtn": [
    {
      "id": "hdtn-5-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-5-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-5-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-5-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-5-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-5-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "6-hdtn": [
    {
      "id": "hdtn-6-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-6-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-6-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-6-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-6-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-6-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "7-hdtn": [
    {
      "id": "hdtn-7-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-7-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-7-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-7-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-7-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-7-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "8-hdtn": [
    {
      "id": "hdtn-8-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-8-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-8-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-8-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-8-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-8-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "9-hdtn": [
    {
      "id": "hdtn-9-chu-de-1",
      "name": "Chủ đề 1: Khám phá bản thân và rèn luyện nền nếp",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "hdtn-9-chu-de-2",
      "name": "Chủ đề 2: Xây dựng tình bạn và tình thầy trò",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "hdtn-9-chu-de-3",
      "name": "Chủ đề 3: Trách nhiệm với gia đình và xã hội",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "hdtn-9-chu-de-4",
      "name": "Chủ đề 4: Tham gia hoạt động thiện nguyện và cộng đồng",
      "chapter": "Học kì I",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    },
    {
      "id": "hdtn-9-chu-de-5",
      "name": "Chủ đề 5: Nghề nghiệp tương lai và định hướng bản thân",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 13 - 15"
    },
    {
      "id": "hdtn-9-chu-de-6",
      "name": "Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên",
      "chapter": "Học kì II",
      "periods": "3 tiết",
      "ppct": "Tiết 16 - 18"
    }
  ],
  "1-toan": [
    {
      "id": "toan-1-bai-1",
      "name": "Bài 1: Các số 0, 1, 2, 3, 4, 5",
      "chapter": "Chương I: Các số từ 0 đến 10",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "toan-1-bai-2",
      "name": "Bài 2: Các số 6, 7, 8, 9, 10",
      "chapter": "Chương I: Các số từ 0 đến 10",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "toan-1-bai-3",
      "name": "Bài 3: So sánh các số trong phạm vi 10",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "toan-1-bai-4",
      "name": "Bài 4: Hình vuông, hình tròn, hình tam giác, hình chữ nhật",
      "chapter": "Chương II: Hình phẳng",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "toan-1-bai-5",
      "name": "Bài 5: Phép cộng trong phạm vi 10",
      "chapter": "Chương III: Phép cộng, phép trừ",
      "periods": "4 tiết",
      "ppct": "Tiết 11 - 14"
    }
  ],
  "2-toan": [
    {
      "id": "toan-2-bai-1",
      "name": "Bài 1: Ôn tập các số đến 100",
      "chapter": "Chương I: Ôn tập và bổ sung",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "toan-2-bai-2",
      "name": "Bài 2: Tia số. Số liền trước, số liền sau",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "toan-2-bai-3",
      "name": "Bài 3: Các thành phần của phép cộng, phép trừ",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "toan-2-bai-4",
      "name": "Bài 4: Điểm. Đoạn thẳng. Đường thẳng",
      "chapter": "Chương II: Hình học",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "toan-2-bai-5",
      "name": "Bài 5: Bảng nhân 2, Bảng chia 2",
      "chapter": "Chương III: Phép nhân, chia",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    }
  ],
  "3-toan": [
    {
      "id": "toan-3-bai-1",
      "name": "Bài 1: Ôn tập các số đến 1000",
      "chapter": "Chương I: Ôn tập và bổ sung",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "toan-3-bai-2",
      "name": "Bài 2: Ôn tập phép cộng, phép trừ trong phạm vi 1000",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "toan-3-bai-3",
      "name": "Bài 3: Tìm thành phần trong phép cộng, phép trừ",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "toan-3-bai-4",
      "name": "Bài 4: Bảng nhân 6, Bảng chia 6",
      "chapter": "Chương II: Bảng nhân, bảng chia",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "toan-3-bai-5",
      "name": "Bài 5: Bảng nhân 7, Bảng chia 7",
      "chapter": "Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    },
    {
      "id": "toan-3-bai-6",
      "name": "Bài 6: Bảng nhân 8, Bảng chia 8",
      "chapter": "Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 11 - 12"
    },
    {
      "id": "toan-3-bai-7",
      "name": "Bài 7: Bảng nhân 9, Bảng chia 9",
      "chapter": "Chương II",
      "periods": "2 tiết",
      "ppct": "Tiết 13 - 14"
    },
    {
      "id": "toan-3-bai-8",
      "name": "Bài 8: Gấp một số lên một số lần",
      "chapter": "Chương II",
      "periods": "1 tiết",
      "ppct": "Tiết 15"
    },
    {
      "id": "toan-3-bai-9",
      "name": "Bài 9: Giảm một số đi một số lần",
      "chapter": "Chương II",
      "periods": "1 tiết",
      "ppct": "Tiết 16"
    },
    {
      "id": "toan-3-bai-10",
      "name": "Bài 10: Góc vuông, góc không vuông",
      "chapter": "Chương III: Hình học và Đo lường",
      "periods": "1 tiết",
      "ppct": "Tiết 17"
    },
    {
      "id": "toan-3-bai-11",
      "name": "Bài 11: Đỉnh, cạnh, góc",
      "chapter": "Chương III",
      "periods": "1 tiết",
      "ppct": "Tiết 18"
    },
    {
      "id": "toan-3-bai-12",
      "name": "Bài 12: Khối lượng và đơn vị gam",
      "chapter": "Chương III",
      "periods": "1 tiết",
      "ppct": "Tiết 19"
    },
    {
      "id": "toan-3-bai-13",
      "name": "Bài 13: Nhiệt độ. Đo nhiệt độ",
      "chapter": "Chương III",
      "periods": "1 tiết",
      "ppct": "Tiết 20"
    },
    {
      "id": "toan-3-hinh-tron",
      "name": "Bài 14: Hình tròn, tâm, đường kính, bán kính (Tiết 1)",
      "chapter": "Chương III: Hình học và Đo lường",
      "periods": "1 tiết",
      "ppct": "Tiết 51"
    },
    {
      "id": "toan-3-bai-15",
      "name": "Bài 15: Vẽ hình tròn bằng compa",
      "chapter": "Chương III",
      "periods": "1 tiết",
      "ppct": "Tiết 52"
    },
    {
      "id": "toan-3-bai-16",
      "name": "Bài 16: Điểm ở giữa, trung điểm của đoạn thẳng",
      "chapter": "Chương III",
      "periods": "1 tiết",
      "ppct": "Tiết 53"
    }
  ],
  "4-toan": [
    {
      "id": "toan-4-bai-1",
      "name": "Bài 1: Ôn tập các số đến 100 000",
      "chapter": "Chương I: Số tự nhiên",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "toan-4-bai-2",
      "name": "Bài 2: Các số có sáu chữ số. Lớp triệu",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "toan-4-bai-3",
      "name": "Bài 3: Góc nhọn, góc tù, góc bẹt",
      "chapter": "Chương II: Hình học và đo lường",
      "periods": "1 tiết",
      "ppct": "Tiết 6"
    },
    {
      "id": "toan-4-bai-4",
      "name": "Bài 4: Hai đường thẳng vuông góc",
      "chapter": "Chương II",
      "periods": "1 tiết",
      "ppct": "Tiết 7"
    },
    {
      "id": "toan-4-bai-5",
      "name": "Bài 5: Hai đường thẳng song song",
      "chapter": "Chương II",
      "periods": "1 tiết",
      "ppct": "Tiết 8"
    },
    {
      "id": "toan-4-bai-6",
      "name": "Bài 6: Khái niệm phân số",
      "chapter": "Chương III: Phân số",
      "periods": "2 tiết",
      "ppct": "Tiết 9 - 10"
    }
  ],
  "5-toan": [
    {
      "id": "toan-5-bai-1",
      "name": "Bài 1: Ôn tập khái niệm về phân số",
      "chapter": "Chương I: Phân số",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "toan-5-bai-2",
      "name": "Bài 2: Hỗn số",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "toan-5-bai-3",
      "name": "Bài 3: Khái niệm số thập phân",
      "chapter": "Chương II: Số thập phân",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "toan-5-bai-4",
      "name": "Bài 4: Hình tam giác. Diện tích hình tam giác",
      "chapter": "Chương III: Hình học",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "toan-5-bai-5",
      "name": "Bài 5: Vận tốc, quãng đường, thời gian",
      "chapter": "Chương IV: Chuyển động đều",
      "periods": "3 tiết",
      "ppct": "Tiết 9 - 11"
    }
  ],
  "6-toan": [
    {
      "id": "toan-6-bai-1",
      "name": "Bài 1: Tập hợp các số tự nhiên",
      "chapter": "Chương I: Tập hợp các số tự nhiên",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "toan-6-bai-2",
      "name": "Bài 2: Cách ghi số tự nhiên",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "toan-6-bai-3",
      "name": "Bài 3: Thứ tự trong tập hợp các số tự nhiên",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    },
    {
      "id": "toan-6-bai-4",
      "name": "Bài 4: Phép cộng và phép trừ số tự nhiên",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 7 - 8"
    },
    {
      "id": "toan-6-bai-5",
      "name": "Bài 5: Phép nhân và phép chia số tự nhiên",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 9 - 11"
    },
    {
      "id": "toan-6-bai-6",
      "name": "Bài 6: Lũy thừa với số mũ tự nhiên",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 12 - 13"
    },
    {
      "id": "toan-6-truc-doi-xung",
      "name": "Bài 21: Hình có trục đối xứng",
      "chapter": "Chương V: Tính đối xứng",
      "periods": "1 tiết",
      "ppct": "Tiết 45"
    },
    {
      "id": "toan-6-bai-22",
      "name": "Bài 22: Hình có tâm đối xứng",
      "chapter": "Chương V: Tính đối xứng",
      "periods": "1 tiết",
      "ppct": "Tiết 46"
    }
  ],
  "7-toan": [
    {
      "id": "toan-7-bai-1",
      "name": "Bài 1: Tập hợp các số hữu tỉ",
      "chapter": "Chương I: Số hữu tỉ",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "toan-7-bai-2",
      "name": "Bài 2: Cộng, trừ, nhân, chia số hữu tỉ",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 3 - 5"
    },
    {
      "id": "toan-7-bai-3",
      "name": "Bài 3: Lũy thừa với số mũ tự nhiên của số hữu tỉ",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 6 - 7"
    },
    {
      "id": "toan-7-bai-4",
      "name": "Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế",
      "chapter": "Chương I",
      "periods": "2 tiết",
      "ppct": "Tiết 8 - 9"
    },
    {
      "id": "toan-7-bai-7",
      "name": "Bài 7: Các góc ở vị trí đặc biệt",
      "chapter": "Chương III: Góc và đường thẳng song song",
      "periods": "2 tiết",
      "ppct": "Tiết 14 - 15"
    },
    {
      "id": "toan-7-bai-8",
      "name": "Bài 8: Hai đường thẳng song song và dấu hiệu nhận biết",
      "chapter": "Chương III",
      "periods": "2 tiết",
      "ppct": "Tiết 16 - 17"
    }
  ],
  "8-toan": [
    {
      "id": "toan-8-bai-1",
      "name": "Bài 1: Đơn thức nhiều biến. Đa thức nhiều biến",
      "chapter": "Chương I: Đa thức",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "toan-8-bai-2",
      "name": "Bài 2: Các phép tính với đa thức nhiều biến",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "toan-8-bai-3",
      "name": "Bài 3: Hằng đẳng thức đáng nhớ",
      "chapter": "Chương I",
      "periods": "4 tiết",
      "ppct": "Tiết 7 - 10"
    },
    {
      "id": "toan-8-bai-5",
      "name": "Bài 5: Tứ giác. Hình thang cân",
      "chapter": "Chương III: Tứ giác",
      "periods": "3 tiết",
      "ppct": "Tiết 14 - 16"
    },
    {
      "id": "toan-8-bai-6",
      "name": "Bài 6: Hình bình hành. Hình thoi",
      "chapter": "Chương III",
      "periods": "3 tiết",
      "ppct": "Tiết 17 - 19"
    }
  ],
  "9-toan": [
    {
      "id": "toan-9-bai-1",
      "name": "Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn",
      "chapter": "Chương I: Phương trình",
      "periods": "3 tiết",
      "ppct": "Tiết 1 - 3"
    },
    {
      "id": "toan-9-bai-2",
      "name": "Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn",
      "chapter": "Chương I",
      "periods": "3 tiết",
      "ppct": "Tiết 4 - 6"
    },
    {
      "id": "toan-9-bai-3",
      "name": "Bài 3: Căn bậc hai và căn thức bậc hai",
      "chapter": "Chương II: Căn bậc hai",
      "periods": "3 tiết",
      "ppct": "Tiết 7 - 9"
    },
    {
      "id": "toan-9-bai-4",
      "name": "Bài 4: Tỉ số lượng giác của góc nhọn",
      "chapter": "Chương IV: Hệ thức lượng tam giác vuông",
      "periods": "3 tiết",
      "ppct": "Tiết 10 - 12"
    }
  ],
  "1-van": [
    {
      "id": "tv-1-bai-1",
      "name": "Bài 1: a, b (Âm a, Chữ a - Âm b, Chữ b)",
      "chapter": "Chủ đề 1: Những bài học đầu tiên",
      "periods": "2 tiết",
      "ppct": "Tiết 1 - 2"
    },
    {
      "id": "tv-1-bai-2",
      "name": "Bài 2: c, o, dấu sắc",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 3 - 4"
    },
    {
      "id": "tv-1-bai-3",
      "name": "Bài 3: d, đ, dấu huyền",
      "chapter": "Chủ đề 1",
      "periods": "2 tiết",
      "ppct": "Tiết 5 - 6"
    }
  ],
  "2-van": [
    {
      "id": "tv-2-bai-1",
      "name": "Bài 1: Tôi là học sinh lớp 2",
      "chapter": "Chủ điểm 1: Em lớn lên từng ngày",
      "periods": "4 tiết",
      "ppct": "Tiết 1 - 4"
    },
    {
      "id": "tv-2-bai-2",
      "name": "Bài 2: Ngày hôm qua đâu rồi?",
      "chapter": "Chủ điểm 1",
      "periods": "3 tiết",
      "ppct": "Tiết 5 - 7"
    },
    {
      "id": "tv-2-bai-3",
      "name": "Bài 3: Niềm vui của Bi và Bống",
      "chapter": "Chủ điểm 1",
      "periods": "4 tiết",
      "ppct": "Tiết 8 - 11"
    }
  ],
  "3-van": [
    {
      "id": "tv-3-bai-1",
      "name": "Bài 1: Ngày gặp lại (Đọc - Viết - Nói và nghe)",
      "chapter": "Chủ điểm 1: Những búp măng non",
      "periods": "4 tiết",
      "ppct": "Tiết 1 - 4"
    },
    {
      "id": "tv-3-bai-2",
      "name": "Bài 2: Về thăm quê",
      "chapter": "Chủ điểm 1",
      "periods": "3 tiết",
      "ppct": "Tiết 5 - 7"
    },
    {
      "id": "tv-3-bai-3",
      "name": "Bài 3: Cánh rừng trong nắng",
      "chapter": "Chủ điểm 2: Mái trường mến yêu",
      "periods": "4 tiết",
      "ppct": "Tiết 8 - 11"
    },
    {
      "id": "tv-3-bai-4",
      "name": "Bài 4: Mùa thu của em",
      "chapter": "Chủ điểm 2",
      "periods": "3 tiết",
      "ppct": "Tiết 12 - 14"
    }
  ],
  "4-van": [
    {
      "id": "tv-4-bai-1",
      "name": "Bài 1: Điều kì diệu (Đọc - Viết - Nói và nghe)",
      "chapter": "Chủ điểm 1: Mỗi người một vẻ",
      "periods": "4 tiết",
      "ppct": "Tiết 1 - 4"
    },
    {
      "id": "tv-4-bai-2",
      "name": "Bài 2: Thi nhạc",
      "chapter": "Chủ điểm 1",
      "periods": "3 tiết",
      "ppct": "Tiết 5 - 7"
    },
    {
      "id": "tv-4-bai-3",
      "name": "Bài 3: Anh em sinh đôi",
      "chapter": "Chủ điểm 1",
      "periods": "4 tiết",
      "ppct": "Tiết 8 - 11"
    }
  ],
  "5-van": [
    {
      "id": "tv-5-bai-1",
      "name": "Bài 1: Thanh âm của gió",
      "chapter": "Chủ điểm 1: Thế giới tuổi thơ",
      "periods": "4 tiết",
      "ppct": "Tiết 1 - 4"
    },
    {
      "id": "tv-5-bai-2",
      "name": "Bài 2: Cánh đồng tuổi thơ",
      "chapter": "Chủ điểm 1",
      "periods": "3 tiết",
      "ppct": "Tiết 5 - 7"
    },
    {
      "id": "tv-5-bai-3",
      "name": "Bài 3: Bầu trời mùa thu",
      "chapter": "Chủ điểm 1",
      "periods": "4 tiết",
      "ppct": "Tiết 8 - 11"
    }
  ],
  "6-van": [
    {
      "id": "van-6-bai-1",
      "name": "Bài 1: Tôi và các bạn (Truyện đồng thoại)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 1 - 10"
    },
    {
      "id": "van-6-bai-2",
      "name": "Bài 2: Gõ cửa trái tim (Thơ)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 11 - 20"
    },
    {
      "id": "van-6-bai-3",
      "name": "Bài 3: Yêu thương và chia sẻ (Truyện ngắn)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 21 - 30"
    },
    {
      "id": "van-6-bai-4",
      "name": "Bài 4: Quê hương yêu dấu (Thơ lục bát)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 31 - 40"
    }
  ],
  "7-van": [
    {
      "id": "van-7-bai-1",
      "name": "Bài 1: Bầu trời tuổi thơ (Truyện ngắn)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 1 - 10"
    },
    {
      "id": "van-7-bai-2",
      "name": "Bài 2: Khúc nhạc tâm hồn (Thơ)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 11 - 20"
    },
    {
      "id": "van-7-bai-3",
      "name": "Bài 3: Cội nguồn yêu thương (Truyện)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 21 - 30"
    },
    {
      "id": "van-7-bai-4",
      "name": "Bài 4: Giai điệu đất nước",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 31 - 40"
    }
  ],
  "8-van": [
    {
      "id": "van-8-bai-1",
      "name": "Bài 1: Câu chuyện của lịch sử (Truyện lịch sử)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 1 - 10"
    },
    {
      "id": "van-8-bai-2",
      "name": "Bài 2: Vẻ đẹp cổ điển (Thơ Đường luật)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 11 - 20"
    },
    {
      "id": "van-8-bai-3",
      "name": "Bài 3: Lời sông núi (Văn bản nghị luận)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 21 - 30"
    }
  ],
  "9-van": [
    {
      "id": "van-9-bai-1",
      "name": "Bài 1: Thương nhớ quê hương (Thơ sáu chữ, bảy chữ)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 1 - 10"
    },
    {
      "id": "van-9-bai-2",
      "name": "Bài 2: Khát vọng sống (Truyện thơ)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 11 - 20"
    },
    {
      "id": "van-9-bai-3",
      "name": "Bài 3: Tiếng nói của tư tưởng (Nghị luận xã hội)",
      "chapter": "Học kì I",
      "periods": "10 tiết",
      "ppct": "Tiết 21 - 30"
    }
  ]
};

// Danh sách các môn học chuẩn theo từng cấp học GDPT 2018
export const OFFICIAL_SUBJECTS_THCS = [
  'Khoa học tự nhiên',
  'Toán',
  'Ngữ văn',
  'Lịch sử và Địa lí',
  'Giáo dục công dân',
  'Tin học',
  'Công nghệ',
  'Nghệ thuật (Mĩ thuật, Âm nhạc)',
  'Giáo dục thể chất',
  'Tiếng Anh',
  'Hoạt động trải nghiệm, hướng nghiệp'
];

export const OFFICIAL_SUBJECTS_TIEU_HOC = [
  'Toán',
  'Tiếng Việt',
  'Tự nhiên và Xã hội',
  'Khoa học',
  'Lịch sử và Địa lí',
  'Tin học',
  'Công nghệ',
  'Đạo đức',
  'Nghệ thuật (Mĩ thuật, Âm nhạc)',
  'Giáo dục thể chất',
  'Tiếng Anh',
  'Hoạt động trải nghiệm'
];

export function getSubjectsForGrade(grade: number): string[] {
  if (grade <= 2) {
    return [
      'Toán',
      'Tiếng Việt',
      'Tự nhiên và Xã hội',
      'Đạo đức',
      'Nghệ thuật (Mĩ thuật, Âm nhạc)',
      'Giáo dục thể chất',
      'Hoạt động trải nghiệm'
    ];
  }
  if (grade === 3) {
    return [
      'Toán',
      'Tiếng Việt',
      'Tự nhiên và Xã hội',
      'Tin học',
      'Công nghệ',
      'Tiếng Anh',
      'Đạo đức',
      'Nghệ thuật (Mĩ thuật, Âm nhạc)',
      'Giáo dục thể chất',
      'Hoạt động trải nghiệm'
    ];
  }
  if (grade <= 5) {
    return [
      'Toán',
      'Tiếng Việt',
      'Khoa học',
      'Lịch sử và Địa lí',
      'Tin học',
      'Công nghệ',
      'Tiếng Anh',
      'Đạo đức',
      'Nghệ thuật (Mĩ thuật, Âm nhạc)',
      'Giáo dục thể chất',
      'Hoạt động trải nghiệm'
    ];
  }
  // THCS (Lớp 6, 7, 8, 9)
  return OFFICIAL_SUBJECTS_THCS;
}

export function getFullLessonsForGradeAndSubject(grade: number, subject: string): CurriculumLessonItem[] {
  const s = (subject || '').toLowerCase().trim();
  let subKey = '';

  // 1. Phân loại chuẩn xác từng môn học (không để nhầm lẫn hay fallback sai)
  if (/công nghệ|kĩ thuật|cong nghe/i.test(s)) {
    subKey = 'congnghe';
  } else if (/tin học|tin hoc|cntt/i.test(s)) {
    subKey = 'tinhoc';
  } else if (/lịch sử|địa lí|địa lý|ls-dl|lsdl|su dia/i.test(s)) {
    subKey = 'lsdl';
  } else if (/công dân|gdcd/i.test(s)) {
    subKey = 'gdcd';
  } else if (/đạo đức|dao duc/i.test(s)) {
    subKey = 'daoduc';
  } else if (/tiếng anh|english|ngoại ngữ/i.test(s)) {
    subKey = 'tienganh';
  } else if (/tự nhiên và xã hội|tnxh/i.test(s)) {
    subKey = 'tnxh';
  } else if (/khoa học tự nhiên|khtn|vật lí|hóa học|sinh học/i.test(s)) {
    subKey = 'khtn';
  } else if (/khoa học|khoahoc/i.test(s)) {
    subKey = grade <= 5 ? 'khoahoc' : 'khtn';
  } else if (/toán|toan/i.test(s)) {
    subKey = 'toan';
  } else if (/ngữ văn|văn|tiếng việt/i.test(s)) {
    subKey = 'van';
  } else if (/trải nghiệm|hướng nghiệp|hdtn/i.test(s)) {
    subKey = 'hdtn';
  }

  // 2. Tra cứu theo key khối lớp - môn học
  const exactKey = `${grade}-${subKey}`;
  if (FULL_CURRICULUM_CATALOG[exactKey] && FULL_CURRICULUM_CATALOG[exactKey].length > 0) {
    return FULL_CURRICULUM_CATALOG[exactKey];
  }

  // 3. Tra cứu tương thích theo môn ở các khối gần nhất
  if (subKey) {
    for (let g = grade; g >= 1; g--) {
      const fallbackKey = `${g}-${subKey}`;
      if (FULL_CURRICULUM_CATALOG[fallbackKey] && FULL_CURRICULUM_CATALOG[fallbackKey].length > 0) {
        return FULL_CURRICULUM_CATALOG[fallbackKey];
      }
    }
    for (let g = grade; g <= 9; g++) {
      const fallbackKey = `${g}-${subKey}`;
      if (FULL_CURRICULUM_CATALOG[fallbackKey] && FULL_CURRICULUM_CATALOG[fallbackKey].length > 0) {
        return FULL_CURRICULUM_CATALOG[fallbackKey];
      }
    }
  }

  // 4. Nếu là môn tự gõ riêng chưa có trong SGK chuẩn, tạo danh mục bài chuyên biệt cho đúng môn đó (không bao giờ lấy nhầm môn KHTN!)
  const safeSubjectName = subject || 'Bài học';
  return [
    { id: `custom-1`, name: `Bài 1: Khái quát và giới thiệu môn ${safeSubjectName}`, chapter: `Chương I: Mở đầu`, periods: `2 tiết`, ppct: `Tiết 1 - 2` },
    { id: `custom-2`, name: `Bài 2: Kiến thức nền tảng và kĩ năng cốt lõi môn ${safeSubjectName}`, chapter: `Chương I: Mở đầu`, periods: `2 tiết`, ppct: `Tiết 3 - 4` },
    { id: `custom-3`, name: `Bài 3: Ứng dụng thực hành và phát triển năng lực môn ${safeSubjectName}`, chapter: `Chương II: Vận dụng thực tiễn`, periods: `2 tiết`, ppct: `Tiết 5 - 6` }
  ];
}
