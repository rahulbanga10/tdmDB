(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-data/add-data.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-data/add-data.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div *ngIf=\"isAdded\">\n    <button type=\"button\" class=\"btn btn-primary mb-2\" (click)=\"addSwitch()\"  >Add More</button>\n    <button type=\"button\" class=\"btn btn-primary mb-2\" routerLink=\"/tableList/{{tablename}}\" routerLinkActive=\"\"  >Back</button>\n </div>\n <div *ngIf=\"!isAdded\">\n<h1 class=\"text-center\" >Add Record For {{tablename}}</h1>\n<form #form=\"ngForm\" >\n  <div *ngFor=\"let column of columnName; let i=index;\">\n    <div class=\"form-group row\"  *ngIf=\"i>0\" >\n      <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">{{column}}</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\"  name=\"{{column}}\" id=\"inputEmail3\"  name=\"{{column}}\" ngModel>\n      </div>\n    </div>\n  </div>\n    <button type=\"submit\" class=\"btn btn-primary mb-2\" (click)=\"saveData(form.value)\"  >Update Data</button>\n    <!-- {{form}} -->\n  </form>\n</div>\n  <p *ngIf=\"isAdded\">this is added</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbtable/dbtable.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dbtable/dbtable.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"table-responsive-xl\">\n        <table class=\"table\">\n<tr>\n    <th *ngFor=\"let column of columnName; let i=index;\" >\n\n        <div class=\"col-7\">\n         {{column}}\n        </div>\n      </th>\n    </tr>\n        <tr *ngFor=\"let table of tables\">\n  <td *ngFor=\"let column of columnName; let i=index;\" >\n    <div class=\"col-7\">\n      {{table[column]}}\n    </div>\n  </td>\n      <td>\n          <div class=\"\">\n              <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/tableList/{{tablename}}/{{table[columnName[1]]}}\" routerLinkActive=\"\"  >Update</button>\n          </div>\n        </td>\n        <td>\n            <div class=\"\">\n                <button type=\"button\" class=\"btn btn-secondary\" #take value=\"/api/table/{{tablename}}/{{table[columnName[1]]}}\" (click)=\"deleteData(take.value)\" >Delete</button>\n            </div>\n          </td>\n\n\n\n  </tr>\n</table>\n<div class=\"text-center\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/tableList/{{tablename}}/AddData\" routerLinkActive=\"\"  >Add Record</button>\n</div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbtableslist/dbtableslist.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dbtableslist/dbtableslist.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center\">\n    <div class=\"card-header\">\n      Publicis Sapient\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">PEGA DATABASE UTILITY</h5>\n      <div class=\"card-text\">\n<div class=\"table-responsive-xl\">\n    <table class=\"table\">\n  <tr>\n  <th>\n    <div class=\"col-7\">\n     Sheet Name\n    </div>\n  </th>\n  <th>\n      <div class=\"\">\n       Action\n      </div>\n    </th>\n    </tr>\n    <tr *ngFor=\"let table of tableList\">\n  <td>\n  <div class=\"col-7\">\n  {{table}}\n  </div>\n  </td>\n  <td>\n      <div class=\"\">\n          <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/tableList/{{table}}\" routerLinkActive=\"\"  >Update</button>\n      </div>\n    </td>\n  </tr>\n  </table>\n  </div>\n\n</div>\n        <!-- <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a> -->\n      </div>\n      <div class=\"card-footer text-muted\">\n       List of All The Tables For TDM <!-- 2 days ago -->\n      </div>\n    </div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-data/update-data.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-data/update-data.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isUpdated>0\" >\n    <button type=\"button\" class=\"btn btn-primary mb-2\" routerLink=\"/tableList/{{tablename}}\" routerLinkActive=\"\"  >Back</button>\n </div>\n<h1 class=\"text-center\" >Update For {{tablename}}</h1>\n<form #form=\"ngForm\" *ngIf=\"isUpdated<=0 || !isUpdated\">\n  <div *ngFor=\"let te of test; let i=index;\">\n    <div class=\"form-group row\"   *ngIf=\"i>0\">\n      <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">{{te}}</label>\n      <div class=\"col-sm-7\">\n        <input type=\"text\" class=\"form-control\"  name=\"{{te}}\" id=\"inputEmail3\"  name=\"{{testValues[i]}}\" [(ngModel)]=\"testValues[i]\">\n      </div>\n    </div>\n  </div>\n    <button type=\"submit\" class=\"btn btn-primary mb-2\" (click)=\"updateData(form.value)\"  >Update Data</button>\n    <!-- {{form}} -->\n  </form>\n  <p *ngIf=\"isUpdated>0\">Updated Successfully</p>\n  <!-- {{tablename}} -->\n<!-- {{ form.value | json}} -->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-data/add-data.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-data/add-data.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kYXRhL2FkZC1kYXRhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-data/add-data.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-data/add-data.component.ts ***!
  \************************************************/
/*! exports provided: AddDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataComponent", function() { return AddDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table-list.service */ "./src/app/table-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddDataComponent = class AddDataComponent {
    constructor(tableList, route) {
        //this.tables = tableList.tables;
        this.tableList = tableList;
        this.route = route;
        this.route.params.subscribe(param => this.tablename = param.tname);
        this.tableList.getVideos('/api/table/' + this.tablename).subscribe(respVideo => { console.log(respVideo); this.columnName = Object.keys(respVideo[0]); });
    }
    ngOnInit() {
    }
    saveData(form) {
        this.formValues = form;
        console.log(this.formValues);
        this.tableList.addTableRecord(this.formValues, '/api/table/' + this.tablename + '/' + 'AddData').subscribe(res => {
            console.log(res._id);
            console.log(this.formValues);
            this.isAdded = res._id;
        }, retVideo => {
            this.columnValues = retVideo;
            console.log(retVideo);
            this.test = Object.keys(this.columnValues[0]);
            this.testValues = Object.values(this.columnValues[0]);
        });
    }
    addSwitch() {
        this.isAdded = null;
    }
};
AddDataComponent.ctorParameters = () => [
    { type: _table_list_service__WEBPACK_IMPORTED_MODULE_2__["TableListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AddDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-data/add-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-data.component.css */ "./src/app/add-data/add-data.component.css")).default]
    })
], AddDataComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _update_data_update_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-data/update-data.component */ "./src/app/update-data/update-data.component.ts");
/* harmony import */ var _dbtable_dbtable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dbtable/dbtable.component */ "./src/app/dbtable/dbtable.component.ts");
/* harmony import */ var _dbtableslist_dbtableslist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dbtableslist/dbtableslist.component */ "./src/app/dbtableslist/dbtableslist.component.ts");
/* harmony import */ var _add_data_add_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-data/add-data.component */ "./src/app/add-data/add-data.component.ts");







