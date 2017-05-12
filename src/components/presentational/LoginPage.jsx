import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoginPage.css'
import base from '../../base'

class LoginPage extends React.Component {

  constructor(props) {
    super(props)

    this.authHandler = this.authHandler.bind(this)
    this.handleLoginButton = this.handleLoginButton.bind(this)
    this.userIsPrivileged = this.userIsPrivileged.bind(this)

    this.state = {
      authenticating: false,
      showNotPrivileged: false,
      error: false,
      adminMail: 'arjo@weirdwater.net',
      uid: ''
    }

    this.privilegedUsers = [
      'HzLGQFfoy0PlbjCiTOntAv4VCNS2',
      'hiaJTpy2QgPU7ntdeNhCyjtBE383'
    ]
  }

  componentWillMount() {
    const uid = window.localStorage.getItem('uid')
    if(uid !== null) {
      if (this.userIsPrivileged(uid)) {
        this.props.authenticate();
      }
      else {
        this.setState({uid})
      }
    }
  }

  userIsPrivileged(uid) {
    return this.privilegedUsers.filter(privUid => privUid === uid).length === 1
  }

  authHandler(error, user) {
    const nextState = {authenticating: false}

    if (error) {
      console.debug(error)
      nextState.error = error
    }
    else {
      const uid = user.user.uid
      nextState.uid = uid

      if (this.userIsPrivileged(uid)) {
        window.localStorage.setItem('uid', uid)
        this.props.authenticate()
        return
      }
      else {
        nextState.showNotPrivileged = true
      }
    }

    this.setState(nextState)
  }

  handleLoginButton(event) {
    const provider = event.target.name
    base.authWithOAuthPopup(provider, this.authHandler)
    this.setState({authenticating: true})
  }

  render() {
    return (
      <section className={styles.container} >
        <h1>Log in</h1>
        <button className={styles.facebook} name="facebook" onClick={this.handleLoginButton}>Log in with Facebook</button>
        <button className={styles.google} name="google" onClick={this.handleLoginButton}>Log in with Google</button>
        {this.state.showNotPrivileged ? <p className={styles.message} >Je hebt geen bevoegdheid deze pagina te bekijken. Heb je dat wel nodig? Stuur dan een <a href={`mailto:${this.state.adminMail}?subject=Happy%20Signup%20Admin%20access%20request&body=User%20id:%20${this.state.uid}`}>mailtje</a>.</p> : ''}
        {this.state.error ? <p className={styles.error} ><strong>Oops!</strong> Er is iets fout gegaan met het inloggen, probeer het later nog eens. Stuur een <a href={`mailto:${this.state.adminMail}?subject=Happy%20Signup%20Admin%20login%20bug%20report&body=${this.state.error}`}>mailtje</a> als dit vaker gebeurt.</p> : ''}
      </section>
    )
  }
}

LoginPage.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default LoginPage