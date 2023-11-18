// This file handles functionality exclusively in the ProductDetails page


// GLOBAL VARIABLES
////////////////////////////////////////////////////////////////
const queryString = window.location.search;
//URLSearchParams
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Get references to the select elements
let glazingSelect = document.getElementById("glazingOptions");
let sizeSelect = document.getElementById("size");
// Get the product detail price element
let priceElement = document.querySelector(".product-detail-price");



// Updates the listed price
function updatePrice() {
    let selectedGlazing = glazingSelect.value;
    let selectedSize = sizeSelect.value;

    let glazingPrice = glazingPrices[selectedGlazing];
    let packPrice = packSize[selectedSize];

    let total = (basePrice + glazingPrice) * packPrice;

    priceElement.textContent = `$${total.toFixed(2)}`;
}

// Initialize the options and price on page load
function initialize()
{
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


    // Event listeners for both select elements
    glazingSelect.addEventListener("change", updatePrice);
    sizeSelect.addEventListener("change", updatePrice);
}

// Product Details onLoad functionality
document.addEventListener("DOMContentLoaded", function() {
    cartInit();
    initialize();

    let searchparams = new URLSearchParams(window.location.search);
    let title = searchparams.get("title");
    let currentid = searchparams.get("id");

    // Update the product detail header text
    console.log(rollType);

    let productDetailHeader = document.querySelector(".roll-type");
    productDetailHeader.innerText = rollType + " cinnamon roll";

    let productDetailImage = document.querySelector(".product-detail-image");
    productDetailImage.src = "../assets/products/" + rolls[rollType].imageFile; 


    console.log(rolls.Original.basePrice);
    console.log(rolls.Original.imageFile);
});

// Handler for Add to Cart Button
function addToCartClicked()
{
    let rollGlazing = glazingSelect.options[glazingSelect.selectedIndex].text;
    let packSize = sizeSelect.options[sizeSelect.selectedIndex].text;
    const rollInstance = new Roll(rollType, rollGlazing, packSize, rolls[rollType].basePrice);
    cartSet.add(rollInstance);
    
    saveCartStatus();

    console.log(cartSet);
}
