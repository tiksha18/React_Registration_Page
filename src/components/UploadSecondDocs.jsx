import React from 'react';
import carruslogo from '../images/carrus new logo.png'; 
import "./UploadSecondDocs.css";
import { Link } from 'react-router-dom';

const UploadSecondDocs = () => {
    return (  
        <React.Fragment>
            <div className="heading-docs">
                <div className="logo-docs">
                    <img src={carruslogo} class="img-fluid" alt="..." />
                </div>
                <div className="rightpart-docs">
                    <div className = "need-help">Need Help ?</div> 
                    <button type="button" class="button-docs btn-light">Cancel ⓘ</button>
                </div>
            </div>
            <div className="upload-docs">
                <p class="h2 upload">Upload Documents</p>
                <div className="two-lines">
                <ul>
                    <li className="docs-info">The Default Document can be easily changed by you.</li>
                    <li className="docs-info">Each completed upload will be automatically saved.</li>
                </ul>
                </div>
            </div>
            <div className="proof-info">
                <p class="h2 proof">Proof Of Identity</p>
                <div className="proof-two-lines">
                    <ul class="list-unstyled">
                    <li className="docs-info">To complete your Registration, Kindly upload all the required documents -</li>
                        <ul>
                            <li className="docs-info">All Documents should be clear and not edited or blurred</li>
                            <li className="docs-info">All Documents should be up-to-date</li>
                            <li className="docs-info">Expired Documents will not be entertained</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="uploading-docs">
                <div className="upload-pan">
                    <h1 className="second-upload">Upload Pan Card</h1>
                    <div className="hero">
                        <p className="data">UPLOAD PHOTO OF FRONT SIDE OF PAN CARD</p>
                        <div className="frontside">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <form method="post" action="#" id="#">
                                            <div class="form-group files">
                                                <input type="file" class="form-control" multiple="" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>                   
                        </div>
                        <p className="data">UPLOAD PHOTO OF BACK SIDE OF PAN CARD</p>
                        <div className="backside">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <form method="post" action="#" id="#">
                                            <div class="form-group files">
                                                <input type="file" class="form-control" multiple="" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 

                <div className="upload-employee-card">
                    <h1>Employee Card</h1>
                    
                    <p className="data">UPLOAD PHOTO OF FRONT SIDE OF EMPLOYEE CARD</p>
                    <div className="frontside">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <form method="post" action="#" id="#">
                                        <div class="form-group files">
                                            <input type="file" class="form-control" multiple="" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>                   
                    </div>
                    <p className="data">UPLOAD PHOTO OF BACK SIDE OF EMPLOYEE CARD</p>
                    <div className="backside">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <form method="post" action="#" id="#">
                                        <div class="form-group files">
                                            <input type="file" class="form-control" multiple="" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
                
            </div>
            <div className="button-docs-upload">
                <button type="button" class="btn btn-outline-success btn-width " >  Submit ➜ </button>
            </div>
        </React.Fragment>
    );
}
 
export default UploadSecondDocs;