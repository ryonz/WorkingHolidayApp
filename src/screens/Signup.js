import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Copyrights from '../elements/Copyrights';
import RegulationText from '../elements/RegulationText';

class Signup extends React.Component {

  state = {
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerHWApply}>
          <Text style={styles.headerText}>登録</Text>
          <TouchableOpacity style={styles.backbutton} onPress={() => { this.props.navigation.goBack(); }} underlayColor="#F0F0F0">
            <Image style={styles.backbuttonImage} source={require('../../assets/images/left-arrow.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.textInputBox}>
          <Text style={styles.textInputTitle}>メールアドレス</Text>
          <TextInput
            value={this.state.email}
            onChangeText={(text) => { this.setState({ email: text });}}
            style={styles.textInput}
            editable
            placeholder={'ryugaku-taro@exapmple.com'}
          />
        </View>

        <View style={styles.textInputBox}>
          <Text style={styles.textInputTitle}>パスワード(任意)</Text>
          <TextInput
            value={this.state.password}
            onChangeText={(text) => { this.setSate({ password: text });}}
            style={styles.textInput}
            editable
            placeholder={'0文字以上16以内'}
          />
        </View>

        <RegulationText />

        <TouchableOpacity style={styles.loginButtonBox} onPress={() => { this.props.navigation.navigate('WHApply'); }}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>同意して登録</Text>
          </View>
        </TouchableOpacity>

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
  textInputBox: {
    alignItems: 'center',
    marginTop: 12,
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
    left: -110,
    paddingBottom: 6,
  },
  loginButtonBox: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    width: '47%',
    height: 46,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 0.3,
    borderRadius: 23,
  },
  loginButtonText: {
    paddingTop: 14,
    color: '#626262',
    fontWeight: '900',
    fontSize: 20,
  },
  copyrights: {
    position: 'absolute',
    //alignSelf: 'flex-end',
    width: '100%',
    bottom: 0,

  },
});

export default Signup;
