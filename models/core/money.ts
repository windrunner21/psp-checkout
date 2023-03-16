type Money = {
  price: number;
  cents: number;
};

export const moneyInterface = {
  convert: function (price?: number, cents?: number) {
    const moneyResult = price
      ? { price, cents: toCents(price) }
      : cents
      ? { price: fromCents(cents), cents }
      : undefined;

    if (!isSafe(moneyResult?.cents)) {
      console.log("here");
      return undefined;
    }

    return moneyResult;
  },
  add: function (a: Money, b: Money) {
    return moneyInterface.convert(undefined, a.cents + b.cents);
  },
  subtract: function (a: Money, b: Money) {
    return moneyInterface.convert(undefined, a.cents - b.cents);
  },
  multiply: function (a: Money, b: Money) {
    return moneyInterface.convert(undefined, a.cents * b.cents);
  },
  divide: function (a: Money, b: Money) {
    return moneyInterface.convert(undefined, a.cents / b.cents);
  },
};

/*
 * Convert to Cents and Reverse
 */
function toCents(price: number) {
  return Math.round(price * 100);
}

function fromCents(cents: number) {
  return cents / 100;
}

/*
 * Check if conversion is made safely
 */
function isSafe(value?: number) {
  console.log(value);
  console.log(Math.round(value!) === value);
  return (
    value &&
    Math.round(value) === value &&
    Number.MIN_SAFE_INTEGER <= value &&
    value <= Number.MAX_SAFE_INTEGER
  );
}
