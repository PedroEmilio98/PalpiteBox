"use strict";
(() => {
var exports = {};
exports.id = "pages/api/get-promo";
exports.ids = ["pages/api/get-promo"];
exports.modules = {

/***/ "./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ "google-spreadsheet");
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);

const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet(process.env.SHEET_ID);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    //await doc.useServiceAccountAuth(credentials);
    doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells('A3:B3');
    const mostrarPromocaoCell = sheet.getCell(2, 0);
    const textoCell = sheet.getCell(2, 1);
    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'Verdadeiro',
      message: textoCell.value
    }));
  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }));
  }
});

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("google-spreadsheet");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/get-promo.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUQsaUVBQUosQ0FBc0JFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFsQyxDQUFaO0FBS0EsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUk7QUFDQTtBQUNBTCxJQUFBQSxHQUFHLENBQUNNLHFCQUFKLENBQTBCO0FBQ3RCQyxNQUFBQSxZQUFZLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxrQkFESjtBQUV0QkMsTUFBQUEsV0FBVyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFGSCxLQUExQjtBQUlBLFVBQU1WLEdBQUcsQ0FBQ1csUUFBSixFQUFOO0FBRUEsVUFBTUMsS0FBSyxHQUFHWixHQUFHLENBQUNhLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1ELEtBQUssQ0FBQ0UsU0FBTixDQUFnQixPQUFoQixDQUFOO0FBR0EsVUFBTUMsbUJBQW1CLEdBQUdILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBNUI7QUFDQSxVQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBbEI7QUFHQVgsSUFBQUEsR0FBRyxDQUFDYSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxNQUFBQSxVQUFVLEVBQUVOLG1CQUFtQixDQUFDTyxLQUFwQixLQUE4QixZQUR2QjtBQUVuQkMsTUFBQUEsT0FBTyxFQUFFTixTQUFTLENBQUNLO0FBRkEsS0FBZixDQUFSO0FBSUgsR0FwQkQsQ0FxQkEsT0FBT0UsR0FBUCxFQUFZO0FBQ1JuQixJQUFBQSxHQUFHLENBQUNhLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLE1BQUFBLFVBQVUsRUFBRSxLQURPO0FBRW5CRSxNQUFBQSxPQUFPLEVBQUU7QUFGVSxLQUFmLENBQVI7QUFJSDtBQUNKLENBNUJEOzs7Ozs7Ozs7O0FDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QYWxwaXRlQm94Ly4vcGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQsIH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0JztcclxuXHJcblxyXG5jb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQocHJvY2Vzcy5lbnYuU0hFRVRfSUQpXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9hd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKGNyZWRlbnRpYWxzKTtcclxuICAgICAgICBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKHtcclxuICAgICAgICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5TSEVFVF9DTElFTlRfRU1BSUwsXHJcbiAgICAgICAgICAgIHByaXZhdGVfa2V5OiBwcm9jZXNzLmVudi5TSEVFVF9QUklWQVRFX0tFWVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgZG9jLmxvYWRJbmZvKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMl07XHJcbiAgICAgICAgYXdhaXQgc2hlZXQubG9hZENlbGxzKCdBMzpCMycpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbW9zdHJhclByb21vY2FvQ2VsbCA9IHNoZWV0LmdldENlbGwoMiwgMCk7XHJcbiAgICAgICAgY29uc3QgdGV4dG9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgyLCAxKTtcclxuXHJcblxyXG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBzaG93Q291cG9uOiBtb3N0cmFyUHJvbW9jYW9DZWxsLnZhbHVlID09PSAnVmVyZGFkZWlybycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRleHRvQ2VsbC52YWx1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBzaG93Q291cG9uOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJydcclxuICAgICAgICB9KSlcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1zcHJlYWRzaGVldFwiKTsiXSwibmFtZXMiOlsiR29vZ2xlU3ByZWFkc2hlZXQiLCJkb2MiLCJwcm9jZXNzIiwiZW52IiwiU0hFRVRfSUQiLCJyZXEiLCJyZXMiLCJ1c2VTZXJ2aWNlQWNjb3VudEF1dGgiLCJjbGllbnRfZW1haWwiLCJTSEVFVF9DTElFTlRfRU1BSUwiLCJwcml2YXRlX2tleSIsIlNIRUVUX1BSSVZBVEVfS0VZIiwibG9hZEluZm8iLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJsb2FkQ2VsbHMiLCJtb3N0cmFyUHJvbW9jYW9DZWxsIiwiZ2V0Q2VsbCIsInRleHRvQ2VsbCIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93Q291cG9uIiwidmFsdWUiLCJtZXNzYWdlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==