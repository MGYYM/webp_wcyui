# FlowWater 瀑布流

### 使用

引入并在小程序`app`挂载`webp_wcyui`库
本组件使用了抽象节点，与其他组件使用方法略有不同，对实现原理感兴趣的同学可以参考微信小程序文档关于[抽象节点](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html)的章节。

瀑布流组件使用步骤如下：

封装一个自定义组件接收数据。
在需要使用瀑布流组件的页面同时引入瀑布流组件和自定义组件。
传入数据渲染瀑布流。
> 目前只支持两列渲染

使用组件之前，因为要自行封装一个承载数据的组件，所以要对组件封装有一定经验，当然您也可以参考demo的源码进行一定的修改。
下面介绍下如何封装承载数据组件。

假设我们创建了一个叫做l-demo的组件。在l-demo组件的js的文件中写入以下代码即可。
```js
  // demo.js
Component({
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
    },
    index:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadthis(event){

    },
    goDetail: function (e) {

    }
  }
})
```
上面的item就是我们要进行渲染的数据，这是经过组件内部处理过的。

假设l-demo组件是以下的wxml结构。
```html
<view class="item list2 mt-2 item-{{index}}" data-id="{{item.goodsSpuId}}" data-item="{{item.goodsSpuId}}" bind:tap="goDetail">
    <image wepb="true" class="img" mode="widthFix" data-index="{{index}}" binderror="loadthis" bindload="loadthis" src="{{item.goodsImg}}"></image>
    <view class="goods-info">
        <view class="title font-md">{{item.goodsName}}</view>
        <view class="price font-md din-font">{{item.goodsPrice}} 积分</view>
    </view>
</view>
```

## 代码演示

### 使用组件
OK，l-demo组件封装好以后，接下来就可以渲染瀑布流了。

在使用瀑布流组件页面的json文件中同时引入water-flow和封装好的l-demo组件。
```html
  <flow-water style="--padding: 10rpx;width:100%" key="goodsSpuId" class="goods-compont" datas="{{goods}}" showLoading="{{goodsLoading}}" generic:itemcus="l-demo">
  </flow-water>
```
> 注意使用可以使用style规定item间距默认间距10rpx，width必须设为100%
## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| key |item的唯一键| string | - | - |
| datas |瀑布流数据| array | [] | - |
| showLoading |加载loading标识| boolean | - | - |

### Events

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| key |item的唯一键| string |
| datas |瀑布流数据| array |
| showLoading |加载loading标识|



