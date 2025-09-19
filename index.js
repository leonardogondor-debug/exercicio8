const matriztabela = [
    ["alimentacao", 0],
    ["transporte", 0],
    ["saude", 0],
    ["educacao", 0],
    ["total", 0],
]

const obterDados = (id) => document.getElementById(id).Value;
const pegarCategoria = () => obterDados("categoria").Value;
const pegarValor = () => parseFloat(obterDados("valor"));

function teste() {
    const valor = pegarValor();
    const categoria = pegarCategoria();
    alert(valor);
    alert(categoria);
    return;

}