import React from 'react';   // type imr
import "./header.css";
import { Link } from 'react-router-dom';

// type sfc
const Header = () => {
    return ( 
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src="https://carrusmobility.com/wp-content/uploads/2021/01/Carrus-final-wing-logo-512.png" alt="" />
                </Link>
            </div>
            <div className="header-links">
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register">
                            <button className="btn">Register</button>
                        </Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                    <li> <Link to="/help"> Need Help ? </Link> </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Header;