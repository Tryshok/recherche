webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log("coucou");
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h3 style="font-size: 24px;">Welcome on our prototype</h3>\n  <p style="font-size: 22px;">\n    Our prototype has 4 features:\n  </p>\n  <ul>\n    <li style="font-size: 20px;">Detect nearby hotpots </li>\n    <li style="font-size: 20px;">Ping a hotspot</li>\n    <li style="font-size: 20px;">Retrieve speed of user</li>\n    <li style="font-size: 20px;">Retrieve gyroscope data</li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotspotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotspotPage = /** @class */ (function () {
    function HotspotPage(hotspot, navCtrl) {
        var _this = this;
        this.hotspot = hotspot;
        this.navCtrl = navCtrl;
        this.hotspot.scanWifi().then(function (networks) {
            _this.hotspotNetworks = networks;
            var taille = Object.keys(_this.hotspotNetworks).length;
            for (var i = 0; i < taille; i++) {
                //var distance = this.hotspotNetworks[i].level * 50  / 74;
                // this.hotspotNetworks[i].distance=distance;
            }
        });
    }
    HotspotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hotspot',template:/*ion-inline-start:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\hotspot\hotspot.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Hotspots</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <h3>Hotspots</h3>\n    <ion-card *ngFor="let hotspot of hotspotNetworks">\n        <ion-card-header>\n            {{ hotspot.SSID }}\n        </ion-card-header>\n        <ion-card-content>\n            <div style="font-size: 20px;">\n            <!--<strong>BSSID</strong>: {{ hotspot.BSSID }}\n            <br>-->\n            <strong>Frequency</strong>: {{ hotspot.frequency }} MHz\n            <br>\n            <strong>Level</strong>: {{ hotspot.level }} dBm\n            <!--<br>\n            <strong>Timestamp</strong>: {{ hotspot.timestamp }}-->\n            <br>\n            <strong>Capabilities</strong>: {{ hotspot.capabilities }}\n            <br>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\hotspot\hotspot.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__["a" /* Hotspot */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HotspotPage);
    return HotspotPage;
}());

/*
, public ping : string

    var taille = Object.keys(this.hotspotNetworks).length;

    for ( var i = 0 ; i < taille ; i++){
        var distance = this.hotspotNetworks[i].level * 50  / 74;
        this.hotspotNetworks[i].distance=distance;
    }
    */
//this.hotspotConnectionInfo = "Bonjour";
/*this.hotspot.getConnectionInfo().then((et: HotspotConnectionInfo) => {
    this.hotspotConnectionInfo = et;
});*/
/*
            var taille = Object.keys(this.hotspotConnectionInfo).length;

            for ( var i = 0 ; i < taille ; i++){
                var distance = this.hotspotConnectionInfo[i].level * 50  / 74;
                this.hotspotConnectionInfo[i].distance=distance;
                //this.hotspotNetworks[i].test=this.hotspot.pingHost(test);
            }
            */
/*this.hotspot.pingHost(ping).then((test : string)=> {
            this.ping = test;

        })*/
// 50 m = 74 dbm
//100 m = 80 dbm
/*
   var count = 0;

   for (var property in this.hotspotNetworks) {
       if (Object.prototype.hasOwnProperty.call(this.hotspotNetworks, property)) {
           count++;
       }
   }
*/
//var taille = Object.keys(this.hotspotNetworks).length;
//this.hotspotNetworks.push(taille);
// console.log(taille);
/*
        for ( var i =0 ; i< taille ; i++){
            console.log(taille);
           // var distance = this.hotspotNetworks[i].level * 50  / 74;
            this.hotspotNetworks[i].push(taille);
            console.log(this.hotspotNetworks);
        }
*/ 
//# sourceMappingURL=hotspot.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pingHostpage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var pingHostpage = /** @class */ (function () {
    function pingHostpage(hotspot, navCtrl) {
        /*this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
            this.hotspotNetworks = networks;

            

            var taille = Object.keys(this.hotspotNetworks).length;
    
            for ( var i = 0 ; i < taille ; i++){
                //var distance = this.hotspotNetworks[i].level * 50  / 74;
               // this.hotspotNetworks[i].distance=distance;
               
            }
        });*/
        var _this = this;
        this.hotspot = hotspot;
        this.navCtrl = navCtrl;
        this.hotspot.getConnectionInfo().then(function (et) {
            _this.hotspotConnectionInfo = et;
            _this.hotspot.pingHost(_this.hotspotConnectionInfo.IPAddress.replace("/", "")).then(function (res) { return _this.ping = res; });
        });
    }
    pingHostpage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pingHostpage',template:/*ion-inline-start:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\pingHost\pingHost.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Host ping</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <h3>Host ping</h3>\n    <ion-card>\n        <ion-card-content>\n            <div style="font-size: 20px;">\n            <strong>Host name</strong>:{{ hotspotConnectionInfo.SSID }}\n            <br>\n            <strong>IP address</strong>:{{ hotspotConnectionInfo.IPAddress }}\n            <br>\n            <strong>Ping</strong>:{{ ping.stat.time | json}} ms\n            <br>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\pingHost\pingHost.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_hotspot__["a" /* Hotspot */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], pingHostpage);
    return pingHostpage;
}());

