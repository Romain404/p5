const price = document.getElementById("price");
const priceTotal = document.getElementById("priceTotal");
const lens = document.getElementById("lens");
const name = document.getElementById("name");
const error = document.getElementById("error");
const table = document.querySelector("tbody");
const cartTitle = document.getElementById("cart-title");

///////////////////////////////////////// Ajout d'un article au panier /////////////////////////////////////

var JSONdata = localStorage.getItem("cartContent");
var data = JSON.parse(JSONdata);

const numberOfArticle = data.length;

for (let i = 0; i < numberOfArticle; i++) {
  let newItem = document.createElement("tr");
  newItem.id = "product";
  table.appendChild(newItem);
  newItem.innerHTML = `

  <td id="name">${data[i].name}</td>
  <td id="lens">${data[i].lense}</td>
  <td id="price">${data[i].price}</td>
  `;

  let productName = data[i].name;
  console.log("0001 Nom : " + productName);
  let productPrice = data[i].price;
  console.log("0002 Prix : " + productPrice);
  let productLense = data[i].lense;
  console.log("0003 Lentille : " + productLense);
}
const productAmount = document.getElementById("productAmount");

/////////////////////////////////////// Nombre d'article dans le panier ////////////////////////////////////
cartTitle.textContent = "Votre panier ( " + data.length + " articles )";

////////////////////////////////////// funtions ////////////////////////////////////////////////////////////


// function test
function totalPriceOrder(arrayPrice) {
  let totalPrice = document.getElementById('priceTotal');
  let total = 0;
  for (i = 0; i < arrayPrice.length; i++) {
      total = total + arrayPrice[i];
      totalPrice.textContent = "Prix total : " + total + "$";
      //Stockage du prix dans le localStorage pour la page de confirmation
      localStorage.setItem("totalOrder", JSON.stringify(total));
  }
}