function removeElement(nums, val) {
  let k = 0; // Number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // If the current element is not equal to val,
      // move it to the k-th position and increment k.
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Test the function with the given example
const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log("Output:", result, ", nums =", nums.slice(0, result));
