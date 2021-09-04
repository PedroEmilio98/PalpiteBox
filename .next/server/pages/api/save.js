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
/* harmony import */ var _credentials_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../credentials.json */ "./credentials.json");



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
var __webpack_exports__ = (__webpack_exec__("./pages/api/save.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3NhdmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1HLEdBQUcsR0FBRyxJQUFJSCxpRUFBSixDQUFzQkksT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQWxDLENBQVo7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLE1BQU07QUFDeEIsUUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNSLDZDQUFNLEdBQUdTLE1BQVQsQ0FBZ0IsaUJBQWhCLENBQUQsQ0FBUixDQUE2Q0MsUUFBN0MsQ0FBc0QsRUFBdEQsRUFBMERDLFdBQTFELEVBQWI7QUFDQSxTQUFPSixJQUFJLENBQUNLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLElBQXVCLEdBQXZCLEdBQTZCTCxJQUFJLENBQUNLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQTdCLEdBQW9ELEdBQXBELEdBQTBETCxJQUFJLENBQUNLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWpFO0FBQ0gsQ0FIRDs7QUFLQSxpRUFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsTUFBSTtBQUNBWixJQUFBQSxHQUFHLENBQUNhLHFCQUFKLENBQTBCO0FBQ3RCQyxNQUFBQSxZQUFZLEVBQUViLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxrQkFESjtBQUV0QkMsTUFBQUEsV0FBVyxFQUFFZixPQUFPLENBQUNDLEdBQVIsQ0FBWWU7QUFGSCxLQUExQjtBQUlBLFVBQU1qQixHQUFHLENBQUNrQixRQUFKLEVBQU47QUFDQSxVQUFNQyxLQUFLLEdBQUduQixHQUFHLENBQUNvQixhQUFKLENBQWtCLENBQWxCLENBQWQ7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixHQUFHLENBQUNhLElBQWYsQ0FBYjtBQUVBLFVBQU1DLFdBQVcsR0FBR3pCLEdBQUcsQ0FBQ29CLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBcEI7QUFDQSxVQUFNSyxXQUFXLENBQUNDLFNBQVosQ0FBc0IsT0FBdEIsQ0FBTjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHRixXQUFXLENBQUNHLE9BQVosQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBNUI7QUFDQSxVQUFNQyxTQUFTLEdBQUdKLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFsQjtBQUVBLFFBQUlFLEtBQUssR0FBRyxFQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsUUFBSUosbUJBQW1CLENBQUNLLEtBQXBCLEtBQThCLFlBQWxDLEVBQWdEO0FBQzVDRixNQUFBQSxLQUFLLEdBQUcxQixhQUFhLEVBQXJCO0FBQ0EyQixNQUFBQSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0csS0FBbEI7QUFDSDs7QUFDRCxVQUFNYixLQUFLLENBQUNjLE1BQU4sQ0FBYTtBQUNmQyxNQUFBQSxJQUFJLEVBQUViLElBQUksQ0FBQ2EsSUFESTtBQUVmQyxNQUFBQSxLQUFLLEVBQUVkLElBQUksQ0FBQ2MsS0FGRztBQUdmQyxNQUFBQSxRQUFRLEVBQUVmLElBQUksQ0FBQ2UsUUFIQTtBQUlmLDJCQUFxQnRDLDZDQUFNLEdBQUdTLE1BQVQsQ0FBZ0IsbUJBQWhCLENBSk47QUFLZjhCLE1BQUFBLElBQUksRUFBRS9CLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDZ0IsSUFBTixDQUxDO0FBTWZQLE1BQUFBLEtBTmU7QUFPZkMsTUFBQUE7QUFQZSxLQUFiLENBQU47QUFTQW5CLElBQUFBLEdBQUcsQ0FBQzBCLEdBQUosQ0FBUWhCLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZTtBQUNuQkMsTUFBQUEsU0FBUyxFQUFFVixLQUFLLEtBQUssRUFERjtBQUVuQkEsTUFBQUEsS0FGbUI7QUFHbkJDLE1BQUFBO0FBSG1CLEtBQWYsQ0FBUjtBQUtILEdBbkNELENBb0NBLE9BQU9VLEdBQVAsRUFBWTtBQUNSQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNIO0FBQ0osQ0F4Q0Q7Ozs7Ozs7Ozs7QUNaQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUGFscGl0ZUJveC8uL3BhZ2VzL2FwaS9zYXZlLmpzIiwid2VicGFjazovL1BhbHBpdGVCb3gvZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIiIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwibW9tZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEdvb2dsZVNwcmVhZHNoZWV0LCB9IGZyb20gJ2dvb2dsZS1zcHJlYWRzaGVldCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGNyZWRlbnRpYWxzIGZyb20gJy4uLy4uL2NyZWRlbnRpYWxzLmpzb24nO1xyXG5cclxuY29uc3QgZG9jID0gbmV3IEdvb2dsZVNwcmVhZHNoZWV0KHByb2Nlc3MuZW52LlNIRUVUX0lEKTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlQ3Vwb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlID0gcGFyc2VJbnQobW9tZW50KCkuZm9ybWF0KCdZWU1NRERra21tc3NTU1MnKSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gY29kZS5zdWJzdHJpbmcoMCwgNCkgKyAnLScgKyBjb2RlLnN1YnN0cmluZyg0LCA4KSArICctJyArIGNvZGUuc3Vic3RyaW5nKDgsIDEyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoe1xyXG4gICAgICAgICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LlNIRUVUX0NMSUVOVF9FTUFJTCxcclxuICAgICAgICAgICAgcHJpdmF0ZV9rZXk6IHByb2Nlc3MuZW52LlNIRUVUX1BSSVZBVEVfS0VZXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCBkb2MubG9hZEluZm8oKTtcclxuICAgICAgICBjb25zdCBzaGVldCA9IGRvYy5zaGVldHNCeUluZGV4WzFdO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hlZXRDb25maWcgPSBkb2Muc2hlZXRzQnlJbmRleFsyXTtcclxuICAgICAgICBhd2FpdCBzaGVldENvbmZpZy5sb2FkQ2VsbHMoJ0EzOkIzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vc3RyYXJQcm9tb2Nhb0NlbGwgPSBzaGVldENvbmZpZy5nZXRDZWxsKDIsIDApO1xyXG4gICAgICAgIGNvbnN0IHRleHRvQ2VsbCA9IHNoZWV0Q29uZmlnLmdldENlbGwoMiwgMSk7XHJcblxyXG4gICAgICAgIGxldCBDdXBvbSA9ICcnO1xyXG4gICAgICAgIGxldCBQcm9tbyA9ICcnO1xyXG4gICAgICAgIGlmIChtb3N0cmFyUHJvbW9jYW9DZWxsLnZhbHVlID09PSAnVmVyZGFkZWlybycpIHtcclxuICAgICAgICAgICAgQ3Vwb20gPSBnZW5lcmF0ZUN1cG9tKCk7XHJcbiAgICAgICAgICAgIFByb21vID0gdGV4dG9DZWxsLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBzaGVldC5hZGRSb3coe1xyXG4gICAgICAgICAgICBOb21lOiBkYXRhLk5vbWUsXHJcbiAgICAgICAgICAgIEVtYWlsOiBkYXRhLkVtYWlsLFxyXG4gICAgICAgICAgICBXaGF0c2FwcDogZGF0YS5XaGF0c2FwcCxcclxuICAgICAgICAgICAgJ0RhdGEgZGEgYXZhbGlhw6fDo28nOiBtb21lbnQoKS5mb3JtYXQoJ0REL01NL1lZWVksIGtrOm1tJyksXHJcbiAgICAgICAgICAgIE5vdGE6IHBhcnNlSW50KGRhdGEuTm90YSksXHJcbiAgICAgICAgICAgIEN1cG9tLFxyXG4gICAgICAgICAgICBQcm9tbyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBzaG93Q3Vwb206IEN1cG9tICE9PSBcIlwiLFxyXG4gICAgICAgICAgICBDdXBvbSxcclxuICAgICAgICAgICAgUHJvbW9cclxuICAgICAgICB9KSlcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwibmFtZXMiOlsiR29vZ2xlU3ByZWFkc2hlZXQiLCJtb21lbnQiLCJjcmVkZW50aWFscyIsImRvYyIsInByb2Nlc3MiLCJlbnYiLCJTSEVFVF9JRCIsImdlbmVyYXRlQ3Vwb20iLCJjb2RlIiwicGFyc2VJbnQiLCJmb3JtYXQiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicmVxIiwicmVzIiwidXNlU2VydmljZUFjY291bnRBdXRoIiwiY2xpZW50X2VtYWlsIiwiU0hFRVRfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZV9rZXkiLCJTSEVFVF9QUklWQVRFX0tFWSIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJzaGVldENvbmZpZyIsImxvYWRDZWxscyIsIm1vc3RyYXJQcm9tb2Nhb0NlbGwiLCJnZXRDZWxsIiwidGV4dG9DZWxsIiwiQ3Vwb20iLCJQcm9tbyIsInZhbHVlIiwiYWRkUm93IiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJOb3RhIiwiZW5kIiwic3RyaW5naWZ5Iiwic2hvd0N1cG9tIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=