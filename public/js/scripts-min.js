"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var button=document.getElementById("toggle"),checkbox=document.getElementById("checkbox"),prices=document.querySelectorAll(".card .card__price"),monthly=_toConsumableArray(document.querySelectorAll(".card .card__price")).map((function(r){return r.textContent})),annually=["199.99","249.99","399.99"];button.addEventListener("click",(function(r){prices.forEach((function(r,e){return checkbox.checked?r.textContent=annually[e]:r.textContent=monthly[e]}))}));