import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';

import SubmitButton from './SubmitButton';
import Copyrights from '../elements/Copyrights';
import { isiPhoneSE, isiPhoneEightPlus, isiPhoneX } from '../lib/windowsize';

class WHApplyNotification1 extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerHWApply}>
          <Text style={styles.headerText}>注意事項</Text>
        </View>

        <Image
          style={styles.headerImage}
          source={require('../../assets/images/headerLogo.png')}
        />

        <View style={styles.title}>
          <Text style={styles.titleText}>
            申請の前に
          </Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.textBoxText}>
                      2019年のワーキングホリデー申請は、カ
                      ナダ政府の「申請者希望者リスト(Pool)
                      」へ登録をすることから始まります。
                      その後、政府が Pool よりラ
                      ンダムに選考を行い、Pool から晴れ
                      て選ばれますと「正式に」申請を進め
                      られることとなります。申請が進めら
                      れるかどうかは
            <Text style={{ color: '#FF0000' }}>
                      「政府次第」
            </Text>
                      となりますことを予めご了承くださいませ。
          </Text>
        </View>

        <View style={styles.submitButton}>
          <SubmitButton
            onPress={() => { this.props.onPress(); }}
          >
            次へ
          </SubmitButton>
        </View>

        <View style={styles.copyrights}>
          <Copyrights />
        </View>
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
  },
  headerText: {
    fontSize: 20,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#626262',
  },
  headerImage: {
    position: 'absolute',
    width: 48,
    height: 48,
    top: 40,
    right: 18,
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 39,
    marginTop: 39,
    marginBottom: 36,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#707070',
    paddingTop: 10,

  },
  titleText: {
    color: '#626262',
    fontSize: isiPhoneSE() ? 16 : 20,
    paddingLeft: 5,
    fontWeight: 'bold',
    marginLeft:10,
    marginRight: 10,
  },
  textBox: {
    width: '83%',
    height: 284,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#707070',

  },
  textBoxText: {
    fontSize: 14,
    paddingTop: 27,
    paddingLeft: 31,
    paddingBottom: 27,
    paddingRight: 31,
    lineHeight: 25,
  },
  submitButton: {
    marginBottom: isiPhoneEightPlus() ? 60 : isiPhoneX() ? 110 : 0,
  },
  copyrights:{
    width: '100%',
  },
});

export default WHApplyNotification1;

//
