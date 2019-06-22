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

var _Layout = require('../../client/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _FundForm = require('../../client/components/FundForm');

var _FundForm2 = _interopRequireDefault(_FundForm);

var _BountyHub = require('../../ethereum/build/BountyHub.json');

var _BountyHub2 = _interopRequireDefault(_BountyHub);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _HuntForm = require('../../client/components/HuntForm');

var _HuntForm2 = _interopRequireDefault(_HuntForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/pages/bountyhubs/show.js?entry';


var BountyHubShow = function (_Component) {
	(0, _inherits3.default)(BountyHubShow, _Component);

	function BountyHubShow() {
		(0, _classCallCheck3.default)(this, BountyHubShow);

		return (0, _possibleConstructorReturn3.default)(this, (BountyHubShow.__proto__ || (0, _getPrototypeOf2.default)(BountyHubShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(BountyHubShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    accessPoint = _props.accessPoint,
			    huntCount = _props.huntCount;

			var items = [{
				header: manager,
				meta: 'Address of Manager',
				description: '',
				style: { overflowWrap: 'break-word' }
			}, {
				header: accessPoint,
				meta: 'Access Point (URL)',
				description: 'Target URL the hunter should try and infiltrate'
			}, {
				header: huntCount,
				meta: 'Number of Active Hunts',
				description: 'Number of hidden keys within the Access Point'
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Hub Balance (ether)',
				description: 'Available funds left to award'
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'Bounty Hub'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, this.renderCards(), _react2.default.createElement('h4', { className: 'ui horizontal divider header', __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement('i', { className: 'paper plane icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}), 'Submit Solution')), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement('h4', { className: 'ui horizontal divider header', __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement('i', { className: 'ethereum icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}), 'Fund Bounty Hub'), _react2.default.createElement(_FundForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}), _react2.default.createElement('h4', { className: 'ui horizontal divider header', __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement('i', { className: 'user secret icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}), 'Create New Hunt'), _react2.default.createElement(_HuntForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}))));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var bountyHub, accounts, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return new _web2.default.eth.Contract(JSON.parse(_BountyHub2.default.interface), props.query.address);

							case 2:
								bountyHub = _context.sent;
								_context.next = 5;
								return _web2.default.eth.getAccounts();

							case 5:
								accounts = _context.sent;
								_context.next = 8;
								return bountyHub.methods.getSummary().call({
									from: accounts[0]
								});

							case 8:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									balance: summary[0],
									huntCount: summary[1],
									accessPoint: summary[2],
									manager: summary[3]
								});

							case 10:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return BountyHubShow;
}(_react.Component);

exports.default = BountyHubShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JvdW50eWh1YnMvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiR3JpZENvbHVtbiIsIkxheW91dCIsIkZ1bmRGb3JtIiwiQm91bnR5SHViIiwid2ViMyIsIkxpbmsiLCJIdW50Rm9ybSIsIkJvdW50eUh1YlNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwiYWNjZXNzUG9pbnQiLCJodW50Q291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJxdWVyeSIsImJvdW50eUh1YiIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJmcm9tIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFROztBQUM3QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O2dDQWtCUztnQkFDd0MsS0FEeEMsQUFDNkM7T0FEN0MsQUFDTCxpQkFESyxBQUNMO09BREssQUFDSSxpQkFESixBQUNJO09BREosQUFDYSxxQkFEYixBQUNhO09BRGIsQUFDMEIsbUJBRDFCLEFBQzBCLEFBRXZDOztPQUFNO1lBQ0wsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2MsQUFDYjtXQUFPLEVBQUUsY0FMRyxBQUNiLEFBSVEsQUFBZ0I7QUFKeEIsQUFDQyxJQUZZO1lBT2IsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQVZZLEFBT2IsQUFHYztBQUhkLEFBQ0M7WUFJRCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBZlksQUFZYixBQUdjO0FBSGQsQUFDQztZQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTRCLEFBQ3BDO1VBRkQsQUFFTyxBQUNOO2lCQXBCRixBQUFjLEFBaUJiLEFBR2MsQUFJZjtBQVBDLEFBQ0M7O3dDQU1LLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSwrQkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO2VBQXBCO2lCQUFBLEFBQ0U7QUFERjtXQUFBLEFBQ0UsQUFBSyxBQUNOLCtCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7ZUFBZDtpQkFBQSxBQUNDO0FBREQ7MkNBQ0ksV0FBSCxBQUFhO2VBQWI7aUJBREQsQUFDQztBQUFBO09BSkgsQUFDQyxBQUVDLEFBTUQscUNBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQSxRQUFJLFdBQUosQUFBYztlQUFkO2lCQUFBLEFBQ0M7QUFERDsyQ0FDSSxXQUFILEFBQWE7ZUFBYjtpQkFERCxBQUNDO0FBQUE7T0FGRixBQUNDLEFBSUEsb0NBQUEsQUFBQyxvQ0FBUyxTQUFTLEtBQUEsQUFBSyxNQUF4QixBQUE4QjtlQUE5QjtpQkFMRCxBQUtDLEFBQ0E7QUFEQTt1QkFDQSxjQUFBLFFBQUksV0FBSixBQUFjO2VBQWQ7aUJBQUEsQUFDQztBQUREOzJDQUNJLFdBQUgsQUFBYTtlQUFiO2lCQURELEFBQ0M7QUFBQTtPQVBGLEFBTUMsQUFJQSxvQ0FBQSxBQUFDLG9DQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXhCLEFBQThCO2VBQTlCO2lCQXBCSCxBQUNDLEFBU0MsQUFVQyxBQUdGO0FBSEU7eUJBR0QsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLG9DQUNDLEFBQUMsc0JBQUQsQUFBTTs7ZUFBTjtpQkEzQkosQUFDQyxBQUVDLEFBdUJDLEFBQ0MsQUFLSjtBQUxJO0FBQUE7Ozs7O3dHQTNFd0IsQTs7Ozs7OztlQUNKLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUFTLEtBQUEsQUFBSyxNQUFNLG9CQUFqQyxBQUFzQixBQUFxQixZQUFZLE1BQUEsQUFBTSxNLEFBQTdELEFBQW1FOztZQUFyRjtBOztlQUNpQixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O1lBQTFCO0E7O3lCQUVnQixBQUFVLFFBQVYsQUFBa0IsYUFBbEIsQUFBK0I7ZUFDOUMsUyxBQURlLEFBQW9DLEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsU0FEcUI7O1lBQWhCO0E7O2tCQUtJLE1BQUEsQUFBTSxNQURULEFBQ2UsQUFDckI7a0JBQVMsUUFGSCxBQUVHLEFBQVEsQUFDakI7b0JBQVcsUUFITCxBQUdLLEFBQVEsQUFDbkI7c0JBQWEsUUFKUCxBQUlPLEFBQVEsQUFDckI7a0JBQVMsUUFMSCxBQUtHLEFBQVEsQTtBQUxYLEFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWeUIsQSxBQW9GNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWljaGFlbHNpY2lsaWFuby9EZXNrdG9wL0ltbWVyc2l2ZS9TdGFja2F0aG9uL0h1bnRlci1TZWVrZXIifQ==