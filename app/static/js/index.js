(function () {
    const $totalPrice = document.querySelector('#total-price');

    // Estado de la aplicacion
    const state = {
        selectedProduct: null,
        quantity: 0,
    }

    const refs = {}

    /**
     * Actualiza el valor del precio total
     **/
    function updateTotalPrice() {
        const totalPrice = state.selectedProduct.price * state.quantity;
        $totalPrice.innerHTML = `Precio total: $ ${totalPrice}`
    }

    /**
     * Inicializa la aplicacion
     **/
    function init() {
        refs.modal = Modal.init({
            el: '#modal',
            products: API.getProducts(),
            onProductSelect: function (selectedProduct) {
                state.selectedProduct = selectedProduct;
                updateTotalPrice();
            },
            onChangeQunatity: function (quantity) {
                state.quantity = quantity;
                updateTotalPrice();
            }
        });

        // Inicializamos la tabla
        refs.table = Table.init({
            el: '#orders',
            data: API.getOrder()
        });
    }

    init();
    window.refs = refs;
})()

