<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Sistema de Cotas do Mercado Financeiro"/>
    
    <TodoTasks :todoTasks="tasksList" />
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoTasks from './components/TodoTasks.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TodoTasks
  }, 
  data: function(){
    return {
      tasksList : [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
