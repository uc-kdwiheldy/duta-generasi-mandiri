"use strict";
function count(str) {
  str = str.replace(/ /g, '');
  const obj = {};
  const arr = [];
  const arrk = [];
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]])
      obj[str[i]] += 1;
    else
      obj[str[i]] = 1;
  }
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (arrk === null || arrk === void 0 ? void 0 : arrk.length) {
      for (let j = 0; j < arrk.length; j++) {
        if (arrk[j].toLowerCase() > keys[i].toLowerCase()) {
          arrk.splice(j, 0, keys[i]);
          j += arrk.length;
        }
        else if (j === arrk.length - 1) {
          arrk.push(keys[i]);
          j += arrk.length;
        }
      }
    }
    else
      arrk.push(keys[i]);
  }
  for (let i = 0; i < arrk.length; i++) {
    arr[i] = {};
    arr[i][arrk[i]] = obj[arrk[i]];
  }
  return arr;
}

console.log(count('Hello World'));
console.log(count('Bismillah'));
console.log(count('MasyaAllah'));