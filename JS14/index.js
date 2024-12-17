'use strict';


const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');
console.log(form)
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)
    if (taskInput.value.trim()==='') {
        return;
    }
    createSingleTaskElement(taskInput.value);
    storageTaskInLocalStorage(taskInput.value);
    taskInput.value = '';
})


function createSingleTaskElement(taskInput) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput));
    taskList.appendChild(li)
}

function storageTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null // тернальный оператор
        ? JSON.parse(localStorage.getItem('tasks'))
        : [];

    tasks.forEach((task) => {
        createSingleTaskElement(task);
    })
})
// dataset