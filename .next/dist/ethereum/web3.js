'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _typeof2 = require('babel-runtime/helpers/typeof')

var _typeof3 = _interopRequireDefault(_typeof2)

var _web = require('web3')

var _web2 = _interopRequireDefault(_web)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

var web3 = void 0

if (typeof window !== 'undefined' && (0, _typeof3.default)(window.ethereum)) {
  //We are on browser with metamask
  window.ethereum.enable()
  web3 = new _web2.default(window.ethereum)
} else {
  //Off browser or no metamask
  var provider = new _web2.default.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/3182ffd698d445f99f64ad1dd9679627'
  )
  web3 = new _web2.default(provider)
}

exports.default = web3
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIscUNBQXdDLE9BQU8sQUFBL0MsQUFBSixXQUE2RCxBQUMzRDtBQUNBO1NBQU8sQUFBUCxTQUFnQixBQUFoQixBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBaEIsQUFBUCxBQUNEO0FBSkQsT0FJTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDZixBQURlLEFBQWpCLEFBR0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0Q7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWNoYWVsc2ljaWxpYW5vL0Rlc2t0b3AvSW1tZXJzaXZlL1N0YWNrYXRob24vSHVudGVyLVNlZWtlciJ9
