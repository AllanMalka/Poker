let deck = [];
let round;
let amountUsers;
let checked;


const startGame = () => {
    for (var i = 1; i < 53; i++) {
        deck.push(i);
    }
    const users = $('.userHand');
    amountUsers = users.length;
    users.map(function () {
        for (let x = 0; x < 2; x++) {
            $(this).append(appendCard(drawCard(), 'handCard'));
        }
    });
    round = 1;
    checked = 0;
}

const RandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const drawCard = () => {
    const deckIndex = RandomNumber(0, (deck.length - 1))
    const givenCard = deck[deckIndex];
    deck.splice(deck.indexOf(givenCard), 1);
    return givenCard;
}
const appendCard = (card, typeCard) => {
    return `<div class="${typeCard} frontCard" data-hand-${card}><img src="img/deck/${card}.png" /></div>`;
}

$('#btnCheck').on('click', function (e) {
    e.preventDefault();
    checked = checked + 1;
});
$('#btnFold').on('click', function(e) {
    e.preventDefault();
    $('.userHand').empty();
    amountUsers--;
})

setInterval(() => {
    if (round != 4){
        if (checked == amountUsers) {
            const draws = round == 1 ? 3 : 1;
            for (let x = 0; x < draws; x++) {
                $('#tableShown').append(appendCard(drawCard(), 'tableCard'));
            }
            round++;
            checked = 0;
        }
    }
}, 100)

startGame();