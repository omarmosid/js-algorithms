const frequencyCounterSquare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let fq1 = {};
  let fq2 = {};

  // Construct fq1 and fq2 objects
  for (let val of arr1) {
    fq1[val] = (fq1[val] || 0) + 1;
  }

  for (let val of arr2) {
    fq2[val] = (fq2[val] || 0) + 1;
  }

  for (let key in fq1) {
    if (!(key ** 2) in fq2) return false; // If the key squared in B does not exist in fq2

    if (fq2[key ** 2] !== fq1[key]) return false; // If the count of square appearing in B is same as the count of the number in A
  }

  return true;
};

module.exports = frequencyCounterSquare;
