(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["intro-intro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/intro/intro.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/intro/intro.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let slide of slides\">\n      <ion-icon name=\"close\" (click)=\"finish()\"></ion-icon>\n      <img [src]=\"slide.imageSrc\" alt=\"{{ slide.imageAlt }}\" />\n      <h1>{{ slide.title }}</h1>\n      <h2>{{ slide.subTitle }}</h2>\n      <p>\n        {{ slide.description }}\n      </p>\n      <ion-icon name=\"{{ slide.icon }}\"></ion-icon>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/intro/intro.page.ts");







var routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]
    }
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
        })
    ], IntroPageModule);
    return IntroPageModule;
}());



/***/ }),

/***/ "./src/app/intro/intro.page.scss":
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #abd16e;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nion-slides {\n  background-color: white;\n  height: calc(100% - 32px);\n  max-width: 800px;\n  margin: 16px 16px 0px 16px;\n}\n\n.swiper-slide {\n  display: block;\n  margin-bottom: 64px;\n  background-color: white;\n}\n\nion-slide > h1,\nh2 {\n  margin: 0 0 0 0;\n  color: var(--ion-color-primary);\n}\n\nion-slide > p {\n  font-style: italic;\n  font-size: 22px;\n  padding: 1em 1em 1em 1em;\n}\n\nion-slide > ion-icon {\n  color: #abd16e;\n  font-size: 48px;\n}\n\nion-slide > ion-icon[name=close] {\n  float: right;\n  color: var(--ion-color-primary);\n  font-size: 48px;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 64px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50cm8vQzpcXGZyYW1ld29ya3NcXGlvbmljNC1tdXNpYy1zdGFydGVyL3NyY1xcYXBwXFxpbnRyb1xcaW50cm8ucGFnZS5zY3NzIiwic3JjL2FwcC9pbnRyby9pbnRyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QUREQTs7RUFFRSxlQUFBO0VBQ0EsK0JBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9pbnRyby9pbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2FiZDE2ZTtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cbmlvbi1zbGlkZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAxNnB4IDE2cHggMHB4IDE2cHg7XG59XG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW9uLXNsaWRlID4gaDEsXG5oMiB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1zbGlkZSA+IHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZzogMWVtIDFlbSAxZW0gMWVtO1xufVxuaW9uLXNsaWRlID4gaW9uLWljb24ge1xuICBjb2xvcjogI2FiZDE2ZTtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuaW9uLXNsaWRlID4gaW9uLWljb25bbmFtZT1cImNsb3NlXCJdIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5pb24tc2xpZGUgPiBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogNjAlO1xuICBtYXJnaW46IDY0cHggMDtcbn1cbiIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjYWJkMTZlO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzJweCk7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24tc2xpZGUgPiBoMSxcbmgyIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tc2xpZGUgPiBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDFlbTtcbn1cblxuaW9uLXNsaWRlID4gaW9uLWljb24ge1xuICBjb2xvcjogI2FiZDE2ZTtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG5pb24tc2xpZGUgPiBpb24taWNvbltuYW1lPWNsb3NlXSB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG5pb24tc2xpZGUgPiBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogNjAlO1xuICBtYXJnaW46IDY0cHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/intro/intro.page.ts":
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var IntroPage = /** @class */ (function () {
    function IntroPage(storage, router) {
        this.storage = storage;
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            centeredSlides: true,
            speed: 400
        };
        this.slides = [
            {
                imageSrc: "assets/img/logo.png",
                imageAlt: "Platzi Music Logo",
                title: "Escucha tu música",
                subTitle: "EN CUALQUIER LUGAR",
                description: "Los mejores \u00E1lbumes, las mejores canciones. Escucha y comparte en\n        cualquier momento, a todas horas.",
                icon: "play"
            },
            {
                imageSrc: "assets/img/logo.png",
                imageAlt: "Platzi Music Logo",
                title: "Disfruta de nuestro reproductor",
                subTitle: "DE VIDEOS INCREÍBLES",
                description: "Entra al modo video de nuestro reproductor y obt\u00E9n acceso a clips,\n        documentales y making offs incr\u00EDbles de tu artista favorito.",
                icon: "videocam"
            },
            {
                imageSrc: "assets/img/logo.png",
                imageAlt: "Platzi Music Logo",
                title: "Accede al exclusivo",
                subTitle: "MODO DEPORTE",
                description: "Crea una playlist basada en tu actividad f\u00EDsica. <br />\n        Ten reportes y acceso a lo que necesites, integrado ccon GPS!",
                icon: "bicycle"
            }
        ];
    }
    IntroPage.prototype.finish = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("introCompleted", true)];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl("/");
                        return [2 /*return*/];
                }
            });
        });
    };
    IntroPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    IntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-intro",
            template: __webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/index.js!./src/app/intro/intro.page.html"),
            styles: [__webpack_require__(/*! ./intro.page.scss */ "./src/app/intro/intro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=intro-intro-module-es5.js.map