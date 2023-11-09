function fixLetter(letter) {
  let a = letter
    .trim()
    .replace(/\s{1,}/g, " ")
    .replace(/\s{1,},/g, ",")
    .replace(/,/g, ", ")
    .replace(/,\s{1,}/g, ", ")
    .replace(/\s{1,}\./g, ".")
    .replace(/\s{1,}\?/g, "?")
    .replace(/\?{1,}/g, "?")
    .split(". ")
    .map((x) => x[0].toUpperCase() + x.substring(1, x.length))
    .join(". ")
    .split("? ")
    .map((x) => x[0].toUpperCase() + x.substring(1, x.length))
    .join("? ")
    .split("! ")
    .map((x) => x[0].toUpperCase() + x.substring(1, x.length))
    .join("! ")
    .replace(/santa claus/gi, "Santa Claus");
  if (a[a.length - 1].match(/\w/)) a += ".";
  return a;
}
/**
 * Eliminar espacios al inicio y al final
 * Eliminar múltiples espacios en blanco y dejar sólo uno
 * Dejar un espacio después de cada coma
 * Quitar espacios antes de coma o punto
 * Las preguntas sólo deben terminar con un signo de interrogación
 * La primera letra de cada oración debe estar en mayúscula
 * Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
 * Poner un punto al final de la frase si no tiene puntuación
 */

fixLetter(
  ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
);
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

function fixLetter(letter) {
  let correction = letter
    .replace(/([,.?!])([^,.?!])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .replace(/([,.?!]{2,})/g, ($1) => $1[0])
    .replace(
      /([.?!])(\s)([A-z])/g,
      (_, $1, $2, $3) => $1 + $2 + $3.toUpperCase()
    )
    .replace(/(santa claus)/gi, "Santa Claus")
    .trim()
    .replace(/\s([,.?!])/g, "$1")
    .replace(/^([A-z])/g, ($1) => $1.toUpperCase())
    .replace(/([^.?!])$/g, "$1.");

  return correction;
}
