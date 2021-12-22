import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class Login extends Component {

    state = { };
    render(){
        return <div style={{
                       float: "right",
                       marginTop: "1%",
                       }}>
                     <Link to="/signin"  id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" ><button type="button" class="btn btn-success">Zaloguj się</button></Link>

                      <Link to="/signup"  id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                                                              aria-controls="pills-home" aria-selected="true"><button type="button" class="btn btn-warning">Zarejestruj się</button></Link>



        </div>

    }
}

export default Login;
