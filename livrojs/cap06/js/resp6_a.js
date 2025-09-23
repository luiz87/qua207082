const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []
clubes[0] = "Flamengo"
clubes[1] = "Fluminense"
clubes[2] = "Botafogo"
clubes[3] = "Vasco"
clubes[4] = "Santos"
clubes[5] = "São Paulo"
clubes[6] = "Grêmio"
clubes[7] = "Internacional"

frm.addEventListener("submit",(e) => {
    e.preventDefault()
    const clube = frm.inClube.value
    clubes.push(clube)
    frm.btListar.dispatchEvent(new Event("click"))
    frm.inClube.value = ""
})

frm.btListar.addEventListener("click", () => {
    if(clubes.length == 0){
        alert("Lista em branco")
        return
    }
    resp.innerText = ""
    for (const clube of clubes) {
        resp.innerText += `${clube}\n`
    }
})

frm.btListar.dispatchEvent(new Event("click"))

frm.btTabela.addEventListener("click", () => {
    if(clubes.length%2 == 1){
        alert("Deve ser uma quantidade par de clubes")
        return
    }
    resp.innerText = ""
    for (let i = 0; i < clubes.length/2; i++) {
        resp.innerText += `${clubes[i]} x ${clubes[clubes.length-i-1]}\n`
    }
})