(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button icon-only (click)=\"goHome()\">\n        <ion-icon name=\"md-arrow-back\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center>\n  <div *ngIf=\"user\" class=\"success-background\">\n    <ion-avatar (click)=\"takePicture()\">\n      <img [src]=\"userImage\" alt=\"User Image\" *ngIf=\"!photo\" />\n      <img [src]=\"photo\" alt=\"User Image\" *ngIf=\"photo\" />\n    </ion-avatar>\n    <h1 text-center>{{ user.firstname + \" \" + user.lastname }}</h1>\n    <h2 text-center>{{ user.email }}</h2>\n    <ion-grid>\n      <ion-row align-items-center text-center class=\"row-header\">\n      </ion-row>\n      <ion-row align-items-center text-center>\n        \n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-list lines=\"none\" color=\"primary\">\n    <ion-item>\n      Cuenta\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-ios ion-toolbar {\n  --border-width: 0;\n}\n\nion-avatar {\n  text-align: center;\n  margin: 0 auto;\n  width: 100px;\n  height: 100px;\n}\n\nh1 {\n  margin-bottom: 0;\n}\n\nh2 {\n  margin-top: 0;\n  font-size: 16px;\n  margin-bottom: 32px;\n}\n\n.row-header {\n  font-size: 32px;\n  font-weight: bold;\n}\n\n.success-background {\n  background-color: var(--ion-color-success);\n  color: var(--ion-color-light);\n  padding-bottom: 32px;\n}\n\nion-list {\n  margin-top: 32px;\n}\n\nion-item {\n  --color: var(--ion-color-primary);\n  padding: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvQzpcXGZyYW1ld29ya3NcXGlvbmljNC1tdXNpYy1zdGFydGVyL3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLnJvdy1oZWFkZXIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnN1Y2Nlc3MtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuaW9uLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuaW9uLWl0ZW0ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuIiwiLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuaDEge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnJvdy1oZWFkZXIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VjY2Vzcy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG5cbmlvbi1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDAuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var SettingsPage = /** @class */ (function () {
    function SettingsPage(storage, navCtrl, sanitizer) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.userImage = "assets/img/user.jpg";
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("currentUser").then(function (value) {
            _this.user = value;
        });
    };
    SettingsPage.prototype.goHome = function () {
        this.navCtrl.navigateBack("/menu/tabs/home");
    };
    SettingsPage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Camera.getPhoto({
                            quality: 100,
                            allowEditing: false,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].DataUrl,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Camera
                        })];
                    case 1:
                        image = _a.sent();
                        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.dataUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map