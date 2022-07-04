let apiQuotes = [];


// Get quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/API/QUOTES';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12])
    }catch(error) {

    }
}
getQuotes()
// console.log(3)