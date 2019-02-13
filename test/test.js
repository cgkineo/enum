describe('ENUM', function() {

  var onBrowser = false;
  var ENUM;
  var enumTest;

  before(function() {

    if (typeof window !== 'undefined') {
        onBrowser = true;
        ENUM = window.ENUM;
    } else {
        ENUM = require('../../enum');
        should = require('should');
    }
    enumTest = new ENUM(["A","B","C"]);
  });

  describe('functionality', function() {
    it('values should be correct: { A:1, B:2, C:4 }', function(done) {
      (enumTest.A).should.equal(1);
      (enumTest.B).should.equal(2);
      (enumTest.C).should.equal(4);
      done();
    });
    it('conversation values should be correct: asString, asInteger, asNumber, asLowerCase, asUpperCase', function(done) {
      (enumTest.C.asString).should.equal("C");
      (enumTest.C.asNumber).should.equal(4);
      (enumTest.C.asInteger).should.equal(4);
      (enumTest.C.asLowerCase).should.equal("c");
      (enumTest.C.asUpperCase).should.equal("C");
      done();
    });
    it('conversation functions should be correct: toString(), toNumber(), toLowerCase(), toUpperCase()', function(done) {
      (enumTest.C.toString()).should.equal("C");
      (enumTest.C.toNumber()).should.equal(4);
      (enumTest.C.toInteger()).should.equal(4);
      (enumTest.C.toLowerCase()).should.equal("c");
      (enumTest.C.toUpperCase()).should.equal("C");
      done();
    });
    it('lookup values should be correct', function(done) {
      (enumTest('C') == 4).should.equal(true);
      (enumTest(4) == 4).should.equal(true);
      (enumTest('c') === undefined).should.equal(true);
      (enumTest(enumTest.C) == 4).should.equal(true);
      done();
    });
  });
});
