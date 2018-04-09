const Select = (function () {
    const source = document.getElementById('select-template').innerHTML;
    const template = Handlebars.compile(source);

    /*
     * Inicializa el select de productos.
     *
     * @param {Object} config configuracion del select
     *  Es un objecto con los siguientes atributos:
     *
     *  - `el` selector css que indica donde se va a renderizar el select
     *  - `data` Objecto con los datos del select.
     */
    function init(config) {
        const $el = document.querySelector(config.el);

        // Si es una promise nos pasaron datos desde una api
        // cuando la promise se resuelve, renderizamos nuevamente
        // el select
        if (config.data instanceof Promise) {
            config.data.then(function (data) {
                render($el, {
                    data,
                    onSelect: config.onSelect
                })
            });
        } else {
            render($el, config);
        }

    }

    function onChange(config, e) {
        const $select = e.target;
        const $option = $select.options[$select.selectedIndex];
        const id = parseInt($option.value);

        const product = config.data.filter(function (product) {
            return product.id == id;
        })[0];

        config.onSelect(product);
    }

    /**
     * Renderiza select en `$el`;
     *
     * @param {HTMLElement} $el elemento donde se va a renderizar el select
     * @param {Object} data datos del select
     */
    function render($el, config) {
        $el.innerHTML = template({ products: config.data });

        const $select = $el.querySelector('select')
            .addEventListener('change', onChange.bind(null, config));
    }

    return {
        init
    };
})()
