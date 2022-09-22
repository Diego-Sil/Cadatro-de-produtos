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

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.elements['codigo'].value);
    console.log(event.target.elements['fabricante'].value);
    console.log(event.target.elements['referencia'].value);
    console.log(event.target.elements['descrição'].value);
    console.log(event.target.elements['quantidade_embalagem'].value);
    console.log(event.target.elements['preco'].value);
    console.log(event.target.elements['ean'].value);
})
