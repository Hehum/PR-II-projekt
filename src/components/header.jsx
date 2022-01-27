import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Logo from './logo';
import Search from './search';
import Login from './login';
import SignIn from './signin';
import SignUp from './signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isExpired, decodeToken  } from "react-jwt";


const Header = () => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLoggedIn = isExpired(localStorage.getItem('token'));

        return (<div style={{
            overflow: "hidden",
            position: "fixed",
            right: 0,
            top: 0,
            zIndex: 1,
            backgroundImage: "linear-gradient(120deg, #ffffff 0, #b5b5f2 50%, #586cbc 100%)",
            height: "9%",
            width: "100%",

            }
        }>

             <Logo />


             {isNotLoggedIn &&
                <Login/>
             }

             {!isNotLoggedIn &&
             <div style={{
                          float: "right",
                          marginTop: "1%",
                          marginRight: "1%"
                          }}>
                {user && <h4 style={{float: 'left', marginRight: '5px'}}>{user.name}</h4>}

                   <button type="button" class="btn btn-outline-light" style={{backgroundColor: '#90EE90' }}>    <a href="/add" aria-controls="pills-home" aria-selected="true">Dodaj film </a></button>

                   <button class="btn btn-outline-light" style={{ backgroundColor: '#9932CC'}} >    <a href="/" aria-controls="pills-home" aria-selected="true"
                   onClick={() => localStorage.removeItem('token')}>Wyloguj się </a></button></div>}


             </div>

    );
};

export default Header;
