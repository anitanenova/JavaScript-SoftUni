function dollarFormatterBuilder(currencyFormatter) {
  let separator = ",";
  let symbol = "$";
  let symbolFirst = true;
  return currencyFormatter.bind(null, separator, symbol, symbolFirst);
}
