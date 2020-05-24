<template>
    <div>
        <h1>Todoリスト</h1>
        <todo-form @handleParentAddTodo="handleParentAddTodo1"></todo-form>
        <todo-list
            :todos="todos"
            @handleParentDeleteTodo="handleParentDeleteTodo1"
            @handleParentCompleteTodo="handleParentCompleteTodo1"
        >
        </todo-list>
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
  methods: {
    handleParentAddTodo1(value) {
      if (value) {
        this.todos.unshift({ text: value, complete: false });
      }
    },
    handleParentDeleteTodo1(index) {
      this.todos.splice(index, 1);
    },
    handleParentCompleteTodo1(index) {
      this.todos[index].complete = !this.todos[index].complete;
    },
  },
};
</script>

<style scoped>

</style>
