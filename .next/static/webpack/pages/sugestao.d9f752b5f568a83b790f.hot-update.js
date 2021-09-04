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
    Nome: 'aaa',
    Email: 'bbb',
    Whatsapp: 'ccc'
  }),
      form = _useState[0],
      setForm = _useState[1];

  var save = /*#__PURE__*/function () {
    var _ref = (0,C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var response, data;
      return C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.JSON;

            case 5:
              data = _context.sent;
              console.log(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "mb-4 font-bold",
      children: ["O restaurante X sempre busca por atender melhor seus clientes.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 105
      }, _this), "Por isso, estamos sempre abertos a ouvir a sua opini\xE3o."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-1/5 mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mx-auto text-left",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Seu nome:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Email:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
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
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Whatsapp:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-blue-400 py-4 px-12 font-bold rounded-md shadow-lg",
          onClick: save,
          children: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        children: JSON.stringify(form, null, 2)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, _this);
};

_s(sugestao, "bf3yZXdOI1Cv/s/rq294LsTvKI4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VnZXN0YW8uZDlmNzUyYjVmNTY4YTgzYjc5MGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0tGLCtDQUFRLENBQUM7QUFDN0JHLElBQUFBLElBQUksRUFBRSxLQUR1QjtBQUU3QkMsSUFBQUEsS0FBSyxFQUFFLEtBRnNCO0FBRzdCQyxJQUFBQSxRQUFRLEVBQUU7QUFIbUIsR0FBRCxDQURiO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBT25CLE1BQU1DLElBQUk7QUFBQSwrVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNjQyxLQUFLLENBQUMsV0FBRCxFQUFjO0FBQ3RDQyxnQkFBQUEsTUFBTSxFQUFFLE1BRDhCO0FBRXRDQyxnQkFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUZnQyxlQUFkLENBRG5COztBQUFBO0FBQ0hRLGNBQUFBLFFBREc7QUFBQTtBQUFBLHFCQUtVQSxRQUFRLENBQUNGLElBTG5COztBQUFBO0FBS0hHLGNBQUFBLElBTEc7QUFNVEMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7O0FBTlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSlAsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQVFBLE1BQU1VLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEdBQUcsRUFBSTtBQUNwQixRQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsTUFBSixDQUFXRCxLQUF6QjtBQUNBLFFBQU1FLEdBQUcsR0FBR0gsR0FBRyxDQUFDRSxNQUFKLENBQVdFLElBQXZCO0FBQ0FoQixJQUFBQSxPQUFPLENBQUMsVUFBQWlCLEdBQUc7QUFBQSw2Q0FDSkEsR0FESSxpS0FFTkYsR0FGTSxFQUVBRixLQUZBO0FBQUEsS0FBSixDQUFQO0FBSUgsR0FQRDs7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFHLGVBQVMsRUFBQyxnQkFBYjtBQUFBLGdHQUE0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBSUk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVMsRUFBQywrQ0FBN0I7QUFBNkUscUJBQVcsRUFBQyxNQUF6RjtBQUFnRyxjQUFJLEVBQUMsTUFBckc7QUFBNEcsa0JBQVEsRUFBRUYsUUFBdEg7QUFBZ0ksZUFBSyxFQUFFWixJQUFJLENBQUNIO0FBQTVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFPLG1CQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUMsK0NBQTdCO0FBQTZFLHFCQUFXLEVBQUMsb0JBQXpGO0FBQThHLGNBQUksRUFBQyxPQUFuSDtBQUEySCxrQkFBUSxFQUFFZSxRQUFySTtBQUErSSxlQUFLLEVBQUVaLElBQUksQ0FBQ0Y7QUFBM0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQU8sbUJBQVMsRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVMsRUFBQywrQ0FBN0I7QUFBNkUscUJBQVcsRUFBQyxjQUF6RjtBQUF3RyxjQUFJLEVBQUMsVUFBN0c7QUFBd0gsa0JBQVEsRUFBRWMsUUFBbEk7QUFBNEksZUFBSyxFQUFFWixJQUFJLENBQUNEO0FBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFPSTtBQUFRLG1CQUFTLEVBQUMsdURBQWxCO0FBQTBFLGlCQUFPLEVBQUVHLElBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBVUk7QUFBQSxrQkFDS0ksSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0E1Q0Q7O0dBQU1KOztBQThDTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdWdlc3Rhby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvZGlzdC9jbGllbnQvbGluayc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHN1Z2VzdGFvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIE5vbWU6ICdhYWEnLFxyXG4gICAgICAgIEVtYWlsOiAnYmJiJyxcclxuICAgICAgICBXaGF0c2FwcDogJ2NjYydcclxuXHJcbiAgICB9KVxyXG4gICAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3NhdmUnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLkpTT047XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2dC50YXJnZXQubmFtZTtcclxuICAgICAgICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdGV4dC1jZW50ZXIgcC00IHctMi81Jz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIG15LTQnPkNyw610aWNhIG91IHN1Z2VzdMOjbzwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWItNCBmb250LWJvbGQnPk8gcmVzdGF1cmFudGUgWCBzZW1wcmUgYnVzY2EgcG9yIGF0ZW5kZXIgbWVsaG9yIHNldXMgY2xpZW50ZXMuPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBQb3IgaXNzbywgZXN0YW1vcyBzZW1wcmUgYWJlcnRvcyBhIG91dmlyIGEgc3VhIG9waW5pw6NvLjwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMS81IG14LWF1dG8nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdGV4dC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPlNldSBub21lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nYmctYmx1ZS0xMDAgYmxvY2sgc2hhZG93LWxnIHJvdWRlZCBweS00IHB4LTEyJyBwbGFjZWhvbGRlcj0nTm9tZScgbmFtZT0nTm9tZScgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17Zm9ybS5Ob21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdiZy1ibHVlLTEwMCBibG9jayBzaGFkb3ctbGcgcm91ZGVkIHB5LTQgcHgtMTInIHBsYWNlaG9sZGVyPSdzZXVlbWFpbEBlbWFpbC5jb20nIG5hbWU9J0VtYWlsJyBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtmb3JtLkVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+V2hhdHNhcHA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdiZy1ibHVlLTEwMCBibG9jayBzaGFkb3ctbGcgcm91ZGVkIHB5LTQgcHgtMTInIHBsYWNlaG9sZGVyPSdERERYWFhYWFhYWFgnIG5hbWU9J1doYXRzYXBwJyBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtmb3JtLldoYXRzYXBwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgcHktNCBweC0xMiBmb250LWJvbGQgcm91bmRlZC1tZCBzaGFkb3ctbGdcIiBvbkNsaWNrPXtzYXZlfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoZm9ybSwgbnVsbCwgMil9XHJcbiAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN1Z2VzdGFvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInN1Z2VzdGFvIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwic2V0Rm9ybSIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZXZ0IiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwib2xkIl0sInNvdXJjZVJvb3QiOiIifQ==