const frm = document.querySelector("form")
const resp = document.querySelector("h3")
let contar = 0
frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    contar = contar + 1
    resp.innerText = contar
})