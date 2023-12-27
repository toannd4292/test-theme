const quantityInputs = document.querySelectorAll('.pi-qty .quantity-selector__value');
const plusButtons = document.querySelectorAll('.pi-qty .plus');
const minusButtons = document.querySelectorAll('.pi-qty .minus');

plusButtons.forEach((plusButton, index) => {
    plusButton.addEventListener('click', function() {
        let currentQuantity = parseInt(quantityInputs[index].value);
        currentQuantity++;
        quantityInputs[index].value = currentQuantity;
    });
});

minusButtons.forEach((minusButton, index) => {
    minusButton.addEventListener('click', function() {
        let currentQuantity = parseInt(quantityInputs[index].value);
        if (currentQuantity > 1) {
            currentQuantity--;
            quantityInputs[index].value = currentQuantity;
        }
    });
});
