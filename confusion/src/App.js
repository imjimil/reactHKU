import React, { Component } from 'react';
import Main from './components/MainComponent'
import Menu from './components/MenuComponent'; 
import './App.css';
import { render } from 'react-dom';
import DishDetail from './components/DishdetailComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
