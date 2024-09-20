const qoutesByCategory = {
    politiciansAndActivists: [
        {
            qoute: "If I cannot do great things, I can do small things in a great way.",
            author: "Martin Luther King, Jr.",
            options: shuffleArray(["Queen Elizabeth II", "Winston Churchill", "Eleanor Roosevelt", "Martin Luther King, Jr."])
        },
        {
            qoute: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
            author: "Queen Elizabeth II",
            options: shuffleArray(["Mikhail Gorbachev", "Theodore Roosevelt", "Queen Elizabeth II", "Michelle Obama"])
        },
        {
            qoute: "If what you have done yesterday still looks big to you, you haven't done much today.",
            author: "Mikhail Gorbachev",
            options: shuffleArray(["Bill Clinton", "Mikhail Gorbachev", "Alexander the Great", "Ronald Reagan"])
        },
        {
            qoute: "Never allow a person to tell you no who doesn’t have the power to say yes.",
            author: "Eleanor Roosevelt",
            options: shuffleArray(["Eleanor Roosevelt", "Winston Churchill", "Nelson Mandela", "Ronald Reagan"])
        },
        {
            qoute: "Believe you can and you're halfway there.", 
            author: "Theodore Roosevelt",
            options: shuffleArray(["Barack Obama", "Theodore Roosevelt", "Richard Nixon", "Julius Caesar"])
        },
        {
            qoute: "Attitude is the 'little' thing that makes a big difference.", 
            author: "Winston Churchill", 
            options: shuffleArray(["Vladimir Putin", "Xi Jinping", "Winston Churchill", "Emmanuel Macron"])
        },
        {
            qoute: "It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.", 
            author: "Madeleine Albright",
            options: shuffleArray(["Abraham Lincoln", "John F. Kennedy", "Woodrow Wilson", "Madeleine Albright"])
        },
        {
            qoute: "There is nothing impossible to they who will try.",
            author: "Alexander the Great",
            options: shuffleArray(["Alexander the Great", "Vladimir Putin", "Simon Bolivar", "John Lewis"])
        },
        {
            qoute: "Success is not final, failure is not fatal: it is the Courage to continue that counts.",
            author: "Winston Churchill",
            options: shuffleArray(["Rasputin", "Winston churchill", "Napoleon Bonaparte", "John Maxwell"])
        },
        {
            qoute: "You must do the things you think you cannot do.",
            author: "Eleanor Roosevelt", 
            options: shuffleArray(["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Eleanor Roosevelt"])
        },
        {
            qoute: "We can't help everyone, but everyone can help someone.",
            author: "Ronald Reagan", 
            options: shuffleArray(["Margaret Thatcher", "Ronald Reagan", "Lech Walesa", "Pope John Paul II"])
        },
        {
            qoute: "It has always been easy to hate and destroy. To build and to cherish is much more difficult.", 
            author: "Queen Elizabeth II", 
            options: shuffleArray(["Jacinda Ardern", "Justin Trudeau", "Queen Elizabeth II", "Joko Widodo"])
        },
        {
            qoute: "One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals.", 
            author: "Michelle Obama", 
            options: shuffleArray(["Michelle Obama", "Joe Biden", "Kamala Harris", "Cory Booker"])
        },
        {
            qoute: "You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", 
            author: "Meghan Markle",
            options: shuffleArray(["Kate Middleton", "Marquis De Lafayette", "Prince Harry", "Meghan Markle"])
        },
        {
            qoute: "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela",
            options: shuffleArray(["Nelson Mandela", "Benedict Arnold", "Malala Yousafzai", "Franz Ferdinand"])
        },
        {
            qoute: "Let us make our future now, and let us make our dreams tomorrow's reality.",
            author: "Malala Yousafzai",
            options: shuffleArray(["Thomas Jefferson", "Mark Antony", "Malala Yousafzai", "JD Vance"])
        },
        {    
            qoute: "We will fail when we fail to try.",
            author: "Rosa Parks",
            options: shuffleArray(["Rosa Parks", "Frederick Douglass", "Martin Luther King Jr.", "John Lewis"])
        },
        {
            qoute: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.", 
            author: "Amanda Gorman",
            options: shuffleArray(["Alexander Hamilton", "Amanda Gorman", "James Madison", "Franklin D. Roosevelt"])
        }
    ],
    famousPeopleOfEntertainment: [
        {
            qoute: "The bad news is time flies. The good news is you're the pilot.", 
            author: "Michael Altshuler",
            options: shuffleArray(["Michael Altshuler", "Jennifer Lopez", "Loretta Lynn", "Audrey Hepburn"])
        },
        {
            qoute: "You get what you give.", 
            author: "Jennifer Lopez",
            options: shuffleArray(["Jennifer Lopez", "Loretta Lynn", "Audrey Hepburn", "Michael Altshuler"])
        },
        {
            qoute: "In the long run, you make your own luck — good, bad, or indifferent.", 
            author: "Loretta Lynn",
            options: shuffleArray(["Loretta Lynn", "Audrey Hepburn", "Michael Altshuler", "Jennifer Lopez"])
        },
        {
            qoute: "Nothing is impossible. The word itself says 'I'm possible!'", 
            author: "Audrey Hepburn",
            options: shuffleArray(["Audrey Hepburn", "Michael Altshuler", "Loretta Lynn", "Jennifer Lopez"])
        },
        {
            qoute: "When you have a dream, you've got to grab it and never let go.", 
            author: "Carol Burnett",
            options: shuffleArray(["Carol Burnett", "Walt Disney", "Viola Davis", "Audrey Hepburn"])
        },
        {
            qoute: "All our dreams can come true — if we have the courage to pursue them.", 
            author: "Walt Disney",
            options: shuffleArray(["Walt Disney", "Viola Davis", "Carol Burnett", "Audrey Hepburn"])
        },
        {
            qoute: "All dreams are within reach. All you have to do is keep moving towards them.", 
            author: "Viola Davis",
            options: shuffleArray(["Viola Davis", "Carol Burnett", "Walt Disney", "Audrey Hepburn"])
        },
        {
            qoute: "Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a new way to stand.", 
            author: "Oprah Winfrey", 
            options: shuffleArray(["Oprah Winfrey", "Shinzo Abe", "Cicely Tyson", "Sylvester Stallone"])
        },
        {
            qoute: "It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
            author: "Sylvester Stallone",
            options: shuffleArray(["Sylvester Stallone", "Oprah Winfrey", "Shinzo Abe", "Cicely Tyson"])
        },
        {
            qoute: "Our predecessors overcame many troubles and much suffering, but each time got back up stronger than before.",
            author: "Shinzo Abe", 
            options: shuffleArray(["Shinzo Abe", "Cicely Tyson", "Sylvester Stallone", "Oprah Winfrey"])
        },
        {
            qoute: "I have learned not to allow rejection to move me.",
            author: "Cicely Tyson", 
            options: shuffleArray(["Cicely Tyson", "Ella Fitzgerald", "Willie Nelson", "Deep Roy"])
        },
        {
            qoute: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.", 
            author: "Ella Fitzgerald", 
            options: shuffleArray(["Ella Fitzgerald", "Willie Nelson", "Deep Roy", "Cicely Tyson"])
        },
        {
            qoute: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
            author: "Willie Nelson", 
            options: shuffleArray(["Willie Nelson", "Deep Roy", "Cicely Tyson", "Ella Fitzgerald"])
        },
        {
            qoute: "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
            author: "Deep Roy", 
            options: shuffleArray(["Deep Roy", "Taraji P. Henson", "Olivia Newton-John", "Willie Nelson"])
        },
        {
            qoute: "I don't harp on the negative because if you do, then there's no progression. There's no forward movement. You got to always look on the bright side of things, and we are in control. Like, you have control over the choices you make." ,
            author: "Taraji P. Henson", 
            options: shuffleArray(["Taraji P. Henson", "Olivia Newton-John", "Willie Nelson", "Deep Roy"])
        },
        {
            qoute: "Once you face your fear, nothing is ever as hard as you think.",
            author: "Olivia Newton-John", 
            options: shuffleArray(["Olivia Newton-John", "Hazrat Inayat Khan", "Grace Kelly", "Deep Roy"])
        },
        {
            qoute: "Happiness often sneaks in through a door you didn't know you left open.",
            author: "John Barrymore",
            options: shuffleArray(["John Barrymore", "Hazrat Inayat Khan", "Grace Kelly", "Olivia Newton-John"])
        },
        {
            qoute: "Some people look for a beautiful place. Others make a place beautiful.",
            author: "Hazrat Inayat Khan", 
            options: shuffleArray(["Hazrat Inayat Khan", "Grace Kelly", "John Barrymore", "Olivia Newton-John"])
        },
        {
            qoute: "For one to have complete satisfaction from flowers, you must have time to spend with them." ,
            author: "Grace Kelly", 
            options: shuffleArray(["Grace Kelly", "Bob Dylan", "Frank Sinatra", "Hazrat Inayat Khan"])
        },
        {
            qoute: "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
            author: "Bob Dylan", 
            options: shuffleArray(["Bob Dylan", "Frank Sinatra", "Lupita Nyong'o", "Grace Kelly"])
        },
        {
            qoute: "The best revenge is massive success." ,
            author: "Frank Sinatra", 
            options: shuffleArray(["Frank Sinatra", "Lupita Nyong'o", "Ella Fitzgerald", "Bob Dylan"])
        },
        {
            qoute: "You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you." ,
            author: "Lupita Nyong'o", 
            options: shuffleArray(["Lupita Nyong'o", "Ella Fitzgerald", "Oprah Winfrey", "Frank Sinatra"])
        },
        {
            qoute: "It isn't where you came from. It's where you're going that counts.",
            author: "Ella Fitzgerald", 
            options: shuffleArray(["Ella Fitzgerald", "Oprah Winfrey", "Lupita Nyong'o", "Frank Sinatra"])
        },
        {
            qoute: "You define your own life. Don’t let other people write your script.",
            author: "Oprah Winfrey", 
            options: shuffleArray(["Oprah Winfrey", "Lily Tomlin", "Nicole Kidman", "Ella Fitzgerald"])
        },
        {
            qoute: "I always wanted to be somebody, but now I realize I should have been more specific.",
            author: "Lily Tomlin", 
            options: shuffleArray(["Lily Tomlin", "Nicole Kidman", "Demi Lovato", "Oprah Winfrey"])
        },
        {
            qoute: "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
            author: "Nicole Kidman", 
            options: shuffleArray(["Nicole Kidman", "Demi Lovato", "Naomi Judd", "Lily Tomlin"])
        },
        {
            qoute: "No matter what you're going through, there's a light at the end of the tunnel.",
            author: "Demi Lovato", 
            options: shuffleArray(["Demi Lovato", "Naomi Judd", "Gabrielle Union", "Nicole Kidman"])
        },
        {
            qoute: "A dead-end street is a good place to turn around.",
            author: "Naomi Judd", 
            options: shuffleArray(["Naomi Judd", "Gabrielle Union", "Anne Heche", "Demi Lovato"])
        },
        {
            qoute: "Don't save your best for when you think the material calls for it. Always bring your full potential to every take, and be on top of your job, or they will replace you.",
            author: "Gabrielle Union", 
            options: shuffleArray(["Gabrielle Union", "Anne Heche", "Amy Poehler", "Naomi Judd"])
        },
        {
            qoute: "We do not fall in love with the package of the person; we fall in love with the inside of a person." ,
            author: "Anne Heche", 
            options: shuffleArray(["Anne Heche", "Amy Poehler", "James Caan", "Gabrielle Union"])
        },
        {
            qoute: "Limit your 'always' and your 'nevers.'",
            author: "Amy Poehler",
            options: shuffleArray(["Amy Poehler", "James Caan", "Jennifer Lopez", "Anne Heche"])
        },
        {
            qoute: "My least favorite phrase in the English language is 'I don't care.'",
            author: "James Caan",
            options: shuffleArray(["James Caan", "Jennifer Lopez", "Audrey Hepburn", "Amy Poehler"])
        }
    ],
    writers: [
        {
            qoute: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
            author: "Jimmy Dean",
            options: shuffleArray(["Jimmy Dean", "André Leon Talley", "Helen Keller", "C.S. Lewis"])
        },
        {
            qoute: "I scorched the earth with my talent and I let my light shine.", 
            author: "André Leon Talley",
            options: shuffleArray(["André Leon Talley", "Helen Keller", "C.S. Lewis", "Jimmy Dean"])
        },
        {
            qoute: "Never bend your head. Always hold it high. Look the world straight in the eye.", 
            author: "Helen Keller",
            options: shuffleArray(["Helen Keller", "C.S. Lewis", "Jimmy Dean", "André Leon Talley"])
        },
        {
            qoute: "You are never too old to set another goal or to dream a new dream.",
            author: "C.S. Lewis",
            options: shuffleArray(["C.S. Lewis", "Jimmy Dean", "André Leon Talley", "Helen Keller"])
        },
        {
            qoute: "Go confidently in the direction of your dreams. Live the life you have imagined.",
            author: "Henry David Thoreau",
            options: shuffleArray(["Henry David Thoreau", "Norman Vincent Peale", "Herman Melville", "C.S. Lewis"])
        },
        {
            qoute: "Shoot for the moon. Even if you miss, you'll land among the stars.",
            author: "Norman Vincent Peale",
            options: shuffleArray(["Norman Vincent Peale", "Herman Melville", "C.S. Lewis", "Henry David Thoreau"])
        },
        {
            qoute: "I know not all that may be coming, but be it what it will, I'll go to it laughing.",
            author: "Herman Melville",
            options: shuffleArray(["Herman Melville", "C.S. Lewis", "Henry David Thoreau", "Norman Vincent Peale"])
        },
        {
            qoute: "Where there's hope, there's life. It fills us with fresh courage and makes us strong again.",
            author: "Anne Frank",
            options: shuffleArray(["Anne Frank", "A.A. Milne", "Charles Dickens", "Herman Melville"])
        },
        {
            qoute: "You’re braver than you believe, stronger than you seem, and smarter than you think.", 
            author: "A.A. Milne",
            options: shuffleArray(["A.A. Milne", "Charles Dickens", "Herman Melville", "Anne Frank"])
        },
        {
            qoute: "The Sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
            author: "Charles Dickens",
            options: shuffleArray(["Charles Dickens", "Elaine Welteroth", "Herman Melville", "A.A. Milne"])
        },
        {
            qoute: "When your dreams are bigger than the places you find yourself in, sometimes you need to seek out your own reminders that there is more. And there is always more waiting for you on the other side of fear.",
            author: "Elaine Welteroth",
            options: shuffleArray(["Elaine Welteroth", "Herman Melville", "A.A. Milne", "Charles Dickens"])
        },
        {
            qoute: "Stay close to anything that makes you glad you are alive.",
            author: "Hafez",
            options: shuffleArray(["Hafez", "Truman Capote", "Maya Angelou", "Elaine Welteroth"])
        },
        {
            qoute: "Failure is the condiment that gives success its flavor.",
            author: "Truman Capote",
            options: shuffleArray(["Truman Capote", "Maya Angelou", "Elaine Welteroth", "Hafez"])
        },
        {
            qoute: "Try to be a rainbow in someone else's cloud.",
            author: "Maya Angelou",
            options: shuffleArray(["Maya Angelou", "Booker T. Washington", "Elaine Welteroth", "Truman Capote"])
        },
        {
            qoute: "If you want to lift yourself up, lift up someone else.",
            author: "Booker T. Washington",
            options: shuffleArray(["Booker T. Washington", "Lewis Caroll", "Maya Angelou", "Elaine Welteroth"])
        },
        {
            qoute: "It’s no use going back to yesterday because I was a different person then.", 
            author: "Lewis Caroll",
            options: shuffleArray(["Lewis Caroll", "George Eliot", "Maya Angelou", "Booker T. Washington"])
        },
        {
            qoute: "It is never too late to be what you might have been.",
            author: "George Eliot",
            options: shuffleArray(["George Eliot", "Zig Ziglar", "Maya Angelou", "Lewis Caroll"])
        },
        {
            qoute: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            author: "Zig Ziglar",
            options: shuffleArray(["Zig Ziglar", "Mandy Hale", "Maya Angelou", "George Eliot"])
        },
        {
            qoute: "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
            author: "Mandy Hale",
            options: shuffleArray(["Mandy Hale", "Joseph Campbell", "Maya Angelou", "Zig Ziglar"])
        },
        {
            qoute: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
            author: "Joseph Campbell",
            options: shuffleArray(["Joseph Campbell", "Walt Whitman", "Maya Angelou", "Mandy Hale"])
        },
        {
            qoute: "Keep your face always toward the sunshine — and shadows will fall behind you.",
            author: "Walt Whitman",
            options: shuffleArray(["Walt Whitman", "E.E. Cummings", "Maya Angelou", "Joseph Campbell"])
        },
        {
            qoute: "The most wasted of days is one without laughter.",
            author: "E.E. Cummings",
            options: shuffleArray(["E.E. Cummings", "Dr. Seuss", "Maya Angelou", "Walt Whitman"])
        },
        {
            qoute: "My mission in life is not merely to survive, but to thrive.",
            author: "Maya Angelou",
            options: shuffleArray(["Maya Angelou", "Dr. Seuss", "Walt Whitman", "E.E. Cummings"])
        },
        {
            qoute: "Sometimes you will never know the value of a moment, until it becomes a memory.",
            author: "Dr. Seuss",
            options: shuffleArray(["Dr. Seuss", "Maya Angelou", "Walt Whitman", "E.E. Cummings"])
        },
    ],
    philosophers: [
        {
            qoute: "Act as if what you do makes a difference. It does.",
            author: "William James",
            options: shuffleArray(["William James", "Aristotle", "Friedrich Nietzsche", "John Stuart Mill"])
        },
        {
            qoute: "It is during our darkest moments that we must focus to see the light.",
            author: "Aristotle",
            options: shuffleArray(["Aristotle", "Friedrich Nietzsche", "John Stuart Mill", "William James"])
        },
        {
            qoute: "Happiness is the feeling that power increases — that resistance is being overcome.",
            author: "Friedrich Nietzsche",
            options: shuffleArray(["Friedrich Nietzsche", "John Stuart Mill", "William James", "Aristotle"])
        },
        {
            qoute: "I have learned to seek my happiness by limiting my desires, rather than in attempting to satisfy them.",
            author: "John Stuart Mill",
            options: shuffleArray(["John Stuart Mill", "William James", "Aristotle", "Friedrich Nietzsche"])
        },
        {
            qoute: "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
            author: "Aristotle",
            options: shuffleArray(["Aristotle", "William James", "John Stuart Mill", "Friedrich Nietzsche"])
        },
        {
            qoute: "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
            author: "William James",
            options: shuffleArray(["William James", "Immanuel Kant", "Socrates", "Aristotle"])
        },
        {
            qoute: "Rules for happiness: something to do, someone to love, something to hope for.",
            author: "Immanuel Kant",
            options: shuffleArray(["Immanuel Kant", "Socrates", "Aristotle", "William James"])
        },
        {
            qoute: "The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.",
            author: "Socrates",
            options: shuffleArray(["Socrates", "Aristotle", "William James", "Immanuel Kant"])
        },
        {
            qoute: "Happiness is like a butterfly; the more you chase it, the more it will elude you, but if you turn your attention to other things, it will come and sit softly on your shoulder.",
            author: "Henry David Thoreau",
            options: shuffleArray(["Henry David Thoreau", "John-Jacques Rousseau", "William James", "Socrates"])
        },
        {
            qoute: "Why should we build our happiness on the opinions of others, when we can find it in our own hearts?",
            author: "John-Jacques Rousseau",
            options: shuffleArray(["John-Jacques Rousseau", "William James", "Socrates", "Henry David Thoreau"])
        },
        {
            qoute: "Action may not always bring happiness, but there is no happiness without action.",
            author: "William James",
            options: shuffleArray(["William James", "Ralph Waldo Emerson", "Nicolas Chamfort", "John-Jacques Rousseau"])
        },
        {
            qoute: "For every minute you are angry you lose sixty seconds of happiness.",
            author: "Ralph Waldo Emerson",
            options: shuffleArray(["Ralph Waldo Emerson", "Nicolas Chamfort", "John-Jacques Rousseau", "William James"])
        },
        {
            qoute: "A day without laughter is a day wasted.",
            author: "Nicolas Chamfort",
            options: shuffleArray(["Nicolas Chamfort", "Confucius", "Ralph Waldo Emerson", "William James"])
        },
        {
            qoute: "If you hate a person, then you’re defeated by them.",
            author: "Confucius",
            options: shuffleArray(["Confucius", "Aristotle", "Ralph Waldo Emerson", "Nicolas Chamfort"])
        },
        {
            qoute: "Happiness depends upon ourselves.",
            author: "Aristotle",
            options: shuffleArray(["Aristotle", "Confucius", "Ralph Waldo Emerson", "Nicolas Chamfort"])
        },
        {
            qoute: "The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not.",
            author: "Seneca",
            options: shuffleArray(["Seneca", "Alan Watts", "Confucius", "Aristotle"])
        },
        {
            qoute: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
            author: "Alan Watts",
            options: shuffleArray(["Alan Watts", "Jonathan Swift", "Confucius", "Seneca"])
        },
        {
            qoute: "May you live every day of your life.",
            author: "Jonathan Swift",
            options: shuffleArray(["Jonathan Swift", "Soren Kierkegaard", "Alan Watts", "Confucius"])
        },
        {
            qoute: "Life is not a problem to be solved but a reality to be experienced.",
            author: "Soren Kierkegaard",
            options: shuffleArray(["Soren Kierkegaard", "Eckhart Tolle", "Jonathan Swift", "Alan Watts"])
        },
        {
            qoute: "The past has no power over the present moment.",
            author: "Eckhart Tolle",
            options: shuffleArray(["Eckhart Tolle", "Confucius", "Soren Kierkegaard", "Jonathan Swift"])
        },
        {
            qoute: "It does not matter how slowly you go, as long as you do not stop.",
            author: "Confucius",
            options: shuffleArray(["Confucius", "Oscar Wilde", "Eckhart Tolle", "Soren Kierkegaard"])
        },
        {
            qoute: "To live is the rarest thing in the world. Most people exist, that is all.",
            author: "Oscar Wilde",
            options: shuffleArray(["Oscar Wilde", "George Bernard Shaw", "Confucius", "Eckhart Tolle"])
        },
        {
            qoute: "Life isn't about finding yourself. Life is about creating yourself.",
            author: "George Bernard Shaw",
            options: shuffleArray(["George Bernard Shaw", "William James", "Oscar Wilde", "Confucius"])
        },
        {
            qoute: "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.",
            author: "William James",
            options: shuffleArray(["William James", "Ludwig Wittgenstein", "George Bernard Shaw", "Oscar Wilde"])
        },
        {
            qoute: "If we take eternity to mean not infinite temporal duration but timelessness, then eternal life belongs to those who live in the present.",
            author: "Ludwig Wittgenstein",
            options: shuffleArray(["Ludwig Wittgenstein", "Socrates", "William James", "George Bernard Shaw"])
        },
        {
            qoute: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.",
            author: "Socrates",
            options: shuffleArray(["Socrates", "Elie Wiesel", "Ludwig Wittgenstein", "William James"])
        },
        {
            qoute: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
            author: "Elie Wiesel",
            options: shuffleArray(["Elie Wiesel", "Alan Watts", "Socrates", "Ludwig Wittgenstein"])
        },
        {
            qoute: "No valid plans for the future can be made can be made by those who have no capacity for living now.",
            author: "Alan Watts",
            options: shuffleArray(["Alan Watts", "Confucius", "Elie Wiesel", "Socrates"])
        },
        {
            qoute: "Never form a friendship with a man who is not better than you.",
            author: "Confucius",
            options: shuffleArray(["Confucius", "Aristotle", "Elie Wiesel", "Socrates"])
        },
    ],
    


























}

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

let qoutes = qoutesByCategory.famousPeopleOfEntertainment[0].options[0];
console.log(qoutes);
