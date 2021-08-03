let todoList = [];

let addList = document.querySelector(".add-list");
let close = document.querySelector(".close");

// let addbtn = document.querySelector(".add");

function toggle1() {
    let blur = document.querySelector("#blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".pop1");
    popup.classList.toggle('active');
}
let uniqueId;
function toggle2(event) {
    let blur = document.querySelector("#blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".pop2");
    popup.classList.toggle('active');
    uniqueId = event;
}

let count = 0;

function addToDo() {
    let inputItem = document.querySelector("#inputfield1");
    let cardSection = document.querySelector(".card-section");
    const itemObject = {
        id: Date.now(),
        title: inputItem.value
    };
    todoList.push(itemObject);
    toggle1();
    const cardContent = `<div class="card" id="${itemObject.id}">
    <div class="card-title">
        <p class="card-title-p">${itemObject.title}</p>
        <hr>
    </div>
    <div class="list-container ">
        <ul class="list ${itemObject.id}" >
        </ul>
    </div>
    <div class="cardbutton">
    <div class="add-item icon ${itemObject.id}" onclick="toggle2(event)"><i class="fas fa-plus-circle"></i></div>
    <div class="delete-card icon" onclick="removeCard(event)"><i class="fa fa-trash"
            aria-hidden="true"></i></div>
</div>
</div>  `
    cardSection.innerHTML += cardContent;
    console.log(cardSection);

}

// function addRequiredList(){
//      let card = document.querySelectorAll(".card");
//     let listContent1;
   
// }
function addListItem(unique) {
    let inputListItem = document.querySelector("#inputfield2");
    let listContent1 = document.querySelectorAll(".list");
    const listItemObject = {
        id: count++,
        list: inputListItem.value
    }
    console.log(unique);
    toggle2();
    const listContent = `<li class="list-style" id="${listItemObject.id}">
                            <p class="list-items">${listItemObject.list}</p>
                            <div class="mark-done">
                                <a href="" >Mark Done</a>
                            </div>
                        </li>`;
    listContent1.innerHTML += listContent;
    console.log(listContent1);
}

function removeCard(event) {
    let removeId = event.path[3].getAttribute("id");
    document.getElementById(removeId).remove();


}