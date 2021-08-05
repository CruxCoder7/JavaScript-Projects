const quotes = [
    {
        name: 'Stephen King',
        saying: 'Get busy living or get busy dying.'
    },

    {
        name: 'John F.Kennedy',
        saying: 'Those who dare to fail miserably can achieve greatly.'
    },

    {
        name: 'Abraham Lincoln',
        saying: 'I am a success today because I had a friend who believed in me and I didnt have the heart to let him down.'
    },

    {
        name: 'Leo Tolstoy',
        saying: 'If you want to be happy, be.'
    }
]


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");


quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].saying;
}




















