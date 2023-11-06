export default function checkSledJump(heights) {
  let start = 0;
  let end = heights.length - 1;

  while (start < end) {
    if (start + 1 === end) {
      return true;
    }

    if (heights[start] >= heights[start + 1]) {
      return false;
    }

    if (heights[end] >= heights[end - 1]) {
      return false;
    }

    start += 1;
    end -= 1;
  }

  return true;
}

checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]); // false: no sube de forma estricta
checkSledJump([1, 2, 3]); // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!
