const validUrl = require('valid-url');

export const isUrl = (str) => {
  if (validUrl.isWebUri(str)) {
    return true;
  }
  return false;
};
