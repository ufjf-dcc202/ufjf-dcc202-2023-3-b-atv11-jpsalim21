const lista = ["item 1", "item 2", "item 3"];

function getLista(){
    return lista;
}

function adicionaItem(item){
    lista.push(item);
}

function removeItem(posicao){
    lista.splice(posicao, 1);
}

function limpaLista(){
    lista.splice(0);
}

export { getLista, adicionaItem, removeItem, limpaLista };