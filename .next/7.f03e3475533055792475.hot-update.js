webpackHotUpdate(7,{

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(481);

var _Layout = __webpack_require__(1219);

var _Layout2 = _interopRequireDefault(_Layout);

var _FundForm = __webpack_require__(1239);

var _FundForm2 = _interopRequireDefault(_FundForm);

var _BountyHub = __webpack_require__(1236);

var _BountyHub2 = _interopRequireDefault(_BountyHub);

var _web = __webpack_require__(1022);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(747);

var _HuntForm = __webpack_require__(1240);

var _HuntForm2 = _interopRequireDefault(_HuntForm);

var _SubmitForm = __webpack_require__(1241);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/pages/bountyhubs/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/pages/bountyhubs/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bountyhubs/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5mMDNlMzQ3NTUzMzA1NTc5MjQ3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYm91bnR5aHVicy9zaG93LmpzPzNjYzMyMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiwgR3JpZENvbHVtbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBGdW5kRm9ybSBmcm9tICcuLi8uLi9jbGllbnQvY29tcG9uZW50cy9GdW5kRm9ybSc7XG5pbXBvcnQgQm91bnR5SHViIGZyb20gJy4uLy4uL2V0aGVyZXVtL2J1aWxkL0JvdW50eUh1Yi5qc29uJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgSHVudEZvcm0gZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvSHVudEZvcm0nO1xuaW1wb3J0IFN1Ym1pdEZvcm0gZnJvbSAnLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvU3VibWl0Rm9ybSc7XG5cbmNsYXNzIEJvdW50eUh1YlNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cdFx0Y29uc3QgYm91bnR5SHViID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEpTT04ucGFyc2UoQm91bnR5SHViLmludGVyZmFjZSksIHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBib3VudHlIdWIubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCh7XG5cdFx0XHRmcm9tOiBhY2NvdW50c1swXVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MsXG5cdFx0XHRiYWxhbmNlOiBzdW1tYXJ5WzBdLFxuXHRcdFx0aHVudENvdW50OiBzdW1tYXJ5WzFdLFxuXHRcdFx0YWNjZXNzUG9pbnQ6IHN1bW1hcnlbMl0sXG5cdFx0XHRtYW5hZ2VyOiBzdW1tYXJ5WzNdLFxuXHRcdFx0c3RhdHVzOiBzdW1tYXJ5WzRdXG5cdFx0fTtcblx0fVxuXG5cdHJlbmRlckNhcmRzKCkge1xuXHRcdGNvbnN0IHsgYmFsYW5jZSwgbWFuYWdlciwgYWNjZXNzUG9pbnQsIGh1bnRDb3VudCwgc3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogc3RhdHVzLFxuXHRcdFx0XHRtZXRhOiAnSHViIFN0YXR1cycsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnJyxcblx0XHRcdFx0c3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aGVhZGVyOiBhY2Nlc3NQb2ludCxcblx0XHRcdFx0bWV0YTogJ0FjY2VzcyBQb2ludCAoVVJMKScsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnVGFyZ2V0IFVSTCB0aGUgaHVudGVyIHNob3VsZCB0cnkgYW5kIGluZmlsdHJhdGUnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRoZWFkZXI6IGh1bnRDb3VudCxcblx0XHRcdFx0bWV0YTogJ051bWJlciBvZiBBY3RpdmUgSHVudHMnLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ051bWJlciBvZiBoaWRkZW4ga2V5cyB3aXRoaW4gdGhlIEFjY2VzcyBQb2ludCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpLFxuXHRcdFx0XHRtZXRhOiAnSHViIEJhbGFuY2UgKGV0aGVyKScsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnQXZhaWxhYmxlIGZ1bmRzIGxlZnQgdG8gYXdhcmQnXG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+Qm91bnR5IEh1YjwvaDM+XG5cdFx0XHRcdDxHcmlkPlxuXHRcdFx0XHRcdDxHcmlkLlJvdz5cblx0XHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17OX0+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckNhcmRzKCl9XG5cdFx0XHRcdFx0XHRcdDxTdWJtaXRGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cblx0XHRcdFx0XHRcdDwvR3JpZC5Db2x1bW4+XG5cblx0XHRcdFx0XHRcdDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ1aSBob3Jpem9udGFsIGRpdmlkZXIgaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZXRoZXJldW0gaWNvblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0RnVuZCBCb3VudHkgSHViXG5cdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxGdW5kRm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+XG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJ1aSBob3Jpem9udGFsIGRpdmlkZXIgaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwidXNlciBzZWNyZXQgaWNvblwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0Q3JlYXRlIE5ldyBIdW50XG5cdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHRcdDxIdW50Rm9ybSBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9IC8+XG5cdFx0XHRcdFx0XHQ8L0dyaWQuQ29sdW1uPlxuXHRcdFx0XHRcdDwvR3JpZC5Sb3c+XG5cdFx0XHRcdDwvR3JpZD5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm91bnR5SHViU2hvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2JvdW50eWh1YnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQUtBO0FBRUE7QUFJQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQU1BO0FBTkE7Ozs7Ozs7Ozs7Ozs7QUFwRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=