
const assert = require( "assert" );
const transyl = require( "./transyl.js" );

let symbol = Symbol( "hello" );

assert.equal( transyl( symbol, Symbol( "hello" ) ), true, "should be equal" );

assert.equal( transyl( symbol, "hello", Symbol( "hello" ) ), true, "should be equal" );

assert.equal( transyl( symbol, Symbol.for( "hello" ) ), true, "should be equal" );

assert.equal( transyl( symbol, Symbol.for( "hi" ) ), false, "should be equal" );

console.log( "ok" );
