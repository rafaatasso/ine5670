import React, { useState } from 'react';
import { Platform, Text, View, StyleSheet, Button, Linking, FlatList, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteButton from '../components/favoriteButton';
import { Icon } from 'react-native-elements';

export default class HabitationDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados dos Imóveis',
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
    isFavorite: false
    };
  }
  displayData(){
    let info = AsyncStorage.getItem(this.state.index);
    console.log(info);
  }
  statusFavorite(){
    if(this.state.isFavorite){
      AsyncStorage.removeItem(this.state.index);
      this.setState({isFavorite: false});
    } else {
      AsyncStorage.setItem(this.state.index, 'favorite');
      this.setState({isFavorite: true});
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    const { index, name, qtd_rooms, address, latitude, longitude, vl_total, type_habitations, type_rooms, furniture, type_bathroom, area, photo, description, video, phone, email, more_informations } = this.state;
    const mapUrl = Platform.select({
      ios: `maps:0,0?q=${latitude},${longitude}`,
      default: `geo:0,0?q=${latitude},${longitude}`
    });
    
    return (
      <View style={styles.container}>
          <View style={styles.contactComponent}>
            <Text style={styles.contactName}>{name}</Text>
            <Icon
              type="material-community"
              name={this.state.isFavorite ? 'heart' : 'heart-outline'} 
              size={35} 
              color={this.state.isFavorite ? 'red' : 'yellow'} 
              onPress={() => this.statusFavorite()}
              underlayColor="transparent"
            />
          </View>
          <Text style={styles.contactDetails}>Quantidade de habitações: {qtd_rooms}</Text>
          <Text style={styles.contactDetails}>Endereço: {address}</Text>
          <View style={styles.button} >
            <Button onPress={() => Linking.openURL(`${mapUrl}`) }
              title="Ver no Mapa" />
          </View>
          <Text style={styles.contactDetails}>Valor do aluguel: R$ {vl_total},00</Text>
          <Text style={styles.contactDetails}>Tipo de moradia: {type_habitations}</Text>
          <Text style={styles.contactDetails}>Tipo de alojamento: {type_rooms}</Text>
          
          <Text style={styles.contactDetails}>Mobiliário e equipamentos disponíveis no alojamento:</Text>
          <View style={styles.underTopic}>
            <FlatList
              data={furniture}
              renderItem={({item}) => <Text style={styles.contactDetails}>👍 {item.name}</Text> }
            />
          </View>       
          <Text style={styles.contactDetails}>Tipo de banheiro: {type_bathroom}</Text>
          <Text style={styles.contactDetails}>Área do alojamento (em m²): {area}</Text>
          <Text style={styles.contactDetails}>Descrição: {description}</Text>
          <Text style={styles.contactDetails}>Outras informações: {more_informations}</Text>

          <View style={styles.photo}>
          <FlatList
            data={photo}
            renderItem={({item}) =>  <Image source={{uri: item.link}} style={styles.image} />   }
          />
          </View>

          <View style={styles.button} >
            <Button onPress={() => Linking.openURL(`${video}`) }
              title="Veja o vídeo" />
          </View>
           <View style={styles.button} >
            <Button onPress={() => Linking.openURL(`mailto:${email}`) }
              title="Enviar E-mail" />
          </View>
          <View style={styles.button} >
            <Button onPress={() => Linking.openURL(`tel:${phone}`) }
              title="Ligar" />
          </View>
        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigate('HabitationList')} />
        </View>
      </View>
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
    padding: 2
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactDetails: {
    fontSize: 16,
    paddingTop: 2,
    textAlign: 'justify'
  },
  button: {
    padding: 15,
    backgroundColor: '#FFFFFF'
  },
  image: {
    margin: 2,
    height: 80,
    width: 80
  },
  photo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  underTopic: {
    paddingLeft: 3
  }
});