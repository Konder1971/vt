
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
