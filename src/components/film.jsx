import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Film = ( props ) => {

   const { items } = props;

   return (

       <div >
                       <div style={{
                                                          width: "100%",
                                                          marginTop: "1%",
                                                          marginLeft: "5%",
                                                          marginRight: "7%",
                                                          marginBottom: "5%",
                                                          display: "flex",
                                                          flex: 1,
                                                          flexDirection: "row",
                                                          flexWrap: "wrap"

                                                          }}>
                        {items.map((item, key) =>
                                         (
                  <div class="card" style={{width: "20.5%",
                                            border: "5px dashed black",
                                            marginRight: "5%",
                                            marginLeft: "5%",
                                            marginBottom: "5%"}}>

                    <img class="card-img-top" src={item.image} alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">{item.content}</p>

                    <Link to={"details/"+item.id}  class="btn btn-info" style={{ float: "left"}} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                                     aria-controls="pills-home" aria-selected="true">Zobacz więcej</Link>


                    </div>
                  </div>))}
                    </div>

               </div>
)


};


export default Film;
