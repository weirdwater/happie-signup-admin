import React, { Component } from 'react';
import styles from './App.css'
import './App.css';
import base from '../base.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ListViewContainer from "./container/ListViewContainer";
import DetailViewContainer from "./container/DetailViewContainer";
import NotFound from "./NotFound"

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <main>
              <Route exact path="/" component={ListViewContainer} />
              <Route path="/:id" component={DetailViewContainer} />
            <Route/>
          </main>
      </BrowserRouter>
    );
  }
}

export default App;
