export const RE_VISA = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
export const RE_MASTERCARD = new RegExp(
  /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
);
export const RE_AMEX = new RegExp(/^3[47][0-9]{13}$/);
export const RE_MAESTRO = new RegExp(
  /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/
);

enum CardAssociation {
  VISA,
  MASTERCARD,
  AMEX,
  MAESTRO,
}

export function validateCard(target: EventTarget, type: CardAssociation) {
  const targetStrong = target as HTMLTextAreaElement;
  let regex: RegExp | null = null;

  switch (type) {
    case CardAssociation.VISA:
      regex = RE_VISA;
      break;
    case CardAssociation.MASTERCARD:
      regex = RE_MASTERCARD;
      break;
    case CardAssociation.AMEX:
      regex = RE_AMEX;
      break;
    case CardAssociation.MAESTRO:
      regex = RE_MAESTRO;
      break;
    default:
      break;
  }

  if (regex?.test(targetStrong.value.replace(/\D/g, ""))) {
    return true;
  } else {
    return false;
  }
}
