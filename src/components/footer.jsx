import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {

    state = { };
    render(){
        return <div style={{
        overflow: "hidden",
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: '3%',
        textAlign: "center",
        bottom: "0",
        backgroundColor: 'rgb(64,64,64)',



        }}>

        <p style={{ color: 'white' }}>Jarosław Kotowicz - Filmoteka© </p></div>



    }
}

export default Footer;
