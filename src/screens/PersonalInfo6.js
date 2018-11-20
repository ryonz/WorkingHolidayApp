import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';

import InfoHeader from '../components/InfoHeader';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import Copyrights from '../elements/Copyrights';
import { isiPhoneSE } from '../lib/windowsize';

class PersonalInfo6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      modifyNote: '',

      dateOfStart1: '',
      dateOfFinish1: '',
      nameOfCompany1: '',
      address1: '',
      job1: '',
      position1: '',
      detailOfJob1: '',

      dateOfStart2: '',
      dateOfFinish2: '',
      nameOfCompany2: '',
      address2: '',
      job2: '',
      position2: '',
      detailOfJob2: '',

      dateOfStart3: '',
      dateOfFinish3: '',
      nameOfCompany3: '',
      address3: '',
      job3: '',
      position3: '',
      detailOfJob3: '',

      extra: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked6').then(value => {
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
    AsyncStorage.getItem('dateOfStart1').then(date => {
      if (date !== null) {
        this.setState({ dateOfStart1: date });
      }
    });
    AsyncStorage.getItem('dateOfFinish1').then(date => {
      if (date !== null) {
        this.setState({ dateOfFinish1: date });
      }
    });
    AsyncStorage.getItem('nameOfCompany1').then(text => {
      if (text !== null) {
        this.setState({ nameOfCompany1: text });
      }
    });
    AsyncStorage.getItem('address1').then(text => {
      if (text !== null) {
        this.setState({ address1: text });
      }
    });
    AsyncStorage.getItem('job1').then(text => {
      if (text !== null) {
        this.setState({ job1: text });
      }
    });
    AsyncStorage.getItem('position1').then(text => {
      if (text !== null) {
        this.setState({ position1: text });
      }
    });
    AsyncStorage.getItem('detailOfJob1').then(text => {
      if (text !== null) {
        this.setState({ detailOfJob1: text });
      }
    });
    AsyncStorage.getItem('dateOfStart2').then(date => {
      if (date !== null) {
        this.setState({ dateOfStart2: date });
      }
    });
    AsyncStorage.getItem('dateOfFinish2').then(date => {
      if (date !== null) {
        this.setState({ dateOfFinish2: date });
      }
    });
    AsyncStorage.getItem('nameOfCompany2').then(text => {
      if (text !== null) {
        this.setState({ nameOfCompany2: text });
      }
    });
    AsyncStorage.getItem('address2').then(date => {
      if (date !== null) {
        this.setState({ address2: date });
      }
    });
    AsyncStorage.getItem('job2').then(date => {
      if (date !== null) {
        this.setState({ job2: date });
      }
    });
    AsyncStorage.getItem('position2').then(date => {
      if (date !== null) {
        this.setState({ position2: date });
      }
    });
    AsyncStorage.getItem('detailOfJob2').then(text => {
      if (text !== null) {
        this.setState({ detailOfJob2: text });
      }
    });
    AsyncStorage.getItem('dateOfStart3').then(date => {
      if (date !== null) {
        this.setState({ dateOfStart3: date });
      }
    });
    AsyncStorage.getItem('dateOfFinish3').then(date => {
      if (date !== null) {
        this.setState({ dateOfFinish3: date });
      }
    });
    AsyncStorage.getItem('nameOfCompany3').then(text => {
      if (text !== null) {
        this.setState({ nameOfCompany3: text });
      }
    });
    AsyncStorage.getItem('address3').then(text => {
      if (text !== null) {
        this.setState({ address3: text });
      }
    });
    AsyncStorage.getItem('job3').then(text => {
      if (text !== null) {
        this.setState({ job3: text });
      }
    });
    AsyncStorage.getItem('position3').then(text => {
      if (text !== null) {
        this.setState({ position3: text });
      }
    });
    AsyncStorage.getItem('detailOfJob3').then(text => {
      if (text !== null) {
        this.setState({ detailOfJob3: text });
      }
    });
    AsyncStorage.getItem('extra').then(text => {
      if (text !== null) {
        this.setState({ extra: text });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked6', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('申請者情報⑥')
        .set({
          '申請者情報⑥ ': [
            { '開始日（入社日）① ': this.state.dateOfStart1 },
            { '終了日（退社日）① ': this.state.dateOfFinish1 },
            { '会社名(ふりがな)① ': this.state.nameOfCompany1 },
            { '所在地① ': this.state.address1 },
            { '職業① ': this.state.job1 },
            { '役職（ポジション）① ': this.state.position1 },
            { '主な仕事内容① ': this.state.detailOfJob1 },
            { '開始日(入社日)②': this.state.dateOfStart2 },
            { '終了日（退社日）②': this.state.dateOfFinish2 },
            { '会社名(ふりがな)②': this.state.nameOfCompany2 },
            { '所在地②': this.state.address2 },
            { '職業②': this.state.job2 },
            { '役職（ポジション）②': this.state.position2 },
            { '主な仕事内容②': this.state.detailOfJob2 },
            { '開始日（入社日）③': this.state.dateOfStart3 },
            { '終了日（退社日）③': this.state.dateOfFinish3 },
            { '会社名(ふりがな)③': this.state.nameOfCompany3 },
            { '所在地③': this.state.address3 },
            { '職業③': this.state.job3 },
            { '役職（ポジション）③': this.state.position3 },
            { '主な仕事内容③': this.state.detailOfJob3 },
            { '4つ目以降': this.state.extra },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit6();
          this.props.navigation.navigate('WHApply');
          this.setState({ disableChecked: false });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ editable: true });
      this.setState({ disabled: false });
      AsyncStorage.setItem('checked6', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked6')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit6();
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
          <InfoHeader onPress={this.onPressBackButton.bind(this)}>申請者情報６</InfoHeader>
          <View style={styles.notes}>
            <Text style={styles.notesText}>
              学校卒業から現在までの職歴について、履歴書を完成させてください。{'\n'}
              ＊卒業から10年以上たっている人は、過去10年分について記載してください。{'\n'}
              ＊空白の期間がないように記入してください。{'\n'}
              ＊具体的に内容を説明してください。{'\n'}
              {'\n'}
              ＊空白の期間がないように記入してください。{'\n'}
              各職歴の間に空白の期間がある場合は、その間何をしていたかを項目ごとに期間を示し、
              具体的に内容を一番説明下の「内容」の項目に記入してください。{'\n'}
              「開始日」と「内容」の項目は必須項目です。{'\n'}
              （例：○○の資格勉強、留学準備、就職活動、
              ○○学校で○○コース受講、アメリカへ語学留学など）{'\n'}
              ＊学生時代のアルバイトは含めません。{'\n'}
              ＊卒業後は雇用形態（正社員・アルバイトなど）に関係なくご回答ください。{'\n'}
            </Text>
          </View>
          <View style={styles.notesTextBox}>
            <Text style={styles.notesText}>
              {this.state.modifyNote}
            </Text>
          </View>

          <View style={styles.questionSetBox}>
            <View style={styles.questionTextBoxDateMargin}>
              <QuestionTextBoxDate
                onDateChange={date => {
                  AsyncStorage.setItem('dateOfStart1', date);
                  this.setState({ dateOfStart1: date });
                }}
                value={this.state.dateOfStart1}
                disabled={this.state.disabled}
                onPress={() => {
                  AsyncStorage.setItem('dateOfStart1', '');
                  this.setState({ dateOfStart1: '' });
                }}
              >
                開始日(入社日)*
              </QuestionTextBoxDate>
              <QuestionTextBoxDate
                onDateChange={date => {
                  AsyncStorage.setItem('dateOfFinish1', date);
                  this.setState({ dateOfFinish1: date });
                }}
                value={this.state.dateOfFinish1}
                disabled={this.state.disabled}
                onPress={() => {
                  AsyncStorage.setItem('dateOfFinish1', '');
                  this.setState({ dateOfFinish1: '' });
                }}
              >
                終了日(退社日)*
              </QuestionTextBoxDate>
            </View>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('nameOfCompany1', text);
                this.setState({ nameOfCompany1: text });
              }}
              value={this.state.nameOfCompany1}
              editable={this.state.editable}
              placeholder={'例：株式会社加奈陀(かぶしきがいしゃ かなだ)'}
            >
              会社名(ふりがな)
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('address1', text);
                this.setState({ address1: text });
              }}
              value={this.state.address1}
              editable={this.state.editable}
              placeholder={'例：東京都千代田区'}
            >
              所在地
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('job1', text);
                this.setState({ job1: text });
              }}
              value={this.state.job1}
              editable={this.state.editable}
              placeholder={'例：留学カウンセラー'}
            >
              職業
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('position1', text);
                this.setState({ position1: text });
              }}
              value={this.state.position1}
              editable={this.state.editable}
              placeholder={'例：係長'}
            >
              役職(ポジション)
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('detailOfJob1', text);
                this.setState({ detailOfJob1: text });
              }}
              value={this.state.detailOfJob1}
              editable={this.state.editable}
              placeholder={'例：願書作成、請求書発行、書類送付'}
            >
              主な(仕事)内容*
            </QuestionTextSet>
          </View>
          {/* 2行目 */}
          <View style={styles.line} />

          <View style={styles.questionSetBox}>
            <View style={styles.questionTextBoxDateMargin}>
              <QuestionTextBoxDate
                onDateChange={date => {
                  AsyncStorage.setItem('dateOfStart2', date);
                  this.setState({ dateOfStart2: date });
                }}
                value={this.state.dateOfStart2}
                disabled={this.state.disabled}
                onPress={() => {
                  AsyncStorage.setItem('dateOfStart2', '');
                  this.setState({ dateOfStart2: '' });
                }}
              >
                開始日(入社日)*
              </QuestionTextBoxDate>

              <QuestionTextBoxDate
                onDateChange={date => {
                  AsyncStorage.setItem('dateOfFinish2', date);
                  this.setState({ dateOfFinish2: date });
                }}
                value={this.state.dateOfFinish2}
                disabled={this.state.disabled}
                onPress={() => {
                  AsyncStorage.setItem('dateOfFinish2', '');
                  this.setState({ dateOfFinish2: '' });
                }}
              >
                終了日(退社日)*
              </QuestionTextBoxDate>
            </View>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('nameOfCompany2', text);
                this.setState({ nameOfCompany2: text });
              }}
              value={this.state.nameOfCompany2}
              editable={this.state.editable}
              placeholder={'例：株式会社加奈陀(かぶしきがいしゃ かなだ)'}
            >
              会社名(ふりがな)
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('address2', text);
                this.setState({ address2: text });
              }}
              value={this.state.address2}
              editable={this.state.editable}
              placeholder={'例：東京都千代田区'}
            >
              所在地
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('job2', text);
                this.setState({ job2: text });
              }}
              value={this.state.job2}
              editable={this.state.editable}
              placeholder={'例：留学カウンセラー'}
            >
              職業
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('position2', text);
                this.setState({ position2: text });
              }}
              value={this.state.position2}
              editable={this.state.editable}
              placeholder={'例：係長'}
            >
              役職(ポジション)
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('detailOfJob2', text);
                this.setState({ detailOfJob2: text });
              }}
              value={this.state.detailOfJob2}
              editable={this.state.editable}
              placeholder={'例：願書作成、請求書発行、書類送付'}
            >
              主な(仕事)内容*
            </QuestionTextSet>
          </View>

          <View style={styles.line} />
          {/* 3行目 */}
          <View style={styles.questionSetBox}>
            <View style={styles.questionTextBoxDateMargin}>
              <QuestionTextBoxDate
                onDateChange={date => {
                  AsyncStorage.setItem('dateOfStart3', date);
                  this.setState({ dateOfStart3: date });
                }}
                value={this.state.dateOfStart3}
                disabled={this.state.disabled}
                onPress={() => {
                  AsyncStorage.setItem('dateOfStart3', '');
                  this.setState({ dateOfStart3: '' });
                }}
              >
                開始日(入社日)*
              </QuestionTextBoxDate>

              <QuestionTextBoxDate
                onDateChange={date => {
                  AsyncStorage.setItem('dateOfFinish3', date);
                  this.setState({ dateOfFinish3: date });
                }}
                value={this.state.dateOfFinish3}
                disabled={this.state.disabled}
                onPress={() => {
                  AsyncStorage.setItem('dateOfFinish3', '');
                  this.setState({ dateOfFinish3: '' });
                }}
              >
                終了日(退社日)*
              </QuestionTextBoxDate>
            </View>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('nameOfCompany3', text);
                this.setState({ nameOfCompany3: text });
              }}
              value={this.state.nameOfCompany3}
              editable={this.state.editable}
              placeholder={'例：株式会社加奈陀(かぶしきがいしゃ かなだ)'}
            >
              会社名(ふりがな)
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('address3', text);
                this.setState({ address3: text });
              }}
              value={this.state.address3}
              editable={this.state.editable}
              placeholder={'例：東京都千代田区'}
            >
              所在地
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('job3', text);
                this.setState({ job3: text });
              }}
              value={this.state.job3}
              editable={this.state.editable}
              placeholder={'例：留学カウンセラー'}
            >
              職業
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('position3', text);
                this.setState({ position3: text });
              }}
              value={this.state.position3}
              editable={this.state.editable}
              placeholder={'例：係長'}
            >
              役職(ポジション)
            </QuestionTextSet>

            <QuestionTextSet
              onChangeText={text => {
                AsyncStorage.setItem('detailOfJob3', text);
                this.setState({ detailOfJob3: text });
              }}
              value={this.state.detailOfJob3}
              editable={this.state.editable}
              placeholder={'例：願書作成、請求書発行、書類送付'}
            >
              主な(仕事)内容*
            </QuestionTextSet>
          </View>

          <View style={styles.line} />

          <Text style={styles.textInputTitle}>
            4つ目以降はこちらに記入してください。{'\n'}
            *印は必須項目です。{'\n'}
            {'\n'}
            ［書き方］{'\n'}
            ①開始日(入社日)*、終了日(退社日)*、会社名(ふりがな)、所在地、職業、役職(ポジション)、
            主な(仕事)内容*{'\n'}
            ②開始日(入社日)*、終了日(退社日)*、会社名(ふりがな)、所在地、職業、役職(ポジション)、
            主な(仕事)内容*
          </Text>

          <View style={styles.textInputBox}>
            <TextInput
              onChangeText={text => {
                AsyncStorage.setItem('extra', text);
                this.setState({ extra: text });
              }}
              value={this.state.extra}
              editable={this.state.editable}
              style={styles.textInput}
              multiline
              placeholder={`開始日(入社日)、終了日(退社日)、会社名(ふりがな)、所在地、職業、役職(ポジション)、
              主な(仕事)内容`}
              underlineColorAndroid={'transparent'}
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
  questionSetBox: {
    width: '100%',
  },
  notes: {
    width: '100%',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 18,
  },
  notesText: {
    color: '#FF0000',
    width: '83%',
    fontSize: isiPhoneSE() ? 13 : 14,
  },
  saveButton: {
    backgroundColor: '#fff',
  },
  questionTextBoxDateMargin: {
    marginTop: 10,
    marginBottom: 20,
  },
  questionTextBoxDateMargin2Line: {
    marginTop: 20,
    marginBottom: 20,
  },
  line: {
    width: '100%',
    backgroundColor: '#000000',
    height: 0.5,
    marginTop: 20,
    marginBottom: 20,
  },
  textInputTitle: {
    alignSelf: 'center',
    width: '83%',
    lineHeight: 20,
  },
  textInputBox: {
    width: '100%',
    height: 230,
    marginTop: 20,
  },
  textInput: {
    alignSelf: 'center',
    width: '83%',
    height: 230,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F4F4F4',
    borderWidth: 0.5,
    borderRadius: 10,
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
});

export default PersonalInfo6;
