const tbody = document.querySelector("tbody")
let lsItem = []

const cores = {
    "Em Fila": "bg-secondary-subtle",
    "Iniciado": "bg-primary-subtle",
    "Concluído": "bg-danger-subtle"
}

function atualizarTabela() {
    tbody.innerHTML = ""
    let cont = 0
    for (i of lsItem) {
        tbody.innerHTML +=
            `<tr>
                <td>${i.item}</td>
                <td class="${cores[i.status]}">${i.status}</td>
            </tr>`
        cont++
    }
}

setInterval(atualizarPaneil, 1000)

function atualizarPaneil() {
    const hoje = new Date()
    document.querySelector("#dtHora").innerText =
        `${hoje.getDate().toString().padStart(2, 0)}/${(hoje.getMonth() + 1).toString().padStart(2, 0)}/${hoje.getFullYear()} - ${hoje.toLocaleTimeString()}`

    if (localStorage.getItem("lsItem") != null) {
        lsItem = JSON.parse(localStorage.getItem("lsItem"))
        atualizarTabela()
    }

}