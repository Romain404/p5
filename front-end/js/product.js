console.log("product.js loaded ✅");

const url = "http://localhost:3000/api/cameras";
const product = document.getElementById("product");
const title = document.getElementById("title");
const corfim = document.getElementById("addto");

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
    console.log("L'id de l'article en question est :❕", id, "❕");
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
  console.table(article);
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

  console.log(article.lenses.length + " options disponible pour cet article");
  console.table(article.lenses);

  const numberOfOptions = article.lenses.length;
  let optionSelector = document.getElementById("lenses");

  for (let i = 0; i < numberOfOptions; i++) {
    let lens = document.createElement("option");
    optionSelector.appendChild(lens);
    lens.textContent = article.lenses[i];
    lens.value = article.lenses[i];
  }

  console.log(
    "Ajout du code HTML avec les informations des différents produit✅"
  );
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
    console.log("Sauvegarde de l'élément et de ça lentille");
    localStorage.setItem(
      "cartContent",
      JSON.stringify({
        name: cameraName,
        price: cameraPrice,
        lense: cameraLense,
        id: articleId,
      })
    );
    corfim.textContent = "L'article à bien été ajouté au panier";
  }
}
