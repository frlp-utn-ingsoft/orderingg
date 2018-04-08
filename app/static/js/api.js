
const API = (function () {
    /**
     * Obtiene una orden desde el backend
     *
     * @param {Number} orderId id de la orden
     *
     * TODO: Conectar con la api del backend
     */
    function getOrder(orderId) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    products: [
                        {
                            id: 1,
                            description: 'Mesa ratona',
                            price: 3000,
                            quantity: 1,
                            totalPrice: 3000
                        }
                    ],
                    total: 3000
                });
            }, 1000);
        });
    }

    return {
        getOrder
    }
})()
