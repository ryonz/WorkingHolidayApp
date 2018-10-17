import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import WHApplyBar from '../components/WHApplyBar';

class Help extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WHApplyBar navigation={() => { this.props.navigation.goBack(); }}>ヘルプ</WHApplyBar>
        <TouchableOpacity style={styles.contentBox}>
          <Text>このアプリについて</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contentBox}>
          <Text>利用規約</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contentBox}>
          <Text>個人情報の取扱いについて</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contentBox}>
          <Text>ライセンス</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contentBox}>
          <Text>登録情報の変更・修正について</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contentBox}
          onPress={() => { this.props.navigation.navigate('DeleteAll'); }}
        >
          <Text>アカウントの削除について</Text>
        </TouchableOpacity>

        <View style={styles.contentBox}>
          <Text>アプリのバージョン：</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentBox: {
    width: '100%',
    height: 48,
    borderWidth: 0.8,
    paddingTop: 18,
    paddingLeft: 20,
  },
});

export default Help;
