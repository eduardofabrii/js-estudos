let body = document.querySelector('body');
let button1 = document.querySelector('#btn1');
let button2 = document.querySelector('#btn2');
let p = document.querySelector('p');

function alterarCor(e) {
    body.style.backgroundColor = 'blue';
    console.log("Clicou no Button1!");
    e.stopPropagation();
}

button1.addEventListener('click', alterarCor);

button2.addEventListener('click', function(event) {
    console.log(event);
});

p.addEventListener('click', function() {
    console.log("Clicou no P!")
});
