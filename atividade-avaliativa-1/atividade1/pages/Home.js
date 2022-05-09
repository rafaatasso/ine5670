import * as React from 'react';
import { View, Text, Image, Button, BackHandler, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from '../json/generated.json';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Moradias UFSC',
  };

  // // Função para salvar no AsyncStorage.
  // saveHabitationOnStorage() {
  //   if (this.hasHabitationListStorage()) return;
  //   // Salva na lista geral
  //   AsyncStorage.setItem('habitationList', JSON.stringify(Data));
  //   // Salva na lista de favoritos
  //   const favoritesList = Data.filter((item) => item.isFavorited);
  //   AsyncStorage.setItem('habitationList_favorited', JSON.stringify(favoritesList))
  // }

  // // Checa se já existe lista de apartamento salvo no AsyncStorage.
  // hasHabitationListStorage() {
  //   return !!AsyncStorage.getItem('habitationList')
  // }

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
        <View style={styles.options}>
          <View style={styles.button}>
            <Button color="#BA4323" title="Moradias Disponíveis" onPress={() => navigate('HabitationList')} />
          </View>
          <View style={styles.button}>
            <Button color="#BA4323" title="Favoritos" onPress={() => navigate('HabitationFavorits')} />
          </View>
          <View style={styles.button}>
            <Button color="#BA4323" title="Sair" onPress={() => BackHandler.exitApp() } />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phone: {
    flex: 100,
    backgroundColor: '#FFFFFF',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
  },
  options: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
  title: {
    margin: 10,
    paddingTop: 30,
    padding:10,
    fontWeight: 'bold',
    fontSize: 28,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FDD927',
  },
  button: {
    borderRadius: 25,
    width: 300,
    paddingVertical: 20,
    fontSize: 18,
    backgroundColor: '#FFFFFF'
  }
});