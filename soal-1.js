"use strict";
function sort(arr) {
  let arrn = [];
  let arrs = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      if (arrs === null || arrs === void 0 ? void 0 : arrs.length) {
        for (let j = 0; j < arrs.length; j++) {
          if (arrs[j] > arr[i]) {
            arrs.splice(j, 0, arr[i]);
            j += arrs.length;
          }
          else if (j === arrs.length - 1) {
            arrs.push(arr[i]);
            j += arrs.length;
          }
        }
      }
      else
        arrs = [arr[i]];
    }
    else {
      if (arrn === null || arrn === void 0 ? void 0 : arrn.length) {
        for (let j = 0; j < arrn.length; j++) {
          if (arrn[j] > arr[i]) {
            arrn.splice(j, 0, arr[i]);
            j += arrn.length;
          }
          else if (j === arrn.length - 1) {
            arrn.push(arr[i]);
            j += arrn.length;
          }
        }
      }
      else
        arrn = [arr[i]];
    }
  }
  return arrs.concat(arrn);
}

console.log(sort([12, 9, 30, 'A', 'M', 99, 82, 'J', 'N', 'B']));