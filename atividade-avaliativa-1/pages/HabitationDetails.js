import * as React from 'react';
import { Platform, Text, View, StyleSheet, Button, Linking, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    isFavorite: false,
    getValue: '',
    };
  this.displayData();
  // AsyncStorage.clear(); // It clear all infos from AsyncStorage
  }

  displayData(){
    AsyncStorage.getItem(this.state.index).then(
      value => {
        this.setState({ getValue: value });
        if (this.state.getValue == 'favorite') {
          this.setState({ isFavorite: true });
        }
      });
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
    const { name, qtd_rooms, address, latitude, longitude, vl_total, type_habitations, type_rooms, furniture, type_bathroom, area, photo, description, video, phone, email, more_informations } = this.state;
    const mapUrl = Platform.select({
      ios: `maps:0,0?q=${latitude},${longitude}`,
      default: `geo:0,0?q=${latitude},${longitude}`
    });
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    
    return (
      <View style={styles.container}>
          <View style={styles.contactComponent}>
            <Text style={styles.contactName}>{name}</Text>
            <Icon
              type="material-community"
              name={this.state.isFavorite ? 'heart' : 'heart-outline'} 
              size={35} 
              color={this.state.isFavorite ? '#003893' : '#FDD927'} 
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

          <Text style={styles.contactDetails}><B>Valor do aluguel:</B> R$ {vl_total},00</Text>
          <Text style={styles.contactDetails}><B>Endereço:</B> {address}</Text>
          <Text style={styles.contactDetails}><B>Tipo de moradia:</B> {type_habitations}</Text>
          <Text style={styles.contactDetails}><B>Tipo de alojamento: </B>{type_rooms}</Text>
          
          <View style={styles.button} >
            <Button color='#1894f4' onPress={() => Linking.openURL(`${mapUrl}`) }
              title="Ver no Mapa" />
          </View>
          
          <Text style={styles.contactDetails}><B>Quantidade de habitações:</B> {qtd_rooms}</Text>
          <Text style={styles.contactDetails}><B>Tipo de banheiro:</B> {type_bathroom}</Text>
          
          <Text style={styles.contactDetails}><B>Mobiliário e equipamentos disponíveis no alojamento:</B></Text>
          <View style={styles.underTopic}>
            <FlatList
              data={furniture}
              renderItem={({item}) => <Text style={styles.contactDetails}>✔️ {item.name}</Text> }
            />
          </View>       
          
          <Text style={styles.contactDetails}><B>Área do alojamento (em m²):</B> {area}</Text>
          <Text style={styles.contactDetails}><B>Descrição:</B> {description}</Text>
          <Text style={styles.contactDetails}><B>Outras informações:</B> {more_informations}</Text>


          <View style={styles.button} >
            <Button color='#1894f4' onPress={() => Linking.openURL(`${video}`) }
              title="Veja o vídeo" />
          </View>
           <View style={styles.button} >
            <Button color='#1894f4' onPress={() => Linking.openURL(`mailto:${email}`) }
              title="Enviar E-mail" />
          </View>
          <View style={styles.button} >
            <Button color='#1894f4' onPress={() => Linking.openURL(`tel:${phone}`) }
              title="Ligar" />
          </View>
        <View style={styles.button} >
          <Button color='#003893' title="Voltar" onPress={() => navigate('HabitationList')} />
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
  button: {
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  image: {
    margin: 2,
    height: 300,
    width: 300,
    borderRadius: 25
  },
  photo: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  underTopic: {
    paddingLeft: 3
  },
  bold: {
    fontWeight: 'bold'
  }
});