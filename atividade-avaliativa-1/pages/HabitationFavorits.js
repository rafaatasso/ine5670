import * as React from 'react';
import { Text, View, ScrollView, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from '../json/generated.json';
 
export default class HabitationDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados dos Imóveis',
  };

  constructor(props){
    super(props);
    this.state = {
      allIndexFavorites: [],
      isLoading: false,
    };
    this.display();
    console.log(this.state.allIndexFavorites);
  }

  display(){
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          // this.setState({ allIndexFavorites: allIndexFavorites.push({'name': key}) })
          this.state.allIndexFavorites.push({'name': key});
        });
      });
    });
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )
    }
 
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <Text onPress={() => {{console.log(this.state.allIndexFavorites)}}}>oioioioi</Text>
        {/* <FlatList
            style={styles.black}
            data={allIndexFavorites}
            renderItem={({ind}) => (
              <Text>{ind.name}</Text>
            )}
        />
        <Text onPress={() => {{console.log(allIndexFavorites)}}}>oioioioi</Text> */}
        
        {/* // (
        //   <FlatList
        //     data={Data}
        //     renderItem={({item}) =>
        //     (<TouchableOpacity onPress={ () => navigate('HabitationDetails', {contact: item})}>
        //       <View style={styles.contactComponent}>
        //       <View style={styles.contact}>
        //         <View>
        //           <Image source={{uri: item.photo[0].link}} style={styles.image}/>
        //         </View>
        //         <View>
        //           <Text style={styles.text}>{item.name} </Text>
        //           <Text style={styles.text}>R$ {item.vl_total},00</Text>
        //         </View>
        //       </View>
        //       <View>
        //       </View>
        //       </View>
        //     </TouchableOpacity>)
        //     }
        //   />
        // ) */}
        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigate('Home')} />
        </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    height: '100vh'
  },
  button: {
    padding: 15,
    backgroundColor: '#FFFFFF'
  },
  black: {
    backgroundColor: 'black',
    height:100,
    color: 'white',
  }
});