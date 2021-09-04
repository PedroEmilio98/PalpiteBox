"use strict";
(() => {
var exports = {};
exports.id = "pages/sugestao";
exports.ids = ["pages/sugestao"];
exports.modules = {

/***/ "./Components/PageTitle/PageTitle.js":
/*!*******************************************!*\
  !*** ./Components/PageTitle/PageTitle.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\pedro\\Documentos\\programas\\DevPleno\\PalpiteBox\\Components\\PageTitle\\PageTitle.js";



const PageTitle = ({
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: [title, " - PalpiteBox"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTitle);

/***/ }),

/***/ "./pages/sugestao.js":
/*!***************************!*\
  !*** ./pages/sugestao.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/PageTitle/PageTitle */ "./Components/PageTitle/PageTitle.js");

var _jsxFileName = "C:\\Users\\pedro\\Documentos\\programas\\DevPleno\\PalpiteBox\\pages\\sugestao.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const sugestao = () => {
  const notas = [0, 1, 2, 3, 4, 5];
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: ''
  });
  const {
    0: sucess,
    1: SetSucces
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: retorno,
    1: setRetorno
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      SetSucces(true);
      setRetorno(data);
    } catch (err) {}
  };

  const onChange = evt => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm(old => _objectSpread(_objectSpread({}, old), {}, {
      [key]: value
    }));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mx-auto text-center p-4 w-2/5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
      title: "Sugestao"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-bold my-4",
      children: "Cr\xEDtica ou sugest\xE3o"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "mb-4 font-bold",
      children: ["O restaurante X sempre busca por atender melhor seus clientes.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 105
      }, undefined), "Por isso, estamos sempre abertos a ouvir a sua opini\xE3o."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined), !sucess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Email:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Whatsapp:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "font-bold",
          children: "Nota:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex py-4",
          children: notas.map(nota => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "block w-1/6 text-center ",
              children: [nota, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 43
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "radio",
                name: "Nota",
                value: nota,
                onChange: onChange
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 37
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "bg-blue-400 mt-4 py-4 px-12 font-bold rounded-md shadow-lg",
          onClick: save,
          children: "Salvar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }, undefined), sucess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-auto w-1/2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",
        children: "Obrigado pela contribui\xE7\xE3o!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }, undefined), retorno.showCupom && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-1 border px-4 py-3",
        children: ["Seu Cupom: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 40
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "mb-4 font-bold text-black text-2xl",
          children: retorno.Cupom
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 104
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: " text-black",
          children: form.Nome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-4 border px-4 py-3",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: " text-black",
          children: retorno.Promo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb-4 italic",
        children: "Apresente uma foto desta tela na sua pr\xF3xima compra"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sugestao);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sugestao.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBLGlCQTNCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTZDSCxDQTdFRDs7QUErRUEsaUVBQWVqQyxRQUFmOzs7Ozs7Ozs7O0FDcEZBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1BhbHBpdGVCb3gvLi9Db21wb25lbnRzL1BhZ2VUaXRsZS9QYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vUGFscGl0ZUJveC8uL3BhZ2VzL3N1Z2VzdGFvLmpzIiwid2VicGFjazovL1BhbHBpdGVCb3gvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IFBhZ2VUaXRsZSA9ICh7IHRpdGxlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9IC0gUGFscGl0ZUJveDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlVGl0bGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gJy4uL0NvbXBvbmVudHMvUGFnZVRpdGxlL1BhZ2VUaXRsZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHN1Z2VzdGFvID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5vdGFzID0gWzAsIDEsIDIsIDMsIDQsIDVdO1xyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIE5vbWU6ICcnLFxyXG4gICAgICAgIEVtYWlsOiAnJyxcclxuICAgICAgICBXaGF0c2FwcDogJycsXHJcbiAgICAgICAgTm90YTogJydcclxuICAgIH0pXHJcbiAgICBjb25zdCBbc3VjZXNzLCBTZXRTdWNjZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3JldG9ybm8sIHNldFJldG9ybm9dID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zYXZlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBTZXRTdWNjZXModHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFJldG9ybm8oZGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2dC50YXJnZXQubmFtZTtcclxuICAgICAgICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgICAgICAgICAuLi5vbGQsXHJcbiAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J214LWF1dG8gdGV4dC1jZW50ZXIgcC00IHctMi81Jz5cclxuICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT0nU3VnZXN0YW8nIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCBteS00Jz5DcsOtdGljYSBvdSBzdWdlc3TDo288L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTQgZm9udC1ib2xkJz5PIHJlc3RhdXJhbnRlIFggc2VtcHJlIGJ1c2NhIHBvciBhdGVuZGVyIG1lbGhvciBzZXVzIGNsaWVudGVzLjxiciAvPlxyXG4gICAgICAgICAgICAgICAgUG9yIGlzc28sIGVzdGFtb3Mgc2VtcHJlIGFiZXJ0b3MgYSBvdXZpciBhIHN1YSBvcGluacOjby48L3A+XHJcbiAgICAgICAgICAgIHshc3VjZXNzICYmIDxkaXYgY2xhc3NOYW1lPSd3LTEvMiBteC1hdXRvJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHRleHQtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkJz5TZXUgbm9tZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2JnLWJsdWUtMTAwIGJsb2NrIHNoYWRvdy1sZyByb3VkZWQgcHktNCBweC0xMicgcGxhY2Vob2xkZXI9J05vbWUnIG5hbWU9J05vbWUnIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e2Zvcm0uTm9tZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nYmctYmx1ZS0xMDAgYmxvY2sgc2hhZG93LWxnIHJvdWRlZCBweS00IHB4LTEyJyBwbGFjZWhvbGRlcj0nc2V1ZW1haWxAZW1haWwuY29tJyBuYW1lPSdFbWFpbCcgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17Zm9ybS5FbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPldoYXRzYXBwOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nYmctYmx1ZS0xMDAgYmxvY2sgc2hhZG93LWxnIHJvdWRlZCBweS00IHB4LTEyJyBwbGFjZWhvbGRlcj0nREREWFhYWFhYWFhYJyBuYW1lPSdXaGF0c2FwcCcgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17Zm9ybS5XaGF0c2FwcH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQnPk5vdGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBweS00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGFzLm1hcChub3RhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgdy0xLzYgdGV4dC1jZW50ZXIgJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vdGF9PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nTm90YScgdmFsdWU9e25vdGF9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBtdC00IHB5LTQgcHgtMTIgZm9udC1ib2xkIHJvdW5kZWQtbWQgc2hhZG93LWxnXCIgb25DbGljaz17c2F2ZX0+U2FsdmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICB7c3VjZXNzICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB3LTEvMic+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtYi02IGJnLWJsdWUtMTAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIHB4LTQgcHktMyc+T2JyaWdhZG8gcGVsYSBjb250cmlidWnDp8OjbyE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAge3JldG9ybm8uc2hvd0N1cG9tICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xIGJvcmRlciBweC00IHB5LTMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V1IEN1cG9tOiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWItNCBmb250LWJvbGQgdGV4dC1ibGFjayB0ZXh0LTJ4bCc+e3JldG9ybm8uQ3Vwb219PC9zcGFuPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScgdGV4dC1ibGFjayc+e2Zvcm0uTm9tZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBib3JkZXIgcHgtNCBweS0zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScgdGV4dC1ibGFjayc+e3JldG9ybm8uUHJvbW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00IGl0YWxpYyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcmVzZW50ZSB1bWEgZm90byBkZXN0YSB0ZWxhIG5hIHN1YSBwcsOzeGltYSBjb21wcmFcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3VnZXN0YW87IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiUGFnZVRpdGxlIiwidGl0bGUiLCJ1c2VTdGF0ZSIsInN1Z2VzdGFvIiwibm90YXMiLCJmb3JtIiwic2V0Rm9ybSIsIk5vbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiTm90YSIsInN1Y2VzcyIsIlNldFN1Y2NlcyIsInJldG9ybm8iLCJzZXRSZXRvcm5vIiwic2F2ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyIiwib25DaGFuZ2UiLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleSIsIm5hbWUiLCJvbGQiLCJtYXAiLCJub3RhIiwic2hvd0N1cG9tIiwiQ3Vwb20iLCJQcm9tbyJdLCJzb3VyY2VSb290IjoiIn0=