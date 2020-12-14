
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  methods: {
    sbros() {
      this.counter = 0
    }
  },
  template: 
  `
    <div class="counter"> {{ counter }} </div>
    <button @click="sbros">Сбросить Счётчик</button>
  `
}
Vue.createApp(Counter).mount('#app')




const app22 = Vue.createApp({})
app22.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.count++
    }, 2000)
  },
  template: `
    <button @click="count--">
      You clicked me {{ count }} times.
    </button>`
})
app22.mount('#components-demo')





const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  template: 
  `
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  `
}
Vue.createApp(ListRendering).mount('#list-rendering')



const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
const teodoro = Vue.createApp(TodoList)
teodoro.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})
teodoro.mount('#todo-list-app')

