(function () {
  "use strict";
  beforeEach(function () {
    this.addMatchers({
      toEqualBuffer: function (buf) {
        if (this.actual.length != buf.length) {
          return false;
        }

        for (var i = 0; i < buf.length; i++) {
          if (this.actual[i] !== buf[i]) {
            return false;
          }
        }
        return true;
      }
    });
  });
}());
