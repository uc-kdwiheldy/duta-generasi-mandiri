"use strict";
function pattern_count(str, ptr) {
  let count = 0;
  let cstr = '';
  let cidx = 0;
  if (!(str === null || str === void 0 ? void 0 : str.length))
    return 0;
  if (!(ptr === null || ptr === void 0 ? void 0 : ptr.length))
    return 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ptr[cidx]) {
      cstr += str[i];
      cidx += 1;
      if (cstr === ptr) {
        i -= 1;
        count += 1;
        cstr = '';
        cidx = 0;
      }
    }
    else {
      cstr = '';
      cidx = 0;
    }
  }
  return count;
}

console.log(pattern_count('palindrom', 'ind'));
console.log(pattern_count('ababab', 'aba'));
console.log(pattern_count('abakadabra', 'ab'));
console.log(pattern_count('aaaaaa', 'aa'));
console.log(pattern_count('hello', ''));
console.log(pattern_count('hell', 'hello'));