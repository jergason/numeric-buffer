#NumericBuffer

`numeric-buffer` is a tiny module for filling a Node.js Buffer with the
binary representation of an integer. You can do this in 0.6.0 with
[`buffer.writeUInt8`](http://nodejs.org/docs/v0.6.0/api/buffers.html#buffer.writeUInt8),
but not in 0.4.x.

##Installation

`npm install numeric-buffer`

##Usage

    (function () {
      "use strict";
      var numericBuffer = require('numeric-buffer');
      var buf = numericBuffer(255);
      // buf is now a Buffer of length 1
      console.log(buf[0]);
      //255
    }());
