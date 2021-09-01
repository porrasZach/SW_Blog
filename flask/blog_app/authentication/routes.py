from flask import Blueprint, render_template, request, redirect, url_for
from blog_app.forms import UserLoginForm
from blog_app.models import db, User, check_password_hash
from flask_login import login_user, logout_user, login_required

auth = Blueprint('auth', __name__, template_folder='auth_templates')



@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    form = UserLoginForm()
    if request.method == 'POST' and form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        print(email, password)
        new_user = User(email, password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('auth.signin'))
    return render_template('signup.html', form = form)


@auth.route('/signin', methods=['GET', 'POST'])
def signin():
    form = UserLoginForm()
    if request.method == 'POST' and form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        print(email, password)
        logged_user = User.query.filter(User.email == email).first()
        if logged_user and check_password_hash(logged_user.password, password):
            login_user(logged_user)
            return redirect(url_for('site.home'))
        else:
            return redirect('auth.signin')
    return render_template('signin.html', form = form)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('site.home'))