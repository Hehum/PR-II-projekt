import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

class Add extends Component {


    state = {
           movie: {
               title: "",
               image: "",
               content: ""
           },
           errors: {}
       };

       handleChangeRoute = () => {
          // this.props.history.push('/');
          window.location.reload();
          alert("Film został dodany");
       };

       validate = () => {
           const errors = {};

           const {movie} = this.state;
           if (movie.title.trim() === '') {
               errors.title = 'Pole tytuł jest wymagane!';
           }
           if (movie.image.trim() === '') {
               errors.image = 'Adres zdjęcia jest wymagany!';
           }
           if (movie.content.trim() === '') {
               errors.content = 'Dodaj opis!';
           }

           return Object.keys(errors).length === 0 ? null : errors;
       };

       handleSubmit = (event) => {
           event.preventDefault();

           const errors = this.validate();
           this.setState({errors: errors || {}});
           if (errors) return;

           console.log(this.state)

           axios({
               method: 'post',
               url: 'https://pr-movies.herokuapp.com/api/movies',
               data: {
                   title: this.state.movie.title,
                   image: this.state.movie.image,
                   content: this.state.movie.content
               }
           }).then((response) => {
               this.handleChangeRoute();
           }).catch((error) => {
               const errors = {};
               errors.image = 'Invalid data!';
               this.setState({errors: errors || {}});
               console.log(error);
           });
       };

       handleChange = (event) => {
           const movie = {...this.state.movie};
           movie[event.currentTarget.name] = event.currentTarget.value;
           this.setState({movie});
       };


   render() {
       return (

           <div style={{
                         textAlign: 'center',
                         marginTop: "8%",
                         marginRight: '30%',
                         marginLeft: '30%',
                         height: '100%',
                         backgroundColor: "rgba(0, 0, 0, 0.4)",


                         }}>
                         <h1>Dodaj nowy film</h1>
                <div style={{ display: 'flex',
                 justifyContent: 'center',
                             }}>

               <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       <label htmlFor="title">Tytuł</label>
                       <input value={this.state.movie.title}
                         name="title"
                         onChange={this.handleChange}
                         type="text"
                         className="form-control"
                         id="title"
                         aria-describedby="emailHelp"
                         placeholder="Tytuł"/>
                         {this.state.errors.title &&
                         <div className="alert alert-danger">{this.state.errors.title}</div>}
                   </div>


                   <div class="form-group">
                      <label for="exampleFormControlTextarea1">Opis:</label>
                      <textarea value={this.state.movie.content}
                            name="content"
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            id="content"
                            rows="8"></textarea>
                       {this.state.errors.content &&
                       <div className="alert alert-danger">{this.state.errors.content}</div>}
                    </div>

                    <div className="form-group">
                       <label htmlFor="password"  class="form-label" >Adres URL obrazu</label>
                       <input value={this.state.movie.image}
                           name="image"
                           onChange={this.handleChange}
                           type="text"
                           className="form-control"
                           id="image"
                           placeholder="URL obrazu"/>

                       {this.state.errors.image &&
                       <div className="alert alert-danger">{this.state.errors.image}</div>}
                    </div>


                   <button type="submit" className="btn btn-secondary" style={{ marginTop: '2%'}}>Dodaj film</button>

               </form>
                </div>
           </div>

    );
   }
}

export default Add;