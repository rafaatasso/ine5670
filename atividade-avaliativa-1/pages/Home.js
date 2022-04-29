import * as React from 'react';
import { View, Text, Image, Button, BackHandler, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Moradias UFSC',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/image.png')} />
          <Text style={styles.title} >Moradias UFSC</Text>
        </View>
        <View style={styles.button}>
          <Button title="Ver Imóveis" onPress={() => navigate('HabitationList')} />
        </View>
        <View style={styles.button}>
          <Button title="Ver Favoritos" onPress={() => navigate('HabitationFavorits')} />
        </View>
        <View style={styles.button}>
          <Button title="Sair" onPress={() => BackHandler.exitApp() } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  logo: {
    height: 160,
    width: 160,
  },
  title: {
    padding: 30,
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'center',
    textAlign: 'center',
    color: '#1894f4',
  },
  button: {
    padding: 15
  }
});