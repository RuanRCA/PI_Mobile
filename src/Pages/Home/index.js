import React,{Component} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image} from 'react-native';
import * as Animatable from 'react-native-animatable'

export default class Home extends Component {

constructor(props){
    super(props)
    this.irSobre = this.irSobre.bind(this)
}
irSobre(){
    this.props.navigation.navigate("Sobre")
}
  render(){
  return (
      <View style={styles.container}>
 
      <Animatable.Image animation="flipInY" style={styles.logo} source={require('../../imagens/oleotech01.png')}
      />
 
    <Animatable.View animation= "fadeInLeft" delay = {600} style={styles.SectionStyle}>
      <Image style={styles.imagemStyle} source={require('../../imagens/login01.png')}>
      </Image>
      <TextInput style={styles.alinhado}  placeholder=" E-mail" placeholderTextColor='#fff' />
      </Animatable.View>
 
      <Animatable.View animation= "fadeInLeft" delay = {600} style={styles.SectionStyle}>
      <Image style={styles.imagemStyle} source={require('../../imagens/senha01.png')}>
      </Image>

      <View>
        
      </View>
 
      <TextInput style={styles.alinhado} placeholder="Senha" placeholderTextColor='#fff' />
      </Animatable.View>
 
 
      <TouchableOpacity>
        <Text style={styles.Text}>Esqueceu sua senha? clique aqui</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.Button} onPress={this.irSobre}>
        <Text>Entrar</Text>
      </TouchableOpacity>
 
         
      <TouchableOpacity style={styles.ButtonGoogle}>
         <Image style={styles.googleicon} source={require('../../imagens/googleicon.png')}></Image><Text> Entrar com o Google</Text>
      </TouchableOpacity>
     
     
 
      </View>
  )
}

 }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4694ED',
  },
 
  SectionStyle: {
    flexDirection: 'row',
    color:'white',
    margin: 13,
    padding: 10,
    paddingRadius: 20,
    paddingLeft:'auto',
    width: 340,
    borderRadius: 80,
     backgroundColor: '#4367F4',
   // backgroundColor:'white'
  },  
 
  imagemStyle:{
    padding: 10,
    margin:5 ,
    height: 25,
    width: 25,
   
  },
 
  alinhado: {
  color:'white',
  },
 
  Button: {
    margin: 20,
    padding: 10,
    paddingRadius: 20,
    paddingLeft:150,
    width: 340,
    borderRadius: 15,
    backgroundColor: '#FFFB7D',
  },
 
  ButtonGoogle: {
    margin: 20,
    color:'#000000',
    padding: 10,
    paddingRadius: 20,
    paddingLeft:110,
    width: 340,
    borderRadius: 15,
    backgroundColor: '#fff',
    flexDirection:'row'
  },
 
  googleicon: {
    height: 23,
    width: 23,
    paddingLeft: 'auto',
    marginRight:8
 
  },
 
  Text: {
    color:'#fff',
    textAlign: 'center'
  },
 
  logo:{
    width: 650,
    height:350,
    margin:20,
 
  } ,
 
 
 
})
