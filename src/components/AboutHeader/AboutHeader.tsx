import React from "react";
import './about-header.css';

const AboutHeader: React.FC = () => {

    return (
        <header className="about">
            <div className="type">
                <h1><span className="outline">The Story</span> behind Our <span className="outline">Brand</span></h1>
            </div>
            <div className="header-image"></div>
        </header>
    );
};

export default AboutHeader;