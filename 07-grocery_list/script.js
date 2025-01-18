let groceryList = [];

const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const groceryListElement = document.getElementById('groceryList');

function displayList() {

  groceryListElement.innerHTML = '';

  groceryList.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editItem(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => deleteItem(index);

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    groceryListElement.appendChild(listItem);
  });
}

function addItem() {
  const newItem = itemInput.value.trim();
  if (newItem) {
    groceryList.push(newItem); 
    itemInput.value = ''; 
    displayList(); 
  }
}

function editItem(index) {
  const updatedItem = prompt('Edit item:', groceryList[index]);
  if (updatedItem) {
    groceryList[index] = updatedItem.trim(); 
    displayList(); 
  }
}

function deleteItem(index) {
  groceryList.splice(index, 1);
  displayList(); 
}
addButton.addEventListener('click', addItem);

itemInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
