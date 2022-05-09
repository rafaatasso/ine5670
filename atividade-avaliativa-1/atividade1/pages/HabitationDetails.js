import * as React from 'react';
import { Platform, Text, View,ActivityIndicator, StyleSheet, Button, ScrollView, Linking, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';
import Data from '../json/generated.json';

export default class HabitationDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados da Moradia',
  };
  
  constructor(props) {
  super(props);
  let contact = props.navigation.getParam('contact');
  this.state = {
    index: contact.index,
    name: contact.name,
    qtd_rooms: contact.qtd_rooms,
    address: contact.address,
    latitude: contact.latitude,
    longitude: contact.longitude,
    vl_total: contact.vl_total,
    type_habitations: contact.type_habitations,
    type_rooms: contact.type_rooms,
    furniture: contact.furniture,
    type_bathroom: contact.type_bathroom,
    area: contact.area,
    photo: contact.photo,
    description: contact.description,
    video: contact.video,
    phone: contact.phone,
    email: contact.email,
    more_informations: contact.more_informations,
    isFavorited: false,
    getValue: '',
    };
  this.displayData();
  // AsyncStorage.clear(); // It clear all infos from AsyncStorage
  }

  displayData(){
    const textList = Data;
        
    AsyncStorage.getItem(this.state.index).then(
      value => {
        this.setState({ getValue: value });
        if (this.state.getValue == 'favorite') {
          this.setState({isFavorited: true});
        }
      });
  }

  statusFavorite() {
    if(this.state.isFavorited){ //remove
      AsyncStorage.removeItem(this.state.index, 'favorite');
      this.setState({isFavorited: false});
    } else { //salva
      AsyncStorage.setItem(this.state.index, 'favorite');
      this.setState({isFavorited: true});
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator size="large" color="#FDD927" />
        </View>
      )
    }

    const { navigate } = this.props.navigation;
    const { name, qtd_rooms, address, latitude, longitude, vl_total, type_habitations, type_rooms, furniture, type_bathroom, area, photo, description, video, phone, email, more_informations } = this.state;
    const mapUrl = Platform.select({
      ios: `maps:0,0?q=${latitude},${longitude}`,
      default: `geo:0,0?q=${latitude},${longitude}`
    });
    
    return (
      <ScrollView style={styles.container}>
          <View style={styles.contactComponent}>
            <Text style={styles.contactName}>{name}</Text>
            <Icon
              type="material-community"
              name={this.state.isFavorited ? 'heart' : 'heart-outline'} 
              size={35} 
              color={this.state.isFavorited ? 'red' : '#FDD927'} 
              onPress={() => this.statusFavorite()}
              underlayColor="transparent"
            />
          </View>

          <View style={styles.photo}>
          <FlatList
            data={photo}
            renderItem={({item}) =>  <Image source={{uri: item.link}} style={styles.image} />   }
          />
          </View>
         
          <Text style={styles.contactDetails}>Valor do aluguel: R$ {vl_total},00</Text>
          <Text style={styles.contactDetails}>Endereço: {address}</Text>
          <Text style={styles.contactDetails}>Tipo de moradia: {type_habitations}</Text>
          <Text style={styles.contactDetails}>Tipo de alojamento: {type_rooms}</Text>

          <View style={styles.box}>
            <View style={styles.option} >
              <Button color='#E4B800' onPress={() => Linking.openURL(`${mapUrl}`) }
                title="Ver no Mapa" />
            </View>
            <View style={styles.option} >
              <Button color='#E4B800' onPress={() => Linking.openURL(`${video}`) }
                title="Ver vídeo" />
            </View>          
          </View>   

          <Text style={styles.contactDetails}>Quantidade de habitações: {qtd_rooms}</Text>
          <Text style={styles.contactDetails}>Tipo de banheiro: {type_bathroom}</Text>
          <Text style={styles.contactDetails}>Mobiliário e equipamentos disponíveis no alojamento:</Text>
          
          <View style={styles.underTopic}>
            <FlatList
              data={furniture}
              renderItem={({item}) => <Text style={styles.contactDetails}>✔️ {item.name}</Text> }
            />
          </View>
          <Text style={styles.contactDetails}>Área do alojamento (em m²): {area}</Text>       
          <Text style={styles.contactDetails}>Descrição: {description}</Text>

          <View style={styles.option} >
            <Button color='#E4B800' onPress={() => Linking.openURL(`mailto:${email}`) }
              title="Enviar E-mail" />
          </View>
          <View style={styles.option} >
            <Button color='#E4B800' onPress={() => Linking.openURL(`tel:${phone}`) }
              title="Ligar" />
          </View>

          <Text style={styles.contactDetails}>Outras informações: {more_informations}</Text>

        <View style={styles.button} >
          <Button title="Voltar" color="#BA4323" onPress={() => navigate('HabitationList')} />
        </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#FFFFFF'
  },
  contactComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactDetails: {
    fontSize: 16,
    paddingTop: 5,
    textAlign: 'justify'
  },
  box: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  option: {
    paddingTop: 2.5,
    paddingBottom: 2.5,
    backgroundColor: '#FFFFFF'
  },
  button: {
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 5,
    margin: 0,
    backgroundColor: "#FFFFFF",
  },
  image: {
    margin: 2,
    height: 280,
    width: 280
  },
  photo: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  underTopic: {
    paddingLeft: 3
  }
});