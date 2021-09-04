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



const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__.GoogleSpreadsheet('17Vr2_Sq7wf7MCb6DPhq8GYEFsmXOaJMsO17GpfRleRE');

const generateCupom = () => {
  const code = parseInt(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('YYMMDDkkmmssSSS')).toString(16).toUpperCase();
  return code.substring(0, 4) + '-' + code.substring(4, 8) + '-' + code.substring(8, 12);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  try {
    await doc.useServiceAccountAuth(_credentials_json__WEBPACK_IMPORTED_MODULE_2__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3NhdmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1HLEdBQUcsR0FBRyxJQUFJSCxpRUFBSixDQUFzQiw4Q0FBdEIsQ0FBWjs7QUFFQSxNQUFNSSxhQUFhLEdBQUcsTUFBTTtBQUN4QixRQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0wsNkNBQU0sR0FBR00sTUFBVCxDQUFnQixpQkFBaEIsQ0FBRCxDQUFSLENBQTZDQyxRQUE3QyxDQUFzRCxFQUF0RCxFQUEwREMsV0FBMUQsRUFBYjtBQUNBLFNBQU9KLElBQUksQ0FBQ0ssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsSUFBdUIsR0FBdkIsR0FBNkJMLElBQUksQ0FBQ0ssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBN0IsR0FBb0QsR0FBcEQsR0FBMERMLElBQUksQ0FBQ0ssU0FBTCxDQUFlLENBQWYsRUFBa0IsRUFBbEIsQ0FBakU7QUFDSCxDQUhEOztBQUtBLGlFQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUFJO0FBQ0EsVUFBTVQsR0FBRyxDQUFDVSxxQkFBSixDQUEwQlgsOENBQTFCLENBQU47QUFDQSxVQUFNQyxHQUFHLENBQUNXLFFBQUosRUFBTjtBQUNBLFVBQU1DLEtBQUssR0FBR1osR0FBRyxDQUFDYSxhQUFKLENBQWtCLENBQWxCLENBQWQ7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixHQUFHLENBQUNTLElBQWYsQ0FBYjtBQUVBLFVBQU1DLFdBQVcsR0FBR2xCLEdBQUcsQ0FBQ2EsYUFBSixDQUFrQixDQUFsQixDQUFwQjtBQUNBLFVBQU1LLFdBQVcsQ0FBQ0MsU0FBWixDQUFzQixPQUF0QixDQUFOO0FBRUEsVUFBTUMsbUJBQW1CLEdBQUdGLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUE1QjtBQUNBLFVBQU1DLFNBQVMsR0FBR0osV0FBVyxDQUFDRyxPQUFaLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQWxCO0FBRUEsUUFBSUUsS0FBSyxHQUFHLEVBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxRQUFJSixtQkFBbUIsQ0FBQ0ssS0FBcEIsS0FBOEIsWUFBbEMsRUFBZ0Q7QUFDNUNGLE1BQUFBLEtBQUssR0FBR3RCLGFBQWEsRUFBckI7QUFDQXVCLE1BQUFBLEtBQUssR0FBR0YsU0FBUyxDQUFDRyxLQUFsQjtBQUNIOztBQUNELFVBQU1iLEtBQUssQ0FBQ2MsTUFBTixDQUFhO0FBQ2ZDLE1BQUFBLElBQUksRUFBRWIsSUFBSSxDQUFDYSxJQURJO0FBRWZDLE1BQUFBLEtBQUssRUFBRWQsSUFBSSxDQUFDYyxLQUZHO0FBR2ZDLE1BQUFBLFFBQVEsRUFBRWYsSUFBSSxDQUFDZSxRQUhBO0FBSWYsMkJBQXFCL0IsNkNBQU0sR0FBR00sTUFBVCxDQUFnQixtQkFBaEIsQ0FKTjtBQUtmMEIsTUFBQUEsSUFBSSxFQUFFM0IsUUFBUSxDQUFDVyxJQUFJLENBQUNnQixJQUFOLENBTEM7QUFNZlAsTUFBQUEsS0FOZTtBQU9mQyxNQUFBQTtBQVBlLEtBQWIsQ0FBTjtBQVNBZixJQUFBQSxHQUFHLENBQUNzQixHQUFKLENBQVFoQixJQUFJLENBQUNpQixTQUFMLENBQWU7QUFDbkJDLE1BQUFBLFNBQVMsRUFBRVYsS0FBSyxLQUFLLEVBREY7QUFFbkJBLE1BQUFBLEtBRm1CO0FBR25CQyxNQUFBQTtBQUhtQixLQUFmLENBQVI7QUFLSCxHQWhDRCxDQWlDQSxPQUFPVSxHQUFQLEVBQVk7QUFDUkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDSDtBQUNKLENBckNEOzs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1BhbHBpdGVCb3gvLi9wYWdlcy9hcGkvc2F2ZS5qcyIsIndlYnBhY2s6Ly9QYWxwaXRlQm94L2V4dGVybmFsIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIiLCJ3ZWJwYWNrOi8vUGFscGl0ZUJveC9leHRlcm5hbCBcIm1vbWVudFwiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBHb29nbGVTcHJlYWRzaGVldCwgfSBmcm9tICdnb29nbGUtc3ByZWFkc2hlZXQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBjcmVkZW50aWFscyBmcm9tICcuLi8uLi9jcmVkZW50aWFscy5qc29uJztcclxuXHJcbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldCgnMTdWcjJfU3E3d2Y3TUNiNkRQaHE4R1lFRnNtWE9hSk1zTzE3R3BmUmxlUkUnKTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlQ3Vwb20gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlID0gcGFyc2VJbnQobW9tZW50KCkuZm9ybWF0KCdZWU1NRERra21tc3NTU1MnKSkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gY29kZS5zdWJzdHJpbmcoMCwgNCkgKyAnLScgKyBjb2RlLnN1YnN0cmluZyg0LCA4KSArICctJyArIGNvZGUuc3Vic3RyaW5nKDgsIDEyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoY3JlZGVudGlhbHMpO1xyXG4gICAgICAgIGF3YWl0IGRvYy5sb2FkSW5mbygpO1xyXG4gICAgICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMV07XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG5cclxuICAgICAgICBjb25zdCBzaGVldENvbmZpZyA9IGRvYy5zaGVldHNCeUluZGV4WzJdO1xyXG4gICAgICAgIGF3YWl0IHNoZWV0Q29uZmlnLmxvYWRDZWxscygnQTM6QjMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9zdHJhclByb21vY2FvQ2VsbCA9IHNoZWV0Q29uZmlnLmdldENlbGwoMiwgMCk7XHJcbiAgICAgICAgY29uc3QgdGV4dG9DZWxsID0gc2hlZXRDb25maWcuZ2V0Q2VsbCgyLCAxKTtcclxuXHJcbiAgICAgICAgbGV0IEN1cG9tID0gJyc7XHJcbiAgICAgICAgbGV0IFByb21vID0gJyc7XHJcbiAgICAgICAgaWYgKG1vc3RyYXJQcm9tb2Nhb0NlbGwudmFsdWUgPT09ICdWZXJkYWRlaXJvJykge1xyXG4gICAgICAgICAgICBDdXBvbSA9IGdlbmVyYXRlQ3Vwb20oKTtcclxuICAgICAgICAgICAgUHJvbW8gPSB0ZXh0b0NlbGwudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHNoZWV0LmFkZFJvdyh7XHJcbiAgICAgICAgICAgIE5vbWU6IGRhdGEuTm9tZSxcclxuICAgICAgICAgICAgRW1haWw6IGRhdGEuRW1haWwsXHJcbiAgICAgICAgICAgIFdoYXRzYXBwOiBkYXRhLldoYXRzYXBwLFxyXG4gICAgICAgICAgICAnRGF0YSBkYSBhdmFsaWHDp8Ojbyc6IG1vbWVudCgpLmZvcm1hdCgnREQvTU0vWVlZWSwga2s6bW0nKSxcclxuICAgICAgICAgICAgTm90YTogcGFyc2VJbnQoZGF0YS5Ob3RhKSxcclxuICAgICAgICAgICAgQ3Vwb20sXHJcbiAgICAgICAgICAgIFByb21vLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNob3dDdXBvbTogQ3Vwb20gIT09IFwiXCIsXHJcbiAgICAgICAgICAgIEN1cG9tLFxyXG4gICAgICAgICAgICBQcm9tb1xyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnb29nbGUtc3ByZWFkc2hlZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyJdLCJuYW1lcyI6WyJHb29nbGVTcHJlYWRzaGVldCIsIm1vbWVudCIsImNyZWRlbnRpYWxzIiwiZG9jIiwiZ2VuZXJhdGVDdXBvbSIsImNvZGUiLCJwYXJzZUludCIsImZvcm1hdCIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJyZXEiLCJyZXMiLCJ1c2VTZXJ2aWNlQWNjb3VudEF1dGgiLCJsb2FkSW5mbyIsInNoZWV0Iiwic2hlZXRzQnlJbmRleCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJib2R5Iiwic2hlZXRDb25maWciLCJsb2FkQ2VsbHMiLCJtb3N0cmFyUHJvbW9jYW9DZWxsIiwiZ2V0Q2VsbCIsInRleHRvQ2VsbCIsIkN1cG9tIiwiUHJvbW8iLCJ2YWx1ZSIsImFkZFJvdyIsIk5vbWUiLCJFbWFpbCIsIldoYXRzYXBwIiwiTm90YSIsImVuZCIsInN0cmluZ2lmeSIsInNob3dDdXBvbSIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9