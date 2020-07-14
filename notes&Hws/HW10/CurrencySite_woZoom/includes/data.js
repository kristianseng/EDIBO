const currency = document.getElementById('currency');





// Fetch exchange rates and update the DOM
function calculate () {


    


    fetch(`https://api.exchangerate-api.com/v4/latest/USD${currency}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency];
    });
}

//Event listeners

currencyEl_one.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});


calculate()