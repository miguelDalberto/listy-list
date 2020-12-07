const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const all_li = document.querySelectorAll("li");
const all_remove = document.getElementsByClassName("remove");

function insertItemOnList() {  //function: adds the input to the list with a removeButton and a .toggle("done")
    if(input.value.length === 0)return;

    const li = document.createElement("li");
    const newButton = document.createElement("button");

    newButton.innerText = "🗑";
    newButton.classList.add("remove");
    li.appendChild(document.createTextNode(input.value + " "));
    ul.appendChild(li);
    li.appendChild(newButton);

    li.addEventListener("click", function(event){
        event.target.classList.toggle("done");
    })
    newButton.addEventListener("click", function(event){
        ul.removeChild(event.target.parentElement);
    })
    
    input.value = "";
}

button.addEventListener("click", insertItemOnList) //event: button click adds item
input.addEventListener("keypress", function(){ //event: enter press adds item
    if(event.keyCode !== 13)return;
    insertItemOnList();
}) 
