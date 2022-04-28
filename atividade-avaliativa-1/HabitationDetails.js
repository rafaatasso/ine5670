import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';
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
      email: contact.email,
      phone: contact.phone,
      lat: contact.address.geo.lat,
      lng: contact.address.geo.lng
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { name, email, phone, lat, lng } = this.state;
    const mapUrl = Platform.select({
   ios: `maps:0,0?q=${lat},${lng}`,
   android: `geo:0,0?q=${lat},${lng}`
});
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.contactName}>{name}</Text>
          <Text style={styles.contactDetails}>E-mail: {email}</Text>
          <Text style={styles.contactDetails}>Telefone: {phone}</Text>
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
        <Button onPress={() => Linking.openURL(`${mapUrl}`) }
          title="Mapa" />
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
  }
});