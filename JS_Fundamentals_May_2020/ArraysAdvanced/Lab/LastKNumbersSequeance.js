function solve(n, k) {
  let nums = new Array(n);
  nums[0] = 1;
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let prev = i - k; prev <= i - 1; prev++) {
      if (prev >= 0) {
        sum += nums[prev];
      }
      nums[i] = sum;
    }
  }
  return nums.join(" ");
}

console.log(solve(6, 3));
