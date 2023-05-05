const carro = document.querySelector('#carro');
const placa = document.querySelector('#placa');
const insert = document.querySelector('#insert');
const remove = document.querySelector('#remove'); 

let carros = [];

insert.addEventListener('click', () => {
    const item = {
        carro: carro.value,
        placa: placa.value
    };
    carros.push(item);
    refreshList();
});

remove.addEventListener('click', () => {
    carros.shift();
    // list = list.slice(1);
    refreshList();
});

function refreshList() {
    const listDOM = document.querySelector('#list');
    listDOM.innerHTML = '<div><span>Carro</span><span>Placa</span></div>';
    carros.forEach(item => {
        let element = document.createElement('div');
        element.innerHTML = `<span>${item.carro}</span><span>${item.placa}</span>`;
        listDOM.appendChild(element);
    });
    carro.value = '';
    placa.value = '';
}
