import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import SubmitButton from './SubmitButton';
import Copyrights from '../elements/Copyrights';
import { isiPhoneSE, isiPhoneEightPlus } from '../lib/windowsize';


class WHApplyNotification2 extends React.Component {
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
                Pool から選ばれるタイミング、また
                「正式な」申請を進めた後の審査期間
                が長引きますと、現在のステータス
                （学生や観光）の有効期限までに、ワ
                ーキングホリデーの取得とその切り替
                えが間に合わない可能性がございます。{'\n'}
                対策におかれましては、必ず『お問い
                合わせ』よりカウンセラーまでご相談
                くださいませ。{'\n'}
                （※サポートチームでは対応しており
                ません。ご了承ください。）また、日
                本に一時帰国し、ワーキングホリデー
                でのカナダ再渡航を検討されている場
                合は、上記と同じ状況が起きますと、
                ご渡航時期の調整が必要となることが
                ございます。この点におかれましても、
                予めご了承ください。
          </Text>
        </View>

        <SubmitButton
          style={styles.button}
          onPress={() => { this.props.onPress(); }}
        >
          申請へ
        </SubmitButton>

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
    width: '33%',
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
    height: 'auto',
    borderWidth: 1,
    borderColor: '#707070',
    alignSelf: 'center',

  },
  textBoxText: {
    fontSize: 14,
    paddingTop: 27,
    paddingLeft: 31,
    paddingBottom: 27,
    paddingRight: 31,
    lineHeight: 25,
    alignSelf: 'center',
  },
  button: {

  },
  copyrights:{
    width: '100%',
  },
});

export default WHApplyNotification2;

//
