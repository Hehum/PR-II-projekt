import React, { Component } from 'react';
import { Link } from "react-router-dom";
import zdj from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


class Logo extends Component {

    state = { };
    render(){
        return <div style={{float: "left"}}>
        <Link to="/"  id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                 aria-controls="pills-home" aria-selected="true"><img src={zdj} height="72px" /></Link>
        </div>

    }
}

export default Logo;
