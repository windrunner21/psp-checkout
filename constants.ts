export const RE_EMAIL = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|az|ru)\b/
);
export const RE_NAME =
  /^[abcçdeəfgğhxıijkqlmnoöprsştuüvyza-zABCÇDEƏFGHXİJKQLMNOÖPRSŞTUÜVYZA-Z]{3,30}$/i;

export const RE_VISA = /^4[0-9]{0,}$/;

export const RE_MASTERCARD =
  /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/;

// NETWORK
export const CONNECTION = "http";
export const HOST = "localhost";
export const PORT = 2106;
