import React, { Component } from 'react';
import { Text } from 'react-native';
import PatientsTable from '../components/PatientsTable';
import PatientPresentation from './PatientPresentation';

export default class RoutePresentation extends Component {

    constructor(props) {
        super();
        this.state = {
          patientDetails : false,
          patientDetailsData: null
        }
      }

      setPatientDetails = (success, item) => {
        this.setState({
            patientDetails: success,
            patientDetailsData: item
        });
      }

    render() {
        const { genotype } = this.props.data;
        const {goBackToHome} = this.props;
        const {patientDetails, patientDetailsData} = this.state;

        if (patientDetails) {
            return <PatientPresentation 
            data={patientDetailsData}
            goBack={this.setPatientDetails}
            />
        }

        return (
            <PatientsTable 
            data = {genotype}
            goToDetails={this.setPatientDetails}
            goBackToHome={goBackToHome}
            />
        )
    }
}