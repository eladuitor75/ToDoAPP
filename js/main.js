new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: []
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({
                    id: this.tasks.length,
                    text: this.newTask,
                    completed: false
                });
                this.newTask = ''; // Reset input after adding
            }
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
    }
});
