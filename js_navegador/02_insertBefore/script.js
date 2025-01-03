let newElement = document.createElement("p");

let texto = document.createTextNode("Qualquer coisa para o paragrafo!!!!")
newElement.appendChild(texto);

let targetElement = document.querySelector("#titulo-principal");
let fatherElement = document.querySelector("#container-principal");

fatherElement.insertBefore(newElement, targetElement)

