module.exports = (function(DEBUG){
/******************************************************************************/

  /*
   * @method toString
   * native Object.toString method
   * @param variable {any} the object to convert
   * @return native_object {string} returns native object as string ( i.e., [object Array] )
   * @native supported
   */

/*----------------------------------------------------------------------------*/

  var toString = function(v){
    return Object.prototype.toString.call( v );
  };

/******************************************************************************/

  return toString;

/*----------------------------------------------------------------------------*/
}(0));
