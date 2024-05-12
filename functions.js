const allQuotes = [
  "*slurp noise*",
  "Rock On",
  "Charmander",
  "Transformer",
  "creature report creature report",
  "*crushes apple with hand and sniffs it* This smells bad"
  "Big Black Bloch"
  "My kids are very good at holding my dinner"
  "These chocolates are from lithuania I stole them from a teacher"
  "Yeah Yeah Yeah"
  "NICE"
  "Blip Blirp *fart noise*"
  "What What What"
  "Chill Chill"
  "What color are your eyes - I dont know I cant see them"
  "Hit the reset button"
  "ROADTRIP"
  "Who has this cow fetish"
  "Chrom Daddy"
  "They just let anyone signup for AP classes these days"
  "Silly Graph"
];


function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function searchQuotes() {
  var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  var searchResults = document.getElementById('searchResults');


  if (searchInput === '') {

    searchResults.innerHTML = '';
    return;
  }


  var matchingQuotes = allQuotes.filter(quote => quote.toLowerCase().includes(searchInput));


  searchResults.innerHTML = matchingQuotes.map(quote => '<p>' + quote + '</p>').join('');
}


document.getElementById('searchInput').addEventListener('input', searchQuotes);