const routes = [
    { path: "tableList/:tname/AddData", component: _add_data_add_data_component__WEBPACK_IMPORTED_MODULE_6__["AddDataComponent"] },
    { path: "tableList/:tname/:id", component: _update_data_update_data_component__WEBPACK_IMPORTED_MODULE_3__["UpdateDataComponent"] },
    { path: "tableList/:tname", component: _dbtable_dbtable_component__WEBPACK_IMPORTED_MODULE_4__["DbtableComponent"] },
    { path: "tableList", component: _dbtableslist_dbtableslist_component__WEBPACK_IMPORTED_MODULE_5__["DbtableslistComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tdmDB';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dbtable_dbtable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dbtable/dbtable.component */ "./src/app/dbtable/dbtable.component.ts");
/* harmony import */ var _update_data_update_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-data/update-data.component */ "./src/app/update-data/update-data.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dbtableslist_dbtableslist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dbtableslist/dbtableslist.component */ "./src/app/dbtableslist/dbtableslist.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_data_add_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-data/add-data.component */ "./src/app/add-data/add-data.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dbtable_dbtable_component__WEBPACK_IMPORTED_MODULE_5__["DbtableComponent"],
            _update_data_update_data_component__WEBPACK_IMPORTED_MODULE_6__["UpdateDataComponent"],
            _dbtableslist_dbtableslist_component__WEBPACK_IMPORTED_MODULE_8__["DbtableslistComponent"],
            _add_data_add_data_component__WEBPACK_IMPORTED_MODULE_10__["AddDataComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dbtable/dbtable.component.css":
/*!***********************************************!*\
  !*** ./src/app/dbtable/dbtable.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RidGFibGUvZGJ0YWJsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dbtable/dbtable.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dbtable/dbtable.component.ts ***!
  \**********************************************/
/*! exports provided: DbtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbtableComponent", function() { return DbtableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table-list.service */ "./src/app/table-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DbtableComponent = class DbtableComponent {
    constructor(tableList, route) {
        //this.tables = tableList.tables;
        this.tableList = tableList;
        this.route = route;
        this.tables = [];
        this.route.params.subscribe(param => this.tablename = param.tname);
        this.tableList.getVideos('/api/table/' + this.tablename).subscribe(respVideo => { console.log(respVideo); this.columnName = Object.keys(respVideo[0]); this.tables = respVideo; });
    }
    ngOnInit() {
    }
    deleteData(url) {
        console.log("delete Data" + url);
        this.tableList.deleteTableRecord(url).subscribe(respVideo => { console.log(respVideo); window.location.reload(); });
    }
};
DbtableComponent.ctorParameters = () => [
    { type: _table_list_service__WEBPACK_IMPORTED_MODULE_2__["TableListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DbtableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dbtable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dbtable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbtable/dbtable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dbtable.component.css */ "./src/app/dbtable/dbtable.component.css")).default]
    })
], DbtableComponent);



/***/ }),

