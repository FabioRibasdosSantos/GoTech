import React, { Component } from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput,TouchableOpacity } from 'react-native';

export default class App extends Component() {

  clicou = () => {
    Alert.alert('Go Tech', "Você está logado!")
  }

render() {
  return (
    <View style={styles.container}>

      <Image 
      source={require('./assets/logo.png')}
       style={styles.logo} 
       />
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => {this.clicou()} }
      >
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    margemTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontsize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
