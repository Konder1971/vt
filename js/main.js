
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 500)
  },
  methods: {
    sbros() {
      this.counter = 0
    }
  },
  template: ` Счётчик: {{ counter }} <button @click='sbros'>Сброс</button> `
}
Vue.createApp(Counter).mount('.counter')


const Invvod = {
  data() {
    return {
      vvod: ''
    }
  }
}
Vue.createApp(Invvod).mount('.invvod')

const Ifseen = {
  data() {
    return {
      seen: true
    }
  }
}
Vue.createApp(Ifseen).mount('.ifseen')

const Olspisok = {
  data() {
    return {
      spisok: [
        {id: 1, text: 'lorem 1'},
        {id: 2, text: 'lorem 2'},
        {id: 3, text: 'lorem 3'},
        {id: 4, text: 'lorem 4'}
      ]
    }
  }
}
Vue.createApp(Olspisok).mount('.olspisok')


const Comp = {
  data() {
    return {
      spiskli: [
        {id: 1, text: 'spiskli 1'},
        {id: 2, text: 'spiskli 2'},
        {id: 3, text: 'spiskli 3'},
        {id: 4, text: 'spiskli 4'}
      ]
    }
  }
}
const app = Vue.createApp(Comp)

app.component('spisok-li', {
  props: ['spis'],
  template: `<li>{{ spis.text }} : {{ spis.id }}</li>`
})

app.mount('.comp')