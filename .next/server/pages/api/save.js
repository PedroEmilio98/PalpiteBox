"use strict";
(() => {
var exports = {};
exports.id = "pages/api/save";
exports.ids = ["pages/api/save"];
exports.modules = {

/***/ "./pages/api/save.js":
/*!***************************!*\
  !*** ./pages/api/save.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ "google-spreadsheet");
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(process.env.SHEET_ID);

const generateCupom = () => {
  const code = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYMMDDkkmmssSSS')).toString(16).toUpperCase();
  return code.substring(0, 4) + '-' + code.substring(4, 8) + '-' + code.substring(8, 12);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);
    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A3:B3');
    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);
    let Cupom = '';
    let Promo = '';

    if (mostrarPromocaoCell.value === 'Verdadeiro') {
      Cupom = generateCupom();
      Promo = textoCell.value;
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      'Data da avaliação': moment__WEBPACK_IMPORTED_MODULE_1___default()().format('DD/MM/YYYY, kk:mm'),
      Nota: parseInt(data.Nota),
      Cupom,
      Promo
    });
    res.end(JSON.stringify({
      showCupom: Cupom !== "",
      Cupom,
      Promo
    }));
  } catch (err) {
    console.log(err);
  }
});

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("google-spreadsheet");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/save.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNYQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUGFscGl0ZUJveC8uL3BhZ2VzL2FwaS9zYXZlLmpzIiwid2VicGFjazovL1BhbHBpdGVCb3gvZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIiIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwibW9tZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEdvb2dsZVNwcmVhZHNoZWV0LCB9IGZyb20gJ2dvb2dsZS1zcHJlYWRzaGVldCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldChwcm9jZXNzLmVudi5TSEVFVF9JRCk7XHJcblxyXG5jb25zdCBnZW5lcmF0ZUN1cG9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29kZSA9IHBhcnNlSW50KG1vbWVudCgpLmZvcm1hdCgnWVlNTUREa2ttbXNzU1NTJykpLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGNvZGUuc3Vic3RyaW5nKDAsIDQpICsgJy0nICsgY29kZS5zdWJzdHJpbmcoNCwgOCkgKyAnLScgKyBjb2RlLnN1YnN0cmluZyg4LCAxMik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKHtcclxuICAgICAgICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5TSEVFVF9DTElFTlRfRU1BSUwsXHJcbiAgICAgICAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5TSEVFVF9QUklWQVRFX0tFWVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgZG9jLmxvYWRJbmZvKCk7XHJcbiAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsxXTtcclxuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoZWV0Q29uZmlnID0gZG9jLnNoZWV0c0J5SW5kZXhbMl07XHJcbiAgICAgICAgYXdhaXQgc2hlZXRDb25maWcubG9hZENlbGxzKCdBMzpCMycpO1xyXG5cclxuICAgICAgICBjb25zdCBtb3N0cmFyUHJvbW9jYW9DZWxsID0gc2hlZXRDb25maWcuZ2V0Q2VsbCgyLCAwKTtcclxuICAgICAgICBjb25zdCB0ZXh0b0NlbGwgPSBzaGVldENvbmZpZy5nZXRDZWxsKDIsIDEpO1xyXG5cclxuICAgICAgICBsZXQgQ3Vwb20gPSAnJztcclxuICAgICAgICBsZXQgUHJvbW8gPSAnJztcclxuICAgICAgICBpZiAobW9zdHJhclByb21vY2FvQ2VsbC52YWx1ZSA9PT0gJ1ZlcmRhZGVpcm8nKSB7XHJcbiAgICAgICAgICAgIEN1cG9tID0gZ2VuZXJhdGVDdXBvbSgpO1xyXG4gICAgICAgICAgICBQcm9tbyA9IHRleHRvQ2VsbC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgc2hlZXQuYWRkUm93KHtcclxuICAgICAgICAgICAgTm9tZTogZGF0YS5Ob21lLFxyXG4gICAgICAgICAgICBFbWFpbDogZGF0YS5FbWFpbCxcclxuICAgICAgICAgICAgV2hhdHNhcHA6IGRhdGEuV2hhdHNhcHAsXHJcbiAgICAgICAgICAgICdEYXRhIGRhIGF2YWxpYcOnw6NvJzogbW9tZW50KCkuZm9ybWF0KCdERC9NTS9ZWVlZLCBrazptbScpLFxyXG4gICAgICAgICAgICBOb3RhOiBwYXJzZUludChkYXRhLk5vdGEpLFxyXG4gICAgICAgICAgICBDdXBvbSxcclxuICAgICAgICAgICAgUHJvbW8sXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc2hvd0N1cG9tOiBDdXBvbSAhPT0gXCJcIixcclxuICAgICAgICAgICAgQ3Vwb20sXHJcbiAgICAgICAgICAgIFByb21vXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1zcHJlYWRzaGVldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7Il0sIm5hbWVzIjpbIkdvb2dsZVNwcmVhZHNoZWV0IiwibW9tZW50IiwiZG9jIiwicHJvY2VzcyIsImVudiIsIlNIRUVUX0lEIiwiZ2VuZXJhdGVDdXBvbSIsImNvZGUiLCJwYXJzZUludCIsImZvcm1hdCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJyZXEiLCJyZXMiLCJ1c2VTZXJ2aWNlQWNjb3VudEF1dGgiLCJjbGllbnRfZW1haWwiLCJTSEVFVF9DTElFTlRfRU1BSUwiLCJwcml2YXRlX2tleSIsIlNIRUVUX1BSSVZBVEVfS0VZIiwibG9hZEluZm8iLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInNoZWV0Q29uZmlnIiwibG9hZENlbGxzIiwibW9zdHJhclByb21vY2FvQ2VsbCIsImdldENlbGwiLCJ0ZXh0b0NlbGwiLCJDdXBvbSIsIlByb21vIiwidmFsdWUiLCJhZGRSb3ciLCJOb21lIiwiRW1haWwiLCJXaGF0c2FwcCIsIk5vdGEiLCJlbmQiLCJzdHJpbmdpZnkiLCJzaG93Q3Vwb20iLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==