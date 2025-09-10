import React from "react";
import "./bento.css"
import "primereact/resources/themes/lara-light-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faTeamspeak } from "@fortawesome/free-brands-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

const Bento: React.FC = () => {
  // Create separate state variables for each dialog
  const [visibleWhoWeAre, setVisibleWhoWeAre] = useState(false);
  const [visibleServices, setVisibleServices] = useState(false);

  return (
    <div className="bento">
      <div className="title-block">
        <h2>
          Work & Expertise <span className="full-stop">✳</span>
        </h2>
      </div>
      <>
        <div className="grid-block">
          <div className="grid-content">
            <article className="a bento-box">
              <h3>
                <span className="avatar">
                  <FontAwesomeIcon icon={faFingerprint} size="2x" />
                </span>
                who we are ?
              </h3>
              <div className="content">
                <p>We are a team of passionate individuals committed to delivering high-quality digital solutions
                  We believe in the power of creativity and functionality to create meaningful experiences
                  Our expertise spans across various domains, ( <b>design + engineering</b> ) allowing us to tackle diverse challenges with innovative approaches
                </p>
                <Button 
                  label="Learn More" 
                  className="learn-more" 
                  onClick={() => setVisibleWhoWeAre(true)} 
                />

                <Dialog 
                  header="Who We Are" 
                  visible={visibleWhoWeAre} 
                  style={{ width: '50vw' }} 
                  onHide={() => setVisibleWhoWeAre(false)}
                  draggable={false}
                  dismissableMask
                  maximizable
                >
                  <p>We are a team of individuals that collaborate to deliver innovative solutions within the digital landscape. We specialize in designing strong visual identities and user experiences that resonate with audiences, as well as developing clean and efficient code.</p>
                </Dialog>
              </div>
            </article>
            
            <article className="b bento-box">
              <h3>
                <span className="avatar">
                  <FontAwesomeIcon icon={faServicestack} size="2x" />
                </span>
                Services
              </h3>
              <div className="content">
                <p>
                  Our services are designed to help businesses thrive in the digital landscape. We cater to a wide range of business needs, from startups to established enterprises.
                </p>
                <Button 
                  label="Book a free consultation" 
                  className="learn-more"
                  onClick={() => setVisibleServices(true)}
                />
                <Dialog
                  header="Our Services"
                  visible={visibleServices}
                  style={{ width: '50vw' }}
                  onHide={() => setVisibleServices(false)}
                  draggable={false}
                  dismissableMask
                  maximizable
                >
                  <p>Book a free consultation: We are contactable via the information on the contact page. Furthermore you can reach out to us through our social media channels. Github and Linkedin</p>
                </Dialog>
              </div>
            </article>
            
            {/* Other articles remain the same */}
            <article className="c bento-box">
              <h3>
                <span className="avatar">
                  <FontAwesomeIcon icon={faDiagramProject} size="2x" />
                </span>
                Projects
              </h3>
              <div className="content">
                <p>
                  We have worked on a variety of projects across different industries, showcasing our versatility and expertise. Our portfolio includes successful implementations of progressive web apps <b>(PWAs)</b>, and design solutions that drive results.
                </p>
                <ul role="list">
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Design Solutions</li>
                </ul>
              </div>
            </article>
            
            <article className="d bento-box">
              <h3>
                <span className="avatar">
                  <FontAwesomeIcon icon={faFlask} size="2x" />
                </span>
                expertise
              </h3>
              <div className="content">
                <p>
                  Our expertise lies in creating user-centric solutions that not only meet business goals but also provide exceptional user experiences.
                </p>
              </div>
            </article>
            
            <article className="e bento-box">
              <h3>
                <span className="avatar">
                  <FontAwesomeIcon icon={faTeamspeak} size="2x" />
                </span>
                use cases
              </h3>
              <div className="content">
                <p>We provide tailored solutions to meet the unique needs of our clients</p>
                <ul>
                  <li>Custom Software Development</li>
                  <li>UI/UX Design</li>
                  <li>Consulting Services</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </>
    </div>
  );
};

export default Bento;