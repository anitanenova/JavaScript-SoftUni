function solve(s) {
  let count = 0;
  let maxCount = 0;
  let prevChar = " ";

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (c == prevChar) {
      count++;
    } else {
      count = 1;
      prevChar = c;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

console.log(solve("leetcode"));
