var expect = require('chai').expect;
var CompareNumber = require("../src/compareNumber");

describe("game: GuessNumber ", function () {
  it('should return 4A0B when input is 1234 and answer is 1234.', function () {
    //given
    var input = "1234";
    var answer = "1234";

    //when
    var compareNumber = new CompareNumber();
    var result = compareNumber.compare(input, answer);

    //then
    expect(result).to.equal('4A0B');
  });

  it("should return 0A0B when input is 1234 answer is 5678.", function () {
    var input = "1234";
    var answer = "5678";

    var compareNumber = new CompareNumber();
    var result = compareNumber.compare(input, answer);

    expect(result).to.equal("0A0B");
  });

  it("should return 0A4B when input is 1234 and answer is 4321", function() {
    var input = "1234";
    var answer = "4321";

    var compareNumber = new CompareNumber();
    var result = compareNumber.compare(input, answer);

    expect(result).to.equal("0A4B");
  });

  it("should return 1A1B when input is 1234 and answer is 1456", function() {
    var input = "1234";
    var answer = "1456";

    var compareNumber = new CompareNumber();
    var result = compareNumber.compare(input, answer);

    expect(result).to.equal("1A1B");
  })
});