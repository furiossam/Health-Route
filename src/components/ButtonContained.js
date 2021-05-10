import React from 'react';
import {TouchableRipple} from 'react-native-paper';

import {FormHolder} from '../FormConfig';
import {StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class ButtonContained extends React.Component {
  render() {
    const {
      children,
      disabled,
      loading,
      onPress,
      type,
      icon,
    } = this.props;

    let onButtonPress = null;
    if (this.context && this.context.formHandler && type === 'submit') {
      onButtonPress = () => this.context.formHandler.submit();
    } else {
      onButtonPress = onPress;
    }

    const styles = createStyles(this.props);

    return (
      <TouchableRipple
        rippleColor="#ffffff40"
        style={styles.container}
        onPress={disabled || loading ? null : onButtonPress}>
        <View style={styles.labelContainer}>
          {loading ? (
            <Text>LOADING</Text>
          ) : (
            <>
              {icon ? (
                <MaterialCommunityIcons
                  color={"white"}
                  name={icon}
                  size={20}
                />
              ) : null}
              <Text style={styles.label}>{children}</Text>
            </>
          )}
        </View>
      </TouchableRipple>
    );
  }
}

ButtonContained.contextType = FormHolder.FormContext;

export default ButtonContained;

function createStyles(props) {
  return StyleSheet.create({
    container: {
      marginVertical: 10,
      borderRadius: 8,
      alignSelf: props.alignSelf,

      height: 50,
      backgroundColor: "blue",
      opacity: props.disabled ? 0.6 : 1,
      justifyContent: 'center',
      ...props.style,
    },
    content: {
      height: '100%',
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      textTransform: 'none',
      fontFamily: 'Poppins Regular',
      fontSize: 13,
      color: "white",
      marginLeft: props.icon ? 15 : 0,
    },
  });
}