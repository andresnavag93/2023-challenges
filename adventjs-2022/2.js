function countHours(year, holidays) {
  return holidays.reduce((acc, curr) => {
    const date = new Date(`${year}/${curr}`);
    const day = date.getDay();
    if (day !== 0 && day !== 6) acc += 2;
    return acc;
  }, 0);
}

function countHours2(year, holidays) {
  return holidays.reduce((acc, curr) => {
    const day = new Date(`${year}/${curr}`).getDay();
    return acc + (day === 0 || day === 6) ? 0 : 2;
  }, 0);
}

function countWorkingDays(year, holidays) {
  return holidays.reduce((acc, curr) => {
    const date = new Date(`${year}/${curr}`);
    acc += isWorkingDay(date) ? 2 : 0;
    return acc;
  }, 0);
}
const isWorkingDay = (date) => date.getDay() !== 0 && date.getDay() !== 6;

function countHours2(year, holidays) {
  const isWorkingDay = (date) => date.getDay() !== 0 && date.getDay() !== 6;
  return holidays.reduce(
    (acc, curr) => (acc += isWorkingDay(new Date(`${year}/${curr}`)) ? 2 : 0),
    0
  );
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays); // 2 días -> 4 horas extra en el año
