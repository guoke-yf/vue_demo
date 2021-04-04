<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addItem="addItem"/>
      <TodoList :todos="todos" :deleteItem="deleteItem"/>
      <TodoFooter :todos="todos" :deleteAllComplete="deleteAllComplete" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  data () {
    return {
      // 死数据
      // todos: [
      //   {
      //     title: '吃饭',
      //     complete: false
      //   },{
      //     title: '睡觉',
      //     complete: false
      //   },{
      //     title: '打豆豆',
      //     complete: false
      //   },
      // ]
      todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
    }
  },
  watch: {
    todos: {
      deep: true,
      handler (value,oldData) {
        localStorage.setItem('todos_key',JSON.stringify(value))
      }
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods: {
    addItem (todo) {
      this.todos.unshift(todo)
    },
    deleteItem (index) {
      this.todos.splice(index, 1)
    },
    deleteAllComplete () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },
    selectAllTodos (check) {
      this.todos.forEach(todo => todo.complete = check)
    }
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
