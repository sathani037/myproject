import React, { Component } from 'react';
import './App.css'
import { Container } from 'semantic-ui-react';
// import Login from './login.js'
// import SignUp from './signup.js'
import Login2 from './login2.js'

class App extends Component {

  render() {
    return (
      <Container>
        {/* <Login />
        <br />
        <SignUp /> */}
        <Login2 />

      </Container>
    )
  }
}

export default App;
