/////////////////////////////// récuperation de donnée dans localStorage //////////////////////////////
let orderId = localStorage.getItem("orderConfirmationId");
const order = document.getElementById("order");
////////////////////////////// Affichage de l'id de commande //////////////////////////////////////////
order.textContent = "Votre numéro de commande est : "+orderId;