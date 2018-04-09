const Modal = (function () {
    let $modal;

    /**
     * Abre el modal
     **/
    function open() {
        $modal.classList.add('is-active');
    }

    /**
     * Cierra el modal
     **/
    function close() {
        $modal.classList.remove('is-active');
    }

    /**
     * Inicializa el modal de agregar producto
     **/
    function init(config) {
        $modal = document.querySelector(config.el);

        // Inicializamos el select de productos
        Select.init({
            el: '#select',
            data: config.products,
            onSelect: config.onProductSelect
        });

        // Nos ponemos a escuchar cambios en el input de cantidad
        $modal.querySelector('#quantity')
            .addEventListener('input', function () {
                config.onChangeQunatity(this.value)
            });
    }

    return {
        open,
        close,
        init
    }
})();

