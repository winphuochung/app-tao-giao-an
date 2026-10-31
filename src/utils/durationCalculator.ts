/**
 * Công thức tính chuẩn thời lượng tiết học GDPT 2018:
 * - Cấp THCS (CV 5512/BGDĐT-GDTrH): 1 tiết = 45 phút -> Tổng thời lượng = Số tiết × 45 phút
 * - Cấp Tiểu học (CV 2345/BGDĐT-GDTH): 1 tiết = 35 phút -> Tổng thời lượng = Số tiết × 35 phút
 */
export function calculateLessonDuration(soTietStr: string, isTieuHoc: boolean): string {
  const match = (soTietStr || '').match(/\d+/);
  const numPeriods = match ? parseInt(match[0], 10) : 1;
  const minutesPerPeriod = isTieuHoc ? 35 : 45;
  const totalMinutes = numPeriods * minutesPerPeriod;
  return `${totalMinutes} phút`;
}
