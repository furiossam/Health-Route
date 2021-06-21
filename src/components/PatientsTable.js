import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, CheckBox, Button  } from 'react-native';
import { DataTable } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonContained } from '.';
import api from '../services/api';

export default class PatientsTable extends Component {

  constructor(props) {
    super();
    let arrayOfPatients = [];
    for (let i=0; i<props.data.length; i++) {
      arrayOfPatients.push({
        ...props.data[i],
        check: false,
        setCheck: () => {
          arrayOfPatients[i].check = !arrayOfPatients[i].check;
          this.setState(arrayOfPatients);
        }
      })
    }
    this.state = {
      data: arrayOfPatients
    }
  }

render() {
  const {goToDetails, goBackToHome} = this.props;
  const {data = []} = this.state;


  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.loginTitle}>Rota de Entregas</Text>
        <StatusBar style="auto" />
      </View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title >Endereço</DataTable.Title>
        <DataTable.Title style={{paddingLeft:100}}>Informações</DataTable.Title>
        <DataTable.Title >Entregue?</DataTable.Title>
      </DataTable.Header>

      {data.map( (item, index)  => {

        if (index == 0 || index == data.length - 1) {
          return (<></>);
        }

        return (
          
          <DataTable.Row>
            
              <DataTable.Cell>{item.name}</DataTable.Cell>   
              
              <ScrollView horizontal style={styles.address}>
              <DataTable.Cell>{ item.adress.street + "," + item.adress.number + "," + item.adress.district + "," + item.adress.county + "," + item.adress.state }</DataTable.Cell>
              </ScrollView>
              <DataTable.Cell style={{paddingLeft:5}}> 
                <ButtonContained style={{backgroundColor:'#237582'}} onPress={() => {
                  goToDetails(true, item);
                  }}> 
                  <MaterialCommunityIcons
                            name={"alert-circle"}
                            size={40}
                            color='#FFFFFF'       
                        />
                </ButtonContained> 
              </DataTable.Cell> 
              <DataTable.Cell>
                <CheckBox 
                value={item.check}
                onValueChange={() => {item.setCheck()}}
                />
              </DataTable.Cell>   
          </DataTable.Row>  
        );
      })}
    </DataTable>
    <ButtonContained onPress={() => {
      let patientIds = [];
      for (let i=0; i<data.length; i++) {
        if (data[i].check) {
          patientIds.push(data[i].id_patient);
        }
      }
      console.log("ANTES DE ENVIAR OS PACIENTES: ", patientIds);
      let success = api.deliverMedicines(patientIds);
        if (success) {
          goBackToHome();
          alert("Entregas concluidas");
        }
    }}> Finalizar Rota! </ButtonContained>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  address: {
    width: 100
  },
  container: {
    flex:1,
    backgroundColor: '#237582',
  },
  patientsTableTitle: {
    paddingTop: 60,
     fontSize: 20,
     margin: 50,
  },
  loginTitle: {
    paddingTop: 60,
     fontSize: 40,
     margin: 50,
  }
});