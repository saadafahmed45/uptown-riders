import React from 'react';
import Header from '../Header/Header';
import './SearchResult.css';

const SearchResult = () => {
    return (
        <div>
            <Header></Header>
              <div className="container">
              <div className="row">
                  <div className="col-4">
                    
                      <div className="search-input">
                          <h3>Mirpur></h3>
                          <h3>>Dhanmondi</h3>


                          <div class="card">
                            <div class="card-body">
                                This is some text within a card body.
                            </div>
                            </div>
    
                      </div>
                  </div>
                <div className="col-md-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14615.65276742805!2d90.46130403308105!3d23.679062186554347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1619132808139!5m2!1sen!2sbd" ></iframe>
                </div>

              </div>
              </div>  
        </div>
    );
};

export default SearchResult;