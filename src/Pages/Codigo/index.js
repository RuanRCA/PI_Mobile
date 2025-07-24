import React, { useState } from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity , Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Codigo() {
  const [numeros, setNumeros] = useState([]);
   const navigation = useNavigation();
  const gerarNumeros = () => {
    const novosNumeros = [];
    while (novosNumeros.length < 6) {
      const numero = Math.floor(Math.random() * 9) + 1;
      if (!novosNumeros.includes(numero)) {
        novosNumeros.push(numero);
      }
    }
     setNumeros(novosNumeros);
  };

  return (
    <View style={styles.container}>
         <Image style={styles.logo} source={require('../../imagens/oleotech01.png')}>
            </Image>
      <Text style={styles.title}>Código Da Coleta</Text>
      <View style={styles.numerosContainer}>
        {numeros.map((num, index) => (
          <Text key={index} style={styles.numero}>{num}</Text>
        ))}
      </View>
    <TouchableOpacity style={styles.button} onPress={gerarNumeros}>
     <Text style={styles.codigo}>Código</Text>
    </TouchableOpacity>
     
     <TouchableOpacity style = {styles.Finalizar} onPress={()=>navigation.navigate('Agradecimento')}>
        <Text style = {styles.texto}>Finalizar</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
  },
  logo:{
     width:350,
    height:350,
    alignSelf:'center',
    marginTop:-120
     
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
     fontWeight:'bold',
  },
  numerosContainer: {
    flexDirection: 'row',
    marginBottom: 40,
    backgroundColor:'#00FF00',
    borderRadius:8,
    height:120,
    
  },
  numero: {
    fontSize: 50,
    marginHorizontal: 5,
    padding: 10,
    fontWeight:'bold',
    borderRadius: 5,
    textAlign:'center'
  },

  button:{
      padding:20,
     width:130,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:70,
     backgroundColor:'#0eeff3ff',
     margin:15,
     
  },

  codigo:{
    fontWeight:'bold',
     fontSize:20
  } , 

  Finalizar:{
      padding:25,
     width:230,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:80,
     backgroundColor:'#00ffd0ff',
     margin:25,
  },

  texto:{
     fontWeight:'bold',
     fontSize:20
  }


});



