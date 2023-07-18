function findErrorNums(nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2; // Sum of the original set (1 to n)
  let sumSquares = (n * (n + 1) * (2 * n + 1)) / 6; // Sum of squares of the original set

  for (const num of nums) {
    sum -= num; // Subtract each number from the sum
    sumSquares -= num * num; // Subtract the square of each number from the sum of squares
  }

  // At this point, sum will be the missing number and sumSquares will be the duplicated number
  const missing = sum;
  const duplicated = (sumSquares - missing * missing) / (2 * missing);

  return [duplicated, missing];
}

// Test the function with the given example
const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log("Output:", result); // Output: [2, 3]
