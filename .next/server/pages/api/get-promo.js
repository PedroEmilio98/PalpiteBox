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
/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../credentials.json */ "./credentials.json");


const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet('17Vr2_Sq7wf7MCb6DPhq8GYEFsmXOaJMsO17GpfRleRE');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    await doc.useServiceAccountAuth(_credentials_json__WEBPACK_IMPORTED_MODULE_1__);
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

/***/ }),

/***/ "./credentials.json":
/*!**************************!*\
  !*** ./credentials.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"palpitebox-324817","private_key_id":"7fdf95283c58d09a624a1d03356c4a6fb453ba87","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6mGFKK7xPV9VE\\nqz3aCQ7FZUHiMecoZmCD1k/ywayWEiTpMMAthzj5SUidyPgNzNSdj0d4q+/IAKsp\\nFnAgwECTPRcsxSk6pQe9zYHz1HzkgzM+lZONBcvL4YRChshJHVzHZg9FwHMDVEnq\\nbgWOD57NwTEtEI7Ky3TkxCq0wGZHFB32yaXtup0Q8cDcNMo1/jY5WWyv8dXVzZTX\\nofuBk9OhDmQm4zgqTkXOxHGoISwFXyaDmz7ksbbIu5QPKFA6gYekjUv3jsxRxK7G\\nc+skUgUp87ypq+BLh7M0vY1mfFxW+zJLLCo5oZdPJvG5uz00brNhUGdJ1bh4Byx4\\nzjtS8XRnAgMBAAECggEACrTwrDFbQlA/aAvNZkPryY7YW3LSmUJammYDO2I6lXfg\\nD1NhS5t9POykEo20EhKlRo8woi93eEn1iEuFzpNJgUlZmZOMnJVYnt76bHPOYMxY\\ndeheSZLCEWZU0P5r4qohJz3ndXCoCNJe1WlPv0mNKrBBspzHHMLU58WLz8hUdhKL\\n2YTqMZ0CqZQ6lRfZUhVor+hdn9o6EU1VACrG6wYh39/BBLyBT9Wsad4sHpGR0coq\\nB9UOuGi2EzhKrSx0MKO9iLjQbAknruuyXTpsmb55yKFsHivCLxYjUDuPjRi1uMky\\nZ1iK3pJEVb9DxMyXR+3zAH4iGkE81knxlxfGxhfa4QKBgQDeiG8RHj7MbiT5gjOG\\nFAFtQyjVyF0rWq39IWoqKVOk2NjUp9nyaS2+94u7A51qrLMIk1unO4+NSJ0YQVQD\\n4Trq5dvgdQ/7bv/J5crnDLqcaagjJENo0leoSjl4gVZW9KeDVfCOHLYYjjq6Pvx6\\npFlArh0ah4fIJ/Ws75L19BDnoQKBgQDWqFYtBtDKBsbpxrFrNofhRv4TKZ/naDSB\\nYgXphniOfx7uvDwn8q/66FY5rDHD6KeAAJSmXgza+ruto1dJLUT3dXQbkIw+/mHS\\n8dRtFof0O1QpDZpGMmaUEGipZG7XOpN1MUeTmICwr7oLKFlAzvhrFFXxrk0MJ3Ee\\nhnMRgWq/BwKBgGFk3w9j6GI6lq4pAPneiZ1TdmzSa4yM/Hc8B6X6PmR4j7XK3MWO\\nqPnah+pKs7u7aAQJ0mRH2hUgwbia5vVnvwyNm4UKVvtZYlPv4bTrykSorXDr7yDS\\nZpD+I1cNbEdUfngpxcW85SmsHiHjbUcT5Qg86/nvdUrxykFs/SnuLvPhAoGAQicM\\nr8Gq9KfUA1WldboPdCCxymwIiIM3syvnUImNe7S3brF6BIGpNDUH5awohgycGjmT\\nlhXj9lRRJHjzPG0EFRMQXjJU1lEFCsJWSewop97k1+YGRl3f+P95kcKO2iuGKBaw\\nzU6xUkJFnoynvO5L5owU1G939Sful46txZZRtF8CgYB5l/KORDnELG7WXlNc7Xd3\\nCO5QtJ8y8uHyJ6xtrmehtYGCJO3ko71wW4THNyvr2e6dUons3TW26mIsQqRtV8l4\\nFG8pFFPTOe/6/qfQ942/bs5Xl+ZcqzmIwCVLN1nZL6WugHFCgxT6vo9PSmddgAMR\\nZ15WHKDYxC0ROeUvbbfFZA==\\n-----END PRIVATE KEY-----\\n","client_email":"palpiteboxadm@palpitebox-324817.iam.gserviceaccount.com","client_id":"114159324717254548336","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/palpiteboxadm%40palpitebox-324817.iam.gserviceaccount.com"}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxHQUFHLEdBQUcsSUFBSUYsaUVBQUosQ0FBc0IsOENBQXRCLENBQVo7QUFHQSxpRUFBZSxPQUFPRyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsTUFBSTtBQUNBLFVBQU1GLEdBQUcsQ0FBQ0cscUJBQUosQ0FBMEJKLDhDQUExQixDQUFOO0FBQ0EsVUFBTUMsR0FBRyxDQUFDSSxRQUFKLEVBQU47QUFFQSxVQUFNQyxLQUFLLEdBQUdMLEdBQUcsQ0FBQ00sYUFBSixDQUFrQixDQUFsQixDQUFkO0FBQ0EsVUFBTUQsS0FBSyxDQUFDRSxTQUFOLENBQWdCLE9BQWhCLENBQU47QUFHQSxVQUFNQyxtQkFBbUIsR0FBR0gsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUE1QjtBQUNBLFVBQU1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFsQjtBQUdBUCxJQUFBQSxHQUFHLENBQUNTLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLE1BQUFBLFVBQVUsRUFBRU4sbUJBQW1CLENBQUNPLEtBQXBCLEtBQThCLFlBRHZCO0FBRW5CQyxNQUFBQSxPQUFPLEVBQUVOLFNBQVMsQ0FBQ0s7QUFGQSxLQUFmLENBQVI7QUFJSCxHQWhCRCxDQWlCQSxPQUFPRSxHQUFQLEVBQVk7QUFDUmYsSUFBQUEsR0FBRyxDQUFDUyxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxNQUFBQSxVQUFVLEVBQUUsS0FETztBQUVuQkUsTUFBQUEsT0FBTyxFQUFFO0FBRlUsS0FBZixDQUFSO0FBSUg7QUFDSixDQXhCRDs7Ozs7Ozs7OztBQ05BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUGFscGl0ZUJveC8uL3BhZ2VzL2FwaS9nZXQtcHJvbW8uanMiLCJ3ZWJwYWNrOi8vUGFscGl0ZUJveC9leHRlcm5hbCBcImdvb2dsZS1zcHJlYWRzaGVldFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZVNwcmVhZHNoZWV0LCB9IGZyb20gJ2dvb2dsZS1zcHJlYWRzaGVldCc7XHJcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuLi8uLi9jcmVkZW50aWFscy5qc29uJztcclxuXHJcbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldCgnMTdWcjJfU3E3d2Y3TUNiNkRQaHE4R1lFRnNtWE9hSk1zTzE3R3BmUmxlUkUnKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKGNyZWRlbnRpYWxzKTtcclxuICAgICAgICBhd2FpdCBkb2MubG9hZEluZm8oKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsyXTtcclxuICAgICAgICBhd2FpdCBzaGVldC5sb2FkQ2VsbHMoJ0EzOkIzJyk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBtb3N0cmFyUHJvbW9jYW9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgyLCAwKTtcclxuICAgICAgICBjb25zdCB0ZXh0b0NlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDEpO1xyXG5cclxuXHJcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNob3dDb3Vwb246IG1vc3RyYXJQcm9tb2Nhb0NlbGwudmFsdWUgPT09ICdWZXJkYWRlaXJvJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogdGV4dG9DZWxsLnZhbHVlXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNob3dDb3Vwb246IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIpOyJdLCJuYW1lcyI6WyJHb29nbGVTcHJlYWRzaGVldCIsImNyZWRlbnRpYWxzIiwiZG9jIiwicmVxIiwicmVzIiwidXNlU2VydmljZUFjY291bnRBdXRoIiwibG9hZEluZm8iLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJsb2FkQ2VsbHMiLCJtb3N0cmFyUHJvbW9jYW9DZWxsIiwiZ2V0Q2VsbCIsInRleHRvQ2VsbCIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93Q291cG9uIiwidmFsdWUiLCJtZXNzYWdlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==