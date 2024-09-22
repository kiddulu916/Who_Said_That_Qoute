const politicians = politicians [
    {
        quote: "If I cannot do great things, I can do small things in a great way.",
        author: "Martin Luther King, Jr.",
        options: shuffleArray(["Queen Elizabeth II", "Winston Churchill", "Eleanor Roosevelt", "Martin Luther King, Jr."])
    },
    {
        quote: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
        author: "Queen Elizabeth II",
        options: shuffleArray(["Mikhail Gorbachev", "Theodore Roosevelt", "Queen Elizabeth II", "Michelle Obama"])
    },
    {
        quote: "If what you have done yesterday still looks big to you, you haven't done much today.",
        author: "Mikhail Gorbachev",
        options: shuffleArray(["Bill Clinton", "Mikhail Gorbachev", "Alexander the Great", "Ronald Reagan"])
    },
    {
        quote: "Never allow a person to tell you no who doesn’t have the power to say yes.",
        author: "Eleanor Roosevelt",
        options: shuffleArray(["Eleanor Roosevelt", "Winston Churchill", "Nelson Mandela", "Ronald Reagan"])
    },
    {
        quote: "Believe you can and you're halfway there.", 
        author: "Theodore Roosevelt",
        options: shuffleArray(["Barack Obama", "Theodore Roosevelt", "Richard Nixon", "Julius Caesar"])
    },
    {
        quote: "Attitude is the 'little' thing that makes a big difference.", 
        author: "Winston Churchill", 
        options: shuffleArray(["Vladimir Putin", "Xi Jinping", "Winston Churchill", "Emmanuel Macron"])
    },
    {
        quote: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.", 
        author: "Madeleine Albright",
        options: shuffleArray(["Abraham Lincoln", "John F. Kennedy", "Woodrow Wilson", "Madeleine Albright"])
    },
    {
        quote: "There is nothing impossible to they who will try.",
        author: "Alexander the Great",
        options: shuffleArray(["Alexander the Great", "Vladimir Putin", "Simon Bolivar", "John Lewis"])
    },
    {
        quote: "Success is not final, failure is not fatal: it is the Courage to continue that counts.",
        author: "Winston Churchill",
        options: shuffleArray(["Rasputin", "Winston churchill", "Napoleon Bonaparte", "John Maxwell"])
    },
    {
        quote: "You must do the things you think you cannot do.",
        author: "Eleanor Roosevelt", 
        options: shuffleArray(["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Eleanor Roosevelt"])
    },
    {
        quote: "We can't help everyone, but everyone can help someone.",
        author: "Ronald Reagan", 
        options: shuffleArray(["Margaret Thatcher", "Ronald Reagan", "Lech Walesa", "Pope John Paul II"])
    },
    {
        quote: "It has always been easy to hate and destroy. To build and to cherish is much more difficult.", 
        author: "Queen Elizabeth II", 
        options: shuffleArray(["Jacinda Ardern", "Justin Trudeau", "Queen Elizabeth II", "Joko Widodo"])
    },
    {
        quote: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.", 
        author: "Michelle Obama", 
        options: shuffleArray(["Michelle Obama", "Joe Biden", "Kamala Harris", "Cory Booker"])
    },
    {
        quote: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", 
        author: "Meghan Markle",
        options: shuffleArray(["Kate Middleton", "Marquis De Lafayette", "Prince Harry", "Meghan Markle"])
    },
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
        options: shuffleArray(["Nelson Mandela", "Benedict Arnold", "Malala Yousafzai", "Franz Ferdinand"])
    },
    {
        quote: "Let us make our future now, and let us make our dreams tomorrow's reality.",
        author: "Malala Yousafzai",
        options: shuffleArray(["Thomas Jefferson", "Mark Antony", "Malala Yousafzai", "JD Vance"])
    },
    {    
        quote: "We will fail when we fail to try.",
        author: "Rosa Parks",
        options: shuffleArray(["Rosa Parks", "Frederick Douglass", "Martin Luther King Jr.", "John Lewis"])
    },
    {
        quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.", 
        author: "Amanda Gorman",
        options: shuffleArray(["Alexander Hamilton", "Amanda Gorman", "James Madison", "Franklin D. Roosevelt"])
    }
];

function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

const quotes = politicians.quote;
const answers = politicians.options;
const gameContainer = document.getElementById('container');
const quoteElement = document.getElementById('quote');
const answerButtons = document.querySelectorAll('.answer-grid');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

let currentQuoteIndex = 0;

let score = 0;
let timeLeft = 30;
let timerInterval;

const startTimer = () => {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Timer: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

const endGame = () => {
    clearInterval(timerInterval);
    quoteElement.textContent = "Time's up!";
    answerButtons.innerHTML = '';
    quoteElement.textContent = `Final Score: ${score}`;
}

const resetTimer = () => {
    resetTimer();
    startTimer();
    const displayQuote = () => {
        const currentQuote = politicians[currentQuoteIndex];
        quoteElement.textContent = currentQuote.quote;
        answerButtons.innerHTML = '';    
        currentQuote.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    };
}    
    
const checkAnswer = (selectedAuthor) => {
    const currentQuote = politicians[currentQuoteIndex];
    if (selectedAuthor === currentQuote.author) {
        resultElement.textContent = 'Correct!';
        score += 10;
        scoreElement.textContent = `Score: ${score}`;
        timeLeft += 5;
        timerElement.textContent = `Time Left: ${timeLeft}`;
    } else {
        resultElement.textContent = 'Incorrect!, Try again';
        timeLeft -= 3;
        timerElement.textContent = `Time Left: ${timeLeft}`;
    }
    setTimeout(() => {
        resultElement.textContent = '';
        moveToNextQuote();
    }, 1500);
}    

displayQuote();

const moveToNextQuote = () => {
    currentQuoteIndex++;
    if (currentQuoteIndex >= politicians.length) {
        currentQuoteIndex = 0;
    }
    displayQuote(); 
}






