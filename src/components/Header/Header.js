import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NetFlixLogo from "../../images/netflixlogo2.png"
const Header = () => {
  return (
    <header className="showcase">
      <div className="showcase-top">
        <img src={NetFlixLogo} alt="logo"/>
        <Link to="/" className="btn-header btn btn-rounded">
            Sign In
        </Link>
      </div>
      <div className="showcase-content">
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere, Cancel Anytime</p>

        
            <Link to="/netflix-show" className=" btn-xll">
                Watch Free For 30 Days
                <i className="fas fa-chevron-right btn-icon"></i>
            </Link>
            
           
      </div>
    </header>
  );
};

export default Header;
