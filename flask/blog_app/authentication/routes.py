from flask import Flask, jsonify
from flask import Blueprint, render_template, request, redirect, url_for
from blog_app.forms import UserSignupForm, UserLoginForm
from blog_app.models import db, User, check_password_hash
from flask_login import login_user, logout_user, login_required
from flask_jwt_extended import create_access_token

auth = Blueprint('auth', __name__, template_folder='auth_templates')


# create_access_token() function is used to actually generate the JWT.
@auth.route("/signin", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    logged_user = User.query.filter(User.email == email).first()
    if logged_user and check_password_hash(logged_user.password, password):
        login_user(logged_user)
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token)
    else:
        return jsonify({"msg": "Bad username or password"}), 401

    
@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    user_name = request.json.get("user_name", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    email_taken = User.query.filter(User.email == email).first()
    if email_taken:
        return jsonify({"msg": "Email taken"})
    else:
        print(user_name, email, password)
        new_user = User(user_name, email, password)
        db.session.add(new_user)
        db.session.commit()
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token)


########## not used by React front-end ##########
@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.signin'))