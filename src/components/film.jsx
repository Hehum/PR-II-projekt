import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wp from './wp.jpg';


class Film extends Component {

    state = { };
    render(){
        return <div style={{
                       float: "left",
                       width: "20.5%",

                       marginTop: "10%",
                       marginLeft: "5%",
                       marginRight: "5%",
                       marginBottom: "5%",
                       border: "5px dashed black",

                       }}>
                <div>
           <div class="card" style={{width: "18rem"}}>
             <img class="card-img-top" src={wp} alt="Card image cap"/>
             <div class="card-body">
               <h5 class="card-title">Władca Pierścieni: Drużyna Pierścienia</h5>
               <p class="card-text">Podróż hobbita z Shire i jego ośmiu towarzyszy, której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona.</p>
               <a href="#" class="btn btn-info" style={{ float: "right"}}>Zobacz więcej</a>
             </div>
           </div>
</div>

        </div>


    }
}

export default Film;
