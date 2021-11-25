import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends Component {

    state = { };
    render(){
        return <div style={{
                       float: "right",
                       marginTop: "1%",
                       }}>
                <button type="button" class="btn btn-success">Zaloguj się</button>
                <button type="button" class="btn btn-warning">Zarejestruj się</button>

        </div>

    }
}

export default Login;
