const inputNome = document.querySelector('#name')
const inputNumero = document.querySelector('#number')
const buttonAdicionar = document.querySelector('#adicionar')
const tbody = document.querySelector('tbody')
const inputQtde = document.querySelector('#qtde')
const buttonSortear = document.querySelector('#sortear')

const listaPalpites = JSON.parse(localStorage.getItem('lista-palpites')) || []

function renderizarHtml() {
    tbody.innerHTML = ''
    
    listaPalpites.map(obj => {
        let tdNome = document.createElement('td')
        tdNome.innerText = obj.nome

        let tdPalpite = document.createElement('td')
        tdPalpite.innerText = obj.palpite

        let editIcon = document.createElement('i')
        editIcon.classList.add('material-icons')
        editIcon.innerText = 'edit'

        let deleteIcon = document.createElement('i')
        deleteIcon.classList.add('material-icons')
        deleteIcon.innerText = 'delete'
        let posicao = listaPalpites.indexOf(obj)
        deleteIcon.setAttribute('onclick', `deletarPalpite(${posicao})`)

        let tdAcoes = document.createElement('td')
        tdAcoes.appendChild(editIcon)
        tdAcoes.appendChild(deleteIcon)

        let tr = document.createElement('tr')
        tr.appendChild(tdNome)
        tr.appendChild(tdPalpite)
        tr.appendChild(tdAcoes)

        tbody.appendChild(tr)

    })
}


function adicionarPalpite() {
    let nome = inputNome.value
    let palpite = inputNumero.value
    listaPalpites.push({nome, palpite})
    inputNome.value = ''
    inputNumero.value = ''
    renderizarHtml()
    saveToStorage()
}

function editarPalpite(posicao) {
    console.log(posicao);
}

function deletarPalpite(posicao) {
    listaPalpites.splice(posicao, 1)
    renderizarHtml()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('lista-palpites', JSON.stringify(listaPalpites))
}

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit()
    renderizarHtml()
    buttonAdicionar.onclick = adicionarPalpite
});

