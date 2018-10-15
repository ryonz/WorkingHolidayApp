import React from 'react';
import { StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import firebase from 'firebase';

import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';

class PersonalInfo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleOnpress() {
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    db.collection(`users/${user.uid}/forms`).doc('form2')
      .set({
        form2: [
          { currentAddress: this.state.currentAddress },
          { currentAddressYomi: this.state.currentAddressYomi },
          { currentPostalCode: this.state.currentPostalCode },
          { startDateofcurrentAdress: this.state.startDateofcurrentAdress },
          { domicile: this.state.domicile },
          { addressOfDomicile: this.state.addressOfDomicile },
          { addressOfDomicileYomi: this.state.addressOfDomicileYomi },
          { postalCodeofDomicile: this.state.postalCodeofDomicile },
          { phoneNumber: this.state.phoneNumber },
          { faxNumber: this.state.faxNumber },
        ],
      });
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報２</InfoHeader>
        <Notes />
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('currentAddress', text);
            this.setState({ currentAddress: text });
          }}
          value={this.state.currentAddress}
        >
          現住所(カナダにいらっしゃる方はカナダのご住所で)
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('currentAddressYomi', text);
            this.setState({ currentAddressYomi: text });
          }}
          value={this.state.currentAddressYomi}
        >
          現住所ふりがな{'\n'}(カナダのご住所をご回答頂いた方は不要です)
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('currentPostalCode', text);
            this.setState({ currentPostalCode: text });
          }}
          value={this.state.currentPostalCode}
        >
          現住所の郵便番号
        </QuestionTextSet>
        <QuestionTextBoxDate
          onDateChange={(date) => {
            AsyncStorage.setItem('startDateofcurrentAdress', date);
            this.setState({ startDateofcurrentAdress: date });
          }}
          value={this.state.startDateofcurrentAdress}
        >
          現住所にご自身が住み始めた日
        </QuestionTextBoxDate>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('domicile', text);
            this.setState({ domicile: text });
          }}
          value={this.state.domicile}
        >
          本籍は「B現住所と同じ」「C現住所と違う」
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('addressOfDomicile', text);
            this.setState({ addressOfDomicile: text });
          }}
          value={this.state.addressOfDomicile}
        >
          「C現住所と違う」の場合本籍地の住所
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('addressOfDomicileYomi', text);
            this.setState({ addressOfDomicileYomi: text });
          }}
          value={this.state.addressOfDomicileYomi}
        >
          本籍地ふりがな
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('postalCodeofDomicile', text);
            this.setState({ postalCodeofDomicile: text });
          }}
          value={this.state.postalCodeofDomicile}
        >
          本籍地の郵便番号
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('phoneNumber', text);
            this.setState({ phoneNumber: text });
          }}
          value={this.state.phoneNumber}
        >
          携帯番号（もしくはご自宅）の番号
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={(text) => {
            AsyncStorage.setItem('faxNumber', text);
            this.setState({ faxNumber: text });
          }}
          value={this.state.faxNumber}
        >
          FAX番号（もしあれば）
        </QuestionTextSet>

        <SubmitButton
          style={styles.saveButton}
          onPress={this.handleOnpress.bind(this)}
        >
          入力完了
        </SubmitButton>

        <Copyrights />

      </ScrollView>
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
});

export default PersonalInfo2;
