const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    resp1.innerText = `Divisores do ${num}: 1`
    let soma = 1
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            resp1.innerText += ", " + i
            soma += i
        }
    }
    resp1.innerText += ` (Soma: ${soma})`
    if (num == soma) {
        resp2.innerText = `${num} É um Número Perfeito`
    } else {
        resp2.innerText = `${num} Não é um Número Perfeito`
    }
})