import * as React from 'react';
import { Text, View, ScrollView, Button, ActivityIndicator, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Data from '../json/generated.json';
 
export default class HabitationDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Favoritados',
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
          <ActivityIndicator size="large" color="#FDD927" />
        </View>
      )
    }
 
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={Data}
          keyExtractor={item => item.index}
          renderItem={({item}) =>
          (<TouchableOpacity onPress={ () => navigate('HabitationDetails', {contact: item})}>
            <View style={styles.contactComponent}>
            <View style={styles.contact}>
              <View>
                <Image source={{uri: item.photo[0].link}} style={styles.image}/>
              </View>
              <View>
                <Text style={styles.titleText}>{item.name} </Text>
                <Text style={styles.valueText}>R$ {item.vl_total},00</Text>
              </View>
            </View>
            </View>
          </TouchableOpacity>)
          }
        />

        { /*<FlatList
            style={styles.black}
            data={allIndexFavorites}
            renderItem={({ind}) => (
              <Text>{ind.name}</Text>
            )}
        />
        <Text onPress={() => {{console.log(allIndexFavorites)}}}>oioioioi</Text> */}
        
        //{/* // (
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
          <Button title="Voltar" color="#BA4323" onPress={() => navigate('Home')} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#FFFFFF'
  },
  contactComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingEnd: 5,
    padding: 2
  },
  button: {
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 5,
    margin: 0,
    backgroundColor: "#FFFFFF",
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 1,
    marginLeft: 15
  },
  valueText: {
    fontSize: 18,
    padding: 1,
    marginLeft: 15
  },
  image: {
    borderRadius: 50,
    height: 80,
    width: 80
  }
})
 
// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     backgroundColor: '#FFFFFF',
//     height: '100vh'
//   },
//   button: {
//     padding: 15,
//     backgroundColor: '#FFFFFF'
//   },
//   /*black: {
//     backgroundColor: 'black',
//     height:100,
//     color: 'white',
//   }*/
// });