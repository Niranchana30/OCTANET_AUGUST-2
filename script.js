document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    
    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', modifyTask);

    function addTask(e) {
        e.preventDefault();
        
        const newTaskInput = document.getElementById('new-task');
        const taskText = newTaskInput.value.trim();
        
        if (taskText === '') return;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        
        taskList.appendChild(li);
        newTaskInput.value = '';
    }

    function modifyTask(e) {
        if (e.target.classList.contains('delete')) {
            e.target.closest('li').remove();
        } else if (e.target.classList.contains('edit')) {
            const li = e.target.closest('li');
            const taskText = li.querySelector('span').textContent;
            const newTaskText = prompt('Edit your task:', taskText);
            
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.querySelector('span').textContent = newTaskText.trim();
            }
        } else {
            e.target.closest('li').classList.toggle('completed');
        }
    }
});
