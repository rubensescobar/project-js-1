// Cotação de moedas do dia.
const USD = 5.69
const EUR = 6.10
const GBP = 7.29

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")



// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {

const hasCharactersRegex = /\D+/g 
amount.value = amount.value.replace(hasCharactersRegex, "")
console.log(amount.value)

})

// Captando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
event.preventDefault()

switch (currency.value){
case "USD": 
convertCurrency(amount.value, USD, "US$")
  break
case "EUR":
  convertCurrency(amount.value, EUR, "€")
  break
case "GBP":
  convertCurrency(amount.value, GBP, "£")
  break
}
}

// Função para converter a moeda.
function convertCurrency(amount,price,symbol) {
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcula o total
    let total = amount * price

    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter")
    }

    // Formatar o valor total
    total = formatCurrencyBRL(total)

    // Exibe o resultado total
    result.textContent = `${total}`

    // Aplica a classe que exibe o footer.
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL (value) {
  // Converte para número para o uso de "toLocaleString" para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}