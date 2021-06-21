import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonContained, Input } from "../components";
import api from "../services/api";
import { FormHolder } from "../FormConfig";
import InputPassword from '../components/InputPassword';


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
                api.login(data, this.props.setLoggedIn);
                
              }}>
                <Input style={styles.input}
                name="username"
                inputLabel="Usuário"
                keyboardType="numeric"
                />
                <InputPassword
                name="password"
                inputLabel="Senha"
                />
                <ButtonContained type="submit"> LOGAR </ButtonContained>
                {}
                </FormHolder>
                <ButtonContained onPress={() => {this.props.setRegister(true)}} > REGISTRAR </ButtonContained>
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