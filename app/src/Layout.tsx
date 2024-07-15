import "./style/header.css";
import { Link } from "react-router-dom";
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
} //fail maybe?

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // <div id="home-header-container">
    //   <img alt="ic_home_top" src={require(".s/../assets/img/banner.png")} />
    //   <div className="info-card user-info-card">
    //     <span>Welcome to EMAS.</span>
    //   </div>
    // </div>
    // <div className="backgroundimage">
    <div>
    <header className="header">
        <div className="logo">
            <h1>Br<span className="white">u</span><span className="black">n</span>ei<span className="white">.</span></h1>
        </div>
        <ul className="stuff">
            <li className="item"><Link to="/ResL">Reservation</Link></li>
            <li className="item"><a href="#things">Things To Do</a></li>
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
