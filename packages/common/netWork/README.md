# NetWork 请求

### 使用

引入并在小程序`app`挂载`webp_wcyui`库后，可使用`wx.whcy.request`进行网络请求

## 代码演示

### 默认请求
默认为`get`请求，支持`wx.request`的全部请求类型，和全部请求参数,点击查看 [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
```
  wx.whcy.request({
    url:"https://www.zhangxinxu.com/php/_ajax-support.php",
  }).then((res)=>{
    console.log(res);
  });
```


### 请求loading

支持添加`needLoading`参数，来添加小程序loading图标

```
  wx.whcy.request({
    url:"https://www.zhangxinxu.com/php/_ajax-support.php",
    needLoading:true
  }).then((res)=>{
    console.log(res);
  });
```
> needLoading 提供的是小程序原生的loading加载，如需要继承其他加载图标可以在promise后使用自己的图标库

### 小程序后台日志

支持添加`needLog`参数，来记录请求时的日志到小程序后台管理系统，集成了微信的实时日志功能，点击查看 [实时日志](https://developers.weixin.qq.com/miniprogram/dev/framework/realtimelog/)

```
  wx.whcy.request({
    url:"https://www.zhangxinxu.com/php/_ajax-support.php",
    needLog:true
  }).then((res)=>{
    console.log(res);
  });
```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| url | 请求地址 | _string_ | - | - |
| needLoading | 是否需要加载标识 | _boolean_ | `false` | - |
| needLog | 是否需要日志记录 | _boolean_ | `false` | - |
| - | 更多参数和`wx.request`一致，点击[查看](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html) | - | - | - |

