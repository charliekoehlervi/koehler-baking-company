"use strict";

function calcTotal() {
	var cookieQty = document.forms.cookieForm.qtyCookie.value;
	var pistachioQty = document.forms.pistachioForm.qtyPistachio.value;
	var pumpkinQty = document.forms.pumpkinForm.qtyPumpkin.value;
	
	var cookieTotal = cookieQty * 10.95;
	var pistachioTotal = pistachioQty * 16.95;
	var pumpkinTotal = pumpkinQty * 8.95;

	var subtotal = formatNumber((cookieTotal + pistachioTotal + pumpkinTotal), 2) * 1;
	var salestax = formatNumber((subtotal * .08625), 2) * 1;
	var total = subtotal + salestax;


	document.getElementById("subtotal").innerHTML = "Subtotal: " + formatUSCurrency(subtotal);
	document.getElementById("salestax").innerHTML = "Sales Tax: " + formatUSCurrency(salestax);
	document.getElementById("total").innerHTML = "Total: " + formatUSCurrency(total);

}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined,
   {minimumFractionDigits: decimals,
   maximumFractionDigits: decimals});

}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US',
   {style: "currency", currency: "USD"});
}