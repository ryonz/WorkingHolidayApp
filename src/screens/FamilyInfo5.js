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

class FamilyInfo5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,
      disableChecked: false,

      siblingsNameJa1: '',
      siblingsNameEn1: '',
      birthdayOfSiblings1: '',
      birthCountryOfSiblings1: '',
      aboutMaridgeOfSiblings1: '',
      addressOfSiblings1: '',
      postalCodeOfSiblings1: '',
      jobOfSiblings1: '',
      comeTogetherWithSiblings1: '',

      siblingsNameJa2: '',
      siblingsNameEn2: '',
      birthdayOfSiblings2: '',
      birthCountryOfSiblings2: '',
      aboutMaridgeOfSiblings2: '',
      addressOfSiblings2: '',
      postalCodeOfSiblings2: '',
      jobOfSiblings2: '',
      comeTogetherWithSiblings2: '',

      siblingsNameJa3: '',
      siblingsNameEn3: '',
      birthdayOfSiblings3: '',
      birthCountryOfSiblings3: '',
      aboutMaridgeOfSiblings3: '',
      addressOfSiblings3: '',
      postalCodeOfSiblings3: '',
      jobOfSiblings3: '',
      comeTogetherWithSiblings3: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked11').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ editable: false });
        this.setState({ disabled: true });
      } else if (value === 'false') {
        this.setState({ editable: true });
        this.setState({ disabled: false });
      }
    });
    AsyncStorage.getItem('siblingsNameJa1').then(text => {
      if (text !== null) {
        this.setState({ siblingsNameJa1: text });
      }
    });
    AsyncStorage.getItem('siblingsNameEn1').then(text => {
      if (text !== null) {
        this.setState({ siblingsNameEn1: text });
      }
    });
    AsyncStorage.getItem('birthdayOfSiblings1').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfSiblings1: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfSiblings1').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfSiblings1: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfSiblings1').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfSiblings1: text });
      }
    });
    AsyncStorage.getItem('addressOfSiblings1').then(text => {
      if (text !== null) {
        this.setState({ addressOfSiblings1: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfSiblings1').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfSiblings1: text });
      }
    });
    AsyncStorage.getItem('jobOfSiblings1').then(date => {
      if (date !== null) {
        this.setState({ jobOfSiblings1: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithSiblings1').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithSiblings1: value });
      }
    });
    AsyncStorage.getItem('siblingsNameJa2').then(text => {
      if (text !== null) {
        this.setState({ siblingsNameJa2: text });
      }
    });
    AsyncStorage.getItem('siblingsNameEn2').then(text => {
      if (text !== null) {
        this.setState({ siblingsNameEn2: text });
      }
    });
    AsyncStorage.getItem('birthdayOfSiblings2').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfSiblings2: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfSiblings2').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfSiblings2: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfSiblings2').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfSiblings2: text });
      }
    });
    AsyncStorage.getItem('addressOfSiblings2').then(text => {
      if (text !== null) {
        this.setState({ addressOfSiblings2: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfSiblings2').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfSiblings2: text });
      }
    });
    AsyncStorage.getItem('jobOfSiblings2').then(date => {
      if (date !== null) {
        this.setState({ jobOfSiblings2: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithSiblings2').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithSiblings2: value });
      }
    });
    AsyncStorage.getItem('siblingsNameJa3').then(text => {
      if (text !== null) {
        this.setState({ siblingsNameJa3: text });
      }
    });
    AsyncStorage.getItem('siblingsNameEn3').then(text => {
      if (text !== null) {
        this.setState({ siblingsNameEn3: text });
      }
    });
    AsyncStorage.getItem('birthdayOfSiblings3').then(date => {
      if (date !== null) {
        this.setState({ birthdayOfSiblings3: date });
      }
    });
    AsyncStorage.getItem('birthCountryOfSiblings3').then(text => {
      if (text !== null) {
        this.setState({ birthCountryOfSiblings3: text });
      }
    });
    AsyncStorage.getItem('aboutMaridgeOfSiblings3').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridgeOfSiblings3: text });
      }
    });
    AsyncStorage.getItem('addressOfSiblings3').then(text => {
      if (text !== null) {
        this.setState({ addressOfSiblings3: text });
      }
    });
    AsyncStorage.getItem('postalCodeOfSiblings3').then(text => {
      if (text !== null) {
        this.setState({ postalCodeOfSiblings3: text });
      }
    });
    AsyncStorage.getItem('jobOfSiblings3').then(date => {
      if (date !== null) {
        this.setState({ jobOfSiblings3: date });
      }
    });
    AsyncStorage.getItem('comeTogetherWithSiblings3').then(value => {
      if (value !== null) {
        this.setState({ comeTogetherWithSiblings3: value });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked11', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('form11')
        .set({
          form11: [
            { siblingsNameJa1: this.state.siblingsNameJa1 },
            { siblingsNameEn1: this.state.siblingsNameEn1 },
            { birthdayOfSiblings1: this.state.birthdayOfSiblings1 },
            { birthCountryOfSiblings1: this.state.birthCountryOfSiblings1 },
            { aboutMaridgeOfSiblings1: this.state.aboutMaridgeOfSiblings1 },
            { addressOfSiblings1: this.state.addressOfSiblings1 },
            { postalCodeOfSiblings1: this.state.postalCodeOfSiblings1 },
            { jobOfSiblings1: this.state.jobOfSiblings1 },
            { comeTogetherWithSiblings1: this.state.comeTogetherWithSiblings1 },
            { siblingsNameJa2: this.state.siblingsNameJa2 },
            { siblingsNameEn2: this.state.siblingsNameEn2 },
            { birthdayOfSiblings2: this.state.birthdayOfSiblings2 },
            { birthCountryOfSiblings2: this.state.birthCountryOfSiblings2 },
            { aboutMaridgeOfSiblings2: this.state.aboutMaridgeOfSiblings2 },
            { addressOfSiblings2: this.state.addressOfSiblings2 },
            { postalCodeOfSiblings2: this.state.postalCodeOfSiblings2 },
            { jobOfSiblings2: this.state.jobOfSiblings2 },
            { comeTogetherWithSiblings2: this.state.comeTogetherWithSiblings2 },
            { siblingsNameJa3: this.state.siblingsNameJa3 },
            { siblingsNameEn3: this.state.siblingsNameEn3 },
            { birthdayOfSiblings3: this.state.birthdayOfSiblings3 },
            { birthCountryOfSiblings3: this.state.birthCountryOfSiblings3 },
            { aboutMaridgeOfSiblings3: this.state.aboutMaridgeOfSiblings3 },
            { addressOfSiblings3: this.state.addressOfSiblings3 },
            { postalCodeOfSiblings3: this.state.postalCodeOfSiblings3 },
            { jobOfSiblings3: this.state.jobOfSiblings3 },
            { comeTogetherWithSiblings3: this.state.comeTogetherWithSiblings3 },
          ],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit11();
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
      AsyncStorage.setItem('checked11', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked11')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit11();
          this.props.navigation.goBack();
        }
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader onPress={this.onPressBackButton.bind(this)}>家族情報５</InfoHeader>
        <Notes />
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('siblingsNameJa1', text);
            this.setState({ siblingsNameJa1: text });
          }}
          value={this.state.siblingsNameJa1}
          editable={this.state.editable}
        >
          お子様の姓名（漢字表記）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('siblingsNameEn1', text);
            this.setState({ siblingsNameEn1: text });
          }}
          value={this.state.siblingsNameEn1}
          editable={this.state.editable}
        >
          お子様姓名（英字表記/パスポート通りのローマ字で）
        </QuestionTextSet>

        <QuestionTextBoxDate
          onDateChange={date => {
            AsyncStorage.setItem('birthdayOfSiblings1', date);
            this.setState({ birthdayOfSiblings1: date });
          }}
          value={this.state.birthdayOfSiblings1}
          disabled={this.state.disabled}
        >
          お子様の生年月日（西暦で）
        </QuestionTextBoxDate>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('birthCountryOfSiblings1', text);
            this.setState({ birthCountryOfSiblings1: text });
          }}
          value={this.state.birthCountryOfSiblings1}
          editable={this.state.editable}
          placeholder={'例：日本'}
        >
          お子様の出生国
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('aboutMaridgeOfSiblings1', text);
            this.setState({ aboutMaridgeOfSiblings1: text });
          }}
          placeholder={'例：未婚、既婚、離婚、別居、死別等'}
          value={this.state.aboutMaridgeOfSiblings1}
          editable={this.state.editable}
        >
          お子様の婚姻状況
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('addressOfSiblings1', text);
            this.setState({ addressOfSiblings1: text });
          }}
          value={this.state.addressOfSiblings1}
          editable={this.state.editable}
        >
          お子様の現住所
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('postalCodeOfSiblings1', text);
            this.setState({ postalCodeOfSiblings1: text });
          }}
          value={this.state.postalCodeOfSiblings1}
          editable={this.state.editable}
        >
          お子様の郵便番号
        </QuestionTextSet>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('jobOfSiblings1', text);
            this.setState({ jobOfSiblings1: text });
          }}
          value={this.state.jobOfSiblings1}
          editable={this.state.editable}
          placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
        >
          お子様のご職業
        </QuestionTextSet>

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('comeTogetherWithSiblings1', value);
              this.setState({ comeTogetherWithSiblings1: value });
            }}
            value={this.state.comeTogetherWithSiblings1}
            disabled={this.state.disabled}
          />
        </View>
        {/* 2行目 */}
        <View style={styles.line} />

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('siblingsNameJa2', text);
            this.setState({ siblingsNameJa2: text });
          }}
          value={this.state.siblingsNameJa2}
          editable={this.state.editable}
        >
          お子様の姓名（漢字表記）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('siblingsNameEn2', text);
            this.setState({ siblingsNameEn2: text });
          }}
          value={this.state.siblingsNameEn2}
          editable={this.state.editable}
        >
          お子様姓名（英字表記/パスポート通りのローマ字で）
        </QuestionTextSet>

        <QuestionTextBoxDate
          onDateChange={date => {
            AsyncStorage.setItem('birthdayOfSiblings2', date);
            this.setState({ birthdayOfSiblings2: date });
          }}
          value={this.state.birthdayOfSiblings2}
          disabled={this.state.disabled}
        >
          お子様の生年月日（西暦で）
        </QuestionTextBoxDate>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('birthCountryOfSiblings2', text);
            this.setState({ birthCountryOfSiblings2: text });
          }}
          value={this.state.birthCountryOfSiblings2}
          editable={this.state.editable}
          placeholder={'例：日本'}
        >
          お子様の出生国
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('aboutMaridgeOfSiblings2', text);
            this.setState({ aboutMaridgeOfSiblings2: text });
          }}
          placeholder={'例：未婚、既婚、離婚、別居、死別等'}
          value={this.state.aboutMaridgeOfSiblings2}
          editable={this.state.editable}
        >
          お子様の婚姻状況
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('addressOfSiblings2', text);
            this.setState({ addressOfSiblings2: text });
          }}
          value={this.state.addressOfSiblings2}
          editable={this.state.editable}
        >
          お子様の現住所
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('postalCodeOfSiblings2', text);
            this.setState({ postalCodeOfSiblings2: text });
          }}
          value={this.state.postalCodeOfSiblings2}
          editable={this.state.editable}
        >
          お子様の郵便番号
        </QuestionTextSet>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('jobOfSiblings2', text);
            this.setState({ jobOfSiblings2: text });
          }}
          value={this.state.jobOfSiblings2}
          editable={this.state.editable}
          placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
        >
          お子様のご職業
        </QuestionTextSet>

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('comeTogetherWithSiblings2', value);
              this.setState({ comeTogetherWithSiblings2: value });
            }}
            value={this.state.comeTogetherWithSiblings2}
            disabled={this.state.disabled}
          />
        </View>

        {/* 3行目 */}
        <View style={styles.line} />

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('siblingsNameJa3', text);
            this.setState({ siblingsNameJa3: text });
          }}
          value={this.state.siblingsNameJa3}
          editable={this.state.editable}
        >
          お子様の姓名（漢字表記）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('siblingsNameEn3', text);
            this.setState({ siblingsNameEn3: text });
          }}
          value={this.state.siblingsNameEn3}
          editable={this.state.editable}
        >
          お子様姓名（英字表記/パスポート通りのローマ字で）
        </QuestionTextSet>

        <QuestionTextBoxDate
          onDateChange={date => {
            AsyncStorage.setItem('birthdayOfSiblings3', date);
            this.setState({ birthdayOfSiblings3: date });
          }}
          value={this.state.birthdayOfSiblings3}
          disabled={this.state.disabled}
        >
          お子様の生年月日（西暦で）
        </QuestionTextBoxDate>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('birthCountryOfSiblings3', text);
            this.setState({ birthCountryOfSiblings3: text });
          }}
          value={this.state.birthCountryOfSiblings3}
          editable={this.state.editable}
          placeholder={'例：日本'}
        >
          お子様の出生国
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('aboutMaridgeOfSiblings3', text);
            this.setState({ aboutMaridgeOfSiblings3: text });
          }}
          placeholder={'例：未婚、既婚、離婚、別居、死別等'}
          value={this.state.aboutMaridgeOfSiblings3}
          editable={this.state.editable}
        >
          お子様の婚姻状況
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('addressOfSiblings3', text);
            this.setState({ addressOfSiblings3: text });
          }}
          value={this.state.addressOfSiblings3}
          editable={this.state.editable}
        >
          お子様の現住所
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('postalCodeOfSiblings3', text);
            this.setState({ postalCodeOfSiblings3: text });
          }}
          value={this.state.postalCodeOfSiblings3}
          editable={this.state.editable}
        >
          お子様の郵便番号
        </QuestionTextSet>

        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('jobOfSiblings3', text);
            this.setState({ jobOfSiblings3: text });
          }}
          value={this.state.jobOfSiblings3}
          editable={this.state.editable}
          placeholder={'例：レジ/洋服販売/飲食店ウェイター/会社員/主婦/定年退職等'}
        >
          お子様のご職業
        </QuestionTextSet>

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>一緒にカナダに来ますか？（はい/いいえ）</Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('comeTogetherWithSiblings3', value);
              this.setState({ comeTogetherWithSiblings3: value });
            }}
            value={this.state.comeTogetherWithSiblings3}
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
  line: {
    width: '100%',
    backgroundColor: '#000000',
    height: 0.5,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default FamilyInfo5;
