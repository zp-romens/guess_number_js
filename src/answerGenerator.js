function AnswerGenerator(random) {
  this.random = random;
  this.historyAnswer = [];
}

var generateOnce = function (random) {
  var answer = "";
  while(answer.length < 4) {
    var temp = Math.floor(random() * 10);
    if ( answer.indexOf(temp) === -1) {
      answer += temp;
    }
  }
  return answer;
};

AnswerGenerator.prototype.generate = function() {
  var random = this.random;
  var answer = generateOnce(random);
  while(this.historyAnswer.indexOf(answer) !== -1) {
    answer = generateOnce(random);
  }
  if (this.historyAnswer.length == 2) {
    this.historyAnswer.shift();
  }
  this.historyAnswer.push(answer);
  return answer;
};


module.exports = AnswerGenerator;