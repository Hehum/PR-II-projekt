import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Film from './film';


class Films extends Component {

constructor(props) {
       super(props);
       this.state = {
           error: null,
           isLoaded: false,
           items: []
       };
   }

   componentDidMount() {
       fetch("https://pr-movies.herokuapp.com/api/movies")
           .then(res => res.json())
           .then(
               (result) => {
                   this.setState({
                       isLoaded: true,
                       items: result
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

   render() {

   const { items } = this.state;

          if (!items.length) {
              return <p>Brak wpisów</p>
          }


       return ( <div style={{
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            display: "flex",
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            top: "9%",
                            padding: 70,
                            paddingTop: 110,
                            paddingBottom: 110,
                            flexWrap: "wrap",
                            flexDirection: "row",
                            position: "fixed",
                            overflow: "scroll",
                            justifyContent: "space-evenly",
                            rowGap: 50,
                            }}>
                   <Film items={items} /></div>)
   }
}

export default Films;
