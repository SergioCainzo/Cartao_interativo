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



// Funções de evento

// Ação do evento "clicar"
botao.addEventListener('click', () => {
    // Funções do cartão;
    mudarCodigo()
    msg();
    // Letras Maiúsculas
    letrasMaiusculas();
})

//  Funções
// Função para evento de clicar
function mudarCodigo(){
    cardName.textContent = nome.value;
    cardNumber.textContent = numero.value;
    cardSec.textContent = seguranca.value;
    cardValid.textContent = mes.value + '/' + ano.value;
}

// Função de Letra Maiuscula
function letrasMaiusculas(){
    nome.value = nome.value.toUpperCase();
}

//  Função de mensagem
function msg (){
    
    resposta.innerHTML = "Thank you! We've added your card details Continue.";
}
