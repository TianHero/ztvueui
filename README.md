#这是一个移动端的vue 的ui插件
使用：

- 2安装
>npm install --save ztvueui

- 3使用
```js
// main.js中
import plugin from 'ztvueui'
Vue.use(plugin)
```

## toast插件

```js
// 在App.vue中
mounted() {
  this.$ht_toast.txt({
    content: '复制成功',
    // 其他参数
    // mask: true|false, 遮罩
    // autoClose: true|false, toast自动关闭
    // direction: 'top'|'bottom', 不传是中间
  });
}
```

```js
// 在组件外使用，例如 request.js文件
import { Toast } from '@hetao/market-ui';

Toast.txt({
  content: '班级尚未开启预约报名活动'
});

```

## modal插件
1, 只有一个按钮alert
```js
mounted() {
  this.$ht_modal.alert({
    // 默认参数
    title: '',   // 标题,不传是空
    content: '', // 内容,不传是空
    callback() { }, // 按钮回调
    closeShow: false, // 右上角x,不传是false
    btnTxt: '我知道了' // 按钮文字,不传是'我知道了'
    mask: false, // 底层遮罩,不传是false
  });
}
```

2, 两个按钮confirm
```js
mounted() {
  this.$ht_modal.confirm({
    title: '标题', // 不传是空
    content: '内容', // 不传是空
    leftBtnTxt: '左边按钮文字', // 不传是"取消"
    rightBtnTxt: '右边按钮文字',// 不传是"确定"
    leftCallback() { // 左边按钮的回调
      console.log('left');
    },
    rightCallback() { // 右边按钮的回调
      console.log('right');
    },
    closeShow: false, // 右上角x,不传是false
    mask: false, // 底层遮罩,不传是false
  });
}
```
