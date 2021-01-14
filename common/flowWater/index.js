Object.defineProperty(exports, '__esModule', { value: true });
//注意curPage和pageNum的区分
function WcyComponent(vantOptions = {}) {
  const options = {};
  Object.assign(options,vantOptions)
  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class');
  options.behaviors = options.behaviors || [];
  if (options.properties) {
    Object.keys(options.properties).forEach((name) => {
      if (Array.isArray(options.properties[name])) {
        // miniprogram do not allow multi type
        options.properties[name] = null;
      }
    });
  }
  Component(options);
}
WcyComponent({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    datas: {
      type: Array,
      value:[],
      observer: function(newVal, oldVal) {
        if(newVal.length>oldVal.length&&Object.prototype.toString.call(newVal)=="[object Array]"){
          //属性值变化时执行
          this.initListParmer();
          let oldLen = this.data.linkDatas.length;
          this.data.attachedNum = newVal.length - oldLen;
          this.data.linkDatas.push(...newVal.splice(oldLen,newVal.length));
          this.setData({
            linkDatas:this.data.linkDatas
          })
        }
      }
    },
    showLoading:{
      type:Boolean,
      value:false
    },
    key:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    linkDatas:[],
    attachedNum:0,
    loadFinishNum:0,//一次load事件完成的数目
    loadingMoreHidden: true,
    shouldInit:true
  },
  lifetimes: {
    attached: function () {
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    }
  },
  /**
   * 组件的方法列表 
   */
  methods: {
    updateView(){//更新视图事件
      let newArray = [...this.data.linkDatas];
      this.triggerEvent("updatedata",newArray);
      this.setData({
        linkDatas: newArray
      });
    },
    refreshItem(index,_this){
      let query = wx.createSelectorQuery().in(_this);
     // console.log(this.selectComponent(itemcus));
      query.selectAll(`.item-${index}`).boundingClientRect(ret => {
        ret.forEach((ele, ii) => {
          let id = ele.dataset.item;
          let height = ele.height
          let span = Math.ceil(height / 10)  // 20 = grid-auto-row
          //  styleStr += `--item-span-${sii}: auto / span ${span};`
          let curItem = this.data.linkDatas.filter(e => e[this.data.key] == id);
          if (curItem[0]["gridstyle"]) return;
          debugger
          curItem[0]["gridstyle"] = `grid-row:auto / span ${span};`
          this.data.loadFinishNum = this.data.loadFinishNum +1;
          if(this.data.loadFinishNum == this.data.attachedNum){
            this.updateView();
          }
        })
      }).exec();
    },
    loadthis(event){//图片渲染事件//瀑布流图片

      event = event.detail;
      let index = event.currentTarget.dataset.index;
      let _this = this.selectComponent("#itemcus"+index);
      this.refreshItem(index,_this);
    },
    initListParmer(){//初始一次ajax事件
      this.data.attachedNum = 0;//初始化数目
      this.data.loadFinishNum = 0;//加载完成的数目
    }
  }
})
