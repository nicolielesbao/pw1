const propertyList = [
    {
        description: "Linda casa na Zona Sul",
        category: "Casa",
        price: 1500000,
        image: "assets/images/property01.jpg"
    },
    {
        description: "Apartamento com vista para o mar",
        category: "Apartamento",
        price: 800000,
        image: "assets/images/property02.jpg"
    },
    {
        description: "Terreno amplo no centro da cidade",
        category: "Terreno",
        price: 500000,
        image: "assets/images/property03.jpg"
    },
    {
        description: "Casa térrea com jardim",
        category: "Casa",
        price: 1200000,
        image: "assets/images/property04.jpg"
    },
    {
        description: "Apartamento luxuoso no bairro nobre",
        category: "Apartamento",
        price: 2000000,
        image: "assets/images/property05.jpg"
    },
    {
        description: "Terreno com vista panorâmica",
        category: "Terreno",
        price: 700000,
        image: "assets/images/property06.jpg"
    },
    {
        description: "Casa com piscina e área de lazer",
        category: "Casa",
        price: 1800000,
        image: "assets/images/property07.jpg"
    },
    {
        description: "Apartamento moderno no centro histórico",
        category: "Apartamento",
        price: 950000,
        image: "assets/images/property08.jpg"
    },
    {
        description: "Terreno próximo à praia",
        category: "Terreno",
        price: 600000,
        image: "assets/images/property09.jpg"
    },
    {
        description: "Casa aconchegante em condomínio fechado",
        category: "Casa",
        price: 1350000,
        image: "assets/images/property10.jpg"
    }
];

// Função para gerar o HTML de um imóvel
function generatePropertyHTML(property) {
    return `
        <div class="property-card">
            <img src="${property.image}" alt="${property.description}">
            <div class="property-description">${property.description}</div>
            <div class="property-category">${property.category}</div>
            <div class="property-price">R$ ${property.price.toLocaleString('pt-BR')}</div>
        </div>
    `;
}

// Função para exibir os imóveis na página
function displayProperties(properties) {
    const propertyListContainer = document.querySelector('.property-list');
    propertyListContainer.innerHTML = ''; // Limpa a lista antes de adicionar novos imóveis

    properties.forEach(property => {
        const propertyHTML = generatePropertyHTML(property);
        propertyListContainer.innerHTML += propertyHTML; // Adiciona cada imóvel à lista
    });
}

// Função para filtrar os imóveis por categoria
function filterProperties(category) {
    if (category === 'todos') {
        displayProperties(propertyList);
    } else {
        // Filtra imóveis pela categoria selecionada, assegurando que a comparação seja insensível a maiúsculas/minúsculas
        const filteredProperties = propertyList.filter(property => property.category.toLowerCase() === category.toLowerCase());
        displayProperties(filteredProperties);
    }
}

// Exibindo todos os imóveis inicialmente
displayProperties(propertyList);

// Adicionando o evento para o filtro de categoria
const categorySelect = document.querySelector('#category-select');
categorySelect.addEventListener('change', (event) => {
    const category = event.target.value;
    filterProperties(category);
});
