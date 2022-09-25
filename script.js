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

console.log(produtos)

produtos.forEach((elemento)=>{
    tabela.appendChild(criaTr(elemento.cod, elemento.fabric, elemento.ref, elemento.desc, elemento.quantEmb, elemento.preco, elemento.ean))
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
        "Codigo": codigo.value,
        "Fabricante": fabricante.value,
        "Referencia": referencia.value,
        "Descrição": descricao.value,
        "Qauntida p/ embalagem": quantidade_embalagem.value,
        "Preço": preco.value,
        "Ean": ean.value
    }

    tabela.appendChild(criaTr(codigo.value, fabricante.value, referencia.value, descrição.value, quantidade_embalagem.value, preco.value, ean.value))

    produtos.push(produtoAtual)

    
    
   
   localStorage.setItem("Produtos", JSON.stringify(produtos))
   
   codigo.value = ''
   fabricante.value = ''
   referencia.value = ''
   descrição.value = ''
   quantidade_embalagem.value = ''
   preco.value = ''
   ean.value = ''
})

function criaTd(dado){
    const td = document.createElement('td')
    td.textContent = dado
    return td
}

function criaTr(cod, fabric, ref, desc, quantEmb, preco,
    ean){

    const tr = document.createElement('tr')    
    tr.appendChild(criaTd(cod))
    tr.appendChild(criaTd(fabric))
    tr.appendChild(criaTd(ref))
    tr.appendChild(criaTd(desc))
    tr.appendChild(criaTd(quantEmb))
    tr.appendChild(criaTd(preco))
    tr.appendChild(criaTd(ean))
    
    return tr
}