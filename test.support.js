"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "transyl",
              			"path": "transyl/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/transyl.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"transyl": "transyl"
              		}
              	@end-include
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var transyl = require("./transyl.support.js");
//: @end-client





//: @client:

describe("transyl", function () {

	describe("`transyl( symbol, Symbol( 'hello' ) )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
			var symbol = (0, _symbol2.default)("hello");
			assert.equal(transyl(symbol, (0, _symbol2.default)("hello")), true);
			//: @end-ignore
		});
	});

	describe("`transyl( symbol, 'hello', Symbol( 'hello' ) )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
			var symbol = (0, _symbol2.default)("hello");
			assert.equal(transyl(symbol, "hello", (0, _symbol2.default)("hello")), true);
			//: @end-ignore
		});
	});

	describe("`transyl( symbol, Symbol.for( 'hello' ) )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
			var symbol = (0, _symbol2.default)("hello");
			assert.equal(transyl(symbol, (0, _for2.default)("hello")), true);
			//: @end-ignore
		});
	});

	describe("`transyl( symbol, Symbol.for( 'hi' ) )`", function () {
		it("should be equal to false", function () {
			//: @ignore:
			var symbol = (0, _symbol2.default)("hello");
			//: @end-ignore
			assert.equal(transyl(symbol, (0, _for2.default)("hi")), false);

		});
	});
});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidHJhbnN5bCIsImRlc2NyaWJlIiwiaXQiLCJzeW1ib2wiLCJlcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFVBQVVELFFBQVMsc0JBQVQsQ0FBaEI7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsU0FBVixFQUFxQixZQUFPOztBQUUzQkEsVUFBVSx3Q0FBVixFQUFvRCxZQUFPO0FBQzFEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDQSxPQUFJQyxTQUFTLHNCQUFRLE9BQVIsQ0FBYjtBQUNBTCxVQUFPTSxLQUFQLENBQWNKLFFBQVNHLE1BQVQsRUFBaUIsc0JBQVEsT0FBUixDQUFqQixDQUFkLEVBQW9ELElBQXBEO0FBQ0E7QUFDQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUYsVUFBVSxpREFBVixFQUE2RCxZQUFPO0FBQ25FQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDQSxPQUFJQyxTQUFTLHNCQUFRLE9BQVIsQ0FBYjtBQUNBTCxVQUFPTSxLQUFQLENBQWNKLFFBQVNHLE1BQVQsRUFBaUIsT0FBakIsRUFBMEIsc0JBQVEsT0FBUixDQUExQixDQUFkLEVBQTZELElBQTdEO0FBQ0E7QUFDQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUYsVUFBVSw0Q0FBVixFQUF3RCxZQUFPO0FBQzlEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDQSxPQUFJQyxTQUFTLHNCQUFRLE9BQVIsQ0FBYjtBQUNBTCxVQUFPTSxLQUFQLENBQWNKLFFBQVNHLE1BQVQsRUFBaUIsbUJBQVksT0FBWixDQUFqQixDQUFkLEVBQXdELElBQXhEO0FBQ0E7QUFDQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUYsVUFBVSx5Q0FBVixFQUFxRCxZQUFPO0FBQzNEQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEM7QUFDQSxPQUFJQyxTQUFTLHNCQUFRLE9BQVIsQ0FBYjtBQUNBO0FBQ0FMLFVBQU9NLEtBQVAsQ0FBY0osUUFBU0csTUFBVCxFQUFpQixtQkFBWSxJQUFaLENBQWpCLENBQWQsRUFBcUQsS0FBckQ7O0FBRUEsR0FORDtBQU9BLEVBUkQ7QUFTQSxDQXRDRDs7QUF3Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInRyYW5zeWxcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwidHJhbnN5bC90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdHJhbnN5bC5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcInRyYW5zeWxcIjogXCJ0cmFuc3lsXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IHRyYW5zeWwgPSByZXF1aXJlKCBcIi4vdHJhbnN5bC5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcblxyXG5kZXNjcmliZSggXCJ0cmFuc3lsXCIsICggKSA9PiB7XHJcblxyXG5cdGRlc2NyaWJlKCBcImB0cmFuc3lsKCBzeW1ib2wsIFN5bWJvbCggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcclxuXHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJoZWxsb1wiICk7XHJcblx0XHRcdGFzc2VydC5lcXVhbCggdHJhbnN5bCggc3ltYm9sLCBTeW1ib2woIFwiaGVsbG9cIiApICksIHRydWUgKTtcclxuXHRcdFx0Ly86IEBlbmQtaWdub3JlXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgdHJhbnN5bCggc3ltYm9sLCAnaGVsbG8nLCBTeW1ib2woICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0Ly86IEBpZ25vcmU6XHJcblx0XHRcdGxldCBzeW1ib2wgPSBTeW1ib2woIFwiaGVsbG9cIiApO1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRyYW5zeWwoIHN5bWJvbCwgXCJoZWxsb1wiLCBTeW1ib2woIFwiaGVsbG9cIiApICksIHRydWUgKTtcclxuXHRcdFx0Ly86IEBlbmQtaWdub3JlXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgdHJhbnN5bCggc3ltYm9sLCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdC8vOiBAaWdub3JlOlxyXG5cdFx0XHRsZXQgc3ltYm9sID0gU3ltYm9sKCBcImhlbGxvXCIgKTtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0cmFuc3lsKCBzeW1ib2wsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICksIHRydWUgKTtcclxuXHRcdFx0Ly86IEBlbmQtaWdub3JlXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgdHJhbnN5bCggc3ltYm9sLCBTeW1ib2wuZm9yKCAnaGknICkgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcclxuXHRcdFx0bGV0IHN5bWJvbCA9IFN5bWJvbCggXCJoZWxsb1wiICk7XHJcblx0XHRcdC8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRyYW5zeWwoIHN5bWJvbCwgU3ltYm9sLmZvciggXCJoaVwiICkgKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG59ICk7XHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
