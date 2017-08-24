"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "transyl",
              			"path": "transyl/transyl.js",
              			"file": "transyl.js",
              			"module": "transyl",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/transyl.git",
              			"test": "transyl-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Compare symbols if similar.
              
              		Take note that multiple comparison evaluate to AND condition.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"mtch": "mtch",
              			"plough": "plough",
              			"protype": "protype",
              			"shft": "shft",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var mtch = require("mtch");
var plough = require("plough");
var protype = require("protype");
var shft = require("shft");
var wichevr = require("wichevr");

var SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

var transyl = function transyl(symbol, target) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"symbol:required": "symbol"
                                                			"target:required": [
                                                				"number",
                                                				"string",
                                                				"symbol",
                                                				"..."
                                                			],
                                                		}
                                                	@end-meta-configuration
                                                */

	if (falzy(symbol) || (typeof symbol === "undefined" ? "undefined" : (0, _typeof3.default)(symbol)) != "symbol") {
		throw new Error("invalid symbol");
	}

	target = plough(shft(arguments)).
	filter(function (symbol) {return protype(symbol, NUMBER, STRING, SYMBOL);}).
	map(function (symbol) {return symbol.toString();}).
	map(function (symbol) {return wichevr(mtch(symbol, SYMBOL_PATTERN, 1), symbol);});

	symbol = mtch(symbol.toString(), SYMBOL_PATTERN, 1);

	return target.every(function (target) {return target == symbol;});
};

module.exports = transyl;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zeWwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJtdGNoIiwicGxvdWdoIiwicHJvdHlwZSIsInNoZnQiLCJ3aWNoZXZyIiwiU1lNQk9MX1BBVFRFUk4iLCJ0cmFuc3lsIiwic3ltYm9sIiwidGFyZ2V0IiwiRXJyb3IiLCJhcmd1bWVudHMiLCJmaWx0ZXIiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJtYXAiLCJ0b1N0cmluZyIsImV2ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1LLFVBQVVMLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNTSxpQkFBaUIsbUJBQXZCOztBQUVBLElBQU1DLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ2pEOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUlWLE1BQU9TLE1BQVAsS0FBbUIsUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUF4QyxFQUFrRDtBQUNqRCxRQUFNLElBQUlFLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRURELFVBQVNQLE9BQVFFLEtBQU1PLFNBQU4sQ0FBUjtBQUNQQyxPQURPLENBQ0MsVUFBRUosTUFBRixVQUFjTCxRQUFTSyxNQUFULEVBQWlCSyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLE1BQWpDLENBQWQsRUFERDtBQUVQQyxJQUZPLENBRUYsVUFBRVIsTUFBRixVQUFjQSxPQUFPUyxRQUFQLEVBQWQsRUFGRTtBQUdQRCxJQUhPLENBR0YsVUFBRVIsTUFBRixVQUFjSCxRQUFTSixLQUFNTyxNQUFOLEVBQWNGLGNBQWQsRUFBOEIsQ0FBOUIsQ0FBVCxFQUE0Q0UsTUFBNUMsQ0FBZCxFQUhFLENBQVQ7O0FBS0FBLFVBQVNQLEtBQU1PLE9BQU9TLFFBQVAsRUFBTixFQUEwQlgsY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBVDs7QUFFQSxRQUFPRyxPQUFPUyxLQUFQLENBQWMsVUFBRVQsTUFBRixVQUFnQkEsVUFBVUQsTUFBMUIsRUFBZCxDQUFQO0FBQ0EsQ0EzQkQ7O0FBNkJBVyxPQUFPQyxPQUFQLEdBQWlCYixPQUFqQiIsImZpbGUiOiJ0cmFuc3lsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInRyYW5zeWxcIixcblx0XHRcdFwicGF0aFwiOiBcInRyYW5zeWwvdHJhbnN5bC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidHJhbnN5bC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0cmFuc3lsXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy90cmFuc3lsLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwidHJhbnN5bC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENvbXBhcmUgc3ltYm9scyBpZiBzaW1pbGFyLlxuXG5cdFx0VGFrZSBub3RlIHRoYXQgbXVsdGlwbGUgY29tcGFyaXNvbiBldmFsdWF0ZSB0byBBTkQgY29uZGl0aW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcIm10Y2hcIjogXCJtdGNoXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBtdGNoID0gcmVxdWlyZSggXCJtdGNoXCIgKTtcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcblxuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKz8pXFwpJC87XG5cbmNvbnN0IHRyYW5zeWwgPSBmdW5jdGlvbiB0cmFuc3lsKCBzeW1ib2wsIHRhcmdldCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInN5bWJvbDpyZXF1aXJlZFwiOiBcInN5bWJvbFwiXG5cdFx0XHRcdFwidGFyZ2V0OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm51bWJlclwiLFxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJzeW1ib2xcIixcblx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdF0sXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIHN5bWJvbCApIHx8IHR5cGVvZiBzeW1ib2wgIT0gXCJzeW1ib2xcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHN5bWJvbFwiICk7XG5cdH1cblxuXHR0YXJnZXQgPSBwbG91Z2goIHNoZnQoIGFyZ3VtZW50cyApIClcblx0XHQuZmlsdGVyKCAoIHN5bWJvbCApID0+IHByb3R5cGUoIHN5bWJvbCwgTlVNQkVSLCBTVFJJTkcsIFNZTUJPTCApIClcblx0XHQubWFwKCAoIHN5bWJvbCApID0+IHN5bWJvbC50b1N0cmluZyggKSApXG5cdFx0Lm1hcCggKCBzeW1ib2wgKSA9PiB3aWNoZXZyKCBtdGNoKCBzeW1ib2wsIFNZTUJPTF9QQVRURVJOLCAxICksIHN5bWJvbCApICk7XG5cblx0c3ltYm9sID0gbXRjaCggc3ltYm9sLnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApO1xuXG5cdHJldHVybiB0YXJnZXQuZXZlcnkoICggdGFyZ2V0ICkgPT4gKCB0YXJnZXQgPT0gc3ltYm9sICkgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnN5bDtcbiJdfQ==
//# sourceMappingURL=transyl.support.js.map
