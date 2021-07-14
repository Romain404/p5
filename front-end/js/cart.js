const productAmount = document.getElementById("productAmount");
const price = document.getElementById("price");
const priceTotal = document.getElementById("priceTotal");
const lens = document.getElementById("lens");
const name = document.getElementById("name");
const error = document.getElementById("error");
const table = document.querySelector("tbody");
const cartTitle = document.getElementById("cart-title");

///////////////////////////// Ajout d'un article au panier ////////////////////////////

var JSONdata = localStorage.getItem("cartContent");
var data = JSON.parse(JSONdata);

price.textContent = data.price;
name.textContent = data.name;
lens.textContent = data.lense;

const numberOfArticle = data.length;

for (let i = 0; i < numberOfArticle; i++) {
  let newItem = document.createElement("tr");
  newItem.id = "product";
  table.appendChild(newItem);
  console.log(JSONdata.name);
  newItem.innerHTML = `
  <tr id="product">
    <td id="name">${data.name}</td>
    <td id="lens">${data.lense}</td>
    <td id="amountCell"><select id="productAmount"></select><button id="delete-btn"><i class="fas fa-trash-alt fa-2x"></i></button></td>
    <td id="price">${data.price}</td>
    <td id="priceTotal"></td>
  </tr>
  `;
}
/////////////////// Nombre d'article dans le panier ///////////////////
cartTitle.textContent = "Votre panier ( " + data.length + " articles )";

////////////////// Prix unitaire multiplié par le nombre d'article////////////
function totalArticle() {
  priceTotal.textContent = price.textContent * productAmount.value;
}

totalArticle();

/////////////////////////////// Sélecteur de quantité /////////////////////////////////////
let maxAmount = 12;
let minAmount = 1;

for (let i = 0; i < maxAmount; i++) {
  let number = document.createElement("option");
  productAmount.appendChild(number);
  number.textContent = minAmount;
  minAmount++;
}

//////////////////////////// Suppression d'un produit /////////////////////////////////
