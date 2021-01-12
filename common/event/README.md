# Event 全局事件监听

### 使用

引入并在小程序`app`挂载`webp_wcyui`库后，可使用`app.whcy.$on`进行全局消息订阅，`app.whcy.$emit`进行全局消息广播，`app.whcy.$remove`进行取消订阅,消息订阅最好放在`onLoad`生命周期函数里

## 代码演示

### 消息订阅
```
    app.whcy.$on({
      name:"delete-address",
      tg:this,
      success:(res)=>{
        ...
      }
    })

```


### 消息广播

```
  app.whcy.$emit({
     name: "delete-address",
     data: chooseAddress
  });

```
> delete-address 是自定义的消息标识，chooseAddress是自定义的广播数据

### 取消订阅

```
  app.whcy.$remove({
     name: "delete-address",
     tg:this
  });

```
> 默认情况下，小程序页面销毁时会自动取消当前页面的订阅监听

## API

### $on

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 订阅标识 | _string_ | - | - |
| tg | 订阅对象(当前页面实例) | _object_ | - | - |
| success | 订阅成功回调 | _function_ | - | - |

### $emit

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 订阅标识 | _string_ | - | - |
| data | 广播数据 | _object_ | - | - |


### $remove

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 订阅标识 | _string_ | - | - |
| tg | 订阅对象(当前页面实例) | _object_ | - | - |

> 订阅标识建议用常量分类进行管理，仿照vuex的mutation-types，或者是react的action type