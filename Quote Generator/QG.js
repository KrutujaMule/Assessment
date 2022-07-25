
const text=document.getElementById("quote");
const author=document.getElementById("author");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetching the data from api
    const response=await fetch(url);
    console.log(typeof response);

    //converting response to json and storing it in quotes array
    const allQuotes = await response.json();

    // Generating a random number between 0 and the length of the quotes array
    const count = Math.floor(Math.random()*allQuotes.length);

    //Storing the quote present at the randomly generated index
    const quote=allQuotes[count].text;

    //Storing the author of the respective quote
    const auth=allQuotes[count].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

}
getNewQuote();