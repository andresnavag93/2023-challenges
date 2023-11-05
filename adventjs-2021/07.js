export default function contains(store, product) {
  for (const almacen in store) {
    if (store[almacen] === product) {
      return true;
    } else if (typeof store[almacen] === "object") {
      if (contains(store[almacen], product)) {
        return true;
      }
    }
  }
  // ¡Y no olvides compartir tu solución en redes!
  return false;
}

export default function contains_reg(store, product) {
  const parseStore = JSON.stringify(store)
  const reg = new RegExp(`:"${product}"`, 'i')
  return reg.test(parseStore)
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

contains(almacen, "camiseta"); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

contains(otroAlmacen, "gameboy"); // false
