const easyItems = [
    'imagens/facil/amarelo.png',
    'imagens/facil/azul.png',
    'imagens/facil/verde.png',
    'imagens/facil/vermelho.png'
];

const mediumItems = [
    'imagens/medio/bekka.png',
    'imagens/medio/dramastico.png',
    'imagens/medio/duarte.png',
    'imagens/medio/estrela.png',
    'imagens/medio/gorrinho.png',
    'imagens/medio/limpinho.png',
    'imagens/medio/santim.png',
    'imagens/medio/sel-mar.png'
];

const hardItems = [
    'imagens/medio/bekka.png',
    'imagens/medio/dramastico.png',
    'imagens/medio/duarte.png',
    'imagens/medio/estrela.png',
    'imagens/medio/gorrinho.png',
    'imagens/medio/limpinho.png',
    'imagens/medio/santim.png',
    'imagens/medio/sel-mar.png',
    'imagens/dificil/conchinha.png',
    'imagens/dificil/caquinho.png',
    'imagens/dificil/galinho.png',
    'imagens/dificil/sonhadora.png'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;
let totalPairs = 0;

function startGame(level){

    matches = 0;

    document.querySelector('.menu').classList.add('hidden');

    document.getElementById('board').classList.remove('hidden');

    let pairs;
    let columns;

    if(level === 'easy'){
        pairs = 4;
        columns = 4;
    }
    else if(level === 'medium'){
        pairs = 8;
        columns = 4;
    }
    else{
        pairs = 12;
        columns = 8;
    }

    totalPairs = pairs;

    let selected;

    if(level === 'easy'){
        selected = easyItems;
    }
    else if(level === 'medium'){
        selected = mediumItems;
    }
    else{
        selected = hardItems;
    }

    const cardsArray = [...selected, ...selected]
        .sort(() => Math.random() - 0.5);

    const board = document.getElementById('board');

    // Limpa tabuleiro antigo
    board.innerHTML = '';

    board.style.gridTemplateColumns = `repeat(${columns},100px)`;

    cardsArray.forEach(item => {

        const card = document.createElement('div');

        card.classList.add('card');

        card.dataset.value = item;

        card.innerHTML = '❓';

        card.addEventListener('click', () => revealCard(card,item));

        board.appendChild(card);

    });
}

function revealCard(card,item){

    if(lockBoard) return;

    if(card.classList.contains('revealed')) return;

    card.classList.add('revealed');

    card.innerHTML = `
        <img src="${item}" width="80">
    `;

    if(!firstCard){

        firstCard = card;

        return;
    }

    secondCard = card;

    lockBoard = true;

    checkMatch();
}

function checkMatch(){

    const isMatch =
        firstCard.dataset.value === secondCard.dataset.value;

    if(isMatch){

        matches++;

        setTimeout(() => {

            firstCard.remove();
            secondCard.remove();

            resetBoard();

            if(matches === totalPairs){

                alert('🎉 Você venceu!');
            }

        },500);

    }
    else{

        setTimeout(() => {

            firstCard.classList.remove('revealed');
            secondCard.classList.remove('revealed');

            firstCard.innerHTML = '❓';
            secondCard.innerHTML = '❓';

            resetBoard();

        },1000);
    }
}

function resetBoard(){

    firstCard = null;
    secondCard = null;
    lockBoard = false;
}