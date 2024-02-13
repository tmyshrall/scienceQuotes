const allQuotes = [
    "*slurp noise*",
    "Rock On",
    "Charmander",
    "Transformer",
    "creature report creature report",
    "*crushes apple with hand and sniffs it* This smells bad"
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
