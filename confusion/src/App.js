import React, { Component } from 'react';
import Main from './components/MainComponent'
import Menu from './components/MenuComponent'; 
import './App.css';
import { render } from 'react-dom';
import DishDetail from './components/DishdetailComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();
class App extends Component {

  c
  render() {
    return (
      <Provider store={ store } >
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
