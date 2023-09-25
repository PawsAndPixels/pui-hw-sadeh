function updatePrice(){
    //get selected glazing option
    let glazingSelect = document.getElementById("glazing");
    let selectedGlazing = glazingSelect.value;

    //get selected pack size option
    let sizeSelect = document.getElementById("size");
    let selectedSize = sizeSelect.value;

    let glazingPrices = {
            original: 2.49, sugar: 2.99, vanilla: 3.49, chocolate: 3.99};

let total = glazingPrices[selectedGlazing] * selectedSize;

let priceElement = document.querySelector(".product-detail-price");
}

document.getElementById("glazing").addEventListener("change", updatePrice);
document.getElementById("size").addEventListener("change", updatePrice);

/*
(basePrice + glazingPrice) * packPrice

<select id="glazingOptions"
    onChange= "glazingChange(this)">


*/