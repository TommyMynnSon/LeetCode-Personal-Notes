/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function(s) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = Math.pow(2, 31) * -1;

  let integer = '';
  let index = 0;
  let sign = 1;

  // Remove whitespace
  while (s[index] === ' ') {
    index++;
  }

  // Determine sign
  if (s[index] === '-') {
    sign = -1;
    index++;
  } else if (s[index] === '+') {
    index++;
  }

  // Remove trailing zeros
  while (s[index] === '0') {
    index++;
  }

  // Get first valid digit
  if (isNaN(parseInt(s[index])) === true) {
    return 0;
  } else {
    integer += s[index];
    index++;
  }

  // Read in next characters until non-digit character
  // or end of the input is reached
  while (index < s.length) {
    if (isNaN(parseInt(s[index])) === false) {
      integer += s[index];

      if (parseInt(integer) * sign <= MIN) {
        return MIN;
      }

      if (parseInt(integer) * sign >= MAX) {
        return MAX;
      }

      index++;
    } else {
      index = s.length;
    }
  }

  return parseInt(integer) * sign;
};