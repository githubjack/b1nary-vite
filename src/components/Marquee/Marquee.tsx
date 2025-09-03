import React from "react";
import './marquee.css';

const Marquee: React.FC = () => {
    return (
        <div className="marquee">
            <div className="marquee-content">
                <ul>
                    <li><span className="company">
                        Ryzosens
                        </span>
                    </li>
                    <li><span className="company">
                        Northrop Grumman
                        </span>
                    </li>
                    <li><span className="company">
                        Pure Legal
                        </span>
                    </li>
                    <li><span className="company">
                        Never.no 
                        </span>
                    </li>
                    <li><span className="company">
                        Experian 
                        </span>
                    </li>
                    <li><span className="company">
                        Accenture 
                        </span>
                    </li>
                    <li><span className="company">
                        TBWA
                        </span>
                    </li>
                    <li><span className="company">
                        McDonalds
                        </span>
                    </li>
                </ul>

                <ul aria-hidden="true">
                    <li><span className="company">
                        Ryzosens
                        </span>
                    </li>
                    <li><span className="company">
                        Northrop Grumman
                        </span>
                    </li>
                    <li><span className="company">
                        Pure Legal
                        </span>
                    </li>
                    <li><span className="company">
                        Never.no 
                        </span>
                    </li>
                    <li><span className="company">
                        Experian 
                        </span>
                    </li>
                    <li><span className="company">
                        Accenture 
                        </span>
                    </li>
                    <li><span className="company">
                        TBWA
                        </span>
                    </li>
                    <li><span className="company">
                        McDonalds
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Marquee;
