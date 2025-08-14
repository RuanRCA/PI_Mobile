
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView ,ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';


 
export default function Home() {

  const navigation = useNavigation();

  return (
   <View style={estilos.container}>
     <ImageBackground style = {estilos.Background} source={require('../../imagens/Fundo01.png')}>

     <Image style={estilos.logo} source={require('../../imagens/Logo_Oleotech.png')}></Image>

    

     <TextInput
            placeholder="Email"
            placeholderTextColor="#fff"
            style={estilos.input}
           />

            <Image style = {estilos.carta} source={require('../../imagens/email.png')}></Image>

            <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            style={estilos.senha}
           />

           <Image style = {estilos.cadeado} source={require('../../imagens/password.png')}></Image>

           <Image style = {estilos.circulo} source={require('../../imagens/Circulo.png')}></Image>

           <Text style = {estilos.text}>Lembre-se</Text>

           <Text style = {estilos.esqueceu}>Esquece a Senha?</Text>

           <TouchableOpacity style={estilos.login} onPress={()=>navigation.navigate('Sobre')}>
            <Text style = {estilos.textlogin}>Login</Text>
           </TouchableOpacity>

           <Text style={estilos.ou}>Ou</Text>

          <TouchableOpacity style={estilos.botaoGoogle}>
         
        <Image source={require('../../imagens/googleicon.png')} style={estilos.iconeGoogle} /> 
          <Text style={estilos.textoBotaoGoogle}>Entrar com Google</Text>
       </TouchableOpacity>

   <TouchableOpacity style = {estilos.criar}>
    <Text style ={estilos.textcriar}>Criar uma conta</Text>
   </TouchableOpacity>

     </ImageBackground>
   </View>
  );
}
 
const estilos = StyleSheet.create({

container:{
  flex:1,
},

Background:{
flex:1
},

logo: {
   width: 140,
    height:150,
    // margin:20,
     paddingRight:267,
    margin:135
   },

   input:{
     borderColor:'#fff',
    borderWidth:2,
    padding:18,
    fontSize:18,
    borderRadius:25,
    marginHorizontal:30,
    margin:26,
     backgroundColor: '#1B63C5',
    color:'#fff',
    marginTop:-30,
    textAlign:'center'
   },

   carta:{
    marginLeft:50,
    marginTop:-79
   },

   senha:{
     borderColor:'#fff',
     borderWidth:2,
    padding:18,
    fontSize:18,
    borderRadius:25,
    marginHorizontal:30,
    margin:30,
     backgroundColor: '#1B63C5',
    color:'#fff',
    marginTop:38,
    textAlign:'center'
   },

   cadeado:{
    marginLeft:50,
    marginTop:-79
   },

   circulo:{
   marginLeft:41,
    marginTop:35
   },

   text:{
    marginLeft:70,
    marginTop:-19,
    color:'#fff'
   },

   esqueceu:{
   marginLeft:250,
    marginTop:-19,
    color:'#fff'
   },

   login:{
     padding:15,
     width:220,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:58,
     backgroundColor:'#fff',
     margin:10,
     borderRadius: 125,
   },
   
   textlogin:{
  color:'#1B63C5',
  fontSize:20,
  fontWeight:'bold'
   },

   ou:{
    textAlign:'center',
    padding:15,
    color:'#fff',
    fontSize:17
   },

   botaoGoogle: {
    backgroundColor: '#CBCBCB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    width: 200,
    justifyContent: 'center',
      marginLeft:108,
  },

   iconeGoogle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  textoBotaoGoogle:{
    fontWeight:'bold'
  },

  criar:{
    textAlign:'center',
    padding:10,
     borderColor:'#fff',
     borderWidth:2,
      borderRadius:25,
      width:180,
      margin:25,
      marginLeft:110,
      alignItems:'center'
  },
  
  textcriar:{
    color:'#fff'
  }

});
