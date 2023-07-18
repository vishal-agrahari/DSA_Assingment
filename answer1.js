function twoSum(nums, target) {
  const numToIndex = {}; // A map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (complement in numToIndex) {
      return [numToIndex[complement], i];
    }

    numToIndex[num] = i;
  }

  // If no solution is found, return an empty array or handle it as needed
  return [];
}

// Test the function with the given example
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
