from app import app, db
from app.models import Product
from flask import request, jsonify

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/product", methods=['GET', 'POST'])
def products():
    """
    Endpoint para obtener todos los productos o crear uno nuevo
    :return:
    """
    if request.method == 'POST':
        # Crea un nuevo producto recibiendo un JSON con atributos name y price
        # Ejemplo: {'name': 'Tenedor', 'price': 50}
        p = Product(name=request.get_json()['name'], price=request.get_json()['price'])
        db.session.add(p)
        db.session.commit()
        return jsonify(p.serialize)
    else:
        # Obtiene todos los productos disponibles
        p = Product.query.all()
        return jsonify([i.serialize for i in p])