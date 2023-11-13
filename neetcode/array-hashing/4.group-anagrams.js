/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const visited = new Map(); // has, get, set  function helper

  const STRS_LENGTH = strs.length;
  let str, orderStr;

  // 1) Iterate for each element
  for (let i = 0; i < STRS_LENGTH; i++) {
    str = strs[i];
    // 2) Order the word alphabetic and compare with visited
    orderStr = str.split("").sort().join("");

    // 3) Check if the key exists and add to array
    if (visited.has(orderStr)) {
      visited.get(orderStr).push(str);
      // 4) If not, create new key and new [word]
    } else {
      visited.set(orderStr, [str]);
    }
  }
  // Return the values of the map
  return Array.from(visited.values());
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);
