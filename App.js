import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonContained, Input } from "./src/components";
import api from "./src/services/api";
import { FormHolder } from "./src/FormConfig";

export default class App extends Component {

  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Text>LOGOU!</Text>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Text style={styles.loginTitle}>Faça Login no sistema HealthRoutes</Text>
            <StatusBar style="auto" />
          </View>
          <FormHolder
          onSubmit={(data) => {
            console.log("ON SUBMIT: ", data);
            let success = api.login(data);
            this.setState({
              isLoggedIn: success
            })
          }}>
            <Input style={styles.input}
            name="username"
            inputLabel="Usuário"
            />
            <Input
            name="password"
            inputLabel="Senha"
            />
            <ButtonContained type="submit"> LOGAR </ButtonContained>
            {}
            </FormHolder>
        </View>
      );
    }
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#237582',
  },
  containerHeader: {
    paddingTop: 10,
    backgroundColor: '#237582',
  },
  loginTitle: {
    paddingTop: 60,
     fontSize: 20,
     margin: 50,
  }
});
