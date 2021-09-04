"use strict";
self["webpackHotUpdate_N_E"]("pages/sugestao",{

/***/ "./pages/sugestao.js":
/*!***************************!*\
  !*** ./pages/sugestao.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\pedro\\Documentos\\programas\\DevPleno\\PalpiteBox\\pages\\sugestao.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var sugestao = function sugestao() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    Nome: '',
    Email: '',
    Whatsapp: ''
  }),
      form = _useState[0],
      setForm = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      sucess = _useState2[0],
      SetSucces = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),
      retorno = _useState3[0],
      setRetorno = _useState3[1];

  var save = /*#__PURE__*/function () {
    var _ref = (0,C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var response, data;
      return C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              SetSucces(true);
              setRetorno(data);
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }();

  var onChange = function onChange(evt) {
    var value = evt.target.value;
    var key = evt.target.name;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, (0,C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, key, value));
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mx-auto text-center p-4 w-2/5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-bold my-4",
      children: "Cr\xEDtica ou sugest\xE3o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "mb-4 font-bold",
      children: ["O restaurante X sempre busca por atender melhor seus clientes.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 105
      }, _this), "Por isso, estamos sempre abertos a ouvir a sua opini\xE3o."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), !sucess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-1/5 mx-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mx-auto text-left",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Seu nome:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "bg-blue-100 block shadow-lg rouded py-4 px-12",
          placeholder: "Nome",
          name: "Nome",
          onChange: onChange,
          value: form.Nome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Email:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "bg-blue-100 block shadow-lg rouded py-4 px-12",
          placeholder: "seuemail@email.com",
          name: "Email",
          onChange: onChange,
          value: form.Email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Whatsapp:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "bg-blue-100 block shadow-lg rouded py-4 px-12",
          placeholder: "DDDXXXXXXXXX",
          name: "Whatsapp",
          onChange: onChange,
          value: form.Whatsapp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-blue-400 py-4 px-12 font-bold rounded-md shadow-lg",
          onClick: save,
          children: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }, _this), sucess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-auto w-1/5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
        children: "Obrigado pela contribui\xE7\xE3o!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, _this), "Cupom: ", JSON.stringify(retorno)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(sugestao, "Ci+F5Z/k7x7JpaAvZTaZnS1UDwo=");

