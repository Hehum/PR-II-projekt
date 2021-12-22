import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import wp from './wp.jpg';

class Film extends Component {

    state = { };
    render(){
        return <div style={{
                       float: "right",
                       width: "20.5%",
                       marginTop: "10%",
                       marginLeft: "5%",
                       marginRight: "7%",
                       marginBottom: "5%",
                       border: "5px dashed black",

                       }}>
                <div>
           <div class="card" style={{width: "100%"}}>
             <img class="card-img-top" src={wp} alt="Card image cap"/>
             <div class="card-body">
               <h5 class="card-title">Władca Pierścieni: Drużyna Pierścienia</h5>
               <p class="card-text">Podróż hobbita z Shire i jego ośmiu towarzyszy,
               której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona.</p>

             <Link to="details"  class="btn btn-info" style={{ float: "left"}} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                              aria-controls="pills-home" aria-selected="true">Zobacz więcej</Link>

             </div>
           </div>
</div>

        </div>


    }
}

export default Film;
