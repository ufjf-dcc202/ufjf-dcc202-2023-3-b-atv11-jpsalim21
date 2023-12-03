import {
    getLista,
    adicionaItem,
    removeItem,
    limpaLista
} from './lista.js';

const entrada = document.querySelector('#entrada');
const botaoAdicionar = document.querySelector('#adicionar');
const botaoLimpar = document.querySelector('#limpar');
const itens = document.querySelector('#itens');

function adicionaItem(item){
    const li = document.createElement('li');
    li.textContent = item;
    itens.appendChild(li);
}