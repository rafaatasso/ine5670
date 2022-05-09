import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, FlatList, TouchableOpacity,Image } from 'react-native';
import Data from '../json/generated.json';
 
export default class HabitationListScreen extends React.Component {
  static navigationOptions = {
    title: 'Moradias',
  };
 
  constructor(props){
    super(props);
  }

  render() {
 
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <FlatList
          data={Data}
          keyExtractor={item => item.index}
          renderItem={({item}) =>
          (<TouchableOpacity onPress={ () => navigate('HabitationDetails', {contact: item, local: 'list'})}>
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
        />
        <Button color='#003893' title="Voltar" onPress={() => navigate('Home')} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    flex: 1
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
})