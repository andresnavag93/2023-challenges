/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const visited = {};
  const NUMS_LENGTH = nums.length;
  let num, complement;

  for (let i = 0; i < NUMS_LENGTH; i++) {
    num = nums[i];
    complement = target - num;
    if (visited.hasOwnProperty(complement)) {
      return [visited[complement], i];
    } else {
      visited[num] = i;
    }
  }
};
