let todoList = [];

let addList = document.querySelector(".add-list");
let close = document.querySelector(".close");

// let addbtn = document.querySelector(".add");

function toggle(){
    let blur = document.querySelector("#blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".pop");
    popup.classList.toggle('active');
}

function addToDo(){
let inputItem = document.querySelector("#inputfield");
const itemObject={
    id:Date.now(),
    title:inputItem.value
};
todoList.push(itemObject);
console.log(todoList);
toggle();
}

function newCard(){
    
}