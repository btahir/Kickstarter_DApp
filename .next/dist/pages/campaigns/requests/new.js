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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bilal/Downloads/Smart_Contracts/Kickstarter_DApp/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
	(0, _inherits3.default)(RequestNew, _Component);

	function RequestNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			description: '',
			recipient: '',
			loading: false,
			errorMessage: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, _this$state, description, value, recipient, accounts;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								campaign = (0, _campaign2.default)(_this.props.address);
								_this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 4;
								_context.next = 7;
								return _web2.default.eth.getAccounts();

							case 7:
								accounts = _context.sent;
								_context.next = 10;
								return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

							case 10:

								_routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](4);

								_this.setState({ errorMessage: _context.t0.message });

							case 16:

								_this.setState({ loading: false, value: '' });

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[4, 13]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, 'Back')), _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.description,
				onChange: function onChange(event) {
					return _this3.setState({ description: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.recipient,
				onChange: function onChange(event) {
					return _this3.setState({ recipient: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, 'Create!')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
				var address;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								address = props.query.address;
								return _context2.abrupt('return', { address: address });

							case 2:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function getInitialProps(_x2) {
				return _ref3.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7Ozs7OztrTixBQUNMO1VBQVEsQUFDQSxBQUNQO2dCQUZPLEFBRU0sQUFDYjtjQUhPLEFBR0ksQUFDWDtZQUpPLEFBSUUsQUFDVDtpQkFMTyxBLEFBS087QUFMUCxBQUNQLFcsQUFhRDt3RkFBVyxpQkFBQSxBQUFPLE9BQVA7OERBQUE7O2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSxtQkFHTyx3QkFBUyxNQUFBLEFBQUssTUFIckIsQUFHTyxBQUFvQjtzQkFDSyxNQUpoQyxBQUlxQyxPQUpyQyxBQUlGLDBCQUpFLEFBSUYsYUFKRSxBQUlXLG9CQUpYLEFBSVcsT0FKWCxBQUlrQix3QkFKbEIsQUFJa0IsQUFFNUI7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FOckIsQUFNVixBQUFjLEFBQStCOzt3QkFObkM7d0JBQUE7ZUFTYyxjQUFBLEFBQUssSUFUbkIsQUFTYyxBQUFTOztZQUExQjtBQVRHLDRCQUFBO3dCQUFBO2VBVUgsU0FBQSxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFDSixhQUNBLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUZiLEFBRUosQUFBd0IsVUFGcEIsQUFHSixXQUhJLEFBS0osS0FBSyxFQUFFLE1BQU0sU0FmTixBQVVILEFBS0MsQUFBUSxBQUFTOztZQUV4Qjs7dUJBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BQXBDLEFBQTBDLFVBakJqQzt3QkFBQTtBQUFBOztZQUFBO3dCQUFBO3dDQW1CVjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBbkJwQixBQW1CVixBQUFjLEFBQW9COztZQUdsQzs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsT0FBTyxPQXRCdEIsQUFzQlYsQUFBYyxBQUF5Qjs7WUF0QjdCO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkF5QkY7Z0JBQ1I7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDSztBQURMO0FBQUEsSUFBQSxrQkFDSyxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7ZUFBQTtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFGUCxBQUNLLEFBQ0UsQUFJTiwwQkFBQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQU5ELEFBTUMsQUFDQSxxQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7ZUFBbkQ7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxnQ0FBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsYUFBYSxNQUFBLEFBQU0sT0FBNUMsQUFBUyxBQUFjLEFBQTRCO0FBRjlEOztlQUFBO2lCQUhGLEFBQ0MsQUFFQyxBQU1EO0FBTkM7QUFDQyx3QkFLRCxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsbUNBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUZ4RDs7ZUFBQTtpQkFYRixBQVNDLEFBRUMsQUFNRDtBQU5DO0FBQ0Msd0JBS0QsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLDhCQUFBLEFBQUM7V0FDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNsQjtjQUFVLHlCQUFBO1lBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFGNUQ7O2VBQUE7aUJBbkJGLEFBaUJDLEFBRUMsQUFNRDtBQU5DO0FBQ0Msd0JBS0YsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO2VBQWxEO2lCQXpCRCxBQXlCQyxBQUNBO0FBREE7dUJBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO2VBQXBDO2lCQUFBO0FBQUE7TUFsQ0gsQUFDQyxBQU9DLEFBMEJDLEFBSUg7Ozs7OzBHQXRFNkIsQTs7Ozs7WUFDckI7QSxrQkFBWSxNLEFBQU0sTUFBbEIsQTswQ0FFRCxFQUFFLFMsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVpnQixBLEFBa0Z6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JpbGFsL0Rvd25sb2Fkcy9TbWFydF9Db250cmFjdHMvS2lja3N0YXJ0ZXJfREFwcCJ9