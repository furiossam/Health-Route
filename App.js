import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.loginTitle}>Faça Login no sistema HealthRoutes</Text>
          <StatusBar style="auto" />
        </View>
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
    paddingTop: 20,
    backgroundColor: '#237582',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 50,
    color: "#FFF"
  }
});
