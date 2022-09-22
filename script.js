const form = document.getElementById('novoItem');

let codigo = document.getElementById('codigo');
let fabricante = document.getElementById('fabricante');
let referencia = document.getElementById('referencia');
let descrição = document.getElementById('descrição');
let quantidade_embalagem = document.getElementById('quantidade_embalagem');
let preco = document.getElementById('preco');
let
ean = document.getElementById('ean');
let btnSalvar = document.getElementById('salvar');
let btnCorrigir = document.getElementById('corrigir');
let btnExcluir = document.getElementById('excluir');
let tabela = document.querySelector('tbody');

form.addEventListener('submit',(event)=>{

   
    event.preventDefault();

    const codigo = event.target.elements['codigo'];
    const fabricante = event.target.elements['fabricante'];
    const referencia = event.target.elements['referencia'];
    const descrição = event.target.elements['descrição']
    const quantidade_embalagem = event.target.elements['quantidade_embalagem'];
    const preco = event.target.elements['preco'];
    const ean = event.target.elements['ean'];

    tabela.appendChild(criaTr(codigo.value, fabricante.value, referencia.value, descrição.value, quantidade_embalagem.value, preco.value, ean.value
    ));
    
    codigo.value = ""
    fabricante.value = ""
    referencia.value = ""
    descrição.value = ""
    quantidade_embalagem.value = ""
    preco.value = ""
    ean.value = ""
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

function criaTr(cod, fabric, ref, desc, quantEmb, preco,
    ean){
    const tr = document.createElement('tr');
    tr.appendChild(criaTd(cod));
    tr.appendChild(criaTd(fabric));
    tr.appendChild(criaTd(ref));
    tr.appendChild(criaTd(desc));
    tr.appendChild(criaTd(quantEmb));
    tr.appendChild(criaTd(preco));
    tr.appendChild(criaTd(ean));
    return tr;
}