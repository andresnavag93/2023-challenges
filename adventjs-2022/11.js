function getCompleted(part, total) {
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  const convertToSeconds = (hours, minutes, seconds) =>
    Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
  const [hoursA, minutesA, secondsA] = part.split(":");
  const [hoursB, minutesB, secondsB] = total.split(":");
  const a = convertToSeconds(hoursA, minutesA, secondsA);
  const b = convertToSeconds(hoursB, minutesB, secondsB);
  const c = gcd(b, a % b);
  return `${a / c}/${b / c}`;
}

getCompleted("01:00:00", "03:00:00"); // '1/3'
getCompleted("02:00:00", "04:00:00"); // '1/2'
getCompleted("01:00:00", "01:00:00"); // '1/1'
getCompleted("00:10:00", "01:00:00"); // '1/6'
getCompleted("01:10:10", "03:30:30"); // '1/3'
getCompleted("03:30:30", "05:50:50"); // '3/5
