const inputElement = document.getElementById('input');
const listElement = document.getElementById('list');
let list = [];

listElement.innerHTML = 'Your To-Do list is empty!';

const addItem = () => {
    list.push(inputElement.value);
    listElement.innerHTML = list;
}

const clearAll = () => {
    list = [];
    listElement.innerHTML = 'Your To-Do list is empty!';
}