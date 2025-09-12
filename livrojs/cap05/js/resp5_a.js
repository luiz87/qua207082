const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)
    resp.innerText = `${fruta}`
    for(let i = 2; i <= num; i++){
        resp.innerText += ` * ${fruta}`
    }
})
