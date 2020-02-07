(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sports-sports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sports/sports.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sports/sports.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center>\n    <ion-buttons slot=\"start\">\n      <ion-avatar class=\"header-avatar\">\n        <img src=\"assets/img/user.jpg\" alt=\"User Image\" />\n      </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-center>\n      <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" height=\"32px\" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <agm-map\n    [latitude]=\"currentCenter.lat\"\n    [longitude]=\"currentCenter.lng\"\n    [zoom]=\"defaultZoom\"\n    *ngIf=\"currentCenter\"\n  >\n    <agm-polyline [strokeColor]=\"'red'\" *ngIf=\"coordinates\">\n      <agm-polyline-point\n        *ngFor=\"let coords of coordinates\"\n        [latitude]=\"coords.lat\"\n        [longitude]=\"coords.lng\"\n      >\n      </agm-polyline-point>\n    </agm-polyline>\n  </agm-map>\n  <ion-searchbar\n    [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"setFilteredItems()\"\n  ></ion-searchbar>\n  <div *ngIf=\"searching\" class=\"spinner-container\" text-center>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-virtual-scroll [items]=\"items\" approxItemHeight=\"50px\">\n    <ion-item *virtualItem=\"let item\">\n      {{ item.name }}\n      <ion-icon\n        *ngIf=\"!item.playing\"\n        name=\"play\"\n        slot=\"end\"\n        (click)=\"play(item)\"\n      ></ion-icon>\n      <ion-icon\n        *ngIf=\"item.playing\"\n        name=\"pause\"\n        slot=\"end\"\n        (click)=\"pause(item)\"\n      ></ion-icon>\n      <ion-spinner *ngIf=\"item.playing\" name=\"dots\" slot=\"end\"></ion-spinner>\n    </ion-item>\n  </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sports/sports.module.ts":
/*!*****************************************!*\
  !*** ./src/app/sports/sports.module.ts ***!
  \*****************************************/
/*! exports provided: SportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPageModule", function() { return SportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sports.page */ "./src/app/sports/sports.page.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");








var routes = [
    {
        path: "",
        component: _sports_page__WEBPACK_IMPORTED_MODULE_6__["SportsPage"]
    }
];
var SportsPageModule = /** @class */ (function () {
    function SportsPageModule() {
    }
    SportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sports_page__WEBPACK_IMPORTED_MODULE_6__["SportsPage"]]
        })
    ], SportsPageModule);
    return SportsPageModule;
}());



/***/ }),

/***/ "./src/app/sports/sports.page.scss":
/*!*****************************************!*\
  !*** ./src/app/sports/sports.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvcnRzL0M6XFxmcmFtZXdvcmtzXFxpb25pYzQtbXVzaWMtc3RhcnRlci9zcmNcXGFwcFxcc3BvcnRzXFxzcG9ydHMucGFnZS5zY3NzIiwic3JjL2FwcC9zcG9ydHMvc3BvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Nwb3J0cy9zcG9ydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogMzAwcHg7XG59XG4iLCJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sports/sports.page.ts":
/*!***************************************!*\
  !*** ./src/app/sports/sports.page.ts ***!
  \***************************************/
/*! exports provided: SportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsPage", function() { return SportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");




var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation;
var SportsPage = /** @class */ (function () {
    function SportsPage(musicService) {
        this.musicService = musicService;
        this.coordinates = [];
        this.defaultZoom = 14;
        this.searchTerm = "";
        this.searching = false;
    }
    SportsPage.prototype.ionViewDidEnter = function () {
        this.getCurrentPosition();
        this.watchPosition();
    };
    SportsPage.prototype.getCurrentPosition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coordinates;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Geolocation.getCurrentPosition()];
                    case 1:
                        coordinates = _a.sent();
                        this.currentCenter = {
                            lat: coordinates.coords.latitude,
                            lng: coordinates.coords.longitude
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    SportsPage.prototype.watchPosition = function () {
        var _this = this;
        Geolocation.watchPosition({}, function (position) {
            _this.currentCenter = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            _this.coordinates.push({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        });
    };
    SportsPage.prototype.setFilteredItems = function () {
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
    SportsPage.prototype.play = function (song) {
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
    SportsPage.prototype.pause = function (song) {
        this.audioSong.pause();
        song.playing = false;
    };
    SportsPage.ctorParameters = function () { return [
        { type: _services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"] }
    ]; };
    SportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sports",
            template: __webpack_require__(/*! raw-loader!./sports.page.html */ "./node_modules/raw-loader/index.js!./src/app/sports/sports.page.html"),
            styles: [__webpack_require__(/*! ./sports.page.scss */ "./src/app/sports/sports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_music_service__WEBPACK_IMPORTED_MODULE_3__["MusicService"]])
    ], SportsPage);
    return SportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sports-sports-module-es5.js.map