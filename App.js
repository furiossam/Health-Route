import React, { Component } from 'react';
import {  Text } from 'react-native';
import Login from "./src/pages/Login";
import UserSubmit from './src/pages/UserSubmit';

export default class App extends Component {

  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
      register: false
    }
  }

  setLoggedIn = (success) => {
    if (!success) {
      alert("Usuário ou Senha Inválido!");
    }
    this.setState({
      isLoggedIn: success
    })
  }

  setRegister = (success) => {
    console.log("register", success);
    this.setState({
      register: success
    })
  }

  render() {
    console.log("RENDER APP: ", this.state);
    if (this.state.register) {
      return (
        <UserSubmit
        setRegister={this.setRegister}
        />
      );
    }

    if (this.state.isLoggedIn) {
      return (
        <Text>LOGOU!</Text>
      )
    } else {
      return (
        <Login 
        setLoggedIn={this.setLoggedIn}
        setRegister={this.setRegister}
        />
      );
    }
    
  }
  
}
