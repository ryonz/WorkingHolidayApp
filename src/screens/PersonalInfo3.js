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

class PersonalInfo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      modifyNote: '',

      aboutVisa: '',
      fromDateOfStaying: '',
      toDateOfStaying: '',
      kindOfVisa: '',
      fromDateOfStayingCanada: '',
      toDateOfStayingCanada: '',
      placeOfstaying: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked3').then(value => {
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
    AsyncStorage.getItem('aboutVisa').then(value => {
      if (value !== null) {
        this.setState({ aboutVisa: value });
      }
    });

    AsyncStorage.getItem('fromDateOfStaying').then(text => {
      if (text !== null) {
        this.setState({ fromDateOfStaying: text });
      }
    });

    AsyncStorage.getItem('toDateOfStaying').then(text => {
      if (text !== null) {
        this.setState({ toDateOfStaying: text });
      }
    });

    AsyncStorage.getItem('kindOfVisa').then(date => {
      if (date !== null) {
        this.setState({ kindOfVisa: date });
      }
    });

    AsyncStorage.getItem('fromDateOfStayingCanada').then(text => {
      if (text !== null) {
        this.setState({ fromDateOfStayingCanada: text });
      }
    });

    AsyncStorage.getItem('toDateOfStayingCanada').then(text => {
      if (text !== null) {
        this.setState({ toDateOfStayingCanada: text });
      }
    });

    AsyncStorage.getItem('placeOfstaying').then(text => {
      if (text !== null) {
        this.setState({ placeOfstaying: text });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked3', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('申請者情報③')
        .set({
          '申請者情報③ ': [
            { '過去にカナダのビザ（ワーキングホリデー・学生・観光）の申請をしたことがありますか？（はい/いいえ）＊パスポートにスタンプのみ押され、紙のビザを発行されなかった方はビザを申請したことにはなりません。「いいえ」でご回答ください。': this.state.aboutVisa },
            { '＊「はい」と回答された方。滞在期間（西暦で年月日〜）': this.state.fromDateOfStaying },
            { '＊「はい」と回答された方。滞在期間（〜年月日）': this.state.toDateOfStaying },
            { '＊「はい」と回答された方。ビザの種類': this.state.kindOfVisa },
            { '今回のカナダ滞在予定年月（西暦で年月〜）': this.state.fromDateOfStayingCanada },
            { '今回のカナダ滞在予定年月（〜年月）': this.state.toDateOfStayingCanada },
            { 'カナダのどの州に滞在する予定ですか ': this.state.placeOfstaying },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit3();
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
      AsyncStorage.setItem('checked3', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked3')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit3();
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
          <InfoHeader onPress={this.onPressBackButton.bind(this)}>申請者情報３</InfoHeader>
          <Notes />
          <View style={styles.notesTextBox}>
            <Text style={styles.notesText}>
              {this.state.modifyNote}
            </Text>
          </View>
          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>
              過去にカナダのビザ（ワーキングホリデー・学生・{'\n'}
              観光）の申請をしたことがありますか？{'\n'}
              （はい/いいえ）{'\n'}
              {'\n'}
              ＊パスポートにスタンプのみ押され、紙のビザを発{'\n'}
              行されなかった方はビザを申請したことにはなりません。 「いいえ」でご回答ください。{'\n'}
            </Text>

            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('aboutVisa', value);
                this.setState({ aboutVisa: value });
              }}
              value={this.state.aboutVisa}
              disabled={this.state.disabled}
            />
          </View>

          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('fromDateOfStaying', date);
                this.setState({ fromDateOfStaying: date });
              }}
              value={this.state.fromDateOfStaying}
              onPress={() => {
                AsyncStorage.setItem('fromDateOfStaying', '');
                this.setState({ fromDateOfStaying: '' });
              }}
            >
              *「はい」と回答された方。滞在期間をご回答ください。
            </QuestionTextBoxDate>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('toDateOfStaying', date);
                this.setState({ toDateOfStaying: date });
              }}
              value={this.state.toDateOfStaying}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('toDateOfStaying', '');
                this.setState({ toDateOfStaying: '' });
              }}
            >
              から
            </QuestionTextBoxDate>
          </View>

          <QuestionTextSet
            placeholder={'例：学生ビザ、観光ビザなど'}
            onChangeText={text => {
              AsyncStorage.setItem('kindOfVisa', text);
              this.setState({ kindOfVisa: text });
            }}
            value={this.state.kindOfVisa}
            editable={this.state.editable}
          >
            *「はい」と回答された方。ビザの種類をご回答ください。
          </QuestionTextSet>

          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('fromDateOfStayingCanada', date);
                this.setState({ fromDateOfStayingCanada: date });
              }}
              value={this.state.fromDateOfStayingCanada}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('fromDateOfStayingCanada', '');
                this.setState({ fromDateOfStayingCanada: '' });
              }}
            >
              今回のカナダ滞在予定年月
            </QuestionTextBoxDate>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('toDateOfStayingCanada', date);
                this.setState({ toDateOfStayingCanada: date });
              }}
              value={this.state.toDateOfStayingCanada}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('toDateOfStayingCanada', '');
                this.setState({ toDateOfStayingCanada: '' });
              }}
            >
              から
            </QuestionTextBoxDate>
          </View>

          <QuestionTextSet
            placeholder={'例：バンクーバー,ビクトリア,トロントなど'}
            onChangeText={text => {
              AsyncStorage.setItem('placeOfstaying', text);
              this.setState({ placeOfstaying: text });
            }}
            value={this.state.placeOfstaying}
            editable={this.state.editable}
          >
            カナダのどの州に滞在する予定ですか
          </QuestionTextSet>

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

export default PersonalInfo3;
