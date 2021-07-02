console.log("product.js loaded ✅");

const url = "http://localhost:3000/api/cameras";
const product = document.getElementById("product");

// Récupérationd de l'id de l'article

let articleId;

function getId() {
  var str = window.location.href;
  var url = new URL(str);
  var search_params = new URLSearchParams(url.search);
  if (search_params.has("id")) {
    let id = search_params.get("id");
    console.log('❕',id, '❕');
    showArticles();
    articleId = id;
  } else {
      console.log("L'id de l'article n'a pas été trouvé ❌")
  }
}

getId();

function showArticle() {
    
}

//Affirchage des information de l'appareil

let articles;

const fetchArticles = async () => {
  articles = await fetch(url).then((res) => res.json());
  console.table(articles);
  console.log("Chargement des donées terminé✅");
};

const showArticles = async () => {
  await fetchArticles();

  product.innerHTML = articles
    .filter((article) => article.name)
    .map(
      (article) =>
        `
        `
    )
    .join("");
  console.log(
    "Ajout du code HTML avec les informations des différents produit✅"
  );
};

showArticles();