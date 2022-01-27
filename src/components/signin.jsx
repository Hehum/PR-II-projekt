import React, {Component} from "react";
import { Link } from "react-router-dom";
const axios = require('axios');

class SignIn extends Component {

   state = {
       account: {
           username: "",
           password: ""
       },
       errors: {}
   };

   handleChangeRoute = () => {
      // this.props.history.push('/');
       window.location.reload();

   };

   validate = () => {
       const errors = {};

       const {account} = this.state;
       if (account.username.trim() === '') {
           errors.username = 'Podaj login!';
       }
       if (account.password.trim() === '') {
           errors.password = 'Podaj hasło!';
       }

       return Object.keys(errors).length === 0 ? null : errors;
   };

   handleSubmit = (event) => {
       event.preventDefault();

       const errors = this.validate();
       this.setState({errors: errors || {}});
       if (errors) return;

       axios({
           method: 'post',
           url: 'https://pr-movies.herokuapp.com/api/user/auth',
           data: {
               login: this.state.account.username,
               password: this.state.account.password
           }
       }).then((response) => {
           localStorage.setItem('token', response.data.token);
           this.handleChangeRoute();
       }).catch((error) => {
           const errors = {};
           errors.password = 'Podany login lub hasło są niepoprawne';
           this.setState({errors: errors || {}});
           console.log(error);
       });
   };

   handleChange = (event) => {
       const account = {...this.state.account};
       account[event.currentTarget.name] = event.currentTarget.value;
       this.setState({account});
   };

   render() {
       return (
           <div style={{
                         textAlign: 'center',
                         marginTop: "10%",
                         marginRight: '30%',
                         marginLeft: '30%',
                         backgroundColor: 'grey',}}>

               <h1>Logowanie</h1>
               <div style={{ display: 'flex',
                                justifyContent: 'center',
                                            }}>
               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label htmlFor="username">Nazwa użytkownika</label>
                       <input value={this.state.account.username}
                              name="username"
                              onChange={this.handleChange}
                              type="text"
                              className="form-control"
                              id="username"
                              aria-describedby="emailHelp"
                              placeholder="Login"/>
                       {this.state.errors.username &&
                       <div className="alert alert-danger">{this.state.errors.username}</div>}
                   </div>
                   <div className="form-group">
                       <label htmlFor="password">Hasło</label>
                       <input value={this.state.account.password}
                              name="password"
                              onChange={this.handleChange}
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Hasło"/>
                       {this.state.errors.password &&
                       <div className="alert alert-danger">{this.state.errors.password}</div>}
                   </div>

                   <button type="submit" className="btn btn-primary" >Login</button>
               </form>
                </div>
           </div>
       );
   }
}

export default SignIn;