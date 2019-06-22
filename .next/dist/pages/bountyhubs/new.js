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

var _factory = require('../../ethereum/factory')

var _factory2 = _interopRequireDefault(_factory)

var _web = require('../../ethereum/web3')

var _web2 = _interopRequireDefault(_web)

var _routes = require('../../routes')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

var _jsxFileName =
  '/Users/michaelsiciliano/Desktop/Immersive/Stackathon/Hunter-Seeker/pages/bountyhubs/new.js?entry'

var BountyHubNew = (function(_Component) {
  ;(0, _inherits3.default)(BountyHubNew, _Component)

  function BountyHubNew() {
    var _ref,
      _this2 = this

    var _temp, _this, _ret
    ;(0, _classCallCheck3.default)(this, BountyHubNew)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          BountyHubNew.__proto__ ||
          (0, _getPrototypeOf2.default)(BountyHubNew)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.state = {
        accessPoint: '',
        errorMessage: '',
        loading: false
      }),
      (_this.onSubmit = (function() {
        var _ref2 = (0, _asyncToGenerator3.default)(
          /*#__PURE__*/ _regenerator2.default.mark(function _callee(event) {
            var accounts
            return _regenerator2.default.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      event.preventDefault()

                      _this.setState({loading: true, errorMessage: ''})

                      _context.prev = 2
                      _context.next = 5
                      return _web2.default.eth.getAccounts()

                    case 5:
                      accounts = _context.sent
                      _context.next = 8
                      return _factory2.default.methods
                        .createBountyHub(_this.state.accessPoint)
                        .send({
                          from: accounts[0]
                        })

                    case 8:
                      console.log('done')
                      _routes.Router.pushRoute('/')
                      _context.next = 15
                      break

                    case 12:
                      _context.prev = 12
                      _context.t0 = _context['catch'](2)

                      _this.setState({errorMessage: _context.t0.message})

                    case 15:
                      _this.setState({loading: false})

                    case 16:
                    case 'end':
                      return _context.stop()
                  }
                }
              },
              _callee,
              _this2,
              [[2, 12]]
            )
          })
        )

        return function(_x) {
          return _ref2.apply(this, arguments)
        }
      })()),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    )
  }

  ;(0, _createClass3.default)(BountyHubNew, [
    {
      key: 'render',
      value: function render() {
        var _this3 = this

        return _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          },
          _react2.default.createElement(
            'h3',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            'Create a Bounty Hub'
          ),
          _react2.default.createElement(
            _semanticUiReact.Form,
            {
              onSubmit: this.onSubmit,
              error: !!this.state.errorMessage,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react2.default.createElement(
              _semanticUiReact.Form.Field,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              _react2.default.createElement(
                'label',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                },
                'Access Point'
              ),
              _react2.default.createElement(_semanticUiReact.Input, {
                label: 'URL',
                labelPosition: 'right',
                value: this.state.accessPoint,
                onChange: function onChange(event) {
                  return _this3.setState({accessPoint: event.target.value})
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              })
            ),
            _react2.default.createElement(_semanticUiReact.Message, {
              error: true,
              header: 'Oops!',
              content: this.state.errorMessage,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            }),
            _react2.default.createElement(
              _semanticUiReact.Button,
              {
                loading: this.state.loading,
                primary: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              'Create!'
            )
          )
        )
      }
    }
  ])

  return BountyHubNew
})(_react.Component)

exports.default = BountyHubNew
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JvdW50eWh1YnMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiQm91bnR5SHViTmV3Iiwic3RhdGUiLCJhY2Nlc3NQb2ludCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQm91bnR5SHViIiwic2VuZCIsImZyb20iLCJjb25zb2xlIiwibG9nIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFNLEFBQVEsQUFBTzs7QUFDN0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0lBRWYsQTs7Ozs7Ozs7Ozs7Ozs7O3dOQUNKLEE7bUJBQVEsQUFDTyxBQUNiO29CQUZNLEFBRVEsQUFDZDtlQUhNLEEsQUFHRztBQUhILEFBQ04sYSxBQUtGOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtZQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFFTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFVLE1BQU0sY0FIckIsQUFHVCxBQUFjLEFBQThCOztnQ0FIbkM7Z0NBQUE7dUJBTWdCLGNBQUEsQUFBSyxJQU5yQixBQU1nQixBQUFTOzttQkFBMUI7QUFOQyxvQ0FBQTtnQ0FBQTt5Q0FPRCxBQUFRLFFBQVIsQUFBZ0IsZ0JBQWdCLE1BQUEsQUFBSyxNQUFyQyxBQUEyQyxhQUEzQyxBQUF3RDt3QkFDdEQsU0FSRCxBQU9ELEFBQTZELEFBQzNELEFBQVM7QUFEa0QsQUFDakUsaUJBREk7O21CQUdOO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7K0JBQUEsQUFBTyxVQVhBLEFBV1AsQUFBaUI7Z0NBWFY7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBYVA7O3NCQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFidEIsQUFhUCxBQUFjLEFBQW1COzttQkFHbkM7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBaEJOLEFBZ0JULEFBQWMsQUFBVTs7bUJBaEJmO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBbUJGO21CQUNQOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFFQSx3Q0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxpQ0FBQSxBQUFDO2VBQUQsQUFDUSxBQUNOO3VCQUZGLEFBRWdCLEFBQ2Q7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsTUFBQSxBQUFNLE9BRDFCLEFBQ1IsQUFBYyxBQUEyQjtBQUw3Qzs7b0JBQUE7c0JBSEosQUFDRSxBQUVFLEFBVUY7QUFWRTtBQUNFLDJCQVNKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBYkYsQUFhRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FsQk4sQUFDRSxBQUdFLEFBY0UsQUFNUDs7Ozs7QUFuRHdCLEEsQUFzRDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWljaGFlbHNpY2lsaWFuby9EZXNrdG9wL0ltbWVyc2l2ZS9TdGFja2F0aG9uL0h1bnRlci1TZWVrZXIifQ==
