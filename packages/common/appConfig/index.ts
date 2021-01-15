export default {
    globalData: {//也需要保存用户信息
        loading:false
    },
    showLoading(parmer) {//由于微信特点这里防止没有关闭Loading
        if (this.globalData.loading) {
            wx.hideLoading();
            wx.showLoading(parmer);
        } else {
            this.globalData.loading = true;
            wx.showLoading(parmer);
        }
    },
    hideLoading(parmer) {
        if (this.globalData.loading) {
            wx.hideLoading();
        }
    },
    showToast(parmer) {//showToast直接用，不用手动关闭前面的loading
        if (this.globalData.loading) {
            wx.hideLoading();
        }
        wx.showToast(parmer);
    },
}