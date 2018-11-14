import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';

import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import Copyrights from '../elements/Copyrights';

class PersonalInfo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      modifyNote: '',

      currentAddress: '',
      currentAddressYomi: '',
      currentPostalCode: '',
      startDateofcurrentAdress: '',
      domicile: '',
      addressOfDomicile: '',
      addressOfDomicileYomi: '',
      postalCodeofDomicile: '',
      phoneNumber: '',
      faxNumber: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked2')
      .then((value) => {
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
    AsyncStorage.getItem('currentAddress')
      .then((text) => {
        if (text !== null) {
          this.setState({ currentAddress: text });
        }
      });

    AsyncStorage.getItem('currentAddressYomi')
      .then((text) => {
        if (text !== null) {
          this.setState({ currentAddressYomi: text });
        }
      });

    AsyncStorage.getItem('currentPostalCode')
      .then((text) => {
        if (text !== null) {
          this.setState({ currentPostalCode: text });
        }
      });

    AsyncStorage.getItem('startDateofcurrentAdress')
      .then((date) => {
        if (date !== null) {
          this.setState({ startDateofcurrentAdress: date });
        }
      });

    AsyncStorage.getItem('domicile')
      .then((text) => {
        if (text !== null) {
          this.setState({ domicile: text });
        }
      });

    AsyncStorage.getItem('addressOfDomicile')
      .then((text) => {
        if (text !== null) {
          this.setState({ addressOfDomicile: text });
        }
      });

    AsyncStorage.getItem('addressOfDomicileYomi')
      .then((text) => {
        if (text !== null) {
          this.setState({ addressOfDomicileYomi: text });
        }
      });
    AsyncStorage.getItem('postalCodeofDomicile')
      .then((text) => {
        if (text !== null) {
          this.setState({ postalCodeofDomicile: text });
        }
      });
    AsyncStorage.getItem('phoneNumber')
      .then((text) => {
        if (text !== null) {
          this.setState({ phoneNumber: text });
        }
      });
    AsyncStorage.getItem('faxNumber')
      .then((text) => {
        if (text !== null) {
          this.setState({ faxNumber: text });
        }
      });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked2', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`).doc('申請者情報②')
        .set({
          '申請者情報② ' : [
            { '現住所（カナダにいらしゃる方はカナダのご住所で）': this.state.currentAddress },
            { '現住所ふりがな（カナダのご住所をご回答いただいた方は不要です）': this.state.currentAddressYomi },
            { '現住所の郵便番号 ': this.state.currentPostalCode },
            { '現住所にご自身が住み始めた日（西暦で年月日）': this.state.startDateofcurrentAdress },
            { '本籍は「B現住所と同じ」「C現住所と違う」': this.state.domicile },
            { 'Cの場合本籍地の住所 ': this.state.addressOfDomicile },
            { '本籍地ふりがな ': this.state.addressOfDomicileYomi },
            { '本籍地の郵便番号 ': this.state.postalCodeofDomicile },
            { '携帯番号（もしくはご自宅）の番号': this.state.phoneNumber },
            { 'FAX番号（もしあれば）': this.state.faxNumber }],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit2();
          this.props.navigation.navigate('WHApply');
          this.setState({ disableChecked: false });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ disableChecked: false });
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ editable: true });
      this.setState({ disabled: false });
      AsyncStorage.setItem('checked2', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked2')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit2();
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
          <InfoHeader onPress={this.onPressBackButton.bind(this)}>申請者情報２</InfoHeader>
          <Notes />
          <View style={styles.notesTextBox}>
            <Text style={styles.notesText}>
              {this.state.modifyNote}
            </Text>
          </View>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('currentAddress', text);
              this.setState({ currentAddress: text });
            }}
            value={this.state.currentAddress}
            editable={this.state.editable}
          >
            現住所(カナダにいらっしゃる方はカナダのご住所で)
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('currentAddressYomi', text);
              this.setState({ currentAddressYomi: text });
            }}
            value={this.state.currentAddressYomi}
            editable={this.state.editable}
          >
            現住所ふりがな{'\n'}(カナダのご住所をご回答頂いた方は不要です)
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('currentPostalCode', text);
              this.setState({ currentPostalCode: text });
            }}
            value={this.state.currentPostalCode}
            editable={this.state.editable}
          >
            現住所の郵便番号
          </QuestionTextSet>
          <QuestionTextBoxDate
            onDateChange={(date) => {
              AsyncStorage.setItem('startDateofcurrentAdress', date);
              this.setState({ startDateofcurrentAdress: date });
            }}
            value={this.state.startDateofcurrentAdress}
            disabled={this.state.disabled}
          >
            現住所にご自身が住み始めた日
          </QuestionTextBoxDate>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('domicile', text);
              this.setState({ domicile: text });
            }}
            value={this.state.domicile}
            editable={this.state.editable}
          >
            本籍は「B現住所と同じ」「C現住所と違う」
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('addressOfDomicile', text);
              this.setState({ addressOfDomicile: text });
            }}
            value={this.state.addressOfDomicile}
            editable={this.state.editable}
          >
            「C現住所と違う」の場合本籍地の住所
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('addressOfDomicileYomi', text);
              this.setState({ addressOfDomicileYomi: text });
            }}
            value={this.state.addressOfDomicileYomi}
            editable={this.state.editable}
          >
            本籍地ふりがな
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('postalCodeofDomicile', text);
              this.setState({ postalCodeofDomicile: text });
            }}
            value={this.state.postalCodeofDomicile}
            editable={this.state.editable}
          >
            本籍地の郵便番号
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('phoneNumber', text);
              this.setState({ phoneNumber: text });
            }}
            value={this.state.phoneNumber}
            editable={this.state.editable}
          >
            携帯番号（もしくはご自宅）の番号
          </QuestionTextSet>
          <QuestionTextSet
            onChangeText={(text) => {
              AsyncStorage.setItem('faxNumber', text);
              this.setState({ faxNumber: text });
            }}
            value={this.state.faxNumber}
            editable={this.state.editable}
          >
            FAX番号（もしあれば）
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
  questionTextBoxDateMargin: {
    marginTop: 10,
    marginBottom: 20,
  },
  questionTextBoxDateMargin2Line: {
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

export default PersonalInfo2;
