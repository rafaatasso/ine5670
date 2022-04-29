import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, Linking, FlatList, Image} from 'react-native';
 
export default class HabitationDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados dos Imóveis',
  };
  
  constructor(props) {
  super(props);
  let contact = props.navigation.getParam('contact');
  this.state = {
    name: contact.name,
    qtd_rooms: contact.qtd_rooms,
    address: contact.address,
    latitude: contact.latitude,
    longitude: contact.longitude,
    vl_total: contact.vl_total,
    type_habitations: contact.type_habitations,
    type_rooms: contact.type_rooms,
    furniture: contact.furniture,
    geladeira: contact.furniture.geladeira,
    type_bathroom: contact.type_bathroom,
    area: contact.area,
    photo: contact.photo,
    description: contact.description,
    video: contact.video,
    phone: contact.phone,
    email: contact.email,
    more_informations: contact.more_informations
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { name, qtd_rooms, address, latitude, longitude, vl_total, type_habitations, type_rooms, furniture, type_bathroom, area, photo, description, video, phone, email, more_informations, geladeira } = this.state;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.contactName}>{name}</Text>
          <Text style={styles.contactDetails}>Quantidade de habitações: {qtd_rooms}</Text>
          <Text style={styles.contactDetails}>Endereco: {address} </Text>
          <Text style={styles.contactName}>MUDAR PARA MAPA:</Text>
          <Text style={styles.contactDetails}>Latitude: {latitude} </Text>
          <Text style={styles.contactDetails}>Longitude: {longitude} </Text>
          <Text style={styles.contactDetails}>Valor do aluguel: R$ {vl_total},00 </Text>
          <Text style={styles.contactDetails}>Tipo de moradia: {type_habitations} </Text>
          <Text style={styles.contactDetails}>Tipo de alojamento: {type_rooms} </Text>
          
          <Text style={styles.contactDetails}>Mobiliario e equipamentos disponíveis no alojamento: </Text>
            
            <Text style={styles.contactDetails}>Geladeira: {geladeira}</Text>
            <Text style={styles.contactDetails}>Cama: {furniture.Cama}</Text>
            <Text style={styles.contactDetails}>Fogão: {furniture.Fogao}</Text> 
            <Text style={styles.contactDetails}>Armário: {furniture.Armario} </Text> 
            <Text style={styles.contactDetails}>Mesa: {furniture.Mesa} </Text>
            <Text style={styles.contactDetails}>Microondas: {furniture.Microondas} </Text>
            <Text style={styles.contactDetails}>TV: {furniture.TV} </Text> 
            <Text style={styles.contactDetails}>GuardaRoupa: {furniture.GuardaRoupa} </Text> 
            <Text style={styles.contactDetails}>MaquinaLava: {furniture.MaquinaLava} </Text>
          <Text style={styles.contactDetails}>Tipo de banheiro: {type_bathroom} </Text>
          <Text style={styles.contactDetails}>Área do alojamento (em m²): {area} </Text>
          <Text style={styles.contactDetails}>Descrição: {description} </Text>
          <Text style={styles.contactDetails}>Outras informações: {more_informations} </Text>
          <FlatList
            data={photo}
            renderItem={({item}) =>  <Image source={{uri: item.link}} style={styles.image} />   }
          />
          <View style={styles.button} >
            <Button onPress={() => Linking.openURL(`${video}`) }
              title="Veja o vídeo do lugar" />
          </View>
        </View>
        <View style={styles.button} >
          <Button onPress={() => Linking.openURL(`tel:${phone}`) }
            title="Ligar" />
        </View>
        <View style={styles.button} >
          <Button onPress={() => Linking.openURL(`mailto:${email}`) }
            title="Enviar E-mail" />
        </View>
        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigate('HabitationList')} />
        </View>
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  contactDetails: {
    fontSize: 16,
  },
  button: {
    padding: 15
  },
  image: {
    height: 160,
    width: 160
  }
});