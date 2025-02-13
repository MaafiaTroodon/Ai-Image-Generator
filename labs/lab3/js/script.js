// Inventory Array
let inventory = [
    { name: "Magic Wand", type: "wand", price: 50, quantity: 5, description: "A powerful wand." },
    { name: "Health Potion", type: "potion", price: 10, quantity: 20, description: "Restores health." },
    { name: "Crystal Ball", type: "magical item", price: 75, quantity: 2, description: "Predicts the future." }
];

// Function to display inventory
function listItems() {
    const inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = ""; // Clear previous content
    inventory.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `<strong>${item.name}</strong> (${item.type}) - $${item.price} | Stock: ${item.quantity} <br> ${item.description}`;
        inventoryList.appendChild(itemElement);
    });
}

// Function to add a new item
function addItem(item) {
    inventory.push(item);
    listItems();
}

// Function to remove an item
function removeItem(itemName) {
    inventory = inventory.filter(item => item.name.toLowerCase() !== itemName.toLowerCase());
    listItems();
}

// Function to get an item by name
function getItem(itemName) {
    return inventory.find(item => item.name.toLowerCase() === itemName.toLowerCase()) || null;
}

// Function to calculate total inventory value
function calculateTotalValue() {
    let total = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Total Inventory Value: $${total}`);
}

// Function to add item from input fields
function addItemFromInput() {
    let name = document.getElementById("itemName").value;
    let type = document.getElementById("itemType").value;
    let price = parseFloat(document.getElementById("itemPrice").value);
    let quantity = parseInt(document.getElementById("itemQuantity").value);
    let description = document.getElementById("itemDescription").value;

    if (name && type && !isNaN(price) && !isNaN(quantity) && description) {
        addItem({ name, type, price, quantity, description });
    } else {
        alert("Please fill in all fields correctly.");
    }
}

// Function to remove item from input
function removeItemFromInput() {
    let name = document.getElementById("removeItemName").value;
    if (name) {
        removeItem(name);
    } else {
        alert("Please enter an item name to remove.");
    }
}
