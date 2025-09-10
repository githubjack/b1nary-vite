import React from "react";
import './contact-form.css';


const ContactForm: React.FC = () => {
    return (
        <>
        <header className="contact">
        <div className="type">
            <h1 className="contact-header">Contact points</h1>
        </div>
            <div className="contact-image"></div>
            <div className="contact-group">
                <div className="contact-info">
                    <p>hello@b1nary.xyz</p>
                    <p>+44 7960198446</p>

                </div>
                <div className="contact-text">
                    <p> We are based in the UK. Spread from London to Liverpool. 
                        If you have any questions, feel free to reach out!
                       
                    </p>
                </div>
            </div>
        </header>
        </>
    );
};

export default ContactForm;
