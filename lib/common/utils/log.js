"use strict";
var log = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null;
module.exports = {
    info: function () {
        if (!log)
            return;
        // @ts-ignore
        log.info.apply(log, arguments);
    },
    warn: function () {
        if (!log)
            return;
        // @ts-ignore
        log.warn.apply(log, arguments);
    },
    error: function () {
        if (!log)
            return;
        // @ts-ignore
        log.error.apply(log, arguments);
    },
    setFilterMsg: function (msg) {
        if (!log || !log.setFilterMsg)
            return;
        if (typeof msg !== 'string')
            return;
        log.setFilterMsg(msg);
    }
};
