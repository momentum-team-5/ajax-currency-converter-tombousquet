const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

let baseUrl = "https://api.exchangeratesapi.io/latest?base="
let targetEl 
let currency
let option
let currencyType
let currencyRate
let conversionRate
let result
let finalAnswer

for (currency of currencies) {
  let targetEl = document.querySelector('.from')
  let option = document.createElement('option')
  option.innerText = currency
  option.value = currency
  targetEl.appendChild(option)
}

for (currency of currencies) {
  let targetEl = document.querySelector('.to')
  let option = document.createElement('option')
  option.innerText = currency
  option.value = currency
  targetEl.appendChild(option)
}


let firstSelect = document.querySelector('.from')
firstSelect.addEventListener('change' , function (event) {
  let currencyType = document.querySelector('.from')
  currencyType = baseUrl + event.target.value
  console.log(currencyType)
  fetch(currencyType)
    .then(response => response.json())
    .then( function (data) {
      console.log(data)
      currencyRate = data
    })
})

let secondSelect = document.querySelector('.to')
secondSelect.addEventListener('change' , function (event) {
  let currencyOut = document.querySelector('.to')
  let conversionRate = event.target.value
      currencyOut = currencyRate['rates'][conversionRate]
      console.log(currencyOut)
  let finalAnswer = document.querySelector('.result')
  let answer = document.createElement('p')
  finalAnswer.appendChild(answer)
  let result = document.createElement('p')
  let input = document.querySelector('input')
    result.innerText = input.value * currencyOut 
    console.log(result)
    answer.appendChild(result) 
    })

