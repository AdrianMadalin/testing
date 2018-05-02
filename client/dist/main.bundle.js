webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var header_component_1 = __webpack_require__("./src/app/header/header.component.ts");
var footer_component_1 = __webpack_require__("./src/app/footer/footer.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var jwtHelper_service_1 = __webpack_require__("./src/app/services/jwtHelper.service.ts");
var contact_component_1 = __webpack_require__("./src/app/contact/contact.component.ts");
var gallery_component_1 = __webpack_require__("./src/app/gallery/gallery.component.ts");
var deals_component_1 = __webpack_require__("./src/app/deals/deals.component.ts");
var upload_service_1 = __webpack_require__("./src/app/services/upload.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                contact_component_1.ContactComponent,
                gallery_component_1.GalleryComponent,
                deals_component_1.DealsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routes_1.AppRoutesModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: "AIzaSyDcaeuvCfvHQEagB2SwtBpKgC86BijisbU"
                }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [auth_service_1.AuthService, jwtHelper_service_1.JwtHelper, upload_service_1.UploadService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var contact_component_1 = __webpack_require__("./src/app/contact/contact.component.ts");
var gallery_component_1 = __webpack_require__("./src/app/gallery/gallery.component.ts");
var deals_component_1 = __webpack_require__("./src/app/deals/deals.component.ts");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'logadmin', component: login_component_1.LoginComponent },
    { path: 'regadmin', component: register_component_1.RegisterComponent },
    { path: 'oferte', component: deals_component_1.DealsComponent },
    { path: 'galerie', component: gallery_component_1.GalleryComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());
exports.AppRoutesModule = AppRoutesModule;


/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ".contact{\r\n  /*background-color: #64B5F6;*/\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nagm-map {\r\n  height: 400px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"contact\">\r\n  <agm-map\r\n    [latitude]=\"latitude\"\r\n    [longitude]=\"longitude\"\r\n    [zoom]=\"17\"\r\n    [mapTypeId]=\"'hybrid'\"\r\n    (mapClick)=\"onChoseLocation($event)\">\r\n    <agm-marker\r\n      [latitude]=\"latitude\"\r\n      [longitude]=\"longitude\"\r\n      [label]=\"''\"\r\n      [title]=\"'Loc De Joaca Kids Party Kungfu Pizza - KPKP'\">\r\n    </agm-marker>\r\n  </agm-map>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n        <h3>CONTACT</h3>\r\n        <p>Telefon informatii si rezervari: <a href=\"tel:+0720 317 252\">0720 317 252 </a></p>\r\n        <p>Email: kidspartykungfupizza@gmail.com</p>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n        <h3>PROGRAM</h3>\r\n        <p>Luni - Duminica: 12:00 PM - 8:00 PM</p>\r\n        <p>* in zilele de sarbatoare legala sau in timpul petrecerilor private programul poate suferi modificari!</p>\r\n      </div>\r\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\r\n        <h3>UNDE NE GASITI?</h3>\r\n        <p>Bd. Bucurestii Noi, nr. 48, sector 1, Bucuresti</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 offset-xl-3 offset-lg-3\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Numele dumneavoastra\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input type=\"tel\" class=\"form-control\" placeholder=\"Telefon\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <textarea name=\"\" id=\"\" cols=\"10\" rows=\"5\"  placeholder=\"Mesaj\" class=\"form-control\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"text-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary\">Trimite</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.latitude = 44.480514;
        this.longitude = 26.043097;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onChoseLocation = function (e) {
        console.log(e);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./src/app/deals/deals.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deals/deals.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<p>\r\n  deals works!\r\n</p>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/deals/deals.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var DealsComponent = /** @class */ (function () {
    function DealsComponent() {
    }
    DealsComponent.prototype.ngOnInit = function () {
    };
    DealsComponent = __decorate([
        core_1.Component({
            selector: 'app-deals',
            template: __webpack_require__("./src/app/deals/deals.component.html"),
            styles: [__webpack_require__("./src/app/deals/deals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DealsComponent);
    return DealsComponent;
}());
exports.DealsComponent = DealsComponent;


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"text-center\">\r\n    <p class=\"text-white\">FOOTER</p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = "#vid{\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<h3>Gallery component</h3>\r\n\r\n<div class=\"container\">\r\n  <h4>Upload images</h4>\r\n  <input type=\"file\"\r\n         (change)=\"onFileSelected($event)\"\r\n         multiple>\r\n  <button type=\"button\" (click)=\"onImageUpload()\">Upload image</button>\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\" *ngFor=\"let img of uploadedImages\">\r\n      <img src=\"../../assets/images/gallery/{{img.name}}\" alt=\"{{img.name}}\" class=\"img-fluid\">\r\n      <button class=\"btn btn-danger\" (click)=\"onDeleteImage($event)\" value=\"{{img._id}}\"> Delete {{img.name}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<div class=\"container\">\r\n  <h4>Upload movies</h4>\r\n  <input type=\"text\" [(ngModel)]=\"movieUrl\">\r\n  <button type=\"button\" (click)=\"onMovieUpload()\">Upload movie</button>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\" *ngFor=\"let movieUrl of uploadedMovieUrl\">\r\n      <iframe [src]='_sanitizer.bypassSecurityTrustResourceUrl(movieUrl.name)' frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n      <button class=\"btn btn-danger\" (click)=\"onDeleteMovieUrl($event)\" value=\"{{movieUrl.name}}\"> Delete </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var jwtHelper_service_1 = __webpack_require__("./src/app/services/jwtHelper.service.ts");
var upload_service_1 = __webpack_require__("./src/app/services/upload.service.ts");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var GalleryComponent = /** @class */ (function () {
    // @HostListener("window:scroll", []) private onScroll($event:Event):void {
    //   console.log(event);
    //   console.log(window.scrollX);
    //   console.log(window.scrollY);
    // };
    function GalleryComponent(_httpClient, _authService, _jwtHelper, _uploadService, _sanitizer, _router) {
        this._httpClient = _httpClient;
        this._authService = _authService;
        this._jwtHelper = _jwtHelper;
        this._uploadService = _uploadService;
        this._sanitizer = _sanitizer;
        this._router = _router;
        this.selectedFile = null;
        this.imageFormData = null;
        this.uploadImgBtn = true;
        this.isTokenExpired = false;
        this.movieUrl = '';
        this.video = document.querySelector('#vid');
        this.clicked = true;
        this.isFullSize = true;
        this.counter = 0;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTokenExpired = this._authService.isExpired();
        console.log(this.isTokenExpired);
        this._authService.getUploadedImages().subscribe(function (data) {
            _this.uploadedImages = data['images'];
        });
        this._uploadService.getMovieUrl().subscribe(function (data) {
            _this.uploadedMovieUrl = data['url'];
        });
    };
    GalleryComponent.prototype.onFileSelected = function (event) {
        var files = event.target.files.length;
        files > 0 ? this.uploadImgBtn = false : this.uploadImgBtn = true;
        this.selectedFile = event.target.files;
        this.imageFormData = new FormData();
        for (var i = 0; i < files; i++) {
            if (this.selectedFile[i].type === 'image/jpeg') {
                this.imageFormData.append('image', this.selectedFile[i], this.selectedFile[i].name);
            }
        }
    };
    GalleryComponent.prototype.onImageUpload = function () {
        var _this = this;
        if (!this.isTokenExpired) {
            var url = '/api-images/kungfu';
            this._httpClient.post(url, this.imageFormData, {
                reportProgress: true,
                observe: 'events'
            }).subscribe(function (event) {
                if (event.type === http_1.HttpEventType.UploadProgress) {
                    console.log("Upload progress " + Math.round(event.loaded / event.total * 100) + "%");
                }
                else if (event.type === http_1.HttpEventType.Response) {
                    console.log(event);
                    _this._authService.getUploadedImages().subscribe(function (data) {
                        _this.uploadedImages = data['images'];
                    });
                }
                else {
                    // console.log(event);
                }
            });
        }
        else {
            console.log("EXPIRED TOKEN");
        }
    };
    GalleryComponent.prototype.onDeleteImage = function (event) {
        var _this = this;
        if (!this.isTokenExpired) {
            var id = event.target.value;
            this._authService.removeUploadedImage(id).subscribe(function (data) {
                console.log(data);
                _this._authService.getUploadedImages().subscribe(function (data) {
                    _this.uploadedImages = data['images'];
                });
            });
        }
    };
    GalleryComponent.prototype.onMovieUpload = function () {
        var _this = this;
        if (this.isTokenExpired) {
            if (this.movieUrl.length > 0) {
                this._uploadService.onMovieUpload({ movieUrl: this.movieUrl }).subscribe(function (response) {
                    console.log(response);
                    _this.movieUrl = '';
                    _this._uploadService.getMovieUrl().subscribe(function (data) {
                        _this.uploadedMovieUrl = data['url'];
                    });
                });
            }
            else {
                console.log("Empty input");
            }
        }
        else {
            console.log("Expired Token");
            this._router.navigate(['/logadmin']);
        }
    };
    ;
    GalleryComponent.prototype.onDeleteMovieUrl = function (event) {
        console.log();
        this._uploadService.onMovieDelete({ link: event.target.value }).subscribe(function (response) {
            console.log(response);
        });
    };
    GalleryComponent.prototype.onClick = function (event) {
        event.controls = false;
        console.log(event);
        if (this.clicked) {
            event.target.play();
            this.clicked = !this.clicked;
        }
        else {
            event.target.pause();
            event.controls = false;
            this.clicked = !this.clicked;
        }
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            auth_service_1.AuthService,
            jwtHelper_service_1.JwtHelper,
            upload_service_1.UploadService,
            platform_browser_1.DomSanitizer,
            router_1.Router])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;


/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Brand</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\r\ntrue}\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/oferte\" routerLinkActive=\"active\">Oferte</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/galerie\" routerLinkActive=\"active\">Galerie</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/logadmin\" routerLinkActive=\"active\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/regadmin\" routerLinkActive=\"active\">Register</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"user !== undefined\">{{user.username}}</li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
        this.user = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this._authService.getUser() !== undefined) {
            this.user = this._authService.getUser();
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".carousel-img {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: url('one.03b2d99ebdf0f91f5e2d.jpeg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img class=\"img-fluid\" src=\"{{pathToImage}}one.jpeg\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"img-fluid\" src=\"{{pathToImage}}two.jpeg\" alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img class=\"img-fluid\" src=\"{{pathToImage}}three.jpeg\" alt=\"Third slide\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var jwtHelper_service_1 = __webpack_require__("./src/app/services/jwtHelper.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_jwtHelper, _authService) {
        this._jwtHelper = _jwtHelper;
        this._authService = _authService;
        this.isValidToken = false;
        this.token = '';
        this.pathToImage = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.pathToImage = '../../assets/images/carousel/';
        // this.token = this._authService.getToken();
        // this.token.length <= 0 ? this.isValidToken = true : this.isValidToken = false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [jwtHelper_service_1.JwtHelper,
            auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".log-background{\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: #333;\r\n  z-index: 10;\r\n}\r\n\r\n.form-center-vertical {\r\n  position: absolute;\r\n  width: 30%;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"log-background\">\r\n  <div class=\"form-center-vertical\">\r\n    <div class=\"text-center text-light\">LOGIN</div>\r\n    <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"logUsername\" class=\"text-light\">Username</label>\r\n        <input type=\"text\"\r\n               class=\"form-control\"\r\n               id=\"logUsername\" aria-describedby=\"emailHelp\"\r\n               placeholder=\"Username\" autocomplete=\"false\"\r\n               formControlName=\"username\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"logPassword\" class=\"text-light\">Password</label>\r\n        <input type=\"password\"\r\n               class=\"form-control\"\r\n               id=\"logPassword\"\r\n               placeholder=\"Password\"\r\n               formControlName=\"password\">\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n      </div>\r\n    </form>\r\n    <div>\r\n      <div class=\"separate-btn\">\r\n       <a routerLink=\"/\"><i class=\"fas fa-home\"></i> Go home</a>\r\n       <a routerLink=\"/regadmin\">to Register <i class=\"fas fa-caret-square-right\"></i></a>\r\n     </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new forms_1.FormGroup({
            "username": new forms_1.FormControl(null, [forms_1.Validators.required]),
            "password": new forms_1.FormControl(null, [forms_1.Validators.required])
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password,
        };
        this._authService.onLoginUser(user).subscribe(function (response) {
            console.log(response);
            _this._authService.storeUserData(response['token'], response['user']);
            _this._router.navigate(['/']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".reg-background{\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: #333;\r\n  z-index: 10;\r\n}\r\n\r\n.form-center-vertical {\r\n  position: absolute;\r\n  width: 30%;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reg-background\">\r\n  <div class=\"form-center-vertical\">\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"regUsername\" class=\"text-light\">Username</label>\r\n        <input type=\"text\"\r\n               class=\"form-control\"\r\n               id=\"regUsername\" aria-describedby=\"emailHelp\"\r\n               placeholder=\"Username\" autocomplete=\"false\"\r\n               formControlName=\"username\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"regPassword\" class=\"text-light\">Password</label>\r\n        <input type=\"password\"\r\n               class=\"form-control\"\r\n               id=\"regPassword\"\r\n               placeholder=\"Password\"\r\n               formControlName=\"password\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"regSecret\" class=\"text-light\">Secret</label>\r\n        <input type=\"password\"\r\n               class=\"form-control\"\r\n               id=\"regSecret\"\r\n               placeholder=\"Secret\"\r\n               formControlName=\"secret\">\r\n      </div>\r\n      <div class=\"text-center\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Register</button>\r\n      </div>\r\n    </form>\r\n    <div class=\"separate-btn\">\r\n      <a routerLink=\"/\"><i class=\"fas fa-home\"></i> Go home</a>\r\n      <a routerLink=\"/logadmin\">to Login <i class=\"fas fa-caret-square-right\"></i></a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new forms_1.FormGroup({
            'username': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'password': new forms_1.FormControl(null, [forms_1.Validators.required]),
            'secret': new forms_1.FormControl(null, [forms_1.Validators.required])
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.registerForm.value.username,
            password: this.registerForm.value.password,
            secret: this.registerForm.value.secret
        };
        if (user.secret === 'qqq') {
            this._authService.onRegisterUser(user).subscribe(function (response) {
                console.log(response);
                if (response['message'] === 'success') {
                    _this._router.navigate(['/logadmin']);
                }
            });
        }
        else {
            this._router.navigate(['/regadmin']);
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var jwtHelper_service_1 = __webpack_require__("./src/app/services/jwtHelper.service.ts");
var AuthService = /** @class */ (function () {
    function AuthService(_httpClient, _jwtHelper) {
        this._httpClient = _httpClient;
        this._jwtHelper = _jwtHelper;
        this.authToken = '';
        this.user = {};
    }
    AuthService.prototype.onRegisterUser = function (user) {
        var url = '/regadmin';
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post(url, user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.onLoginUser = function (user) {
        var url = '/logadmin';
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post(url, user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getToken = function () {
        if (localStorage.getItem('id_token')) {
            return localStorage.getItem('id_token');
        }
    };
    AuthService.prototype.isExpired = function () {
        if (this.getToken()) {
            console.log(this._jwtHelper.isTokenExpired(this.getToken().split(' ')[1]));
            return this._jwtHelper.isTokenExpired(this.getToken().split(' ')[1]);
        }
        else {
            return false;
        }
    };
    AuthService.prototype.getUser = function () {
        if (localStorage.getItem('user')) {
            return JSON.parse(localStorage.getItem('user'));
        }
        else
            return;
    };
    AuthService.prototype.getUploadedImages = function () {
        var url = '/api-images/kungfu';
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.get(url, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.removeUploadedImage = function (id) {
        var url = '/api-images/kungfu';
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.put(url, { _id: id }, { headers: headers }).map(function (res) { return res; });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            jwtHelper_service_1.JwtHelper])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/jwtHelper.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var JwtHelper = /** @class */ (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // https://developer.mozilla.org/en/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    // credits for decoder goes to https://github.com/atk
    JwtHelper.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        buffer = str.charAt(idx++); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            // and if not first of each 4 characters,
            // convert the first 8 bits to one ascii character
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        // Token expired?
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    JwtHelper = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], JwtHelper);
    return JwtHelper;
}());
exports.JwtHelper = JwtHelper;


/***/ }),

/***/ "./src/app/services/upload.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var UploadService = /** @class */ (function () {
    function UploadService(_httpClient) {
        this._httpClient = _httpClient;
    }
    UploadService.prototype.onMovieUpload = function (data) {
        var url = '/api-movie/kungfu';
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post(url, data, { headers: headers }).map(function (response) { return response; });
    };
    UploadService.prototype.getMovieUrl = function () {
        var url = '/api-movie/kungfu';
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.get(url, { headers: headers }).map(function (response) { return response; });
    };
    UploadService.prototype.onMovieDelete = function (data) {
        var url = '/api-movie/kungfu';
        var headers = new http_1.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.put(url, data, { headers: headers }).map(function (response) { return response; });
    };
    UploadService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UploadService);
    return UploadService;
}());
exports.UploadService = UploadService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map