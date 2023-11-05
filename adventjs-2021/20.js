export default function pangram(letter) {
  const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  const ntilde = "&ntilde;";
  const letterTransformed = letter
    .toLowerCase()
    .replaceAll("ñ", ntilde)
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replaceAll(ntilde, "ñ");

  return alphabet.every((char) => letterTransformed.includes(char));
}

export function pangram2(letter) {
  const hashMap = new Map();
  const letterLength = letter.length;
  const alphabetLength = 27;
  const regex = /[a-zñ]/i;
  for (let i = 0; i < letterLength; i++) {
    let letterChar = letter[i].toLowerCase();
    if (224 <= letterChar.charCodeAt(0) && 229 >= letterChar.charCodeAt(0)) {
      letterChar = "a";
    } else if (
      232 <= letterChar.charCodeAt(0) &&
      235 >= letterChar.charCodeAt(0)
    ) {
      letterChar = "e";
    } else if (
      236 <= letterChar.charCodeAt(0) &&
      239 >= letterChar.charCodeAt(0)
    ) {
      letterChar = "i";
    } else if (
      242 <= letterChar.charCodeAt(0) &&
      246 >= letterChar.charCodeAt(0)
    ) {
      letterChar = "o";
    } else if (
      249 <= letterChar.charCodeAt(0) &&
      252 >= letterChar.charCodeAt(0)
    ) {
      letterChar = "u";
    }
    if (
      !hashMap.has(letterChar) &&
      letterChar !== " " &&
      regex.test(letterChar)
    ) {
      hashMap.set(letterChar, 1);
    }
    if (hashMap.size === alphabetLength) {
      return true;
    }
  }
  return false;
}

pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho"); // true
pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!"); // true

pangram(
  "Esto es una frase larga pero no tiene todas las letras del abecedario"
); // false
pangram("De la a a la z, nos faltan letras"); // false
