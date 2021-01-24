import React, {Component} from 'react';
import {View, Text} from 'react-native';

import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

class MyApp extends Component {
  render() {
    return (
      <View>
        <Text>oi</Text>
      </View>
    );
  }
}

MyApp = codePush(codePushOptions)(MyApp);
export default MyApp;
