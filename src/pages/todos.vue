<template>
    <div class="l-container">
      <main>
        <h1>Todo List</h1>
        <todo-form @sendValue="updateTodo" />
        <todo-list
        :todos="todos"
        @completedIndex="completedIndexLocal"
        @deletedIndex="deletedIndexLocal"
        />
      </main>
      <footer class="footer">
        <i class="material-icons">keyboard_arrow_left</i>
        <router-link to="/">HOME</router-link>
      </footer>
    </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default {
  name: 'Todo',
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() { // 初期表示時の動作
    this.loadTodo();
  },
  methods: {
    saveTodo() { // ブラウザに保存
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodo() { // ブラウザに保存されたリストを呼び出す
      this.todos = JSON.parse(localStorage.getItem('todos'));
      if (!this.todos) {
        this.todos = [];
      }
    },

    updateTodo(value) {
      if (value) {
        this.todos.push({ text: value, complete: false });
        this.saveTodo();
      }
    },
    completedIndexLocal(index) {
      this.todos[index].complete = !this.todos[index].complete;
      this.saveTodo();
    },
    deletedIndexLocal(index) {
      this.todos.splice(index, 1);
      this.saveTodo();
    },
  },
};
</script>

<style scoped>

</style>
