import React from 'react';
import carruslogo from '../images/carruslogo.png'; 
import truck from '../images/truck.png';
import './Details.css';
import aadharcard from '../images/aadhar.png';
import pancard from '../images/pancard.png';
import employeeID from '../images/employeeID.png';



const Details = () => {
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
                            Additional Information
                        </div>

                        <div className="all-inputs">
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={aadharcard} alt="" /> </span>
                            <input type="text" class="form-control" placeholder="aadhar-number" aria-label="aadhar-number" aria-describedby="addon-wrapping" />
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={pancard} alt="" /> </span>
                            <input type="text" class="form-control" placeholder="pan-card-number" aria-label="pan-card-number" aria-describedby="addon-wrapping" />
                        </div>
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping" >  <img className="input-img" src={employeeID} alt="" /> </span>
                            <input type="text" class="form-control" placeholder="Employee-ID" aria-label="Employee-ID" aria-describedby="addon-wrapping" />
                        </div>
                        
                        </div>
                        
                        <button type="button" class="btn btn-outline-success" > Next </button>
                        
                        <div className="end-part">
                            <div className="rights">© All Rights Reserved</div>
                        </div>
                    </div>
                </div>            
            </div>
        </React.Fragment>
    );
}
 
export default Details;