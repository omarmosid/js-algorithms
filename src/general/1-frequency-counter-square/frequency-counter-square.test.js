const frequencyCounterSquare = require("./frequency-counter-square");

it("Test case 1: Given A = [1, 2, 3] and B = [9, 1, 4] should return true", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [9, 1, 4];
  expect(frequencyCounterSquare(arr1, arr2)).toBe(true);
});

it("Test case 2: Given A = [1, 2, 3] and B = [9, 1] should return false", () => {
  const arr1 = [1, 2, 3];
  const arr2 = [9, 1];
  expect(frequencyCounterSquare(arr1, arr2)).toBe(false);
});

it("Test case 3: Given A = [1, 2, 3, 2] and B = [9, 1, 4, 4] should return true", () => {
  const arr1 = [1, 2, 2, 3];
  const arr2 = [9, 1, 4, 4];
  expect(frequencyCounterSquare(arr1, arr2)).toBe(true);
});

it("Test case 4: Given A = [1, 2, 3, 2] and B = [9, 1, 4, 6] should return true", () => {
  const arr1 = [1, 2, 2, 3];
  const arr2 = [9, 1, 4, 6];
  expect(frequencyCounterSquare(arr1, arr2)).toBe(false);
});

it("Test case 5: Given A = [1, 2, 3, 2, 5] and B = [9, 1, 4, 4, 11] should return true", () => {
  const arr1 = [1, 2, 3, 2, 5];
  const arr2 = [9, 1, 4, 4, 11];
  expect(frequencyCounterSquare(arr1, arr2)).toBe(false);
});
