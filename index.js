const tbody = document.querySelector('tbody')
const listaPalpites = []

function createHtml(items) {
    const tr = document.createElement('tr')
    const tdNome = document.createElement('td')
    const tdPalpite = document.createElement('td')
    const tdAcoes = document.createElement('td')
    const editIcon = document.createElement('i')
    const deleteIcon = document.createElement('i')
    editIcon.classList.add('material-icons')
    deleteIcon.classList.add('material-icons')
    editIcon.innerText = 'edit'
    deleteIcon.innerText = 'delete'

    items.map(obj => {
        tdNome.innerText = obj.nome
        tdPalpite.innerText = obj.palpite
        tdAcoes.appendChild(editIcon)
        tdAcoes.appendChild(deleteIcon)
        tr.appendChild(tdNome)
        tr.appendChild(tdPalpite)
        tr.appendChild(tdAcoes)
        tbody.appendChild(tr)
    })
}


function adicionarPalpite(nome, palpite) {
    listaPalpites.push({nome, palpite})
    createHtml(listaPalpites)
}

function editarPalpite() {

}

function deletarPalpite() {

}

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit()

    let adicionar = document.querySelector('#adicionar')

    adicionar.addEventListener('click', () => {
        let nome = document.querySelector('#name').value
        let palpite = document.querySelector('#number').value

        if(nome && palpite) adicionarPalpite(nome, palpite);
        else alert('favor preencher nome e palpite')
    })
});

