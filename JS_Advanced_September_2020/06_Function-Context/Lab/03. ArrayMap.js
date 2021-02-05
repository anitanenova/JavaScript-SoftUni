function arrayMap(array, func) {
  return array.reduce((a, x) => {
    a.push(func(x));

    return a;
  }, []);
}
