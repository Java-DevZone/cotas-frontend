<template>
  <ol>
    <li class="left-align"
      v-for="item in todoTasks"
      :key="item.id"> {{item.text}} </li>
  </ol>
</template>

<script>
export default {
  name: 'TodoTasks',
  props: {todoTasks: Array}
}
</script>

<style>
.left-align {
  text-align: left;
}
</style>