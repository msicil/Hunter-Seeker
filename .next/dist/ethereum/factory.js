'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _web = require('./web3')

var _web2 = _interopRequireDefault(_web)

var _BountyHubFactory = require('./build/BountyHubFactory.json')

var _BountyHubFactory2 = _interopRequireDefault(_BountyHubFactory)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

var instance = new _web2.default.eth.Contract(
  JSON.parse(_BountyHubFactory2.default.interface),
  '0xDD07b36D8a416013582Ef3a1276AB3f999Aec195'
)

exports.default = instance
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkJvdW50eUh1YkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNkIsQUFBN0I7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVywyQkFBaUIsQUFBNUIsQUFEZSxZQUVmLEFBRmUsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9taWNoYWVsc2ljaWxpYW5vL0Rlc2t0b3AvSW1tZXJzaXZlL1N0YWNrYXRob24vSHVudGVyLVNlZWtlciJ9
