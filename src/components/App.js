import React, { Component } from 'react';
import styles from './App.css'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import ListViewContainer from './container/ListViewContainer';
import DetailViewContainer from './container/DetailViewContainer';
import LoginPage from './presentational/LoginPage'


class App extends Component {

  constructor(props) {
    super(props)

    this.authenticate = this.authenticate.bind(this)
    this.logOut = this.logOut.bind(this)

    this.state = {
      authenticated: false
    }
  }

  authenticate() {
    this.setState({authenticated: true})
  }

  logOut() {
    window.localStorage.removeItem('uid')
    this.setState({authenticated: false})
  }

  render() {
    if (!this.state.authenticated) {
      return <LoginPage authenticate={this.authenticate} />
    }

    return (
      <BrowserRouter>
          <main className={styles.app}>
              <button onClick={this.logOut} className={styles.logout}>Uitloggen</button>
              <Route exact path="/" component={ListViewContainer} />
              <Route path="/:id" component={DetailViewContainer} />
            <Route/>
          </main>
      </BrowserRouter>
    );
  }
}

export default App;
