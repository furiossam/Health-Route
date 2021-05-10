import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonContained, Input } from "./src/components";
import api from "./src/services/api";
import { FormHolder } from "./src/FormConfig";

export default class App extends Component {

  render() {
    if (api.isLoggedIn) {
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
            api.test(data);
          }}>
            <Input
            name="username"
            inputLabel="Usuário"
            />
            <Input
            name="password"
            inputLabel="Senha"
            />
            <ButtonContained type="submit"> LOGAR </ButtonContained>
            {/* <Input 
            style={styles.input}
                name='username'
                placeholder='Username'
                required={true}
                leftIcon={
                  <Icon
                    name='user'
                    size={24}
                    color='black'
                  />
                }
              />
              <Input 
              style={styles.input}
                name='password'
                placeholder='Password'
                required={true}
                leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                color = 'black'
                size={24}
                secureTextEntry={true}
              />
  
              <Button type="submit" title={"REALIZAR LOGIN"} />  */}
            </FormHolder>
        </View>
      );
    }
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#333',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerHeader: {
    // marginTop: -600,
    // paddingTop: 200,
    // backgroundColor: '#237582',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  loginTitle: {
    // paddingTop: 60,
    // fontSize: 20,
    // textAlign: "center",
    // margin: 50,
    // color: "#FFF"
  },
  input: {
    // fontSize: 20,
    // color: "#FFF"
  },
  button: {
    // height: 200,
    // width: 200,
    // backgroundColor: "#FFFFFF"
  }
});
