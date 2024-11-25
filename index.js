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
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
