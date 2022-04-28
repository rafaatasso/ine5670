import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';
import { Platform } from 'react-native';
 
export default class HabitationFavoritsScreen extends React.Component {
  static navigationOptions = {
    title: 'Imóveis Favoritos',
  };
 
render() {
  const { navigate } = this.props.navigation;
  const contact = 'text';

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.contactName}>{contact}</Text>
        </View>
        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigate('Home')} />
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