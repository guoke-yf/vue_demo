<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="logo">
<!--    使用组件-->
    <HelloWorld/>
  </div>
</template>

<script>
// 引入组件
import HelloWorld from "./component/HelloWorld";
export default {
  // 映射组件
  components : {
    HelloWorld
  }
}
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
}
</style>
