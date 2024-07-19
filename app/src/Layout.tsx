import "./style/header.css";
import { Link } from "react-router-dom";
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    const header = document.getElementById("header");
    if (header) {
      if (currentScrollPos > 200) {
        header.style.top = "-50px";
      } else {
        header.style.top = "0px";
      }
    }
  }

  return (
    <div>
      <header id="header" className="header">
          <div className="logo">
              <h1>Br<span className="white">u</span><span className="black">n</span>ei<span className="white">.</span></h1>
          </div>
          <ul className="stuff">
              <li className="item"><Link to="/ResL">Reservation</Link></li>
              <li className="item"><Link to="/Destinations">Things To Do</Link></li>
              <li className="item"><a href="#about">About Brunei</a></li>
          </ul>
      </header>
      <main>
          {children}
      </main>
    </div>
  );
}

export default Layout;
