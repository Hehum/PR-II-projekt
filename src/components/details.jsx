import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class Details extends Component {


    constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                movie: []

            };
        }

        state = {};

    componentDidMount() {

     const id = window.location.pathname;

            fetch("https://pr-movies.herokuapp.com/api/movies/" + id.substring(9))
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            movie: result
                        });
                        console.log(result)
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }

      render(){
             return <div style={{float: "left",
             marginTop: '5%',
             marginLeft: '5%',
             marginRight: '5%',
             marginBottom: '2%',
             width: '86%',
             possision: 'fixed'

             }}>
                 <div style={{float: "left",}}>
                     <img src={this.state.movie.image}  style={{float: "left",
                                                                 height: '50%',
                                                                 width: '50%'}}/>
                     <div style={{
                            float: "left",
                           marginLeft: '10px',
                           width: '49%',

                     }}>

                     <h2  > {this.state.movie.title}</h2>

                     <h5> Opis:</h5>
                     <p >{this.state.movie.content}</p>

                     </div>
                     </div>
                 </div>


         }
}

export default Details;
