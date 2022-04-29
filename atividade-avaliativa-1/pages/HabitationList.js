import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, SafeAreaView, ScrollView, FlatList, TouchableOpacity,Image } from 'react-native';
import Data from '../json/generated.json';
 
export default class HabitationListScreen extends React.Component {
  static navigationOptions = {
    title: 'Moradias',
  };
 
  constructor(props){
    super(props);
    this.state = { isLoading: false }
  }
  
  makeRemoteRequest = () => {
  this.setState({
    data: Data,
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
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={Data}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigate('HabitationDetails', {contact: item})}>
            <View style={styles.contact}>
              <View>
                <Image source={{uri: item.photo[0].link}} style={styles.image}/>
              </View>
              <View>
              <Text style={styles.text}> {item.name} </Text>
              </View>
            </View>
          </TouchableOpacity>}
        />
        <Button title="Voltar" onPress={() => navigate('Home')} />
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
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2vh'
  },
  text: {
    fontSize: 18,
    padding: '1vh'
  },
  image: {
    borderRadius: '50%',
    height: '20vw',
    width: '20vw'
  }
})