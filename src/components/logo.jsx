import React, { Component } from 'react';
import zdj from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


class Logo extends Component {

    state = { };
    render(){
        return <div style={{float: "left"}}>
        <img src={zdj} height="68.5px" />

        </div>

    }
}

export default Logo;