/* harmony default export */ __webpack_exports__["default"] = (sugestao);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VnZXN0YW8uYmQxZjAwNTg2YjlmN2RhNTYzNzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tGLCtDQUFRLENBQUM7QUFDN0JHLElBQUFBLElBQUksRUFBRSxFQUR1QjtBQUU3QkMsSUFBQUEsS0FBSyxFQUFFLEVBRnNCO0FBRzdCQyxJQUFBQSxRQUFRLEVBQUU7QUFIbUIsR0FBRCxDQURiO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBQUEsbUJBTVNQLCtDQUFRLENBQUMsS0FBRCxDQU5qQjtBQUFBLE1BTVpRLE1BTlk7QUFBQSxNQU1KQyxTQU5JOztBQUFBLG1CQU9XVCwrQ0FBUSxDQUFDLEVBQUQsQ0FQbkI7QUFBQSxNQU9aVSxPQVBZO0FBQUEsTUFPSEMsVUFQRzs7QUFTbkIsTUFBTUMsSUFBSTtBQUFBLCtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFa0JDLEtBQUssQ0FBQyxXQUFELEVBQWM7QUFDdENDLGdCQUFBQSxNQUFNLEVBQUUsTUFEOEI7QUFFdENDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxJQUFmO0FBRmdDLGVBQWQsQ0FGdkI7O0FBQUE7QUFFQ1ksY0FBQUEsUUFGRDtBQUFBO0FBQUEscUJBTWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5kOztBQUFBO0FBTUNDLGNBQUFBLElBTkQ7QUFPTFgsY0FBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRSxjQUFBQSxVQUFVLENBQUNTLElBQUQsQ0FBVjtBQVJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpSLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFZQSxNQUFNUyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxHQUFHLEVBQUk7QUFDcEIsUUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7QUFDQSxRQUFNRSxHQUFHLEdBQUdILEdBQUcsQ0FBQ0UsTUFBSixDQUFXRSxJQUF2QjtBQUNBbkIsSUFBQUEsT0FBTyxDQUFDLFVBQUFvQixHQUFHO0FBQUEsNkNBQ0pBLEdBREksaUtBRU5GLEdBRk0sRUFFQUYsS0FGQTtBQUFBLEtBQUosQ0FBUDtBQUlILEdBUEQ7O0FBUUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBRyxlQUFTLEVBQUMsZ0JBQWI7QUFBQSxnR0FBNEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUlLLENBQUNmLE1BQUQsaUJBQVc7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUNSO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVMsRUFBQywrQ0FBN0I7QUFBNkUscUJBQVcsRUFBQyxNQUF6RjtBQUFnRyxjQUFJLEVBQUMsTUFBckc7QUFBNEcsa0JBQVEsRUFBRWEsUUFBdEg7QUFBZ0ksZUFBSyxFQUFFZixJQUFJLENBQUNIO0FBQTVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFPLG1CQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUMsK0NBQTdCO0FBQTZFLHFCQUFXLEVBQUMsb0JBQXpGO0FBQThHLGNBQUksRUFBQyxPQUFuSDtBQUEySCxrQkFBUSxFQUFFa0IsUUFBckk7QUFBK0ksZUFBSyxFQUFFZixJQUFJLENBQUNGO0FBQTNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFPLG1CQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUMsK0NBQTdCO0FBQTZFLHFCQUFXLEVBQUMsY0FBekY7QUFBd0csY0FBSSxFQUFDLFVBQTdHO0FBQXdILGtCQUFRLEVBQUVpQixRQUFsSTtBQUE0SSxlQUFLLEVBQUVmLElBQUksQ0FBQ0Q7QUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQU9JO0FBQVEsbUJBQVMsRUFBQyx1REFBbEI7QUFBMEUsaUJBQU8sRUFBRU8sSUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpoQixFQWVLSixNQUFNLGlCQUNIO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsdUVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixhQUVZUSxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsT0FBZixDQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQXBERDs7R0FBTVI7O0FBc0ROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N1Z2VzdGFvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9saW5rJztcclxuXHJcblxyXG5cclxuY29uc3Qgc3VnZXN0YW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgTm9tZTogJycsXHJcbiAgICAgICAgRW1haWw6ICcnLFxyXG4gICAgICAgIFdoYXRzYXBwOiAnJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzdWNlc3MsIFNldFN1Y2Nlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmV0b3Jubywgc2V0UmV0b3Jub10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3NhdmUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFNldFN1Y2Nlcyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0UmV0b3JubyhkYXRhKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gZXZ0LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHNldEZvcm0ob2xkID0+ICh7XHJcbiAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWNlbnRlciBwLTQgdy0yLzUnPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQgbXktNCc+Q3LDrXRpY2Egb3Ugc3VnZXN0w6NvPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtYi00IGZvbnQtYm9sZCc+TyByZXN0YXVyYW50ZSBYIHNlbXByZSBidXNjYSBwb3IgYXRlbmRlciBtZWxob3Igc2V1cyBjbGllbnRlcy48YnIgLz5cclxuICAgICAgICAgICAgICAgIFBvciBpc3NvLCBlc3RhbW9zIHNlbXByZSBhYmVydG9zIGEgb3V2aXIgYSBzdWEgb3BpbmnDo28uPC9wPlxyXG4gICAgICAgICAgICB7IXN1Y2VzcyAmJiA8ZGl2IGNsYXNzTmFtZT0ndy0xLzUgbXgtYXV0byc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+U2V1IG5vbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdiZy1ibHVlLTEwMCBibG9jayBzaGFkb3ctbGcgcm91ZGVkIHB5LTQgcHgtMTInIHBsYWNlaG9sZGVyPSdOb21lJyBuYW1lPSdOb21lJyBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtmb3JtLk5vbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2JnLWJsdWUtMTAwIGJsb2NrIHNoYWRvdy1sZyByb3VkZWQgcHktNCBweC0xMicgcGxhY2Vob2xkZXI9J3NldWVtYWlsQGVtYWlsLmNvbScgbmFtZT0nRW1haWwnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e2Zvcm0uRW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5XaGF0c2FwcDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2JnLWJsdWUtMTAwIGJsb2NrIHNoYWRvdy1sZyByb3VkZWQgcHktNCBweC0xMicgcGxhY2Vob2xkZXI9J0RERFhYWFhYWFhYWCcgbmFtZT0nV2hhdHNhcHAnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e2Zvcm0uV2hhdHNhcHB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBweS00IHB4LTEyIGZvbnQtYm9sZCByb3VuZGVkLW1kIHNoYWRvdy1sZ1wiIG9uQ2xpY2s9e3NhdmV9PlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3N1Y2VzcyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdy0xLzUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYmctYmx1ZS0xMDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgcHgtNCBweS0zJz5PYnJpZ2FkbyBwZWxhIGNvbnRyaWJ1acOnw6NvITwvcD5cclxuICAgICAgICAgICAgICAgICAgICBDdXBvbToge0pTT04uc3RyaW5naWZ5KHJldG9ybm8pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdWdlc3RhbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJzdWdlc3RhbyIsIk5vbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiZm9ybSIsInNldEZvcm0iLCJzdWNlc3MiLCJTZXRTdWNjZXMiLCJyZXRvcm5vIiwic2V0UmV0b3JubyIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsIm9uQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwib2xkIl0sInNvdXJjZVJvb3QiOiIifQ==