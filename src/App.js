import Nav from "./Nav";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import{BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import Home from "./Home";
import Cat1 from "./Cat1";

import Adhan from "./Adhan";

function App() {
  return (
    
    <Router>
  
      <div className="App">
        <Nav/>
        
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>

          <Route exact path='/:title/:id'>
              <Cat1/>
          </Route>

          

          <Route exact path='/adhan'>
             <Adhan/>
          </Route>

        </Switch>

      </div>
  
    </Router>
  );
}

export default App;
