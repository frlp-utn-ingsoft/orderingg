const Modal = (function () {
    let $modal;

    /**
     * Abre el modal
     **/
    function open() {
        $modal.classList.add('is-active');
        const edit_title = document.getElementById('edit_title');
        const save_title = document.getElementById('save_title');
        const edit_button = document.getElementById('edit_button');
        const save_button = document.getElementById('save_button');
        edit_button.style.display = "none";
        edit_title.hidden = true;
        save_button.style.display = "block";
        save_title.hidden = false;
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

