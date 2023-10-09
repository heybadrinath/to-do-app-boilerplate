var inputText = document.getElementById("input")
var button = document.getElementById("button")
var list = document.getElementById("todolist")
var todolist = [] 

button.addEventListener("click", () => {
    todolist.push(inputText.value);
    console.log(todolist);
    inputText.value = "";
    showData();
})

function showData(){
    list.innerHTML = ""
    todolist.forEach((item,index) => {
        list.innerHTML += `<li>${item} <a onclick="editItem(index)">edit</a><a onclick="deleteItem(index)">X |</a></li>`
    })
}



function deleteItem(i) {
    todolist.splice(i, 1)
}


function editItem(i){
    var newText = prompt("Enter the new text")
    todolist.splice(i, 1, newText)
    showData();

}