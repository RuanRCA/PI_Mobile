import React, { useState } from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity , Image ,ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Codigo() {
  const [numeros, setNumeros] = useState([]);
  const [visible , setvisible] = useState(true);
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
     trocarVisibilidade();
     
  };
 
  function trocarVisibilidade(){
   setvisible(!visible);
  }

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../../imagens/fundo02.png')}>

    
         {/* <Image style={styles.logo} source={require('../../imagens/oleotech01.png')}>
            </Image> */}
   <Image style={styles.codigoColeta} source={require('../../imagens/Codigo-Coleta.png')}></Image>

   <View style={styles.card}>
      <View style={styles.numerosContainer}>
        {numeros.map((num, index) => (
          <Text key={index} style={styles.numero}>{num}</Text>
          
        ))}
        <TouchableOpacity style = {styles.Finalizar} onPress={()=>navigation.navigate('Agradecimento')}>
        <Text style = {styles.texto}>Finalizar</Text>
     </TouchableOpacity>
        </View>
   </View>
     
    

       {visible &&(
        <TouchableOpacity style={styles.button} onPress={gerarNumeros}>
        <Text style={styles.codigo}>Código</Text>
         </TouchableOpacity>
        )}
 
     
     
       </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background:{
    flex:1
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
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 40,
    backgroundColor:'#d01818ff',

    borderRadius:8,
    height:320,
    width:360,
    borderRadius:18
    
  },

  card:{
     backgroundColor:'#1B63C5',
     marginTop:118,
  

  },
  numero: {
    fontSize: 30,
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
    
  },

  texto:{
     fontWeight:'bold',
     fontSize:20
  }


});



