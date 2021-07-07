const ftoc = function (f) {
let result = (f - 32) * 5 / 9; 
  return Math.round(result*10)/10;
}

const ctof = function (c) {
let result = c * 5 / 9 + 32;
  return Math.round(result*10)/10;
}

module.exports = {
  ftoc,
  ctof
}