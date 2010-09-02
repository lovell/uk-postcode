/**
 * Unit tests for commonjs-uk-postcode
 * (C) Lovell Fuller 2010
 *
 * This code is distributed under the Apache License Version 2.0, the terms of
 * which may be found at http://www.apache.org/licenses/LICENSE-2.0.html
 */

var assert = require('assert');
var Postcode = require('../lib/ukPostcode.js').Postcode;

// Valid postcodes
[
    "M1 1AA", "M11AA",
    "M60 1NW", "M601NW",
    "CR2 6XH", "CR26XH",
    "DN55 1PT", "DN551PT",
    "W1A 1HQ", "W1A1HQ",
    "EC1A 1BB", "EC1A1BB",
    "BX1 1LT", "BX11LT", // Non-geographic postcode - Lloyds TSB
    "GIR 0AA", "GIR0AA", // Non-geographic postcode - Santander
].forEach(function(value){
    var postcode = new Postcode(value);
    assert.ok(postcode.isValid(), "Valid postcode " + value + " was deemed invalid")
});

// Invalid postcodes
[
    "", // Empty string
    " ", // Whitespace
    "1234 567", // Numeric
    "ABCD EFG", // Alpha
    "!,$^ +@#", // Punctuation
    "FIQQ 1ZZ", // Falkland Islands
    "AI-2640", // Anguilla
    "BFPO 1234", // British Forces Post Office
].forEach(function(value){
    var postcode = new Postcode(value);
    assert.ok(!postcode.isValid(), "Invalid postcode " + value + " was deemed valid")
});
