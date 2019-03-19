#这是一个vue 的ui插件
使用：

```js
// main.js中
import zt from 'ztvueui'
Vue.use(zt)
```

##toast插件

```js
// 在App.vue中
mounted() {
  this.$toast.txt({
    content: '复制成功',
    // 其他参数
    // mask: true|false, 遮罩
    // autoClose: true|false, toast自动关闭
    // direction: 'top'|'bottom', 不传是中间
  });
}
```

##modal插件
1, 只有一个按钮alert
```js
mounted() {
  this.$modal.alert({
    // 默认参数
    mask: false, // 底层遮罩
    title: '',   // 标题
    content: '', // 内容
    callback() { }, // 按钮回调
    closeShow: false, // 右上角x
    btnTxt: '我知道了' // 按钮文字
  });
}
```

2, 两个按钮confirm
```js
mounted() {
  this.$modal.confirm({
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
    closeShow: false // 右上角x,不传是false
  });
}
```
