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

var _SubmitForm = require('../../client/components/SubmitForm');

var _SubmitForm2 = _interopRequireDefault(_SubmitForm);

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
			    huntCount = _props.huntCount,
			    status = _props.status;

			var items = [{
				header: status,
				meta: 'Hub Status',
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
					lineNumber: 57
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Bounty Hub'), _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, this.renderCards(), _react2.default.createElement(_SubmitForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			})), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
					fileName: _jsxFileName,
					lineNumber: 71
				}
			}, _react2.default.createElement('h4', { className: 'ui horizontal divider header', __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement('i', { className: 'ethereum icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}), 'Fund Bounty Hub'), _react2.default.createElement(_FundForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}), _react2.default.createElement('h4', { className: 'ui horizontal divider header', __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement('i', { className: 'user secret icon', __source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}), 'Create New Hunt'), _react2.default.createElement(_HuntForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			})))));
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
									manager: summary[3],
									status: summary[4]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JvdW50eWh1YnMvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiR3JpZENvbHVtbiIsIkxheW91dCIsIkZ1bmRGb3JtIiwiQm91bnR5SHViIiwid2ViMyIsIkxpbmsiLCJIdW50Rm9ybSIsIlN1Ym1pdEZvcm0iLCJCb3VudHlIdWJTaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsImFjY2Vzc1BvaW50IiwiaHVudENvdW50Iiwic3RhdHVzIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwicXVlcnkiLCJib3VudHlIdWIiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwiZnJvbSIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBUTs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztnQ0FtQlM7Z0JBQ2dELEtBRGhELEFBQ3FEO09BRHJELEFBQ0wsaUJBREssQUFDTDtPQURLLEFBQ0ksaUJBREosQUFDSTtPQURKLEFBQ2EscUJBRGIsQUFDYTtPQURiLEFBQzBCLG1CQUQxQixBQUMwQjtPQUQxQixBQUNxQyxnQkFEckMsQUFDcUMsQUFFbEQ7O09BQU07WUFDTCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBRSxjQUxHLEFBQ2IsQUFJUSxBQUFnQjtBQUp4QixBQUNDLElBRlk7WUFPYixBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBVlksQUFPYixBQUdjO0FBSGQsQUFDQztZQUlELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFmWSxBQVliLEFBR2M7QUFIZCxBQUNDO1lBS1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBNEIsQUFDcEM7VUFGRCxBQUVPLEFBQ047aUJBcEJGLEFBQWMsQUFpQmIsQUFHYyxBQUlmO0FBUEMsQUFDQzs7d0NBTUssQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLCtCQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDRTtBQURGO1dBQUEsQUFDRSxBQUFLLEFBQ04sK0JBQUEsQUFBQyxzQ0FBVyxTQUFTLEtBQUEsQUFBSyxNQUExQixBQUFnQztlQUFoQztpQkFIRixBQUNDLEFBRUMsQUFHRDtBQUhDO3dCQUdBLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUEsUUFBSSxXQUFKLEFBQWM7ZUFBZDtpQkFBQSxBQUNDO0FBREQ7MkNBQ0ksV0FBSCxBQUFhO2VBQWI7aUJBREQsQUFDQztBQUFBO09BRkYsQUFDQyxBQUlBLG9DQUFBLEFBQUMsb0NBQVMsU0FBUyxLQUFBLEFBQUssTUFBeEIsQUFBOEI7ZUFBOUI7aUJBTEQsQUFLQyxBQUNBO0FBREE7dUJBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYztlQUFkO2lCQUFBLEFBQ0M7QUFERDsyQ0FDSSxXQUFILEFBQWE7ZUFBYjtpQkFERCxBQUNDO0FBQUE7T0FQRixBQU1DLEFBSUEsb0NBQUEsQUFBQyxvQ0FBUyxTQUFTLEtBQUEsQUFBSyxNQUF4QixBQUE4QjtlQUE5QjtpQkFwQkwsQUFDQyxBQUVDLEFBQ0MsQUFNQyxBQVVDLEFBTUw7QUFOSzs7Ozs7O3dHLEFBckV1Qjs7Ozs7OztlQUNKLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUFTLEtBQUEsQUFBSyxNQUFNLG9CQUFqQyxBQUFzQixBQUFxQixZQUFZLE1BQUEsQUFBTSxNQUE3RCxBLEFBQW1FOztZQUFyRjtBOztlQUNpQixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O1lBQTFCO0E7O3lCQUVnQixBQUFVLFFBQVYsQUFBa0IsYUFBbEIsQUFBK0I7ZUFDOUMsUyxBQURlLEFBQW9DLEFBQ25ELEFBQVM7QUFEMEMsQUFDekQsU0FEcUI7O1lBQWhCO0E7O2tCQUtJLE1BQUEsQUFBTSxNQURULEFBQ2UsQUFDckI7a0JBQVMsUUFGSCxBQUVHLEFBQVEsQUFDakI7b0JBQVcsUUFITCxBQUdLLEFBQVEsQUFDbkI7c0JBQWEsUUFKUCxBQUlPLEFBQVEsQUFDckI7a0JBQVMsUUFMSCxBQUtHLEFBQVEsQUFDakI7aUJBQVEsUUFORixBQU1FLEFBQVEsQTtBQU5WLEFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWeUIsQSxBQStFNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWljaGFlbHNpY2lsaWFuby9EZXNrdG9wL0ltbWVyc2l2ZS9TdGFja2F0aG9uL0h1bnRlci1TZWVrZXIifQ==