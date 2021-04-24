import React from 'react';
import "./Header.css"
import { Navbar,Nav,Button ,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../images/Urban Riders.png"
const Header = () => {
    return (
        <div className="container">
  
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href=""> <Link to="/home"><h2>Uptown Riders</h2></Link></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <Link to="/home">Home</Link>


          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
      <Link to="/destination">Destination</Link>

          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" >
      <Link to="/blog">Blog</Link>

          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link " href="#" >
          <Link to="/Contact">Contact</Link>


          </a>
        </li>
      </ul>
      <form class="d-flex">
      <Link to="/login">
       <button className="login-btn">Login</button>
      </Link>
      </form>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;