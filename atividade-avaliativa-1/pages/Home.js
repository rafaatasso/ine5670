import * as React from 'react';
import { View, Text, Image, Button, BackHandler, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Moradias UFSC',
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.phone} >
        <View style={styles.container}>
          <View style={styles.image}>
            <Image style={styles.logo} source={require('../assets/image.png')} />
          </View>
          <Text style={styles.title} >Moradias UFSC</Text>
        </View>
        <View>
          <View style={styles.button}>
            <Button color='#1894f4' title="Ver Imóveis" onPress={() => navigate('HabitationList')} />
          </View>
          <View style={styles.button}>
            <Button color='#1894f4' title="Ver Favoritos" onPress={() => navigate('HabitationFavorits')} />
          </View>
          <View style={styles.button}>
            <Button color='#003893' title="Sair" onPress={() => BackHandler.exitApp() }/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phone: {
    flex: 1,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  image: { 
    height: 200,
    width: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    borderColor: '#FDD927',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 25,
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
    padding: 10,
    // backgroundColor: '#FFFFFF',
    // borderRadius: 25,
  },
  // buttonPrimary: {
  //   color: '#c3c3c3',
  //   borderRadius: 25
  // },
  // buttonSecondary: {
  //   color: '#000000'
  // }
});