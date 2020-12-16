
const Counter = {
  data() {
    return {
      counter: 0,
      colsbros: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 500)
  },
  methods: {
    sbros() {
      this.counter = 0,
      this.colsbros++
    }
  },
  template: `Счётчик: {{ counter }} <button @click="sbros">Сброс</button> | количество сбросов: {{ colsbros }}`
}
Vue.createApp(Counter).mount('#counter')

const Ullist = {
  data() {
    return {
      lists: [
        { id: 1, text: 'Lorem 1' },
        { id: 2, text: 'Lorem 2' },
        { id: 3, text: 'Lorem 3' }
      ]
    }
  }
}
Vue.createApp(Ullist).mount('#list')

const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'text 111' },
        { id: 1, text: 'text 222' },
        { id: 2, text: 'text 333' },
        { id: 2, text: 'text 444' },
        { id: 2, text: 'text 555' }
      ]
    }
  }
}
const app = Vue.createApp(TodoList)
app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})
app.mount('#todo-list-app')