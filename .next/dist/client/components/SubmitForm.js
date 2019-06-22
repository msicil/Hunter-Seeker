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

var _jsxFileName = '/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/client/components/SubmitForm.js';


var SubmitForm = function (_Component) {
	(0, _inherits3.default)(SubmitForm, _Component);

	function SubmitForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SubmitForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SubmitForm.__proto__ || (0, _getPrototypeOf2.default)(SubmitForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			index: '',
			secret: '',
			solution: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var bountyHub, accounts, returnString;
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
								return bountyHub.methods.submitSolution(_this.state.index, _this.state.secret, _this.state.solution).send({
									from: accounts[0]
								});

							case 9:
								returnString = _context.sent;

								console.log(returnString);

								_routes.Router.replaceRoute('/bountyhubs/' + _this.props.address);
								_context.next = 17;
								break;

							case 14:
								_context.prev = 14;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 17:

								_this.setState({ loading: false, secret: '', solution: '', index: '' });

							case 18:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 14]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SubmitForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement('div', { style: { marginRight: '20px', marginTop: '25px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('h4', { className: 'ui horizontal divider header', __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement('i', { className: 'paper plane icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}), 'Submit Solution'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 'equal', __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'Index'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.index,
				onChange: function onChange(event) {
					return _this3.setState({ index: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Discovered Secret'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.secret,
				onChange: function onChange(event) {
					return _this3.setState({ secret: event.target.value });
				},
				label: 'address',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}))), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, 'Solution'), _react2.default.createElement(_semanticUiReact.Form.TextArea, {
				value: this.state.solution,
				onChange: function onChange(event) {
					return _this3.setState({ solution: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, 'Submit')));
		}
	}]);

	return SubmitForm;
}(_react.Component);

exports.default = SubmitForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9jb21wb25lbnRzL1N1Ym1pdEZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQm91bnR5SHViIiwid2ViMyIsIlJvdXRlciIsIlN1Ym1pdEZvcm0iLCJzdGF0ZSIsImluZGV4Iiwic2VjcmV0Iiwic29sdXRpb24iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYm91bnR5SHViIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInN1Ym1pdFNvbHV0aW9uIiwic2VuZCIsImZyb20iLCJyZXR1cm5TdHJpbmciLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2tOLEFBQ0w7VUFBUSxBQUNBLEFBQ1A7V0FGTyxBQUVDLEFBQ1I7YUFITyxBQUdHLEFBQ1Y7aUJBSk8sQUFJTyxBQUNkO1lBTE8sQUFLRSxBO0FBTEYsQUFDUCxXQU9ELEE7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQOzZCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSxvQkFHUSx5QkFBVSxNQUFBLEFBQUssTUFIdkIsQUFHUSxBQUFxQixBQUV2Qzs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUxyQixBQUtWLEFBQWMsQUFBK0I7O3dCQUxuQzt3QkFBQTtlQVFjLGNBQUEsQUFBSyxJQVJuQixBQVFjLEFBQVM7O1lBQTFCO0FBUkcsNEJBQUE7d0JBQUE7eUJBU2tCLEFBQVUsUUFBVixBQUN6QixlQUFlLE1BQUEsQUFBSyxNQURLLEFBQ0MsT0FBTyxNQUFBLEFBQUssTUFEYixBQUNtQixRQUFRLE1BQUEsQUFBSyxNQURoQyxBQUNzQyxVQUR0QyxBQUV6QjtlQUNNLFNBWkMsQUFTa0IsQUFFcEIsQUFDQyxBQUFTO0FBRFYsQUFDTCxTQUh5Qjs7WUFBckI7QUFURyxnQ0FlVDs7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7dUJBQUEsQUFBTyw4QkFBNEIsTUFBQSxBQUFLLE1BakIvQixBQWlCVCxBQUE4Qzt3QkFqQnJDO0FBQUE7O1lBQUE7d0JBQUE7d0NBbUJUOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFuQnJCLEFBbUJULEFBQWMsQUFBb0I7O1lBR25DOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLFFBQWxCLEFBQTBCLElBQUksVUFBOUIsQUFBd0MsSUFBSSxPQXRCaEQsQUFzQlYsQUFBYyxBQUFtRDs7WUF0QnZEO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkF5QkY7Z0JBQ1I7OzBCQUNDLGNBQUEsU0FBSyxPQUFPLEVBQUUsYUFBRixBQUFlLFFBQVEsV0FBbkMsQUFBWSxBQUFrQztlQUE5QztpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDQyxjQUFBLFFBQUksV0FBSixBQUFjO2VBQWQ7aUJBQUEsQUFDQztBQUREOzJDQUNJLFdBQUgsQUFBYTtlQUFiO2lCQURELEFBQ0M7QUFBQTtPQUZGLEFBQ0MsQUFJQSxvQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7ZUFBbkQ7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTSxTQUFNLFFBQVosQUFBbUI7ZUFBbkI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSwwQkFBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSxrQkFBQSxBQUFDLE9BQUQ7WUFBVyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXhDLEFBQVcsQUFBYyxBQUFzQjtBQUYxRDs7ZUFBQTtpQkFIRixBQUNDLEFBRUMsQUFLRDtBQUxDO0FBQ0Msd0JBSUQsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHNDQUFBLEFBQUM7V0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNsQjtjQUFVLGtCQUFBLEFBQUMsT0FBRDtZQUFXLE9BQUEsQUFBSyxTQUFTLEVBQUUsUUFBUSxNQUFBLEFBQU0sT0FBekMsQUFBVyxBQUFjLEFBQXVCO0FBRjNELEFBR0M7V0FIRCxBQUdPLEFBQ047bUJBSkQsQUFJZTs7ZUFKZjtpQkFYSCxBQUNDLEFBUUMsQUFFQyxBQVFGO0FBUkU7QUFDQyx5QkFPRixjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsMkNBQUEsQUFBQyxzQkFBRCxBQUFNO1dBQ0UsS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSxrQkFBQSxBQUFDLE9BQUQ7WUFBVyxPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQTNDLEFBQVcsQUFBYyxBQUF5QjtBQUY3RDs7ZUFBQTtpQkFyQkYsQUFtQkMsQUFFQyxBQU1EO0FBTkM7QUFDQyx3QkFLRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7ZUFBbEQ7aUJBM0JELEFBMkJDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBQUE7QUFBQTtNQWxDSCxBQUNDLEFBS0MsQUE0QkMsQUFNSDs7Ozs7QUEzRXVCLEEsQUE4RXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlN1Ym1pdEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pY2hhZWxzaWNpbGlhbm8vRGVza3RvcC9JbW1lcnNpdmUvU3RhY2thdGhvbi9IdW50ZXItU2Vla2VyIn0=