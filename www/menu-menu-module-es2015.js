(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane >\n  <ion-menu contentId=\"content\" side=\"end\">\n    <ion-header mode=\"md\">\n      <ion-toolbar color=\"success\">\n        <ion-title>Menu</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button icon-only (click)=\"closeMenu()\">\n            <ion-icon name=\"md-arrow-back\" size=\"large\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content padding color=\"primary\">\n      <ion-list color=\"primary\" lines=\"none\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item\n            [routerLink]=\"p.url\"\n            routerDirection=\"root\"\n            [class.active-item]=\"selectedPath.startsWith(p.url)\"\n            color=\"primary\"\n            lines=\"none\"\n          >\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n            <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-item tappable color=\"success\" lines=\"none\" (click)=\"logout()\">\n          <ion-icon name=\"log-out\" color=\"primary\" slot=\"start\"></ion-icon>\n          Salir\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>\n"

/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







const routes = [
    {
        path: "",
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: "tabs",
                loadChildren: "../tabs/tabs.module#TabsPageModule"
            },
            {
                path: "settings",
                loadChildren: "../settings/settings.module#SettingsPageModule"
            }
        ]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-md:after {\n  background-image: none;\n}\n\nion-toolbar,\nion-header,\nion-title,\nion-buttons {\n  height: 80px;\n}\n\n.header-ios ion-toolbar {\n  --border-width: 0;\n}\n\nion-list {\n  background-color: var(--ion-color-primary);\n}\n\nion-item {\n  height: 60px;\n}\n\n.title-ios {\n  padding-left: 20px;\n  text-align: left;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcZnJhbWV3b3Jrc1xcaW9uaWM0LW11c2ljLXN0YXJ0ZXIvc3JjXFxhcHBcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTs7OztFQUlFLFlBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSwwQ0FBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbmlvbi10b29sYmFyLFxuaW9uLWhlYWRlcixcbmlvbi10aXRsZSxcbmlvbi1idXR0b25zIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhciB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1pdGVtIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4udGl0bGUtaW9zIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iLCIuaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuaW9uLXRvb2xiYXIsXG5pb24taGVhZGVyLFxuaW9uLXRpdGxlLFxuaW9uLWJ1dHRvbnMge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnRpdGxlLWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let MenuPage = class MenuPage {
    constructor(router, storage, navCtrl, menu) {
        this.router = router;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.pages = [
            {
                title: "Configuraciones",
                url: "/menu/settings",
                icon: "settings"
            }
        ];
        this.selectedPath = "";
    }
    closeMenu() {
        this.menu.close();
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.set("isLogged", false);
            this.storage.remove("currentUser");
            this.navCtrl.navigateRoot("login");
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-menu",
        template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.page.html"),
        styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map