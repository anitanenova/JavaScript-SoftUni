function solution(input, criteria) {
  if (criteria == "asc") {
    input.sort((a, b) => a - b);
  } else if (criteria == "desc") {
    input.sort((a, b) => b - a);
  }

  return input;
}
