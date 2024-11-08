const quotes = [{
        quote: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
        writer: ` ― Maya Angelou`,
    },
    {
        quote: `If you tell the truth, you don't have to remember anything.`,
        writer: `― Mark Twain`,
    },
    {
        quote: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
        writer: `― J.K. Rowling`,
    },
    {
        quote: `In three words I can sum up everything I've learned about life: it goes on.`,
        writer: `― Robert Frost`,
    },
    {
        quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
        writer: `― Albert Einstein`,
    },

];


let usedQuotes = [];

document.getElementById('getQuote').onclick = function () {
    let randomQuote;

    do {
        randomQuote = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomQuote));

    usedQuotes.push(randomQuote);

    const singleQuote = `<p class="text-center pt-5 mt-0 mt-lg-5 ">
    <i class="fa-solid fa-quote-left px-2"></i>
    ${quotes[randomQuote].quote}
    <i class="fa-solid fa-quote-right px-2"></i>
    </p>
    <p class="text-end fw-light px-3">
    ${quotes[randomQuote].writer}
    </p>`;
    document.getElementById('card_content').innerHTML = singleQuote;

    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }
};