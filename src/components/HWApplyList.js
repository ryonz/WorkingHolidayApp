import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HWApplyList extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <View style={styles.listBox}>
          <Text style={styles.listBoxText}>
              申請者情報①
          </Text>
          <View style={styles.inputBotton}>
            <Text style={styles.inputBottonText}>未入力</Text>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.listBoxText}>
              申請者情報②
          </Text>
          <View style={styles.inputBotton}>
            <Text style={styles.inputBottonText}>未入力</Text>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.listBoxText}>
            家族情報①
          </Text>
          <View style={styles.inputBotton}>
            <Text style={styles.inputBottonText}>未入力</Text>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.listBoxText}>
            家族情報②
          </Text>
          <View style={styles.inputBotton}>
            <Text style={styles.inputBottonText}>未入力</Text>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.listBoxText}>
            個人情報・同意事項
          </Text>
          <View style={styles.inputBotton}>
            <Text style={styles.inputBottonText}>未入力</Text>
          </View>
        </View>

        <View style={styles.listBox}>
          <Text style={styles.privacyPolicyCA}>
            カナダ外務・国際貿易省からの「個人情報取扱い{'\n'}について/個人情報保護に関する声明
          </Text>
          <View style={styles.inputBotton}>
            <Text style={styles.inputBottonText}>未入力</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  listBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 39,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  listBoxText: {
    left: -40,
    width: '60%',
    paddingTop: 12,
  },
  privacyPolicyCA: {
    fontSize: 10,
    lineHeight: 16,
    paddingTop: 2,
    left: -50,
  },
  inputBotton: {
    position: 'absolute',
    width: 62,
    height: 22,
    backgroundColor: '#82F873',
    alignItems: 'center',
    paddingTop: 6,
    borderRadius: 17,
    right: 30,
    marginTop: 9,
  },
  inputBottonText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#fff',
  },
});

export default HWApplyList;
