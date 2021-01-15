"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.WcyComponent({
    /**
     * 组件的属性列表
     */
    props: {
        datas: {
            type: Array,
            value: [],
            observer: function (newVal, oldVal) {
                var _a;
                if (newVal.length == 0) {
                    this.setData({
                        linkDatas: []
                    });
                    return;
                }
                if (newVal.length > oldVal.length && Object.prototype.toString.call(newVal) == "[object Array]") {
                    //属性值变化时执行
                    this.initListParmer();
                    var oldLen = this.data.linkDatas.length;
                    this.data.attachedNum = newVal.length - oldLen;
                    // @ts-ignore
                    (_a = this.data.linkDatas).push.apply(_a, newVal.splice(oldLen, newVal.length));
                    this.setData({
                        linkDatas: this.data.linkDatas
                    });
                }
            }
        },
        showLoading: {
            type: Boolean,
            value: false
        },
        key: {
            type: String
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        linkDatas: [],
        attachedNum: 0,
        loadFinishNum: 0,
        loadingMoreHidden: true,
        shouldInit: true
    },
    created: function () {
    },
    destroyed: function () {
        // 在组件实例被从页面节点树移除时执行
    },
    /**
     * 组件的方法列表
     */
    methods: {
        updateView: function () {
            var newArray = __spreadArrays(this.data.linkDatas);
            // @ts-ignore
            this.triggerEvent("updatedata", newArray);
            this.setData({
                linkDatas: newArray
            });
        },
        refreshItem: function (index, _this) {
            var _this_1 = this;
            var query = wx.createSelectorQuery().in(_this);
            // console.log(this.selectComponent(itemcus));
            query.selectAll(".item-" + index).boundingClientRect(function (ret) {
                // @ts-ignore
                ret.forEach(function (ele, ii) {
                    var id = ele.dataset.item;
                    var height = ele.height;
                    var span = Math.ceil(height / 10); // 20 = grid-auto-row
                    //  styleStr += `--item-span-${sii}: auto / span ${span};`
                    var curItem = _this_1.data.linkDatas.filter(function (e) { return e[_this_1.data.key] == id; });
                    if (curItem[0]["gridstyle"])
                        return;
                    // @ts-ignore
                    curItem[0]["gridstyle"] = "grid-row:auto / span " + span + ";";
                    _this_1.data.loadFinishNum = _this_1.data.loadFinishNum + 1;
                    if (_this_1.data.loadFinishNum == _this_1.data.attachedNum) {
                        _this_1.updateView();
                    }
                });
            }).exec();
        },
        loadthis: function (event) {
            event = event.detail;
            var index = event.currentTarget.dataset.index;
            var _this = this.selectComponent("#itemcus" + index);
            this.refreshItem(index, _this);
        },
        initListParmer: function () {
            this.data.attachedNum = 0; //初始化数目
            this.data.loadFinishNum = 0; //加载完成的数目
        }
    }
});
