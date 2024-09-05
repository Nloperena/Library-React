import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/rating";
import Price from "../components/price";
import Book from "../components/ui/book";

const BookInfo = ({ books, addToCart, cart }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
    const [added, setAdded] = useState(false);

    function addBookToCart(book) {
        setAdded(true);
        addToCart(book);
    }

    useEffect(() => {
        if (isBookInCart(cart)) {
            setAdded(true);
        }
    }, [cart, id]); // Add `cart` and `id` as dependencies

    function isBookInCart(cart) {
        return cart && cart.find(item => item.id === +id);
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/book"><h2 className="book__link book__selected--title--top">Books</h2></Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {book.title}
                                </h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">Summary</h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eveniet nobis, labore consequatur, corrupti est fugit dicta vitae qui nesciunt totam ipsam amet vel perspiciatis tempora temporibus suscipit fuga cum!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eveniet nobis, labore consequatur, corrupti est fugit dicta vitae qui nesciunt totam ipsam amet vel perspiciatis tempora temporibus suscipit fuga cum!
                                    </p>
                                </div>
                                {added ? (
                                   
                                   <Link to="/cart" className='book__link'>
                                        <button className="btn">
                                            Checkout
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="btn" onClick={() => addBookToCart(book)}>
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__selected--top">
                                <h2 className="book__selected--title--top">
                                    Recommended Books
                                </h2>
                            </div>
                            <div className="books">
                                {
                                    books.filter(book => book.rating === 5 && +book.id !== +id)
                                        .map(book => (<Book book={book} key={book.id} />))
                                        .slice(0, 4)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookInfo;
