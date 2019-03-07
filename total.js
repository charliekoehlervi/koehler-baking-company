"use strict";

function calcTotal() {
	// Gather Quantities from each item's quantity menu
	var cookieQty = document.forms.cookieForm.qtyCookie.value;
	var pistachioQty = document.forms.pistachioForm.qtyPistachio.value;
	var pumpkinQty = document.forms.pumpkinForm.qtyPumpkin.value;
	
	// Multiply quantities of items by their respective prices
	var cookieTotal = cookieQty * 10.95;
	var pistachioTotal = pistachioQty * 16.95;
	var pumpkinTotal = pumpkinQty * 8.95;

	// Calculate Subtotal to 2 decimal places, using format function
	var subtotal = formatNumber((cookieTotal + pistachioTotal + pumpkinTotal), 2) * 1;

	// Calculate Sales Tax
	var salestax = formatNumber((subtotal * .08625), 2) * 1;

	// Calculate final Total, adding Subtotal and Sales Tax
	var total = subtotal + salestax;

	// Display results to respective elements
	document.getElementById("subtotal").innerHTML = "Subtotal: " + formatUSCurrency(subtotal);
	document.getElementById("salestax").innerHTML = "Sales Tax: " + formatUSCurrency(salestax);
	document.getElementById("total").innerHTML = "Total: " + formatUSCurrency(total);

}

// Function to format numbers to have 2 decimal places

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined,
   {minimumFractionDigits: decimals,
   maximumFractionDigits: decimals});

}

// Function to format numbers to US currency

function formatUSCurrency(val) {
   return val.toLocaleString('en-US',
   {style: "currency", currency: "USD"});
}