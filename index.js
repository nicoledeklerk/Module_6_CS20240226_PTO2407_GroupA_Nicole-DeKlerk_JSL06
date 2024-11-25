// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices = { 
    "Garlic Bread": 49.99, 
    "Bruschetta": 35.50, 
    "Margherita Pizza": 175.99, 
    "Spaghetti Carbonara": 89.99, 
    "Tiramisu": 75.50, 
    "Cheesecake": 39.90 
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById("menu");

    // Clear existing content
    menuContainer.innerHTML = '';

    for (const category in menu) {

    // Create and append the category element
    const categoryElement = document.createElement("h3");
     categoryElement.textContent = category; 
     menuContainer.appendChild(categoryElement);

     // Create and append the list of items
     const listElement = document.createElement("ul"); 
     menu[category].forEach((item) => {

    // Create and append the list item element
    const listItemElement = document.createElement("li"); 
    listItemElement.textContent = item; 
    listItemElement.addEventListener("click", () => addToOrder(item)); listElement.appendChild(listItemElement);
});

menuContainer.appendChild(listElement); 
}
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");

     // Create and append the order item element
     const orderItem = document.createElement("li"); 
     orderItem.textContent = itemName; 
     orderItemsList.appendChild(orderItem);

     // Calculate and update the total price
     const itemPrice = prices[itemName] || 0; 
     let currentTotal = Number(orderTotal.textContent); 
     currentTotal += itemPrice; 
     orderTotal.textContent = currentTotal.toFixed(2);

}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
