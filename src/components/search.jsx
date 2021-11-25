import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Search extends Component {

    state = { };
    render(){
        return <div style={{

        float: "left",
        marginTop: "1%",
        marginLeft: "20%",

        }}>

            <div class="input-group col-md-4">
                  <input class="form-control py-2" type="search"  id="example-search-input"/>
                  <span class="input-group-append">
                   <button type="button" class="btn btn-primary">
                        Szukaj
                    </button>
                  </span>
            </div>



          </div>


    }
}


export default Search;
