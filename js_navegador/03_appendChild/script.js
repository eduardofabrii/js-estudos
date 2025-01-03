let newElement = document.createElement("p");
let texto = document.createTextNode("Testtannndooo")
newElement.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendChild(newElement);

