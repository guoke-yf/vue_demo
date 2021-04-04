<template>
  <div>
  <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello vue component'
    }
  }
}
</script>

<style>
.msg {
  color: #7fffd4;
  font-size: 30px;
}
</style>
