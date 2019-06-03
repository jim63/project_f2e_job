/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let s_length = s.length;
  let p_length = p.length;
  let retArr = [];
  for (let i = 0; i < s_length - p_length + 1; i++) {
    let isInside = true;
    let new_s = s.split('').splice(i, p_length);
    for (let j = 0; j < p.length; j++) {
      console.log(new_s);
      console.log(p[j]);
      console.log(new_s.indexOf(p[j]));

      if (new_s.indexOf(p[j]) === -1) {
        isInside = false;
        break;
      }
    }
    if (isInside === true) {
      retArr.push(i);
    }
  }
  return retArr;
};

console.log(findAnagrams('abab', 'ab'));
