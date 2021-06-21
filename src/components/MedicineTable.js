import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, CheckBox, Button  } from 'react-native';
import { DataTable } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MedicineTable extends Component {

render() {
  const {data} = this.props;

  return (
    <ScrollView style={styles.container}>
      <View >
        <Text style={styles.patientsMedicineTitle}>Descrição da entrega</Text>
        <StatusBar style="auto" />
      </View>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title style={{paddingLeft:50}}>Descrição</DataTable.Title>
        <DataTable.Title style={{paddingLeft:50}}>Thermolábil</DataTable.Title>
      </DataTable.Header>

      {data.medicines.map( (item, index)  => {

        return (
          
          <DataTable.Row style={styles.container}>
            
              <DataTable.Cell>{item.name}</DataTable.Cell>   
              <DataTable.Cell>{item.description}</DataTable.Cell>   
              {  item.thermolabile ? 
                ( <Text style={{paddingRight:30}}><MaterialCommunityIcons 
                  name={"check-decagram"}
                  size={40}
                  color='#FFFFFF'      
              /></Text> ) :
                ( <Text style={{paddingRight:30}}><MaterialCommunityIcons 
                  name={"close-circle"}
                  size={40}
                  color='#FFFFFF'    
              /></Text>)
              }
               
          </DataTable.Row>  
        );
      })}
    </DataTable>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#237582',
  },
  containerHeader: {
    paddingTop: 30,
    backgroundColor: '#237582',
  },
  patientsMedicineTitle: {
    paddingTop: 20,
     fontSize: 20,
     margin: 20,
  }

});