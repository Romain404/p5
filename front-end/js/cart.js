const price = document.getElementById("price");
const priceTotal = document.getElementById("priceTotal");
const lens = document.getElementById("lens");
const name = document.getElementById("name");
const error = document.getElementById("error");
const table = document.querySelector("tbody");
const cartTitle = document.getElementById("cart-title");
const sTotal = document.getElementById("stotal");
const deleteBtn = document.getElementById("deleteAll");
// tableau des prix
const arrayPrice = [];
//////Création du tableau qui va être envoyé au serveur avec les id des caméras
let products = [];
//////Création de l'objet contact contenant les données du formulaire qui va être envoyé au serveur
let contact = {};
//////Création d'une classe pour structurer l'objet contact
class ContactData {
    constructor(name, surname, adress, city, email) {
        this.firstName = name;
        this.lastName = surname;
        this.address = adress;
        this.city = city;
        this.email = email;
    }
}

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
  <td id="price">${data[i].price + " €"}</td>
  `;

  let productName = data[i].name;
  console.log("0001 Nom : " + productName);
  let productPrice = data[i].price;
  console.log("0002 Prix : " + productPrice);
  let productLense = data[i].lense;
  console.log("0003 Lentille : " + productLense);

  arrayPrice.push(productPrice);
  products.push(data[i]._id);
  
}
const productAmount = document.getElementById("productAmount");

/////////////////////////////////////// Nombre d'article dans le panier ////////////////////////////////////
cartTitle.textContent = "Votre panier ( " + data.length + " articles )";

////////////////////////////////////// Total commande ///////////////////////////////////////////////////////
let totalPrice = document.getElementById("stotal");
let total = 0;
for (i = 0; i < arrayPrice.length; i++) {
  total = total + arrayPrice[i];
  console.log("0005 ArrayPrices :" + arrayPrice.length);
  totalPrice.textContent = total + " €";
}

////////////////////////////////////// funtions ////////////////////////////////////////////////////////////

function deleteAll() {
  var r = confirm(
    "Voulez-vous réellement vider tout le contenu de votre panier ?"
  );
  if (r == true) {
    localStorage.removeItem("cartContent");
    location.reload();
  }
}
function buy() {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  if (
    (fname,
    lname,
    address,
    city,
    email != "" &&
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ))
  ) {
    console.log('0007 : formulaire ok');
    confirmationOrder();
    return true;
  } else {
    console.log("0007: formulaire incomplet");
    alert("Saisissez tous les champs et entrez un email valide");
    return false;
  }
}

function confirmationOrder() {
  getForm();
  dataToSend = JSON.stringify({ contact, products });
  console.log(dataToSend);
  postForm(dataToSend);
}

function getForm() {
  let firstname = document.getElementById('fname').value;
  let lastname = document.getElementById('lname').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let email = document.getElementById('email').value;
  contact = {
    firstName: firstname,
    lastName: lastname,
    address: address,
    city: city,
    email: email
  };
}


///////////////////////// Envois de la requête à l'API //////////////////////////////

async function postForm(dataToSend) {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  try {
      let response = await fetch("http://localhost:3000/api/cameras/order", {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: dataToSend
      });
      if (response.ok) {
          let responseId = await response.json();
          console.log(responseId);
          getOrderConfirmationId(responseId);
      } else {
          console.error('Retour du serveur : ', response.status);
      }
  } catch (e) {
      console.log(e);
  }
}
/////////////////////////////////////////////////////////////////////////////////////
// Récupération du numero de commande et sauvegarde de celui ci dans localStorage ///

function getOrderConfirmationId(responseId) {
  let orderId = responseId.orderId;
  console.log(orderId);
  localStorage.setItem("orderConfirmationId", orderId);
}