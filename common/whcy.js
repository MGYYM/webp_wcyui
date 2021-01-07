//挂载到全局
import NetWork  from './common/netWork/index'
class Whcy {
    constructor(baseUrl) {
       this.request = new NetWork(baseUrl).request;
    }
}
export default Whcy