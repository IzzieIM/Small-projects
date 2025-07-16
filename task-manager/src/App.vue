<script >
import FormPage from './components/FormPage.vue';
import Table from './components/Table.vue'; 

export default {
  data() {
    return {
      name: 'App',
      todos: []
    }
  },

  mounted() {
    // Load todos from localStorage when component mounts
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  },

  methods: {
    handleTodoAdded(todo) {
      // Add the new todo to the todos array
      this.todos.push(todo);
      // Store the entire todos array in localStorage
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    // handle delete function
    handleDeleteTodo(index) {
      // Remove the todo at the specified index
      this.todos.splice(index, 1);
      // Update localStorage
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    handleUpdateTodo(todo) {
      
    }
  },

  components: {
    FormPage,
    Table
  }
}
</script>

<template>
  <div>
    <FormPage @todo-added="handleTodoAdded"/>
    <h3>Add your Tasks</h3>

    <!-- emit and submit function as prop -->
    <Table :todos="todos" @delete-todo="handleDeleteTodo" @update-todo = 'handleUpdateTodo' />
  </div>
</template>

<style scoped>

</style>
