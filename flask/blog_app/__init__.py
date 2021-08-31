from flask import Flask
from config import Config
from .authentication.routes import auth
from .site.routes import site
import time

app = Flask(__name__)

app.config.from_object(Config)

app.register_blueprint(site)
app.register_blueprint(auth)

@app.route('/time')
def get_current_time():
    return {'time': time.ctime()}