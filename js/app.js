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


// Global variables
let openCardsArray = [];
let deck = document.querySelector('.deck');
let moves = document.getElementById('moves');
let finish = document.querySelector('.finish');
let time = document.getElementById('time');
let firstStar = document.getElementById('first');
let secondStar = document.getElementById('second');
let thirdStar = document.getElementById('third');
let minutes = 0;
let seconds = 1;
let count = 0;

function loadGame() {
    // Shuffle the cards
    shuffle(cards);
    time.innerText = '0 : 0';
    // Display the cards on the page
    for (let card in cards) {
        const cardHtml = `<li class="${cards[card].class} ${cards[card].cardType}"></li>`;
        deck.innerHTML += cardHtml;
    }
};


// Loading the game 
window.onload = loadGame();
click();


// Restart button
function restart() {
    // Shuffle the cards
    shuffle(cards);
    // Clear current cards
    moves.innerText = '0';
    deck.innerHTML = '';
    finish.innerHTML = '';
    firstStar.style.color = '';
    secondStar.style.color = '';
    thirdStar.style.color = '';
    time.innerText = '0 : 0';
    count = 0;
    seconds = 1;
    minutes = 0;
    clearInterval(startTime);
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


// Click event function
function click() {
    deck.addEventListener('click', event => {
        if (event.target.tagName === "LI") {
            const dimension = openCardsArray.length;
            //  Set the maximum of 2 cards revealed, before compared
            if (dimension < 2) {
                // Reveal card on click
                event.target.classList.add('show', 'open');
            };
            // Push the selected cards to openCardsArray
            openCardsArray.push(event.target);
            if (dimension === 1) {
                // Compare the cards to see if they match
                if (openCardsArray[0].classList.value === openCardsArray[1].classList.value) {
                    match();
                    movesCount(2);
                    setTimeout(congrats, 200);
                } else {
                    // Extended visibility for unmatch cards
                    setTimeout(unmatch, 500);
                    movesCount(1);
                }
            }
        }
    })
};


// If cards match do this
function match() {
    openCardsArray[0].classList.add("match");
    openCardsArray[1].classList.add("match");
    openCardsArray[0].classList.remove("show", "open");
    openCardsArray[1].classList.remove("show", "open");
    openCardsArray = [];
};


// If cards don't match do this
function unmatch() {
    openCardsArray[0].classList.remove("show", "open");
    openCardsArray[1].classList.remove("show", "open");
    openCardsArray = [];
};


// Count the number of moves
function movesCount(num) {
    count += num;
    moves.innerText = count;
    if (count == 1) {
        countTimer();
    }
    if (count <= 25) {
        firstStar.style.color = 'yellow';
        secondStar.style.color = 'yellow';
        thirdStar.style.color = 'yellow';
    } else if (count > 25 && count < 35) {
        firstStar.style.color = 'yellow';
        secondStar.style.color = 'yellow';
        thirdStar.style.color = 'white';
    } else if (count >= 35) {
        firstStar.style.color = 'yellow';
        secondStar.style.color = 'white';
        thirdStar.style.color = 'white';
    }
};


// Time counter 
function countTimer() {
    startTime = setInterval(() => {
        time.innerText = minutes + ' : ' + seconds;
        seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
    }, 1000);
}


// Congratulations message when all cards are revealed
function congrats() {
    const match = document.getElementsByClassName('match');
    if (match.length == 16) {
        const popUp =
            `<div class="congrats">
               <h1>Well done!</h1>
               <p>Completed in <span id="movesResult"></span> moves.</p>
               <p>Time: <span id="timeResult"></span>
               <ul class="stars">
                   <li><i id="firstResult" class="fa fa-star"></i></li>
                   <li><i id="secondResult" class="fa fa-star"></i></li>
                   <li><i id="thirdResult" class="fa fa-star"></i></li>
               </ul>
               </p>
               <div class="button" onclick="restart()">Play again!</div>
            </div>`;
        finish.innerHTML = popUp;
        clearInterval(startTime);
        document.getElementById('firstResult').style.color = firstStar.style.color;
        document.getElementById('secondResult').style.color = secondStar.style.color;
        document.getElementById('thirdResult').style.color = thirdStar.style.color;
        document.getElementById('movesResult').innerText = moves.innerText;
        document.getElementById('timeResult').innerText = time.innerText;
    }
};