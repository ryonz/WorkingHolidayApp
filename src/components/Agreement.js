import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


class Agreement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Jpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意するJpcanada留学生センターの個人情報取り扱い同意書に同意する'

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.agreementTitle}>＜個人情報取扱いについて＞</Text>
        <Text style={styles.agreementTitleText}>下記をお読み頂き、「同意して送信」を押してください。</Text>
        <TextInput
          style={styles.agreement}
          multiline
          numberOfLines={4}
          value={this.state.text}
          editable={false}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: 150,
    marginBottom: 27,
  },
  agreement: {
    alignSelf: 'center',
    fontSize: 11,
    borderWidth: 1,
    width: '90%'
  },
  agreementTitle: {
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  agreementTitleText: {
    color: '#ADADAD',
    paddingBottom: 4,
    fontSize: 11,
  },
});

export default Agreement;

//        <Text style={styles.agreementText}>Jpcanada留学センターの個人情報取扱い同意書に同意する</Text>
