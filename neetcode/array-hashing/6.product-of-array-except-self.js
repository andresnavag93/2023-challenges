/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let array = [];
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    array[i] = prefix;
    prefix *= nums[i];
  }
  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    array[i] *= postfix;
    postfix *= nums[i];
  }
  return array;
};

productExceptSelf([1, 2, 3, 4]);
