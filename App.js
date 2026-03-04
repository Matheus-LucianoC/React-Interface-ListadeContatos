import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
  
} from 'react-native';
import { SafeAreaView } from 'react-native-web';





export default function App() {

  const contatos = [
    { id: '1', nome: 'Marcos Andrade',email: "Marquinhos@hot.email" ,telefone: '81 988553424' },
    { id: '2', nome: 'Patrícia Tavares',email: "Patricia@email.com" ,telefone: '81 998765332' },
    { id: '3', nome: 'Rodrigo Antunes',email: "Rodr4312341@email.com" ,telefone: '81 987765525' },  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MESSAGES & CHAT</Text>

      <Image source={require('./assets/images/sideImage.png')} style={styles.imagem3} />

      <Text style={styles.textoescondido2}>________________</Text>

       <Text style={styles.texto2}>Mark all read                        Sort by time ⬇️</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() =>
  navigation.navigate('AlterarContato', {
    nome: item.nome,
    telefone: item.telefone,
    email: item.email
  })
}
  >
    <Image
  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
  style={styles.avatar}
/> 

    <View style={styles.infoContainer}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>{item.telefone}</Text>
    </View>
  </TouchableOpacity>
)}

/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 22,
    fontFamily: 'London',
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 67
  },

  texto2: {
    fontSize: 19,
    fontFamily: 'London',
    marginBottom: 20
  },

  primaryButton: {
    backgroundColor: '#2E86DE',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },

  warningButton: {
    backgroundColor: '#2E86DE',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },

  dangerButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 8
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  link: {
    backgroundColor: '#ff0000',
    color: '#fff',
    fontWeight:'bold',
    textAlign: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  nome: {
    fontWeight: 'bold',
    fontSize: 16
  },

  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#2E86DE',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  plus: {
    color: '#fff',
    fontSize: 30
  },
  FlatList: {
    marginBottom: 
  },

  textoescondido2: {
    color: '#2c48ff',
    fontSize: 22,
    fontFamily: 'London',
    textAlign: 'center',
    marginBottom: 120,
    fontWeight: 'bold',
    marginLeft: 61,
    marginTop: -25
  },

  card: {
  backgroundColor: '#f2f2f2',
  padding: 15, 
  borderRadius: 10,
  marginBottom: 10,
  flexDirection: 'row',
  alignItems: 'center'
},

avatar: {
  width: 50,
  height: 50,  
  borderRadius: 25,
  marginRight: 15
},

imagem3: {
  marginTop: -37,
  marginLeft: -20,
  width: 300,
  height: 150,
  position: 'absolute'
},

infoContainer: {
  flex: 1
}});