import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import WHApplyBar from '../components/WHApplyBar';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';


class AfterApply1 extends React.Component {
  render() {
    return (

      <ScrollView style={styles.container}>

        <WHApplyBar navigation={() => { this.props.navigation.goBack(); }}>
          今後の流れ
        </WHApplyBar>

        <View style={styles.title}>
          <Text style={styles.titleText}>今後の流れ</Text>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.textBoxText}>
            ご入力お疲れ様でした。
            これより入力頂きました内容を確認し
            改めてJpcanada留学センター担当カウンセラーから登録メールアドレ
            スにメールをさせて頂きます。申請完
            了までメールでのやり取りが続くかと思いますが、ご協力お願い致します。

            またメール到着まで
            <Text style={{ color: '#FF0000' }}>
            『ワーホリ申請について』の「フォーム送信後の流れについて」
            </Text>
            をお読み頂き必要書類等を事前にご用意頂けますとスムーズかと思います。

            ＊ご入力頂きました内容に変更・
            修正等ある場合は直接Jpcanada留学
            センターまでご連絡をお願い致します。

          </Text>
        </View>

        <SubmitButton
          onPress={() => { this.props.navigation.navigate('Home'); }}
        >
          ホームへ
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
    width: '100%',
    bottom: 0,
  },
});

export default AfterApply1;

//
