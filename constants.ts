export function retrieveCardAssociations(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;
  const value = targetStrong.value.replace(/\D/g, "");

  if (RegExp(/^4[0-9]{0,}$/).test(value)) {
    return "visa";
  }

  if (
    RegExp(/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/).test(
      value
    )
  ) {
    return "mastercard";
  }

  if (RegExp(/^3[47][0-9]{0,}$/).test(value)) {
    return "amex";
  }
}

export function formatCreditCard(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;

  var rawCardNumber = targetStrong.value.replace(/\D/g, "");

  if (rawCardNumber.length > 0) {
    // force reg exp - possible null exists
    rawCardNumber = rawCardNumber
      .match(new RegExp(".{1,4}", "g"))!
      .join(" \u00B7 ");
  }

  targetStrong.value = rawCardNumber;
}

export function showLatest4Digits(length: number, input: string) {
  let times = Math.floor(length / 4);

  if (length > 0 && length % 4 == 0) {
    times = times - 1;
  }

  if ((length - 1) % 4 == 0) {
    return "\u2022".repeat(times) + input.substring(4 * times, length);
  }

  if (length > 4 * times + 1 && length <= 4 * (times + 1)) {
    return "\u2022".repeat(times) + input.substring(4 * times, 4 * (times + 1));
  }
}

export function showExpireDate(month: string, year: string) {
  if (month.length == 2) {
    return month + "/" + year;
  }

  return month + year;
}

export function formatExpireMonth(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;

  if (
    Number(targetStrong.value) > 0 &&
    Number(targetStrong.value) < 10 &&
    targetStrong.value.length != 2
  ) {
    // force reg exp - possible null exists
    targetStrong.value = "0" + targetStrong.value;
  }
}

export function validateCard(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;
  let value = targetStrong.value.replace(/\D/g, "");

  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  var nCheck = 0,
    nDigit = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
}

export function isValidExpireMonth(target: EventTarget, yearValue: string) {
  const targetStrong = target as HTMLTextAreaElement;

  if (Number(targetStrong.value) > 0 && Number(targetStrong.value) <= 12) {
    if (yearValue != "") {
      const last2 = new Date().getFullYear().toString().substring(2);
      let month: number | string = new Date().getMonth() + 1;
      month = month < 10 ? "0" + month : month;

      if (Number(yearValue) > Number(last2)) {
        return true;
      } else if (
        Number(yearValue) == Number(last2) &&
        targetStrong.value >= month
      ) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
}

export function isValidExpireYear(target: EventTarget, monthValue: string) {
  const targetStrong = target as HTMLTextAreaElement;

  const last2 = new Date().getFullYear().toString().substring(2);
  let month: number | string = new Date().getMonth() + 1;

  month = month < 10 ? "0" + month : month;

  console.log(month);
  if (Number(targetStrong.value) > Number(last2)) {
    return true;
  } else if (
    Number(targetStrong.value) == Number(last2) &&
    monthValue >= month
  ) {
    return true;
  } else {
    return false;
  }
}

export function isValidPassword(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;

  if (targetStrong.value.length == 3) {
    return true;
  } else {
    return false;
  }
}

export function isValidNameSurname(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;

  if (RegExp(/^[a-zA-Z ]{2,30}$/).test(targetStrong.value)) {
    return true;
  } else {
    return false;
  }
}
