function AnswerGenerator() {

}

AnswerGenerator.prototype.generate = function() {
  var answer = "";
  while(answer.length < 4) {
    var temp = Math.floor(Math.random() * 10);
     if ( answer.indexOf(temp) === -1) {
       answer += temp;
     }
  }
  return answer;
};

module.exports = AnswerGenerator;