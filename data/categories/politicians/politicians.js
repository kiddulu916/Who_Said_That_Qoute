/**
 * 
 * The following code is a JavaScript code for the internet browser basedgame "Who Said That Qoute?"
 * Specifically, this code is for the "politician" category.
 * This code was written by: Kiddulu aka KIDD
 * 
 */

// The base data for quotes by politicians 
const politicians = [
    {
        quote: "If I cannot do great things, I can do small things in a great way.",
        author: "Martin Luther King, Jr",
        options:["Queen Elizabeth II", "Winston Churchill", "Eleanor Roosevelt", "Martin Luther King, Jr."]
    },
    {
        quote: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
        author: "Queen Elizabeth II",
        options:["Mikhail Gorbachev", "Theodore Roosevelt", "Queen Elizabeth II", "Michelle Obama"]
    },
    {
        quote: "If what you have done yesterday still looks big to you, you haven't done much today.",
        author: "Mikhail Gorbachev",
        options:["Bill Clinton", "Mikhail Gorbachev", "Alexander the Great", "Ronald Reagan"]
    },
    {
        quote: "Never allow a person to tell you no who doesn’t have the power to say yes.",
        author: "Eleanor Roosevelt",
        options:["Eleanor Roosevelt", "Winston Churchill", "Nelson Mandela", "Ronald Reagan"]
    },
    {
        quote: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt",
        options:["Barack Obama", "Theodore Roosevelt", "Richard Nixon", "Julius Caesar"]
    },
    {
        quote: "Attitude is the 'little' thing that makes a big difference.", 
        author: "Winston Churchill", 
        options:["Vladimir Putin", "Xi Jinping", "Winston Churchill", "Emmanuel Macron"]
    },
    {
        quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.", 
        author: "Madeleine Albright",
        options:["Abraham Lincoln", "John F. Kennedy", "Woodrow Wilson", "Madeleine Albright"]
    },
    {
        quote: "There is nothing impossible to they who will try.",
        author: "Alexander the Great",
        options:["Alexander the Great", "Vladimir Putin", "Simon Bolivar", "John Lewis"]
    },
    {
        quote: "Success is not final, failure is not fatal: it is the Courage to continue that counts.",
        author: "Winston Churchill",
        options:["Rasputin", "Winston churchill", "Napoleon Bonaparte", "John Maxwell"]
    },
    {
        quote: "You must do the things you think you cannot do.",
        author: "Eleanor Roosevelt", 
        options:["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Eleanor Roosevelt"]
    },
    {
        quote: "We can't help everyone, but everyone can help someone.",
        author: "Ronald Reagan", 
        options:["Margaret Thatcher", "Ronald Reagan", "Lech Walesa", "Pope John Paul II"]
    },
    {
        quote: "It has always been easy to hate and destroy. To build and to cherish is much more difficult.", 
        author: "Queen Elizabeth II", 
        options:["Jacinda Ardern", "Justin Trudeau", "Queen Elizabeth II", "Joko Widodo"]
    },
    {
        quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.", 
        author: "Michelle Obama", 
        options:["Michelle Obama", "Joe Biden", "Kamala Harris", "Cory Booker"]
    },
    {
        quote: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", 
        author: "Meghan Markle",
        options:["Kate Middleton", "Marquis De Lafayette", "Prince Harry", "Meghan Markle"]
    },
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
        options:["Nelson Mandela", "Benedict Arnold", "Malala Yousafzai", "Franz Ferdinand"]
    },
    {
        quote: "Let us make our future now, and let us make our dreams tomorrow's reality.",
        author: "Malala Yousafzai",
        options:["Thomas Jefferson", "Mark Antony", "Malala Yousafzai", "JD Vance"]
    },
    {    
        quote: "We will fail when we fail to try.",
        author: "Rosa Parks",
        options:["Rosa Parks", "Frederick Douglass", "Martin Luther King Jr.", "John Lewis"]
    },
    {
        quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.", 
        author: "Amanda Gorman",
        options:["Alexander Hamilton", "Amanda Gorman", "James Madison", "Franklin D. Roosevelt"]
    }
];

// Returns an array of quotes from the politicians array.
function getQuotes() {
    return politicians.map(politician => politician.quote);
}

// Returns an array of options from the politicians array.
function getOptions() {
    return politicians.map(politician => politician.options);
};

// Returns an array of authors from the politicians array.
function getAuthors() {
    return politicians.map(politician => politician.author);
}

// Assign each gathered array to a variable.
let quotes = getQuotes();
let options = getOptions();
let authors = getAuthors(); 

// Empty interchangeable variable to store the selected active quote 
let selectedRanQuote;

// Empty interchangeable variable for the options associated with the active quote
let selectedQuoteOptions;

// Empty interchangeable variable to store the correct author of the active quote
let correctAnswer;
let correctAnswerLower = correctAnswer.trim().toLowerCase();
let clickedAnswer;

