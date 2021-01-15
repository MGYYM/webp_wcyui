"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    globalData: {
        loading: false
    },
    showLoading: function (parmer) {
        if (this.globalData.loading) {
            wx.hideLoading();
            wx.showLoading(parmer);
        }
        else {
            this.globalData.loading = true;
            wx.showLoading(parmer);
        }
    },
    hideLoading: function (parmer) {
        if (this.globalData.loading) {
            wx.hideLoading();
        }
    },
    showToast: function (parmer) {
        if (this.globalData.loading) {
            wx.hideLoading();
        }
        wx.showToast(parmer);
    },
};
