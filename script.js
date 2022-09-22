const form = document.getElementById('novoItem');

let codigo = document.getElementById('codigo');
let fabricante = document.getElementById('fabricante');
let referencia = document.getElementById('referencia');
let descrição = document.getElementById('descrição');
let quantidade_embalagem = document.getElementById('quantidade_embalagem');
let preco = document.getElementById('preco');
let ean = document.getElementById('ean');
let btnSalvar = document.getElementById('salvar');
let btnCorrigir = document.getElementById('corrigir');
let btnExcluir = document.getElementById('excluir');
let tabela = document.querySelector('tbody');

form.addEventListener('submit',(event)=>{

    event.preventDefault();

    /* event.target.elements['codigo'].value;
    event.target.elements['fabricante'].value;
    event.target.elements['referencia'].value;
    event.target.elements['descrição'].value;
    event.target.elements['quantidade_embalagem'].value;
    event.target.elements['preco'].value;
    event.target.elements['ean'].value; */
})

btnCorrigir.addEventListener('click',function(event) {
    event.preventDefault();
    tabela.appendChild(criaTr());
})

function criaTd(dado){
    const td = document.createElement('td');
    td.textContent = dado;
    return td;
}

function criaTr(){
    const tr = document.createElement('tr');
    tr.appendChild(criaTd('oiu'));
    tr.appendChild(criaTd('oiu'));
    tr.appendChild(criaTd('oiu'));
    tr.appendChild(criaTd('oiu'));
    tr.appendChild(criaTd('oiu'));



    return tr;
}

