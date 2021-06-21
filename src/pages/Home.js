import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePresentation from './HomePresentation';
import RoutePresentation from './RoutePresentation';


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

      goBackToHome = () => {
        this.setState({
          routeEntered : false,
          routeData: null
        })
      }

    render() {
        
        if(this.state.routeEntered){
            return (
            <RoutePresentation 
            data={this.state.routeData} 
            goBackToHome={this.goBackToHome}
            />
            );
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