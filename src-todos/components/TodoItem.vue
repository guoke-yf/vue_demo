<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
export default {
  data () {
    return {
      bgColor: '#fff',
      isShow: false
    }
  },
  props: {
    todo: Object,
    index: Number,
    deleteItem: Function
  },
  methods: {
    handleEnter (isEnter) {
      if (isEnter) {
        this.bgColor = '#aaa'
        this.isShow = true
      } else {
        this.bgColor = '#fff'
        this.isShow = false
      }
    },
    deleteTodo () {
      const {todo, index, deleteItem} = this
      if (!todo.complete) {
        alert('请先勾选')
        return
      }
      if (window.confirm(`确定删除${todo.title}吗？`)) {
        deleteItem(index)
      }
    }
  }
}
</script>

<style>

</style>
