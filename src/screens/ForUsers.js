import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import firebase from 'firebase';
import InfoHeader from '../components/InfoHeader';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';
import { isiPhoneSE, isiPhoneEightPlus, isiPhoneX } from '../lib/windowsize';


class ForUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: true,
    };
  }

  onPressSubmitButton() {
    this.setState({ editable: false });
    const user = firebase.auth().currentUser;
    if (user !== null) {
      this.props.navigation.navigate('WHApply');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <InfoHeader
          style={styles.headerText}
          onPress={() => { this.props.navigation.goBack(); }}
        >
          初めてこのアプリを使う方へ
        </InfoHeader>
        <View style={styles.mainTextBox}>
          <Text style={styles.mainText}>
            このアプリは、ワーキングホリデーの申請情報を日本語で入力してもらい、
            それをJPCANADAが英訳して申請するためのアプリです。{'\n'}
            {'\n'}
            個人情報を扱うため、メールアドレスとパスワード（生年月日）
            の登録を最初に行っていただきますことをご了承ください。{'\n'}
          </Text>
        </View>

        <SubmitButton
          style={styles.applyButton}
          onPress={this.onPressSubmitButton.bind(this)}
          editable={this.state.editable}
        >
          登録はこちら
        </SubmitButton>

        <View style={styles.copyrights}>
          <Copyrights />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: isiPhoneSE() ? 18 : 20,
  },
  mainTextBox: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 18,
  },
  mainText: {
    width: '90%',
    lineHeight: 20,
  },
  applyButton: {
    marginTop: isiPhoneSE() ? 40 : isiPhoneEightPlus() ? 160 : isiPhoneX() ? 180 : 80,
    marginBottom: 20,
  },
  copyrights: {
    position: 'absolute',
    bottom: isiPhoneX() ? 40 : 0,
    width: '100%',
    alignSelf: 'center',
  },
});

export default ForUsers;
