'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _bountyhub = require('../../ethereum/bountyhub');

var _bountyhub2 = _interopRequireDefault(_bountyhub);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/client/components/FundForm.js';


var FundForm = function (_Component) {
	(0, _inherits3.default)(FundForm, _Component);

	function FundForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, FundForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FundForm.__proto__ || (0, _getPrototypeOf2.default)(FundForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var bountyHub, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								bountyHub = (0, _bountyhub2.default)(_this.props.address);

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return bountyHub.methods.fundHub().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 9:

								_routes.Router.replaceRoute('/bountyhubs/' + _this.props.address);
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:

								_this.setState({ loading: false, value: '' });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(FundForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, 'Amount'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Deposit'));
		}
	}]);

	return FundForm;
}(_react.Component);

exports.default = FundForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0Z1bmRGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkJvdW50eUh1YiIsIndlYjMiLCJSb3V0ZXIiLCJGdW5kRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYm91bnR5SHViIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImZ1bmRIdWIiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs4TSxBQUNMO1VBQVEsQUFDQSxBQUNQO2lCQUZPLEFBRU8sQUFDZDtZQUhPLEEsQUFHRTtBQUhGLEFBQ1AsV0FLRCxBO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDttQkFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRUE7O0FBSEksb0JBR1EseUJBQVUsTUFBQSxBQUFLLE1BSHZCLEFBR1EsQUFBcUIsQUFFdkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FMckIsQUFLVixBQUFjLEFBQStCOzt3QkFMbkM7d0JBQUE7ZUFRYyxjQUFBLEFBQUssSUFSbkIsQUFRYyxBQUFTOztZQUExQjtBQVJHLDRCQUFBO3dCQUFBO3lCQVNILEFBQVUsUUFBVixBQUFrQixVQUFsQixBQUE0QjtlQUMzQixTQURnQyxBQUNoQyxBQUFTLEFBQ2Y7Z0JBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVgzQixBQVNILEFBQWlDLEFBRS9CLEFBQW1DO0FBRkosQUFDdEMsU0FESzs7WUFLTjs7dUJBQUEsQUFBTyw4QkFBNEIsTUFBQSxBQUFLLE1BZC9CLEFBY1QsQUFBOEM7d0JBZHJDO0FBQUE7O1lBQUE7d0JBQUE7d0NBZ0JUOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFoQnJCLEFBZ0JULEFBQWMsQUFBb0I7O1lBR25DOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BbkJ0QixBQW1CVixBQUFjLEFBQXlCOztZQW5CN0I7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQXNCRjtnQkFDUjs7MEJBQ0MsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSwyQkFBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSxrQkFBQSxBQUFDLE9BQUQ7WUFBVyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXhDLEFBQVcsQUFBYyxBQUFzQjtBQUYxRCxBQUdDO1dBSEQsQUFHTyxBQUNOO21CQUpELEFBSWU7O2VBSmY7aUJBSEYsQUFDQyxBQUVDLEFBUUQ7QUFSQztBQUNDLHdCQU9GLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtlQUFsRDtpQkFYRCxBQVdDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBQUE7QUFBQTtNQWJGLEFBQ0MsQUFZQyxBQUtGOzs7OztBQWhEcUIsQSxBQW1EdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRnVuZEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pY2hhZWxzaWNpbGlhbm8vRGVza3RvcC9JbW1lcnNpdmUvU3RhY2thdGhvbi9IdW50ZXItU2Vla2VyIn0=