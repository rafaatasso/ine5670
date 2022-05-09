import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, ScrollView, FlatList, TouchableOpacity,Image } from 'react-native';
import Data from '../json/generated.json';
 
export default class HabitationListScreen extends React.Component {
  static navigationOptions = {
    title: 'Moradias',
  };
 
  constructor(props){
    super(props);
    this.state = { 
      isLoading: false,
    };
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
    return(
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
        <View style={styles.button}>
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