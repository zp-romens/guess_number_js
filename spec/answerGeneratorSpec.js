var expect = require('chai').expect;
var AnswerGenerator = require("../src/answerGenerator");

describe("game: AnswerGenerator ", function () {
  it('should return 4 digits string.', function () {
    var answerGenerator = new AnswerGenerator();

    var answer = answerGenerator.generate();
    var length = answer.length;

    expect(length).to.equal(4);
  });

  it("should return a string combine of number", function () {
    var answerGenerator = new AnswerGenerator();

    var answer = answerGenerator.generate();
    var notNumber = isNaN(Number(answer)) ;

    expect(notNumber).to.equal(false);
  })
});