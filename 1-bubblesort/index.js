let testArr = [23, 45, 18, 76, 62];
let testArr2 = [5, 4, 3, 2, 1];

console.log(testArr2);

function bubbleSort(arr) {
  for (let cycle = 0; cycle < arr.length - 1; cycle++) {
    for (let i = 0; i < arr.length - 1; i++) {
      let temp = 0;
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(testArr2));
