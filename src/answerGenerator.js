function AnswerGenerator() {

}

AnswerGenerator.prototype.generate = function() {
  var temp = "";
  for(var i = 0; i < 4; i++) {
    temp += Math.floor(Math.random() * 10);
  }
  return temp;
};

module.exports = AnswerGenerator;