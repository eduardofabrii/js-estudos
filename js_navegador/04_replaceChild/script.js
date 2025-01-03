let newElement = document.createElement("h2");
let texto = document.createTextNode("Mudei mesmoooo")
newElement.appendChild(texto);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(newElement, heading);

