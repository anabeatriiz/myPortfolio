import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { Sobre } from './components/Sobre';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/"><Sobre /></Route>
        <Route exact path="/portfolio"><Portfolio /></Route>

      </Switch>
      
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
