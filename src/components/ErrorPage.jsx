import React from 'react';
import carruslogo from '../images/carrus new logo.png'; 
import errorImg from '../images/errorImg.jpg';
import './ErrorPage.css';

 
const Error = () => { 
    return (  
        <React.Fragment>
            <div className="heading-docs">
                <div className="logo-docs">
                    <img src={carruslogo} class="img-fluid" alt="..." />
                </div>
                <div className="error-btn">
                    <button type="button" class="btn btn-outline-success errorbtn" > ←  Home </button>
                </div>
            </div>
            <div className="error-img">
                <img src={errorImg} class="img-fluid" alt="Responsive image" />
            </div>
        </React.Fragment> 
    );
}
 
export default Error;
