let button = document.getElementById("button");
let input = document.getElementById("input");
let origin = document.getElementById("origin");
let destiny = document.getElementById("destiny");
let result = document.getElementById("result");

const rates = {
    dolar: 1,
    real: 5.8,
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
        conversionText = `1 Real brasileiro igual a ${rates.real} Dólar americano.`;
    } else if (originCurrency === 'real' && destinyCurrency === 'euro') {
        resultValue = value / (rates.real / rates.euro);
        conversionText = `1 Real brasileiro igual a ${rates.real / rates.euro} Euro.`;
    } else if (originCurrency === 'real' && destinyCurrency === 'libra') {
        resultValue = value / (rates.real / rates.libra);
        conversionText = `1 Real brasileiro igual a ${rates.real / rates.libra} Libra.`;

    // Dólar para outras moedas
    } else if (originCurrency === 'dolar' && destinyCurrency === 'real') {
        resultValue = value * rates.real;
        conversionText = `1 Dólar americano igual a ${1 / rates.real} Real brasileiro.`;
    } else if (originCurrency === 'dolar' && destinyCurrency === 'euro') {
        resultValue = value * rates.euro;
        conversionText = `1 Dólar americano igual a ${1 / rates.euro} Euro.`;
    } else if (originCurrency === 'dolar' && destinyCurrency === 'libra') {
        resultValue = value * rates.libra;
        conversionText = `1 Dólar americano igual a ${1 / rates.libra} Libra.`;

    // Euro para outras moedas
    } else if (originCurrency === 'euro' && destinyCurrency === 'real') {
        resultValue = value * (rates.real / rates.euro);
        conversionText = `1 Euro igual a ${rates.real / rates.euro} Real brasileiro.`;
    } else if (originCurrency === 'euro' && destinyCurrency === 'dolar') {
        resultValue = value / rates.euro;
        conversionText = `1 Euro igual a ${rates.euro} Dólar americano.`;
    } else if (originCurrency === 'euro' && destinyCurrency === 'libra') {
        resultValue = value * (rates.libra / rates.euro);
        conversionText = `1 Euro igual a ${rates.libra / rates.euro} Libra.`;

    // Libra para outras moedas
    } else if (originCurrency === 'libra' && destinyCurrency === 'real') {
        resultValue = value * (rates.real / rates.libra);
        conversionText = `1 Libra igual a ${rates.real / rates.libra} Real brasileiro.`;
    } else if (originCurrency === 'libra' && destinyCurrency === 'dolar') {
        resultValue = value / rates.libra;
        conversionText = `1 Libra igual a ${rates.libra} Dólar americano.`;
    } else if (originCurrency === 'libra' && destinyCurrency === 'euro') {
        resultValue = value * (rates.euro / rates.libra);
        conversionText = `1 Libra igual a ${rates.euro / rates.libra} Euro.`;

    // Moeda igual
    } else if (originCurrency === destinyCurrency) {
        resultValue = value;
        conversionText = `As moedas são iguais.`;
    }

    // Arredondando para 2 casas decimais
    resultValue = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(resultValue);

    // Exibindo o resultado com quebras de linha
    result.innerHTML = `
        <strong>${value} ${origin.options[origin.selectedIndex].text}</strong> é igual a <strong>${resultValue} ${destiny.options[destiny.selectedIndex].text}</strong>.<br>
        <em>${conversionText}</em>
    `;
}
