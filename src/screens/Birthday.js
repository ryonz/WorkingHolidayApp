import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import Copyrights from '../elements/Copyrights';
import { isiPhoneSE, isiPhoneX, isiPhoneEightPlus } from '../lib/windowsize';

class Birthday extends React.Component {
  state = {
    birthday: null,
  }

  onPressNextButton() {
    const RegEx = /^\d{8}$/;
    if (this.state.birthday !== null) {
      if (RegEx.test(this.state.birthday)) {
        AsyncStorage.setItem('birthday', this.state.birthday);
        this.props.navigation.navigate('Signup', this.state.birthday);
      } else {
        Alert.alert('生年月日が正しく入力されていません。');
      }
    } else {
      Alert.alert('生年月日を入力してください。');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.headerHWApply}>
            <Text style={styles.headerText}>アカウント登録１</Text>
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

          <View style={styles.textInputBox}>
            <Text style={styles.textInputTitle}>生年月日(西暦年月日)</Text>
            <TextInput
              value={this.state.birthday}
              onChangeText={(num) => { this.setState({ birthday: num }); }}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
              maxLength={8}
              multiline={false}
              placeholder={'例：19920101'}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <View style={styles.nextButtonBox}>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => { this.onPressNextButton(); }}
            >
              <Text style={styles.nextButtonText}>次へ</Text>

            </TouchableOpacity>
          </View>

          <View style={styles.copyrights}>
            <Copyrights />
          </View>
        </KeyboardAvoidingView>
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
  textInputBox: {
    alignItems: 'center',
    marginTop: isiPhoneX() ? 120 : 70,
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
    left:  isiPhoneSE() ? -72 : isiPhoneEightPlus() ? -110 : -93,
    paddingBottom: 6,
  },
  forgetPasswordText: {
    alignSelf: 'center',
    marginTop: 11,
    marginBottom: 15,
    fontSize: 14,
    color: '#ADADAD',
    fontWeight: '900',
  },
  nextButtonBox: {
    position: 'absolute',
    bottom:  isiPhoneX() ? 30 : 20,
    width: '100%',
    alignItems: 'center',
  },
  nextButton: {
    width: '47%',
    height: 46,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 72,
    borderColor: '#707070',
    borderWidth: 0.3,
    borderRadius: 23,
  },
  nextButtonText: {
    paddingTop: 14,
    color: '#626262',
    fontWeight: '900',
    fontSize: 20,
  },
  image: {
    position: 'absolute',
    bottom: 52,
    alignSelf: 'center',
    width: isiPhoneSE() ? '48%' : '48%',
    height: isiPhoneSE() ? 135 : 157,
    marginBottom: 20,
  },
  copyrights: {
    position: 'absolute',
    width: '100%',
    bottom:  isiPhoneX() ? 40 : 0,

  },


});

export default Birthday;
