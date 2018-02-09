'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/bilal/Downloads/Smart_Contracts/Kickstarter_DApp/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
	(0, _inherits3.default)(RequestIndex, _Component);

	function RequestIndex() {
		(0, _classCallCheck3.default)(this, RequestIndex);

		return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestIndex, [{
		key: 'renderRows',
		value: function renderRows() {
			var _this2 = this;

			return this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, {
					key: index,
					id: index,
					request: request,
					address: _this2.props.address,
					approversCount: _this2.props.approversCount,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 26
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, 'Description'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, 'Amount'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Recipient'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, 'Approval Count'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Approve'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, 'Finalize'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, this.renderRows())), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Found ', this.props.requestCount, ' requests.'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, approversCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								campaign = (0, _campaign2.default)(address);
								_context.next = 4;
								return campaign.methods.getRequestsCount().call();

							case 4:
								requestCount = _context.sent;
								_context.next = 7;
								return campaign.methods.approversCount().call();

							case 7:
								approversCount = _context.sent;
								_context.next = 10;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (elment, index) {
									return campaign.methods.requests(index).call();
								}));

							case 10:
								requests = _context.sent;
								return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

							case 12:
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

	return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbG1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OzsrQkFnQlE7Z0JBQ1o7O2VBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFLLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNuRDsyQkFBTyxBQUFDO1VBQUQsQUFDRCxBQUNMO1NBRk0sQUFFRixBQUNKO2NBSE0sQUFHRyxBQUNUO2NBQVMsT0FBQSxBQUFLLE1BSlIsQUFJYyxBQUNwQjtxQkFBZ0IsT0FBQSxBQUFLLE1BTGYsQUFLcUI7O2dCQUxyQjtrQkFBUCxBQUFPLEFBT1A7QUFQTztBQUNOLEtBRE07QUFEUixBQUFPLEFBU1AsSUFUTzs7OzsyQkFZQztPQUFBLEFBQ0EsU0FEQSxBQUNrQyx1QkFEbEMsQUFDQTtPQURBLEFBQ1EsTUFEUixBQUNrQyx1QkFEbEMsQUFDUTtPQURSLEFBQ2EsYUFEYixBQUNrQyx1QkFEbEMsQUFDYTtPQURiLEFBQ3lCLE9BRHpCLEFBQ2tDLHVCQURsQyxBQUN5QixBQUVqQzs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLDZCQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBRSxjQUF6QyxBQUF1QyxBQUFpQjtlQUF4RDtpQkFBQTtBQUFBO01BSkgsQUFFQyxBQUNDLEFBQ0MsQUFHRixrQ0FBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx1QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFDQSxnQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUhELEFBR0MsQUFDQSwyQkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUpELEFBSUMsQUFDQSw4QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUxELEFBS0MsQUFDQSxtQ0FBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQU5ELEFBTUMsQUFDQSw0QkFBQyxjQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQVRILEFBQ0MsQUFDQyxBQU9DLEFBR0YsK0JBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxXQW5CRixBQU9DLEFBWUMsQUFDRSxBQUFLLEFBR1IsZ0NBQUEsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsY0F4QnpCLEFBQ0MsQUF1QkMsQUFHRjs7Ozs7d0csQUExRDZCOzs7OztZQUNyQjtBLGtCQUFZLE1BQU0sQSxNQUFsQixBLEFBQ0Y7QSxtQkFBVyx3QkFBQSxBLEFBQVM7O2VBQ0MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUJBQWpCLEFBQW9DLEE7O1lBQXpEO0E7O2VBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCQUFqQixBQUFrQyxBOztZQUF6RDtBOztpQ0FFaUIsQUFBUSxVQUN4QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQThCLE9BQTlCLEFBQXFDLElBQUssVUFBQSxBQUFDLFFBQUQsQUFBUyxPQUFVLEFBQzVEO2dCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDeEM7QUFIcUIsQUFDdEIsQSxTQUFBLENBRHNCOztZQUFqQjtBO3lDQU1DLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsZ0JBQW5DLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFia0IsQSxBQThEM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JpbGFsL0Rvd25sb2Fkcy9TbWFydF9Db250cmFjdHMvS2lja3N0YXJ0ZXJfREFwcCJ9