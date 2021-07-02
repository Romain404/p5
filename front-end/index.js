console.log("index.js loaded ✅");

const url = "http://localhost:3000/api/cameras";
const results = document.getElementById('results');

//Affirchage des appareils dans une liste

let articles;

const fetchArticles  = async() => {
  articles = await fetch(url).then(res => res.json());
  console.table(articles);
  console.log('Chargement des donées terminé✅')
};

const showArticles = async() => {
  await fetchArticles();

  results.innerHTML = (

    articles
    .filter(article => article.name)
    .map(article => (
      `
      <li class="item">
        <a href="product.html?id=${article._id}" class="product-link">
          <img src="${article.imageUrl}" alt="${article.name}";>
          <div class="description">
            <h2 id="name">${article.name}</h2>
            <h3 id="price">${article.price} €</h3>
            <p id="item-description">${article.description}</p>
          </div>
        </a>
      </li>
      `
    )).join('')
  );
  console.log("Ajout du code HTML avec les informations des différents produit✅");

};

showArticles();









