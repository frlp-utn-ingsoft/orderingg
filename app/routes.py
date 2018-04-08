from app import app, db
from app.models import Product
from flask import request, jsonify

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/product", methods=['GET', 'POST'])
def products():
    if request.method == 'POST':
        p = Product(name=request.get_json()['name'], price=request.get_json()['price'])
        db.session.add(p)
        db.session.commit()
        return jsonify(p.serialize)
    else:
        p = Product.query.all()
        return jsonify([i.serialize for i in p])