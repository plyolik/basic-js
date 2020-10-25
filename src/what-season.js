const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
 if (!date)
   return 'Unable to determine the time of year!';
  if (typeof date !== 'object')
    throw new Error();
  let month;
  try {
    month = date.getUTCMonth();
  } catch (e) {
    throw new Error()
  }
  if (month === 11 || month <= 1 )
  return "winter";
  if (month > 1 && month <= 4)
  return "spring";
  if (month > 4 && month <= 7)
  return "summer";
  if (month > 7 && month <= 10)
  return "fall"
};
