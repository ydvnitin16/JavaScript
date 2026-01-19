let tasks = [];
tasks = JSON.parse(localStorage.getItem('tasks')) || []
const listContainer = document.querySelector('#list-container');

//initialise tasks Element
const taskElements = [];

//Create Element
function renderTasks(task) {
    return `<li id="${task.id}">
    <label class="label">
            <input type="checkbox" class = "mark">
            <span>${task.name}</span>
          </label>
          <span class="edit-btn">Edit</span>
          <span class="delete-btn">Delete</span>
          </li>`
};

//Loop Over Tasks To Create Element
function renderTasksList() {
    
    listContainer.innerHTML = tasks.map(task => renderTasks(task)).join('');

    //maintain elements into an array
    taskElements.length = 0;
    const elements = document.querySelectorAll('li');
    elements.forEach(element => taskElements.push(element));
    updateCounter()
};

renderTasksList();

//Add New Task
document.querySelector('#input-button')
    .addEventListener('click', () => {
        const taskName = document.querySelector('#input-box');
        if (taskName.value.trim() == '') {
            return alert(`Enter Something`)
        };

        const uniqueId = Date.now();
        tasks.push({ id: uniqueId, name: `${taskName.value}`, isCompleted: false });
        taskName.value = '';
        renderTasksList(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    });


//Listen For Clicks On Edit Buttons And Delete Buttons
listContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-btn')) {
        const taskId = event.target.parentElement.id;
        editTask(Number(taskId))
    }
     else if (event.target.classList.contains('delete-btn')) {
        const taskId = event.target.parentElement.id;
        deleteTask(Number(taskId))
    }
     else if (event.target.classList.contains('mark')) {
        const taskId = event.target.closest('li').id;
        markTask(Number(taskId));
    }
});

//Edit Task
function editTask(taskId) {
    const modal = document.querySelector('.edit-modal');
    let input = document.querySelector('#edit-input');
    modal.classList.remove('hide')

    let index = tasks.findIndex(task => task.id === taskId)
    input.value = tasks[index].name;

    const saveBtn = document.querySelector('#save-edit');
    const cancelBtn = document.querySelector('#cancel-edit');

    saveBtn.onclick = () => {
        if (input.value.trim() === '') {
            return alert('Task name cannot be empty');
        }
        tasks[index].name = input.value;
        modal.classList.add('hide')
        renderTasksList(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    };

    cancelBtn.onclick = () => {
        modal.classList.add('hide')
    }
}

//DeleteTask
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasksList(tasks)
}

//Mark As Task Done
function markTask(taskId) {
    const index = tasks.findIndex(task => task.id === taskId)
    if(tasks[index].isCompleted === false){
        tasks[index].isCompleted = true;
        taskElements[index].classList.add('completed')
    }else{
        tasks[index].isCompleted = false
        taskElements[index].classList.remove('completed')
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
    updateCounter()
}


//Update Counters
function updateCounter() {
    let completedCounter = 0;
    let inCompletedCounter = 0;
    for (let task of tasks) {
        if (task.isCompleted === true) {
            completedCounter++
        } else {
            inCompletedCounter++
        }
    }
    document.querySelector('#completed-counter').innerText = `${completedCounter}`
    document.querySelector('#incompleted-counter').innerText = `${inCompletedCounter}`
}