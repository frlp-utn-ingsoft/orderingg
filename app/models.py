from app import db

class Product(db.Model):
    """
    Clase producto
    attr id: la clave primaria del producto
    attr name: una descripción del producto
    attr price: precio unitario del producto
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), index=True)
    price = db.Column(db.Float, index=True)

    def __repr__(self):
        return '{}'.format(self.name)

    @property
    def serialize(self):
        """
        Transforma el objeto en un formato serializable
        :return:
        """
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }