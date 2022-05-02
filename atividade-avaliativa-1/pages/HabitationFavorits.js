import React, { useState } from 'react';
import { Text, View, ScrollView, Button, StyleSheet} from 'react-native';
 
export default class HabitationDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados dos Imóveis',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Oi</Text>
        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigate('Home')} />
        </View>
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
  button: {
    padding: 15,
    backgroundColor: '#FFFFFF'
  }
});