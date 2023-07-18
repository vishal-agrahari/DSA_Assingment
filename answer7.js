function moveZeroes(nums) {
  let j = 0; // Pointer for the next nonzero element position

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is nonzero, move it to the j-th position and increment j
      nums[j] = nums[i];
      if (i !== j) {
        nums[i] = 0; // Set the current position to 0 if it's not the same as j
      }
      j++;
    }
  }
}

// Test the function with the given example
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log("Output:", nums); // Output: [1, 3, 12, 0, 0]
