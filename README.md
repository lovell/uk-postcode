# commonjs-uk-postcode

CommonJS library for parsing and validating UK postcodes.

## Installation

    git clone git://github.com/lovell/commonjs-uk-postcode.git

## Usage

    var UKPostcode = require('../lib/ukPostcode.js').UKPostcode;
    var postcode = new UKPostcode("M1 1AA");
    if (postcode.isValid()) {
        sys.log(postcode);
    }

## Testing

Unit tests use [node.js](http://nodejs.org/) assertions

    cd commonjs-uk-postcode/test
    node ukPostcode.js

## Licence

This code is distributed under the
[Apache License Version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
