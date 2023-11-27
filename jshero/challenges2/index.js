//--------------------------------------------------
// Combine two arrays of numbers into one
// Merge Arrays

// Array A: [1,2,3,4]
// Array B: [5,6,7,8]
// Run Code: 1,2,3,4,5,6,7,8
export function mergeArrays(arrayA, arrayB) {
  return [...arrayA, ...arrayB];
}

//--------------------------------------------------
// Transform an array of arrays into a single level array
// Flat Arrays

// Array: [[1,2,3],[4,5,6],[7,8,9]]
// Run Code: 1,2,3,4,5,6,7,8,9
export function flatArray(array) {
  return array.flat();
}

//--------------------------------------------------
// Calculate the total number of words in a text
// Count Words

// Array: ["Beautiful is better than ugly","Explicit is better than implicit"]
// Run code: 10
export function countWords(array) {
  return array.flatMap((line) => line.split(" ")).length;
}

//--------------------------------------------------
// Order numbers from greatest to least
// Sort

// Array: [3,1,11,5,2,-7,8]
// Rund Code: 11,8,5,3,2,1,-7
export function sortDesc(numbers) {
  return numbers.sort((a, b) => b - a);
}

//--------------------------------------------------
// Sort by number of characters from highest to lowest
// Sort by Length

// Array A: ["Hola","Viajar","Sol","Aprender"]
// Run Code: Sol,Hola,Viajar,Aprender
export function sortByLength(words) {
  return words.sort((a, b) => a.length - b.length);
}

//--------------------------------------------------
// Sort an array of objects by date
// Sort By Date

// Array: [
//  {
//   "name": "Nicolas",
//   "dateOfBirth": "1993-07-08T22:00:00.000Z"
//  },
//  {
//   "name": "Santiago",
//   "dateOfBirth": "2018-07-10T22:00:00.000Z"
//  },
//  {
//   "name": "Zulema",
//   "dateOfBirth": "1994-11-06T23:00:00.000Z"
//  }
// ]
// Run Code: [
//  "Santiago",
//  "Zulema",
//  "Nicolas"
// ]
export function sortByDate(array) {
  return array
    .sort((a, b) => b.dateOfBirth.getTime() - a.dateOfBirth.getTime())
    .map((item) => item.name);
}
//--------------------------------------------------
// Sort a list of names by last name
// Sort By LastName
// Array: ["Nicolas Molina","Andrea Perez","Zulema Vicente","Juan Amador"]
// Run code: Juan Amador,Nicolas Molina,Andrea Perez,Zulema Vicente
export function sortByLastName(array) {
  return array.sort((a, b) => {
    const lastNameA = a.split(" ")[1];
    const lastNameB = b.split(" ")[1];
    return lastNameA.localeCompare(lastNameB);
  });
}

//--------------------------------------------------
// Returns the unique values ​​of a list
// Filter Unique

// Array: [3,3,2,2,1,1]
// Run Code: 1,2,3
export function filterUnique(array) {
  return array
    .filter((item, i, array) => array.indexOf(item) === i)
    .sort((a, b) => a - b);
}

//--------------------------------------------------
// Calculate the frequency with which a number appears
// Counter Numbers
// Array: [1,2,2,3,3,3]
// Run Code: { 1: 1, 2: 2, 3: 3 }
export function counterNumbers(numbers) {
  return numbers.reduce((obj, item) => {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
    return obj;
  }, {});
}

//--------------------------------------------------
// Add an element without modifying the original array
// Add Element
// Array: [1,2,3,4]
export function addNumber(numbers, newElement) {
  return [...numbers, newElement];
}

//--------------------------------------------------
// Edit an element without modifying the original array
// Update Array
// Array: [1,2,3]
export function updateArray(array, index, newValue) {
  return array.map((item, i) => {
    if (i === index) {
      return newValue;
    }
    return item;
  });
}

//--------------------------------------------------
// Delete an element without modifying the original array
// Update Array
// Array: [1,2,3]

export function removeFromArray(array, index) {
  return array.filter((item, i) => i !== index);
}
