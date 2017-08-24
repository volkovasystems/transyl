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
*/

const assert = require( "should" );

//: @server:
const transyl = require( "./transyl.js" );
//: @end-server

//: @client:
const transyl = require( "./transyl.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "transyl", ( ) => {

	describe( "`transyl( Symbol( 'hello' ), Symbol( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let symbol = Symbol( "hello" );
			assert.equal( transyl( symbol, Symbol( "hello" ) ), true );

		} );
	} );

	describe( "`transyl( Symbol( 'hello' ), 'hello', Symbol( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let symbol = Symbol( "hello" );
			assert.equal( transyl( symbol, "hello", Symbol( "hello" ) ), true );

		} );
	} );

	describe( "`transyl( Symbol( 'hello' ), Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let symbol = Symbol( "hello" );
			assert.equal( transyl( symbol, Symbol.for( "hello" ) ), true );

		} );
	} );

	describe( "`transyl( Symbol( 'hello' ), Symbol.for( 'hi' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let symbol = Symbol( "hello" );
			assert.equal( transyl( symbol, Symbol.for( "hi" ) ), false );

		} );
	} );

} );

//: @end-server

//: @client:



//: @end-client

//: @bridge:

describe( "transyl", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`transyl( Symbol( 'hello' ), Symbol( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let symbol = Symbol( "hello" );
					return transyl( symbol, Symbol( "hello" ) );
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

	describe( "`transyl( Symbol( 'hello' ), 'hello', Symbol( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let symbol = Symbol( "hello" );
					return transyl( symbol, "hello", Symbol( "hello" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`transyl( Symbol( 'hello' ), Symbol.for( 'hello' ) )`", ( ) => {
		it( "should be equal to true", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let symbol = Symbol( "hello" );
					return transyl( symbol, Symbol.for( "hello" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`transyl( Symbol( 'hello' ), Symbol.for( 'hi' ) )`", ( ) => {
		it( "should be equal to false", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let symbol = Symbol( "hello" );
					return transyl( symbol, Symbol.for( "hi" ) );
				}

			).value;
			//: @end-ignore
			assert.equal( result, false );

		} );
	} );

} );

//: @end-bridge
