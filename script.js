const itemForm = document.getElementById('item-form'); // variable to load the form with the items 
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');




function addItem(e){
    e.preventDefault(); // to prevent the form from submitting

    const newItem=itemInput.value; // this is he item user is going to put in the list, is the input initialized to a variable

    if (newItem === ''){  // if the value of item is null notify user
        alert('Please add item');
        return;
    }

    const li = document.createElement('li'); // creating the lit for the items
    li.appendChild(document.createTextNode(newItem));  // adding the item in the list

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

    itemInput.value='';
}

function createButton(classes){
    const button = document.createElement('button');
    button.className= classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.classes = classes;
    return icon;
}

itemForm.addEventListener('submit', addItem);
