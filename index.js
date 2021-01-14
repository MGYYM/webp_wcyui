//挂载到全局
import NetWork  from './common/netWork/index'
import appConfig  from './common/appConfig/index'
import {$on,$emit,$remove}  from './common/event/index'
import Base from 'base'
class Whcy extends Base{
    constructor(baseUrl,app) {
       console.log(app);
       super(app);
       this.request = new NetWork(baseUrl,app).request;
       this.$on = $on;
       this.$emit = $emit;
       this.$remove = $remove;
    }
}
export { Whcy,appConfig }