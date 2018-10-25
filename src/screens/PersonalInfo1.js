import React from 'react';
import { StyleSheet, ScrollView, View, AsyncStorage } from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import Notes from '../elements/Notes';
import QuestionTextSet from '../components/QuestionTextSet';
import QuestionTextBoxDate from '../components/QuestionTextBoxDate';
import Copyrights from '../elements/Copyrights';

class PersonalInfo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editable: true,
      disabled: false,

      fullname: '',
      middleName: '',
      reason: '',
      birthPlaceCity: '',
      birthPlaceCountry: '',
      Citizinchip: '',
      aboutMaridge: '',
      fromTermOfMaridge: '',
      ToTermOfMaridge: '',
      nameOfSpouse: '',
      birthdateOfSpouse: '',
      fromTermOfExMaridge: '',
      ToTermOfExMaridge: '',
      nameOfExSpouse: '',
      birthdateOfExSpouse: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked1').then(value => {
      this.setState({ checked: JSON.parse(value) });
      if (value === 'true') {
        this.setState({ editable: false });
        this.setState({ disabled: true });
      } else if (value === 'false') {
        this.setState({ editable: true });
        this.setState({ disabled: false });
      }
    });
    AsyncStorage.getItem('fullname').then(text => {
      if (text !== null) {
        this.setState({ fullname: text });
      }
    });
    AsyncStorage.getItem('middleName').then(text => {
      if (text !== null) {
        this.setState({ middleName: text });
      }
    });
    AsyncStorage.getItem('reason').then(text => {
      if (text !== null) {
        this.setState({ reason: text });
      }
    });
    AsyncStorage.getItem('birthPlaceCity').then(text => {
      if (text !== null) {
        this.setState({ birthPlaceCity: text });
      }
    });
    AsyncStorage.getItem('birthPlaceCountry').then(text => {
      if (text !== null) {
        this.setState({ birthPlaceCountry: text });
      }
    });
    AsyncStorage.getItem('Citizinchip').then(text => {
      if (text !== null) {
        this.setState({ Citizinchip: text });
      }
    });
    AsyncStorage.getItem('aboutMaridge').then(text => {
      if (text !== null) {
        this.setState({ aboutMaridge: text });
      }
    });
    AsyncStorage.getItem('fromTermOfMaridge').then(date => {
      if (date !== null) {
        this.setState({ fromTermOfMaridge: date });
      }
    });
    AsyncStorage.getItem('ToTermOfMaridge').then(date => {
      if (date !== null) {
        this.setState({ ToTermOfMaridge: date });
      }
    });
    AsyncStorage.getItem('nameOfSpouse').then(text => {
      if (text !== null) {
        this.setState({ nameOfSpouse: text });
      }
    });
    AsyncStorage.getItem('birthdateOfSpouse').then(date => {
      if (date !== null) {
        this.setState({ birthdateOfSpouse: date });
      }
    });
    AsyncStorage.getItem('fromTermOfExMaridge').then(date => {
      if (date !== null) {
        this.setState({ fromTermOfExMaridge: date });
      }
    });
    AsyncStorage.getItem('ToTermOfExMaridge').then(date => {
      if (date !== null) {
        this.setState({ ToTermOfExMaridge: date });
      }
    });
    AsyncStorage.getItem('nameOfExSpouse').then(text => {
      if (text !== null) {
        this.setState({ nameOfExSpouse: text });
      }
    });
    AsyncStorage.getItem('birthdateOfExSpouse').then(date => {
      if (date !== null) {
        this.setState({ birthdateOfExSpouse: date });
      }
    });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ checked: true });
      AsyncStorage.setItem('checked1', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('form1')
        .set({
          form1: [
            { fullname: this.state.fullname },
            { middleName: this.state.middleName },
            { reason: this.state.reason },
            { birthPlaceCity: this.state.birthPlaceCity },
            { birthPlaceCountry: this.state.birthPlaceCountry },
            { Citizinchip: this.state.Citizinchip },
            { aboutMaridge: this.state.aboutMaridge },
            { fromTermOfMaridge: this.state.fromTermOfMaridge },
            { ToTermOfMaridge: this.state.ToTermOfMaridge },
            { nameOfSpouse: this.state.nameOfSpouse },
            { birthdateOfSpouse: this.state.birthdateOfSpouse },
            { fromTermOfExMaridge: this.state.fromTermOfExMaridge },
            { ToTermOfExMaridge: this.state.ToTermOfExMaridge },
            { nameOfExSpouse: this.state.nameOfExSpouse },
            { birthdateOfExSpouse: this.state.birthdateOfExSpouse },
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
      AsyncStorage.setItem('checked1', JSON.stringify(false));
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader navigation={this.props.navigation}>申請者情報１</InfoHeader>
        <Notes />
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('fullname', text);
            this.setState({ fullname: text });
          }}
          placeholder={'例：留学太郎'}
          value={this.state.fullname}
          editable={this.state.editable}
        >
          姓名（漢字表記）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('middleName', text);
            this.setState({ middleName: text });
          }}
          value={this.state.middleName}
          editable={this.state.editable}
        >
          本名以外に旧姓・通称名(通名)・別名など他の名前があればローマ字で記入
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('reason', text);
            this.setState({ reason: text });
          }}
          value={this.state.reason}
          editable={this.state.editable}
          placeholder={'例：結婚・離婚/ご両親の離婚のためなど'}
        >
          別名がある方はその理由
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('birthPlaceCity', text);
            this.setState({ birthPlaceCity: text });
          }}
          value={this.state.birthPlaceCity}
          editable={this.state.editable}
          placeholder={'例：兵庫県 神戸市'}
        >
          出生地（都道府県と市名）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('birthPlaceCountry', text);
            this.setState({ birthPlaceCountry: text });
          }}
          placeholder={'例：日本'}
          value={this.state.birthPlaceCountry}
          editable={this.state.editable}
        >
          出生地（国名）
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('Citizinchip', text);
            this.setState({ Citizinchip: text });
          }}
          value={this.state.Citizinchip}
          editable={this.state.editable}
          placeholder={'例：日本'}
        >
          国籍
        </QuestionTextSet>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('aboutMaridge', text);
            this.setState({ aboutMaridge: text });
          }}
          placeholder={'例：未婚、既婚、離婚、別居、死別等'}
          value={this.state.aboutMaridge}
          editable={this.state.editable}
        >
          婚姻の形態
        </QuestionTextSet>
        <View style={styles.questionTextBoxDateMargin}>
          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('fromTermOfMaridge', date);
              this.setState({ fromTermOfMaridge: date });
            }}
            value={this.state.fromTermOfMaridge}
            disabled={this.state.disabled}
          >
            婚姻期間（上記で既婚・離婚と答えた方)
          </QuestionTextBoxDate>
          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('ToTermOfMaridge', date);
              this.setState({ ToTermOfMaridge: date });
            }}
            value={this.state.ToTermOfMaridge}
            disabled={this.state.disabled}
          >
            から
          </QuestionTextBoxDate>
        </View>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('nameOfSpouse', text);
            this.setState({ nameOfSpouse: text });
          }}
          value={this.state.nameOfSpouse}
          placeholder={'例：Michiko Ryugaku'}
          editable={this.state.editable}
        >
          配偶者の氏名（上記で既婚・離婚と答えた方）{'\n'}パスポート表記通りローマ字で記入
        </QuestionTextSet>
        <QuestionTextBoxDate
          onDateChange={date => {
            AsyncStorage.setItem('birthdateOfSpouse', date);
            this.setState({ birthdateOfSpouse: date });
          }}
          value={this.state.birthdateOfSpouse}
          disabled={this.state.disabled}
        >
          配偶者の生年月日（西暦で）
        </QuestionTextBoxDate>
        <View style={styles.questionTextBoxDateMargin2Line}>
          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('fromTermOfExMaridge', date);
              this.setState({ fromTermOfExMaridge: date });
            }}
            value={this.state.fromTermOfExMaridge}
            disabled={this.state.disabled}
          >
            上記で回答した婚姻期間以外に、過去に婚姻歴の）{'\n'}ある方はその婚姻期間
          </QuestionTextBoxDate>
          <QuestionTextBoxDate
            onDateChange={date => {
              AsyncStorage.setItem('ToTermOfExMaridge', date);
              this.setState({ ToTermOfExMaridge: date });
            }}
            value={this.state.ToTermOfExMaridge}
            disabled={this.state.disabled}
          >
            から
          </QuestionTextBoxDate>
        </View>
        <QuestionTextSet
          onChangeText={text => {
            AsyncStorage.setItem('nameOfExSpouse', text);
            this.setState({ nameOfExSpouse: text });
          }}
          value={this.state.nameOfExSpouse}
          placeholder={'例：Hanako Ryuzaki'}
          editable={this.state.editable}
        >
          上記で過去の婚姻歴があると回答した方は、その{'\n'}配偶者の氏名をパスポート表記通りローマ字で記入
        </QuestionTextSet>
        <QuestionTextBoxDate
          onDateChange={date => {
            AsyncStorage.setItem('birthdateOfExSpouse', date);
            this.setState({ birthdateOfExSpouse: date });
          }}
          value={this.state.birthdateOfExSpouse}
          disabled={this.state.disabled}
        >
          上記の配偶者の生年月日（西暦で）
        </QuestionTextBoxDate>

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
});

export default PersonalInfo1;
