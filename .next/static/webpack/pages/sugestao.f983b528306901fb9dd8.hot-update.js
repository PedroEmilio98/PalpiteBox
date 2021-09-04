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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-bold my-4",
      children: "Cr\xEDtica ou sugest\xE3o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "mb-4 font-bold",
      children: ["O restaurante X sempre busca por atender melhor seus clientes.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 105
      }, _this), "Por isso, estamos sempre abertos a ouvir a sua opini\xE3o."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
          lineNumber: 45,
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
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Email:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
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
          lineNumber: 48,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Whatsapp:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
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
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Nota:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: notas.map(function (nota) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block w-1/6",
              children: [nota, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 43
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "radio",
                name: "Nota",
                value: nota
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-blue-400 mt-4 py-4 px-12 font-bold rounded-md shadow-lg",
          onClick: save,
          children: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }, _this), sucess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-auto w-1/2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
        children: "Obrigado pela contribui\xE7\xE3o!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, _this), retorno.showCupom && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-1 border px-4 py-3",
        children: ["Seu Cupom: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 40
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "mb-4 font-bold text-black text-2xl",
          children: retorno.Cupom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 104
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: " text-black",
          children: form.Nome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-4 border px-4 py-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: " text-black",
          children: retorno.Promo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-4 italic",
        children: "Apresente uma foto desta tela na sua pr\xF3xima compra"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3VnZXN0YW8uZjk4M2I1MjgzMDY5MDFmYjlkZDguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CLE1BQU1DLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQWQ7O0FBRm1CLGtCQUdLSCwrQ0FBUSxDQUFDO0FBQzdCSSxJQUFBQSxJQUFJLEVBQUUsRUFEdUI7QUFFN0JDLElBQUFBLEtBQUssRUFBRSxFQUZzQjtBQUc3QkMsSUFBQUEsUUFBUSxFQUFFLEVBSG1CO0FBSTdCQyxJQUFBQSxJQUFJLEVBQUU7QUFKdUIsR0FBRCxDQUhiO0FBQUEsTUFHWkMsSUFIWTtBQUFBLE1BR05DLE9BSE07O0FBQUEsbUJBU1NULCtDQUFRLENBQUMsS0FBRCxDQVRqQjtBQUFBLE1BU1pVLE1BVFk7QUFBQSxNQVNKQyxTQVRJOztBQUFBLG1CQVVXWCwrQ0FBUSxDQUFDLEVBQUQsQ0FWbkI7QUFBQSxNQVVaWSxPQVZZO0FBQUEsTUFVSEMsVUFWRzs7QUFZbkIsTUFBTUMsSUFBSTtBQUFBLCtUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFa0JDLEtBQUssQ0FBQyxXQUFELEVBQWM7QUFDdENDLGdCQUFBQSxNQUFNLEVBQUUsTUFEOEI7QUFFdENDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxJQUFmO0FBRmdDLGVBQWQsQ0FGdkI7O0FBQUE7QUFFQ1ksY0FBQUEsUUFGRDtBQUFBO0FBQUEscUJBTWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQU5kOztBQUFBO0FBTUNDLGNBQUFBLElBTkQ7QUFPTFgsY0FBQUEsU0FBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRSxjQUFBQSxVQUFVLENBQUNTLElBQUQsQ0FBVjtBQVJLO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpSLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFZQSxNQUFNUyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxHQUFHLEVBQUk7QUFDcEIsUUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7QUFDQSxRQUFNRSxHQUFHLEdBQUdILEdBQUcsQ0FBQ0UsTUFBSixDQUFXRSxJQUF2QjtBQUNBbkIsSUFBQUEsT0FBTyxDQUFDLFVBQUFvQixHQUFHO0FBQUEsNkNBQ0pBLEdBREksaUtBRU5GLEdBRk0sRUFFQUYsS0FGQTtBQUFBLEtBQUosQ0FBUDtBQUlILEdBUEQ7O0FBUUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBRyxlQUFTLEVBQUMsZ0JBQWI7QUFBQSxnR0FBNEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUlLLENBQUNmLE1BQUQsaUJBQVc7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUNSO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNJO0FBQU8sbUJBQVMsRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsbUJBQVMsRUFBQywrQ0FBN0I7QUFBNkUscUJBQVcsRUFBQyxNQUF6RjtBQUFnRyxjQUFJLEVBQUMsTUFBckc7QUFBNEcsa0JBQVEsRUFBRWEsUUFBdEg7QUFBZ0ksZUFBSyxFQUFFZixJQUFJLENBQUNKO0FBQTVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFPLG1CQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUMsK0NBQTdCO0FBQTZFLHFCQUFXLEVBQUMsb0JBQXpGO0FBQThHLGNBQUksRUFBQyxPQUFuSDtBQUEySCxrQkFBUSxFQUFFbUIsUUFBckk7QUFBK0ksZUFBSyxFQUFFZixJQUFJLENBQUNIO0FBQTNKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFPLG1CQUFTLEVBQUMsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFTLEVBQUMsK0NBQTdCO0FBQTZFLHFCQUFXLEVBQUMsY0FBekY7QUFBd0csY0FBSSxFQUFDLFVBQTdHO0FBQXdILGtCQUFRLEVBQUVrQixRQUFsSTtBQUE0SSxlQUFLLEVBQUVmLElBQUksQ0FBQ0Y7QUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQU9JO0FBQU8sbUJBQVMsRUFBQyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVFJO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsb0JBQ0tILEtBQUssQ0FBQzJCLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDZixnQ0FDSTtBQUFPLHVCQUFTLEVBQUMsYUFBakI7QUFBQSx5QkFDS0EsSUFETCxlQUNVO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFYsZUFFSTtBQUFPLG9CQUFJLEVBQUMsT0FBWjtBQUFvQixvQkFBSSxFQUFDLE1BQXpCO0FBQWdDLHFCQUFLLEVBQUVBO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBS0gsV0FOQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFpQkk7QUFBUSxtQkFBUyxFQUFDLDREQUFsQjtBQUErRSxpQkFBTyxFQUFFakIsSUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURRO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKaEIsRUF5QktKLE1BQU0saUJBQ0g7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNJO0FBQUcsaUJBQVMsRUFBQyw0RUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtFLE9BQU8sQ0FBQ29CLFNBQVIsaUJBQ0c7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUEsK0NBQ2U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZixlQUVJO0FBQU0sbUJBQVMsRUFBQyxvQ0FBaEI7QUFBQSxvQkFBc0RwQixPQUFPLENBQUNxQjtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBRStFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRi9FLGVBR0k7QUFBTSxtQkFBUyxFQUFDLGFBQWhCO0FBQUEsb0JBQStCekIsSUFBSSxDQUFDSjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhSLGVBUUk7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUEsK0JBQ0k7QUFBTSxtQkFBUyxFQUFDLGFBQWhCO0FBQUEsb0JBQStCUSxPQUFPLENBQUNzQjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKLGVBV0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE0Q0gsQ0E1RUQ7O0dBQU1oQzs7QUE4RU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VnZXN0YW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2Rpc3QvY2xpZW50L2xpbmsnO1xyXG5cclxuXHJcblxyXG5jb25zdCBzdWdlc3RhbyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBub3RhcyA9IFswLCAxLCAyLCAzLCA0LCA1XTtcclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBOb21lOiAnJyxcclxuICAgICAgICBFbWFpbDogJycsXHJcbiAgICAgICAgV2hhdHNhcHA6ICcnLFxyXG4gICAgICAgIE5vdGE6ICcnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgW3N1Y2VzcywgU2V0U3VjY2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXRvcm5vLCBzZXRSZXRvcm5vXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICBjb25zdCBzYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvc2F2ZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgU2V0U3VjY2VzKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRSZXRvcm5vKGRhdGEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSBldnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCBrZXkgPSBldnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgc2V0Rm9ybShvbGQgPT4gKHtcclxuICAgICAgICAgICAgLi4ub2xkLFxyXG4gICAgICAgICAgICBba2V5XTogdmFsdWUsXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHRleHQtY2VudGVyIHAtNCB3LTIvNSc+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCBteS00Jz5DcsOtdGljYSBvdSBzdWdlc3TDo288L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTQgZm9udC1ib2xkJz5PIHJlc3RhdXJhbnRlIFggc2VtcHJlIGJ1c2NhIHBvciBhdGVuZGVyIG1lbGhvciBzZXVzIGNsaWVudGVzLjxiciAvPlxyXG4gICAgICAgICAgICAgICAgUG9yIGlzc28sIGVzdGFtb3Mgc2VtcHJlIGFiZXJ0b3MgYSBvdXZpciBhIHN1YSBvcGluacOjby48L3A+XHJcbiAgICAgICAgICAgIHshc3VjZXNzICYmIDxkaXYgY2xhc3NOYW1lPSd3LTEvMiBteC1hdXRvJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHRleHQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5TZXUgbm9tZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2JnLWJsdWUtMTAwIGJsb2NrIHNoYWRvdy1sZyByb3VkZWQgcHktNCBweC0xMicgcGxhY2Vob2xkZXI9J05vbWUnIG5hbWU9J05vbWUnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e2Zvcm0uTm9tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nYmctYmx1ZS0xMDAgYmxvY2sgc2hhZG93LWxnIHJvdWRlZCBweS00IHB4LTEyJyBwbGFjZWhvbGRlcj0nc2V1ZW1haWxAZW1haWwuY29tJyBuYW1lPSdFbWFpbCcgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17Zm9ybS5FbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPldoYXRzYXBwOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nYmctYmx1ZS0xMDAgYmxvY2sgc2hhZG93LWxnIHJvdWRlZCBweS00IHB4LTEyJyBwbGFjZWhvbGRlcj0nREREWFhYWFhYWFhYJyBuYW1lPSdXaGF0c2FwcCcgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17Zm9ybS5XaGF0c2FwcH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPk5vdGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtub3Rhcy5tYXAobm90YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIHctMS82Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdGF9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nTm90YScgdmFsdWU9e25vdGF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgbXQtNCBweS00IHB4LTEyIGZvbnQtYm9sZCByb3VuZGVkLW1kIHNoYWRvdy1sZ1wiIG9uQ2xpY2s9e3NhdmV9PlNhbHZhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAge3N1Y2VzcyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdy0xLzInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWItNiBiZy1ibHVlLTEwMCBib3JkZXItdCBib3JkZXItYiBib3JkZXItYmx1ZS01MDAgdGV4dC1ibHVlLTcwMCBweC00IHB5LTMnPk9icmlnYWRvIHBlbGEgY29udHJpYnVpw6fDo28hPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXRvcm5vLnNob3dDdXBvbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMSBib3JkZXIgcHgtNCBweS0zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldSBDdXBvbTogPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21iLTQgZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC0yeGwnPntyZXRvcm5vLkN1cG9tfTwvc3Bhbj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nIHRleHQtYmxhY2snPntmb3JtLk5vbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQgYm9yZGVyIHB4LTQgcHktMyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nIHRleHQtYmxhY2snPntyZXRvcm5vLlByb21vfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBpdGFsaWMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHJlc2VudGUgdW1hIGZvdG8gZGVzdGEgdGVsYSBuYSBzdWEgcHLDs3hpbWEgY29tcHJhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN1Z2VzdGFvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInN1Z2VzdGFvIiwibm90YXMiLCJOb21lIiwiRW1haWwiLCJXaGF0c2FwcCIsIk5vdGEiLCJmb3JtIiwic2V0Rm9ybSIsInN1Y2VzcyIsIlNldFN1Y2NlcyIsInJldG9ybm8iLCJzZXRSZXRvcm5vIiwic2F2ZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwib25DaGFuZ2UiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleSIsIm5hbWUiLCJvbGQiLCJtYXAiLCJub3RhIiwic2hvd0N1cG9tIiwiQ3Vwb20iLCJQcm9tbyJdLCJzb3VyY2VSb290IjoiIn0=