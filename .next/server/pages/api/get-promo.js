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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUQsaUVBQUosQ0FBc0JFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFsQyxDQUFaO0FBR0EsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUk7QUFDQTtBQUNBTCxJQUFBQSxHQUFHLENBQUNNLHFCQUFKLENBQTBCO0FBQ3RCQyxNQUFBQSxZQUFZLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxrQkFESjtBQUV0QkMsTUFBQUEsV0FBVyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFGSCxLQUExQjtBQUlBLFVBQU1WLEdBQUcsQ0FBQ1csUUFBSixFQUFOO0FBRUEsVUFBTUMsS0FBSyxHQUFHWixHQUFHLENBQUNhLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1ELEtBQUssQ0FBQ0UsU0FBTixDQUFnQixPQUFoQixDQUFOO0FBR0EsVUFBTUMsbUJBQW1CLEdBQUdILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBNUI7QUFDQSxVQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBbEI7QUFHQVgsSUFBQUEsR0FBRyxDQUFDYSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxNQUFBQSxVQUFVLEVBQUVOLG1CQUFtQixDQUFDTyxLQUFwQixLQUE4QixZQUR2QjtBQUVuQkMsTUFBQUEsT0FBTyxFQUFFTixTQUFTLENBQUNLO0FBRkEsS0FBZixDQUFSO0FBSUgsR0FwQkQsQ0FxQkEsT0FBT0UsR0FBUCxFQUFZO0FBQ1JuQixJQUFBQSxHQUFHLENBQUNhLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLE1BQUFBLFVBQVUsRUFBRSxLQURPO0FBRW5CRSxNQUFBQSxPQUFPLEVBQUU7QUFGVSxLQUFmLENBQVI7QUFJSDtBQUNKLENBNUJEOzs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QYWxwaXRlQm94Ly4vcGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQsIH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0JztcclxuXHJcblxyXG5jb25zdCBkb2MgPSBuZXcgR29vZ2xlU3ByZWFkc2hlZXQocHJvY2Vzcy5lbnYuU0hFRVRfSUQpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vYXdhaXQgZG9jLnVzZVNlcnZpY2VBY2NvdW50QXV0aChjcmVkZW50aWFscyk7XHJcbiAgICAgICAgZG9jLnVzZVNlcnZpY2VBY2NvdW50QXV0aCh7XHJcbiAgICAgICAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuU0hFRVRfQ0xJRU5UX0VNQUlMLFxyXG4gICAgICAgICAgICBwcml2YXRlX2tleTogcHJvY2Vzcy5lbnYuU0hFRVRfUFJJVkFURV9LRVlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpO1xyXG5cclxuICAgICAgICBjb25zdCBzaGVldCA9IGRvYy5zaGVldHNCeUluZGV4WzJdO1xyXG4gICAgICAgIGF3YWl0IHNoZWV0LmxvYWRDZWxscygnQTM6QjMnKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG1vc3RyYXJQcm9tb2Nhb0NlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDApO1xyXG4gICAgICAgIGNvbnN0IHRleHRvQ2VsbCA9IHNoZWV0LmdldENlbGwoMiwgMSk7XHJcblxyXG5cclxuICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc2hvd0NvdXBvbjogbW9zdHJhclByb21vY2FvQ2VsbC52YWx1ZSA9PT0gJ1ZlcmRhZGVpcm8nLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiB0ZXh0b0NlbGwudmFsdWVcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc2hvd0NvdXBvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnb29nbGUtc3ByZWFkc2hlZXRcIik7Il0sIm5hbWVzIjpbIkdvb2dsZVNwcmVhZHNoZWV0IiwiZG9jIiwicHJvY2VzcyIsImVudiIsIlNIRUVUX0lEIiwicmVxIiwicmVzIiwidXNlU2VydmljZUFjY291bnRBdXRoIiwiY2xpZW50X2VtYWlsIiwiU0hFRVRfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZV9rZXkiLCJTSEVFVF9QUklWQVRFX0tFWSIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwibG9hZENlbGxzIiwibW9zdHJhclByb21vY2FvQ2VsbCIsImdldENlbGwiLCJ0ZXh0b0NlbGwiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsInZhbHVlIiwibWVzc2FnZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=