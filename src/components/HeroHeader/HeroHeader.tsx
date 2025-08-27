import React from "react";
import "./hero-header.css";
import "primereact/resources/themes/lara-light-green/theme.css"; // Import Lara Light theme
import "primereact/resources/primereact.min.css"; // Import PrimeReact styles
import "primeicons/primeicons.css"; // Import PrimeIcons

import { useState } from "react";
import { Button } from "primereact/button"; // Import PrimeReact Button component
import { Dialog } from "primereact/dialog"; // Import PrimeReact Dialog component

const HeroHeader: React.FC = () => {
  const [visibleMaximized, setVisibleMaximized] = useState(false);
  return (
    <header className="hero-header">
        <div className="type">
            <h1><span className="outline">Crafting</span> meaningful <span className="outline">digital experiences</span> <span>✳</span></h1>

        </div>
  
        <div className="booking-action">
            {/* <button className="primary">Book a free consultation</button> */}
            <p>your one-stop solution to <span className="underline">design as a service</span></p>
            <Button label="Book a free consultation" 
                    className="primary learn-more" 
                    onClick={() => setVisibleMaximized(true)} 
            />
            <Dialog 
                  header="Book a free consultation" 
                          visible={visibleMaximized} 
                          style={{ width: '50vw' }} 
                          onHide={() => setVisibleMaximized(false)}
                          draggable={false}
                          dismissableMask
                          maximizable
                                >
                                  <p className="dialog-content-text--align-left">
            We are a partnership comprising of developers and digital artist with a focus on making great looking web and mobile experiences. To find out more 
            Select our book an appointment link
                                  </p>
            </Dialog>
        </div>
    </header>
  );
};

export default HeroHeader;
