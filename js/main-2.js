const Zametki = Vue.createApp({
  data() {
    return {
      title: 'Список Заметок',
      placeholderText: 'введите заголовок',
      zagolovok: '',
      spisoks: []
    }
  },
  methods: {
    dobavit() {
      if(this.zagolovok !== '') {
        this.spisoks.push(this.zagolovok)
        this.zagolovok = ''
      }
    },
    udalit(index) {
      this.spisoks.splice(index, 1)
    },
    upper(item) {
      return item.toUpperCase()
    }
  },
  computed: {
    udaleno() {
      return this.spisoks.length * 2
    }
  },
  watch: {
    zagolovok(value) {
      if(value.length > 25) {
        this.zagolovok = ''
      }
    }
  }
})
Zametki.mount('#zametki')


const Counter = {
  data() {
    return {
      counter: 0,
      colsbros: 0
    }
  },/*
  mounted() {
    setInterval(() => {
      this.counter++
    }, 500)
  },*/
  created() {
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

/* Создание экземпляра приложения */
const app2 = Vue.createApp ({
  data() {
    return {
      ekz: 'Создание экземпляра приложения'
    }
  }
})
const vm2 = app2.mount('#ekz')

/* Создание компонентов */
const app3 = Vue.createApp({})
app3.component('button-counter', {
  data() {
    return {
      count: 1
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button> Создание компонентов<br />`
})
app3.mount('#components-demo')


const App4 = {
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    }
  }
}
const app4 = Vue.createApp(App4)
app4.component('blog-post', {
  props: ['title'],
  template: `<h4>{{ title }}</h4>`
})
app4.mount('#blog-posts-demo')



const app5 = Vue.createApp({
  data() {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue'},
        { id: 2, title: 'Blogging with Vue'},
        { id: 3, title: 'Why Vue is so fun'}
      ],
      postFontSize: 1
    }
  }
})
app5.component('blog-post', {
  props: ['title'],
  template: `
    <p class="blog-post">
      <h4>{{ title }}</h4>
      <button @click="$emit('enlarge-text')">
        Увеличить text
      </button>
    </p>
  `
})
app5.mount('#blog-posts-events-demo')