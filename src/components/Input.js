import React from 'react';
import {
  // Animated,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  TextInput,
  withTheme,
  HelperText,
  // IconButton,
  TouchableRipple,
  // Divider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {FormContext} from '../../lib/formConfig';
import BaseFormValueItem from './BaseFormValueItem';

class Input extends BaseFormValueItem {
  render() {
    const {
      input_text_color,
      inputLabel,
      withoutLabel,
      submitOnClear,
      onClear,
      icon,
      theme,
      // noTest,
      ...restProps
    } = this.props;

    const {error, value} = this.state;
    const rest = {...restProps};
    delete rest.label;
    delete rest.maskToSubmit;
    delete rest.required;
    delete rest.validation;
    delete rest.alternative;
    delete rest.defaultValue;
    delete rest.mask;
    delete rest.callBlurIfChange;
    delete rest.actualValue;
    delete rest.inputContainerStyles;
    delete rest.submitOnBlur;
    delete rest.submitOnChange;
    delete rest.onSubmitCallback;
    delete rest.submit;
    delete rest.name;
    delete rest.nextInput;
    delete rest.formContextArrayIndex;
    delete rest.handleForm;

    const styles = createStyles(this.props);
    return (
      <View style={styles.container}>
        {inputLabel ? <Text>{inputLabel}</Text> : null}
        <View style={styles.inputContainer}>
          <TextInput
            {...rest}
            ref={this.ref}
            style={styles.input}
            value={value}
            mode="outlined"
            onChangeText={this.setConfigs}
            onSubmitEditing={this.handleSubmit}
            error={Boolean(error)}
            onBlur={this.onBlur}
          />
          {icon ? (
            <TouchableRipple style={styles.rightIcon} onPress={icon.onPress}>
              <Icon
                name={icon.name}
                size={Metrics.getSize(18)}
                color={error ? theme.colors.error : theme.colors.accent}
              />
            </TouchableRipple>
          ) : null}
        </View>

        {error ? (
          <HelperText type="error" style={styles.errorText}>
            {error}
          </HelperText>
        ) : null}
      </View>
    );
  }
}

export default Input;

function createStyles(props) {
  return StyleSheet.create({
    container: {
      marginVertical: 10,
    },

    inputContainer: {
      position: 'relative',
      justifyContent: 'center',
    },

    input: {
      fontSize: 12,
      backgroundColor: "white",
      minHeight: 10,
    },
    errorText: {
      fontSize: 11,
      fontFamily: 'Poppins Light',
    },
    rightIcon: {
      width: 100,
      height: 100,
      top: 11,
      right: 2,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
    },
  });
}