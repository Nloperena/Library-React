import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faTags, faBolt } from "@fortawesome/free-solid-svg-icons";
import Highlight from "./ui/highlight";

const Highlights = () => {
    return (
        <section id='highlights'>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                            icon={<FontAwesomeIcon icon={faBookOpen} />} 
                            title="10,000+ Books" 
                            description="Choose from a wide range of books in various genres" 
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon={faBolt} />} 
                            title="10,000+ Books" 
                            description="Library has books in all your favourite categories" 
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon={faTags} />} 
                            title="Affordable" 
                            description="Get your hands on popular books for as little as $10." 
                        />
                        {/* Add more Highlight components as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;

