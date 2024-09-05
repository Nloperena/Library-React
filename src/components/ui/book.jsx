import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../ui/rating';
import Price from '../price';

const Book = ({ book }) => {
    const [imgLoaded, setImgLoaded] = useState(false); // Track if the image has loaded for each book
    const mountedRef = useRef(true); // Track if the component is mounted

    useEffect(() => {
        // Reset the mountedRef to true and imgLoaded to false when the book URL changes
        mountedRef.current = true;
        setImgLoaded(false); // Start loading when the component mounts or book URL changes

        const image = new Image(); // Create a new Image object
        image.src = book.url; // Set the image source

        // Handle image load event
        image.onload = () => {
            if (mountedRef.current) {
                setImgLoaded(true); // Mark image as loaded only if the component is still mounted
            }
        };

        // Cleanup function to prevent state updates if the component is unmounted
        return () => {
            mountedRef.current = false;
        };
    }, [book.url]); // Run this effect when book.url changes

    return (
        <div className="book">
            {imgLoaded ? (
                // Render the book details once the image has loaded
                <>
                    <Link to={`/books/${book.id}`}>
                        <figure className="book__img--wrapper">
                            <img src={book.url} alt={book.title} className="book__img" />
                        </figure>
                    </Link>
                    <div className="book__title">
                        <Link to={`/books/${book.id}`} className="book__title--link">
                            {book.title}
                        </Link>
                    </div>
                    <Rating rating={book.rating} />
                    <Price price={book.salePrice} originalPrice={book.originalPrice} />
                </>
            ) : (
                // Show skeleton loaders while the image is still loading
                <>
                    <div className="book__img--skeleton skeleton"></div>
                    <div className="book__title--skeleton skeleton"></div>
                    <div className="book__rating--skeleton skeleton"></div>
                    <div className="book__price--skeleton skeleton"></div>
                </>
            )}
        </div>
    );
};

export default Book;
