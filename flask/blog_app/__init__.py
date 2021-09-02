from flask import Flask
from flask_login import login_manager
from config import Config
from .authentication.routes import auth
from .site.routes import site
from .models import db, User, login_manager
from flask_migrate import Migrate
import time
from .api.routes import api
from flask_cors import CORS
from .helpers import JSONEncoder


app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app)
login_manager.init_app(app)

login_manager.login_view = 'auth.signin'

migrate = Migrate(app, db)

app.register_blueprint(site)
app.register_blueprint(auth)
app.register_blueprint(api)

CORS(app)

# overwrites exising JSONEncoder with additional decimal function from helpers
app.json_encoder = JSONEncoder


@app.route('/time')
def get_current_time():
    return {'time': time.ctime()}