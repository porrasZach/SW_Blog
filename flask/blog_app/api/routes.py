from flask import Blueprint, jsonify, request, url_for
from blog_app.helpers import token_required
from blog_app.models import Book, BlogPost, book_schema, books_schema, db, blog_post_schema, blog_posts_schema


api = Blueprint('api', __name__, url_prefix='/api')


############################
##### BOOK CRUD ROUTES #####

@api.route('/books', methods = ['POST'])
@token_required
def create_book(current_user_token):
    title = request.json['title']
    author = request.json['author']
    release_year = request.json['release_year']
    # date_created = current_user_token.date_created
    description = request.json['description']

    user_token = current_user_token.token

    print('made it this far!')
    book = Book(title, author, release_year, description, user_token=user_token)

    db.session.add(book)
    db.session.commit()

    # passes back data as a dict object after added to db
    response = book_schema.dump(book)

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


@api.route('/books', methods = ['GET'])
@token_required
def get_all_books(current_user_token):
    owner = current_user_token.token
    books = Book.query.filter_by(user_token = owner).all()
    response = books_schema.dump(books)
    return jsonify(response)


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


#################################
##### BLOG POST CRUD ROUTES #####

@api.route('/blog', methods = ['POST'])
@token_required
def create_blog_post(current_user_token):
    print(request.json)
    post_title = request.json['post_title']
    sub_title = request.json['sub_title']
    body = request.json['body']
    user_token = current_user_token.token

    blogPost = BlogPost(post_title, sub_title, body, user_token=user_token)

    db.session.add(blogPost)
    db.session.commit()

    # passes back data as a dict object after added to db
    response = blog_post_schema.dump(blogPost)
    return jsonify(response)



##### not yet routed to front-end #####

@api.route('/blog/<id>', methods = ['GET'])
@token_required
def get_one_blog_post(current_user_token, id):
    blog_post = BlogPost.query.get(id)
    if blog_post:
        response = blog_post_schema.dump(blog_post)
        return jsonify(response)
    else:
        return jsonify({'message':"Can't find that blog post!"})


@api.route('/blog', methods = ['GET'])
@token_required
def get_all_blog_posts(current_user_token):
    author = current_user_token.id
    blog_posts = BlogPost.query.filter_by(user_id = author).all()
    response = blog_posts_schema.dump(blog_posts)
    return jsonify(response)


@api.route('/blog/<id>', methods = ['DELETE'])
@token_required
def delete_blog_post(current_user_token, id):
    blog_post = BlogPost.query.get(id)
    if blog_post:
        db.session.delete(blog_post)
        db.session.commit()
        response = blog_post_schema.dump(blog_post)
        return jsonify(response)
    else:
        return jsonify({'message':"Can't find that blog post!"})