<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>{{ completeSize }}</span> / {{ todos.length }}
        </span>
    <button class="btn btn-danger" @click="deleteAllComplete">清除已完成任务</button>
  </div>

</template>

<script>
export default {
  props: {
    todos: Array,
    deleteAllComplete: Function,
    selectAllTodos: Function
  },
  computed: {
    completeSize () {
      return this.todos.reduce((pretotal, todo) => pretotal + (todo.complete?1: 0), 0)
    },
    isAllCheck: {
      get () {
        return this.todos.length === this.completeSize && this.completeSize
      },
      set (value) {
        this.selectAllTodos(value)
      }
    }
  }
}
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>
