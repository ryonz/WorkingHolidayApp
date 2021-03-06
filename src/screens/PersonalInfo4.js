import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import RadioButtons from '../elements/RadioButtons';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import Copyrights from '../elements/Copyrights';

class PersonalInfo4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      modifyNote: '',

      currentCountry: '',
      statusOfcurrentCountry: '',
      fromDurationOfVisa: '',
      toDurationOfVisa: '',
      otherCountry: '',
      nameOfotherCountry: '',
      statusOfOtherCountry: '',
      fromDurationOfOtherCountry: '',
      toDurationOfOtherCountry: '',
      whereApplyFrom: '',
      whichCountryApplyFrom: '',
      statusOfCountryToApply: '',
      fromDurationOfCountryToApply: '',
      toDurationOfCountryToApply: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked4').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ editable: false });
        this.setState({ disabled: true });
        this.setState({ modifyNote: '修正を行う場合は、完了ボタンを再度押してください。' });
      } else if (value === 'false') {
        this.setState({ editable: true });
        this.setState({ disabled: false });
        this.setState({ modifyNote: '' });
      }
    });
    AsyncStorage.getItem('currentCountry').then(text => {
      if (text !== null) {
        this.setState({ currentCountry: text });
      }
    });

    AsyncStorage.getItem('statusOfcurrentCountry').then(text => {
      if (text !== null) {
        this.setState({ statusOfcurrentCountry: text });
      }
    });

    AsyncStorage.getItem('fromDurationOfVisa').then(date => {
      if (date !== null) {
        this.setState({ fromDurationOfVisa: date });
      }
    });

    AsyncStorage.getItem('toDurationOfVisa').then(date => {
      if (date !== null) {
        this.setState({ toDurationOfVisa: date });
      }
    });

    AsyncStorage.getItem('otherCountry').then(text => {
      if (text !== null) {
        this.setState({ otherCountry: text });
      }
    });

    AsyncStorage.getItem('nameOfotherCountry').then(text => {
      if (text !== null) {
        this.setState({ nameOfotherCountry: text });
      }
    });

    AsyncStorage.getItem('statusOfOtherCountry').then(text => {
      if (text !== null) {
        this.setState({ statusOfOtherCountry: text });
      }
    });

    AsyncStorage.getItem('fromDurationOfOtherCountry').then(date => {
      if (date !== null) {
        this.setState({ fromDurationOfOtherCountry: date });
      }
    });

    AsyncStorage.getItem('toDurationOfOtherCountry').then(date => {
      if (date !== null) {
        this.setState({ toDurationOfOtherCountry: date });
      }
    });

    AsyncStorage.getItem('whereApplyFrom').then(text => {
      if (text !== null) {
        this.setState({ whereApplyFrom: text });
      }
    });

    AsyncStorage.getItem('whichCountryApplyFrom').then(text => {
      if (text !== null) {
        this.setState({ whichCountryApplyFrom: text });
      }
    });

    AsyncStorage.getItem('statusOfCountryToApply').then(text => {
      if (text !== null) {
        this.setState({ statusOfCountryToApply: text });
      }
    });

    AsyncStorage.getItem('fromDurationOfCountryToApply').then(date => {
      if (date !== null) {
        this.setState({ fromDurationOfCountryToApply: date });
      }
    });

    AsyncStorage.getItem('toDurationOfCountryToApply').then(date => {
      if (date !== null) {
        this.setState({ toDurationOfCountryToApply: date });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked4', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('申請者情報④')
        .set({
          '申請者情報④ ': [
            { '現在住んでいる国 ': this.state.currentCountry },
            { 'その国のステイタス（国籍を持っている/○○ビザで滞在中など）': this.state.statusOfcurrentCountry },
            { '上記で「ビザで滞在中」と回答された方は、滞在期間（西暦で年月日〜） ': this.state.fromDurationOfVisa },
            { '上記で「ビザで滞在中」と回答された方は、滞在期間（〜年月日）': this.state.toDurationOfVisa },
            { '過去５年間に、国籍を持つ国以外に６ヶ月以上住んでいたことがありますか（はい/いいえ）': this.state.otherCountry },
            { '＊上記で「はい」と回答された方。その国名': this.state.nameOfotherCountry },
            { '＊上記で「はい」と回答された方。その国でのステイタス（例：学生ビザ）': this.state.statusOfOtherCountry },
            { '＊上記で「はい」と回答された方。滞在期間（西暦で年月日〜）': this.state.fromDurationOfOtherCountry },
            { '＊上記で「はい」と回答された方。滞在期間（〜年月日）': this.state.toDurationOfOtherCountry },
            { '現在住んでいる国から申請をしますか？（はい/いいえ） ': this.state.whereApplyFrom },
            { '＊上記で「いいえ」と回答された方。その国名 ': this.state.whichCountryApplyFrom },
            { '＊上記で「いいえ」と回答された方。その国でのステイタス（例：学生ビザ） ': this.state.statusOfCountryToApply },
            { '＊上記で「いいえ」と回答された方。滞在期間（西暦で年月日〜）': this.state.fromDurationOfCountryToApply },
            { '＊上記で「いいえ」と回答された方。滞在期間（〜年月日）': this.state.toDurationOfCountryToApply },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit4();
          this.props.navigation.navigate('WHApply');
          this.setState({ disableChecked: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ disableChecked: false });
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ editable: true });
      this.setState({ disabled: false });
      AsyncStorage.setItem('checked4', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked4')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit4();
          this.props.navigation.goBack();
        }
      });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enable
      >
        <ScrollView>
          <InfoHeader onPress={this.onPressBackButton.bind(this)}>申請者情報４</InfoHeader>
          <Notes />
          <View style={styles.notesTextBox}>
            <Text style={styles.notesText}>
              {this.state.modifyNote}
            </Text>
          </View>
          <QuestionTextSet
            placeholder={'例：日本、カナダなど'}
            onChangeText={text => {
              AsyncStorage.setItem('currentCountry', text);
              this.setState({ currentCountry: text });
            }}
            value={this.state.currentCountry}
            editable={this.state.editable}
          >
            現在住んでいる国
          </QuestionTextSet>
          <QuestionTextSet
            placeholder={'例：国籍を持っている。○○ビザで滞在中など'}
            onChangeText={text => {
              AsyncStorage.setItem('statusOfcurrentCountry', text);
              this.setState({ statusOfcurrentCountry: text });
            }}
            value={this.state.statusOfcurrentCountry}
            editable={this.state.editable}
          >
            その国でのステイタス
          </QuestionTextSet>
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('fromDurationOfVisa', date);
                this.setState({ fromDurationOfVisa: date });
              }}
              value={this.state.fromDurationOfVisa}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('fromDurationOfVisa', '');
                this.setState({ fromDurationOfVisa: '' });
              }}
            >
              *上記で「ビザで滞在中」と回答された方。
              {'\n'}滞在期間をご回答ください。
            </QuestionTextBoxDate>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('toDurationOfVisa', date);
                this.setState({ toDurationOfVisa: date });
              }}
              value={this.state.toDurationOfVisa}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('toDurationOfVisa', '');
                this.setState({ toDurationOfVisa: '' });
              }}
            >
              から
            </QuestionTextBoxDate>
          </View>
          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>
              過去５年間に、国籍を持つ国以外に６ヶ月以上住んでいたことがありますか（はい/いいえ）
            </Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('otherCountry', value);
                this.setState({ otherCountry: value });
              }}
              value={this.state.otherCountry}
              disabled={this.state.disabled}
            />
          </View>
          <QuestionTextSet
            placeholder={'例：カナダ、アメリカなど'}
            onChangeText={text => {
              AsyncStorage.setItem('nameOfotherCountry', text);
              this.setState({ nameOfotherCountry: text });
            }}
            value={this.state.nameOfotherCountry}
            editable={this.state.editable}
          >
            *「はい」と回答された方。その国名をご回答ください。
          </QuestionTextSet>
          <QuestionTextSet
            placeholder={'例：学生ビザなど'}
            onChangeText={text => {
              AsyncStorage.setItem('statusOfOtherCountry', text);
              this.setState({ statusOfOtherCountry: text });
            }}
            value={this.state.statusOfOtherCountry}
            editable={this.state.editable}
          >
            *「はい」と回答された方。その国でのステイタスをご回答ください。
          </QuestionTextSet>
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('fromDurationOfOtherCountry', date);
                this.setState({ fromDurationOfOtherCountry: date });
              }}
              value={this.state.fromDurationOfOtherCountry}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('fromDurationOfOtherCountry', '');
                this.setState({ fromDurationOfOtherCountry: '' });
              }}
            >
              *「はい」と回答された方。滞在期間をご回答ください。
            </QuestionTextBoxDate>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('toDurationOfOtherCountry', date);
                this.setState({ toDurationOfOtherCountry: date });
              }}
              value={this.state.toDurationOfOtherCountry}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('toDurationOfOtherCountry', '');
                this.setState({ toDurationOfOtherCountry: '' });
              }}
            >
              から
            </QuestionTextBoxDate>
          </View>
          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>
              現在住んでいる国から申請をしますか？（はい/いいえ）
            </Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('whereApplyFrom', value);
                this.setState({ whereApplyFrom: value });
              }}
              value={this.state.whereApplyFrom}
              disabled={this.state.disabled}
            />
          </View>
          <QuestionTextSet
            placeholder={'例：カナダ、アメリカなど'}
            onChangeText={text => {
              AsyncStorage.setItem('whichCountryApplyFrom', text);
              this.setState({ whichCountryApplyFrom: text });
            }}
            value={this.state.whichCountryApplyFrom}
            disabled={this.state.disabled}
          >
            *「いいえ」と回答された方。どの国から申請をするのかをご回答ください。
          </QuestionTextSet>
          <QuestionTextSet
            placeholder={'例：学生ビザなど'}
            onChangeText={text => {
              AsyncStorage.setItem('statusOfCountryToApply', text);
              this.setState({ statusOfCountryToApply: text });
            }}
            value={this.state.statusOfCountryToApply}
            editable={this.state.editable}
          >
            *「いいえ」と回答された方。その国でのステイタスをご回答ください。
          </QuestionTextSet>
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('fromDurationOfCountryToApply', date);
                this.setState({ fromDurationOfCountryToApply: date });
              }}
              value={this.state.fromDurationOfCountryToApply}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('fromDurationOfCountryToApply', '');
                this.setState({ fromDurationOfCountryToApply: '' });
              }}
            >
              *「いいえ」と回答された方。その国での滞在期間をご回答ください。
            </QuestionTextBoxDate>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('toDurationOfCountryToApply', date);
                this.setState({ toDurationOfCountryToApply: date });
              }}
              value={this.state.toDurationOfCountryToApply}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('toDurationOfCountryToApply', '');
                this.setState({ toDurationOfCountryToApply: '' });
              }}
            >
              から
            </QuestionTextBoxDate>
          </View>

          <TouchableOpacity
            style={styles.temporarySaveButton}
            onPress={this.onPressBackButton.bind(this)}
          >
            <Text>
              保存して戻る
            </Text>
          </TouchableOpacity>

          <CheckBox
            disabled={this.state.disableChecked}
            center
            title={'完了したらここをチェック'}
            checked={this.state.checked}
            onPress={() => {
              this.onPressCheckBox();
            }}
          />

          <Copyrights />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#fff',
  },
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '83%',
    fontSize: 13,
  },
  questionTextBoxDateMargin: {
    marginTop: 20,
    marginBottom: 20,
  },
  temporarySaveButton: {
    width: '95%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  notesTextBox: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 18,
  },
  notesText: {
    color: '#FF0000',
    width: '83%',
  },
});

export default PersonalInfo4;
