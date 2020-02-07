(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center>\n    <ion-buttons slot=\"start\">\n      <ion-avatar class=\"header-avatar\">\n        <img src=\"assets/img/user.jpg\" alt=\"User Image\" />\n      </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-center>\n      <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" height=\"32px\" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar\n    [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"setFilteredItems()\"\n  ></ion-searchbar>\n  <div *ngIf=\"searching\" class=\"spinner-container\" text-center>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-virtual-scroll [items]=\"items\" approxItemHeight=\"50px\">\n    <ion-item *virtualItem=\"let item\">\n      {{ item.name }}\n      <ion-icon\n        *ngIf=\"!item.playing\"\n        name=\"play\"\n        slot=\"end\"\n        (click)=\"play(item)\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"item.playing\"\n        name=\"pause\"\n        slot=\"end\"\n        (click)=\"pause(item)\"\n      ></ion-icon>\n      <ion-spinner *ngIf=\"item.playing\" name=\"dots\" slot=\"end\"></ion-spinner>\n    </ion-item>\n  </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");



var SearchPage = /** @class */ (function () {
    function SearchPage(musicService) {
        this.musicService = musicService;
        this.searchTerm = "";
        this.searching = false;
    }
    SearchPage.prototype.setFilteredItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searching = true;
                        if (!this.searchTerm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.musicService.searchTracks(this.searchTerm)];
                    case 1:
                        response = _a.sent();
                        this.items = response.tracks.items.filter(function (e) { return e.preview_url; });
                        return [3 /*break*/, 3];
                    case 2:
                        this.items = [];
                        _a.label = 3;
                    case 3:
                        this.searching = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchPage.prototype.play = function (song) {
        console.log(song);
        if (this.audioSong) {
            this.audioSong.pause();
        }
        var currentSong = this.items.filter(function (e) { return e.playing; });
        if (currentSong[0]) {
            currentSong[0].playing = false;
        }
        song.playing = true;
        this.audioSong = new Audio(song.preview_url);
        this.audioSong.play();
    };
    SearchPage.prototype.pause = function (song) {
        this.audioSong.pause();
        song.playing = false;
    };
    SearchPage.ctorParameters = function () { return [
        { type: _services_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"] }
    ]; };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search",
            template: __webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module-es5.js.map