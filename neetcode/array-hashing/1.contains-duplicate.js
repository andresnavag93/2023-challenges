/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]] === 1) {
      return true;
    } else {
      dict[nums[i]] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
