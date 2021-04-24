import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Component/Login/Login';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound.js/NotFound';
import Destination from './Component/Destination/Destination';
import Blog from './Component/Blog/Blog';
import Bike from './Component/Bike/Bike';
import Header from './Component/Header/Header';
import DataLoaded from './Component/DataLoaded/DataLoaded';
import Search from './Component/Search/Search';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import SearchResult from './Component/SearchResult/SearchResult';

export const UserContext = createContext();



function App() {

 const [loginUser,setLoginUser] = useState({});

  return (
    <UserContext.Provider value={[loginUser,setLoginUser]}>

    <div className="App">
      <div className="main-section"
        >
      <Router>

        <Switch>
          <Route exact path="/">
         <Home></Home>

          </Route>

          <Route path="/home">
         <Home></Home>
          </Route>

     {/* home */}

          <PrivateRoute path="/search">
              <Search></Search>
          </PrivateRoute>
      

          <PrivateRoute path="/destination">
             <Destination></Destination>
          </PrivateRoute>
 

          <PrivateRoute path="/blog">
             <Blog></Blog>
          </PrivateRoute>

          <Route path="/contact">
           <Contact></Contact>
          </Route>

          <Route path="/login"> 
            <Login></Login>
          </Route>
          

          <Route path="/searchResult">
           <SearchResult></SearchResult>
          </Route>
          
          <Route path="*">
         <NotFound></NotFound>
          </Route>

          
        </Switch>
    </Router>
      </div>
    
    </div>
    </UserContext.Provider>
  );
}

export default App;
