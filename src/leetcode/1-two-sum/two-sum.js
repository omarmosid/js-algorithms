/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hashMap = {}; // map of neededValues and their indexes, so basically something like this hashMap = { 2: 0, 7: 1, 11: 2, 15: 3 }
  for (i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let neededValue = target - currentNum;

    // check to see key exists
    if (hashMap[neededValue] === undefined) { // if neededValue key does not exist in hashmap
      hashMap[currentNum] = i; // set neededValue in hashmap
    } else { // if neededValue key exists in the hashMap
      return [hashMap[neededValue], i]; // return value (index)
    }
  }
  // If no sum found for target throw and error
  throw new Error("No nums in array add up to target");
};

module.exports = twoSum;
