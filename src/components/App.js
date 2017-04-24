import React, { Component } from 'react';
import styles from './App.css'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import ListViewContainer from "./container/ListViewContainer";
import DetailViewContainer from "./container/DetailViewContainer";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <main className={styles.app}>
              <Route exact path="/" component={ListViewContainer} />
              <Route path="/:id" component={DetailViewContainer} />
            <Route/>
          </main>
      </BrowserRouter>
    );
  }
}

export default App;
