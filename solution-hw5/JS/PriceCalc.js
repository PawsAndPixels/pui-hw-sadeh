const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }
};

let cartSet = new Set();

// We use this class to represent our shopping newnewCart. Each newnewCart object contains
// data for a single item, and a reference to a DOM element
let glazingPrices = {
    "Keep original": 0.00, //2.49,
    "Sugar milk": 0.00, //2.99,
    "Vanilla milk": 0.50, //3.49,
    "Double chocolate": 1.50 //3.99
};

let packSize = {
    "1": 1,
    "3": 3,
    "6": 6,
    "12": 12
};

class Roll {

    // When we create a new newnewCart object, the "constructor"
    // function is run. In the constructor, "this" refers to the
    // newly created newnewCart object.

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.element = null; //corresponds to the .newCart element in DOM
    }
}

// Create an empty Set, which will hold all of our newCart objects. A Set is
// similar to an Array, but in a Set, an item can only be added once (there
// are no duplicates). Sets also allow for easy removal of items, using the
// Set.delete(item) function.
/////////////////////////////////////const cartSet = new Set();

// This function creates a new cart object, and adds it to cartSet.
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    // Create a new newCart object. The newCart constructor takes three
    // arguments: the image URL, title text,  and body text.
    const newCart = new Roll(rollType, rollGlazing, packSize, basePrice);

    // Add the newCart object to our newCart Set, which keeps track of all
    // the newCarts in our application.
    cartSet.add(newCart);
    return newCart;
}


function createElement(newCartDisplay) {
    // make a clone of the card template
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);

    // connect this clone to our newCart.element
    // from this point we only need to refer to newCart.element
    newCartDisplay.element = clone.querySelector('.cart-roll-item');


    console.log(newCartDisplay.element);

    const btnDelete = newCartDisplay.element.querySelector('.remove-product');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deletenewCart(newCartDisplay);
    });


    console.log(newCartDisplay.element)

    // add the newCart clone to the DOM
    // find the newCart parent (#newCart-list) and add our newCart as its child
    const newCartListElement = document.querySelector('.rollContainer');

    newCartListElement.prepend(newCartDisplay.element);

    // populate the newCart clone with the actual newCart content
    updateElement(newCartDisplay);
}

function updateElement(newCart) {
    // get the HTML elements that need updating
    const newCartImage = newCart.element.querySelector('.cart-image');
    const newCartRollType = newCart.element.querySelector('.roll-type');
    const newCartRollGlazing = newCart.element.querySelector('.glazing-type');
    const newCartPackSize = newCart.element.querySelector('.pack-size');
    const newCartBasePrice = newCart.element.querySelector('.base-price');


    // copy our newnewCart content over to the corresponding HTML elements
    newCartImage.src = "../assets/products/" + rolls[newCart.type].imageFile;
    //newCartImage.src = newCart.newCartImageURL;
    newCartRollType.innerText = newCart.type;
    newCartRollGlazing.innerText = newCart.glazing;
    newCartPackSize.innerText = newCart.size;
    newCartBasePrice.innerText = `${newCart.basePrice.toFixed(2)}`;
}

//create 4 Roll objects and add them to the newCart
const rollOne = addNewRoll(
    "Original",
    "Sugar milk",
    "1",
    2.49
);

const rollTwo = addNewRoll(
    "Walnut",
    "Vanilla milk",
    "12",
    3.49
);

const rollThree = addNewRoll(
    "Raisin",
    "Sugar milk",
    "3",
    2.99
);

const rollFour = addNewRoll(
    "Apple",
    "Keep original",
    "3",
    3.49
);

function deletenewCart(newCart) {
    // remove the newnewCart DOM object from the UI
    newCart.element.remove();
    // remove the actual newnewCart object from our set of notecards
    cartSet.delete(newCart);
    updateTotPrice();
}

function updateTotPrice()
{
    let newPrice = 0;
    for(const newCart of cartSet) //newCart = cartItem
    {
        console.log(newCart.basePrice);
        console.log(newCart.glazing);
        console.log(newCart.size);
        newPrice += (newCart.basePrice + glazingPrices[newCart.glazing]) * packSize[newCart.size]
    }
    const totalElement = document.querySelector('.cart-total');
    totalElement.innerText = `Total: $${newPrice.toFixed(2)}`;
}

updateTotPrice();

for (const newCart of cartSet) {
    console.log(newCart);
    createElement(newCart);
}