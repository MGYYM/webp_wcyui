//挂载到全局
import NetWork  from './common/netWork'
import appConfig  from './common/appConfig'
import Base from 'base'
class Whcy extends Base{
    constructor(baseUrl,app) {
       console.log(app);
       super(app);
       this.request = new NetWork(baseUrl,app).request;
    }
}
export { Whcy,appConfig }