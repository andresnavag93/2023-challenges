/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const visited = new Map();
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (visited.has(num)) {
      visited.get(num).sum += 1;
    } else {
      visited.set(num, { sum: 1, num });
    }
    max = Math.max(max, visited.get(num).sum);
  }

  const array = new Array(max);

  for (const value of visited.values()) {
    if (array[value.sum] !== undefined) {
      array[value.sum].push(value.num);
    } else {
      array[value.sum] = [value.num];
    }
  }
  const result = [];
  for (let i = nums.length; i >= 0; i--) {
    let item = array[i];
    if (item !== undefined) {
      for (let j = item.length - 1; j >= 0; j--) {
        if (k > 0) {
          result.push(item[j]);
          k--;
        } else {
          return result;
        }
      }
    }
  }
  return result;
};