/***/ "./src/app/dbtableslist/dbtableslist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dbtableslist/dbtableslist.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RidGFibGVzbGlzdC9kYnRhYmxlc2xpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dbtableslist/dbtableslist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dbtableslist/dbtableslist.component.ts ***!
  \********************************************************/
/*! exports provided: DbtableslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbtableslistComponent", function() { return DbtableslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DbtableslistComponent = class DbtableslistComponent {
    constructor() {
        this.tableList = ['tableA', 'tableB', 'tableC', 'tableD', 'tableE', 'tableA', 'tableB', 'tableC', 'tableD', 'tableE', 'tableA', 'tableB', 'tableC', 'tableD', 'tableE'];
    }
    ngOnInit() {
    }
};
DbtableslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dbtableslist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dbtableslist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dbtableslist/dbtableslist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dbtableslist.component.css */ "./src/app/dbtableslist/dbtableslist.component.css")).default]
    })
], DbtableslistComponent);



/***/ }),

/***/ "./src/app/table-list.service.ts":
/*!***************************************!*\
  !*** ./src/app/table-list.service.ts ***!
  \***************************************/
/*! exports provided: TableListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListService", function() { return TableListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TableListService = class TableListService {
    constructor(_http) {
        this._http = _http;
        this.tables = [
            { key: '1', col1: 'A', col2: 'B', col3: 'C' },
            { key: '2', col1: 'A2', col2: 'B2', col3: 'C2' },
            { key: '3', col1: 'A3', col2: 'B3', col3: 'C3' },
            { key: '4', col1: 'A4', col2: 'B4', col3: 'C4' }
        ];
        this._apiUrl = '/api/video';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    getVideos(url) {
        return this._http.get(url);
    }
    getTableRecord(url) {
        return this._http.get(url);
    }
    deleteTableRecord(url) {
        return this._http.delete(url);
    }
    updateTableRecord(record, url) {
        console.log(JSON.stringify(record));
        return this._http.put(url, JSON.stringify(record), this.httpOptions);
    }
    addTableRecord(record, url) {
        console.log(JSON.stringify(record));
        return this._http.post(url, JSON.stringify(record), this.httpOptions);
    }
};
TableListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TableListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TableListService);



/***/ }),

/***/ "./src/app/update-data/update-data.component.css":
/*!*******************************************************!*\
  !*** ./src/app/update-data/update-data.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1kYXRhL3VwZGF0ZS1kYXRhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/update-data/update-data.component.ts":
/*!******************************************************!*\
  !*** ./src/app/update-data/update-data.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDataComponent", function() { return UpdateDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _table_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table-list.service */ "./src/app/table-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UpdateDataComponent = class UpdateDataComponent {
    constructor(tableList, route) {
        this.tableList = tableList;
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(param => { this.key = param.id; this.tablename = param.tname; });
        console.log(this.key);
        // this.columnValues= this.tableList.tables.find(function(element){if(element.key=='1'){return element; }});
        // this.columnValues= this.tableList.tables.filter(element=>element.key===this.key)[0];
        this.tableList.getTableRecord('/api/table/' + this.tablename + '/' + this.key).subscribe(respVideo => {
            console.log(respVideo);
            this.columnValues = respVideo;
            this.test = Object.keys(this.columnValues[0]);
            this.testValues = Object.values(this.columnValues[0]);
        });
    }
    updateData(form) {
        this.formValues = form;
        console.log(this.formValues);
        this.tableList.updateTableRecord(this.formValues, '/api/table/' + this.tablename + '/' + this.key).subscribe(retVideo => {
            this.isUpdated = retVideo.nModified;
            console.log("update Data");
            this.columnValues = retVideo;
            this.test = Object.keys(this.columnValues[0]);
            this.testValues = Object.values(this.columnValues[0]);
        });
    }
};
UpdateDataComponent.ctorParameters = () => [
    { type: _table_list_service__WEBPACK_IMPORTED_MODULE_2__["TableListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UpdateDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/update-data/update-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-data.component.css */ "./src/app/update-data/update-data.component.css")).default]
    })
], UpdateDataComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MEAN\tdmDB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map