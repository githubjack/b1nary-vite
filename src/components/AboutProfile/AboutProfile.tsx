import React from "react";
import './about-profile.css';
import avatarDev from '../../assets/images/avatar-jack.png';
import avatarDes from '../../assets/images/avatar-andrew.png';
const AboutProfile: React.FC = () => {
    return (
        <>
            <div className="about-profile">
                <div className="profile-card">
                    <div className="avatar-shot">
                        <img src={avatarDev} alt="Jack's Avatar" />
                    </div>
                    <h4>Jack, Design Engineer</h4>
                    <p>I’m a design engineer who brings ideas to life in the browser. From crafting prototype designs to shaping elegant interfaces, I blend accessible HTML, cascading style sheets, and the power of JavaScript to build user experiences that flow beautifully across devices.</p>
                </div>
                <div className="profile-card">
                    <div className="avatar-shot">
                        <img src={avatarDes} alt="Andrew's Avatar" />
                    </div>
                    <h4>Andrew, Product Designer</h4>
                    <p>Hello, my name&rsquo;s Andrew, and I am a Product Designer. My role is to design products in a way that draws the viewer into a focal point of an experience—one that, hopefully, they will remember as a little different from the other UX products they&rsquo;ve seen before.</p>
                </div>
            </div>
            <div className="profile-msg">
                <p>Design as a Service <abbr title="Design as a Service">DAAS</abbr></p>
            </div>

        </>
    );
};

export default AboutProfile;

