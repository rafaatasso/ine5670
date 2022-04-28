import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Linking, FlatList, CheckBox, Image} from 'react-native';
import { Platform } from 'react-native';
 
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
      <View>
        <View style={styles.container}>
          <Text style={styles.contactName}>{name}</Text>
          <Text style={styles.contactDetails}>Quantidade de habitacoes: {qtd_rooms}</Text>
          <Text style={styles.contactDetails}> Endereco: {address} </Text>
          <Text style={styles.contactName}>MUDAR PARA MAPA:</Text>
          <Text style={styles.contactDetails}> Latitude: {latitude} </Text>
          <Text style={styles.contactDetails}> Longitude: {longitude} </Text>
          <Text style={styles.contactDetails}> Valor do aluguel (R$) {vl_total} </Text>
          <Text style={styles.contactDetails}> Tipo de moradia: {type_habitations} </Text>
          <Text style={styles.contactDetails}> Tipo de alojamento: {type_rooms} </Text>
          
          <Text style={styles.contactDetails}> Mobiliario e equipamentos disponíveis no alojamento: </Text>
            
            <Text style={styles.contactDetails}> Geladeira: {geladeira}<CheckBox disabled={false} value={true}/> </Text>
            <Text style={styles.contactDetails}> Cama: {furniture.Cama} <CheckBox disabled={false} value={true}/> </Text>
            <Text style={styles.contactDetails}> Fogao: {furniture.Fogao} <CheckBox disabled={false} value={true}/> </Text>
            <Text style={styles.contactDetails}> Armario: {furniture.Armario}<CheckBox disabled={false} value={true}/>  </Text>
            <Text style={styles.contactDetails}> Mesa: {furniture.Mesa} <CheckBox disabled={false} value={true}/> </Text>
            <Text style={styles.contactDetails}> Microondas: {furniture.Microondas} <CheckBox disabled={false} value={true}/> </Text>
            <Text style={styles.contactDetails}> TV: {furniture.TV} <CheckBox disabled={false} value={true}/> </Text>
            <Text style={styles.contactDetails}> GuardaRoupa: {furniture.GuardaRoupa} <CheckBox disabled={false} value={true}/> </Text>
            <Text style={styles.contactDetails}> MaquinaLava: {furniture.MaquinaLava} <CheckBox disabled={false} value={true}/> </Text>
          <Text style={styles.contactDetails}> Tipo de banheiro: {type_bathroom} </Text>
          <Text style={styles.contactDetails}> Área do alojamento (em m²): {area} </Text>
          <FlatList
            data={photo}
            renderItem={({item}) =>  <Image source={{uri: item.link}} style={styles.image} />   }
          />
            
          <Text style={styles.contactDetails}> Descrição: {description} </Text>
          <Text style={styles.contactDetails}> Vídeo: {video} </Text>
          <Text style={styles.contactDetails}> Telefone de contato: {phone} </Text>
          <Text style={styles.contactDetails}> E-mail pra contato: {email} </Text>
          <Text style={styles.contactDetails}> Outras informações: {more_informations} </Text>
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
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  contactDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  },
  image: {
    height: 160,
    width: 160
  }
});