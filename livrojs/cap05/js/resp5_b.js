const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()    
    let chinchila = Number(frm.inChinchila.value)
    const ano = Number(frm.inAno.value)
    resp.innerText = ""
    for(let i = 1; i <= ano; i++){
        resp.innerText += `${i}º Ano: ${chinchila} Chinchilas\n`
        chinchila *= 3
    }
})
