import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons"; // Import the specific icons

const Rating = ({ rating }) => {
    return (
        <div className="book__ratings">
            {
                new Array(Math.floor(rating)).fill(0).map((_, index) => (
                    <FontAwesomeIcon icon={faStar} key={index} /> // Use the imported icon
                ))
            }
            {
                !Number.isInteger(rating) && <FontAwesomeIcon icon={faStarHalfAlt} /> // Use the imported icon
            }
        </div>
    )
}

export default Rating;
