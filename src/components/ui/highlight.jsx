import React from "react";

const Highlight = ({ icon, title, description }) => {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {icon} {/* Render the icon passed as a prop */}
            </div>
            <h3 className="highlight__subtitle">{title}</h3> {/* Render the title passed as a prop */}
            <p className="highlight__para">{description}</p> {/* Render the description passed as a prop */}
        </div>
    );
}

export default Highlight;
