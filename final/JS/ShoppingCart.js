document.addEventListener("DOMContentLoaded", function() {
    cartInit();
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');

    // Ensure the DOM is fully loaded before attaching event listeners.
    const removeButtons = document.querySelectorAll('.remove-product');
    
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the corresponding cart item and remove it from cartSet.
            const cartItem = button.closest('.cart-item-w-remove-button');
            if (cartItem) {
                const cartItemId = cartItem.dataset.itemId; // You can set this in your HTML.
                removeCartItemFromSet(cartItemId);
            }
        });
    });

    // Update total price and create cart elements
    updateTotalPrice();
    for (const newCart of cartSet) {
        createElement(newCart);
    }
});

// Creates cart listing elements
function createElement(newCartDisplay) {
    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);

    newCartDisplay.element = clone.querySelector('.cart-roll-item');

    const btnDelete = newCartDisplay.element.querySelector('.remove-product');
    btnDelete.addEventListener('click', () => {
        deleteCart(newCartDisplay);
    });

    const newCartListElement = document.querySelector('.rollContainer');
    newCartListElement.prepend(newCartDisplay.element);

    updateCartElement(newCartDisplay);
}

// Updates cart element with accurate information
function updateCartElement(newCart) {
    const { type, glazing, size, basePrice } = newCart;
    const newCartImage = newCart.element.querySelector('.cart-image');
    const newCartRollType = newCart.element.querySelector('.roll-type');
    const newCartRollGlazing = newCart.element.querySelector('.glazing-type');
    const newCartPackSize = newCart.element.querySelector('.pack-size');
    const newCartBasePrice = newCart.element.querySelector('.base-price');

    newCartImage.src = `../assets/products/${rolls[type].imageFile}`;
    newCartRollType.innerText = type;
    newCartRollGlazing.innerText = glazing;
    newCartPackSize.innerText = size;
    newCartBasePrice.innerText = `$${((basePrice + glazingPrices[glazing]) * packSize[size]).toFixed(2)}`;
}

// Deletes an item from the cart
function deleteCart(newCart) {
    newCart.element.remove();
    cartSet.delete(newCart);

    saveCartStatus();

    updateTotalPrice();
}

// Updates the total price of the cart
function updateTotalPrice() {
    let totalPrice = 0.00;
    for (const cartItem of cartSet) {
        console.log("Adding: " + (cartItem.basePrice + glazingPrices[cartItem.glazing]) * packSize[cartItem.size]);
        totalPrice += (cartItem.basePrice + glazingPrices[cartItem.glazing]) * packSize[cartItem.size];
    }
    const totalElement = document.querySelector('.cart-total');
    totalElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
    console.log(totalPrice);
}
