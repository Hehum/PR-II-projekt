import React, { Component } from 'react';
import Logo from './logo';
import Search from './search';
import Login from './login';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {

    state = { };
    render(){
        return <div style={{
            overflow: "hidden",
            position: "fixed",
            right: 0,
            top: 0,
            zIndex: 1,
            backgroundImage: "linear-gradient(120deg, #ffffff 0, #b5b5f2 50%, #586cbc 100%)",
            height: "9%",
            width: "100%",

            }
        }> <Logo />
           <Search />
           <Login /> </div>

    }
}

export default Header;
