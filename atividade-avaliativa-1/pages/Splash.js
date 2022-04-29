import * as React from 'react';
import LottieView from 'lottie-react-native';

import { View,Text } from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
  const {navigate} = this.props.navigation;
  
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView 
        source={require('../assets/splash.json')}
        autoPlay
        loop={false}
        speed={0.75}
        onAnimationFinish={() => navigate('Home')}
      />
    </View>
  )
  }
}