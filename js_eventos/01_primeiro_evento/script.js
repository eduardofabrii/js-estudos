let body = document.querySelector('body');
let button1 = document.querySelector('button');

button1.addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
    console.log("Cor alterada com sucesso!")
})