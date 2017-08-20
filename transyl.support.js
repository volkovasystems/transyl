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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zeWwuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJtdGNoIiwicGxvdWdoIiwicHJvdHlwZSIsInNoZnQiLCJ3aWNoZXZyIiwiU1lNQk9MX1BBVFRFUk4iLCJ0cmFuc3lsIiwic3ltYm9sIiwidGFyZ2V0IiwiRXJyb3IiLCJhcmd1bWVudHMiLCJmaWx0ZXIiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJtYXAiLCJ0b1N0cmluZyIsImV2ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNSSxPQUFPSixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1LLFVBQVVMLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNTSxpQkFBaUIsbUJBQXZCOztBQUVBLElBQU1DLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQ2pEOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUlWLE1BQU9TLE1BQVAsS0FBbUIsUUFBT0EsTUFBUCx1REFBT0EsTUFBUCxNQUFpQixRQUF4QyxFQUFrRDtBQUNqRCxRQUFNLElBQUlFLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRURELFVBQVNQLE9BQVFFLEtBQU1PLFNBQU4sQ0FBUjtBQUNQQyxPQURPLENBQ0MsVUFBRUosTUFBRixVQUFjTCxRQUFTSyxNQUFULEVBQWlCSyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLE1BQWpDLENBQWQsRUFERDtBQUVQQyxJQUZPLENBRUYsVUFBRVIsTUFBRixVQUFjQSxPQUFPUyxRQUFQLEVBQWQsRUFGRTtBQUdQRCxJQUhPLENBR0YsVUFBRVIsTUFBRixVQUFjSCxRQUFTSixLQUFNTyxNQUFOLEVBQWNGLGNBQWQsRUFBOEIsQ0FBOUIsQ0FBVCxFQUE0Q0UsTUFBNUMsQ0FBZCxFQUhFLENBQVQ7O0FBS0FBLFVBQVNQLEtBQU1PLE9BQU9TLFFBQVAsRUFBTixFQUEwQlgsY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBVDs7QUFFQSxRQUFPRyxPQUFPUyxLQUFQLENBQWMsVUFBRVQsTUFBRixVQUFnQkEsVUFBVUQsTUFBMUIsRUFBZCxDQUFQO0FBQ0EsQ0EzQkQ7O0FBNkJBVyxPQUFPQyxPQUFQLEdBQWlCYixPQUFqQiIsImZpbGUiOiJ0cmFuc3lsLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwidHJhbnN5bFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ0cmFuc3lsL3RyYW5zeWwuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidHJhbnN5bC5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRyYW5zeWxcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdHJhbnN5bC5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwidHJhbnN5bC10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENvbXBhcmUgc3ltYm9scyBpZiBzaW1pbGFyLlxyXG5cclxuXHRcdFRha2Ugbm90ZSB0aGF0IG11bHRpcGxlIGNvbXBhcmlzb24gZXZhbHVhdGUgdG8gQU5EIGNvbmRpdGlvbi5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJtdGNoXCI6IFwibXRjaFwiLFxyXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXHJcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBtdGNoID0gcmVxdWlyZSggXCJtdGNoXCIgKTtcclxuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XHJcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xyXG5cclxuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKz8pXFwpJC87XHJcblxyXG5jb25zdCB0cmFuc3lsID0gZnVuY3Rpb24gdHJhbnN5bCggc3ltYm9sLCB0YXJnZXQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInN5bWJvbDpyZXF1aXJlZFwiOiBcInN5bWJvbFwiXHJcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJudW1iZXJcIixcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcInN5bWJvbFwiLFxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBzeW1ib2wgKSB8fCB0eXBlb2Ygc3ltYm9sICE9IFwic3ltYm9sXCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHN5bWJvbFwiICk7XHJcblx0fVxyXG5cclxuXHR0YXJnZXQgPSBwbG91Z2goIHNoZnQoIGFyZ3VtZW50cyApIClcclxuXHRcdC5maWx0ZXIoICggc3ltYm9sICkgPT4gcHJvdHlwZSggc3ltYm9sLCBOVU1CRVIsIFNUUklORywgU1lNQk9MICkgKVxyXG5cdFx0Lm1hcCggKCBzeW1ib2wgKSA9PiBzeW1ib2wudG9TdHJpbmcoICkgKVxyXG5cdFx0Lm1hcCggKCBzeW1ib2wgKSA9PiB3aWNoZXZyKCBtdGNoKCBzeW1ib2wsIFNZTUJPTF9QQVRURVJOLCAxICksIHN5bWJvbCApICk7XHJcblxyXG5cdHN5bWJvbCA9IG10Y2goIHN5bWJvbC50b1N0cmluZyggKSwgU1lNQk9MX1BBVFRFUk4sIDEgKTtcclxuXHJcblx0cmV0dXJuIHRhcmdldC5ldmVyeSggKCB0YXJnZXQgKSA9PiAoIHRhcmdldCA9PSBzeW1ib2wgKSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0cmFuc3lsO1xyXG4iXX0=
//# sourceMappingURL=transyl.support.js.map
