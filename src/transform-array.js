const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {
  let result = "Erorr";
  if (Array.isArray(arr)) {
    arr.forEach((child, i) => {
      if (child === "--discard-next")
        result = arr. splice
    })
  }
};
