/**
 * uk-postcode
 * Unit tests
 * @author Lovell Fuller
 *
 * This code is distributed under the Apache License Version 2.0, the terms of
 * which may be found at http://www.apache.org/licenses/LICENSE-2.0.html
 */

var assert = require('assert');
var ukPostcode = require('../lib/ukPostcode.js');

// Valid complete postcodes
[
  "M1 1AA", "M11AA",
  "M60 1NW", "M601NW",
  "CR2 6XH", "CR26XH",
  "DN55 1PT", "DN551PT",
  "W1A 1HQ", "W1A1HQ",
  "EC1A 1BB", "EC1A1BB",
  "XM4 5HQ", "XM45HQ", // Non-geographic - Father Christmas
  "BX1 1LT", "BX11LT", // Non-geographic - Lloyds Banking Group
  "GIR 0AA", "GIR0AA" // Non-geographic - Santander
].forEach(function(value) {
  var postcode = ukPostcode.fromString(value);
  assert.ok(postcode.isValid(), "Valid postcode " + value + " was invalid");
  assert.ok(postcode.isComplete(), "Complete postcode " + value + " was incomplete");
});

// Valid partial postcodes
[
  "M1",
  "M60",
  "CR2",
  "DN55",
  "W1A",
  "EC1A",
  "BX1"
].forEach(function(value) {
  var postcode = ukPostcode.fromString(value);
  assert.ok(postcode.isValid(), "Valid postcode " + value + " was invalid");
  assert.ok(postcode.isPartial(), "Partial postcode " + value + " was complete");
});

// Invalid postcodes
[
  "", // Empty string
  " ", // Whitespace
  "null", // JavaScript gotcha
  "1234 567", // Numeric
  "ABCD EFG", // Alpha
  "!,$^ +@#", // Punctuation
  "FIQQ 1ZZ", // Falkland Islands
  "AI-2640", // Anguilla
  "BFPO 1234", // British Forces Post Office
  "GIR" // Partial non-geographic - Santander
].forEach(function(value) {
  var postcode = ukPostcode.fromString(value);
  assert.ok(!postcode.isValid(), "Invalid postcode " + value + " was valid");
});
