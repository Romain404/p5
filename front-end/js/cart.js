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
    <td id="amountCell">
      <select id="productAmount"></select>
      <button id="delete-btn">
      <i class="fas fa-trash-alt fa-2x"></i>
      </button>
    </td>
    <td id="price">${data[i].price}</td>
    <td id="priceTotal"></td>
  `;

  let productName = data[i].name;
  console.log("0001 Nom : " + productName);
  let productPrice = data[i].price;
  console.log("0002 Prix : " + productPrice);
  let productLense = data[i].lense;
  console.log("0003 Lentille : " + productLense);

  //////////////////////////////////////// Quantity Setting ////////////////////////////////////////////////

  let maxAmount = 12;
  let minAmount = 1;

  for (let i = 0; i < maxAmount; i++) {
    let select = document.getElementById("productAmount");
    let number = document.createElement("option");
    select.appendChild(number);
    console.log(select[i]);
    number.textContent = minAmount;
    minAmount++;
  }
}

function addingQuantity() {
  let maxAmount = 12;
  let minAmount = 1;

  //  for (let i = 0; i < maxAmount; i++) {
  //    let select = document.querySelectorAll("select");
  //    let number = document.createElement("option");
  //    number.textContent = minAmount;
  //    select.appendChild(number);
  //    minAmount++;
  //  }
}

/////////////////////////////////////// Nombre d'article dans le panier ////////////////////////////////////
cartTitle.textContent = "Votre panier ( " + data.length + " articles )";

/////////////////////////////////////// Prix unitaire multiplié par le nombre d'article/////////////////////
function totalArticle() {}

/////////////////////////////////////// Suppression des produits ///////////////////////////////////////////
