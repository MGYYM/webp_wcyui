//挂载到全局
import NetWork from './common/netWork/index';
import appConfig from './common/appConfig/index';
let { $on, $emit, $remove } = require('./common/event/index');
import Base from './common/base'
class Whcy extends Base {
    private request: (parmer: Object) => Promise<unknown>;
    private $emit: any;
    private $on: any;
    private $remove: any;
    private showLoading: (parmer) => void;
    private hideLoading: (parmer) => void;
    private showToast: (parmer) => void;
    constructor(baseUrl, app) {
        console.log(app);
        super(app);
        this.request = new NetWork(baseUrl, app).request;
        this.$on = $on;
        this.$emit = $emit;
        this.$remove = $remove;
        this.showLoading = (parmer) => {//由于微信特点这里防止没有关闭Loading
            // @ts-ignore
            if (this.app.globalData.loading) {
                wx.hideLoading();
                wx.showLoading(parmer);
            } else {
                app.globalData.loading = true;
                wx.showLoading(parmer);
            }
        }
        this.hideLoading = (parmer) => {
            // @ts-ignore
            if (this.app.globalData.loading) {
                wx.hideLoading();
            }
        }
        this.showToast = (parmer) => {
            // @ts-ignore
            if (this.app.globalData.loading) {
                wx.hideLoading();
            }
            wx.showToast(parmer);
        }
    }
}
export { Whcy, appConfig }