const quotes = [
{
  quote : "To marry is to halve your rights and double your duties.",
  author : "Arthur Schopenhauer"
},
{  
  quote : "One arrow alone can be easily broken but many arrows are indestructible.",
  author : "Genghis Khan"
},
{
  quote : "Write injuries in dust, benefits in marble.",
  author : "Benjamin Franklin"
},
{
  quote : "If work were so pleasant, the rich would keep it for themselves.",
  author : "Mark Twain"
},
{
  quote : "Most of us can, ad we choose, make of the world either a palace or a prison.",
  author : "John Lubbock"
},
{
  quote : "Bushido is realized in the presence of death. This means choosing death whenever there is a choice between life and death. There is not other reasoning.",
  author : "Yamamoto Tsunetomo"
},
{
  quote : "Pale Death beats equally at the poor man's gate and at the palaces of kings.",
  author : "Horace"
},
{
  quote : "Nothing travels faster than the speed of light with the possible exception of bad news, which obeys its own special laws.",
  author : "Douglas Adams"
},
{
  quote : "You never know what life is like, until you have lived it.",
  author : "Marilyn Monroe"
},
{
  quote : "Common sense is the collection of prejudices acquired by age 18.",
  author : "Albert Einstein"
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length )];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;