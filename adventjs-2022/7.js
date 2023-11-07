function getGiftsToRefill(a1, a2, a3) {
  const almacenes = new Map();
  const result = [];

  const checkAlmacen = (almacen, n) => {
    [...new Set(almacen)].forEach((gift) => {
      if (!almacenes.has(gift)) almacenes.set(gift, new Map());
      almacenes.get(gift).set(n, true);
    });
  };
  checkAlmacen(a1, 1);
  checkAlmacen(a2, 2);
  checkAlmacen(a3, 3);

  almacenes.forEach((gift, key) => {
    if (gift.size <= 1) result.push(key);
  });
  return result;
}

function getGiftsToRefill2(a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  );
}

const a1 = ["bici", "coche", "bici", "bici"];
const a2 = ["coche", "bici", "muñeca", "coche"];
const a3 = ["bici", "pc", "pc"];

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['muñeca', 'pc']
