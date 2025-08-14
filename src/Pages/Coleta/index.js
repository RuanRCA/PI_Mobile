import React,{Component} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image , Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';



export default function Coleta (){
  const navigation = useNavigation();
  const litro1 = '1 Litro';
  const litro2 = '2 Litros';
  const litro5 = '5 Litros';
  const litro20 = '20 Litros';
  
  return (
    <View style={styles.container}>

        <LinearGradient
          style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '980',}}
      
            start={{x:1, y:0,}}
 
            end={{ x:0, y:1,}}
 
           colors={['#00BFFF'   ,'#F0F8FF']}
            />

    {/* <Image style={styles.logo} source={require('../../imagens/oleotech01.png')}>
    </Image> */}

    <View style= {styles.Oleos}>

         <TouchableOpacity style={styles.Botao1} onPress={()=> navigation.navigate('Mapa' , {mensagem:litro1})}>

     <LinearGradient
     style={{  width:120 , height:110 , borderRadius:8 , left:20 , borderColor:'white'}}
     
           start={{x:1, y:0, }}

           end={{ x:0, y:1,}}

           colors={['#3057F1' , '#26E2F7']}
    />
    <Image style={styles.Oleo1} source={require('../../imagens/oleo01.png')}/>
    <Text style={styles.texto1}>1 Litro 1000ML</Text>
    </TouchableOpacity>
    
  

   
    <TouchableOpacity style={styles.botao2} onPress={()=> navigation.navigate('Mapa',{mensagem:litro2})}>
     <LinearGradient
     style={{ width:120 , height:110 , borderRadius:8 , left:275 , borderColor:'white', marginTop:-130 , borderColor:'white'}}
     
           start={{x:1, y:0, }}

           end={{ x:1, y:1,}}

           colors={['#3057F1' , '#26E2F7']}
    />
    <Image style={styles.Oleo2} source={require('../../imagens/oleo02.png')} />
    </TouchableOpacity>

     <Text style={styles.texto2}>2 Litros 2000ML</Text>
      
    
   
    
     <TouchableOpacity style={styles.Botao3} onPress={()=> navigation.navigate('Mapa' , {mensagem:litro5})}>

     <LinearGradient
     style={{ width:120 , height:110 , borderRadius:8 , left:20 , borderColor:'white', marginTop:50}}
     
           start={{x:1, y:0, }}

           end={{ x:0, y:1,}}

           colors={['#3057F1' , '#26E2F7']}
    />
    <Image style={styles.Oleo5} source={require('../../imagens/Oleo5Litros.png')}/>
     </TouchableOpacity>
 
 <Text style={styles.texto3}>5 Litros 5000ML</Text>

 <TouchableOpacity styles={styles.botao4} onPress={()=> navigation.navigate('Mapa' , {mensagem:litro20})}>
   <LinearGradient
     style={{ width:120 , height:110 , borderRadius:8 , left:275 , borderColor:'white', marginTop:-130 , borderColor:'white'}}
     
           start={{x:1, y:0, }}

           end={{ x:1, y:1,}}

           colors={['#3057F1' , '#26E2F7']}
    />
    <Image style={styles.Oleo20} source={require('../../imagens/Oleo20Litros.png')}/>
 </TouchableOpacity>
 
  <Text style={styles.texto4}>20 Litros 20.000ML</Text>

   <TextInput style={styles.Quantidade} placeholder='Digite a quantidade de ML' placeholderTextColor='#fff'>
  </TextInput>
 
 <TouchableOpacity style={styles.Coletar} onPress={()=>navigation.navigate('Mapa')}>
  <Text style={styles.textoColetar}>Coletar</Text>
 </TouchableOpacity>

  

    </View>

  
    
      
    </View>
  );
}


const styles = StyleSheet.create({


 container: {   
    flex: 1,
  },

  oleo2:{
  flex:1
  },

  logo:{
    width:150,
    height:250,
    alignSelf:'center',
    marginTop:14
  },

  Oleo1:{
    width:105,
    height:100,
    marginTop:-100,
    left:25
  },

  texto1:{
    left:28,
    fontWeight:'bold'
  },

  Oleo2:{
     width:88,
    height:105,
    left:295,
    marginTop:-100,

  },

  texto2:{
    left:285,
    marginTop:-20,
    fontWeight:'bold'
  },

  Oleo5:{
    width:105,
    height:100,
    marginTop:-100,
    left:25
  },

  texto3:{
    left:28,
    fontWeight:'bold'
  },

  Oleo20:{
     width:110,
    height:105,
    left:280,
    marginTop:-105,
  },

  texto4:{
    left:270,
    marginTop:-20,
    fontWeight:'bold'
  },

  Quantidade:{
   borderColor:'#fff',
    borderWidth:2,
    padding:18,
    fontSize:18,
    borderRadius:10,
    marginHorizontal:30,
    margin:26,
     backgroundColor: 'rgb(17, 128, 247)',
    color:'#fff',
    marginTop:68,
    textAlign:'center'
  },

  Coletar:{
    padding:20,
     width:120,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:70,
     backgroundColor:'rgb(255, 255, 0)',
     margin:5
  },

  textoColetar:{
    fontWeight:'bold',
    fontSize:18
  }


 



})