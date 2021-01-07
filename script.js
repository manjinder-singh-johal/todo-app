const inputElement = document.getElementById('input');
const listElement = document.getElementById('list');
let list = [];

const addItem = () => {
    list.push(inputElement.value);
    listElement.innerHTML += `<div>${list[list.length - 1]}</div>`;
}

const clearAll = () => {
    list = [];
    listElement.innerHTML = '';
}