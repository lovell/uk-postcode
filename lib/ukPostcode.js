/**
 * CommonJS library for parsing and validating UK postcodes
 * (C) Lovell Fuller 2010
 *
 * This code is distributed under the Apache License Version 2.0, the terms of
 * which may be found at http://www.apache.org/licenses/LICENSE-2.0.html
 */

var UKPostcode = exports.UKPostcode = function(postcode) {

    this.outward = null;
    this.inward = null;

    if (postcode != null) {
        this.parse(postcode);
    }
}

/**
 * Parse and populate
 */
UKPostcode.prototype.parse = function(postcode) {
    if (postcode != null && typeof postcode == 'string') {
        var clean = postcode.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (clean.match(/[A-Z]{1,2}[0-9R][0-9A-Z]?[0-9][ABD-HJLNP-UW-Z]{2}/)) {
            this.outward = clean.substring(0, clean.length - 3);
            this.inward = clean.substring(clean.length - 3);
        } else {
            // TODO: partial match on outward only
        }
    }
}

/**
 * Does this postcode have valid outward and inward parts?
 */
UKPostcode.prototype.isValid = function() {
    return (this.outward != null && this.inward != null);
};

/**
 * Does this postcode have a valid outward part only?
 */
UKPostcode.prototype.isPartial = function() {
    return (this.outward != null && this.inward == null);
};

/**
 * Format postcode with/without a space between the outward and inward portions
 */
UKPostcode.prototype.format = function(useSpace) {
    var formatted = '';
    if (this.isValid()) {
        formatted = this.outward;
        if (useSpace) {
            formatted = formatted + ' ';
        }
        formatted = formatted + this.inward;
    }
    return formatted;
};

/**
 * Convert this postcode to a string of the format "AB12 3CD"
 */
UKPostcode.prototype.toString = function() {
    return this.format(true);
};
