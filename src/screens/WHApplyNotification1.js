import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import WHApplyBar from '../components/WHApplyBar';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';


class WHApplyNotification1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <WHApplyBar />

        <View style={styles.title}>
          <Text style={styles.titleText}>申請の前に</Text>
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


        <SubmitButton>次へ</SubmitButton>


        <Copyrights />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    width: '33%',
    height: 39,
    marginTop: 39,
    marginBottom: 36,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#707070',
    paddingTop: 10,

  },
  titleText: {
    color: '#626262',
    fontSize: 20,
    paddingLeft: 5,
    fontWeight: 'bold',
  },
  textBox: {
    width: '83%',
    height: 284,
    borderWidth: 1,
    borderColor: '#707070',

  },
  textBoxText: {
    fontSize: 14,
    paddingTop: 27,
    paddingLeft: 31,
    paddingBottom: 0,
    paddingRight: 31,
    lineHeight: 25,
  },
});

export default WHApplyNotification1;
