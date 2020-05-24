<template>
    <div>
      <div v-for="(todo, index) in todos" :key="index" class="item">
        <div class="item-main">
          <label>
            <input
              type="checkbox"
              @click="sendCompletedIndex(index)" >
              <span
                :class="[{ 'item-done': todo.complete }]">
                {{ todo.text }}
              </span>
          </label>
        </div>
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

  }
  .item-delete {

  }
  .item-done {
    text-decoration: line-through;
  }
</style>
