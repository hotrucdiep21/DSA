const newTodo = new TodoList();
function addTask () {
    let taskInput = document.getElementById('taskInput')
    const taskText = taskInput.value.trim();

    if(taskText.length > 0) {
        newTodo.addTask(taskText);
        taskInput.getElementById('taskInput') = "";
        
        newTodo.renderTask();
    }
}

document.getElementById('addButton').addEventListener('click', addTask)
document.getElementById('taskInput').addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
        addTask();
    }
})