import React,{Component} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image , Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';


export default class Coleta extends Component{
 render(){
  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <LinearGradient
        start={{x:1, y:0, }}
 
        end={{ x:0, y:1, }}
 
      colors={['#FC874C', '#EAE676']} style={styles.linearGradient}>
     
      </LinearGradient>

      <Image style={styles.imagemStyle} source={require('../../imagens/login01.png')}>
            </Image>
      
    </View>
  );
}
}

const styles = StyleSheet.create({


 container: {   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

   logo:{
    width: 650,
    height:350,
    marginTop:-280,
 
  } ,

texto:{
    fontWeight:'bold',
    fontSize:18,
    color:'black',
    marginTop:-30,
    textAlign:'center'
},
fornecedor:{
    width:210,
    height:180,
    marginTop:-226,
},
conteudo:{

}

})