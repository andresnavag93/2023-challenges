//--------------------------------------------------
// Execute a callback with a 2s delay
export function execCallback(callback) {
  window.setTimeout(() => {
    callback();
  }, 2000);
}

//--------------------------------------------------
// Return a string with a 2s delay in a Promise
export function runCode() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
}
//--------------------------------------------------
// Create a delay function that supports async
export function delay(time, message) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(message);
    }, time);
  });
}

//--------------------------------------------------
// Returns the result of asynchronous tasks in order
import { doTask1, doTask2, doTask3 } from "./tasks";

export function runCode() {
  return Promise.all([doTask1(), doTask2(), doTask3()]);
}
//--------------------------------------------------
// Avoid callback hell by using Promises
import { doTask1, doTask2, doTask3 } from "./tasks";

// export function runCode() {
//   const strings = [];
//   return new Promise((resolve) => {
//     doTask1((rta1) => {
//       strings.push(rta1);
//       doTask2((rta2) => {
//         strings.push(rta2);
//         doTask3((rta3) => {
//           strings.push(rta3);
//           resolve(strings);
//         })
//       })
//     })
//   })
// }

export function runCode() {
  const strings = [];
  return doTask1()
    .then((rta1) => {
      strings.push(rta1);
      return doTask2();
    })
    .then((rta2) => {
      strings.push(rta2);
      return doTask3();
    })
    .then((rta3) => {
      strings.push(rta3);
      return strings;
    });
}
//--------------------------------------------------
// Avoid callback hell by using await

import { doTask1, doTask2, doTask3 } from "./tasks";

// export function runCode() {
//   const strings = [];
//   return new Promise((resolve) => {
//     doTask1((rta1) => {
//       strings.push(rta1);
//       doTask2((rta2) => {
//         strings.push(rta2);
//         doTask3((rta3) => {
//           strings.push(rta3);
//           resolve(strings);
//         })
//       })
//     })
//   })
// }

export async function runCode() {
  const rta1 = await doTask1();
  const rta2 = await doTask2();
  const rta3 = await doTask3();
  return [rta1, rta2, rta3];
}
//--------------------------------------------------
// Connect to an API using async

export async function runCode() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results.map((item) => item.name);
}

//--------------------------------------------------
// Capture the error of a request

export async function runCode() {
  const url = "https://domain-api-com";
  try {
    await fetch(url);
  } catch (error) {
    throw new Error("API Not Found");
  }
}
//--------------------------------------------------
// Create a utility to make requests

export async function runCode(url) {
  try {
    new URL(url);
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    if (error.message === "Failed to construct 'URL': Invalid URL") {
      throw new Error("Invalid URL");
    } else {
      throw new Error("Something was wrong");
    }
  }
}
//--------------------------------------------------
// Create a function to retry a request
export async function fetchRetry(url, times, count = 1) {
  try {
    const response = await window.fetch(url);
    return response.json();
  } catch (error) {
    if (times === 1) {
      throw Error(`Invalid request with ${count} retries`);
    } else {
      return fetchRetry(url, times - 1, count + 1);
    }
  }
}
