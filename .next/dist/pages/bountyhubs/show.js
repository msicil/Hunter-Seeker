'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _regenerator = require('babel-runtime/regenerator')

var _regenerator2 = _interopRequireDefault(_regenerator)

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator')

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2)

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of')

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck')

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require('babel-runtime/helpers/createClass')

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn')

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require('babel-runtime/helpers/inherits')

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _semanticUiReact = require('semantic-ui-react')

var _Layout = require('../../client/components/Layout')

var _Layout2 = _interopRequireDefault(_Layout)

var _BountyHub = require('../../ethereum/build/BountyHub.json')

var _BountyHub2 = _interopRequireDefault(_BountyHub)

var _web = require('../../ethereum/web3')

var _web2 = _interopRequireDefault(_web)

var _routes = require('../../routes')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

var _jsxFileName =
  '/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/pages/bountyhubs/show.js?entry'

var BountyHubShow = (function(_Component) {
  ;(0, _inherits3.default)(BountyHubShow, _Component)

  function BountyHubShow() {
    ;(0, _classCallCheck3.default)(this, BountyHubShow)

    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        BountyHubShow.__proto__ || (0, _getPrototypeOf2.default)(BountyHubShow)
      ).apply(this, arguments)
    )
  }

  ;(0, _createClass3.default)(
    BountyHubShow,
    [
      {
        key: 'renderCards',
        value: function renderCards() {
          var _props = this.props,
            balance = _props.balance,
            manager = _props.manager,
            accessPoint = _props.accessPoint,
            huntCount = _props.huntCount

          var items = [
            {
              header: manager,
              meta: 'Address of Manager',
              description:
                'The manager created this campaign and can create requests to withdraw money',
              style: {overflowWrap: 'break-word'}
            },
            {
              header: accessPoint,
              meta: 'Access Point (URL)',
              description: 'Target URL the hunter should try and infiltrate'
            },
            {
              header: huntCount,
              meta: 'Number of Requests',
              description:
                'A request tries to withdraw money from the contract. Requests must be approved by approvers'
            },
            {
              header: huntCount,
              meta: 'Number of Active Hunts',
              description: 'Number of hidden keys within the accessPoint'
            },
            {
              header: _web2.default.utils.fromWei(balance, 'ether'),
              meta: 'Campaign Balance (ether)',
              description:
                'The balance is how much money this hub has left to award.'
            }
          ]

          return _react2.default.createElement(_semanticUiReact.Card.Group, {
            items: items,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          })
        }
      },
      {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            _Layout2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            _react2.default.createElement(
              'h3',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              },
              'Bounty Hub'
            ),
            _react2.default.createElement(
              _semanticUiReact.Grid,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              },
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  {
                    width: 10,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
                    }
                  },
                  this.renderCards()
                ),
                _react2.default.createElement(_semanticUiReact.Grid.Column, {
                  width: 6,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                })
              ),
              _react2.default.createElement(
                _semanticUiReact.Grid.Row,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  }
                },
                _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 78
                    }
                  },
                  _react2.default.createElement(
                    _routes.Link,
                    {
                      route: '/bountyhubs/' + this.props.address + '/hunts',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      }
                    },
                    _react2.default.createElement(
                      'a',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 80
                        }
                      },
                      _react2.default.createElement(
                        _semanticUiReact.Button,
                        {
                          primary: true,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                          }
                        },
                        'View Hunts'
                      )
                    )
                  )
                )
              )
            )
          )
        }
      }
    ],
    [
      {
        key: 'getInitialProps',
        value: (function() {
          var _ref = (0, _asyncToGenerator3.default)(
            /*#__PURE__*/ _regenerator2.default.mark(function _callee(props) {
              var bountyHub, accounts, summary
              return _regenerator2.default.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.next = 2
                        return new _web2.default.eth.Contract(
                          JSON.parse(_BountyHub2.default.interface),
                          props.query.address
                        )

                      case 2:
                        bountyHub = _context.sent
                        _context.next = 5
                        return _web2.default.eth.getAccounts()

                      case 5:
                        accounts = _context.sent
                        _context.next = 8
                        return bountyHub.methods.getSummary().call({
                          from: accounts[0]
                        })

                      case 8:
                        summary = _context.sent
                        return _context.abrupt('return', {
                          address: props.query.address,
                          balance: summary[0],
                          huntCount: summary[1],
                          accessPoint: summary[2],
                          manager: summary[3]
                        })

                      case 10:
                      case 'end':
                        return _context.stop()
                    }
                  }
                },
                _callee,
                this
              )
            })
          )

          function getInitialProps(_x) {
            return _ref.apply(this, arguments)
          }

          return getInitialProps
        })()
      }
    ]
  )

  return BountyHubShow
})(_react.Component)

