let button = document.getElementById("button");
let input = document.getElementById("input");
let origin = document.getElementById("origin");
let destiny = document.getElementById("destiny");
let result = document.getElementById("result");

const rates = {
    dolar: 1,
    real: 5.77,
    euro: 0.93,
    libra: 0.75
};

button.addEventListener("click", converter);

function converter() {
    let originCurrency = origin.value;
    let destinyCurrency = destiny.value;
    let value = parseFloat(input.value);

    if (isNaN(value) || value <= 0) {
        result.innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    let resultValue;
    let conversionText;

    // Real para outras moedas
    if (originCurrency === 'real' && destinyCurrency === 'dolar') {
        resultValue = value / rates.real;
    } else if (originCurrency === 'real' && destinyCurrency === 'euro') {
        resultValue = value / (rates.real / rates.euro);
    } else if (originCurrency === 'real' && destinyCurrency === 'libra') {
        resultValue = value / (rates.real / rates.libra);
    // Dólar para outras moedas
    } else if (originCurrency === 'dolar' && destinyCurrency === 'real') {
        resultValue = value * rates.real;
    } else if (originCurrency === 'dolar' && destinyCurrency === 'euro') {
        resultValue = value * rates.euro;
    } else if (originCurrency === 'dolar' && destinyCurrency === 'libra') {
        resultValue = value * rates.libra;
    // Euro para outras moedas
    } else if (originCurrency === 'euro' && destinyCurrency === 'real') {
        resultValue = value * (rates.real / rates.euro);
    } else if (originCurrency === 'euro' && destinyCurrency === 'dolar') {
        resultValue = value / rates.euro;
    } else if (originCurrency === 'euro' && destinyCurrency === 'libra') {
        resultValue = value * (rates.libra / rates.euro);
    // Libra para outras moedas
    } else if (originCurrency === 'libra' && destinyCurrency === 'real') {
        resultValue = value * (rates.real / rates.libra);
    } else if (originCurrency === 'libra' && destinyCurrency === 'dolar') {
        resultValue = value / rates.libra;
    } else if (originCurrency === 'libra' && destinyCurrency === 'euro') {
        resultValue = value * (rates.euro / rates.libra);
    // Moeda igual
    } else if (originCurrency === destinyCurrency) {
        resultValue = value;
    }

    resultValue = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(resultValue);

    result.innerHTML = `
        <strong>${value} ${origin.options[origin.selectedIndex].text}</strong> é igual a <strong>${resultValue} ${destiny.options[destiny.selectedIndex].text}</strong>.
    `;
}
