const productAmount = document.getElementById("productAmount");
const price = document.getElementById("price");
const priceTotal = document.getElementById("priceTotal");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");


// Action au clique sur -
function operationPlus() {
  productAmount.value++;
  totalArticle();
}

// Action au clique sur +
function operationMinus() {
  productAmount.value--;
  if (productAmount.value <= 1) {
    console.log("❗️ERROR❗️ : Le nombre d'article ne peut être égal a 0");
    productAmount.value = 1;
  };
  totalArticle();
};

// Nombre d'article multiplié par sont prix
function totalArticle() {
    priceTotal.textContent = price.textContent * productAmount.value;
};

totalArticle();