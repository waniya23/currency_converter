<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CURRENCY CONVERTER APP</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h3>CURRENCY CONVERTER</h3>
        <div class="boxes">
            <div class="left">
                <select id="fromCurrency" class="currency">
                    <option value="USD">Dollar</option>
                    <option value="PKR">PKR</option>
                    <option value="EURO">Euro</option>
                </select>
                <input type="number" id="inputAmount">
            </div>
            <div class="right">
                <select id="toCurrency" class="currency">
                    <option value="USD">Dollar</option>
                    <option value="PKR">PKR</option>
                    <option value="EURO">Euro</option>
                </select>
                <input type="number" id="resultAmount" disabled>
            </div>
        </div>
        <button class="button" id="calculateButton">Calculate</button>

        <div class="number-container">
            <div class="section">
                <h6>Prime Numbers upto given amount</h6>
                <ul id="prime-list"></ul>
            </div>
        </div>
        <div class="number-container">
            <div class="section">
                <h6>Even Numbers upto given amount</h6>
                <ul id="even-list"></ul>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const exchangeRates = {
                USD: 276.88,
                PKR: 1,
                EURO: 292.93
            };

            const fromCurrencySelector = document.getElementById('fromCurrency');
            const toCurrencySelector = document.getElementById('toCurrency');
            const inputAmount = document.getElementById('inputAmount');
            const resultAmount = document.getElementById('resultAmount');
            const calculateButton = document.getElementById('calculateButton');
            const primeList = document.getElementById('prime-list');
            const evenList = document.getElementById('even-list');

            calculateButton.addEventListener('click', calculateCurrency);

            function calculateCurrency() {
                const fromCurrency = fromCurrencySelector.value;
                const toCurrency = toCurrencySelector.value;
                const amount = parseFloat(inputAmount.value);

                if (!isNaN(amount)) {
                    const convertedAmount = amount * (1 / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
                    resultAmount.value = convertedAmount.toFixed(2);
                    displayPrimeAndEvenNumbers(amount);
                } else {
                    resultAmount.value = '';
                    primeList.innerHTML = '';
                    evenList.innerHTML = '';
                }
            }

            function displayPrimeAndEvenNumbers(limit) {
                primeList.innerHTML = 'Prime Numbers:';
                evenList.innerHTML = 'Even Numbers:';

                for (let i = 2; i <= limit; i++) {
                    if (isPrime(i)) {
                        const li = document.createElement('li');
                        li.textContent = i;
                        primeList.appendChild(li);
                    }

                    if (i % 2 === 0) {
                        const li = document.createElement('li');
                        li.textContent = i;
                        evenList.appendChild(li);
                    }
                }
            }

            function isPrime(num) {
                for (let i = 2; i < num; i++)
                    if (num % i === 0) return false;
                return num > 1;
            }
        });
    </script>
</body>
</html>
