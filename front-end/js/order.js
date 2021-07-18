/////////////////////////////// récuperation de donnée dans localStorage //////////////////////////////
let orderId = localStorage.getItem("orderConfirmationId");
console.log(orderId);
const order = document.getElementById("order");
////////////////////////////// Affichage de l'id de commande //////////////////////////////////////////
order.textContent = "Votre numéro de commande est : "+orderId;