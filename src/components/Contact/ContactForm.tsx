import React from "react";
import './contact-form.css';
import avatarDev from '../../assets/images/avatar-jack.png';
import avatarDes from '../../assets/images/avatar-andrew.png';
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
                    <p>Linkedin Profiles</p>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/jack-maynard-ux/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src={avatarDev} width={100} alt="Jack Maynard" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrew-badu-809b3015/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <img src={avatarDes} width={100} alt="Andrew Badu" />
                            </a>
                        </li>
                    </ul>
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
