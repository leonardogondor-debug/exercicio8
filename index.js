const matriztabela = [
    ["alimentacao", 0],
    ["transporte", 0],
    ["saude", 0],
    ["educacao", 0],
    ["total", 0],
]

const obterDados = (id) => document.getElementById(id).value;
const pegarCategoria = () => obterDados("categoria");
const pegarValor = () => parseFloat(obterDados("valor"));
const valornegativo = (valor) => valor < 0;
const valortotal = (total , valor) => total + valor;

const atualizarInterface = () => {
    matriztabela.forEach(([nome, valor]) => {
      const elemento = obterDados(nome);
      elemento.textContent = '${nome}: R$ ${valor}';
    }
)}



function teste() {
    const valor = pegarValor();
    const categoria = pegarCategoria();
    document.getElementById("categoria").innerText="${categoria}: $ r${valor}"; 
    return;
}