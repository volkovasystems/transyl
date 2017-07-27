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

//# sourceMappingURL=transyl.support.js.map