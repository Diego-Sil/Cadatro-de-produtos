const form = document.getElementById('novoItem')

let codigo = document.getElementById('codigo')
let fabricante = document.getElementById('fabricante')
let referencia = document.getElementById('referencia')
let descrição = document.getElementById('descrição')
let quantidade_embalagem = document.getElementById('quantidade_embalagem')
let preco = document.getElementById('preco')
let ean = document.getElementById('ean')
let btnSalvar = document.getElementById('salvar')
let btnCorrigir = document.getElementById('corrigir')
let btnExcluir = document.getElementById('excluir')
let tabela = document.querySelector('tbody')
const produtos = JSON.parse(localStorage.getItem('produtos')) || []

produtos.forEach((elemento)=>{
     tabela.appendChild(criaTr(elemento))
})


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    const codigo = event.target.elements['codigo']
    const fabricante = event.target.elements['fabricante']
    const referencia = event.target.elements['referencia']
    const descricao = event.target.elements['descrição']
    const quantidade_embalagem = event.target.elements['quantidade_embalagem']
    const preco = event.target.elements['preco']
    const ean = event.target.elements['ean']
    
    const produtoAtual = {
        "codigo": codigo.value,
        "fabricante": fabricante.value,
        "referencia": referencia.value,
        "descrição": descricao.value,
        "quantidade_embalagem": quantidade_embalagem.value,
        "preço": preco.value,
        "ean": ean.value
    }

    tabela.appendChild(criaTr(produtoAtual))

    produtos.push(produtoAtual)

   localStorage.setItem("produtos", JSON.stringify(produtos))
   
   codigo.value = ''
   fabricante.value = ''
   referencia.value = ''
   descrição.value = ''
   quantidade_embalagem.value = ''
   preco.value = ''
   ean.value = ''
   
})

console.log(produtos)

function criaTd(dado){
    const td = document.createElement('td')
    td.textContent = dado
    return td
}

function criaTr(item){

    const tr = document.createElement('tr')
    tr.appendChild(criaTd(item.codigo))
    tr.appendChild(criaTd(item.fabricante))
    tr.appendChild(criaTd(item.referencia))
    tr.appendChild(criaTd(item.descricao))
    tr.appendChild(criaTd(item.quantidade_embalagem))
    tr.appendChild(criaTd(item.preco))
    tr.appendChild(criaTd(item.ean))
    
    return tr
}