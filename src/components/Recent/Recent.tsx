import React from "react";
import "./recent.css";
import muayThumb from "../../assets/images/thumbs/muay-thumb.png";
import lcsThumb from "../../assets/images/thumbs/lcs-thumb.png";
import ryzosensThumb from "../../assets/images/thumbs/ryzosens-thumb.png";
import gorkiThumb from "../../assets/images/thumbs/gorki-thumb.png";


const Recent: React.FC = () => {
  return (
  <div className="grid-block">
    <div className="title-block">
      <h2>Recent ux projects <span className="full-stop">✳</span></h2>
    </div>

    <div className="recent-grid">
      <div className="a">
        <article className="project">
          <h3>Muay</h3>
        <img 
          src={muayThumb}
          width={"100%"} 
          alt="Muay charity project" 
          className="recent-image"
        />
          <div className="recent-details">
            <p>MUAY is a community-led outreach organisation committed to providing sustainable support for young people across Africa and within the diaspora. To help amplify their mission and connect with a wider audience, we designed and developed a one-page landing website. The site serves as a central hub for raising awareness of their initiatives, while also offering visitors simple and secure options to contribute through donations and directly support the project’s impact.</p>
            <a href="https://muayinternational.org/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
       
        </article>
      </div>
      <div className="b">
        <article className="project">
          <h3>Ryzosens</h3>
          <img
            src={ryzosensThumb}
            width={"100%"}
            alt="Ryzosens project"
            className="recent-image"
          />
          <div className="recent-details">
            <p>Ryzosens is an emerging startup based in Zimbabwe, dedicated to delivering valuable and timely informational data to its customers. To enhance the way clients access and interact with this information, they required a Progressive Web App (PWA). The solution allows users, once logged in, to seamlessly receive live, real-time data on product consumption—whether it’s water, electricity, or other essential resources—empowering them with greater insight and control.</p>
            <a href="https://ryzosens.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
        </article>
      </div>
      <div className="c">
        <article className="project">
          <h3>Gorki Network</h3>
          <img
            src={gorkiThumb}
            width={"100%"}
            alt="Gorki Network project"
            className="recent-image"
          />
          <div className="recent-details">
            <p>Gorki Network is a growing startup made up of talented software and network engineers who are dedicated to designing proposals for more secure and reliable layers within blockchain technology. To share their vision with a wider audience, they requested the creation of a landing page that not only tells the story of Layer 1 blockchain in an accessible way, but also provides direct links to their in-depth scientific white papers—bridging the gap between complex research and clear communication.</p>
            <a href="https://bigsur.network/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
        </article>
      </div>
      <div className="d">
        <article className="project">
          <h3>Container storage</h3>
          <img 
            src={lcsThumb}
            width={"100%"}
            alt="Container storage project"
            className="recent-image"
          />
          <div className="recent-details">
            <p>Liverpool Container Storage is a locally based company specialising in the hire and sale of shipping containers. With a strong focus on 20-foot and 40-foot containers as their primary offering, they approached us to design a landing page that effectively highlights these key products. The goal was to create a clear, customer-focused experience that reflects the direction of the company’s sales while making it easier for potential clients to explore options and take action.</p>
            <a href="https://liverpoolcontainerstorage.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
        </article>
      </div>
      <div className="e">
        <article className="project">
          <h3>B1nary blog</h3>
          <p>B1nary Blog is a dedicated blogging platform designed to expand upon articles first shared on popular platforms such as Reddit, LinkedIn, and Medium. The concept is simple yet impactful—offering readers the option to dive deeper into topics they care about. For those who prefer a more detailed and comprehensive read, B1nary Blog transforms shorter posts into full-length articles that provide greater context, depth, and insight.</p>
        </article>
      </div>
    </div>
  </div>
  );
};

export default Recent;
