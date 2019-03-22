<template>

  <div class="loadings" v-show="isShow">
    <div class="loadings__loader">
      <img src="//img.pipacoding.com/assets/new4_landingpage/Spinner-1s-34px.svg" style="background:rgba(0,0,0,0.6);height: 120px;width: 120px;position: fixed; top: 45%; left: 50%; zIndex: 1000;marginLeft: -60px; marginTop: -60px">
    </div>
  </div>

</template>
<script type="text/babel">
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
      document.body.style['overflow-y'] = 'hidden'
    },
    hide() {
      this.isShow = false;
      document.body.style['overflow-y'] = 'auto'
    }
  },
  destroyed() {
    document.body.style['overflow-y'] = 'auto'
  },
};
</script>
