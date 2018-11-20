import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

class QuestionTextBoxDate extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            {this.props.children}
          </Text>
        </View>

        <View style={styles.DatePickerClearTextBox}>
          <DatePicker
            style={styles.datePicker}
            date={this.props.value}
            mode="date"
            locale="ja"
            placeholder="年月日を入力"
            format="YYYY年MM月DD日"
            minDate="1985-01-01"
            maxDate="2030-01-01"
            confirmBtnText="確定"
            cancelBtnText="キャンセル"

            customStyles={{
              dateInput: {
                height: 30,
                backgroundColor: '#F4F4F4',
                borderWidth: 1,
                borderRadius: 6,
                borderColor: '#707070',
              },
            }}
            onDateChange={this.props.onDateChange}
            showIcon={false}
            value={this.props.value}
            disabled={this.props.disabled}
          />

          <TouchableOpacity
            style={styles.clearTextBox}
            onPress={this.props.onPress}
            disabled={this.props.disabled}
          >
            <Text style={styles.clearText}>
              クリア
            </Text>
            <View style={styles.line} />
          </TouchableOpacity>
        </View>
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
    fontSize: 13,
  },
  DatePickerClearTextBox: {
    flexDirection: 'row',
  },
  datePicker: {
    width: '41.5%',
  },
  clearTextBox: {
    marginTop: 18,
    paddingLeft: 10,
  },
  clearText: {
    color: '#A9A9A9',
  },
  line: {
    width: 'auto',
    borderWidth: 0.7,
    borderColor: '#A9A9A9',
  },
});

export default QuestionTextBoxDate;
