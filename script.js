document.addEventListener('DOMContentLoaded', function() {
  // Fetch data from the API
  fetch('https://api.coinbase.com/v2/currencies')
      .then(response => response.json())
      .then(data => {
          // Process the data and display it
          displayCurrencies(data.data);
      });

  // Event listener for the filter form
  document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      const filterValue = document.getElementById('filter-input').value.toLowerCase();
      filterCurrencies(filterValue);
      addToSearchedList(filterValue);
  });

  // Event listener for navigation
  document.getElementById('home').addEventListener('click', function(event) {
      event.preventDefault();
      alert('You clicked Home!');
  });

  document.getElementById('about').addEventListener('click', function(event) {
      event.preventDefault();
      alert('You clicked About!');
  });

  document.getElementById('contact').addEventListener('click', function(event) {
      event.preventDefault();
      alert('You clicked Contact!');
  });
});

function displayCurrencies(currencies) {
  const cryptoList = document.getElementById('crypto-list');
  cryptoList.innerHTML = ''; // Clear previous content
  currencies.forEach(currency => {
      const currencyItem = document.createElement('div');
      currencyItem.textContent = currency.name;
      currencyItem.style.display = 'none'; 
      currencyItem.setAttribute('class', 'currency-item'); 
      cryptoList.appendChild(currencyItem);
  });
}

function filterCurrencies(filterValue) {
  const currencies = document.querySelectorAll('.currency-item');
  currencies.forEach(currency => {
      const name = currency.textContent.toLowerCase();
      if (name.includes(filterValue)) {
          currency.style.display = 'block';
      } else {
          currency.style.display = 'none';
      }
  });
}

function addToSearchedList(countryName) {
  const searchedList = document.getElementById('searched-list');
  const listItem = document.createElement('li');
  listItem.textContent = countryName;
  listItem.setAttribute('class', 'searched-item');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
      listItem.remove();
  });
  listItem.appendChild(deleteButton);
  searchedList.appendChild(listItem);
}