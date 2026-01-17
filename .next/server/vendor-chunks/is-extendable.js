"use strict";
exports.id = "vendor-chunks/is-extendable";
exports.ids = ["vendor-chunks/is-extendable"];
exports.modules = {

/***/ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/is-extendable/index.js":
/*!***********************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/is-extendable/index.js ***!
  \***********************************************************************************/
/***/ ((module) => {

/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isExtendable(val) {
  return typeof val !== 'undefined' && val !== null
    && (typeof val === 'object' || typeof val === 'function');
};


/***/ })

};
;