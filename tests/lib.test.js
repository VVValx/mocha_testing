const lib = require("../lib");

module.exports = function (expect) {
  describe("absolute", () => {
    it("Should return a positive number", () => {
      const result = lib.absolute(1);
      expect(result).to.equal(1);
    });
  });

  describe("get product", () => {
    it("should return a product object", () => {
      const result = lib.getProduct(1);
      expect(result).to.have.property("id");
    });
  });
};
