const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false

  let result = ''
  members.forEach(str => {
    if (typeof str === 'string')
      result += str.trim()[0]
  })
  return result.toUpperCase().split('').sort().join('')
};
