const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe("nameInverter", function() {
  it('pass empty string is string is empty', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it("return single name when passed single name", function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return single name with no spaces when extra spaces", function() {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return a last-name, first-name when passed first and last name", function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return empty string when passed single honorfic", function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return honorfic first-name if passed honorfic first-name", function() {
    const inputName = "Dr. First";
    const expectedOutput = "Dr. First";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return honorfic last-name, first-name when passed honorfic first-name, last-name", function() {
    const inputName = "Dr. first last";
    const expectedOutput = "Dr. last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("return honorific last-name, first-name when passed honorfic first-name last-name wih extra splaces around the words", function() {
    const inputName = " Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it("throw an error if name is undefined", function() {
    assert.equal(nameInverter(undefined), "Error");
  });
});