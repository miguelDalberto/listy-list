var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var all_li = document.querySelectorAll("li");
var all_remove = document.getElementsByClassName("remove");

function insertItemOnList(item) {  //function: adds the input to the list with a removeButton and a .toggle("done")
    var li = document.createElement("li");
    var newButton = document.createElement("button");
    newButton.innerText = "🗑";
    newButton.classList.add("remove");
    li.appendChild(document.createTextNode(item + " "));
    ul.appendChild(li);
    li.appendChild(newButton);

    li.addEventListener("click", function(event){
        event.target.classList.toggle("done");
    })
    
    newButton.addEventListener("click", function(event){
        ul.removeChild(event.target.parentElement);
    })
}

button.addEventListener("click", function(){ //event: button click and adds item
    if(input.value.length === 0)return;
    insertItemOnList(input.value);
    input.value = "";
})

input.addEventListener("keypress", function(event){ //event: enter press and adds item
    if(input.value.length === 0 || event.keyCode !== 13)return;
    insertItemOnList(input.value);
    input.value = "";
})