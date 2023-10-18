class Cart{
    constructor(rollType, rollGlazing, packSize, basePrice, imageURL)
    {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.imageURL = imageURL;

        this.element = null; //corresponds to the .cart element in DOM
    }
}
/*
/////////////////////////////////////////
calculatePrice(newRoll) //don't think this is correct
{
    let glazingPrice = glazingPrices[this.glazing];
    //rolls[rollType].basePrice;
    return(this.basePrice + glazingPrice) * this.size;
}
*/
const cartSet = new Set();

function addNewRoll(rollType, rollGlazing, packSize, basePrice, imageURL){
  const cart = new Cart(rollType, rollGlazing, packSize, basePrice, imageURL);
  cartSet.add(cart);
  return cart;
}

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

//create 4 Roll objects and add them to the cart
const originalRoll = addNewRoll(
    "Original",
    "Sugar Milk",
    "1",
    2.49
    );

const walnutRoll = addNewRoll(
    "Walnut",
    "Vanilla Milk",
    "12",
    3.49
    );

const raisinRoll = addNewRoll(
    "Raisin",
    "Sugar Milk",
    "3",
    2.99
    );

const appleRoll = addNewRoll(
    "Apple",
    "Original",
    "3",
    3.49
    );

for (const cart of cartSet)
{
    console.log(cart);
    createElement(cart);
}

function createElement(cart)
{
    console.log("Creating an Element!")
    const template = document.querySelector('#cart-template');
    console.log(template);
    let clone = template.content.cloneNode(true);
    let element = clone.querySelector('.cart');
    console.log(element);

    const btnDelete = cart.element.querySelector('.icon-delete');
    btnDelete.addEventListener('click', () => {
        deleteCart(cart);
  });

  console.log(cart.element);
  const cartListItem = document.querySelector('#cart-list');
  cartListElement.append(cart.element);

  updateElement(cart);

    // cartItem.classList.add("cart-item")

   // clone.querySelector("product-info").textContent = rolls.rollType

  
    //  const cartListElement = ...
  }
//}

function updateElement(cart)
{
    //type...basePrice.image STEP 27...
    const cartImageElement = cart;
}

/*
console.log(cart);

function appendToShoppingCart(roll)
{
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item")
}

const rollImage = document.createElement("img");
rollImage.src = "../assets/products/${rolls[roll.type].imageFile}"
rollImage.alt = this.type;

const rollDetails = document.createElement('div');
rollDetails.classList.add('cart-item-details');

  // Create and populate elements for name, glazing, pack size, and price
const nameElement = document.createElement('p');
nameElement.textContent = this.type;

const glazingElement = document.createElement('p');
glazingElement.textContent = this.glazing;

const packSizeElement = document.createElement('p');
packSizeElement.textContent = this.size;

const priceElement = document.createElement('p');
const rollPrice = roll.calculatePrice(); // Calculate the item price
priceElement.textContent = `$${rollPrice.toFixed(2)}`;
*/
  // Create a remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');

/*
  removeButton.addEventListener('click', () => {
    // Remove the item from the cart array
    const index = cart.indexOf(roll);
    if (index !== -1) {
      cart.splice(index, 1);
    }

    // Remove the cart item from the DOM
    cartItem.parentNode.removeChild(cartItem);

    // Update the total price
    updateTotalPrice();
  });

  // Append elements to the cart item container
  rollDetails.appendChild(nameElement);
  rollDetails.appendChild(glazingElement);
  rollDetails.appendChild(packSizeElement);
  rollDetails.appendChild(priceElement);
  cartItem.appendChild(rollImage);
  cartItem.appendChild(rollDetails);
  cartItem.appendChild(removeButton);

  // Append the cart item to the shopping cart container
  const shoppingCart = document.querySelector('.shopping-cart');
  shoppingCart.appendChild(cartItem);

  // Update the total price
  updateTotalPrice();

// Function to update the total price
function updateTotalPrice() {
  const totalPriceElement = document.querySelector('.total-price');

  // Calculate the total price based on the items in the cart
  const totalPrice = cart.reduce((total, roll) => {
    return total + roll.calculatePrice();
  }, 0);

  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

cart.forEach((roll) => {
  appendToShoppingCart(roll);
});

*/