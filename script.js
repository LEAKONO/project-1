document.getElementById('fetchCurrenciesButton').addEventListener('click', () => {
    const countryName = prompt('Enter the name of the country to fetch currencies for:');
    if (countryName) {
      fetchCurrenciesByCountry(countryName);
    }
  });
  
  function fetchCurrenciesByCountry(countryName) {
    const apiUrl = 'https://api.coinbase.com/v2/currencies';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const countryCurrencies = CurrenciesByCountry(data.data, countryName);
        displayCurrencies(countryCurrencies);
      })
      .catch(error => {
        console.error('Error fetching currencies:', error);
      });
  }
  
  function CurrenciesByCountry(currencies, countryName) {
    return currencies.filter(currency => {
      
      
      return currency.name.toLowerCase().includes(countryName.toLowerCase());
    });
  }
  
  function displayCurrencies(currencies) {
    const currenciesList = document.getElementById('currenciesList');
    currenciesList.innerHTML = '';
  
    currencies.forEach(currency => {
      const listItem = document.createElement('li');
      listItem.textContent = currency.name;
      currenciesList.appendChild(listItem);
    });
  }