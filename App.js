import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonContained, Input } from "./src/components";
import api from "./src/services/api";
import { FormHolder } from "./src/FormConfig";
import Login from "./src/pages/Login";

export default class App extends Component {

  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false
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

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Text>LOGOU!</Text>
      )
    } else {
      return (
        <Login 
        setLoggedIn={this.setLoggedIn}
        />
      );
    }
    
  }
  
}
