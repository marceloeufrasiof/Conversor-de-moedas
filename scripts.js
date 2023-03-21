const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')



const convertValue = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high 
    console.log(data)

    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "฿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputReais / bitcoin)
    }


}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currentImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "US$ Dólar americano"
        currentImg.src = "./Assets/Estados-Unidos.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currentImg.src = "./Assets/Euro.png"
    }

    if (select.value === '฿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currentImg.src = "./Assets/Bitcoin.png"
    }

    convertValue()
}


button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)