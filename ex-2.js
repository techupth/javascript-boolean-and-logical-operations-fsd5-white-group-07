// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion = lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent || isPlatinum;

console.log(hasPromotion);

// มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
// ไปซื้อของวันศุกร์
// ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
// เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
// เป็น Member ระดับ Gold (ซึ่งไม่ใช่ Platinum แบบในโจทย์)