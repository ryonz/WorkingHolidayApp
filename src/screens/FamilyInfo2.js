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

class FamilyInfo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,

      fatherNameJa: '',
      fatherNameEn: '',
      birthdayOfFather: '',
      birthCountryOfFather: '',
      aboutMaridgeOfFather: '',
      addressOfFather: '',
      postalCodeOfFather: '',
      jobOfFather: '',
      comeTogetherWithFather: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked8').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ editable: false });
        this.setState({ disabled: true });
      } else if (value === 'false') {
        this.setState({ editable: true });
        this.setState({ disabled: false });
      }
    });
    AsyncStorage.getItem('fatherNameJa').then(text => {
      if (text !== null) {
        this.setState({ fatherNameJa: text });
      }
    });
    AsyncStorage.getItem('fatherNameEn').then(text => {
      if (text !== null) {
        this.setState({ fatherNameEn: text });
      }
    });
    AsyncStorage.getItem('birthdayOfFather').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfFather: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfFather').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfFather: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfFather').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfFather: text });
      }
    });
    AsyncStorage.getItem('addressOfFather').then(text => {
      if (text !== null) {
        this.setState({ addressOfFather: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfFather').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfFather: text });
      }
    });
    AsyncStorage.getItem('jobOfFather').then(date => {
      if (date !== null) {
        this.setState({ jobOfFather: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithFather').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithFather: value });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ checked: true });
      AsyncStorage.setItem('checked8', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('form8')
        .set({
          form8: [
            { fatherNameJa: this.state.fatherNameJa },
            { fatherNameEn: this.state.fatherNameEn },
            { birthdayOfFather: this.state.birthdayOfFather },
            { birthCountryOfFather: this.state.birthCountryOfFather },
            { aboutMaridgeOfFather: this.state.aboutMaridgeOfFather },
            { addressOfFather: this.state.addressOfFather },
            { postalCodeOfFather: this.state.postalCodeOfFather },
            { jobOfFather: this.state.jobOfFather },
            { comeTogetherWithFather: this.state.comeTogetherWithFather },
          ],
        })
        .then(() => {
          this.props.navigation.goBack();
        })
        .catch(error => {
          console.log(error);
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ editable: true });
      this.setState({ disabled: false });
      AsyncStorage.setItem('checked7', JSON.stringify(false));
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>家族情報２</InfoHeader>
        <Notes />
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('fatherNameJa', text);
            this.setState({ fatherNameJa: text });
          }}
          placeholder={'例：留学健二'}
          value={this.state.fatherNameJa}
          editable={this.state.editable}
        >
          お父様姓名（漢字表記）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('fatherNameEn', text);
            this.setState({ fatherNameEn: text });
          }}
          value={this.state.fatherNameEn}
          placeholder={'例：Kenji Ryugaku'}
          editable={this.state.editable}
        >
          お父様姓名（英字表記/パスポート通りのローマ字で）
        </QuestionTextSet>

        <QuestionTextBoxDate
          onDateChange={date => {
            AsyncStorage.setItem('birthdayOfFather', date);
            this.setState({ birthdayOfFather: date });
          }}
          value={this.state.birthdayOfFather}
          disabled={this.state.disabled}
        >
          お父様の生年月日（西暦で）
        </QuestionTextBoxDate>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('birthCountryOfFather', text);
            this.setState({ birthCountryOfFather: text });
          }}
          value={this.state.birthCountryOfFather}
          editable={this.state.editable}
          placeholder={'例：日本'}
        >
          お父様の出生国
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('aboutMaridgeOfFather', text);
            this.setState({ aboutMaridgeOfFather: text });
          }}
          placeholder={'例：未婚、既婚、離婚、別居、死別等'}
          value={this.state.aboutMaridgeOfFather}
          editable={this.state.editable}
        >
          お父様の婚姻状況
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('addressOfFather', text);
            this.setState({ addressOfFather: text });
          }}
          value={this.state.addressOfFather}
          editable={this.state.editable}
        >
          お父様の現住所
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('postalCodeOfFather', text);
            this.setState({ postalCodeOfFather: text });
          }}
          value={this.state.postalCodeOfFather}
          editable={this.state.editable}
        >
          お父様の郵便番号
        </QuestionTextSet>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('jobOfFather', text);
            this.setState({ jobOfFather: text });
          }}
          value={this.state.jobOfFather}
          editable={this.state.editable}
          placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
        >
          お父様のご職業
        </QuestionTextSet>

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('comeTogetherWithFather', value);
              this.setState({ comeTogetherWithFather: value });
            }}
            value={this.state.comeTogetherWithFather}
            disabled={this.state.disabled}
          />
        </View>

        <CheckBox
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

export default FamilyInfo2;
