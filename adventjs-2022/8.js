function checkPart2(part) {
  for (let i = 0; i < part.length; i++) {
    const subS = part.slice(0, i) + part.slice(i + 1, part.length);
    if (subS === [...subS].reverse().join("")) {
      return true;
    }
  }
  return false;
}

function checkPart(part) {
  return [...part].some((x, i) => {
    const subS = part.slice(0, i) + part.slice(i + 1, part.length);
    return subS === [...subS].reverse().join("");
  });
}

function checkPart3(part) {
  const reverse = (arr) => arr.reverse().join("");
  part = part.split("");
  let oldLetter = "";

  return part.some(
    (letter, i, result) => (
      (oldLetter = letter),
      (part[i] = ""),
      (result = reverse(part) === reverse(part)),
      !result && (part[i] = oldLetter),
      result
    )
  );
}

checkPart("uwu"); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim"); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu"); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
