import React from "react";

import "./header.css";


const ComponentHeaderImages: React.FC = () =>

    <div className="holder">

        <div className="left">
            <img src={require('../../images/nc_logo.jpg')} />
        </div>

        <div className="right">
            <img src={require('../../images/tr_logo.jpg')} />
        </div>

    </div>


export default ComponentHeaderImages;