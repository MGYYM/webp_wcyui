
const log = require('../utils/log')
class NetWork {
    constructor(baseUrl) {
       this.baseUrl = baseUrl;
    }
    request(parmer){
        let {url,data,needLoading} = {...parmer};
        let _url = this.baseUrl + url;
        return new Promise(function (resolve, reject) {
            if(needLoading){
                
            }
            wx.request({
                ...parmer,
                url: _url,
                data: data?data:null,
                success: function success(res) {
                    if(res.status==403){
                        log.error(`${_url}:403`);
                        //删除token
                        wx.removeStorageSync("token");
                    }
                    console.log(res.header["Authorization"]) //打印响应头的数据
                    let authorization = res.header["Authorization"];
                    if(authorization){//只要响应头里有authorization就存储
                        wx.setStorageSync("token",authorization);
                    }
                    if(res.status!=1){
                        log.error(`${_url}:${res?res.msg:""}`);
                        log.setFilterMsg('netWork')
                    }
                    //wx.hideLoading();
                    resolve(res.data);
                },
                fail: function fail(error) {
                    //弹出提示框
                    app.showToast({
                        image:"/static/images/icon/waring.svg",
                        title: '网络请求失败',
                        duration: 2000
                    })
                    log.error(`${_url}:${error}`);
                    log.setFilterMsg('netWork')
                   // wx.hideLoading();
                    reject(error);
                },
                complete: function complete(aaa) {
                    // 加载完成
                }
            });
        });
    }
} 
export default NetWork;