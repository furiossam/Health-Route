import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ButtonContained, Input } from "../components";
import api from "../services/api";
import { FormHolder } from "../FormConfig";
import { ScrollView } from 'react-native';

export default class UserSubmit extends Component {

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
              <View style={styles.containerHeader}>
                <Text style={styles.formTitle}>Cadastre seu usuário no sistema HealthRoutes</Text>
                <StatusBar style="auto" />
              </View>
              <FormHolder
              onSubmit={(data) => {
                api.userSubmit(data, this.props.setRegister);
                
              }}>
                <Input style={styles.input}
                name="cpf"
                inputLabel="cpf"
                />
                <Input
                name="nome"
                inputLabel="nome"
                />
                <Input
                name="email"
                inputLabel="email"
                />
                <Input
                name="password"
                inputLabel="password"
                />
                <ButtonContained type="submit"> REGISTRAR </ButtonContained>
                </FormHolder>
                <ButtonContained onPress={() => {this.props.setRegister(false)}}> VOLTAR </ButtonContained>
            </View>
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
      paddingTop: 10,
      backgroundColor: '#237582',
    },
    formTitle: {
      paddingTop: 60,
       fontSize: 20,
       margin: 50,
    }
  });