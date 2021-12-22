import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Add extends Component {


   render() {
       return (
           <div style={{
                         textAlign: 'center',
                         marginTop: "10%",
                         marginRight: '30%',
                         marginLeft: '30%',
                         backgroundColor: '#c4c218',


                         }}>
                         <h1>Dodaj nowy film</h1>
                <div style={{ display: 'flex',
                 justifyContent: 'center',
                             }}>

               <form >
                   <div className="form-group">
                       <label htmlFor="title">Tytuł</label>
                       <input
                              name="title"
                              type="text"
                              className="form-control"
                              id="title"
                              aria-describedby="emailHelp"
                              placeholder="Tytuł"/>
                                          </div>

                  <div className="form-group">
                                         <label htmlFor="director">Reżyser</label>
                                         <input
                                                name="director"
                                                type="text"
                                                className="form-control"
                                                id="director"
                                                aria-describedby="emailHelp"
                                                placeholder="Reżyser"/>
                                                            </div>

                  <div className="form-group">
                                         <label htmlFor="year">Rok produkcji</label>
                                         <input
                                                name="year"
                                                type="number"
                                                className="form-control"
                                                id="year"
                                                aria-describedby="emailHelp"
                                                placeholder="Rok produkcji"/>
                                                            </div>
                   <div class="form-group">
                      <label for="exampleFormControlTextarea1">Opis:</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                   <button type="submit" className="btn btn-secondary">Dodaj film</button>
               </form>
                </div>
           </div>
       );
   }
}

export default Add;