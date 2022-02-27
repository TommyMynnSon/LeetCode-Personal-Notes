/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  // Object to map last seen index positions
  // of each character
  const lastSeen = {};

  // Index to start building substrings from
  // to avoid any previous duplicate characters
  let startIndex = 0;

  // Range to represent start (inclusive) and end (exclusive)
  // index positions of longest substring
  const rangeOfAnswer = [startIndex, 1];

  for (let i = 0; i < s.length; i++) {
    const currentCharacter = s[i];

    // Check if current character has been recorded in map
    // - If so, update startIndex
    if (lastSeen[currentCharacter] !== undefined) {
      startIndex = Math.max(startIndex, lastSeen[currentCharacter] + 1);
    }

    // Compare current range with new range and update current range
    // with new range if new range is greater than current range
    const currentRange = rangeOfAnswer[1] - rangeOfAnswer[0];
    const newRange = (i + 1) - startIndex;

    if (newRange > currentRange) {
      rangeOfAnswer[0] = startIndex;
      rangeOfAnswer[1] = i + 1;
    }

    // Update current character in map regardless
    lastSeen[currentCharacter] = i;
  }

  // Return value of range
  return s.substring(rangeOfAnswer[0], rangeOfAnswer[1]).length;
};