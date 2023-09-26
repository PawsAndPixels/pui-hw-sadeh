let basePrice = 2.49; // Default base price

let glazingPrices = {
    "original": 0.00, //2.49,
    "sugar": 0.00, //2.99,
    "vanilla": 0.50, //3.49,
    "double chocolate": 1.50 //3.99
};

let packSize = {
    "1": 1,
    "3": 3,
    "6": 6,
    "12": 12
};


// Get references to the select elements
let glazingSelect = document.getElementById("glazing");
let sizeSelect = document.getElementById("size");

// Get the product detail price element
let priceElement = document.querySelector(".product-detail-price");

// Function to update the total price
function updatePrice() {
    let selectedGlazing = glazingSelect.value;
    let selectedSize = sizeSelect.value;

    let glazingPrice = glazingPrices[selectedGlazing];
    let packPrice = packSize[selectedSize];

    let total = (basePrice + glazingPrice) * packPrice;

    priceElement.textContent = `Total Price: $${total.toFixed(2)}`;
}

// Event listeners for both select elements
glazingSelect.addEventListener("change", updatePrice);
sizeSelect.addEventListener("change", updatePrice);

// Initialize the price on page load
//updatePrice();

// Create and add options for glazingSelect
for (let glazing in glazingPrices) {
    let option = document.createElement("option");
    option.value = glazing;
    option.innerHTML = glazing;
    glazingSelect.appendChild(option);
}

// Create and add options for sizeSelect
for (let size in packSize) {
    let option = document.createElement("option");
    option.value = size;
    option.innerHTML = size;
    sizeSelect.appendChild(option);
}

// Add event listener for glazingOptions select element
document.getElementById("glazingOptions").addEventListener("change", function() {
    glazingSelect.value = this.value;
    updatePrice();
});
