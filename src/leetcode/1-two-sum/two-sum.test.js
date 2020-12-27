const { expect } = require("@jest/globals");
const twoSum = require("./two-sum")


it("Test case 1", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
//   expect("lala").toBe("lala")
  expect(twoSum(nums, target)).toEqual([0, 1]);
});
