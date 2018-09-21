import React from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';

class QuestionTextBoxDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date :'',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            {this.props.children}
          </Text>
        </View>

        <DatePicker
          style={styles.datePicker}
          date={this.state.date}
          mode="date"
          placeholder="年（西暦）月日を入力してください"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="確定"
          cancelBtnText="閉じる"
          customStyles={{
            dateInput: {
              height: 30,
              backgroundColor: '#F4F4F4',
              borderWidth: 1,
              borderRadius: 6,
              borderColor: '#707070',

            }
            // ... You can check the source to find the other keys.
          }}
          showIcon={false}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '83%',
  },
  datePicker: {
    width: '83%',
  },
});

export default QuestionTextBoxDate;
