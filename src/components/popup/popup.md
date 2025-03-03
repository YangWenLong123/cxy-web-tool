# 程序员箱子弹窗组件

程序员箱子弹窗组件，设计为两种类型，一种是手动触发，当我们需要显示时，手动调用显示，并支持队列模式，另外一种是通过接口查询，自动显示，支持队列模式。

## 类型一(手动触发)

- 代码

```js
import { usePopupStore } from "@/store/modules/popup";

store.setPopup({
  showPopup: true, //true:显示 flase:关闭
  popup_type: "1", //弹窗类型 1:手动触发 2:自动触发
  popup_mode: ["WeChat", "Side"], //打开弹窗 内置
});
```

## 类型二(自动触发)

- 代码

```js
import { usePopupStore } from "@/store/modules/popup";

store.setPopup({
  showPopup: true, //true:显示 flase:关闭
  popup_type: "2", //弹窗类型 1:手动触发 2:自动触发
});
```
