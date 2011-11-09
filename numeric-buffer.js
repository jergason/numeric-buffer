(function () {
  "use strict";

  function NumericBuffer(integer) {
    var lengthInBytes
    , buffer
    , byte
    , counter

    if (typeof integer !== 'number') {
      return false;
    }

    // In case it is a float
    integer = parseInt(integer, 10);

    lengthInBytes = Math.ceil((Math.log(integer) / Math.log(2)) / 8);
    buffer = new Buffer(lengthInBytes);

    for (counter = 0; counter < lengthInBytes; counter++) {
      byte = integer & 255;
      buffer[counter] = byte;
      integer = integer >> 8
    }

    return buffer;
  }

  module.exports = NumericBuffer;
}());
