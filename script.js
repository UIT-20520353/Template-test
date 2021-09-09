document.addEventListener(
  "DOMContentLoaded",
  () => {
    let apiQuotes = [];

    function newQuote() {
      const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
      console.log(quote);
    }

    async function getQuotes() {
      const apiURL = "https://type.fit/api/quotes";
      try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
      } catch (error) {
        //   Catch error here
      }
    }

    getQuotes();
  },
  false
);
