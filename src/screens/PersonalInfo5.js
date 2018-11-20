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

class PersonalInfo5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      modifyNote: '',

      currentNationality: '',
      languageUsingToFamily: '',
      areYouStudent: '',
      dateOfAdmission: '',
      dateOfGraduation: '',
      majorOfSchool: '',
      nameOfSchool: '',
      nameCityOfSchool: '',
      namePreferctureOfSchool: '',
      dateOfLastAdmission: '',
      dateOfLastGraduation: '',
      majorOfLastSchool: '',
      nameOfLastSchool: '',
      nameCityOfLastSchool: '',
      namePreferctureOfLastSchool: '',
      areYouWorking: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked5').then(value => {
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
    AsyncStorage.getItem('currentNationality').then(text => {
      if (text !== null) {
        this.setState({ currentNationality: text });
      }
    });
    AsyncStorage.getItem('languageUsingToFamily').then(text => {
      if (text !== null) {
        this.setState({ languageUsingToFamily: text });
      }
    });
    AsyncStorage.getItem('areYouStudent').then(text => {
      if (text !== null) {
        this.setState({ areYouStudent: text });
      }
    });
    AsyncStorage.getItem('dateOfAdmission').then(date => {
      if (date !== null) {
        this.setState({ dateOfAdmission: date });
      }
    });
    AsyncStorage.getItem('dateOfGraduation').then(date => {
      if (date !== null) {
        this.setState({ dateOfGraduation: date });
      }
    });
    AsyncStorage.getItem('majorOfSchool').then(text => {
      if (text !== null) {
        this.setState({ majorOfSchool: text });
      }
    });
    AsyncStorage.getItem('nameOfSchool').then(text => {
      if (text !== null) {
        this.setState({ nameOfSchool: text });
      }
    });
    AsyncStorage.getItem('nameCityOfSchool').then(text => {
      if (text !== null) {
        this.setState({ nameCityOfSchool: text });
      }
    });
    AsyncStorage.getItem('namePreferctureOfSchool').then(text => {
      if (text !== null) {
        this.setState({ namePreferctureOfSchool: text });
      }
    });
    AsyncStorage.getItem('dateOfLastAdmission').then(date => {
      if (date !== null) {
        this.setState({ dateOfLastAdmission: date });
      }
    });
    AsyncStorage.getItem('dateOfLastGraduation').then(date => {
      if (date !== null) {
        this.setState({ dateOfLastGraduation: date });
      }
    });
    AsyncStorage.getItem('majorOfLastSchool').then(text => {
      if (text !== null) {
        this.setState({ majorOfLastSchool: text });
      }
    });
    AsyncStorage.getItem('nameOfLastSchool').then(text => {
      if (text !== null) {
        this.setState({ nameOfLastSchool: text });
      }
    });
    AsyncStorage.getItem('nameCityOfLastSchool').then(text => {
      if (text !== null) {
        this.setState({ nameCityOfLastSchool: text });
      }
    });
    AsyncStorage.getItem('namePreferctureOfLastSchool').then(text => {
      if (text !== null) {
        this.setState({ namePreferctureOfLastSchool: text });
      }
    });
    AsyncStorage.getItem('areYouWorking').then(text => {
      if (text !== null) {
        this.setState({ areYouWorking: text });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked5', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('申請者情報⑤')
        .set({
          '申請者情報⑤ ': [
            { '母国語 ': this.state.currentNationality },
            { '家族友達と話すときに使う言葉（英語/フランス語/どちらも使わない）': this.state.languageUsingToFamily },
            { '現在学生ですか（はい/いいえ） ': this.state.areYouStudent },
            { '入学年月日（西暦年・月・日） ': this.state.dateOfAdmission },
            { '卒業予定年月日（西暦年・月・日） ': this.state.dateOfGraduation },
            { '学部・専攻名 ': this.state.majorOfSchool },
            { '学校名 ': this.state.nameOfSchool },
            { '学校所在地の市区町村名 ': this.state.nameCityOfSchool },
            { '学校所在地の都道府県名 ': this.state.namePreferctureOfSchool },
            { '最終学歴）入学年月日（西暦年・月・日） ': this.state.dateOfLastAdmission },
            { '最終学歴）卒業年月日（西暦年・月・日） ': this.state.dateOfLastGraduation },
            { '最終学歴）学部・専攻名 ': this.state.majorOfLastSchool },
            { '最終学歴）学校名　': this.state.nameOfLastSchool },
            { '最終学歴）学校所在地の市区町村名 ': this.state.nameCityOfLastSchool },
            { '最終学歴）学校所在地の都道府県名 ': this.state.namePreferctureOfLastSchool },
            { '最終学歴）現在働いていますか（はい/いいえ） ': this.state.areYouWorking },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit5();
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
      AsyncStorage.setItem('checked5', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked5')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit5();
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
          <InfoHeader onPress={this.onPressBackButton.bind(this)}>申請者情報5</InfoHeader>
          <Notes />
          <View style={styles.notesTextBox}>
            <Text style={styles.notesText}>
              {this.state.modifyNote}
            </Text>
          </View>
          <QuestionTextSet
            placeholder={'例：日本'}
            onChangeText={text => {
              AsyncStorage.setItem('currentNationality', text);
              this.setState({ currentNationality: text });
            }}
            value={this.state.currentNationality}
            editable={this.state.editable}
          >
            現在の国籍
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('languageUsingToFamily', text);
              this.setState({ languageUsingToFamily: text });
            }}
            editable={this.state.editable}
            value={this.state.languageUsingToFamily}
          >
            家族友達と話すときに使う言葉{'\n'}(英語/フランス語/どちらも使わない)
          </QuestionTextSet>
          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>現在学生ですか？（はい/いいえ）</Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('areYouStudent', value);
                this.setState({ areYouStudent: value });
              }}
              value={this.state.areYouStudent}
              disabled={this.state.disabled}
            />
          </View>
          <Text style={{ alignSelf: 'center', width: '83%' }}>
            *学生であれば以下の質問にお答えください。
          </Text>
          <View style={styles.line} />
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('dateOfAdmission', date);
                this.setState({ dateOfAdmission: date });
              }}
              value={this.state.dateOfAdmission}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('dateOfAdmission', '');
                this.setState({ dateOfAdmission: '' });
              }}
            >
              入学年月日
            </QuestionTextBoxDate>
          </View>
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('dateOfGraduation', date);
                this.setState({ dateOfGraduation: date });
              }}
              value={this.state.dateOfGraduation}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('dateOfGraduation', '');
                this.setState({ dateOfGraduation: '' });
              }}
            >
              卒業予定年月日
            </QuestionTextBoxDate>
          </View>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('majorOfSchool', text);
              this.setState({ majorOfSchool: text });
            }}
            value={this.state.majorOfSchool}
            editable={this.state.editable}
          >
            学部・専攻名
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('nameOfSchool', text);
              this.setState({ nameOfSchool: text });
            }}
            value={this.state.nameOfSchool}
            editable={this.state.editable}
          >
            学校名
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('nameCityOfSchool', text);
              this.setState({ nameCityOfSchool: text });
            }}
            value={this.state.nameCityOfSchool}
            editable={this.state.editable}
          >
            学校所在地の市区町村名
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('namePreferctureOfSchool', text);
              this.setState({ namePreferctureOfSchool: text });
            }}
            value={this.state.namePreferctureOfSchool}
            editable={this.state.editable}
          >
            学校所在地の都道府県名
          </QuestionTextSet>
          <Text style={{ alignSelf: 'center', width: '83%' }}>
            *最終学歴について{'\n'}(現在学生の方は一つ前の学校になります)
          </Text>
          <View style={styles.line} />
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('dateOfLastAdmission', date);
                this.setState({ dateOfLastAdmission: date });
              }}
              value={this.state.dateOfLastAdmission}
              editable={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('dateOfLastAdmission', '');
                this.setState({ dateOfLastAdmission: '' });
              }}
            >
              入学年月日
            </QuestionTextBoxDate>
          </View>
          <View style={styles.questionTextBoxDateMargin}>
            <QuestionTextBoxDate
              onDateChange={date => {
                AsyncStorage.setItem('dateOfLastGraduation', date);
                this.setState({ dateOfLastGraduation: date });
              }}
              value={this.state.dateOfLastGraduation}
              disabled={this.state.disabled}
              onPress={() => {
                AsyncStorage.setItem('dateOfLastGraduation', '');
                this.setState({ dateOfLastGraduation: '' });
              }}
            >
              卒業予定年月日
            </QuestionTextBoxDate>
          </View>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('majorOfLastSchool', text);
              this.setState({ majorOfLastSchool: text });
            }}
            value={this.state.majorOfLastSchool}
            editable={this.state.editable}
          >
            学部・専攻名
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('nameOfLastSchool', text);
              this.setState({ nameOfLastSchool: text });
            }}
            value={this.state.nameOfLastSchool}
            editable={this.state.editable}
          >
            学校名
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('nameCityOfLastSchool', text);
              this.setState({ nameCityOfLastSchool: text });
            }}
            value={this.state.nameCityOfLastSchool}
            editable={this.state.editable}
          >
            学校所在地の市区町村名
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('namePreferctureOfLastSchool', text);
              this.setState({ namePreferctureOfLastSchool: text });
            }}
            value={this.state.namePreferctureOfLastSchool}
            editable={this.state.editable}
          >
            学校所在地の都道府県名
          </QuestionTextSet>

          <View style={styles.line} />
          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>現在働いていますか？（はい/いいえ）</Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('areYouWorking', value);
                this.setState({ areYouWorking: value });
              }}
              value={this.state.areYouWorking}
              disabled={this.state.disabled}
            />
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
  line: {
    width: '100%',
    backgroundColor: '#000000',
    height: 0.5,
    marginTop: 18,
    marginBottom: 10,
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

export default PersonalInfo5;
