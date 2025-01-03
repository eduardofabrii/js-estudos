let lista = document.createElement('ul');

for (let i = 0; i < 5; i++) {
    let item = document.createElement('li');
    let texto = document.createTextNode('Texto '  + (i+1) + ' para a listaaaaa')
    item.appendChild(texto);
    lista.appendChild(item);
}

let div_com_texto = document.querySelector('#div-com-texto');
div_com_texto.appendChild(lista);