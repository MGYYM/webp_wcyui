//挂载到全局
import NetWork from './common/netWork/index'
import appConfig from './common/appConfig/index'
import { $on, $emit, $remove } from './common/event/index'
import Base from 'base'
class Whcy extends Base {
    constructor(baseUrl, app) {
        console.log(app);
        super(app);
        this.request = new NetWork(baseUrl, app).request;
        this.$on = $on;
        this.$emit = $emit;
        this.$remove = $remove;
        this.showLoading = (parmer) => {//由于微信特点这里防止没有关闭Loading
            if (this.app.globalData.loading) {
                wx.hideLoading();
                wx.showLoading(parmer);
            } else {
                app.globalData.loading = true;
                wx.showLoading(parmer);
            }
        }
        this.hideLoading = (parmer) => {
            if (this.app.globalData.loading) {
                wx.hideLoading();
            }
        }
        this.showToast = (parmer) => {
            if (this.app.globalData.loading) {
                wx.hideLoading();
            }
            wx.showToast(parmer);
        }
    }
}
export { Whcy, appConfig }