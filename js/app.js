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
var openCardsArray = [];
var deck = document.querySelector('.deck');

function loadGame() {
    // Shuffle the cards
    shuffle(cards);


    // Display the cards on the page
    for (let card in cards) {
        const cardHtml = `<li class="${cards[card].class} ${cards[card].cardType}"></li>`;
        deck.innerHTML += cardHtml;
    }

};

// Loading the game 
window.onload = loadGame();
click();
restart();
//openCards();


// Restart button
function restart() {
    // Shuffle the cards
    shuffle(cards);

    // Clear current cards
    deck.innerHTML = '';
    // Display the cards on the page
    for (let card in cards) {
        const cardHtml = `<li class="${cards[card].class} ${cards[card].cardType}"></li>`;
        deck.innerHTML += cardHtml;
    }
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



function click() {
    deck.addEventListener('click', () => {
        if (event.target.tagName === "LI") {
            dimension = openCardsArray.length;
            if (openCardsArray[0] === openCardsArray[1]) {
                // Display the selected card on click
                openCardsArray.push(event.target.classList.add('show', 'open'));
            }
        }
    });
};

// function match() {
//     openCardsArray[0].classList.add("match");
//     openCardsArray[1].classList.add("match");
//     openCardsArray[0].classList.remove("show", "open");
//     openCardsArray[1].classList.remove("show", "open");
//     openCardsArray = [];
// };

// function unmatch() {
//     openCardsArray[0].classList.remove("show", "open");
//     openCardsArray[1].classList.remove("show", "open");
//     openCardsArray = [];
// }


// function openCards() {
//     deck.addEventListener('click', () => {
//         if (event.target.tagName === "LI") {
//             // Compare the cards to see if they match
//             const dimension = openCardsArray.length;
//             if ((dimension === 2) && (openCardsArray[0] === openCardsArray[1])) {
//                 // Push the selected card class to openCardsArray
//                 openCardsArray.push(event.target.getAttribute('class'));
//                 match();
//             } else {
//                 unmatch();
//             }
//         }
//     });
// };





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