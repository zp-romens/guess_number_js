function CompareNumber(){
}

CompareNumber.prototype.compare = function (input, answer) {
  var aCount = 0;
  for (var i = 0; i < input.length; i++) {
    if (answer[i] !== input[i]) {
      aCount++;
    }
  }
  if (aCount === 4) {
    return "4A0B";
  }
  var bCount = 0;
  for (var i = 0; i < input.length; i++) {
    if (answer.indexOf(input[i]) !== -1) {
      bCount++;
    }
  }
  if (bCount === 0) {
    return "0A0B";
  }
};

module.exports = CompareNumber;