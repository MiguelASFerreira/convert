const amount = document.getElementById("amount")

// Manipulando o inpunt amount para receber somente números
amount.addEventListener("input", (event) => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})