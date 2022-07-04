const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

// pick a random index
function randomQuote(array) {
    return Math.floor(Math.random() * array.length)
}

//Show new Quote
function newQuote(array) {
    const quote = array[randomQuote(array)]
    console.log(quote)
    // Check if author is null and changes it to unknown
    if(!quote.author) {
        authorText.textContent = "Unknown";
    }else {
        authorText.textContent = quote.author;
    }
    // Check quotes length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
}

// Get quotes from API
async function fetchQuotes() {
    const apiUrl = 'https://type.fit/API/QUOTES';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote(apiQuotes)
    }catch (error) {
        console.log(error)
    }
}

fetchQuotes()
// console.log(apiQuotes)