const button = document.getElementById(`convert-button`)
const select = document.getElementById(`currency-select`)

const dolar = 5.35
const euro = 5.70
const bitcoin = 368781.12


const convertValues = () => {
    const inputReais = document.getElementById(`input-real`).value
    const realValueText = document.getElementById(`real-value-text`)
    const dolarValueText = document.getElementById(`dolar-value-text`)

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if(select.value === `US$ Dólar americano`){
    dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar);}

    if(select.value === `€ Euro`){
    dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
        { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro);}

    if(select.value === `Bitcoin`){
        dolarValueText.innerHTML = (inputReais / bitcoin).toFixed(5)
    }
    
}


changeCurrency = () => {
    const typeTextCurrency = document.getElementById(`currency-type-text`)
    const currencyFlag = document.getElementById(`currency-flag`)

    if (select.value === `US$ Dólar americano`) {
        typeTextCurrency.innerHTML = `Dolár americano`
        currencyFlag.src = `./assets/USA bandeira.png`
    }

    if (select.value === `€ Euro`) {
        typeTextCurrency.innerHTML = `Euro`
        currencyFlag.src = `assets/bandeira euro.png`
    }

    if (select.value === `Bitcoin`) {
        typeTextCurrency.innerHTML = `Bitcoin`
        currencyFlag.src = `assets/bandeira bitcoin.png`
    }

    convertValues()
}




select.addEventListener(`change`, changeCurrency)
button.addEventListener(`click`, convertValues)




