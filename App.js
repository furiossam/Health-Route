import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import color from 'color';
import api from "./src/services/api";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.loginTitle}>Faça Login no sistema HealthRoutes</Text>
          <StatusBar style="auto" />
        </View>
        <Input style={styles.input}
            placeholder='Username'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
          <Input style={styles.input}
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
            color = 'black'
            size={24}
            secureTextEntry={true}
          />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeader: {
    marginTop: -600,
    paddingTop: 500,
    backgroundColor: '#237582',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    paddingTop: 60,
    fontSize: 20,
    textAlign: "center",
    margin: 50,
    color: "#FFF"
  },
  input: {
    fontSize: 20,
    color: "#FFF"
  }
});
