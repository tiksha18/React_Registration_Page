import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';


const Register = () => {
    return (  
        <div className="register-page">
            <div className="left-side">
                <div className="logo">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQFlWIppryLKPA/company-logo_200_200/0/1608472694283?e=2159024400&v=beta&t=1CoQkNn9-h1zWLPreZiRplZHrZX_9mnVsZXpKwCN5uk" alt="" />
                </div>
                <div className="truck-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQq85SkwQ9T03tboq7AanKQ3pgT18L3hcvakkkJ_l5VL57Un97tEXW8LJCQS4HjkfF0E0&usqp=CAU" alt="" />
                </div>
            </div>
            <div className="right-side">
                <div className="heading">
                    Create Account
                </div>
                <div className="create-account">
                   
                    <div className="name-field field" >
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="email-field field">
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="card-field field">
                        <input type="text" placeholder="Aadhar/PanCard" />
                    </div>
                    <div className="password-field field">
                        <input type="text" placeholder="Password" />
                    </div>
                </div>
                <button className="button">SignUp</button>
                <div className="info">Already have an Account ?</div>
                <div className="sign-in"> <Link to="/signin">SignIn</Link>  </div>
            </div>
        </div>
    );
}
 
export default Register;