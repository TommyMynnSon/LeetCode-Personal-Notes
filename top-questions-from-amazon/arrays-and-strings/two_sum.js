/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  // O(n) Time, O(n) Space
  const history = {};

  for (let i = 0; i < nums.length; i++) {
    if (history[target - nums[i]] !== undefined) {
      return [i, history[target - nums[i]]];
    }

    history[nums[i]] = i;
  }
};

var twoSum = function(nums, target) {
  // O(n^2) Time, O(1) Space
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};