/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote:
      "It’s only after we’ve lost everything that we’re free to do anything.",
    source: "Tyler Durden - Brad Pitt",
    citation: "Fight Club",
    year: 1999,
  },
  {
    quote:
      "A million dollars isn't cool. You know what's cool? A billion dollars.",
    source: "Sean Parker - Justin Timberlake",
    citation: "The Social Network",
    year: 2010,
  },
  {
    quote: "If you’re good at something, never do it for free.",
    source: "The Joker - Heath Ledger",
    citation: "The Dark Knight",
    year: 2008,
  },
  {
    quote:
      "There is no greater threat to the critics and cynics and fearmongers than those of us who are willing to fall because we have learned how to rise.",
    source: "Brené Brown",
    citation: "Rising Strong",
    year: 2015,
  },
  {
    quote:
      "It's the possibility of having a dream come true that makes life interesting.",
    source: "Paulo Coelho",
    citation: "The Alchemist",
    year: 1988,
  },
];

/***
 * `getRandomQuote` function
 ***/
const getRandomQuote = () => {
  // set up a variable to store a random number between 0 and the quotes length
  const randomNum = Math.floor(Math.random() * quotes.length);
  // console.log(randomNum);
  // returned a random quote from the quotes array using bracket notation.
  return quotes[randomNum];
};

/***
 * `printQuote` function
 ***/
const printQuote = () => {
  // create a variable to store a random quote
  const randomQuote = getRandomQuote();
  // console.log(randomQuote);
  // Also created another variable to store the html that we are going to return from this function
  let htmlStr = `<p class="quote"> ${randomQuote.quote} </p><p class="source"> ${randomQuote.source}`;
  // check to see if random quote has citation or year, if they exist its going to return truthy value.
  if (randomQuote.citation) {
    htmlStr += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    htmlStr += `<span class="year"> ${randomQuote.year} </span>`;
  }
  // here we finish the string bu adding the end p tag to html string
  htmlStr += "</p>";
  // get the quote-bo id to store html string using the innerHTML method
  return (document.getElementById("quote-box").innerHTML = htmlStr);
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
