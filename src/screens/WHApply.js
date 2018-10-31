import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import WHApplyBar from '../components/WHApplyBar';
import WHApplyIndexBar from '../elements/WHApplyIndexBar';
import HWApplyMailBar from '../components/HWApplyMailBar';
import HWApplyList from '../components/HWApplyList';
import FinalSubmitButton from '../components/FinalSubmitButton';
import Copyrights from '../elements/Copyrights';
import Agreement from '../components/Agreement';
import Logout from '../components/Logout';

class WHApply extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <WHApplyBar
          navigation={() => { this.props.navigation.navigate('Home'); }}
        >
          ワーキングホリデー申請
        </WHApplyBar>
        <WHApplyIndexBar />
        <HWApplyMailBar />
        <HWApplyList navigation={this.props.navigation} />
        <Agreement />
        <FinalSubmitButton navigation={this.props.navigation}>同意して送信</FinalSubmitButton>
        <Logout navigation={this.props.navigation} />
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
