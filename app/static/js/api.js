
const API = (function () {
    /**
     * Obtiene una orden desde el backend
     *
     * @param {Number} orderId id de la orden
     *
     * TODO: Conectar con la api del backend
     */
    function getOrder(orderId) {
        return fetch('/order/1')
            .then(function toJson(r) {
                return r.json();
            });
    }

    return {
        getOrder
    }
})()
