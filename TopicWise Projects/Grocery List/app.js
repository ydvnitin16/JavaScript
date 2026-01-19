const groceryItems = [
    {
        item: 'milk',
        category: 'dairy',
        quantity: 1,
    },
    {
        item: 'bread',
        category: 'bakery',
        quantity: 1,
    },
    {
        item: 'butter',
        category: 'dairy',
        quantity: 1,
    },
    {
        item: 'eggs',
        category: 'dairy',
        quantity: 1,
    },
    {
        item: 'cheese',
        category: 'dairy',
        quantity: 2,
    },
];

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

const groceryListBody = document.querySelector('#grocery-list-body');

// add item to the grocery list
document.querySelector('#add-item').addEventListener('click', () => {
    let item = document.querySelector('#item-input');
    let category = document.querySelector('#category-input');
    let quantity = document.querySelector('#quantity-input');

    if (item.value == '') return alert(`enter something`)
    if (quantity.value == '') quantity.value = 1;

    groceryItems.push({
        item: item.value,
        category: category.value,
        quantity: quantity.value,
    });
    item.value = '';
    renderGroceryList();
    editListener()
});

// Sort By Category
document.querySelector('#sorting-category')
    .addEventListener('change', (e) => {
        sortGroceryList(e.target.value);
    });

// Sort Grocery List
function sortGroceryList(selectedCategory) {
    groceryRows.forEach((row, index) => {
        const item = groceryItems[index];

        if (selectedCategory.toLowerCase() != item.category.toLowerCase()
            && selectedCategory.toLowerCase() !== 'all') {
            row.classList.add('hide');
        } else {
            row.classList.remove('hide');
        }
    })
}


// Create Table Row
function createTableRow(item) {
    const itemElement = document.createElement(`tr`);
    itemElement.innerHTML = `<td>${item.item}</td>
                        <td>${item.quantity}</td>
                        <td>${item.category}</td>
                        <td><button class = 'edit-btn'>Edit</button></td>`
    return itemElement;
};

// initialize grocery rows
const groceryRows = [];

// loop over groceryItems to create table
function renderGroceryList() {
    groceryListBody.innerHTML = '';
    groceryRows.length = 0;
    groceryItems.forEach((item) => {
        const itemElement = createTableRow(item);
        groceryListBody.appendChild(itemElement);
        groceryRows.push(itemElement)
    });

    const selectedCategory = document.querySelector('#sorting-category').value;
    sortGroceryList(selectedCategory);
};
renderGroceryList();




function editListener() {
    const editBtn = document.querySelectorAll('.edit-btn');
    editBtn.forEach((row, index) => {
        row.addEventListener('click', (e) => {
            editItem(e.target, index)
            console.log(index)
        })
    });
};
editListener();

const editPopUp = document.querySelector('.modal');
//close modal
document.querySelector('.close')
    .addEventListener('click', () => {
        editPopUp.style.display = 'none'
    });

window.addEventListener('click', (e) => {
    if (e.target == editPopUp) {
        editPopUp.style.display = 'none'
    }
});


// edit or delete item
function editItem(row, index) {
    editPopUp.style.display = 'unset';
    let item = groceryItems[index];

    let itemName = document.querySelector('#edit-item-input')
    let itemQty = document.querySelector('#edit-quantity-input')
    let itemCategory = document.querySelector('#edit-category-input')

    itemName.value = item.item;
    itemQty.value = item.quantity
    itemCategory.value = item.category;

    const saveBtn = document.querySelector('#save-item');
    const deleteBtn = document.querySelector('#delete-item');

    const saveHandle = () => {
        item.item = itemName.value;
        item.quantity = itemQty.value;
        item.category = itemCategory.value;

        renderGroceryList();
        editListener();
        editPopUp.style.display = 'none';
    };

    const deletehandle = () => {
        groceryItems.splice(index, 1);
        renderGroceryList();
        editListener()
        editPopUp.style.display = 'none';
    };


    saveBtn.replaceWith(saveBtn.cloneNode(true));
    deleteBtn.replaceWith(deleteBtn.cloneNode(true));

    document.querySelector('#save-item').addEventListener('click', saveHandle)
    document.querySelector('#delete-item').addEventListener('click', deletehandle)
};
