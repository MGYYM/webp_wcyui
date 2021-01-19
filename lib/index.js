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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = exports.Whcy = void 0;
//挂载到全局
var index_1 = __importDefault(require("./common/netWork/index"));
var index_2 = __importDefault(require("./common/appConfig/index"));
exports.appConfig = index_2.default;
var _a = require('./common/event/index'), $on = _a.$on, $emit = _a.$emit, $remove = _a.$remove;
var base_1 = __importDefault(require("./common/base"));
var Whcy = /** @class */ (function (_super) {
    __extends(Whcy, _super);
    function Whcy(baseUrl, app) {
        var _this = this;
        console.log(app);
        _this = _super.call(this, app) || this;
        _this.request = new index_1.default(baseUrl, app).request;
        _this.$on = $on;
        _this.$emit = $emit;
        _this.$remove = $remove;
        _this.showLoading = function (parmer) {
            // @ts-ignore
            if (_this.app.globalData.loading) {
                wx.hideLoading();
                wx.showLoading(parmer);
            }
            else {
                app.globalData.loading = true;
                wx.showLoading(parmer);
            }
        };
        _this.hideLoading = function (parmer) {
            // @ts-ignore
            if (_this.app.globalData.loading) {
                wx.hideLoading();
            }
        };
        _this.showToast = function (parmer) {
            // @ts-ignore
            if (_this.app.globalData.loading) {
                wx.hideLoading();
            }
            wx.showToast(parmer);
        };
        return _this;
    }
    return Whcy;
}(base_1.default));
exports.Whcy = Whcy;