/*
, public ping : string

    var taille = Object.keys(this.hotspotNetworks).length;

    for ( var i = 0 ; i < taille ; i++){
        var distance = this.hotspotNetworks[i].level * 50  / 74;
        this.hotspotNetworks[i].distance=distance;
    }
    */
//this.hotspotConnectionInfo = "Bonjour";
/*this.hotspot.getConnectionInfo().then((et: HotspotConnectionInfo) => {
    this.hotspotConnectionInfo = et;
});*/
/*
            var taille = Object.keys(this.hotspotConnectionInfo).length;

            for ( var i = 0 ; i < taille ; i++){
                var distance = this.hotspotConnectionInfo[i].level * 50  / 74;
                this.hotspotConnectionInfo[i].distance=distance;
                //this.hotspotNetworks[i].test=this.hotspot.pingHost(test);
            }
            */
/*this.hotspot.pingHost(ping).then((test : string)=> {
            this.ping = test;

        })*/
// 50 m = 74 dbm
//100 m = 80 dbm
/*
   var count = 0;

   for (var property in this.hotspotNetworks) {
       if (Object.prototype.hasOwnProperty.call(this.hotspotNetworks, property)) {
           count++;
       }
   }
*/
//var taille = Object.keys(this.hotspotNetworks).length;
//this.hotspotNetworks.push(taille);
// console.log(taille);
/*
        for ( var i =0 ; i< taille ; i++){
            console.log(taille);
           // var distance = this.hotspotNetworks[i].level * 50  / 74;
            this.hotspotNetworks[i].push(taille);
            console.log(this.hotspotNetworks);
        }
*/ 
//# sourceMappingURL=pingHost.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotionPage = /** @class */ (function () {
    function MotionPage(deviceMotion, navCtrl, navParams) {
        var _this = this;
        this.deviceMotion = deviceMotion;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deviceMotion.getCurrentAcceleration().then(function (acceleration) {
            _this.accelerationDevice = acceleration;
        });
        var frequency = 1;
        var option = {
            frequency: frequency * 1000
        };
        this.tabAccelerationDevice = new Array();
        var vitesse0 = 0;
        var vitesseX = 0;
        var vitesseY = 0;
        var vitesseZ = 0;
        for (var i = 0; i < 10; i++) {
            // Watch device acceleration
            var subscription = this.deviceMotion.watchAcceleration(option).subscribe(function (acceleration) {
                _this.accelerationDevice = acceleration;
                _this.tabAccelerationDevice.push(acceleration);
                // v = v0 + a*t
                /*if((acceleration.x + acceleration.y + acceleration.z) > 10 ){

                }*/
                if (vitesseX = 0) {
                    vitesseX = vitesse0 + acceleration.x * frequency;
                    _this.vitesseReelX = vitesseX;
                }
                else {
                    vitesseX = vitesseX + acceleration.x * frequency;
                    _this.vitesseReelX = vitesseX;
                }
                if (vitesseY = 0) {
                    vitesseY = vitesse0 + acceleration.y * frequency;
                    _this.vitesseReelY = vitesseY;
                }
                else {
                    vitesseY = vitesseY + acceleration.y * frequency;
                    _this.vitesseReelY = vitesseY;
                }
                if (vitesseZ = 0) {
                    vitesseZ = vitesse0 + acceleration.z * frequency;
                    _this.vitesseReelZ = vitesseZ;
                }
                else {
                    vitesseZ = vitesseZ + acceleration.z * frequency;
                    _this.vitesseReelZ = vitesseZ;
                }
            });
        }
        // Stop watch
        subscription.unsubscribe();
    }
    MotionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-motion',template:/*ion-inline-start:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\motion\motion.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Motion</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <h3>Device Motion</h3>\n    <ion-card>\n        <ion-card-header>\n            <div style="font-size: 20px;">\n            Accelerations  \n            <br>\n            (Gravity hasn\'t been withdrawn.)  \n            </div>        \n        </ion-card-header>\n        <ion-card-content>   \n            <div style="font-size: 20px;">  \n            <strong>axe X : </strong> {{ accelerationDevice.x | number : \'1.3-3\'}} m/s²\n            <br>\n            <strong>axe Y : </strong> {{ accelerationDevice.y | number : \'1.3-3\'}} m/s²\n            <br>\n            <strong>axe Z : </strong> {{ accelerationDevice.z | number : \'1.3-3\'}} m/s²\n            <br>\n            </div>\n        </ion-card-content>\n        <ion-card-header>\n            <div style="font-size: 20px;">\n            Speeds\n            <br>\n            (Gravity hasn\'t been withdrawn.)    \n             </div>\n        </ion-card-header>\n        <ion-card-content>\n            <div style="font-size: 20px;">\n            <strong>axe X : </strong> {{ vitesseReelX | number : \'1.3-3\'}} m/s\n            <br>\n            <strong>axe Y : </strong> {{ vitesseReelY | number : \'1.3-3\'}} m/s\n            <br>\n            <strong>axe Z : </strong> {{ vitesseReelZ | number : \'1.3-3\'}} m/s\n            <br>\n             </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\motion\motion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_device_motion__["a" /* DeviceMotion */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MotionPage);
    return MotionPage;
}());

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GyroscopePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_gyroscope__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GyroscopePage = /** @class */ (function () {
    function GyroscopePage(gyroscope, navCtrl) {
        var _this = this;
        this.gyroscope = gyroscope;
        this.navCtrl = navCtrl;
        this.gyroscope.getCurrent().then(function (orientation) {
            _this.gyro = orientation;
        })
            .catch();
        var frequency = 1;
        var option = {
            frequency: frequency * 1000
        };
        for (var i = 0; i < 10; i++) {
            // Watch device acceleration
            var subscription = this.gyroscope.watch(option).subscribe(function (orientation) {
                _this.orientationDevice = orientation;
            });
        }
        // Stop watch
        subscription.unsubscribe();
    }
    GyroscopePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gyroscope',template:/*ion-inline-start:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\gyroscope\gyroscope.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Gyroscope</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <h3>Gyroscope</h3>\n    <ion-card>\n        <ion-card-header>\n            Data\n        </ion-card-header>\n        <ion-card-content>\n            <div style="font-size: 20px;">\n            <strong>orientation.x : </strong> {{ orientationDevice.x | number : \'1.3-3\'}}\n            <br>\n            <strong>orientation.y : </strong> {{ orientationDevice.y | number : \'1.3-3\'}}\n            <br>\n            <strong>orientation.z : </strong> {{ orientationDevice.z | number : \'1.3-3\'}}\n            <br>\n            </div>\n            <br>\n            The gyrometer detects an acceleration of the rotation around an axis.\n            <br>\n            It measures either changes in orientation (angular motion) or changes in rotational speed.\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\gyroscope\gyroscope.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_gyroscope__["a" /* Gyroscope */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], GyroscopePage);
    return GyroscopePage;
}());

