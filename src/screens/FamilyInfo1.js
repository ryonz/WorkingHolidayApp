import React from 'react';
import { StyleSheet, ScrollView, View, Text, AsyncStorage } from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import RadioButtons from '../elements/RadioButtons';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import Copyrights from '../elements/Copyrights';

class FamilyInfo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      motherNameJa: '',
      motherNameEn: '',
      birthdayOfMother: '',
      birthCountryOfMother: '',
      aboutMaridgeOfMother: '',
      addressOfMother: '',
      postalCodeOfMother: '',
      jobOfMother: '',
      comeTogetherWithMother: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked7').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ editable: false });
        this.setState({ disabled: true });
      } else if (value === 'false') {
        this.setState({ editable: true });
        this.setState({ disabled: false });
      }
    });
    AsyncStorage.getItem('motherNameJa').then(text => {
      if (text !== null) {
        this.setState({ motherNameJa: text });
      }
    });
    AsyncStorage.getItem('motherNameEn').then(text => {
      if (text !== null) {
        this.setState({ motherNameEn: text });
      }
    });
    AsyncStorage.getItem('birthdayOfMother').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfMother: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfMother').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfMother: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfMother').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfMother: text });
      }
    });
    AsyncStorage.getItem('addressOfMother').then(text => {
      if (text !== null) {
        this.setState({ addressOfMother: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfMother').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfMother: text });
      }
    });
    AsyncStorage.getItem('jobOfMother').then(date => {
      if (date !== null) {
        this.setState({ jobOfMother: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithMother').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithMother: value });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked7', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('form7')
        .set({
          form7: [
            { motherNameJa: this.state.motherNameJa },
            { motherNameEn: this.state.motherNameEn },
            { birthdayOfMother: this.state.birthdayOfMother },
            { birthCountryOfMother: this.state.birthCountryOfMother },
            { aboutMaridgeOfMother: this.state.aboutMaridgeOfMother },
            { addressOfMother: this.state.addressOfMother },
            { postalCodeOfMother: this.state.postalCodeOfMother },
            { jobOfMother: this.state.jobOfMother },
            { comeTogetherWithMother: this.state.comeTogetherWithMother },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit7();
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
      AsyncStorage.setItem('checked7', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked7')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit7();
          this.props.navigation.goBack();
        }
      });
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader onPress={this.onPressBackButton.bind(this)}>家族情報１</InfoHeader>
        <Notes />
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('motherNameJa', text);
            this.setState({ motherNameJa: text });
          }}
          placeholder={'例：留学花子'}
          value={this.state.motherNameJa}
          editable={this.state.editable}
        >
          お母様姓名（漢字表記）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('motherNameEn', text);
            this.setState({ motherNameEn: text });
          }}
          value={this.state.motherNameEn}
          placeholder={'例：Hanako Ryugaku'}
          editable={this.state.editable}
        >
          お母様姓名（英字表記/パスポート通りのローマ字で）
        </QuestionTextSet>

        <QuestionTextBoxDate
          onDateChange={date => {
            AsyncStorage.setItem('birthdayOfMother', date);
            this.setState({ birthdayOfMother: date });
          }}
          value={this.state.birthdayOfMother}
          disabled={this.state.disabled}
        >
          お母様の生年月日（西暦で）
        </QuestionTextBoxDate>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('birthCountryOfMother', text);
            this.setState({ birthCountryOfMother: text });
          }}
          value={this.state.birthCountryOfMother}
          editable={this.state.editable}
          placeholder={'例：日本'}
        >
          お母様の出生国
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('aboutMaridgeOfMother', text);
            this.setState({ aboutMaridgeOfMother: text });
          }}
          placeholder={'例：未婚、既婚、離婚、別居、死別等'}
          value={this.state.aboutMaridgeOfMother}
          editable={this.state.editable}
        >
          お母様の婚姻状況
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('addressOfMother', text);
            this.setState({ addressOfMother: text });
          }}
          value={this.state.addressOfMother}
          editable={this.state.editable}
        >
          お母様の現住所
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('postalCodeOfMother', text);
            this.setState({ postalCodeOfMother: text });
          }}
          value={this.state.postalCodeOfMother}
          editable={this.state.editable}
        >
          お母様の郵便番号
        </QuestionTextSet>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('jobOfMother', text);
            this.setState({ jobOfMother: text });
          }}
          value={this.state.jobOfMother}
          editable={this.state.editable}
          placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
        >
          お母様のご職業
        </QuestionTextSet>

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('comeTogetherWithMother', value);
              this.setState({ comeTogetherWithMother: value });
            }}
            value={this.state.comeTogetherWithMother}
            disabled={this.state.disabled}
          />
        </View>

        <CheckBox
          disabled={this.state.disableChecked}
          center
          title={'保存/修正'}
          checked={this.state.checked}
          onPress={() => {
            this.onPressCheckBox();
          }}
        />

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
  questionTextBox: {
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    width: '83%',
    fontSize: 13,
  },
});

export default FamilyInfo1;