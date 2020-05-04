module.exports = (function(DEBUG){
/*----------------------------------------------------------------------------*/

  var toString = require('./index'),
         debug = require('dsb-debug-mini').create('to-string');

/******************************************************************************/

  debug.test( 'toString', toString({}), '[object Object]' );
  debug.test( 'array', toString([]), '[object Array]' );
  debug.test( 'string', toString('string'), '[object String]' );

/*----------------------------------------------------------------------------*

  debug( 'toString', toString, {}, '[object Object]', true );
  debug( 'array', toString, [], '[object Array]', true );
  debug( 'string', toString, 'string', '[object String]', true );

/*----------------------------------------------------------------------------*/

  debug.complete(); //make it where complete returns a debug.results object

/******************************************************************************/

  return debug;

/*----------------------------------------------------------------------------*/
}(0));
