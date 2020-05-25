<template>
  <div class="l-container">
    <h1>Vue Module List</h1>
    <ul class="index">
      <li><router-link to="/todos">Todo List</router-link></li>
      <li><router-link to="/tabs">Tabs</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .index li {
    margin: 5px 0;
    padding: 5px;
  }
</style>
