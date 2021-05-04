# save this as app.py
from flask import Flask, escape, request

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'hello, oasis'
