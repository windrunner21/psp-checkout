import { ChangeEvent } from "react";
import { RE_EMAIL, RE_MASTERCARD, RE_NAME, RE_VISA } from "../constants";
import { CardBrand } from "../models/enums/card-brand";

export function getCardBrand(number: string) {
  const value = number.replace(/\D/g, "");

  if (RegExp(RE_VISA).test(value)) {
    return CardBrand.visa;
  }

  if (RegExp(RE_MASTERCARD).test(value)) {
    return CardBrand.mastercard;
  }
}

// explanation in comments, makes strong use of regular expressions
export function formatCardNumber(e: ChangeEvent<HTMLInputElement>) {
  //remove all the empty spaces in the input
  const inputVal = e.target.value.replace(/ /g, "");

  // get only digits
  let inputNumbersOnly = inputVal.replace(/\D/g, "");

  // if entered value has a length greater than 16 then take only the first 16 digits,
  // for example if value has been copy pasted
  if (inputNumbersOnly.length > 16) {
    inputNumbersOnly = inputNumbersOnly.substring(0, 16);
  }

  // Get nd array of 4 digits per an element, for example ["4242", "4242", ...]
  const splits = inputNumbersOnly.match(/.{1,4}/g);

  let spacedCreditCardNumber = "";
  // Join all the splits with an empty space
  if (splits) {
    spacedCreditCardNumber = splits.join(" ");
  }

  return spacedCreditCardNumber;
}

export function isValidCardNumber(target: EventTarget) {
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

export function isValidMonth(target: EventTarget, yearValue: string) {
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

export function isValidYear(target: EventTarget, monthValue: string) {
  const targetStrong = target as HTMLTextAreaElement;

  const last2 = new Date().getFullYear().toString().substring(2);
  let month: number | string = new Date().getMonth() + 1;

  month = month < 10 ? "0" + month : month;

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

export function isValidCVC(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;

  return targetStrong.value.length == 3;
}

export function isValidNameSurname(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;

  const splits = targetStrong.value.split(" ");

  let correct = true;
  splits.forEach((element) => {
    if (!RE_NAME.test(element)) {
      correct = false;
    }
  });

  return correct;
}

export function isValidEmailAddress(target: EventTarget) {
  const targetStrong = target as HTMLTextAreaElement;

  return RE_EMAIL.test(targetStrong.value);
}
