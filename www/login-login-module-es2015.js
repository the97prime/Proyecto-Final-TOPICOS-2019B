(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <figure text-center>\n    <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" width=\"100px\" />\n  </figure>\n\n  <form\n    class=\"form\"\n    [formGroup]=\"validations_form\"\n    (ngSubmit)=\"loginUser(validations_form.value)\"\n  >\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Correo</ion-label>\n      <ion-icon name=\"mail-open\" slot=\"start\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div\n          class=\"error-message\"\n          *ngIf=\"\n            validations_form.get('email').hasError(validation.type) &&\n            (validations_form.get('email').dirty ||\n              validations_form.get('email').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"primary\">Contraseña</ion-label>\n      <ion-icon name=\"lock\" slot=\"start\"></ion-icon>\n      <ion-input\n        type=\"password\"\n        formControlName=\"password\"\n        class=\"form-controll\"\n        required\n      ></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div\n          class=\"error-message\"\n          *ngIf=\"\n            validations_form.get('password').hasError(validation.type) &&\n            (validations_form.get('password').dirty ||\n              validations_form.get('password').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-button\n      color=\"success\"\n      shape=\"round\"\n      class=\"submit-btn button-block\"\n      type=\"submit\"\n      [disabled]=\"!validations_form.valid\"\n      >Ingresar</ion-button\n    >\n\n    <label class=\"error-message\">{{ errorMessage }}</label>\n  </form>\n</ion-content>\n<ion-footer padding>\n  <ion-button\n    color=\"success\"\n    shape=\"round\"\n    fill=\"outline\"\n    class=\"button-block\"\n    type=\"submit\"\n    (click)=\"goToRegisterPage()\"\n    >Registrate!</ion-button\n  >\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        // Rutas Hijas
        path: "",
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submit-btn {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\nion-footer {\n  height: 144px;\n}\n\nion-footer > ion-button {\n  vertical-align: middle;\n  margin: 36px 0 36px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXGZyYW1ld29ya3NcXGlvbmljNC1tdXNpYy1zdGFydGVyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbn1cbmlvbi1mb290ZXIgPiBpb24tYnV0dG9uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAzNnB4IDAgMzZweCAwO1xufVxuIiwiLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgaGVpZ2h0OiAxNDRweDtcbn1cblxuaW9uLWZvb3RlciA+IGlvbi1idXR0b24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDM2cHggMCAzNnB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");






let LoginPage = class LoginPage {
    constructor(navCtrl, authService, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.errorMessage = "";
        this.validation_messages = {
            email: [
                { type: "required", message: "El email es requerido." },
                { type: "pattern", message: "Por favor ingrese un email válido" }
            ],
            password: [
                { type: "required", message: "El password es requerido." },
                {
                    type: "minlength",
                    message: "El password debe tener al menos 5 caracteres"
                }
            ]
        };
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
    loginUser(value) {
        this.authService
            .loginUser(value)
            .then(user => {
            if (user) {
                this.errorMessage = "";
                this.storage.set("isLogged", true);
                this.storage.set("currentUser", user);
                this.navCtrl.navigateForward("/menu/tabs/home");
            }
            else {
                this.errorMessage = "Usuario no existe";
            }
        })
            .catch(error => {
            this.errorMessage = error;
        });
    }
    goToRegisterPage() {
        this.navCtrl.navigateForward("/register");
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _services_authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map