import React from 'react';
import { Link } from 'react-router-dom';
import './signin.css';


const SignIn = () => {
    return (  
        <div className="register-page">
            
            <div className="right-side">
                <div className="heading">
                    Sign In
                </div>
                <div className="si-create-account">
                    <div className="email-field sifield">
                        <input type="text" placeholder="Email" />
                    </div>
                    
                    <div className="password-field sifield">
                        <input type="text" placeholder="Password" />
                    </div>
                </div>
                <button className="button">SignIn</button>
                <div className="info">Don't have an Account ?</div>
                <div className="register"> <Link to="/register">SignUp</Link>  </div>
            </div>
            <div className="left-side">
                <div className="logo">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFlWIppryLKPA/company-logo_200_200/0/1608472694283?e=2159024400&v=beta&t=1CoQkNn9-h1zWLPreZiRplZHrZX_9mnVsZXpKwCN5uk" alt="" />
                </div>
                <div className="si-truck-image">
                    <img src="https://cdn5.vectorstock.com/i/thumb-large/64/19/green-truck-isolated-icon-eco-fuel-electric-van-vector-30036419.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;