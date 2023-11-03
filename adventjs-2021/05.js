export default function daysToXmas(date) {
  const newDate = new Date("Dec 25, 2021");
  const daysToChristmas = newDate - date;
  const millisecondsToDaysConversion = 1000 * 60 * 60 * 24;
  return Math.ceil(daysToChristmas / millisecondsToDaysConversion);
}

const date = new Date("Dec 25, 2021");
daysToXmas(date); // 0
const date1 = new Date("Dec 26, 2021");
daysToXmas(date1); // -1
const date2 = new Date("Dec 31, 2021");
daysToXmas(date2); // -6
const date3 = new Date("Jan 1, 2022 00:00:01");
daysToXmas(date3); // -7
const date4 = new Date("Jan 1, 2022 23:59:59");
daysToXmas(date4); // -7
