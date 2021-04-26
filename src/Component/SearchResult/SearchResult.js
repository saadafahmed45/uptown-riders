import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './SearchResult.css';
import Bike from "../images/Frame-1.png";
import People from "../images/peopleicon.png";

const SearchResult = () => {

    const {productId}= useParams();
    const [product,SetProduct]= useState({})

 useEffect(() => {
    
        const url = `https://jsonplaceholder.typicode.com/users/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then (data => SetProduct(data));
       
       },[])

    return (
        <div>
            <Header></Header>
              <div className="container">
              <div className="row">
                  <div className="col-4">
                    
                      <div className="search-input">
                          <div className="search-name">
                          <h4>*Dhaka</h4>
                          <h4>*India</h4>
                          </div>


                          <div class="card">
                           <div className="row">
                              <div className="col-md-3">
                                <img src={Bike} alt=""/>
                              </div>
                              <div className="col-md-3">
                                <h5>car</h5>
                              </div>
                              <div className="col-md-3">
                              <img src={People} alt=""/>
                              <p>4</p>
                              </div>
                              <div className="col-md-3">
                                <h5>$59</h5>
                              </div>
                              </div>

                              <div className="row">
                              <div className="col-md-3">
                                <img src={Bike} alt=""/>
                              </div>
                              <div className="col-md-3">
                                <h5>car</h5>
                              </div>
                              <div className="col-md-3">
                              <img src={People} alt=""/>
                              <p>4</p>
                              </div>
                              <div className="col-md-3">
                                <h5>$59</h5>
                              </div>
                              </div>


                              <div className="row">
                              <div className="col-md-3">
                                <img src={Bike} alt=""/>
                              </div>
                              <div className="col-md-3">
                                <h5>car</h5>
                              </div>
                              <div className="col-md-3">
                              <img src={People} alt=""/>
                              <p>4</p>
                              </div>
                              <div className="col-md-3">
                                <h5>$59</h5>
                              </div>
                              </div>

                              <div className="row">
                              <div className="col-md-3">
                                <img src={Bike} alt=""/>
                              </div>
                              <div className="col-md-3">
                                <h5>car</h5>
                              </div>
                              <div className="col-md-3">
                              <img src={People} alt=""/>
                              <p>4</p>
                              </div>
                              <div className="col-md-3">
                                <h5>$59</h5>
                              </div>
                              </div>
                                        </div>
    
                      </div>
                  </div>
                <div className="col-md-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14615.65276742805!2d90.46130403308105!3d23.679062186554347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1619132808139!5m2!1sen!2sbd" ></iframe>
                </div>

              </div>
              </div>  
              <footer >
                <h4> Copyright © 2021 Saad-Af Ahmed</h4>
              </footer>
        </div>
    );
};

export default SearchResult;