// Sets of quots, authors, and options
const politicians = [
    {
        quote: "If I cannot do great things, I can do small things in a great way.",
        author: "Martin Luther King, Jr.",
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

function getQuotes() {
    console.log('Getting quotes...');
    const quotes = politicians.map(politician => politician.quote);
    console.log('Quotes:', quotes);
    return quotes;
};

function getOptions() {
  console.log('Getting options...');
  const options = politicians.map(politician => politician.options);
  console.log('Options:', options);
  return options;
};

function getAuthors() {
  const authors = politicians.map(politician => politician.author);
  return authors;
};
