/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const hashMap = {};
    for(i=0; i < nums.length; i++) {
        let currentNum = nums[i];
        let neededValue = target - currentNum;
        let firstNumberIndex = hashMap[neededValue];
        if(firstNumberIndex != null) {
            return [firstNumberIndex, i];
        } else {
            hashMap[currentNum] = i;
        }
    }
};

module.exports = twoSum;
