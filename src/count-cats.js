const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0
  matrix.forEach(el => {
    if (Array.isArray(el)) {
      el.forEach(child => {
        if (child === '^^') result++
      })
    }
  })
  return result;
};
