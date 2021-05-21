import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonContained, Input } from "../components";
import api from "../services/api";
import { FormHolder } from "../FormConfig";


export default class HomePresentation extends Component {


    render() {
        return (
            <View style={styles.container}>
              <View style={styles.containerHeader}>
                <Text style={styles.HomeTitle}>Entre com os Inputs para o cálculo da rota de hoje!</Text>
                <StatusBar style="auto" />
              </View>
              <FormHolder
              onSubmit={(data) => {
                console.log("ON SUBMIT: ", data);
                api.routeGenerated(data.vCapacity,data.timeWindow, this.props.setrouteEntered);
                console.log("ON SUBMIT finish: ", data);
                
              }}>
                <Input style={styles.input}
                name="timeWindow"
                inputLabel="Tempo de Rota (em minutos) "
                />
                <Input
                name="vCapacity"
                inputLabel="Capacidade do veículo"
                />
                <ButtonContained type="submit"> Gerar Rota! </ButtonContained>
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
    HomeTitle: {
      paddingTop: 60,
       fontSize: 20,
       margin: 50,
    }
  });