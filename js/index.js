

/* Создание экземпляра приложения */
myApp1 = Vue.createApp({
  data() {
    return {
      titleH1: 'Заголовок H1'
    }
  }
})
myApp1.mount('.myApp1')

/* Создание экземпляра приложения
const myApp2 = {}
Vue.createApp(myApp2).mount('#myApp2')*/