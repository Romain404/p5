const productAmount = document.getElementById("productAmount");
const price = document.getElementById("price");
const priceTotal = document.getElementById("priceTotal");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const lens = document.getElementById("lens");
const name = document.getElementById("name");
const error = document.getElementById("error");
/////////////////////////////// Sélecteur de quantité /////////////////////////////////////

// Action au clique sur -
function operationPlus() {
  productAmount.value++;
  if (productAmount.value > 1) {
    error.textContent = null;
  }


  totalArticle();
}

// Action au clique sur +
function operationMinus() {
  productAmount.value--;
  if (productAmount.value < 1) {
    console.log("❗️ERROR❗️ : Le nombre d'article ne peut être égal a 0");
    error.textContent = "La quantité ne peut être inférieur à 1 !";
    productAmount.value = 1;
  };
  totalArticle();
};

// Nombre d'article multiplié par sont prix
function totalArticle() {
    priceTotal.textContent = price.textContent * productAmount.value;
};

totalArticle();

///////////////////////////// Ajout d'un article au panier ////////////////////////////

var JSONdata = localStorage.getItem('cartContent')
var data = JSON.parse(JSONdata);

price.textContent = data.price;
name.textContent = data.name;
lens.textContent = data.lense;





