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
const limparcampo = () => obterDados ("valor").value = '';
const valornegativo = (valor) => valor < 0;
const valorSoma = (total , valor) => total + valor;

const atualizaCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria).value;

const atualizarvalorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor).value;

const atualizarInterface = () => {
    matriztabela.forEach(([nome, valor]) => {
      const elemento = obterDados(nome);
      elemento.textContent = `${nome}: R$ ${valor}`;
    }
)}



function teste() {
    const valorInformado = pegarValor();
    const categoriaInformado = pegarCategoria();
    if (valornegativo(valorInformado)){
       alert('valor informado nao aceito!');
       return;
    }
    const categoria = pegarCategoria(matriztabela, categoriaInformado)
    const total = pegarCategoria(matriztabela, "total");
    atualizarvalorCategoria(categoria, valorInformado);
    atualizarvalorCategoria(total, valorInformado);
    atualizarInterface();
    limparcampo();
}