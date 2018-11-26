import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
      <ScrollView style={styles.container}>
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
          </Text>
          <Text style={styles.mainTextSubtitle}>
            〓アプリの使用について
          </Text>
          <Text style={styles.mainText}>
            1.ホーム画面の「ワーホリ申請開始」または当ページの「登録はこちら」から
            ログイン/会員登録画面に進み会員登録を行ってください。{'\n'}
            {'\n'}
            2.ログイン後、各フォームに必要事項を全て入力して頂き「同意して送信」を押してください。{'\n'}
            {'\n'}
            3.送信後、JPCANADA担当カウンセラーから登録アドレス宛にメールが届きます。
            {'\n'}
          </Text>
          <Text style={styles.mainTextSubtitle}>
            〓個人情報登録について
          </Text>
          <Text style={styles.mainText}>
            個人情報を扱うため、メールアドレスとパスワード（生年月日）
            の登録を最初に行っていただきますことをご了承ください。{'\n'}
          </Text>
          <Text style={styles.mainTextSubtitle}>
            〓料金について
          </Text>
          <Text style={styles.mainText}>
            当アプリの使用自体は無料ですが、JPCANADAが申請を行う際には
            以下の料金が発生します。{'\n'}
            {'\n'}
            1.カナダ政府への申請費用 250CAD(カナダドル){'\n'}
            (*Participation Fee：150ドル、Open Work Permit Holder Fee：100ドル){'\n'}
            (*2018年12月時点){'\n'}
            {'\n'}
            2.JPCANADAへの会員登録 400CAD(カナダドル){'\n'}
            (*こちらのアプリの登録（無料）とは別です){'\n'}
          </Text>
          <Text style={styles.mainTextSubtitle}>
            〓ワーホリ申請に必要な書類について
          </Text>
          <Text style={styles.mainText}>
            ワーホリ申請に必要な書類をご案内いたします。当アプリの使用時に
            必要ではありませんが、フォーム送信後、担当カウンセラーとのやりとりに
            おいて、提出する必要があります。{'\n'}
            あらかじめ準備をしておくと申請がスムーズになります。{'\n'}
            {'\n'}
            1.パスポート 写真＋スタンプページ（カラースキャンデータ）{'\n'}
            {'\n'}
            2.紙のビザ、搭乗券など（あれば）{'\n'}
            {'\n'}
            3.証明写真1枚{'\n'}
            (*縦４５ｍｍ×横３５ｍｍのカラー/顔のサイズ（縦）が、３１ｍｍ～３６ｍｍ）{'\n'}
          </Text>

        </View>

        <View style={styles.applyButtonBox}>
          <SubmitButton
            onPress={this.onPressSubmitButton.bind(this)}
            editable={this.state.editable}
          >
            登録はこちら
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
  headerText: {
    fontSize: isiPhoneSE() ? 18 : 20,
  },
  mainTextBox: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 18,
  },
  mainTextSubtitle: {
    width: '90%',
    fontWeight: 'bold',
    lineHeight: 20,
    marginBottom: 5,
  },
  mainText: {
    width: '90%',
    lineHeight: 20,
  },
  applyButtonBox: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  copyrights: {
    width: '100%',
  },
});

export default ForUsers;
