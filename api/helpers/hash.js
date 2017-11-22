const alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
const base = alphabet.length;

const encode = (number) => {
  let encoded = '';
  while (number) {
    let remainder = number % base;
    number = Math.floor(number / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
};

const decode = (str) => {
  let decoded = null;
  while (str) {
    let index = alphabet.indexOf(str[0]);
    let pow = str.length - 1;
    decoded += index * (Math.pow(base, pow));
    str = str.substring(1);
  }
  return decoded;
};

module.exports = {
  encode,
  decode,
};
