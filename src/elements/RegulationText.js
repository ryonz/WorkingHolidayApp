import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class RegulationText extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.regulationTextBox}>
          <Text style={styles.regulationText}>下記の規約をお読み頂き下部の「同意して登録」ボタンを押してください。</Text>
        </View>

        <View style={styles.regulationScrollTextBox}>
          <ScrollView>
            <Text style={styles.regulationInsideText}>
              規約だよ。{'\n'}
              守らないと困っちゃうぞ。{'\n'}
              Jpcanadaの規約だぞ。{'\n'}
              絶対読むんだぞ。{'\n'}
              読むだけじゃなくて同意するんだぞ。{'\n'}
              長いからって読み飛ばしちゃいけないぞ。{'\n'}
              後で文句いっても知らないぞ。{'\n'}
              とっていっても長いから{'\n'}
              読みたくない人もいるよね。{'\n'}
              でも人生の方が長いぞ{'\n'}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regulationTextBox: {
    alignSelf: 'center',
    width: '78%',
    height: 32,
    marginTop:32,
  },
  regulationText: {
    color: '#ADADAD',
  },
  regulationScrollTextBox: {
    alignSelf: 'center',
    width: '78%',
    height: 123,
    marginBottom: 27,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#707070',
  },
  regulationInsideText: {
    paddingLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },

});

export default RegulationText;
