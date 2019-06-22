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

var _jsxFileName = '/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/client/components/HuntForm.js';


var HuntForm = function (_Component) {
	(0, _inherits3.default)(HuntForm, _Component);

	function HuntForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, HuntForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HuntForm.__proto__ || (0, _getPrototypeOf2.default)(HuntForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			secret: '',
			reward: '',
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
								return bountyHub.methods.createHunt(_this.state.secret, _this.state.reward).send({
									from: accounts[0]
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

								_this.setState({ loading: false, secret: '', reward: '' });

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

	(0, _createClass3.default)(HuntForm, [{
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
			}, 'Hunt Secret'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.secret,
				onChange: function onChange(event) {
					return _this3.setState({ secret: event.target.secret });
				},
				label: 'address',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, 'Reward'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.reward,
				onChange: function onChange(event) {
					return _this3.setState({ reward: event.target.reward });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Create'));
		}
	}]);

	return HuntForm;
}(_react.Component);

exports.default = HuntForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0h1bnRGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkJvdW50eUh1YiIsIndlYjMiLCJSb3V0ZXIiLCJIdW50Rm9ybSIsInN0YXRlIiwic2VjcmV0IiwicmV3YXJkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJvdW50eUh1YiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVIdW50Iiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs4TSxBQUNMO1dBQVEsQUFDQyxBQUNSO1dBRk8sQUFFQyxBQUNSO2lCQUhPLEFBR08sQUFDZDtZQUpPLEFBSUUsQTtBQUpGLEFBQ1AsVyxBQU1EO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDttQkFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRUE7O0FBSEksb0JBR1EseUJBQVUsTUFBQSxBQUFLLE1BSHZCLEFBR1EsQUFBcUIsQUFFdkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FMckIsQUFLVixBQUFjLEFBQStCOzt3QkFMbkM7d0JBQUE7ZUFRYyxjQUFBLEFBQUssSUFSbkIsQUFRYyxBQUFTOztZQUExQjtBQVJHLDRCQUFBO3dCQUFBO3lCQVNILEFBQVUsUUFBVixBQUFrQixXQUFXLE1BQUEsQUFBSyxNQUFsQyxBQUF3QyxRQUFRLE1BQUEsQUFBSyxNQUFyRCxBQUEyRCxRQUEzRCxBQUFtRTtlQUNsRSxTQVZFLEFBU0gsQUFBd0UsQUFDdkUsQUFBUztBQUQ4RCxBQUM3RSxTQURLOztZQUlOOzt1QkFBQSxBQUFPLDhCQUE0QixNQUFBLEFBQUssTUFiL0IsQUFhVCxBQUE4Qzt3QkFickM7QUFBQTs7WUFBQTt3QkFBQTt3Q0FlVDs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBZnJCLEFBZVQsQUFBYyxBQUFvQjs7WUFHbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sUUFBbEIsQUFBMEIsSUFBSSxRQWxCbEMsQUFrQlYsQUFBYyxBQUFzQzs7WUFsQjFDO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkFxQkY7Z0JBQ1I7OzBCQUNDLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsZ0NBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUsa0JBQUEsQUFBQyxPQUFEO1lBQVcsT0FBQSxBQUFLLFNBQVMsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUF6QyxBQUFXLEFBQWMsQUFBdUI7QUFGM0QsQUFHQztXQUhELEFBR08sQUFDTjttQkFKRCxBQUllOztlQUpmO2lCQUhGLEFBQ0MsQUFFQyxBQU9EO0FBUEM7QUFDQyx3QkFNRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsMkJBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUsa0JBQUEsQUFBQyxPQUFEO1lBQVcsT0FBQSxBQUFLLFNBQVMsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUF6QyxBQUFXLEFBQWMsQUFBdUI7QUFGM0QsQUFHQztXQUhELEFBR08sQUFDTjttQkFKRCxBQUllOztlQUpmO2lCQVpGLEFBVUMsQUFFQyxBQVFEO0FBUkM7QUFDQyx3QkFPRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7ZUFBbEQ7aUJBcEJELEFBb0JDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBQUE7QUFBQTtNQXRCRixBQUNDLEFBcUJDLEFBS0Y7Ozs7O0FBekRxQixBLEFBNER2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIdW50Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWljaGFlbHNpY2lsaWFuby9EZXNrdG9wL0ltbWVyc2l2ZS9TdGFja2F0aG9uL0h1bnRlci1TZWVrZXIifQ==