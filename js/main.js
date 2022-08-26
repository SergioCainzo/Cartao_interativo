// Variáveis dos seletores
// Seletor Nome
let cardName = document.querySelector('.card_name');
let nome = document.querySelector('.name');

// Seletor Código de Segurança
let seguranca = document.querySelector('.sec');
let cardSec = document.querySelector('.seguro');

// Seletor número do cartão
let numero = document.querySelector('.number');
let cardNumber = document.querySelector('.card_number');

// Seletor validade
let mes = document.querySelector('.mm');
let ano = document.querySelector('.yy');
let cardValid = document.querySelector('.card_valid');


// Seletor Tag Form
let resposta = document.querySelector('.container_formulario');


// Const do click => botao
const botao = document.querySelector('.button');



botao.addEventListener('click', () => {
    // Funções do cartão;
    mudarCodigo();
    msg();
    // Letras Maiúsculas
    letrasMaiusculas();
})


function mudarCodigo(){
    cardName.textContent = nome.value;
    cardSec.textContent = seguranca.value;
    cardNumber.textContent = numero.value;
    cardValid.textContent = mes.value + '/' + ano.value;
}

// Função de Letra Maiuscula
function letrasMaiusculas(){
    nome.value = nome.value.toUpperCase();
}

function msg (){
    resposta.innerHTML = "Thank you!";
}
