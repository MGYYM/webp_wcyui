"use strict";
var appwcy_event = {};
var $on = function (params) {
    if (!params) {
        return false;
    }
    if (!params.name) {
        console.error("事件监听未设置名称 属性key=name");
        return false;
    }
    if (!params.success) {
        console.error("事件监听未设置回调函数 属性key=success");
        return false;
    }
    if (!params.tg) {
        console.error("事件监听未设置目标对象   属性key=tg");
        return false;
    }
    // @ts-ignore
    if (appwcy_event[params.name]) {
        // @ts-ignore
        var list = appwcy_event[params.name];
        list.push([params.tg, params.success]);
    }
    else {
        // @ts-ignore
        appwcy_event[params.name] = [
            [params.tg, params.success]
        ];
    }
    pageStatus(params.tg);
};
var $emit = function (params) {
    if (!params) {
        return false;
    }
    if (!params.name) {
        console.error("事件发送未设置名称 属性key=name");
        return false;
    }
    // @ts-ignore
    if (appwcy_event[params.name]) {
        // @ts-ignore
        var list = appwcy_event[params.name];
        list.forEach(function (item) {
            item[1].call(item[0], params.data);
        });
    }
};
var $remove = function (params) {
    if (!params) {
        return false;
    }
    if (!params.tg) {
        console.error("事件监听未设置目标对象   属性key=tg");
        return false;
    }
    // @ts-ignore
    if (params.name && appwcy_event[params.name]) {
        // @ts-ignore
        appwcy_event[params.name] = appwcy_event[params.name].filter(function (a) {
            return a[0] != params.tg;
        });
    }
    else {
        for (var key in appwcy_event) {
            // @ts-ignore
            appwcy_event[key] = appwcy_event[key].filter(function (a) {
                return a[0] != params.tg;
            });
        }
    }
};
var pageStatus = function (self) {
    if (self["onUnload"]) {
        var s = self["onUnload"];
        self["onUnload"] = function (a) {
            s.call(this, a);
            $remove({
                tg: this
            });
        };
    }
    else {
        self["onUnload"] = function () {
            $remove({
                tg: this
            });
        };
    }
};
exports.$on = $on;
exports.$emit = $emit;
exports.$remove = $remove;
