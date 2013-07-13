/**
 * uk-postcode
 * Parse and validate UK postcodes
 * @author Lovell Fuller
 *
 * This code is distributed under the Apache License Version 2.0, the terms of
 * which may be found at http://www.apache.org/licenses/LICENSE-2.0.html
 */

/**
 * Postcode object
 */
var Postcode = function() {
  this.outward = null;
  this.inward = null;
};

/**
 * Does this postcode have valid outward part?
 */
Postcode.prototype.isValid = function() {
  return this.outward !== null;
};

/**
 * Does this postcode have valid outward and inward parts?
 */
Postcode.prototype.isComplete = function() {
  return this.outward !== null && this.inward !== null;
};

/**
 * Does this postcode have a valid outward and no inward part?
 */
Postcode.prototype.isPartial = function() {
  return this.outward !== null && this.inward === null;
};

/**
 * Format postcode with/without a space between the outward and inward portions
 */
Postcode.prototype.toString = function() {
  var formatted = "";
  if (this.isValid()) {
    formatted = this.outward;
    if (this.isComplete()) {
      formatted = formatted + " " + this.inward;
    }
  }
  return formatted;
};

/**
 * Export factory method
 */
exports.fromString = function(postcodeAsString) {
  var postcode = new Postcode();
  if (typeof postcodeAsString === "string") {
    var clean = postcodeAsString.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (clean.match(/^[A-Z]{1,2}[0-9R][0-9A-Z]?[0-9][ABD-HJLNP-UW-Z]{2}$/)) {
      postcode.outward = clean.substring(0, clean.length - 3);
      postcode.inward = clean.substring(clean.length - 3);
    } else if (clean.match(/^[A-Z]{1,2}[0-9][0-9A-Z]?$/)) {
      postcode.outward = clean;
    }
  }
  return postcode;
};
