// List with all the cards
const cards = [{
        name: 'diamond',
        class: 'card',
        cardType: 'fa fa-diamond'
    },
    {
        name: 'diamond',
        class: 'card',
        cardType: 'fa fa-diamond'
    },
    {
        name: 'plane',
        class: 'card',
        cardType: 'fa fa-paper-plane-o'
    },
    {
        name: 'plane',
        class: 'card',
        cardType: 'fa fa-paper-plane-o'
    },
    {
        name: 'anchor',
        class: 'card',
        cardType: 'fa fa-anchor'
    },
    {
        name: 'anchor',
        class: 'card',
        cardType: 'fa fa-anchor'
    },
    {
        name: 'bolt',
        class: 'card',
        cardType: 'fa fa-bolt'
    },
    {
        name: 'bolt',
        class: 'card',
        cardType: 'fa fa-bolt'
    },
    {
        name: 'cube',
        class: 'card',
        cardType: 'fa fa-cube'
    },
    {
        name: 'cube',
        class: 'card',
        cardType: 'fa fa-cube'
    },
    {
        name: 'leaf',
        class: 'card',
        cardType: 'fa fa-leaf'
    },
    {
        name: 'leaf',
        class: 'card',
        cardType: 'fa fa-leaf'
    },
    {
        name: 'bicycle',
        class: 'card',
        cardType: 'fa fa-bicycle'
    },
    {
        name: 'bicycle',
        class: 'card',
        cardType: 'fa fa-bicycle'
    },
    {
        name: 'bomb',
        class: 'card',
        cardType: 'fa fa-bomb'
    },
    {
        name: 'bomb',
        class: 'card',
        cardType: 'fa fa-bomb'
    }
];

function loadGame() {
    // Shuffle the cards
    shuffle(cards);

    const deck = document.querySelector('.deck');
    // Display the cards on the page
    for (let card in cards) {
        const cardHtml = `<li class="${cards[card].class}"><i class="${cards[card].cardType}"></i></li>`;
        deck.innerHTML += cardHtml;
    }

};

// Loading the game 
window.onload = loadGame();
click();
restart();

// Restart button
function restart() {
    const resetBtn = document.querySelector('.restart');
    resetBtn.addEventListener('click', () => {
        // Shuffle the cards
        shuffle(cards);

        const deck = document.querySelector('.deck');
        // Clear current cards
        deck.innerHTML = '';
        // Display the cards on the page
        for (let card in cards) {
            const cardHtml = `<li class="${cards[card].class}"><i class="${cards[card].cardType}"></i></li>`;
            deck.innerHTML += cardHtml;
        }
    })
};


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
/*

if (click)
addClass show, open
   if (class = class)
     addClass match
   else
     removeClass show, open

*/


function click() {
    const deck = document.querySelector('.deck');
    deck.addEventListener('click', () => {
        if (event.target.tagName === "LI") {
            event.target.classList.add('show', 'open');
        }
    });

};

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */