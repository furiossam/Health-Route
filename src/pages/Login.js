import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonContained, Input } from "../components";
import api from "../services/api";
import { FormHolder } from "../FormConfig";


export default class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.containerHeader}>
                <Text style={styles.loginTitle}>Faça Login no sistema HealthRoutes</Text>
                <StatusBar style="auto" />
              </View>
              <FormHolder
              onSubmit={(data) => {
                console.log("ON SUBMIT: ", data);
                api.login(data, this.props.setLoggedIn);
                console.log("ON SUBMIT finish: ", data);
                
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