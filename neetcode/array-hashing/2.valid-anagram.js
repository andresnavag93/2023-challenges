/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let start = 0;
  let dict = {};
  for (start = 0; start < s.length; start++) {
    if (dict[s[start]]) {
      dict[s[start]] += 1;
    } else {
      dict[s[start]] = 1;
    }
  }
  for (start = 0; start < t.length; start++) {
    if (dict[t[start]] >= 1) {
      dict[t[start]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};
