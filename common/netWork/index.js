
const log = require('../utils/log')
import Base from '../../base'
class NetWork extends Base{
    constructor(baseUrl,app) {
       super(app);
       this.baseUrl = baseUrl;
    }
    request(parmer){
        let {url,data,needLoading} = {...parmer};
        let _url = (this.baseUrl||'') + url;
        let _this = this;
        return new Promise(function (resolve, reject) {
            if(needLoading){
                delete parmer[needLoading];
                _this.app.showLoading();
            }
            wx.request({
                ...parmer,
                url: _url,
                data: data?data:null,
                success: function success(res) {
                    resolve(res.data);
                },
                fail: function fail(error) {
                    //弹出提示框
                    _this.app.showToast({
                        icon:"none",
                        title: '网络请求失败',
                        duration: 2000
                    })
                    log.error(`${_url}:${error}`);
                    log.setFilterMsg('netWork')
                    reject(error);
                },
                complete: function complete() {
                    if(needLoading){
                        // 加载完成
                        _this.app.hideLoading();
                    }
                }
            });
        });
    }
} 
export default NetWork;