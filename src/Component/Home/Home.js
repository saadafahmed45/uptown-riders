import React  from 'react';
import Header from '../Header/Header';
import './Home.css'
import Bike from "../images/Frame.png";
import Car from "../images/Frame-1.png";
import Bus from "../images/Frame-2.png";
import Train from "../images/Group.png";
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';

const Home = () => {
  // const {id} = useParams();
  




 const handleChange = () => {
     console.log('this click');

     
 }

    return (
        <div className="home_sec">
          <Header></Header>
            <div className="container">
              <div className="row">
              
                <div className="col-md-3">
                  <div className="box">
                  <Link to="/search"   onClick={handleChange}>
                  <img src={Bike} alt=""/>
                  <h2>Bike</h2>
                  </Link>
                 </div>
              </div>

                <div className="col-md-3">
                  <div className="box">
                  <Link to="/search"   onClick={handleChange}>
                  <img  src={Car}  alt=""/>
                  <h2>Car</h2>
                  </Link>
               </div>
            </div>

                <div className="col-md-3">
                  <div className="box">
                  <Link to="/search"   onClick={handleChange}>
                  <img src={Bus} alt=""/>
                  <h2>bus</h2>
                  </Link>
               </div>
            </div>

                <div className="col-md-3">
                  <div className="box">
                  <Link to="/search"   onClick={handleChange}>
                  <img src={Train} alt=""/>
                  <h2>Train</h2>
                  </Link>
               </div>
             </div>

              </div>

             
            </div>
            <footer >
                <h4> Copyright © 2021 Saad-Af Ahmed</h4>
              </footer>
        </div>
    );
};

export default Home;