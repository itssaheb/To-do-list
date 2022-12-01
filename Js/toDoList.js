let add_Btn = document.getElementById('buttonElement');
add_Btn.addEventListener('click', add_To_Do);
let parentList = document.getElementById('toDoList');
function add_To_Do(event) {
    let currentBtn = event.currentTarget;
    let currentInput = currentBtn.previousElementSibling.value;

    let newLiTag = document.createElement('div');
    newLiTag.className = "to-do-list";
    newLiTag.innerHTML = `<h2 id="toDoData" class="to-do-data">${currentInput}</h2>
    <button id="editBtn" class="edit-btn" onclick="editTodo(this)">Edit</button>
    <button id="removeBtn" class="remove-btn" onclick="removeTodo(this)">Remove</button>`;
    if (currentInput === '') {
        alert("You must write something!");
    } else {
        parentList.after(newLiTag);
    }


}

function removeTodo(currentRemove) {
    currentRemove.parentElement.remove();
}

function editTodo(currentEdit) {
    if (currentEdit.textContent == "Save") {
        currentEdit.textContent = "Edit";
        let currentData = currentEdit.previousElementSibling.value;
        let currHead = document.createElement('h2');
        currHead.className = "to-do-data";
        currHead.textContent = currentData;
        currentEdit.parentElement.replaceChild(currHead, currentEdit.previousElementSibling);
    }
    else {
        currentEdit.textContent = "Save";
        let currentData = currentEdit.previousElementSibling.textContent;
        let currentInputData = document.createElement('input');
        currentInputData.type = "text";
        currentInputData.placeholder = "type something";
        currentInputData.className = "input-element";
        currentInputData.value = currentData;
        currentEdit.parentElement.replaceChild(currentInputData, currentEdit.previousElementSibling);
    }



}