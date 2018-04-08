from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
from app import models
migrate = Migrate(app, db)

from app import routes

# Agrega cuatro productos al iniciar la app
from app.models import Product
products = Product.query.all()

if not products:
    p = Product(name="Silla", price=500)
    db.session.add(p)
    p = Product(name="Mesa", price=2000)
    db.session.add(p)
    p = Product(name="Vaso", price=150)
    db.session.add(p)
    p = Product(name="Individual", price=250)
    db.session.add(p)