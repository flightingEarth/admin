<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './styles/index.scss'; // 全局自定义的css样式

  .toolbar {
    background: #fff;
    padding: 20px 0 10px 0;
    .el-form-item {
      margin-bottom: 10px;
    }
  }
</style>
