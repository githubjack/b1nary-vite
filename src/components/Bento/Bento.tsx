import React from "react";
import "./bento.css"
import "primereact/resources/themes/lara-light-green/theme.css"; // Import Lara Light theme
import "primereact/resources/primereact.min.css"; // Import PrimeReact styles
import "primeicons/primeicons.css"; // Import PrimeIcons

import { useState } from "react";
import { Button } from "primereact/button"; // Import PrimeReact Button component
import { Dialog } from "primereact/dialog"; // Import PrimeReact Dialog component

const Bento: React.FC = () => {
      const [visibleMaximized, setVisibleMaximized] = useState(false);
  return (
    <div className="bento">
      <h2><span className="outline">Work</span> & <span className="outline">Expertise</span></h2>

    <>
        <div className="grid-block">
            <div className="grid-content">
                <article className="a bento-box dark-text">
                    <h3>
                      <span className="avatar">
                        <img 
                          src="/src/assets/images/bento-icons/Identity.png" 
                          alt="Avatar" 
                          width={40}
                          height={40} />
                      </span>
                      who we are ?
                    </h3>
                    <div className="content">
                    <p>We are a team of passionate individuals committed to delivering high-quality digital solutions
                    We believe in the power of creativity and functionality to create meaningful experiences
                    Our expertise spans across various domains, ( <b>design + engineering</b> ) allowing us to tackle diverse challenges with innovative approaches
                    </p>

                    <Button label="Learn More" 
                      className="learn-more" 
                      onClick={() => setVisibleMaximized(true)} 
                      />

                    <Dialog 
                      header="Who We Are" 
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
                </article>
                <article className="b bento-box dark-text">
                    <h3>
                      <span className="avatar">
                        <img 
                          src="/src/assets/images/bento-icons/Service.png" 
                          alt="Avatar" 
                          width={40}
                          height={40} />
                      </span>
                      Services
                    </h3>
                  <div className="content">
                    <p>
                      We offer a wide range of services to help businesses succeed in the digital landscape. Our services include <b>web</b> development, <b>mobile app</b> development, <b>UI/UX design</b>, and more.
                    </p>
                  </div>
                </article>
                <article className="c bento-box light-text">
                  <h3>
                  <span className="avatar">
                    <img 
                      src="/src/assets/images/bento-icons/projects.png" 
                      alt="Avatar" 
                      width={40}
                      height={40} />
                  </span>
                  Projects
                  </h3>
                  <div className="content">
                    <p>
                      We have worked on a variety of projects across different industries, showcasing our versatility and expertise. Our portfolio includes successful implementations of progressive web apps <b>(PWAs)</b>, and design solutions that drive results.
                    </p>
                    <ul role="list">
                      {/* <li>Web Applications</li> */}
                      <li>Progressive Web Apps (PWAs)</li>
                      <li>Design Solutions</li>
                    </ul>
                  </div>
                </article>
                <article className="d bento-box dark-text">

                      <h3>
                      <span className="avatar">
                        <img 
                          src="/src/assets/images/bento-icons/expertise.png" 
                          alt="Avatar" 
                          width={40}
                          height={40} />
                      </span>
                      expertise
                    </h3>
                  <div className="content">

                    <p>
                      Our expertise lies in creating user-centric solutions that not only meet business goals but also provide exceptional user experiences.
                    </p>
                  </div>
                </article>
                <article className="e bento-box light-text">
                    <h3>
                    <span className="avatar">
                      <img 
                        src="/src/assets/images/bento-icons/use-case.png" 
                        alt="Avatar" 
                        width={40}
                        height={40} />
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
