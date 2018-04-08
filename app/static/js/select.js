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
        let data = config.data;

        // Si es una promise nos pasaron datos desde una api
        // cuando la promise se resuelve, renderizamos nuevamente
        // el select
        if (config.data instanceof Promise) {
            config.data.then(function (data) {
                render($el, data)
            });
        } else {
            data = {};
        }

        render($el, data);
    }

    /**
     * Renderiza select en `$el`;
     *
     * @param {HTMLElement} $el elemento donde se va a renderizar el select
     * @param {Object} data datos del select
     */
    function render($el, data) {
        $el.innerHTML = template({data: data});
    }

    return {
        init
    };
})()
