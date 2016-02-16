var expect = require('chai').expect;
var AnswerGenerator = require("../src/answerGenerator");
var m = require('jsmockito').JsMockito;
var j = require('jshamcrest').JsHamcrest;
var anything = j.Matchers.anything;
///JsHamcrest.Matchers.anything()
//require('JsHamcrest').Integration.screwunit();
//require('jsMockito').Integration.screwunit();

describe("game: AnswerGenerator ", function () {
  it('should return 4 digits string.', function () {
    var answerGenerator = new AnswerGenerator(Math.random);

    var answer = answerGenerator.generate();
    var length = answer.length;

    expect(length).to.equal(4);
  });

  it("should return a string combine of number", function () {
    var answerGenerator = new AnswerGenerator(Math.random);

    var answer = answerGenerator.generate();
    var notNumber = isNaN(Number(answer));

    expect(notNumber).to.equal(false);
  });

  it("should return no duplicated digits string", function () {
    var answerGenerator = new AnswerGenerator(Math.random);

    var answer = answerGenerator.generate();

    for(var i = 0; i < 4; i++) {
      expect(answer.indexOf(answer[i])).to.equal(answer.lastIndexOf(answer[i]));
    }
  });

  it("should have  str", function () {
    var answerGenerator = new AnswerGenerator(Math.random);

    var results = [];
    results.push(answerGenerator.generate());
    results.push(answerGenerator.generate());
    results.push(answerGenerator.generate());
    expect(results.length).to.equal(3);
  });

  xit("should no repeat str in 3 times", function () {

    var random = m.mockFunction();
    m.when(random).call(anything())
      .thenReturn(.1, .2, .3, .4)
      .thenReturn(.2, .3, .4, .5)
      .thenReturn(.1, .2, .3, .4)
      .thenReturn(.3, .4, .5, .6);

    var answerGenerator = new AnswerGenerator(random);
    var results = [];
    results.push(answerGenerator.generate());
    results.push(answerGenerator.generate());
    results.push(answerGenerator.generate());
    expect(results[2]).to.equal("3456");
  });
});