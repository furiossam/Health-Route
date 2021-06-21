import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ButtonContained } from '../components';
import MedicineTable from "../components/MedicineTable";

export default class PatientPresentation extends Component {

    render() {
        const { data, goBack } = this.props;
        return (
            <>
            <View style={styles.containerHeader}>
                <Text style={styles.patientsTableTitle}>Detalhes do Paciente</Text>
                <Text> { "Nome: " + data.name } </Text>
                <Text> { "Rua: " + data.adress.street } </Text>
                <Text> { "Número: " + data.adress.number } </Text>
                <Text> { "Bairro: " + data.adress.district } </Text>
                <Text> { "Cidade: " + data.adress.county } </Text>
                <Text> { "Estado: " + data.adress.state } </Text>
            </View>
            
            <MedicineTable data={data} />
            <View style={styles.container}>
            <ButtonContained  onPress={() => {
                goBack(false, null);
            }}> VOLTAR </ButtonContained></View>
            </>
            
        )   
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
    patientsTableTitle: {
      paddingTop: 20,
       fontSize: 20,
       margin: 50,
    }
  });

