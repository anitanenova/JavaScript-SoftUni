function city(obj) {
  return Object.keys(obj).forEach((x) => console.log(`${x} -> ${obj[x]}`));
}
