import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Data from './json/generated.json';
 
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
            <View>
              <Text style={styles.contact}>{item.name}</Text>
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
   padding: 15
  },
  contact: {
    fontSize: 18,
    height: 44,
  }
})