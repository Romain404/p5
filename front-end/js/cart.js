const productAmount = document.getElementById("productAmount");
const price = document.getElementById("price");
const priceTotal = document.getElementById("priceTotal");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let amount = productAmount.value;


plus.addEventListener("onclick", operation());

function operation() {
  amount = + 1;
  console.log(amount);
}

