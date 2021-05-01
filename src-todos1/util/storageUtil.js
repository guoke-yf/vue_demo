const TODOS_KEY = 'todo_key'
export default {
  savaTodos (todos) {
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },

  getTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
