import React,{Component} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image , Button , ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from'@expo/vector-icons/FontAwesome5';



export default function Coleta (){
  const navigation = useNavigation();
  const litro1 = '1 Litro';
  const litro2 = '2 Litros';
  const litro5 = '5 Litros';
  const litro20 = '20 Litros';
  
  return (
      <View style={styles.container}>
        <ImageBackground style = {styles.Background} source={require('../../imagens/Fundo01.png')}>
        <Image style ={styles.logo} source={require('../../imagens/locais_coleta.png')}></Image>
        
      
    

  
        </ImageBackground>

     
    </View>
  );
}


const styles = StyleSheet.create({


  container: {
    flex: 1,
  
  },

  logo:{
  width: 108,
    height:108,
    // margin:20,
      paddingRight:257,
    margin:115
  },

  Background:{
  flex:1
   },

   texto1:{
  padding:95,
  fontSize:18,
  fontWeight:'bold',
  color:'#fff'
   },

coletas:{
  marginLeft:152,
  marginTop:65
},

litro1:{
  margin:5,
  marginLeft:58,
  color:'#fff',
  fontWeight:'bold',
  fontSize:18
},

ml1000:{
    marginLeft:58,
    color:'#fff',
    fontWeight:'bold',
     fontSize:18
},
litro2:{
    margin:5,
   marginLeft:275,
  color:'#fff',
  fontWeight:'bold',
  fontSize:18,
  marginTop:-60
},

ml2000:{
 marginLeft:275,
  color:'#fff',
    fontWeight:'bold',
     fontSize:18

},

litro20:{
     margin:5,
   marginLeft:275,
  color:'#fff',
  fontWeight:'bold',
  fontSize:18,
   marginTop:-60
},

vinte:{
 
   color:'#fff',
    fontWeight:'bold',
     fontSize:18,
     marginLeft:275
},

coletar:{
  backgroundColor:"#EFC91D",
   textAlign:'center',
    padding:10,
      borderRadius:25,
      width:180,
      // margin:25,
      marginLeft:110,
      alignItems:'center'
},

textColetar:{
fontWeight:'bold',
fontSize:18,
color:'#1B63C5',
}


})