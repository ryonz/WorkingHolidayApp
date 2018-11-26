import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Copyrights from '../elements/Copyrights';
import { isiPhoneSE, isiPhoneEightPlus, isiPhoneX } from '../lib/windowsize';

class AboutJpcanada extends React.Component {

  onPressGoToJpcanadaHP() {
    Linking.openURL('https://agent.jpcanada.com/points/');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoHeader
          style={styles.headerText}
          onPress={() => { this.props.navigation.goBack(); }}
        >
          JPCANADAについて
        </InfoHeader>
        <Text style={styles.mainText}>
          {'\n'}
          JPCANADA留学センターは、このアプリを運営提供しているカナダ・バンクーバーに
          本社を置く留学エージェントです。{'\n'}
          {'\n'}
        </Text>
        <Text style={styles.mainTextSubtitle}>
          〓バンクーバー最大手の留学センター
        </Text>
        <View style={styles.underBarGreen} />
        <Text style={styles.mainText}>
          JPCANADA留学センターは、カナダの日系最大手の留学センターです。{'\n'}
          {'\n'}
          取り扱い留学生も毎年５００～７００人という規模を維持し、
          ますます多くの方からお問い合わせをいただいています。{'\n'}
          {'\n'}
          常勤のカウンセラーが５名、受付３名、その他にも経理やアシスタント、
          ビザ専任スタッフ、専属のホームステイコーディネイターや
          ボランティアコーディネーターが在籍しています。{'\n'}
          {'\n'}
          インターネット上からはなかなか見えませんが、
          他の留学センターの場合、スタッフ１～３名で運営している小規模ケースがほとんどです。
          {'\n'}
        </Text>

        <Text style={styles.mainTextSubtitle}>
          〓カナダに本社があり、日本にも支店があるという強み
        </Text>
        <View style={styles.underBarGreen} />
        <Text style={styles.mainText}>
          Jpcanadaの本社はカナダにあります。{'\n'}
          日本（東京・大阪）にもそれぞれオフィスがあります。{'\n'}
          {'\n'}
          「カナダに本社がある留学会社より、日本に本社がある
          留学会社の方が安心では？」という声も聞こえますが、
          留学で大切なのは、留学前でしょうか？{'\n'}
          {'\n'}
          私たちは、留学前で一番大切なことは、留学先のカナダでしっかりと
          みなさんをサポートすることであると考えています。
          本社がカナダ、支店が日本という運用形態で多くの経費を節約しており、
          その分を留学中のサポートに還元しています。{'\n'}
        </Text>

        <Text style={styles.mainTextSubtitle}>
          〓経験豊かなカウンセラー
        </Text>
        <View style={styles.underBarGreen} />
        <Text style={styles.mainText}>
          私たちのカウンセラーは、全員、２年以上の学校カウンセリング経験を持っています。{'\n'}
          これは、バンクーバー地区では異例のことです。{'\n'}
          {'\n'}
          バンクーバーには、多くの留学センターがありますが、
          その多くは小規模で、なおかつ、日本人カウンセラーは１人しかおりません。{'\n'}
          また、カウンセラーが年に何回も入れ替わるのも珍しくありません。{'\n'}
          {'\n'}
          私たちは、バンクーバー最大手の日系留学センターとして、
          責任を持って、皆様の留学のお手伝いをさせていただいております。{'\n'}
          また、専属カウンセラーが５名います。
          これは、バンクーバー地区で最大規模です。{'\n'}

        </Text>

        <View style={styles.goToJpcanadaHPBox}>
          <TouchableOpacity
            style={styles.goToJpcanadaHP}
            onPress={this.onPressGoToJpcanadaHP.bind(this)}
          >
            <Text style={styles.buttonText}>
              JPCANADAホームページへ
            </Text>
          </TouchableOpacity>
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
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 18,
  },
  mainTextSubtitle: {
    alignSelf: 'center',
    width: '90%',
    fontWeight: 'bold',
    lineHeight: 20,
    marginBottom: 5,
  },
  mainText: {
    alignSelf: 'center',
    width: '90%',
    lineHeight: 20,
  },
  goToJpcanadaHP: {
    alignItems: 'center',
    width: 'auto',
    height: 46,
    paddingTop: 15,
    marginTop: 11,
    backgroundColor: '#F0F0F0',
    borderRadius: 23,
    borderColor: '#707070',
    borderWidth: 0.4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0,
    shadowOpacity: 0.06,
  },
  buttonText: {
    marginRight: 10,
    marginLeft: 10,
    fontWeight: '500',
    color: '#626262',
  },
  goToJpcanadaHPBox: {
    alignItems: 'center',
    width: '100%',
    marginTop: isiPhoneSE() ? 40 : isiPhoneEightPlus() ? 160 : isiPhoneX() ? 180 : 80,
    marginBottom: 30,
  },
  copyrights: {
    width: '100%',
  },
  underBarGreen: {
    alignSelf: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#82F873',
    marginBottom: 8,
  },
});

export default AboutJpcanada;
