import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

class RadioButtons extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RadioGroup
          onSelect={(index, value) => {
            this.props.onSelect(index, value);
          }}
          selectedIndex={this.props.value === 'Yes' ? 0 : null || this.props.value === 'No' ? 1: null}
        >

          <RadioButton
            value={'Yes'}
            disabled={this.props.disabled}

          >
            <Text>はい</Text>
          </RadioButton>

          <RadioButton
            value={'No'}
            disabled={this.props.disabled}
          >
            <Text>いいえ</Text>
          </RadioButton>


        </RadioGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  yesButton: {
    marginLeft: 20,
    marginRight: 5,
  },
  noButton: {
    marginRight: 5,
  },
  answerText: {
    paddingTop: 5,
    marginRight: 30,
  },
});

export default RadioButtons;