exports.default = BountyHubShow
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JvdW50eWh1YnMvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiTGF5b3V0IiwiQm91bnR5SHViIiwid2ViMyIsIkxpbmsiLCJCb3VudHlIdWJTaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsImFjY2Vzc1BvaW50IiwiaHVudENvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwicXVlcnkiLCJib3VudHlIdWIiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwiZnJvbSIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU0sQUFBTTs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7a0NBcUJVO21CQUN1QyxLQUR2QyxBQUM0QztVQUQ1QyxBQUNMLGlCQURLLEFBQ0w7VUFESyxBQUNJLGlCQURKLEFBQ0k7VUFESixBQUNhLHFCQURiLEFBQ2E7VUFEYixBQUMwQixtQkFEMUIsQUFDMEIsQUFFdEM7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBSUksQUFDRjtlQUFPLEVBQUMsY0FORSxBQUNaLEFBS1MsQUFBZTtBQUx4QixBQUNFLE9BRlU7Z0JBUVosQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQVhVLEFBUVosQUFHZTtBQUhmLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQWhCVSxBQWFaLEFBSUk7QUFKSixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkF0QlUsQUFtQlosQUFHZTtBQUhmLEFBQ0U7Z0JBS1EsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7Y0FGRixBQUVRLEFBQ047cUJBM0JKLEFBQWMsQUF3QlosQUFHZSxBQUlqQjtBQVBFLEFBQ0U7OzJDQU1HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSwrQkFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQXlCO0FBQXpCO2NBREYsQUFDRSxBQUF5QixBQUFLLEFBRTlCLDhDQUFBLEFBQUMsc0JBQUQsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUpKLEFBQ0UsQUFHRSxBQUdGO0FBSEU7MkJBR0QsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssd0JBQXNCLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxVQUF2QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FkZCxBQUNFLEFBRUUsQUFPRSxBQUNFLEFBQ0UsQUFDRSxBQUNFLEFBUWY7Ozs7OzJHLEFBaEY0Qjs7Ozs7Ozt1QkFDSCxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDbkMsS0FBQSxBQUFLLE1BQU0sb0JBRFcsQUFDdEIsQUFBcUIsWUFDckIsTUFBQSxBQUFNLE1BRmdCLEFBRVYsQTs7bUJBRlI7QTs7dUJBSWlCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQTFCO0E7O2lDQUVnQixBQUFVLFFBQVYsQUFBa0IsYUFBbEIsQUFBK0I7d0JBQzdDLFNBRGMsQUFBb0MsQUFDbEQsQSxBQUFTO0FBRHlDLEFBQ3hELGlCQURvQjs7bUJBQWhCO0E7OzJCQUtLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCOzJCQUFTLFFBRkosQUFFSSxBQUFRLEFBQ2pCOzZCQUFXLFFBSE4sQUFHTSxBQUFRLEFBQ25COytCQUFhLFFBSlIsQUFJUSxBQUFRLEFBQ3JCOzJCQUFTLFFBTEosQUFLSSxBQUFRLEE7QUFMWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYnNCLEEsQUFvRjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pY2hhZWxzaWNpbGlhbm8vRGVza3RvcC9JbW1lcnNpdmUvU3RhY2thdGhvbi9IdW50ZXItU2Vla2VyIn0=
