var assert = require("assert");
var btoa = require(".");

it("btoa", function() {
  assert.equal(btoa("Hello, World!"), "SGVsbG8sIFdvcmxkIQ==");
});
