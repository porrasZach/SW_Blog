from flask import Blueprint, jsonify, request, url_for
from blog_app.helpers import token_required
from blog_app.models import Book, book_schema, books_schema, db


api = Blueprint('api', __name__, url_prefix='/api')



@api.route('/tester')
def getRando():
    return {'book': 'fake book'}



@api.route('/books', methods = ['POST'])
@token_required
def create_book(current_user_token):
    title = request.json['title']
    author = request.json['author']
    release_year = request.json['release_year']
    date_created = current_user_token.date_created
    description = request.json['description']
    user_token = current_user_token.token

    book = Book(title, author, release_year, date_created, description, user_token=user_token)

    db.session.add(book)
    db.session.commit()

    # passes back data as a dict object after added to db
    response = book_schema.dump(book)
    return jsonify(response)



@api.route('/books', methods = ['GET'])
@token_required
def get_all_books(current_user_token):
    owner = current_user_token.token
    books = Book.query.filter_by(user_token = owner).all()
    response = books_schema.dump(books)
    return jsonify(response)



@api.route('/books/<id>', methods = ['GET'])
@token_required
def get_one_book(current_user_token, id):
    book = Book.query.get(id)
    if book:
        response = book_schema.dump(book)
        return jsonify(response)
    else:
        return jsonify({'message':"Can't find that book!"})



@api.route('/books/<id>', methods = ['POST'])
@token_required
def update_book(current_user_token, id):
    book = Book.query.get(id)
    if book:
        book.title = request.json['title']
        book.author = request.json['author']
        book.release_year = request.json['release_year']
        # book.date_created = current_user_token.date_created
        book.description = request.json['description']
        book.user_token = current_user_token.token

        db.session.commit()

        # passes back data as a dict object after added to db
        response = book_schema.dump(book)
        return jsonify(response)
    else:
        return jsonify({'message':"Can't find that book!"})



@api.route('/books/<id>', methods = ['DELETE'])
@token_required
def delete_book(current_user_token, id):
    book = Book.query.get(id)
    if book:
        db.session.delete(book)
        db.session.commit()
        response = book_schema.dump(book)
        return jsonify(response)
    else:
        return jsonify({'message':"Can't find that book!"})