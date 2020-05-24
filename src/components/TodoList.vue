<template>
    <div>
      <div v-for="(todo, index) in todos" :key="index" class="item">
        <label class="item-main">
          <input
            type="checkbox"
            @click="sendCompletedIndex(index)" >
            <span
              :class="[{ 'item-done': todo.complete }]">
              {{ todo.text }}
            </span>
        </label>
        <button
          class="btn -delete item-delete"
          @click="sendDeletedIndex(index)" >
          <i class="material-icons">delete_outline</i>
        </button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['todos'],
  methods: {
    sendCompletedIndex(index) {
      this.$emit('completedIndex', index);
    },
    sendDeletedIndex(index) {
      this.$emit('deletedIndex', index);
    },
  },
};
</script>

<style scoped>
  .item {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .item-main {
    width: 100%;
    text-align: left;
    line-height: 38px;
    cursor: pointer;
    border-radius: 3px;
    padding: 0 5px;
  }
  .item-main:hover {
    background-color: rgba(0,0,0,.03);
  }
  .item-delete {

  }
  .item-done {
    text-decoration: line-through;
  }
</style>
