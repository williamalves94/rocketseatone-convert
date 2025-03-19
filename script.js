//cotação das moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price}`;

    //calcula o total
    let total = amount * price;

    //formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "");
    //exibe o resultado total
    result.textContent = `${total} Reais`;

    //aplica a classe que exibe o resultado no footer
    footer.classList.add("show-result");
  } catch (error) {
    //remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result");
    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

//formata a moeda em Real Brasileiro
function formatCurrencyBRL(value) {
  //converte para número para utilizar o toLocaleString para formatar no padrão BRL.
  return Number(value).toLocaleString("pt-BR", {
    style: currency,
    currency: "BRL",
  });
}
