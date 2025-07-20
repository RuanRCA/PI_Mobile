import React,{Component} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

 
export default function Sobre(){
    
 const navigation = useNavigation();
        return(
    <View style={styles.container}>

      <LinearGradient
    style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '1000',}}

     start={{x:1, y:0, }}

    end={{ x:0, y:1,}}

     colors={['#FC874C'   ,'#EAE676']}
      />

      <Animatable.Image  animation= "flipInY" style={styles.logo} source={require('../../imagens/oleotech01.png')}
         />



          <Animatable.View delay={600} animation="fadeInUp" style={styles.conteudo}>
           <TouchableOpacity onPress={()=> navigation.navigate('Coleta')}>
            
          <LinearGradient
          style={{justifyContent:'center' , width:220 , height:220 , borderRadius:8}}

           start={{x:1, y:0, }}

           end={{ x:0, y:1,}}

           colors={['#FFF831','#ABC6E5']}

          />
           <Image style={styles.fornecedor} source={require('../../imagens/Fornecedor.png')}>
            </Image> 
          </TouchableOpacity>
             <Text style={styles.texto}>Bem Vindo Fornecedor</Text>  
          </Animatable.View>

        

      </View>
           
        )
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
    marginTop:12,   
    textAlign:'center'
},
ponto:{
 marginTop:-65,

},
fornecedor:{
    width:210,
    height:180,
    marginTop:-226,
},


})

