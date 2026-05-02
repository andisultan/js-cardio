function findLargestNumber(arr) {
  // Step 1: set the initial largest element to the first element of array
  let largest = arr[0];

  // Step 2: iterate through the array and update the largest element if a larger element is found 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}


function findLargestNumberShortcut(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  return Math.max(...arr);
}