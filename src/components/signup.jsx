import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class SignUp extends Component {


   render() {
       return (
           <div style={{
                         textAlign: 'center',
                         marginTop: "10%",
                         marginRight: '30%',
                         marginLeft: '30%',
                         backgroundColor: 'grey',


                         }}>
                         <h1>Rejestracja</h1>
                <div style={{ display: 'flex',
                 justifyContent: 'center',
                             }}>

               <form >
                   <div className="form-group">
                       <label htmlFor="username">Podaj login</label>
                       <input
                              name="username"
                              type="text"
                              className="form-control"
                              id="username"
                              aria-describedby="emailHelp"
                              placeholder="Login"/>
                                          </div>

                    <div className="form-group">
                                          <label htmlFor="username">Podaj nazwę użytkownika</label>
                                          <input
                                                 name="username"
                                                 type="text"
                                                 className="form-control"
                                                 id="username"
                                                 aria-describedby="emailHelp"
                                                 placeholder="Nazwa użytkownika"/>
                                                             </div>

                    <div className="form-group">
                                          <label htmlFor="username">Podaj email</label>
                                          <input
                                                 name="username"
                                                 type="email"
                                                 className="form-control"
                                                 id="username"
                                                 aria-describedby="emailHelp"
                                                 placeholder="Email"/>
                                                             </div>

                   <div className="form-group">
                       <label htmlFor="Password">Podaj hasło</label>
                       <input                                                                          name="password"
                                                            type="password"
                              className="form-control"
                              id="password"
                              placeholder="Hasło"/>
                                          </div>
                   <button type="submit" className="btn btn-primary">Login</button>
               </form>
                </div>
           </div>
       );
   }
}

export default SignUp;