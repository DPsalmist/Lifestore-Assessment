import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import DisplayProducts from './components/mainContent'


export class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
          <Header />
          <DisplayProducts />
          <Footer />
        </Router>
      </div>
    ); 
  }
  
}

export default App;