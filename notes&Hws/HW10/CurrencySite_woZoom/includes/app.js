// insert HTML sections (header and footer);

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  includeHTML();



  // https://openexchangerates.org/api/historical/2012-07-10.json?app_id=YOUR_APP_ID

// data processes and visulaziation


const currencyEl = document.getElementById('currency');



// Fetch exchange rates and update the DOM
/*
function calculate () {
    const currency_fetch = currencyEl.value;
    
/*
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_fetch}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency];
        rateEl.innerHTML = `1 ${currency} = ${rate} ${currency}`

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}
*/

//Event listeners

currencyEl.addEventListener('change', calculate)

var date = "2001-02-16";

function calculate() { get('https://openexchangerates.org/api/historical/' + date + '.json', {app_id: 'de0412ae38554dff9ba1ab4b3e8d50d1'}, 
    function(data) {
    console.log(data);
});
};

// de0412ae38554dff9ba1ab4b3e8d50d1


calculate();