import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class HWApplyList extends React.Component {
  state = {
    fontLoaded: false,
    stateOfEdit1: '未入力',
    stateOfEdit2: '未入力',
    stateOfEdit3: '未入力',
    stateOfEdit4: '未入力',
    stateOfEdit5: '未入力',
    stateOfEdit6: '未入力',
    stateOfEdit7: '未入力',
    stateOfEdit8: '未入力',
    stateOfEdit9: '未入力',
    stateOfEdit10: '未入力',
    stateOfEdit11: '未入力',
    stateOfEdit12: '未入力',
    stateOfEdit13: '未入力',
    stateOfEdit14: '未入力',
    stateOfEdit15: '未入力',

  };

  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    AsyncStorage.getItem('checked1')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit1: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit1: '未入力' });
        }
      });
    AsyncStorage.getItem('checked2')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit2: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit2: '未入力' });
        }
      });
    AsyncStorage.getItem('checked3')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit3: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit3: '未入力' });
        }
      });
    AsyncStorage.getItem('checked4')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit4: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit4: '未入力' });
        }
      });
    AsyncStorage.getItem('checked5')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit5: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit5: '未入力' });
        }
      });
    AsyncStorage.getItem('checked6')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit6: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit6: '未入力' });
        }
      });
    AsyncStorage.getItem('checked7')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit7: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit7: '未入力' });
        }
      });
    AsyncStorage.getItem('checked8')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit8: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit8: '未入力' });
        }
      });
    AsyncStorage.getItem('checked9')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit9: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit9: '未入力' });
        }
      });
    AsyncStorage.getItem('checked10')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit10: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit10: '未入力' });
        }
      });
    AsyncStorage.getItem('checked11')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit11: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit11: '未入力' });
        }
      });
    AsyncStorage.getItem('checked12')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit12: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit12: '未入力' });
        }
      });
    AsyncStorage.getItem('checked13')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit13: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit13: '未入力' });
        }
      });
    AsyncStorage.getItem('checked14')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit14: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit14: '未入力' });
        }
      });
    AsyncStorage.getItem('checked15')
      .then((value) => {
        if (value === 'true') {
          this.setState({ stateOfEdit15: '完了' });
        } else if (value === 'false') {
          this.setState({ stateOfEdit15: '未入力' });
        }
      });
  }


  render() {
    return (
      <View style={styles.container}>
        {/* リスト１ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PersonalInfo1',
              { setStateEdit1: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>申請者情報１</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit1 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit1}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト２ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PersonalInfo2',
              { setStateEdit2: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>申請者情報２</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit2 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit2}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト３ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PersonalInfo3',
              { setStateEdit3: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>申請者情報３</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit3 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit3}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト４ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PersonalInfo4',
              { setStateEdit4: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>申請者情報４</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit4 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit4}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト５ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PersonalInfo5',
              { setStateEdit5: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>申請者情報５</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit5 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit5}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト６ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('PersonalInfo6',
              { setStateEdit6: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>申請者情報６</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit6 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit6}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト７ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FamilyInfo1',
              { setStateEdit7: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>家族情報１</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit7 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit7}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト８ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FamilyInfo2',
              { setStateEdit8: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>家族情報２</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit8 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit8}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト９ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FamilyInfo3',
              { setStateEdit9: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>家族情報３</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit9 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit9}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト１０ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FamilyInfo4',
              { setStateEdit10: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>家族情報４</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit10 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit10}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト１１ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FamilyInfo5',
              { setStateEdit11: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>家族情報５</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit11 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit11}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト１２ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('AgreementPII',
              { setStateEdit12: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>個人情報・同意事項</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit12 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit12}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト１３ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FromCanadaGovernment',
              { setStateEdit13: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.privacyPolicyCA}>
              カナダ外務・国際貿易省からの「個人情報取扱い
              {'\n'}
              について/個人情報保護に関する声明
            </Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit13 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit13}
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト１４ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Declaration',
              { setStateEdit14: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>申請者の申告</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit14 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit14}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        {/* リスト１５ */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Agreement',
              { setStateEdit15: this.componentDidMount.bind(this) });
          }}
        >
          <View style={styles.listBox}>
            <Text style={styles.listBoxText}>同意書</Text>
            <View style={styles.inputBotton}>
              <Text
                style={this.state.stateOfEdit15 === '未入力' ? styles.inputBottonText : styles.inputBottonTextRed}
              >
                {this.state.stateOfEdit15}
              </Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {this.state.fontLoaded ? (
                <View style={styles.navigationButton}>
                  <Text style={styles.navigationButtonIcon}>{'\uf0da'}</Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
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
    left: 40,
    width: '60%',
    paddingTop: 12,
  },
  privacyPolicyCA: {
    fontSize: 10,
    lineHeight: 16,
    paddingTop: 2,
    left: 40,
  },
  inputBotton: {
    position: 'absolute',
    right: 30,
    width: 62,
    height: 22,
    backgroundColor: '#82F873',
    alignItems: 'center',
    paddingTop: 6,
    borderRadius: 17,
    marginTop: 9,
  },
  inputBottonText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#fff',
  },
  inputBottonTextRed: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  navigationButton: {
    position: 'absolute',
    right: 2,
    width: 30,
    paddingTop: 2,
    alignItems: 'center',
  },
  navigationButtonIcon: {
    fontFamily: 'FontAwesome',
    color: '#CCCCCC',
    fontSize: 30,
  },
});

export default HWApplyList;
