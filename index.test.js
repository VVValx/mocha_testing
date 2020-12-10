const chai = require("chai");
const expect = chai.expect;

chai.config.includeStack = false; //false is default (optional)

require("./tests/exercise1.test")(expect); //exercise1 testing
require("./tests/lib.test")(expect); //lib testing
