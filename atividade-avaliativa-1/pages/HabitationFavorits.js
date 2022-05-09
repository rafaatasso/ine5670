import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HabitationDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Favoritos',
  };

  constructor(props){
    super(props);
    this.state = {
      allIndexFavorites: [],
    };
    this.display();
  }

  display(){
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][1];
          let allIndexFavorites = this.state.allIndexFavorites;
          allIndexFavorites.push(JSON.parse(key));
          this.setState({ allIndexFavorites });
        });
      });
    });
  }

  render() {

    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          {this.state.allIndexFavorites[0] == null ? <Text style={styles.alert}>Sem nenhuma moradia favoritada!</Text> : <FlatList
          data={this.state.allIndexFavorites}
          keyExtractor={item => item.index}
          renderItem={({item}) =>
          (<TouchableOpacity onPress={ () => navigate('HabitationDetails', {contact: item, local: 'fav'})}>
            <View style={styles.contactComponent}>
              <View style={styles.contact}>
                <View>
                  <Image source={{uri: item.photo[0].link}} style={styles.image}/>
                </View>
                <View>
                  <Text style={styles.text_bold}>{item.name} </Text>
                  <Text style={styles.text}>R$ {item.vl_total},00</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>)
          }
        />}
        </View>
        
        <View style={styles.button} >
          <Button color='#003893' title="Voltar" onPress={() => navigate('Home')} />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'space-between',
  },
  contactComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    backgroundColor: '#FFF',
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: '#FDD927',
    shadowOffset:{ width: 0,
    height: 2,
    },
    shadowRadius: 3.84,
    elevation: 5,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  alert: {
    padding: 30,
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'center',
    textAlign: 'center',
    color: '#1894f4',
  },
  text: {
    fontSize: 18,
    padding: 2,
    marginLeft: 10,
  },
  text_bold: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 2,
    marginLeft: 10,
  },
  image: {
    borderRadius: 50,
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: '#FDD927',
  }
});