import React from 'react';
import { Link } from 'react-router-dom';
import './signin.css';
import carruslogo from '../images/carruslogo.png'; 
import truck from '../images/truck.png';
import email from '../images/email1.png';
import password from '../images/password1.png';


const SignIn = () => {
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
                            Welcome Back
                        </div>

                        <div className="si-all-inputs">
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={email} alt="" /> </span>
                                <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                            </div>
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={password} alt="" /> </span>
                                <input type="text" class="form-control" placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                            </div>
                        </div>
                        
                        <button type="button" class="btn btn-outline-success" >Log In</button>
                        <div className="information">
                            <div className="info">Don't have an Account ?</div>
                            <div className="sign-in"> <Link to="/">SignUp</Link>  </div>
                        </div>
                        <div className="end-part">
                            <div className="si-rights">Forgot Password ?</div>
                        </div>
                    </div>
                </div>            
            </div>
        </React.Fragment>
    );
}
 
export default SignIn;