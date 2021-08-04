let todoList = [];
let addList = document.querySelector(".add-list");
let close = document.querySelector(".close");
let list;
let count = 0;

function toggle1() {
    let blur = document.querySelector("#blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".pop1");
    popup.classList.toggle('active');
}

function toggle2() {
    let blur = document.querySelector("#blur");
    blur.classList.toggle('active');
    let popup = document.querySelector(".pop2");
    popup.classList.toggle('active');
}

let itemObject;
function addToDo() {
    let inputItem = document.querySelector("#inputfield1");
    let cardSection = document.querySelector(".card-section");
    
    if (inputItem.value===""){
        window.alert("Please Enter A Title");
    }else{
     itemObject = {
        id: Date.now(),
        title: inputItem.value
    };
    todoList.push(itemObject);
    toggle1();
    }
    const cardContent = `<div class="card" id="${itemObject.id}">
    <div class="card-title" onclick="enlargeCard(event)">
        <p class="card-title-p" id="cardtitle">${itemObject.title}</p>
        <hr>
    </div>

    <div class="list-container ">
        <ul class="list">
        </ul>
    </div>
    <div class="cardbutton">
    <div class="add-item icon" onclick="toggle2(); addRequiredList(event)"><i class="fas fa-plus-circle"></i></div>
    <div class="delete-card icon" onclick="removeCard(event)"><i class="fa fa-trash"
            aria-hidden="true"></i></div>
</div>
</div>`
    cardSection.innerHTML += cardContent;
    console.log(cardSection);
}


function enlargeCard(event){
    let cards = document.querySelectorAll(".card");
    let backbtn = document.querySelector(".backBtn");
    let cardhead = document.querySelector(".card-heading");
    let headtitle = document.querySelector(".head-title");
    let addlist = document.querySelector(".add-list");
    headtitle.classList.add("inactive");
    backbtn.classList.add("active");
    cardhead.classList.add("active");
    addlist.classList.add("inactive");
    cards.forEach(card=>{
        if(!(event.path[1].getAttribute("id")===card.getAttribute("id") ||event.path[2].getAttribute("id")===card.getAttribute("id"))){
            card.style.display="none";
            console.log(card.childNodes[1].textContent);
            
        }else{
            let cardtitle=card.childNodes[1].textContent;
            cardhead.innerHTML=`<p class="card-title">${cardtitle}</p>`;
        }
    })
}

function backFunction(){
 
    let cards = document.querySelectorAll(".card");
    let backbtn = document.querySelector(".backBtn");
    let cardhead = document.querySelector(".card-heading");
    let headtitle = document.querySelector(".head-title");
    let addlist = document.querySelector(".add-list");
    headtitle.classList.remove("inactive");
    backbtn.classList.remove("active");
    cardhead.classList.remove("active");
    addlist.classList.remove("inactive");
    cards.forEach(card=>{
            card.style.display="initial";
    })
    cardhead.classList.remove("active");
    cardhead.innerHTML="";
}


function addRequiredList(event) {
    let cardId = event.path[3].getAttribute("id");
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (card.getAttribute("id") === cardId) {
            list = card.getElementsByClassName("list")[0];
        }
    })
}

function addListItem(listItem) {
    let inputListItem = document.querySelector("#inputfield2");
    let listItemObject;
    if (inputListItem.value===""){
        window.alert("Please Enter A List");
    }else{
    listItemObject = {
        id: count++,
        list: inputListItem.value
    }
    toggle2();
}
    const listContent = `<li class="list-style" id="${listItemObject.id}">
                            <p class="list-items">${listItemObject.list}</p>
                            <div class="mark-done">
                                <p onclick="markDone(event)">Mark Done</p>
                            </div>
                        </li>`;
    listItem.innerHTML += listContent;

}

function markDone(event){

    let listItem = event.path[2].getAttribute("id");
    let listItems = document.querySelectorAll(".list-style");
    listItems.forEach(list=>{
        if(list.getAttribute('id')===listItem){
            list.childNodes[3].style.display="none";
            list.style.color="#E74C3C";
            list.style.textDecoration="line-through";
        }
    })
   
}

function removeCard(event) {
    let removeId = event.path[3].getAttribute("id");
    document.getElementById(removeId).remove();


}