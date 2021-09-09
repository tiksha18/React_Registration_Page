import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
import carruslogo from '../images/carruslogo.png'; 
import truck from '../images/truck.png';
import name from '../images/name1.png';
import email from '../images/email1.png';
import password from '../images/password1.png';

const Register = () => {
    return (  
        <React.Fragment>
            <div className="showcase">
                <div className="register-page">
                    <div className="left-side">
                        <div className="logo">
                            <img src={carruslogo} alt="" />
                        </div>
                        <div className="truck">
                            <img src={truck} alt="" />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="heading">
                            Create Account
                        </div>

                        <div className="all-inputs">
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={name} alt="" /> </span>
                            <input type="text" class="form-control" placeholder="name" aria-label="name" aria-describedby="addon-wrapping" />
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={email} alt="" /> </span>
                            <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={password} alt="" /> </span>
                            <input type="text" class="form-control" placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                        </div>
                        
                        </div>
                        <button type="button" class="btn btn-outline-success" > <Link to="/details">Sign Up</Link> </button>
                        <div className="information">
                            <div className="info">Already have an Account ?</div>
                            <div className="sign-in"> <Link to="/signin">Login</Link>  </div>
                        </div>
                        <div className="end-part">
                            <div className="rights">© All Rights Reserved</div>
                        </div>
                    </div>
                </div>            
            </div>
        </React.Fragment>
    );
}
 
export default Register;