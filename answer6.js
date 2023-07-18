function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Test the function with the given example
const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log("Output:", result); // Output: true
