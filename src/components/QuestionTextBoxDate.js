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
          locale="ja"
          placeholder="年月日を入力"
          format="YYYY年MM月DD日"
          minDate="1984-01-01"
          maxDate="2020-01-01"
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
          onDateChange={(date) => { this.setState({ date }); }}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: '8.5%',
  },
  questionTextBox: {
    width: '100%',
  },
  questionText: {
    width: '83%',
  },
  datePicker: {
    width: '41.5%',
  },
});

export default QuestionTextBoxDate;