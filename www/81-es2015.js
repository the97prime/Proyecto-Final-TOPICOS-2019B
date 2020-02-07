(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js ***!
  \**************************************************************************************/
/*! exports provided: pwa_camera_modal_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pwa_camera_modal_instance", function() { return PWACameraModal; });
/* harmony import */ var _ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionicpwaelements-51948158.js */ "./node_modules/@ionic/pwa-elements/dist/esm/ionicpwaelements-51948158.js");


class PWACameraModal {
    constructor(hostRef) {
        Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, hostRef);
        this.onPhoto = Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "onPhoto", 7);
    }
    async handlePhoto(photo) {
        this.onPhoto.emit(photo);
    }
    handleBackdropClick(e) {
        if (e.target !== this.el) {
            this.onPhoto.emit(null);
        }
    }
    handleComponentClick(e) {
        e.stopPropagation();
    }
    handleBackdropKeyUp(e) {
        if (e.key === "Escape") {
            this.onPhoto.emit(null);
        }
    }
    render() {
        return (Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "wrapper", onClick: e => this.handleBackdropClick(e) }, Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("div", { class: "content" }, Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["f"])("pwa-camera", { onClick: e => this.handleComponentClick(e), onPhoto: (photo) => this.handlePhoto(photo) }))));
    }
    get el() { return Object(_ionicpwaelements_51948158_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    static get style() { return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height)}\@media only screen and (max-width:600px){.content{width:100%;height:100%}}"; }
}




/***/ })

}]);
//# sourceMappingURL=81-es2015.js.map