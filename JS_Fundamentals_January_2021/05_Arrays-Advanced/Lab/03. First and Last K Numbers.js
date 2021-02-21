function solve(arr) {
  const k = arr.shift();

  return `${arr.slice(0, k).join(" ")}\n${arr.slice(-k).join(" ")}`;
}
