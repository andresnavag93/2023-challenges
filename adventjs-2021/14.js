export default function missingReindeer(ids) {
  const IDS_LENGTH = ids.length;
  let total;
  if (IDS_LENGTH % 2 !== 0) {
    total = IDS_LENGTH * Math.ceil(IDS_LENGTH / 2);
  } else {
    total = IDS_LENGTH + (IDS_LENGTH - 1) * Math.ceil((IDS_LENGTH - 1) / 2);
  }
  let start = 0;
  let end = IDS_LENGTH - 1;

  while (start < end) {
    total -= ids[end];
    total -= ids[start];
    start++;
    end--;
  }

  if (start === end) {
    total -= ids[end];
  }
  // ¡No olvides compartir tu solución en redes!
  return total;
}

missingReindeer([0, 2, 3]); // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]); // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
missingReindeer([0]); // -> 1 (¡es el último el que falta!)
