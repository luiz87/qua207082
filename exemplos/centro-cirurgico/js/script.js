const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []
let filtro = localStorage.getItem("filtro") 
filtro = filtro == null ? "" : filtro
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const status = frm.inStatus.value
    const index = frm.inIndex.value
    // incluir ou atualizar
    index == "" ? lsItem.push({nome,status}) : lsItem[index] = {nome,status}
    atualizarTabela()
})

function prepararEdicao(index){
    frm.inNome.value = lsItem[index].nome
    frm.inStatus.value = lsItem[index].status
    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if(index == ""){
        alert("Necessário selecionar 1 pacinte.")
        return
    }
    if(confirm("Deseja realmente apagar esse pacinte?") == false){
        return
    }
    lsItem.splice(index,1)
    atualizarTabela() 
    
})

const cores = {
    "Pré - Operatório":"bg-warning-subtle",
    "Transferído":"bg-primary-subtle",
    "Em Recuperação":"bg-success-subtle"
}

function atualizarTabela() {    
    limpar()
    localStorage.setItem("lsItem",JSON.stringify(lsItem))
    tbody.innerHTML = ""
    let cont = 0
    for(i of lsItem){
        if(filtro == "" || filtro.includes(i.status)){
            tbody.innerHTML += 
            `<tr onclick="prepararEdicao(${cont})" >
                <td>${i.nome}</td>
                <td class="${cores[i.status]}">${i.status}</td>
            </tr>`
        }
        cont++
    }    
}

function limpar(){
    frm.inNome.value = ""
    frm.inStatus.value = ""
    frm.inIndex.value = ""
    frm.btApagar.disabled = true
}

if(localStorage.getItem("lsItem") != null){
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}

const lsFiltro = frm.querySelectorAll('input[type="checkbox"]')
for(const bt of lsFiltro){
    bt.addEventListener("click", filtrar)
    if(filtro.includes(bt.value)){
        bt.checked = true
    }
}

function filtrar(){  
    filtro = ""  
    for(const bt of lsFiltro){
        filtro += bt.checked ? bt.value+"," : ""
    }
    atualizarTabela()
    localStorage.setItem("filtro",filtro)
}