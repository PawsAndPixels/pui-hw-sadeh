const queryString = window.location.search;
//URLSearchParams
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');


let searchparams = new URLSearchParams(window.location.search);
let title = searchparams.get("title");
let currentid = searchparams.get("id");

let cart = [];


//let currentElement = data[0];

//for (element of data){
  //  if (element.id == currentid){
     //   currentElement = element
     //   console.log(element);
  //  }
//};

// Update the product detail header text
console.log(rollType);
let productDetailHeader = document.querySelector(".roll-type");
productDetailHeader.innerText = rollType + " cinnamon roll";

let productDetailImage = document.querySelector(".product-detail-image");
productDetailImage.src = "../assets/products/" + rolls[rollType].imageFile; 

//targets specific roll type and adds a new image


//console.log(window.location.search);


//updateTitle(event){
    //console.log(event.target.value);
    
      //  if (event.id == event.target.value){
     //       currentElement = event;
     //   }
    
//}

console.log(rolls.Original.basePrice);
console.log(rolls.Original.imageFile);



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
let glazingSelect = document.getElementById("glazingOptions");
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

    priceElement.textContent = `$${total.toFixed(2)}`;
}


// Initialize the price on page load
//updatePrice();
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


class Roll{
    constructor(rollType, rollGlazing, packSize, basePrice)
    {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addToCartClicked()
{
    let rollGlazing = glazingSelect.options[glazingSelect.selectedIndex].text;
    let packSize = sizeSelect.options[sizeSelect.selectedIndex].text;
    const rollInstance = new Roll(rollType, rollGlazing, packSize, rolls[rollType].basePrice);
    cart.push(rollInstance);
    console.log(cart)
}