from flask import Flask
from other_module import other_function

print(__name__)

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Dom"
