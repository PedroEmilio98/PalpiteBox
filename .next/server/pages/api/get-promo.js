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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxHQUFHLEdBQUcsSUFBSUYsaUVBQUosQ0FBc0JHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFsQyxDQUFaO0FBR0EsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUk7QUFDQTtBQUNBTCxJQUFBQSxHQUFHLENBQUNNLHFCQUFKLENBQTBCO0FBQ3RCQyxNQUFBQSxZQUFZLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxrQkFESjtBQUV0QkMsTUFBQUEsV0FBVyxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVE7QUFGSCxLQUExQjtBQUlBLFVBQU1WLEdBQUcsQ0FBQ1csUUFBSixFQUFOO0FBRUEsVUFBTUMsS0FBSyxHQUFHWixHQUFHLENBQUNhLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1ELEtBQUssQ0FBQ0UsU0FBTixDQUFnQixPQUFoQixDQUFOO0FBR0EsVUFBTUMsbUJBQW1CLEdBQUdILEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBNUI7QUFDQSxVQUFNQyxTQUFTLEdBQUdMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBbEI7QUFHQVgsSUFBQUEsR0FBRyxDQUFDYSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxNQUFBQSxVQUFVLEVBQUVOLG1CQUFtQixDQUFDTyxLQUFwQixLQUE4QixZQUR2QjtBQUVuQkMsTUFBQUEsT0FBTyxFQUFFTixTQUFTLENBQUNLO0FBRkEsS0FBZixDQUFSO0FBSUgsR0FwQkQsQ0FxQkEsT0FBT0UsR0FBUCxFQUFZO0FBQ1JuQixJQUFBQSxHQUFHLENBQUNhLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLE1BQUFBLFVBQVUsRUFBRSxLQURPO0FBRW5CRSxNQUFBQSxPQUFPLEVBQUU7QUFGVSxLQUFmLENBQVI7QUFJSDtBQUNKLENBNUJEOzs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QYWxwaXRlQm94Ly4vcGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlU3ByZWFkc2hlZXQsIH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0JztcclxuaW1wb3J0IGNyZWRlbnRpYWxzIGZyb20gJy4uLy4uL2NyZWRlbnRpYWxzLmpzb24nO1xyXG5cclxuY29uc3QgZG9jID0gbmV3IEdvb2dsZVNwcmVhZHNoZWV0KHByb2Nlc3MuZW52LlNIRUVUX0lEKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2F3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoY3JlZGVudGlhbHMpO1xyXG4gICAgICAgIGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoe1xyXG4gICAgICAgICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LlNIRUVUX0NMSUVOVF9FTUFJTCxcclxuICAgICAgICAgICAgcHJpdmF0ZV9rZXk6IHByb2Nlc3MuZW52LlNIRUVUX1BSSVZBVEVfS0VZXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCBkb2MubG9hZEluZm8oKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsyXTtcclxuICAgICAgICBhd2FpdCBzaGVldC5sb2FkQ2VsbHMoJ0EzOkIzJyk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBtb3N0cmFyUHJvbW9jYW9DZWxsID0gc2hlZXQuZ2V0Q2VsbCgyLCAwKTtcclxuICAgICAgICBjb25zdCB0ZXh0b0NlbGwgPSBzaGVldC5nZXRDZWxsKDIsIDEpO1xyXG5cclxuXHJcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNob3dDb3Vwb246IG1vc3RyYXJQcm9tb2Nhb0NlbGwudmFsdWUgPT09ICdWZXJkYWRlaXJvJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogdGV4dG9DZWxsLnZhbHVlXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNob3dDb3Vwb246IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIpOyJdLCJuYW1lcyI6WyJHb29nbGVTcHJlYWRzaGVldCIsImNyZWRlbnRpYWxzIiwiZG9jIiwicHJvY2VzcyIsImVudiIsIlNIRUVUX0lEIiwicmVxIiwicmVzIiwidXNlU2VydmljZUFjY291bnRBdXRoIiwiY2xpZW50X2VtYWlsIiwiU0hFRVRfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZV9rZXkiLCJTSEVFVF9QUklWQVRFX0tFWSIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwibG9hZENlbGxzIiwibW9zdHJhclByb21vY2FvQ2VsbCIsImdldENlbGwiLCJ0ZXh0b0NlbGwiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsInZhbHVlIiwibWVzc2FnZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=