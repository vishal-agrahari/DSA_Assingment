function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1 (starting from the last element in nums1)
  let j = n - 1; // Pointer for nums2 (starting from the last element in nums2)
  let k = m + n - 1; // Pointer for the merged array (starting from the last element in the merged array)

  while (i >= 0 && j >= 0) {
    // Compare the elements from both arrays and place the larger one in the merged array
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, add them to the merged array
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

// Test the function with the given example
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log("Output:", nums1); // Output: [1, 2, 2, 3, 5, 6]
