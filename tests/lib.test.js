const lib = require("../lib");

module.exports = function (expect) {
  describe("absolute", () => {
    it("Should return a positive number", () => {
      const result = lib.absolute(1);
      expect(result).to.equal(1);
    });

    it("should return a positive number", () => {
      const result = lib.absolute(-1);
      expect(result).to.equal(1);
    });
  });

  describe("get product", () => {
    it("should return a product object", () => {
      const result = lib.getProduct(1);
      expect(result).to.have.property("id");
    });
  });

  describe("check that it", () => {
    it("should return an exception", () => {
      const types = [null, undefined, NaN, "", 0, false];
      for (const ex of types) {
        expect(() => lib.registerUser(ex)).to.throw();
      }
    });

    it("should return a user object", () => {
      const result = lib.registerUser("Valentine");
      expect(result).to.have.property("username").to.equal("Valentine");
    });
  });

  describe("deep", () => {
    it("Should deeply compare 2 objects", () => {
      const obj = { a: 1, b: 2 };
      obj.c = 3;
      expect(obj).to.include({ a: 1 });
    });
  });

  describe("array", () => {
    it("should be empty", () => {
      expect([]).to.be.an("array").that.is.empty;
    });
  });

  describe("eql", () => {
    it("should be eql", () => {
      expect({ a: 2 }).to.eql({ a: 2 });
    });
  });

  describe("above", () => {
    it("should be above (not recommended)", () => {
      expect(3).to.be.gt(2);
    });
  });

  describe("above", () => {
    it("testing", () => {
      expect([1]).to.be.an("array").with.length(1);
    });
  });

  describe("instance", () => {
    it("be an instance of", () => {
      expect({ a: 1 }).to.be.an.instanceof(Object).that.has.property("a", 1);
    });
  });

  describe("match", () => {
    it("should match", () => {
      expect("goal").to.have.string("o");
    });
  });

  describe("throw", () => {
    it("should throw an error", () => {
      const obj = lib.registerUser(null);

      expect(() => obj).to.throw();
    });
  });
};
