let inventory = [
    { name: "Magic Wand", type: "wand", price: 50, quantity: 5, description: "A powerful wand.", image: "img/magic_wand.png" },
    { name: "Health Potion", type: "potion", price: 10, quantity: 20, description: "Restores health.", image: "img/health_potion.png" },
    { name: "Crystal Ball", type: "magical item", price: 75, quantity: 2, description: "Predicts the future.", image: "img/crystal_ball.jpg" }
];

let discountApplied = false;

// Toggle Inventory Display
function toggleInventory() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.classList.toggle("hidden");
    if (!cartContainer.classList.contains("hidden")) {
        listItems();
    }
}

function listItems() {
    const inventoryList = document.getElementById("inventory-list");
    inventoryList.innerHTML = "";
    
    inventory.forEach((item, index) => {
        let itemImage = item.image ? item.image : "img/unknown.jpg"; // Fallback to default if undefined

        inventoryList.innerHTML += `
            <div class="item-card">
                <img src="${itemImage}" alt="${item.name}" onerror="this.onerror=null; this.src='img/unkown.jpg';">
                <div class="item-details">
                    <strong>${item.name}</strong> (${item.type}) - $${item.price} | Stock: ${item.quantity} <br> ${item.description}
                </div>
                <button class="button-24" role="button" onclick="removeItem(${index})">Remove</button>

            </div>
        `;
    });
}



// Remove Item from Inventory
function removeItem(index) {
    inventory.splice(index, 1);
    listItems();
    showNotification("Item removed successfully!");
}

// Apply / Remove Discount
function toggleDiscount() {
    discountApplied = !discountApplied;
    inventory.forEach(item => {
        item.price = discountApplied ? (item.price * 0.9).toFixed(2) : (item.price / 0.9).toFixed(2);
    });
    listItems();
    showNotification(discountApplied ? "Applied 10% Discount" : "Removed 10% Discount");
}

// Calculate Total Value of Items in the Inventory
function calculateTotalValue() {
    let totalValue = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Total Inventory Value: $${totalValue.toFixed(2)}`);
}

// Add New Item to Inventory
function addItemFromInput() {
    const name = document.getElementById("itemName").value.trim();
    const type = document.getElementById("itemType").value.trim();
    const price = parseFloat(document.getElementById("itemPrice").value);
    const quantity = parseInt(document.getElementById("itemQuantity").value);
    const description = document.getElementById("itemDescription").value.trim();

    if (!name || !type || isNaN(price) || isNaN(quantity) || !description) {
        showNotification("Please fill all fields correctly!", "error");
        return;
    }

    // Default image for new items
    const defaultImagePath = "img/unknown.jpg";

    // Add new item to inventory
    let newItem = { name, type, price, quantity, description, image: defaultImagePath };
    inventory.push(newItem);

    // Refresh list and show success message
    listItems();
    showNotification(`"${name}" was added successfully!`, "success");

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemType").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemDescription").value = "";
}


// Show Notification
function showNotification(message, type = "success") {
    const notificationBar = document.getElementById("notification-bar");
    notificationBar.innerText = message;
    notificationBar.style.backgroundColor = type === "error" ? "#e74c3c" : "#2ecc71";
    notificationBar.style.display = "block";

    setTimeout(() => {
        notificationBar.style.display = "none";
    }, 3000);
}
function addItemFromInput() {
    const name = document.getElementById("itemName").value.trim();
    const type = document.getElementById("itemType").value.trim();
    const price = parseFloat(document.getElementById("itemPrice").value);
    const quantity = parseInt(document.getElementById("itemQuantity").value);
    const description = document.getElementById("itemDescription").value.trim();

    if (!name || !type || isNaN(price) || isNaN(quantity) || !description) {
        showNotification("Please fill all fields correctly!", "error");
        return;
    }

    // Default image for new items
    const image = "img/unknown.jpg";

    // Add new item to inventory
    inventory.push({ name, type, price, quantity, description, image });

    // Refresh list and show success message
    listItems();
    showNotification(`"${name}" was added successfully!`, "success");

    // Clear input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemType").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemDescription").value = "";
}
