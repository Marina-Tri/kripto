const BTC_RUB = 3900027;
const BTC_USD = 65713;
const BTC_EUR = 60321.1;

const ETH_RUB = 337596.98;
const ETH_USD = 3715.81;
const ETH_EUR = 3411.97;

const USDT_RUB = 91.1;
const USDT_USD = 1;
const USDT_EUR = 0.9198;

const BNB_RUB = 37049.836;
const BNB_USD = 409.9;
const BNB_EUR = 376.6;

const select1 = document.querySelector("select");

select.onchange = function() {
    const choice = select1.value;
    const elementRUB = document.querySelector('[data-value="RUB"]');
    const elementUSD = document.querySelector('[data-value="USD"]');
    const elementEUR = document.querySelector('[data-value="EUR"]');
    if (choice == "0") {
        elementRUB.textContent = "..-..";
        elementUSD.textContent = "..-..";
        elementEUR.textContent = "..-..";
    }
    else if (choice == "BTC") {
        elementRUB.textContent = BTC_RUB.toFixed(1);
        elementUSD.textContent = BTC_USD.toFixed(1);
        elementEUR.textContent = BTC_EUR.toFixed(1);
    }
    else if (choice == "ETH") {
        elementRUB.textContent = ETH_RUB.toFixed(1);
        elementUSD.textContent = ETH_USD.toFixed(1);
        elementEUR.textContent = ETH_EUR.toFixed(1);
    }
    else if (choice == "USDT") {
        elementRUB.textContent = USDT_RUB.toFixed(1);
        elementUSD.textContent = USDT_USD.toFixed(1);
        elementEUR.textContent = USDT_EUR.toFixed(1);
    }
    else if (choice == "BNB") {
        elementRUB.textContent = BNB_RUB.toFixed(1);
        elementUSD.textContent = BNB_USD.toFixed(1);
        elementEUR.textContent = BNB_EUR.toFixed(1);
    }
}
