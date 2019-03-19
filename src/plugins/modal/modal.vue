<template>
  <transition name="fade">
    <div v-show="isVisible">
      <div class="modal">
        <div class="title" v-if="title">
          {{title}}
        </div>
        <div class="main">
          {{content}}
        </div>
        <div class="buttons" v-if="alert">

          <div class="btn" @click="handleClick">{{btnTxt}}</div>
        </div>
        <div class="buttons" v-else>
          <div class="left" @click="handleCancelClick">{{leftBtnTxt}}</div>
          <div class="right" @click="handleOKClick">{{rightBtnTxt}}</div>
        </div>
      </div>
      <div class="mask" v-show="mask">
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'zt-modal',
  props: {
    type: String,
    title: String, // 标题
    content: String, // 内容
    btnTxt: String, // 按钮文字
    leftBtnTxt: String,
    rightBtnTxt: String,
    callback: {
      type: Function,
      default() {}
    },
    leftCallback: {
      type: Function,
      default() {}
    },
    rightCallback: {
      type: Function,
      default() {}
    },
    mask: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    alert() {
      if (this.type === 'alert') {
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      show: true,
      isVisible: true,
    };
  },
  methods: {
    handleClick() {
      this.isVisible = false;
      this.callback();
    },
    handleOKClick() {
      this.isVisible = false;
      this.rightCallback();
    },
    handleCancelClick() {
      this.isVisible = false;
      this.leftCallback();
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
    });
  }
};
</script>

<style lang="less" scoped>
.mask {
  z-index: 99;
  position: fixed;
  top: 0;left: 0;right: 0;bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.modal {
  z-index: 999;
  position: fixed;
  top: 30%;
  left: 50%;
  width: 300/3.75vw;
  margin-left: -150 / 3.75vw;
  background-color: #fff;
  text-align: center;
  border-radius: 6/3.75vw;
  border: 1px solid #ccc;
  .title {
    text-align: center;
  }
  .main {
    margin: 20/3.75vw 15/3.75vw;
    font-size: 17/3.75vw;
    color: #000;
    line-height: 24/3.75vw;
  }
  .buttons{
    border-top: 1/3.75vw solid #ccc;
    overflow: hidden;
    .btn {
      border: none;
      width: 100%;
      font-size: 17/3.75vw;
      font-weight: bold;
      color: #EE6D0F;
      line-height: 50/3.75vw;
      height: 50/3.75vw;
      padding: 0;
      background-color: #fff;
    }
    .left {
      float: left;
      width: 149/3.75vw;
      border-right: 1px solid #ccc;
      text-align: center;
      font-size: 17/3.75vw;
      line-height: 50/3.75vw;
      color: #000;
    }
    .right {
      float: left;
      width: 150/3.75vw;
      text-align: center;
      font-size: 17/3.75vw;
      line-height: 50/3.75vw;
      color: #EE6D0F;
    }
  }
}

.fade-enter-active, .fade-leave-active{
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  // transform: scale(1.2);
}
.fade-leave-active {
  opacity: 0;
  // transform: scale(0.8);
}
</style>
