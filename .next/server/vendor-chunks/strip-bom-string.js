"use strict";
exports.id = "vendor-chunks/strip-bom-string";
exports.ids = ["vendor-chunks/strip-bom-string"];
exports.modules = {

/***/ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/strip-bom-string/index.js":
/*!**************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/strip-bom-string/index.js ***!
  \**************************************************************************************/
/***/ ((module) => {

/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function(str) {
  if (typeof str === 'string' && str.charAt(0) === '\ufeff') {
    return str.slice(1);
  }
  return str;
};


/***/ })

};
;