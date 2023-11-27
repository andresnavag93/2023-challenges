//--------------------------------------------------
// Multiply all elements by two
// Multiply Elements

// Array: [1,2,3,4,-2]
// Run Code: [2,4,6,8,-4]
export function multiplyElements(array) {
  return array.map((item) => item * 2);
}

//--------------------------------------------------
// Transforms an Array of objects to an Array of strings
// Get Arrays with names

// Example Array:  [
//  {
//   "name": "Nicolas",
//   "lastName": "Molina",
//   "age": 28
//  },
//  {
//   "name": "Valentina",
//   "lastName": "Molina",
//   "age": 19
//  }
// ]
// Run Code: [
//  "Nicolas",
//  "Valentina"
// ]
export function getNames(array) {
  return array.map((item) => item.name);
}

//--------------------------------------------------
// Calculates and adds a new property in an Array
// Calc taxes in array

// Example Array: [
//  {
//   "name": "Product 1",
//   "price": 1000,
//   "stock": 10
//  },
//  {
//   "name": "Product 2",
//   "price": 2000,
//   "stock": 20
//  }
// ]
// Run Code: [
//  {
//   "name": "Product 1",
//   "price": 1000,
//   "stock": 10,
//   "taxes": 190
//  },
//  {
//   "name": "Product 2",
//   "price": 2000,
//   "stock": 20,
//   "taxes": 380
//  }
// ]
export function addNewAttr(array) {
  return array.map((item) => {
    const copyItem = { ...item };
    copyItem.taxes = Math.trunc(copyItem.price * 0.19);
    return copyItem;
  });
}

//--------------------------------------------------
// Returns only words of 4 letters and more
// Filter by Length

// Words: ["amor","sol","piedra","día"]
// Run Code: ["amor","piedra"]

export function filterByLength(array) {
  return array.filter((word) => word.length >= 4);
}

//--------------------------------------------------
// Filter purchases that meet the conditions
// Filter orders

// Orders: [
//  {
//   "customerName": "Nicolas",
//   "total": 100,
//   "delivered": true
//  },
//  {
//   "customerName": "Zulema",
//   "total": 120,
//   "delivered": false
//  }
// ]
// Run Code: [
//   {
//    "customerName": "Nicolas",
//    "total": 100,
//    "delivered": true
//   }
//  ]

export function filterOrders(array) {
  return array.filter((item) => item?.total >= 100 && item?.delivered);
}

//--------------------------------------------------
// Search within a string and find out if it has the key?
// Check In String

// Text: Ana lava la tina
// Term: ana
// Run Code: true
export function checkInString(text, term) {
  return text.toLowerCase().includes(term.toLowerCase());
}

//--------------------------------------------------
// Create a search engine that returns words according to the search parameter
// Filter By Term

// Array: ["ana","santi","nico","anastasia"]
// Term: ana
// Run Code:  ["ana","anastasia"]
export function filterByTerm(array, term) {
  return array.filter((word) => {
    return word.toLowerCase().includes(term.toLowerCase());
  });
}

//--------------------------------------------------
// Calcula la suma total de los elementos
// Calc Total

// Array: [1, 2, 3, 4]
// Run Code: 10
export function calcSum(numbers) {
  return numbers.reduce((count, item) => count + item, 0);
}

//--------------------------------------------------
// Calculate the sum of all purchases between objects
// Calc total

// Array: [
//  {
//   "customerName": "Nicolas",
//   "total": 100,
//   "delivered": true
//  },
//  {
//   "customerName": "Zulema",
//   "total": 120,
//   "delivered": false
//  },
//  {
//   "customerName": "Santiago",
//   "total": 20,
//   "delivered": false
//  }
// ]
// Run Code: 240
export function calcTotal(orders) {
  return orders
    .map((item) => item.total)
    .reduce((count, item) => count + item, 0);
}

//--------------------------------------------------
// Return if at least one of the numbers is even
// Check Array

// Array A: [1,2,3,4]
// Run Code: true
// Array B: [5, 7, 9]
// Run Code: false
export function checkArray(array) {
  return array.some((item) => item % 2 === 0);
}

//--------------------------------------------------
// Returns a boolean if all elements are even
// Check Array

// Array A: [2,4,6,8]
// Run Code: true
// Run Code: false
// Array B: [5,7,9]
export function checkArray(array) {
  if (array.length === 0) {
    return false;
  }
  return array.every((item) => item % 2 === 0);
}

//--------------------------------------------------
// Solve if within a list of cards you have the AS
// Find As

// Array A: ["hearts","spades","AS"]
// Run Code: Tienes el AS
// Array B: ["hearts","spades"]
// Run Code: No, tienes el AS
export function findAs(deck) {
  const rta = deck.find((item) => item === "AS");
  return rta ? "Tienes el AS" : "No, tienes el AS";
}

//--------------------------------------------------
// Returns the position of a key within a list
// Find Index

// Array A: ["diamonds","myKey","AS"]
// Run Code: 1
// Array B: ["diamonds","AS"]
// Run Code: false
export function findMyKey(array) {
  const index = array.findIndex((item) => item === "myKey");
  return index !== -1 ? index : false;
}

//--------------------------------------------------
// Transform a string and separate it with commas, like in a CSV
// Merge Arrays

// Array: ["amor","sol","piedra","día"]
// Run Code: "amor,sol,piedra,día"
export function joinString(words) {
  return words.join(",");
}

//--------------------------------------------------
// Build a URL based on a string
// Parse URL

// Title: La API para nunca parar de aprender
// Run Code: la-api-para-nunca-parar-de-aprender
export function parseToURL(title) {
  return title.split(" ").join("-").toLowerCase();
}
