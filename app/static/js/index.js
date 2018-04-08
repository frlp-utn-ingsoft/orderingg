// Inicializamos la tabla
Table.init({
    el: '#orders',
    data: API.getOrder()
})

// Inicializamos el select de productos
Select.init({
    el: '#select',
    data: API.getProducts()
})

function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('is-active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('is-active');
}

