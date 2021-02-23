function convert(name, lastName, hairColor) {
  const obj = {
    name,
    lastName,
    hairColor,
  };

  return JSON.stringify(obj);
}
