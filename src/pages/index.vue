<template>
    <div class="l-container">
        <h1>Todo List</h1>
        <todo-form @sendValue="updateTodo" />
        <todo-list
         :todos="todos"
         @completedIndex="completedIndexLocal"
         @deletedIndex="deletedIndexLocal"
        />
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

<style>
  * {
    box-sizing: border-box;
  }

  .btn {
    cursor: pointer;
    font-size: 16px;
    border: none;
    border-radius: 3px;
  }
  .btn.-send {
    width: 58px;
    height: 100%;
    color: white;
    font-weight: bold;
    background-color: #17a2b8;
    border-radius: 0 3px 3px 0;
  }
  .btn.-delete {
    color: rgba(0,0,0,.54);
  }
  .btn.-delete:hover {
    color: rgba(0,0,0,.36);
  }
</style>

<style scoped>
  .l-container {
    max-width: 600px;
    margin: auto;
  }
</style>
