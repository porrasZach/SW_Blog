from flask_sqlalchemy import SQLAlchemy
import uuid
import secrets



db = SQLAlchemy()


class User(db.Model):
    