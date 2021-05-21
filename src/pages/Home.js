import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePresentation from './HomePresentation';


export default class Home extends Component {

    constructor(props) {
        super();
        this.state = {
          routeEntered : false,
          routeData: null
        }
      }

      setrouteEntered = (success, routeData) => {
        if (!success) {
          alert("Dados Inválidos!");
        }
        this.setState({
            routeEntered: success,
            routeData: routeData
        })
      }

    render() {
        console.log("HOME DATA: ", this.state);
        if(this.state.routeEntered){
            return (<Text> Rota Gerada </Text>);
        }

        return (
            <HomePresentation
            setrouteEntered={this.setrouteEntered}/>
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