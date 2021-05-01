<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @addItem="addItem"/>
      <List :todos="todos" v-show="this.todos.length"/>
<!--      <Footer :todos="todos" :deleteAllComplete="deleteAllComplete" :selectAllTodos="selectAllTodos" v-show="this.todos.length"/>-->
      <Footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">{{ completeSize }} / {{ todos.length }}</span>
        <button class="btn btn-danger" @click="deleteAllComplete" slot="delete">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script>
import storageUtil from "./util/storageUtil";
import PubSub from "pubsub-js"
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  data () {
    return {
      // todos: JSON.parse(localStorage.getItem('todo_key') || '[]')
      todos: storageUtil.getTodos()
    }
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
  },
  mounted() {
    PubSub.subscribe('deleteItem', (msg, index) => {
      this.deleteItem(index)
    })
  },
  watch: {
    todos: {
      deep:true,
      handler: storageUtil.savaTodos
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
