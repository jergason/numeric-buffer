(function () {
  "use strict";

  var numeric_buffer = require('numeric-buffer');

  describe('numeric-buffer', function () {
    it('takes an integer and returns a buffer with the bytes of that integer', function () {
      var buf = new Buffer(1);
      buf[0] = 0xff;
      expect(numeric_buffer(255)).toEqualBuffer(buf);

      buf = new Buffer(4);
      buf[0] = 0x00;
      buf[1] = 0x00;
      buf[2] = 0x00;
      buf[3] = 0x80;
      expect(numeric_buffer(2147483648)).toEqualBuffer(buf);
    });

    it('takes a float, turns it in to an integer and then returns a buffer with those bytes', function () {
    });
  });
}());
