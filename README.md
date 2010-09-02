# commonjs-uk-postcode

CommonJS library for parsing and validating UK postcodes

## Installation

 git clone git://github.com/lovell/commonjs-uk-postcode.git

## Usage

 var Postcode = require('../lib/ukPostcode.js').Postcode;
 var postcode = new Postcode("M1 1AA");
 if (postcode.isValid()) {
   sys.log(postcode)
 }

## Testing

 cd commonjs-uk-postcode/test
 node ukPostcode.js
