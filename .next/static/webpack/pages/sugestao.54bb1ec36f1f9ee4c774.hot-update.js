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
/* harmony import */ var _Components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/PageTitle/PageTitle */ "./Components/PageTitle/PageTitle.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\pedro\\Documentos\\programas\\DevPleno\\PalpiteBox\\pages\\sugestao.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_pedro_Documentos_programas_DevPleno_PalpiteBox_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var sugestao = function sugestao() {
  _s();

  var notas = [0, 1, 2, 3, 4, 5];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: ''
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: "Sugestao"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-bold my-4",
      children: "Cr\xEDtica ou sugest\xE3o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "mb-4 font-bold",
      children: ["O restaurante X sempre busca por atender melhor seus clientes.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 105
      }, _this), "Por isso, estamos sempre abertos a ouvir a sua opini\xE3o."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this), !sucess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-1/2 mx-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mx-auto text-left",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Seu nome:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
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
          lineNumber: 47,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Email:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
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
          lineNumber: 49,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Whatsapp:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
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
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Nota:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex py-4",
          children: notas.map(function (nota) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block w-1/6 text-center ",
              children: [nota, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 43
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "radio",
                name: "Nota",
                value: nota,
                onChange: onChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-blue-400 mt-4 py-4 px-12 font-bold rounded-md shadow-lg",
          onClick: save,
          children: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }, _this), sucess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-auto w-1/2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
        children: "Obrigado pela contribui\xE7\xE3o!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, _this), retorno.showCupom && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-1 border px-4 py-3",
        children: ["Seu Cupom: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 40
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "mb-4 font-bold text-black text-2xl",
          children: retorno.Cupom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 104
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: " text-black",
          children: form.Nome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-4 border px-4 py-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: " text-black",
          children: retorno.Promo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-4 italic",
        children: "Apresente uma foto desta tela na sua pr\xF3xima compra"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_s(sugestao, "cTlK4q/fYdgaTs5SKpruXHlh/tQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VnZXN0YW8uNTRiYjFlYzM2ZjFmOWVlNGM3NzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkIsTUFBTUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDs7QUFGbUIsa0JBR0tILCtDQUFRLENBQUM7QUFDN0JJLElBQUFBLElBQUksRUFBRSxFQUR1QjtBQUU3QkMsSUFBQUEsS0FBSyxFQUFFLEVBRnNCO0FBRzdCQyxJQUFBQSxRQUFRLEVBQUUsRUFIbUI7QUFJN0JDLElBQUFBLElBQUksRUFBRTtBQUp1QixHQUFELENBSGI7QUFBQSxNQUdaQyxJQUhZO0FBQUEsTUFHTkMsT0FITTs7QUFBQSxtQkFTU1QsK0NBQVEsQ0FBQyxLQUFELENBVGpCO0FBQUEsTUFTWlUsTUFUWTtBQUFBLE1BU0pDLFNBVEk7O0FBQUEsbUJBVVdYLCtDQUFRLENBQUMsRUFBRCxDQVZuQjtBQUFBLE1BVVpZLE9BVlk7QUFBQSxNQVVIQyxVQVZHOztBQVluQixNQUFNQyxJQUFJO0FBQUEsK1RBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVrQkMsS0FBSyxDQUFDLFdBQUQsRUFBYztBQUN0Q0MsZ0JBQUFBLE1BQU0sRUFBRSxNQUQ4QjtBQUV0Q0MsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVYLElBQWY7QUFGZ0MsZUFBZCxDQUZ2Qjs7QUFBQTtBQUVDWSxjQUFBQSxRQUZEO0FBQUE7QUFBQSxxQkFNY0EsUUFBUSxDQUFDQyxJQUFULEVBTmQ7O0FBQUE7QUFNQ0MsY0FBQUEsSUFORDtBQU9MWCxjQUFBQSxTQUFTLENBQUMsSUFBRCxD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QUEsV0FESjtBQTZDSCxDQTdFRDs7R0FBTWhDOztBQStFTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdWdlc3Rhby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vQ29tcG9uZW50cy9QYWdlVGl0bGUvUGFnZVRpdGxlJztcclxuXHJcblxyXG5cclxuY29uc3Qgc3VnZXN0YW8gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgbm90YXMgPSBbMCwgMSwgMiwgMywgNCwgNV07XHJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgTm9tZTogJycsXHJcbiAgICAgICAgRW1haWw6ICcnLFxyXG4gICAgICAgIFdoYXRzYXBwOiAnJyxcclxuICAgICAgICBOb3RhOiAnJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IFtzdWNlc3MsIFNldFN1Y2Nlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcmV0b3Jubywgc2V0UmV0b3Jub10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3NhdmUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFNldFN1Y2Nlcyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0UmV0b3JubyhkYXRhKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gZXZ0LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIHNldEZvcm0ob2xkID0+ICh7XHJcbiAgICAgICAgICAgIC4uLm9sZCxcclxuICAgICAgICAgICAgW2tleV06IHZhbHVlLFxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB0ZXh0LWNlbnRlciBwLTQgdy0yLzUnPlxyXG4gICAgICAgICAgICA8UGFnZVRpdGxlIHRpdGxlPSdTdWdlc3RhbycgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkIG15LTQnPkNyw610aWNhIG91IHN1Z2VzdMOjbzwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWItNCBmb250LWJvbGQnPk8gcmVzdGF1cmFudGUgWCBzZW1wcmUgYnVzY2EgcG9yIGF0ZW5kZXIgbWVsaG9yIHNldXMgY2xpZW50ZXMuPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBQb3IgaXNzbywgZXN0YW1vcyBzZW1wcmUgYWJlcnRvcyBhIG91dmlyIGEgc3VhIG9waW5pw6NvLjwvcD5cclxuICAgICAgICAgICAgeyFzdWNlc3MgJiYgPGRpdiBjbGFzc05hbWU9J3ctMS8yIG14LWF1dG8nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdGV4dC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPlNldSBub21lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nYmctYmx1ZS0xMDAgYmxvY2sgc2hhZG93LWxnIHJvdWRlZCBweS00IHB4LTEyJyBwbGFjZWhvbGRlcj0nTm9tZScgbmFtZT0nTm9tZScgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17Zm9ybS5Ob21lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdiZy1ibHVlLTEwMCBibG9jayBzaGFkb3ctbGcgcm91ZGVkIHB5LTQgcHgtMTInIHBsYWNlaG9sZGVyPSdzZXVlbWFpbEBlbWFpbC5jb20nIG5hbWU9J0VtYWlsJyBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtmb3JtLkVtYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+V2hhdHNhcHA6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdiZy1ibHVlLTEwMCBibG9jayBzaGFkb3ctbGcgcm91ZGVkIHB5LTQgcHgtMTInIHBsYWNlaG9sZGVyPSdERERYWFhYWFhYWFgnIG5hbWU9J1doYXRzYXBwJyBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXtmb3JtLldoYXRzYXBwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+Tm90YTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHB5LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bm90YXMubWFwKG5vdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayB3LTEvNiB0ZXh0LWNlbnRlciAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90YX08YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdOb3RhJyB2YWx1ZT17bm90YX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIG10LTQgcHktNCBweC0xMiBmb250LWJvbGQgcm91bmRlZC1tZCBzaGFkb3ctbGdcIiBvbkNsaWNrPXtzYXZlfT5TYWx2YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgIHtzdWNlc3MgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHctMS8yJz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTYgYmctYmx1ZS0xMDAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgcHgtNCBweS0zJz5PYnJpZ2FkbyBwZWxhIGNvbnRyaWJ1acOnw6NvITwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7cmV0b3Juby5zaG93Q3Vwb20gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEgYm9yZGVyIHB4LTQgcHktMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXUgQ3Vwb206IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdtYi00IGZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtMnhsJz57cmV0b3Juby5DdXBvbX08L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyB0ZXh0LWJsYWNrJz57Zm9ybS5Ob21lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00IGJvcmRlciBweC00IHB5LTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JyB0ZXh0LWJsYWNrJz57cmV0b3Juby5Qcm9tb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQgaXRhbGljJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXByZXNlbnRlIHVtYSBmb3RvIGRlc3RhIHRlbGEgbmEgc3VhIHByw7N4aW1hIGNvbXByYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdWdlc3RhbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhZ2VUaXRsZSIsInN1Z2VzdGFvIiwibm90YXMiLCJOb21lIiwiRW1haWwiLCJXaGF0c2FwcCIsIk5vdGEiLCJmb3JtIiwic2V0Rm9ybSIsInN1Y2VzcyIsIlNldFN1Y2NlcyIsInJldG9ybm8iLCJzZXRSZXRvcm5vIiwic2F2ZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib25DaGFuZ2UiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleSIsIm5hbWUiLCJvbGQiLCJtYXAiLCJub3RhIiwic2hvd0N1cG9tIiwiQ3Vwb20iLCJQcm9tbyJdLCJzb3VyY2VSb290IjoiIn0=