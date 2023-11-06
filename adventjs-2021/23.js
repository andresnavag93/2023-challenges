export default function canReconfigure(from, to) {
  if (from.length != to.length) return false;

  const visited = new Map();

  for (let i = 0; i < from.length; i++) {
    const charA = from[i];
    const charB = to[i];
    if (visited.has(charA)) {
      if (visited.get(charA) !== charB) {
        return false;
      }
    } else {
      visited.set(charA, charB);
    }
    if (charA !== charB) {
      if (visited.has(charB)) {
        if (visited.get(charB) !== charA) {
          return false;
        }
      } else {
        visited.set(charB, charA);
      }
    }
  }
  // ¡No olvides compartir tu solución en redes!
  return true;
}

let from = "BAL";
let to = "LIB";
canReconfigure(from, to); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

from = "CON";
to = "JUU";
canReconfigure(from, to); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

from = "XBOX";
to = "XXBO";
canReconfigure(from, to); // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

from = "XBOX";
to = "XOBX";
canReconfigure(from, to); // true

from = "MMM";
to = "MID";
canReconfigure(from, to); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

from = "AA";
to = "MID";
canReconfigure(from, to); // false -> no tiene la misma longitud
