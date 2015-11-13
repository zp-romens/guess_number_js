function CompareNumber(){
}

CompareNumber.prototype.compare = function (input, answer) {
  var aCount = 0;
  for (var i = 0; i < input.length; i++) {
    if (answer[i] === input[i]) {
      aCount++;
    }
  }
  var bCount = 0;
  for (var i = 0; i < input.length; i++) {
    if (answer.indexOf(input[i]) !== -1) {
      bCount++;
    }
  }

  return aCount + "A" + (bCount - aCount) + "B";
};

module.exports = CompareNumber;