export const RE_EMAIL = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|az|ru)\b/
);

export const RE_NAME =
  /^[abcçdeəfgğhxıijkqlmnoöprsştuüvyza-zABCÇDEƏFGHXİJKQLMNOÖPRSŞTUÜVYZA-Z]{3,30}$/i;

// NETWORK
export const CONNECTION = "http";
export const HOST = "localhost";
export const PORT = 2106;
