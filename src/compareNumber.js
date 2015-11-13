function CompareNumber(){
}

CompareNumber.prototype.compare = function (input, answer) {
  if (input === answer) {
    return "4A0B";
  }
  var containCount = 0;
  for(var i = 0; i < input.length; i++) {
    if(answer.indexOf(input[i]) !== -1) {
      containCount++;
    }
  }
  if (containCount === 0) {
    return "0A0B";
  }
};

module.exports = CompareNumber;