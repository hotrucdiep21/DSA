class TodoList {
    constructor() {
        this.tasks = []
    }

    addTask(textTask) {
        const tasks = {
            text: textTask
        }
        this.tasks.push(tasks);
        this.renderTask();
    }

    renderTask() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = ''
        this.tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${task.text}</span>
                <span>
                    <button class="edit-button"span>Edit</button>
                    <button class="edit-button"span>Delete</button>
                </span>

            `;
            taskList.appendChild(listItem)
        });


    }
}