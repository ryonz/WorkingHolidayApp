import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  AsyncStorage,
  Alert,
} from 'react-native';

import firebase from 'firebase';
import { CheckBox } from 'react-native-elements';
import InfoHeader from '../components/InfoHeader';
import RadioButtons from '../elements/RadioButtons';
import Copyrights from '../elements/Copyrights';

class Agreement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      disableChecked: false,

      agreement: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('checked15')
      .then(value => {
        this.setState({ checked: JSON.parse(value) });
        if (value === 'true') {
          this.setState({ disabled: true });
        } else if (value === 'false') {
          this.setState({ disabled: false });
        }
      });
    AsyncStorage.getItem('disableChecked')
      .then(text => {
        if (text !== null) {
          this.setState({ disableChecked: JSON.parse(false) });
        }
      });
    AsyncStorage.getItem('agreement')
      .then(text => {
        if (text !== null) {
          this.setState({ agreement: text });
        }
      });
  }

  onPressCheckBox() {
    const { checked } = this.state;
    if (checked !== true) {
      this.setState({ disableChecked: true });
      this.setState({ checked: true });
      AsyncStorage.setItem('checked15', JSON.stringify(true));
      const db = firebase.firestore();
      const { currentUser } = firebase.auth();
      db.collection(`users/${currentUser.uid}/forms`)
        .doc('Agreement')
        .set({
          Agreement: [{ agreement: this.state.agreement }],
        })
        .then(() => {
          this.props.navigation.state.params.setStateEdit15();
          this.props.navigation.navigate('WHApply');
          this.setState({ disableChecked: false });
        })
        .catch(error => {
          console.log(error);
          this.setState({ disableChecked: false });
        });
    } else if (checked !== false) {
      this.setState({ checked: false });
      this.setState({ disabled: false });
      this.props.navigation.state.params.setStateEdit15();
      AsyncStorage.setItem('checked15', JSON.stringify(false));
    }
  }

  onPressBackButton() {
    AsyncStorage.getItem('checked15')
      .then((value) => {
        if (value !== 'false') {
          this.props.navigation.goBack();
        } else if (value === 'false') {
          this.props.navigation.state.params.setStateEdit15();
          this.props.navigation.goBack();
        }
      });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader
          onPress={this.onPressBackButton.bind(this)}
        >
          同意書
        </InfoHeader>

        <View style={styles.textBox}>
          <Text style={styles.textNoteText}>
            以下の「同意書」を読み、
            一番下の質問にお答えください。{'\n'}
          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.textBox}>
          <Text style={styles.text}>
          ●同意書記述欄

          </Text>
        </View>

        <View style={styles.line} />

        <View style={styles.questionTextBox}>
          <Text style={styles.questionText}>
            ◎以上の同意内容を理解し、またそれに同意しますか？（はい／いいえ）{'\n'}
          </Text>
          <RadioButtons
            onSelect={(index, value) => {
              AsyncStorage.setItem('agreement', value);
              this.setState({ agreement: value });
              if (value === 'Yes') {
                AsyncStorage.setItem('disableChecked', JSON.stringify(false));
                this.setState({ disableChecked: false });
              } else {
                this.setState({ disableChecked: true });
                Alert.alert('同意しない場合、ワーキングホリデーの申請ができません。');
              }
            }}
            value={this.state.agreement}
            disabled={this.state.disabled}
          />
        </View>

        <CheckBox
          disabled={this.state.disableChecked}
          center
          title={'完了/修正'}
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
  textNoteText: {
    width: '83%',
  },
  textBox: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 18,
  },
  text: {
    width: '90%',
    backgroundColor: '#F0F0F0',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
    height: 0.8,
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
});

export default Agreement;
