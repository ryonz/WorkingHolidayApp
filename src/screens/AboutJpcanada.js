import React from 'react';
import {
  WebView,
  View,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';

import InfoHeader from '../components/InfoHeader';
import Indicator from '../elements/Indicator';

class AboutJpcanada extends React.Component {
  state = {
    modalVisible: true,
  };

  onLoading() {
    this.setState({ modalVisible: false });
  }

  isError() {
    Alert.alert('予期しない理由で表示されませんでした。再度お試しください。');
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <InfoHeader
          onPress={() => { this.props.navigation.goBack(); }}
        >
          JPCANADAについて
        </InfoHeader>
        <WebView
          source={{ uri: 'https://agent.jpcanada.com/points/' }}
          style={styles.webview}
          onError={this.isError.bind(this)}
          onLoadEnd={this.onLoading.bind(this)}
        />

        <Modal
          visible={this.state.modalVisible}
          animationType="none"
          transparent
        >
          <Indicator />;
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  webview: {
    width: '100%',
    height: 'auto',
    marginTop:10,
  },
});

export default AboutJpcanada;
