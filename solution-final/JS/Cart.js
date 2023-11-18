let cartSet = new Set(); // Backing cart

// Initializes a starter roll
function createInitRoll(rollType, rollGlazing, packSize, basePrice) {
    const newCart = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartSet.add(newCart);
    return newCart;
}

// Saves current cart state to local storage
function saveCartStatus(){
    // Convert the updated cart to JSON and save it in local storage.
    const cartArray = Array.from(cartSet);
    const cartJSON = JSON.stringify(cartArray);
    localStorage.setItem('cartSet', cartJSON);
}

// Functionality to initialize cart from either local storage or new
function cartInit(){
    // When the page loads, attempt to retrieve the cart from local storage.
    let newCart = JSON.parse(localStorage.getItem('cartSet'));
    if(newCart){
        cartSet = new Set(newCart);
        console.log("loaded existing cart: " + cartSet);
    }
    else {
        console.log("no cart found in localstorage, using new cart...");
        const originalRoll = createInitRoll(
            "Original",
            "Sugar milk",
            "1",
            2.49
            );
    
        const walnutRoll = createInitRoll(
            "Walnut",
            "Vanilla milk",
            "12",
            3.49
            );
    
        const raisinRoll = createInitRoll(
            "Raisin",
            "Sugar milk",
            "3",
            2.99
            );
    
        const appleRoll = createInitRoll(
            "Apple",
            "Original",
            "3",
            3.49
            );
        
        saveCartStatus();
    }
}

class CartItem{
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

// Adds roll to base set
function addNewRoll(imageURL, title, body){
  const newCartItem = new CartItem(imageURL, title, body);
  cartSet.add(newCartItem);
}

// removes a cart item from the cartSet
function removeCartItemFromSet(cartItemId) {
  for (const cartItem of cartSet) {
      if (cartItem.id === cartItemId) {
          cartSet.delete(cartItem);
          break; // Exit the loop once the item is found and removed.
      }
  }
  updateTotalPrice();
  updateLocalStorage();
}
