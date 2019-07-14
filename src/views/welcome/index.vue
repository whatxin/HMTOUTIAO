<template>
    <div class="welcome-content">
        <img src="../../assets/images/welcome.jpg" alt="">
    </div>
</template>

<script>
export default {
  created () {
    this.axios.get('articles').then(res => console.log(res))
  }
}
</script>

<style lang="less" scoped>
.welcome-content{
text-align: center;
}
</style>
