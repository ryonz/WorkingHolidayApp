import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

class RadioButtons extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <RadioGroup>

          <RadioButton value={'yes'}>
            <Text>はい</Text>
          </RadioButton>

          <RadioButton value={'no'}>
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


// <View style={styles.yesButton} />
// <Text>はい</Text>
//
// <View style={styles.noButton} />
// <Text>いいえ</Text>

//import CheckBox from 'react-native-check-box'

// state = {
//   answerYes: '',
//   answerNo: '',
//   yesIsChecked: false,
//   noIsChecked: false,
//   yesDisabled: false,
//   noDisabled: false,
// };
//
// onClickCheckBox() {
//   if (this.yesIsChecked === true) {
//     this.setState({ answerYes:'はい' });
//     this.setState({ noDisabled:true });
//   }
//   else if (this.noIsChecked === true) {
//     this.setState({ answerNo:'いいえ' });
//     this.setState({ yesDisabled:true });
//   }
// }


// <CheckBox
//   style={styles.yesButton}
//   isChecked={this.state.yesIsChecked}
//   onClick={() => { this.setState({ yesIsChecked:!this.state.yesIsChecked }) }}
//   disabled={this.state.yesDisabled}
// />
// <Text style={styles.answerText}>はい</Text>
//
// <CheckBox
//   style={styles.noButton}
//   isChecked={this.state.noIsChecked}
//   onClick={() => { this.setState({ noIsChecked:!this.state.noIsChecked }); }}
//   disabled={this.state.noDisabled}
// />
// <Text style={styles.answerText}>いいえ</Text>
