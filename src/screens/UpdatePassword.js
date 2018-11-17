import React from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import Copyrights from '../elements/Copyrights';
import SubmitButton from '../components/SubmitButton';
import { isiPhoneSE, isiPhoneX, isiPhoneEightPlus } from '../lib/windowsize';

class UpdatePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
    };
  }

  onPressSubmitEmail() {
    if (this.state.email !== null) {
      const auth = firebase.auth();
      const emailAdress = this.state.email;
      auth.sendPasswordResetEmail(emailAdress)
        .then(() => {
          Alert.alert('送信が完了しました。\n届いたメールをご確認ください。');
          this.setState({ email: null });
        }).catch((error) => {
          console.log(error);
        });
    } else if (this.state.email === null) {
      Alert.alert('メールアドレスを正しく入力してください。');
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerHWApply}>
          <Text style={styles.headerText}>パスワード再設定</Text>
          <TouchableOpacity
            style={styles.backbutton}
            onPress={() => { this.props.navigation.goBack(); }}
            underlayColor="#F0F0F0"
          >
            <Image
              style={styles.backbuttonImage}
              source={require('../../assets/images/left-arrow.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.titleText}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>＜パスワードの再設定について＞</Text>
        </View>

        <View style={styles.descriptionTextBox}>
          <Text style={styles.descriptionText}>①登録されたメールアドレスを入力してください。</Text>
          <Text style={styles.descriptionText}>②下部の「メールを送信」ボタンを押してパスワード再設定メールを送信してください。</Text>
          <Text style={styles.descriptionText}>③登録メールアドレスに送信されたリンクから再設定を行なってください。</Text>

        </View>

        <View style={styles.textInputBox}>
          <Text style={styles.textInputTitle}>
            登録メールアドレス
          </Text>
          <TextInput
            onChangeText={(text) => { this.setState({ email: text }); }}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            placeholder={'ryugaku-taro@exapmple.com'}
            textContentType={'emailAddress'}
            value={this.state.email}
            underlineColorAndroid={'transparent'}
          />
        </View>

        <View style={styles.submitButtonBox}>
          <SubmitButton
            style={styles.submitButton}
            onPress={this.onPressSubmitEmail.bind(this)}
          >
           メール送信
          </SubmitButton>
        </View>

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
  headerHWApply: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 96,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 0.1,
    marginBottom: 49,
  },
  headerText: {
    fontSize: 20,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#626262',
  },
  backbutton: {
    position: 'absolute',
    top: 50,
    left: 18,
    width: 20,
    height: 20,
  },
  backbuttonImage: {
    width: 20,
    height: 20,
  },
  titleText: {
    alignItems: 'center',
  },
  descriptionTextBox: {
    alignSelf: 'center',
    width: '83%',
    marginBottom: 20,
  },
  descriptionText: {
    marginTop:8,
  },
  textInputBox: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  textInput: {
    width: '83%',
    height: 44,
    paddingLeft: 16,
    backgroundColor: '#F4F4F4',
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 6,
  },
  textInputTitle: {
    fontSize: 13,
    left: isiPhoneSE() ? -80 : isiPhoneEightPlus() ? -115 : -100,
    paddingBottom: 6,
  },
  submitButtonBox: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: isiPhoneSE() ? 60 : 100,
  },
  submitButton: {
    borderColor: '#707070',
    backgroundColor: '#fff',
  },
  copyrights: {
    position: 'absolute',
    width: '100%',
    bottom:  isiPhoneX() ? 40 : 0,
  },

});

export default UpdatePassword;
