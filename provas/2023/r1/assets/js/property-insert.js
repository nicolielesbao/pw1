const btnInclude = document.querySelector('#btnInclude');
const msg = document.querySelector('.message');
const description = document.querySelector('#description');
const category = document.querySelector('#category');
const price = document.querySelector('#price');

// Recuperar a lista de imóveis do localStorage (ou criar uma nova lista)
const ls = localStorage.getItem('propertyList');
let propertyList = ls ? JSON.parse(ls) : [];

// Função para exibir mensagens
function displayMessage(text, type) {
    msg.innerHTML = text;
    msg.className = `message ${type}`; // Adiciona a classe success ou error
    setTimeout(() => {
        msg.innerHTML = '';
        msg.className = 'message'; // Remove a classe após 3 segundos
    }, 3000);
}

// Ação ao clicar no botão de inclusão
btnInclude.addEventListener('click', (e) => {
    e.preventDefault();

    const image = document.querySelector('.radio:checked'); // Imagem selecionada

    // Validação dos campos
    if (!description.value || !category.value || !price.value || !image) {
        displayMessage('Preencha todos os campos!', 'error');
        return;
    }

    // Criação do objeto imóvel
    const imovel = {
        description: description.value,
        price: parseFloat(price.value), // Converte o preço para número
        category: category.value,
        image: image.value,
    };

    // Adiciona o imóvel à lista e salva no localStorage
    propertyList.push(imovel);
    localStorage.setItem('propertyList', JSON.stringify(propertyList));

    // Reseta o formulário
    description.value = '';
    price.value = '';
    category.value = 'casa';
    document.querySelectorAll('.radio').forEach((radio) => (radio.checked = false));

    // Exibe mensagem de sucesso
    displayMessage('Imóvel cadastrado com sucesso!', 'success');
});
