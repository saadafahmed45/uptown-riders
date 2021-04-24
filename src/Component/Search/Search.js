import React from 'react';
import './Search.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <>
        <Header></Header>
          <div className="container">
              <div className="row">
                  <div className="col-4">
                    
                      <div className="search-input">
                          <form>
                          <label for="exampleDataList" class="form-label">Pick From</label>
                          <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
                          <datalist id="datalistOptions">
                            <option value="San Francisco"></option>
                            <option value="New York"></option>
                            <option value="Seattle"></option>
                            <option value="Los Angeles"></option>
                            <option value="Chicago"></option>
                            </datalist>


                          <label for="exampleDataList" class="form-label">Pick to</label>
                          <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."></input>
                          
                            <Link to="/searchResult">
                            <button class="btn btn-primary mb-3 mt-2">
                            Search

                            </button>

                            </Link>

                          </form>
                      </div>
                  </div>
                <div className="col-md-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14615.65276742805!2d90.46130403308105!3d23.679062186554347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1619132808139!5m2!1sen!2sbd" ></iframe>
                </div>

              </div>
              <footer >
                <h4> Copyright © 2021 Saad-Af Ahmed</h4>
              </footer>
              </div>  
        </>
    );
};

export default Search;