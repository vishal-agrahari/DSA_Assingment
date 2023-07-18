function plusOne(digits) {
  let carry = 1; // Initialize the carry as 1 since we are adding one
  const result = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    result.unshift(sum % 10); // Add the least significant digit to the result array
    carry = Math.floor(sum / 10); // Update the carry for the next iteration
  }

  // If there is any remaining carry after the loop, add it to the result
  if (carry > 0) {
    result.unshift(carry);
  }

  return result;
}

// Test the function with the given example
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log("Output:", result); // Output: [1, 2, 4]
