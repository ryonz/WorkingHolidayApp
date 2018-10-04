import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import WHApplyBar from '../components/WHApplyBar';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';


class WHApplyNotification2 extends React.Component {
  render() {
    return (

      <ScrollView style={styles.container}>
        <WHApplyBar navigation={this.props.navigation} />
        <View style={styles.title}>
          <Text style={styles.titleText}>申請の前に</Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.textBoxText}>
                Pool から選ばれるタイミング、また
                「正式な」申請を進めた後の審査期間
                が長引きますと、現在のステータス
                （学生や観光）の有効期限までに、ワ
                ーキングホリデーの取得とその切り替
                えが間に合わない可能性がございます。
                対策におかれましては、必ず『お問い
                合わせ』よりカウンセラーまでご相談
                くださいませ。
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

        <SubmitButton style={styles.button} onPress={() => { this.props.navigation.navigate('InputEmail'); }}>申請へ</SubmitButton>

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
  title: {
    width: '33%',
    height: 39,
    marginTop: 39,
    marginBottom: 36,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#707070',
    paddingTop: 10,

  },
  titleText: {
    color: '#626262',
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: 'bold',
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
    //position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

export default WHApplyNotification2;

//
