const url = "http://localhost:3000/api/cameras";
const product = document.getElementById("product");
const title = document.getElementById("title");
const confirm = document.getElementById("addto");

let selectedLenses = "10";
let cameraName = "Exemple";

class Product {
  construtor(articleId, cameraName) {
    this.articleId = articleId; // La variable articleId renvois l'id de l'article
    this.cameraName = cameraName; // selectedElem.value renvois le nom de la lentille selectionné
  }
}

// variables
let articleId; // ID de l'article sur lequelle le clic à été effectué
let article;

// Récupérationd de l'id de l'article

function getId() {
  var str = window.location.href;
  var url = new URL(str);
  var search_params = new URLSearchParams(url.search);
  if (search_params.has("id")) {
    let id = search_params.get("id");
    articleId = id;
  } else {
    console.log("L'id de l'article n'a pas été trouvé ❌");
  }
}

getId();

//Récupération et affichage des informations de l'appareil

const fetchArticles = async () => {
  article = await fetch(`http://localhost:3000/api/cameras/${articleId}`).then(
    (res) => res.json()
  );
};

const showArticles = async () => {
  await fetchArticles();

  document.getElementById("product-img").src = article.imageUrl;
  document.getElementById("product-name").textContent = article.name;
  document.getElementById("description").textContent = article.description;
  document.getElementById("price").textContent = article.price + " €";
  title.textContent = "Orinoco - " + article.name;
  selectElem.selectedIndex = 0;

  // Récuperation et Affichage de la liste des lentilles

  const numberOfOptions = article.lenses.length;
  let optionSelector = document.getElementById("lenses");

  for (let i = 0; i < numberOfOptions; i++) {
    let lens = document.createElement("option");
    optionSelector.appendChild(lens);
    lens.textContent = article.lenses[i];
    lens.value = article.lenses[i];
  }
};

showArticles();

/////////////////////////////////// Récupreration de l'option selectionné ////////////////////////////

var selectElem = document.getElementById("lenses");
var selectedLenseIndex;

// Quand une nouvelle <option> est selectionnée
selectElem.addEventListener("change", function () {
  var index = selectElem.selectedIndex;
  selectedLenseIndex = index;
});

/////////////////////////////////// Local Storage  ////////////////////////////

function saveData() {
  let cameraName = article.name;
  let cameraPrice = article.price;
  let cameraLense = selectElem.value;
  if (selectElem.selectedIndex == 0) {
    alert("Veuillez sélectionner une lentille");
  } else {
    /// AJOUT AU PANIER ////
    try {
      addItemToCart();
    } catch (error) {
      alert(error);
    }
  }
}

function addItemToCart() {
  let cartContent = localStorage.getItem("cartContent");
    SaveDataToLocalStorage();
}

function SaveDataToLocalStorage(data) {
  let cameraName = article.name;
  let cameraPrice = article.price;
  let cameraLense = selectElem.value;
  var a = [];
  a = JSON.parse(localStorage.getItem("cartContent")) || [];
  a.push(JSON.parse(JSON.stringify({
    name: cameraName,
    price: cameraPrice,
    lense: cameraLense,
    _id: articleId
  })
  ));
  try {
    localStorage.setItem("cartContent", JSON.stringify(a));
    confirm.textContent = "L'article à bien été ajouter au panier."
    setTimeout(function() {confirm.textContent = null;}, 3000);
  } catch {
    confirm.textContent = "Echec de l'ajout de l'article au panier."
  }
}
