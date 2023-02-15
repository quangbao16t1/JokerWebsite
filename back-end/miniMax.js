function miniMaxSum(arr) {
  let miniSum = 0;
  let maxSum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
    if (arr[i] >= max) max = arr[i];
    else max = max;
  }
  miniSum = maxSum - max;
  console.log(miniSum, maxSum);
}

miniMaxSum([1, 3, 5, 2, 9]);
