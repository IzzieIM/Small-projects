<script>
export default {
    props: {
        todos: {
            type: Array
        }
    },

    methods: {
        handleDelete(index) {
            // Emit the index of the todo to be deleted
            this.$emit('delete-todo', index);
        },
        handleUpdate(todo) {
            this.$emit('update-todo' , todo);
        }
    }
}
</script>

<template>
    <div class="table-container">
        <table>
            <tr>
                <th>Sr.no</th>
                <th>Task</th>
                <th>Description</th>
                <th> Delete todo </th>
            </tr>
            <tr v-for="(todo , index) in todos" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ todo.task }}</td>
                <td>{{ todo.desc }}</td>
                <td> <button @click="handleDelete(index)">Delete</button>
                    <button @click="handleUpdate(todo)">Update</button>
                </td>
            </tr>
        </table>
    </div>

</template>

<style scoped>

.table-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

table {
    width: 70vw;
}

th {
    padding: 10px;
}

td button {
    margin: 5px;
    background-color: #007bff;
    border: 1px solid #007bff;
}


table, th, td {
  border: 1px solid rgb(255, 255, 255);
  border-collapse: collapse;
}

</style>