import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class SubmitButton extends React.Component {
  render() {
    const { style } = this.props;
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={[styles.button, style]}
          onPress={() => { this.props.onPress(); }}
        >
          <Text style={styles.buttonText}>
            {this.props.children}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 50,
    height: 68,
  },
  button: {
    alignItems: 'center',
    width: 179,
    height: 46,
    paddingTop: 14,
    marginTop: 11,
    backgroundColor: '#F0F0F0',
    borderRadius: 23,
    borderColor: '#707070',
    borderWidth: 0.4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0,
    shadowOpacity: 0.06,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#626262',
  },

});

export default SubmitButton;
