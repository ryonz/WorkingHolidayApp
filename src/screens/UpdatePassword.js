import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Copyrights from '../elements/Copyrights';
import SubmitButton from '../components/SubmitButton';

class UpdatePassword extends React.Component {
  onPressSubmitEmail() {
    const auth = firebase.auth();
    const emailAddress = auth.currentUser.email;
    auth.sendPasswordResetEmail(emailAddress)
      .then(() => {
        console.log('success sending Password Reset Email', emailAddress);
      }).catch((error) => {
        console.log(error);
      })
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
          <Text style={styles.descriptionText}>①下部の「パスワード再設定用のメールを送る」ボタンを押してください。</Text>
          <Text style={styles.descriptionText}>②登録メールアドレスに送信されたリンクから再設定を行なってください</Text>
        </View>

        <View style={styles.buttonTextBox}>
          <Text style={styles.descriptionText}>パスワード再設定用のメールを送る</Text>
        </View>

        <SubmitButton
          style={styles.submitButton}
          onPress={this.onPressSubmitEmail}
        >
          <View>
            <Text style={styles.submitButtonText}>メールを送信</Text>
          </View>
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
  },
  descriptionText: {
    marginTop:8,
  },
  buttonTextBox: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
  submitButton: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    width: '75%',
    height: 45,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 23,
  },
  submitButtonText: {
    alignSelf: 'center',
    paddingTop: 15,
    color: '#626262',
    fontWeight: 'bold',
  },
  copyrights: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  }

});

export default UpdatePassword;
