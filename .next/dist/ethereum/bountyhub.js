'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _BountyHub = require('./build/BountyHub.json');

var _BountyHub2 = _interopRequireDefault(_BountyHub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  console.log(_BountyHub2.default.interface, address);
  return new _web2.default.eth.Contract(JSON.parse(_BountyHub2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2JvdW50eWh1Yi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQm91bnR5SHViIiwiY29uc29sZSIsImxvZyIsImludGVyZmFjZSIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXNCLEFBQXRCLEFBRUE7Ozs7OztrQkFBZSxtQkFBVyxBQUN4QjtVQUFRLEFBQVIsSUFBWSxvQkFBVSxBQUF0QixXQUFpQyxBQUFqQyxBQUNBO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLG9CQUFVLEFBQXJCLEFBQXRCLFlBQXVELEFBQXZELEFBQVAsQUFDRDtBQUhEIiwiZmlsZSI6ImJvdW50eWh1Yi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWljaGFlbHNpY2lsaWFuby9EZXNrdG9wL0ltbWVyc2l2ZS9TdGFja2F0aG9uL0h1bnRlci1TZWVrZXIifQ==