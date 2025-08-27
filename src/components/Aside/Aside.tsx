import React
 from "react";
 import "./aside.css"
 

const Aside: React.FC = () => {
  return (
    <aside className="aside">
        <ul>
            <li>
              <a 
              href="https://github.com/githubjack"
              title="GitHub Profile" 
              target="_blank" 
              rel="noopener noreferrer">
                <i className="pi pi-github" style={{ fontSize: '1.2rem', color: 'var(--base-text)' }}></i>
              </a>
            </li>
            <li>
              <a 
              href="https://www.linkedin.com/in/jack-maynard-a0538b83/" 
              title="LinkedIn Profile"
              target="_blank" 
              rel="noopener noreferrer">
                <i className="pi pi-linkedin" style={{ fontSize: '1.2rem', color: 'var(--base-text)' }}></i>
              </a>
            </li>
        </ul>
    </aside>
  );
};

export default Aside;
