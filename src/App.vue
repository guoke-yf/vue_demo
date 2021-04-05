<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addItem="addItem"/>
      <List :todos="todos" :deleteItem="deleteItem" v-show="this.todos.length"/>
      <Footer :todos="todos" :deleteAllComplete="deleteAllComplete" :selectAllTodos="selectAllTodos" v-show="this.todos.length"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todo_key') || '[]')
    }
  },
  watch: {
    todos: {
      deep:true,
      handler: function (value) {
        localStorage.setItem('todo_key',JSON.stringify(value))
      }
    }
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
  },
  components: {
    Header,
    List,
    Footer
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
