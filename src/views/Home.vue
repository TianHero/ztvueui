<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  created() {
    // this.$toast({
    //   message: '复制成功',
    //   mask: true,
    //   duration: 3000,
    // });

    this.$toast.txt({
      content: '复制成功'
    });
    // this.$modal.confirm({
    //   content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    //   leftCallback() {
    //     console.log('left');
    //   },
    //   rightCallback() {
    //     console.log('right');
    //   }
    // });
    // this.$modal.alert({
    //   title: '标题',
    //   content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    //   callback() {
    //     console.log('left');
    //   },
    //   mask: false,
    // });
  }
};
</script>
