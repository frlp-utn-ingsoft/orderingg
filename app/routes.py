from flask import render_template
from app import app

@app.route("/")
def hello():
    return render_template('orders.html')
