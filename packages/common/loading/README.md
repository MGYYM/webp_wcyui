# Loading 加载

### 使用

引入并在小程序`app`挂载`webp_wcyui`库后，可使用`wx.whcy.showLoading`,`wx.whcy.hideLoading`进行加载，微信默认的wx.loading如果忘记进行关闭会造成问题，这里采用全局变量进行管理，配合使用`wx.whcy.showToast`保证加载框能在任何需要的时候进行自动关闭。
<img style="width: 600px;" src="https://raw.githubusercontent.com/MGYYM/webp_wcyui/master/docs/static/image/loding-tip.png" />

## 代码演示

### 显示Loading

```
  wx.whcy.showLoading()
```


### 关闭Loading

```
  wx.whcy.hideLoading()
```
## API

### showLoading Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| - | 参数和`wx.showLoading`一致，点击[查看](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html) | - | - | - |

### hideLoading Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| - | 参数和`wx.hideLoading`一致，点击[查看](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html) | - | - | - |


