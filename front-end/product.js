console.log("product.js loaded ✅");

const url = "http://localhost:3000/api/cameras";
const product = document.getElementById("product");

// functions

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
  document.getElementById("price").textContent = article.price + ' €';
  document.getElementById("lenses").length = article.lenses.length;

  // Récuperation et Affichage de la liste des lentilles

  console.log(article.lenses.length + " options disponible pour cet article");
  console.table(article.lenses);

	const numberOfOptions = article.lenses.length;
	let optionSelector = document.getElementById('lenses');

	for (let i = 0; i < numberOfOptions; i++) {
		let lens = document.createElement('option');
		optionSelector.appendChild(lens);
		lens.textContent = article.lenses[i];
	}

  console.log(
    "Ajout du code HTML avec les informations des différents produit✅"
  );
};

showArticles();
