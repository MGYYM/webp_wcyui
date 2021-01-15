"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log = require('../utils/log');
var base_1 = __importDefault(require("../base"));
var NetWork = /** @class */ (function (_super) {
    __extends(NetWork, _super);
    function NetWork(baseUrl, app) {
        var _this_1 = _super.call(this, app) || this;
        _this_1.baseUrl = baseUrl;
        return _this_1;
    }
    NetWork.prototype.request = function (parmer) {
        // @ts-ignore
        var _a = __assign({}, parmer), url = _a.url, data = _a.data, needLoading = _a.needLoading;
        var _url = (this.baseUrl || '') + url;
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (needLoading) {
                delete parmer[needLoading];
                // @ts-ignore
                _this.app.showLoading();
            }
            wx.request(__assign(__assign({}, parmer), { url: _url, data: data ? data : null, success: function success(res) {
                    resolve(res.data);
                }, fail: function fail(error) {
                    //弹出提示框
                    // @ts-ignore
                    _this.app.showToast({
                        icon: "none",
                        title: '网络请求失败',
                        duration: 2000
                    });
                    log.error(_url + ":" + error);
                    log.setFilterMsg('netWork');
                    reject(error);
                }, complete: function complete() {
                    if (needLoading) {
                        // 加载完成
                        // @ts-ignore
                        _this.app.hideLoading();
                    }
                } }));
        });
    };
    return NetWork;
}(base_1.default));
exports.default = NetWork;