//# sourceMappingURL=gyroscope.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_hotspot_hotspot__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pingHost_pingHost__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_motion_motion__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_gyroscope_gyroscope__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_hotspot__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_device_motion__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_gyroscope__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hotspot_hotspot__["a" /* HotspotPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pingHost_pingHost__["a" /* pingHostpage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_motion_motion__["a" /* MotionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_gyroscope_gyroscope__["a" /* GyroscopePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_hotspot_hotspot__["a" /* HotspotPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pingHost_pingHost__["a" /* pingHostpage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_motion_motion__["a" /* MotionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_gyroscope_gyroscope__["a" /* GyroscopePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_hotspot__["a" /* Hotspot */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_device_motion__["a" /* DeviceMotion */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_gyroscope__["a" /* Gyroscope */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_hotspot_hotspot__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pingHost_pingHost__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_motion_motion__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gyroscope_gyroscope__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ListPage } from '../pages/list/list';




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            // { title: 'List', component: ListPage },
            { title: 'Hotspot', component: __WEBPACK_IMPORTED_MODULE_5__pages_hotspot_hotspot__["a" /* HotspotPage */] },
            { title: 'Ping Hotspot', component: __WEBPACK_IMPORTED_MODULE_6__pages_pingHost_pingHost__["a" /* pingHostpage */] },
            { title: 'Motion', component: __WEBPACK_IMPORTED_MODULE_7__pages_motion_motion__["a" /* MotionPage */] },
            { title: 'Gyroscope', component: __WEBPACK_IMPORTED_MODULE_8__pages_gyroscope_gyroscope__["a" /* GyroscopePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Exia\A4\Prosit\0-Projet_de_recherche\recherche\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map