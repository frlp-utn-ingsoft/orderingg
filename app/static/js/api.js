const API = (function () {
    /**
     * Obtiene una orden desde el backend
     *
     * @param {Number} orderId id de la orden
     */
    function getOrder(orderId) {
        return fetch('/order/1')
            .then(function toJson(r) {
                return r.json();
            });
    }

    /**
     * Obtiene todos los productos desde el backend
     *
     */
    function getProducts() {
        return fetch('/product')
            .then(function toJson(r) {
                return r.json();
            });
    }

    return {
        getOrder,
        getProducts
    }
})()
