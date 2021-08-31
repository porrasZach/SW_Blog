from flask import Flask
from config import Config
from .authentication.routes import auth
from .site.routes import site
from .models import db
from flask_migrate import Migrate
import time

app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(site)
app.register_blueprint(auth)

@app.route('/time')
def get_current_time():
    return {'time': time.ctime()}