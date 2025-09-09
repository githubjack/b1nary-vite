import React from "react";
import "./recent.css";
import muayThumb from "../../assets/images/thumbs/muay-thumb.png";
import lcsThumb from "../../assets/images/thumbs/lcs-thumb.png";


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
            <p>Description of Project 1</p>
            <a href="https://muayinternational.org/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
       
        </article>
      </div>
      <div className="b">
        <article className="project">
          <h3>Ryzosens</h3>
          <p>Description of Project 2</p>
        </article>
      </div>
      <div className="c">
        <article className="project">
          <h3>Gorki Network</h3>
          <p>Description of Project 3</p>
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
            <p>Description of Project 4</p>
            <a href="https://liverpoolcontainerstorage.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
          </div>
        </article>
      </div>
      <div className="e">
        <article className="project">
          <h3>B1nary blog</h3>
          <p>Description of Project 5</p>
        </article>
      </div>
    </div>
  </div>
  );
};

export default Recent;
