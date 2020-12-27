const twoSum = require("./two-sum")

it("Test case 1: nums = [2, 7, 11, 15], target = 9 | should return [0, 1]", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

it("Test case 2: nums = [2, 7, 11, 15], target = 22 | should return [1, 3]", () => {
  const nums = [2, 7, 11, 15];
  const target = 22;
  expect(twoSum(nums, target)).toEqual([1, 3]);
});

it("Test case 3: nums = [2, 7, 11, 15], target = 100 | should throw an error", () => {
  const nums = [2, 7, 11, 15];
  const target = 100;
  expect(() => twoSum(nums, target)).toThrow(Error);
});

it("Test case 4: nums = [3, 3], target = 6 | should return [0, 1]", () => {
  const nums = [3, 3];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

it("Test case 5: nums = [3, 2, 4], target = 6 | should return [1, 2]", () => {
  const nums = [3, 2, 4];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([1, 2]);
});

