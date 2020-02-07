(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center>\n    <ion-buttons slot=\"start\">\n      <ion-avatar class=\"header-avatar\">\n        <img src=\"assets/img/user.jpg\" alt=\"User Image\" />\n      </ion-avatar>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-center>\n      <img src=\"assets/img/logo.png\" alt=\"Platzi Logo\" height=\"32px\" />\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <h1>Artistas</h1>\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"artists.length\">\n    <ion-slide *ngFor=\"let artist of artists\">\n      <ion-avatar class=\"album-avatar\" (click)=\"showSongs(artist)\">\n        <img width=\"90px\" [src]=\"artist.images[0].url\" />\n        <span>{{ artist.name }}</span>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n  <h1 *ngIf=\"newReleases.length\">Lanzamientos</h1>\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"newReleases.length\">\n    <ion-slide *ngFor=\"let album of newReleases\">\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <img width=\"90px\" [src]=\"album.images[0].url\" />\n        <span>{{ album.name }}</span>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n  <h1 *ngIf=\"!newReleases.length\">\n    <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n  </h1>\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"!newReleases.length\">\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n  <h1 *ngIf=\"favorites.length\">Favoritos</h1>\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"favorites.length\">\n    <ion-slide *ngFor=\"let album of favorites\">\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <img width=\"90px\" [src]=\"album.images[0].url\" />\n        <span>{{ album.name }}</span>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n  <h1 *ngIf=\"!favorites.length\">\n    <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n  </h1>\n  <ion-slides [options]=\"slideOpts\" *ngIf=\"!favorites.length\">\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n    <ion-slide>\n      <ion-avatar class=\"album-avatar square-avatar\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-start time-marker\">{{\n        parseTime(song.currentTime) || \"0:00\"\n      }}</ion-col>\n      <ion-col class=\"ion-text-end time-marker\">{{\n        parseTime(song.duration) || \"0:00\"\n      }}</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-progress-bar [value]=\"newTime\" color=\"success\"></ion-progress-bar>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"1\">\n        <ion-icon\n          (click)=\"markAsFavourite()\"\n          name=\"heart-empty\"\n          color=\"success\"\n          *ngIf=\"!song.favourite\"\n        ></ion-icon>\n        <ion-icon\n          (click)=\"markAsNonFavourite()\"\n          name=\"heart\"\n          color=\"success\"\n          *ngIf=\"song.favourite\"\n        ></ion-icon>\n      </ion-col>\n      <ion-col class=\"ion-text-center song-title\" size=\"8\">\n        <h2>{{ this.currentSong.name }}</h2>\n      </ion-col>\n      <ion-col class=\"ion-text-end\" size=\"3\">\n        <ion-icon\n          name=\"play\"\n          color=\"success\"\n          (click)=\"play('')\"\n          *ngIf=\"!playing\"\n        >\n        </ion-icon>\n        <ion-icon\n          name=\"pause\"\n          color=\"success\"\n          (click)=\"pause()\"\n          *ngIf=\"playing\"\n        >\n        </ion-icon>\n        <ion-icon\n          name=\"square\"\n          color=\"success\"\n          *ngIf=\"song.currentTime > 0\"\n          (click)=\"reset()\"\n        >\n        </ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".album-avatar {\n  width: 90px;\n  height: 120px;\n}\n\n.square-avatar {\n  --border-radius: 0;\n}\n\nion-slide {\n  margin: 0 20px 0 20px;\n  font-size: 12px;\n}\n\nh1 {\n  font-size: 18px;\n  color: var(--ion-color-success);\n  margin-top: 30px;\n}\n\nion-icon {\n  font-size: 26px;\n}\n\n.time-marker {\n  color: gray;\n  font-size: 10px;\n}\n\nion-progress {\n  margin-bottom: 10px;\n}\n\nh2 {\n  font-size: 16px;\n  margin-top: 3px;\n}\n\nion-footer {\n  box-shadow: grey 10px 10px 10px 10px;\n}\n\n.swiper-slide img {\n  height: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcZnJhbWV3b3Jrc1xcaW9uaWM0LW11c2ljLXN0YXJ0ZXIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0UsbUJBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDUUY7O0FETkE7RUFDRSxvQ0FBQTtBQ1NGOztBRE5BO0VBQ0UsWUFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGJ1bS1hdmF0YXIge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cbi5zcXVhcmUtYXZhdGFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuaW9uLXNsaWRlIHtcbiAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5oMSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLnRpbWUtbWFya2VyIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbmlvbi1wcm9ncmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5oMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuaW9uLWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IGdyZXkgMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4iLCIuYWxidW0tYXZhdGFyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5zcXVhcmUtYXZhdGFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pb24tc2xpZGUge1xuICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4udGltZS1tYXJrZXIge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5pb24tcHJvZ3Jlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogZ3JleSAxMHB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIGhlaWdodDogOTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/music.service */ "./src/app/services/music.service.ts");
/* harmony import */ var _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../songs-modal/songs-modal.page */ "./src/app/songs-modal/songs-modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var HomePage = /** @class */ (function () {
    function HomePage(musicService, modalController, loadingController) {
        this.musicService = musicService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.slideOpts = {
            initialSlide: 3,
            slidesPerView: 4,
            centeredSlides: true,
            speed: 400
        };
        this.newReleases = [];
        this.artists = [];
        this.favorites = [];
        this.song = {};
        this.newTime = 0;
        this.pausedTime = 0;
        this.playing = false;
        this.currentSong = {};
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.musicService.getNewReleases().then(function (newReleases) {
            _this.newReleases = _this.favorites = newReleases.albums.items;
        });
        this.artists = this.musicService.getArtists();
    };
    HomePage.prototype.play = function (song) {
        var _this = this;
        var previewUrl = song ? song.preview_url : this.currentSong.preview_url;
        this.song = new Audio(previewUrl);
        this.song.addEventListener("timeupdate", function () {
            _this.newTime = (_this.song.currentTime * (_this.song.duration / 10)) / 100;
        });
        this.song.play();
        this.song.currentTime = this.pausedTime;
        this.playing = true;
    };
    HomePage.prototype.pause = function () {
        if (this.song) {
            this.song.pause();
        }
        this.pausedTime = this.song.currentTime;
        this.playing = false;
    };
    HomePage.prototype.reset = function () {
        if (this.playing) {
            this.song.pause();
        }
        this.newTime = this.pausedTime = this.song.currentTime = 0;
        this.playing = false;
    };
    HomePage.prototype.markAsFavourite = function () {
        this.song.favourite = true;
        // Implement some backend logic here
    };
    HomePage.prototype.markAsNonFavourite = function () {
        this.song.favourite = false;
        // Implement some backend logic here
    };
    HomePage.prototype.parseTime = function (time) {
        if (time === void 0) { time = "0.00"; }
        if (time) {
            var partTime = parseInt(time.toString().split(".")[0], 10);
            var minutes = Math.floor(partTime / 60).toString();
            if (minutes.length == 1) {
                minutes = "0" + minutes;
            }
            var seconds = (partTime % 60).toString();
            if (seconds.length == 1) {
                seconds = "0" + seconds;
            }
            return minutes + ":" + seconds;
        }
    };
    HomePage.prototype.showSongs = function (artist) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, songs, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: "Cargando las canciones del artista"
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.musicService.getArtistTopTracks(artist.id)];
                    case 3:
                        songs = _a.sent();
                        return [4 /*yield*/, this.modalController.create({
                                component: _songs_modal_songs_modal_page__WEBPACK_IMPORTED_MODULE_3__["SongsModalPage"],
                                componentProps: {
                                    songs: songs.tracks,
                                    artist: artist.name
                                }
                            })];
                    case 4:
                        modal = _a.sent();
                        loading.dismiss();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dataReturned = dataReturned.data;
                                if (dataReturned) {
                                    //Play a la canción!
                                    _this.newTime = 0;
                                    _this.reset();
                                    _this.currentSong = _this.dataReturned;
                                    // delayIntencional
                                    setTimeout(function () {
                                        _this.play(_this.dataReturned);
                                    }, 200);
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map