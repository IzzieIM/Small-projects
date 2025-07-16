<script >

export default {
    data() {
        return {
            taskname: '',
            description: ''
        }
    },

    methods: {

        handleSubmit() {
            // console.log("Task Name:", this.taskname);
            // console.log("task description:", this.description);
            
            const todo = {
                task: this.taskname,
                desc: this.description
            };
            
            this.$emit('todo-added', todo);

            // reset the values
            this.taskname = '';
            this.description = '';
        }
    }
}

</script>

<template>
    <div class="heading">
        <h1> This is a task Manager</h1>
    </div>

    <div class="form-container">
        <form @submit.prevent="addTodo">
            <label>
                Task Name:
                <input type="text" v-model="taskname" required />
            </label>

            <label>
                Description:
                <textarea v-model="description" rows="4"></textarea>
            </label>

            <button type="submit" @click="handleSubmit">Add To-Do</button>
        </form>

    </div>
</template>

<style scoped>
.heading {
    text-align: center;
    margin-bottom: 2rem;
}

.heading h1 {
    color: #ffffff;
    font-size: 2.5rem;
    margin: 0;
    padding: 1rem 0;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    padding: 2rem;
}

form {
    width: 100%;
    max-width: 500px;
    background-color: white;
    color: #333;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e5e9;
}

label {
    display: block;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #555;
}

input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e1e5e9;
    border-radius: 6px;
    font-size: 1rem;
    margin-top: 0.5rem;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(71, 72, 73, 0.123);
}

textarea {
    resize: vertical;
    min-height: 100px;
}

button {
    width: 100%;
    padding: 0.875rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
}

button:hover {
    background-color: #0056b3;
}

button:active {
    transform: translateY(1px);
}
</style>
