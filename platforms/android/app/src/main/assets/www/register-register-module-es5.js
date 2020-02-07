(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header padding>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goToLoginPage()\">\n        <ion-icon name=\"md-arrow-back\" size=\"large\" color=\"success\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <figure text-center>\n    <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" width=\"100px\" />\n  </figure>\n  <form\n    class=\"form\"\n    [formGroup]=\"validations_form\"\n    (ngSubmit)=\"tryRegister(validations_form.value)\"\n  >\n    <ion-item>\n      <ion-label position=\"floating\" color=\"success\">Nombre</ion-label>\n      <ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.firstname\">\n        <div\n          class=\"error-message\"\n          *ngIf=\"\n            validations_form.get('firstname').hasError(validation.type) &&\n            (validations_form.get('firstname').dirty ||\n              validations_form.get('firstname').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"success\">Apellido</ion-label>\n      <ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.lastname\">\n        <div\n          class=\"error-message\"\n          *ngIf=\"\n            validations_form.get('lastname').hasError(validation.type) &&\n            (validations_form.get('lastname').dirty ||\n              validations_form.get('lastname').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"success\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div\n          class=\"error-message\"\n          *ngIf=\"\n            validations_form.get('email').hasError(validation.type) &&\n            (validations_form.get('email').dirty ||\n              validations_form.get('email').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"success\">Contraseña</ion-label>\n      <ion-input\n        type=\"password\"\n        formControlName=\"password\"\n        class=\"form-controll\"\n        required\n      ></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\n        <div\n          class=\"error-message\"\n          *ngIf=\"\n            validations_form.get('password').hasError(validation.type) &&\n            (validations_form.get('password').dirty ||\n              validations_form.get('password').touched)\n          \"\n        >\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-button\n      shape=\"round\"\n      class=\"submit-btn button-block\"\n      color=\"success\"\n      type=\"submit\"\n      [disabled]=\"!validations_form.valid\"\n      >Register</ion-button\n    >\n    <label class=\"error-message\">{{ errorMessage }}</label>\n    <label class=\"success-message\">{{ successMessage }}</label>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: "",
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none;\n}\n\n.submit-btn {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.header-ios ion-toolbar {\n  --border-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXGZyYW1ld29ya3NcXGlvbmljNC1tdXNpYy1zdGFydGVyL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLnN1Ym1pdC1idG4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuIiwiLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXIge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = "";
        this.successMessage = "";
        this.validation_messages = {
            email: [
                { type: "required", message: "El email es requerido" },
                { type: "pattern", message: "Ingresa un email válido." }
            ],
            password: [
                { type: "required", message: "La contraseña es obligatoria." },
                {
                    type: "minlength",
                    message: "La contraseña debe tener al menos 5 caracteres."
                }
            ],
            lastname: [
                { type: "required", message: "El apellido es requerido." },
                {
                    type: "minlength",
                    message: "El apellido debe tener mínimo tres letras."
                }
            ],
            firstname: [
                { type: "required", message: "El nombre es requerido." },
                {
                    type: "minlength",
                    message: "El nombre debe tener mínimo tres letras."
                }
            ]
        };
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
    }
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService
            .registerUser(value)
            .then(function (a) {
            console.log(a);
            _this.errorMessage = "";
            _this.successMessage = "Tu cuenta se ha creado con éxito.";
            setTimeout(function () {
                _this.navCtrl.navigateForward("/login");
            }, 1000);
        })
            .catch(function (error) {
            _this.errorMessage = error;
            _this.successMessage = "";
        });
    };
    RegisterPage.prototype.goToLoginPage = function () {
        this.navCtrl.navigateBack("/login");
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _services_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map