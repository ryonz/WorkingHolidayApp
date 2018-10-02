import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import WHApplyBar from '../components/WHApplyBar';
import WHApplyIndexBar from '../elements/WHApplyIndexBar';
import HWApplyMailBar from '../components/HWApplyMailBar';
import HWApplyList from '../components/HWApplyList';
import SubmitButton from '../components/SubmitButton';
import Copyrights from '../elements/Copyrights';
import Agreement from '../components/Agreement';
import Logout from '../components/Logout';



class WHApply extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    console.log(params);
    return (
      <ScrollView style={styles.container}>
        <WHApplyBar navigation={this.props.navigation} />
        <WHApplyIndexBar />
        <HWApplyMailBar />
        <HWApplyList navigation={this.props.navigation} />
        <Agreement />
        <SubmitButton>同意して送信</SubmitButton>
        <Logout />
        <Copyrights />
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
});

export default WHApply;

/*

*/
