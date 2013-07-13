# uk-postcode

<a href="http://www.flickr.com/photos/55935853@N00/3323454315" target="_blank"><img src="https://farm4.staticflickr.com/3661/3323454315_9873aa2c59_t.jpg" title="Blackheath, SE London, photo by Ewan Munro" align="right"></a>

Node.js module for parsing and validating UK postcodes.

## Install

    npm install uk-postcode

## Usage

    var ukPostcode = require("uk-postcode");
    var postcode = ukPostcode.fromString("M11AA");
    if (postcode.isValid()) {
      console.log(postcode);  // "M1 1AA"
	  console.log(postcode.outward); // "M1"
      console.log(postcode.inward);  // "1AA"
    }

## Testing [![Build Status](https://travis-ci.org/lovell/uk-postcode.png?branch=master)](https://travis-ci.org/lovell/uk-postcode)

Run the unit tests with:

    node tests/all

## Licence

Copyright 2013 Lovell Fuller

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0.html)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
