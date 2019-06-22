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
				var bountyHub, accounts, reward;
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
								reward = _web2.default.utils.toWei(_this.state.reward, 'ether').toString();
								_context.next = 10;
								return bountyHub.methods.createHunt(_this.state.secret, reward).send({
									from: accounts[0]
								});

							case 10:

								_routes.Router.replaceRoute('/bountyhubs/' + _this.props.address);
								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 16:

								_this.setState({ loading: false, secret: '', reward: '' });

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 13]]);
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
					lineNumber: 39
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Hunt Secret'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.secret,
				onChange: function onChange(event) {
					return _this3.setState({ secret: event.target.value });
				},
				label: 'address',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, 'Reward'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.reward,
				onChange: function onChange(event) {
					return _this3.setState({ reward: event.target.value });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Create'));
		}
	}]);

	return HuntForm;
}(_react.Component);

exports.default = HuntForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL0h1bnRGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkJvdW50eUh1YiIsIndlYjMiLCJSb3V0ZXIiLCJIdW50Rm9ybSIsInN0YXRlIiwic2VjcmV0IiwicmV3YXJkIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJvdW50eUh1YiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInV0aWxzIiwidG9XZWkiLCJ0b1N0cmluZyIsIm1ldGhvZHMiLCJjcmVhdGVIdW50Iiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7OzhNLEFBQ0w7V0FBUSxBQUNDLEFBQ1I7V0FGTyxBQUVDLEFBQ1I7aUJBSE8sQUFHTyxBQUNkO1lBSk8sQUFJRSxBO0FBSkYsQUFDUCxXQU1ELEE7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQOzZCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSxvQkFHUSx5QkFBVSxNQUFBLEFBQUssTUFIdkIsQUFHUSxBQUFxQixBQUV2Qzs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUxyQixBQUtWLEFBQWMsQUFBK0I7O3dCQUxuQzt3QkFBQTtlQVFjLGNBQUEsQUFBSyxJQVJuQixBQVFjLEFBQVM7O1lBQTFCO0FBUkcsNEJBU0g7QUFURyxpQkFTTSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLFFBQTVCLEFBQW9DLFNBVDFDLEFBU00sQUFBNkM7d0JBVG5EO3lCQVVILEFBQVUsUUFBVixBQUFrQixXQUFXLE1BQUEsQUFBSyxNQUFsQyxBQUF3QyxRQUF4QyxBQUFnRCxRQUFoRCxBQUF3RDtlQUN2RCxTQVhFLEFBVUgsQUFBNkQsQUFDNUQsQUFBUztBQURtRCxBQUNsRSxTQURLOztZQUlOOzt1QkFBQSxBQUFPLDhCQUE0QixNQUFBLEFBQUssTUFkL0IsQUFjVCxBQUE4Qzt3QkFkckM7QUFBQTs7WUFBQTt3QkFBQTt3Q0FnQlQ7O2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWhCckIsQUFnQlQsQUFBYyxBQUFvQjs7WUFHbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sUUFBbEIsQUFBMEIsSUFBSSxRQW5CbEMsQUFtQlYsQUFBYyxBQUFzQzs7WUFuQjFDO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkFzQkY7Z0JBQ1I7OzBCQUNDLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsZ0NBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUsa0JBQUEsQUFBQyxPQUFEO1lBQVcsT0FBQSxBQUFLLFNBQVMsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUF6QyxBQUFXLEFBQWMsQUFBdUI7QUFGM0QsQUFHQztXQUhELEFBR08sQUFDTjttQkFKRCxBQUllOztlQUpmO2lCQUhGLEFBQ0MsQUFFQyxBQU9EO0FBUEM7QUFDQyx3QkFNRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsMkJBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUsa0JBQUEsQUFBQyxPQUFEO1lBQVcsT0FBQSxBQUFLLFNBQVMsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUF6QyxBQUFXLEFBQWMsQUFBdUI7QUFGM0QsQUFHQztXQUhELEFBR08sQUFDTjttQkFKRCxBQUllOztlQUpmO2lCQVpGLEFBVUMsQUFFQyxBQVFEO0FBUkM7QUFDQyx3QkFPRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7ZUFBbEQ7aUJBcEJELEFBb0JDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBQUE7QUFBQTtNQXRCRixBQUNDLEFBcUJDLEFBS0Y7Ozs7O0FBMURxQixBLEFBNkR2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIdW50Rm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWljaGFlbHNpY2lsaWFuby9EZXNrdG9wL0ltbWVyc2l2ZS9TdGFja2F0aG9uL0h1bnRlci1TZWVrZXIifQ==