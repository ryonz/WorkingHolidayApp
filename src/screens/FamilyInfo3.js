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

class FamilyInfo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      modifyNote: '',

      partnerNameJa: '',
      partnerNameEn: '',
      birthdayOfPartner: '',
      birthCountryOfPartner: '',
      aboutMaridgeOfPartner: '',
      addressOfPartner: '',
      postalCodeOfPartner: '',
      jobOfPartner: '',
      comeTogetherWithPartner: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked9').then(value => {
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
    AsyncStorage.getItem('partnerNameJa').then(text => {
      if (text !== null) {
        this.setState({ partnerNameJa: text });
      }
    });
    AsyncStorage.getItem('partnerNameEn').then(text => {
      if (text !== null) {
        this.setState({ partnerNameEn: text });
      }
    });
    AsyncStorage.getItem('birthdayOfPartner').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfPartner: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfPartner').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfPartner: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfPartner').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfPartner: text });
      }
    });
    AsyncStorage.getItem('addressOfPartner').then(text => {
      if (text !== null) {
        this.setState({ addressOfPartner: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfPartner').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfPartner: text });
      }
    });
    AsyncStorage.getItem('jobOfPartner').then(date => {
      if (date !== null) {
        this.setState({ jobOfPartner: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithPartner').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithPartner: value });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked9', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('配偶者について')
        .set({
          '配偶者について ': [
            { '配偶者姓名（漢字表記）': this.state.partnerNameJa },
            { '配偶者姓名（英字表記/パスポート表記通りのローマ字で）': this.state.partnerNameEn },
            { '配偶者生年月日（西暦でご回答ください）': this.state.birthdayOfPartner },
            { '配偶者出生国 ': this.state.birthCountryOfPartner },
            { '配偶者の婚姻状況（例：未婚、既婚、離婚、別居、死別等）': this.state.aboutMaridgeOfPartner },
            { '配偶者の現住所 ': this.state.addressOfPartner },
            { '配偶者の郵便番号 ': this.state.postalCodeOfPartner },
            { '配偶者のご職業（例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職） ': this.state.jobOfPartner },
            { '一緒にカナダに来ますか？（はい/いいえ） ': this.state.comeTogetherWithPartner },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit9();
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
      AsyncStorage.setItem('checked9', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked9')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit9();
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
        <ScrollView style={styles.container}>
          <InfoHeader
            onPress={this.onPressBackButton.bind(this)}
          >
            家族情報３
          </InfoHeader>
          <Notes />
          <View style={styles.notesTextBox}>
            <Text style={styles.notesText}>
              {this.state.modifyNote}
            </Text>
          </View>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('partnerNameJa', text);
              this.setState({ partnerNameJa: text });
            }}
            placeholder={'例：留学健二'}
            value={this.state.partnerNameJa}
            editable={this.state.editable}
          >
            配偶者姓名（漢字表記）
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('partnerNameEn', text);
              this.setState({ partnerNameEn: text });
            }}
            value={this.state.partnerNameEn}
            placeholder={'例：Kenji Ryugaku'}
            editable={this.state.editable}
          >
            配偶者姓名（英字表記/パスポート通りのローマ字で）
          </QuestionTextSet>

          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('birthdayOfPartner', date);
              this.setState({ birthdayOfPartner: date });
            }}
            value={this.state.birthdayOfPartner}
            disabled={this.state.disabled}
            onPress={() => {
              AsyncStorage.setItem('birthdayOfPartner', '');
              this.setState({ birthdayOfPartner: '' });
            }}
          >
            配偶者の生年月日（西暦で）
          </QuestionTextBoxDate>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('birthCountryOfPartner', text);
              this.setState({ birthCountryOfPartner: text });
            }}
            value={this.state.birthCountryOfPartner}
            editable={this.state.editable}
            placeholder={'例：日本'}
          >
            配偶者の出生国
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('aboutMaridgeOfPartner', text);
              this.setState({ aboutMaridgeOfPartner: text });
            }}
            placeholder={'例：未婚、既婚、離婚、別居、死別等'}
            value={this.state.aboutMaridgeOfPartner}
            editable={this.state.editable}
          >
            配偶者の婚姻状況
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('addressOfPartner', text);
              this.setState({ addressOfPartner: text });
            }}
            value={this.state.addressOfPartner}
            editable={this.state.editable}
          >
            配偶者の現住所
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('postalCodeOfPartner', text);
              this.setState({ postalCodeOfPartner: text });
            }}
            value={this.state.postalCodeOfPartner}
            editable={this.state.editable}
          >
            配偶者の郵便番号
          </QuestionTextSet>

          <QuestionTextSet
            onChangeText={text => {
              AsyncStorage.setItem('jobOfPartner', text);
              this.setState({ jobOfPartner: text });
            }}
            value={this.state.jobOfPartner}
            editable={this.state.editable}
            placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
          >
            配偶者のご職業
          </QuestionTextSet>

          <View style={styles.questionTextBox}>
            <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
            <RadioButtons
              onSelect={(index, value) => {
                AsyncStorage.setItem('comeTogetherWithPartner', value);
                this.setState({ comeTogetherWithPartner: value });
              }}
              value={this.state.comeTogetherWithPartner}
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
  questionTextBoxDateMargin: {
    marginTop: 10,
    marginBottom: 20,
  },
  questionTextBoxDateMargin2Line: {
    marginTop: 20,
    marginBottom: 20,
  },
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '83%',
    fontSize: 13,
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

export default FamilyInfo3;
