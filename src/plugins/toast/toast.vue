<template>
  <transition name="fade">
    <div>
      <div class="toast" v-show="isVisible" :style="directions">
        {{content}}
      </div>
      <div class="mask" v-show="mask">
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'zt-toast',
  props: {
    content: String,
    autoClose: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'middle'
    }
  },
  data() {
    return {
      show: true,
      isVisible: true,
    };
  },
  computed: {
    directions() {
      if (this.direction === 'top') {
        return 'top:20%';
      } if (this.direction === 'bottom') {
        return 'top:80%';
      }
      return 'top:40%';
    }
  },
  methods: {
    close() {
      this.isVisible = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
    });
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;left: 0;right: 0;bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  margin-left: -32vw;
  width: 64vw - 40/3.75vw;
  font-size: 4vw;
  padding: 15/3.75vw 20/3.75vw;
  line-height: 22/3.75vw;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 100*6/375vw;
  z-index: 999;
}

.fade-enter-active, .fade-leave-active{
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2);
}
.fade-leave-active {
  opacity: 0;
  transform: scale(0.8);
}
</style>