// Useful variables for the logistics of the game 
let timer;
let score = 0;
let timeLeft = 30;

// Useful DOM elements for the game.
const quoteBox = document.getElementById('quote')
const answerBtn1 = document.getElementById('answer-1')
const answerBtn2 = document.getElementById('answer-2')
const answerBtn3 = document.getElementById('answer-3')
const answerBtn4 = document.getElementById('answer-4')
const timerBox = document.getElementById('timer')
const scoreBox = document.getElementById('score')

// Function to select a random quote from the previously gathered "quotes" array.
const getRanQuote = () => {
    
    // Generates a random number equal to the length of the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Selects a random quote by using the randomIndex variable
    selectedRanQuote = quotes[randomIndex];
    
    //selected quote index in the quotes array
    let selectedQuoteIndex = quotes.indexOf(selectedRanQuote);
    
    // Removes the selected quote from the quotes array
    quotes.splice(selectedQuoteIndex, 1);
    
    // Selects the associated option array of the selected quote
    selectedQuoteOptions = options[selectedQuoteIndex];
    
    // Removes the selected option array from the array of options array
    options.splice(selectedQuoteIndex, 1);
    
    // Selects the associated author of the selected quote
    correctAnswer = authors[selectedQuoteIndex];
    
    // Removes the selected author from the authors array
    authors.splice(selectedQuoteIndex, 1);
}

// Function to shuffle the options array
const shuffleOptions = (selectedQuoteOptions) => {
    for (let i = selectedQuoteOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedQuoteOptions[i], selectedQuoteOptions[j]] = [selectedQuoteOptions[j], selectedQuoteOptions[i]];
    }
    return selectedQuoteOptions;
}

// Function to set a new quote and its associated options and display them
function displayInDOM() {
    
    // Displays the new quote
    quoteBox.innerHTML = selectedRanQuote;
    
    // Shuffle the selected quote's options
    selectedQuoteOptions = shuffleOptions(selectedQuoteOptions);
    
    // Assign each option to a button
    answerBtn1.textContent = selectedQuoteOptions[0];
    answerBtn2.textContent = selectedQuoteOptions[1];
    answerBtn3.textContent = selectedQuoteOptions[2];
    answerBtn4.textContent = selectedQuoteOptions[3]; 
}

//Function to start, track, and stop the timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft -= 1;
        timerBox.textContent = `Time Left: ${timeLeft} seconds`;
        if (timeLeft <= 0) {
            quoteBox.innerHTML = 'Time is up!';
            stopTimer();
        }     
    }, 1000);
}


// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
}

// Function to reset the timer
function resetTimer() {
    stopTimer();
    timeLeft = 30;
    timerBox.textContent = `Time Left: ${timeLeft} seconds`;
    if (!timer) {
        startTimer();
    }
}

function minusSeconds() {
    timeLeft -= 5;
}

// Function to add points to the score
function addPoints() {
    score += 10;
    scoreBox.textContent = 'Your Score: ' + score;
}

// Function to reset the score
function resetScore() {
    score = 0;
    scoreBox.textContent = 'Your Score: ' + score;
}

//Function to handle click events for each answer button
const handleAnswerClick = () => {
    getRanQuote();
    displayInDOM();
    [answerBtn1, answerBtn2, answerBtn3, answerBtn4].forEach((btn) => {
        btn.addEventListener('click', () => {
            
            // Assigns the clicked answer with the btn text content
            clickedAnswer = btn.textContent.trim().toLowerCase();
        });
    });
};

// Function to compare the clicked answer with the correct answer
function compareAnswer() {
    if (clickedAnswer === correctAnswerLower) {
        setTimeout(() => {    
            addPoints();
            quoteBox.innerHTML = '<img src="../../images/right.png" alt="correct">';
            getNewQuote();
        }, 2000);
    } else {
        setTimeout(() => {  
            minusSeconds();
            quoteBox.innerHTML = '<img src="../../images/wrong.png" alt="incorrect">';
        }, 2000);
        quoteBox.innerHTML = selectedRanQuote;
        handleAnswerClick();
        compareAnswer();
    }
}

// Function to grab a new quote
function getNewQuote() {
    resetTimer();
    if (!timer) {
        startTimer();
    }
    handleAnswerClick();
    compareAnswer();
}

// Function for game over
function gameOver() {
    stopTimer();
    quoteBox.innerHTML = 'Game Over!';
    scoreBox.textContent = 'Your Score: ' + score;
    document.getElementById('gameover-btns').classList.add('show');
}

// Function to start the game and the game operation
function startGame() {
    if (quotes.length > 0) {
        if (!timer) {
            startTimer();
        }
        handleAnswerClick();
        compareAnswer();
    } else {
        gameOver();
    }
}

// Start the game
startGame();