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
				"Vinse Vinalon"
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
*/

const falzy = require( "falzy" );
const mtch = require( "mtch" );
const plough = require( "plough" );
const protype = require( "protype" );
const shft = require( "shft" );
const wichevr = require( "wichevr" );

const SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

const transyl = function transyl( symbol, target ){
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

	if( falzy( symbol ) || !protype( symbol, SYMBOL ) ){
		throw new Error( "invalid symbol" );
	}

	target = plough( shft( arguments ) )
		.filter( ( symbol ) => protype( symbol, NUMBER, STRING, SYMBOL ) )
		.map( ( symbol ) => symbol.toString( ) )
		.map( ( symbol ) => wichevr( mtch( symbol, SYMBOL_PATTERN, 1 ), symbol ) );

	symbol = mtch( symbol.toString( ), SYMBOL_PATTERN, 1 );

	return target.every( ( target ) => ( target == symbol ) );
};

module.exports = transyl;
