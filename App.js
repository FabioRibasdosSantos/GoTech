import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View, Image, TextInput,TouchableOpacity } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      <TextInput
        placeholder="Digite seu usuário"
        secureTextEntry={true}
        style={styles.input}
      />

      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontsize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  
});
