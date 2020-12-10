const exercise = require("../exercise1");

module.exports = function (expect) {
  describe("fizzBuzz", () => {
    it("should throw an error", () => {
      const type = [false, true, "", null, undefined, {}, []];
      for (const i of type) {
        expect(() => exercise(i)).to.throw();
      }
    });

    it("should return fizzBuzz", () => {
      const result = exercise(15);
      expect(result).to.equal("FizzBuzz");
    });

    it("should return Fizz", () => {
      const result = exercise(3);
      expect(result).to.equal("Fizz");
    });

    it("should return fizzBuzz", () => {
      const result = exercise(5);
      expect(result).to.equal("Buzz");
    });

    it("should return fizzBuzz", () => {
      const result = exercise(1);
      expect(result).to.equal(1);
    });
  });
};
