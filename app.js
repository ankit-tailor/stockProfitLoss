const purchasePrice = document.querySelector('#purchasePrice');
const quantity = document.querySelector('#quantity');
const currentPrice = document.querySelector('#currentPrice');
const form = document.querySelector('.stockForm');
const container = document.querySelector('.container')

const result = document.querySelector('.result')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const purchasePriceValue = Number(purchasePrice.value);
    const quantityValue = Number(quantity.value);
    const currentPriceValue = Number(currentPrice.value);

    if (purchasePriceValue > currentPriceValue) {
        const loss = ((purchasePriceValue - currentPriceValue) * quantityValue);
        const lossPrecentage = (loss * 100) / purchasePriceValue

        if (lossPrecentage > 50) {

        }

        showResult(`You lost ${lossPrecentage}. Your total loss is ${loss}.`);
    } else {
        const profit = ((currentPriceValue - purchasePriceValue) * quantityValue);
        const profitPercentage = (profit * 100) / purchasePriceValue;

        if (profitPercentage > 50) {
        }

        showResult(`You gained ${profitPercentage}. Your total profit is ${profit}.`);
    }

})

function showResult(message) {
    result.innerHTML = message;
}