let body = document.querySelector('body');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let button3 = document.querySelector('#btn3');
let cor_atual = document.querySelector('#cor-atual');

function alterarCor() {
    if (body.style.backgroundColor == 'blue') {
        body.style.backgroundColor = 'yellow';
        if (cor_atual) { cor_atual.textContent = "Amarela"; }
        console.log("Background amarelo");
    } else {
        body.style.backgroundColor = 'blue'
        if (cor_atual) { cor_atual.textContent = "Azul"; }
        console.log("Background azul");
    }
}

function mudarParaRosa() {
    if (body.style.backgroundColor) {
        body.style.backgroundColor = 'pink';
        if (cor_atual) { cor_atual.textContent = "Rosa"; }
        console.log("Background rosa");
    }
}

function mudarParaCinza(e) {
    e.preventDefault();
    if (body.style.backgroundColor) {
        body.style.backgroundColor = 'black';
        if (cor_atual) { cor_atual.textContent = "Cinza"; }
        console.log("Background cinza");
    }
}

button1.addEventListener('mousedown', alterarCor);
button2.addEventListener('dblclick', mudarParaRosa);
button3.addEventListener('contextmenu', mudarParaCinza(e));