# commonjs-uk-postcode

CommonJS library for parsing and validating UK postcodes

## Installation

    git clone git://github.com/lovell/commonjs-uk-postcode.git

## Usage

    var UKPostcode = require('/path/to/lib/ukPostcode').UKPostcode;
    var postcode = new UKPostcode("M1 1AA");
    if (postcode.isValid()) {
        console.log(postcode);
    }

## Testing

Unit tests use [CommonJS assertions](http://wiki.commonjs.org/wiki/Unit_Testing/1.0)

    node test/ukPostcode.js

## Licence

This code is distributed under the
[Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
