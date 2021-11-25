import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {

    state = { };
    render(){
        return <div style={{
        position: "fixed",
        width: "100%",
        textAlign: "center",
        bottom: "0",


        }}>
        <p>Jarosław Kotowicz - Filmoteka© </p>

        </div>

    }
}

export default Footer;
