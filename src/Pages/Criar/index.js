import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image  , ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from'@expo/vector-icons/FontAwesome5';



export default function Criar(){
      
 const navigation = useNavigation();
  const [cadastro, setCadastro] = useState([]);
  const [nome, setNome] = useState('');
  const [email , setEmail] = useState('');
  const [senha , setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone , setTelefone] = useState('');
   const [loading, setLoading] = useState(false);

   

      const cadastrar = async () => {
if (!nome.trim() || !email.trim() || !senha.trim() || !cep.trim() || !cpf.trim() || !telefone.trim()) {
  Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
  return;
}


 
 try {
 const response = await fetch('http://192.168.56.1/api_oleotech/cadastro.php', {
 method: 'POST',
 headers: {
 'Content-Type':'application/json',
 },
 body: JSON.stringify({ nome,  email , senha ,  cep , cpf , telefone , }),
 });
 
 const data = await response.json();

 if (data.sucesso) {
 // Limpa os campos e busca a lista atualizada
 setNome('');
 setEmail('');
 setSenha('');
 setCep('');
 setCpf('');
 setTelefone('');
 } else {
 Alert.alert('Erro', data.mensagem || 'Ocorreu um erro ao adicionar.');
 console.log(data)
 }
 } catch (error) {
 Alert.alert('Erro', 'Não foi possível adicionar a pessoa.');
 console.error(error);
 console.log(data)
 } finally {
 setLoading(false);
 }
 };
  
  return (
       <View style = {styles.container} >
                  <ImageBackground style = {styles.Background} source={require('../../imagens/fundo02.png')}>
                  <Image style = {styles.logo} source={require('../../imagens/cadastro.png')}></Image>
                  <View style = {styles.listaCadastro}>
      
                    <TextInput style={styles.Inputcpf} 
                    placeholder='Nome' 
                    placeholderTextColor='#1B63C5'
                    type={'nome'}
                    value={nome}
                     keyboardType="text"
                     onChangeText={setNome}
                    />
      
                 
      
                     <TextInput style={styles.Inputquantidade}
                      placeholder='Email' 
                      placeholderTextColor='#1B63C5'
                      value={email}
                       onChangeText={setEmail}
                      />
      
                     <TextInput style={styles.InputEmpresa} 
                     placeholder='Senha' 
                     placeholderTextColor='#1B63C5'
                     value = {senha}
                      keyboardType="numeric"
                      secureTextEntry
                      onChangeText={setSenha}
                     />
      
                     <TextInput style={styles.InputColetor}
                      placeholder='CEP' 
                      placeholderTextColor='#1B63C5'
                      value={cep}
                       keyboardType="numeric"
                       onChangeText={setCep}
                      /> 

                      <TextInput style={styles.InputColetor}
                      placeholder='CPF' 
                      placeholderTextColor='#1B63C5'
                      value={cpf}
                       keyboardType="numeric"
                       onChangeText={setCpf}
                      /> 

                       <TextInput style={styles.InputColetor}
                      placeholder='Telefone' 
                      placeholderTextColor='#1B63C5'
                      value={telefone}
                       keyboardType="numeric"
                       onChangeText={setTelefone}
                      /> 
      
                    <TouchableOpacity style={styles.cadastrar} onPress={cadastrar}>
      
          
                      <Text style = {styles.Textcadastrar}>Cadastrar</Text>
                    </TouchableOpacity>
      
                  </View>
      
                  </ImageBackground>
              </View>
  );
}


const styles = StyleSheet.create({


 container: {
    flex: 1,
  },

  Background:{
  flex:1
   },

      logo:{
   
  alignSelf:'center',
  margin:97,
    height:50,
    maxWidth:380
   },

   listaCadastro:{
 backgroundColor: '#fff',
 padding: 25,
 borderRadius: 8,
//  marginBottom: 8,
marginTop:-60,
 elevation:10,
 width:355,
 height:495,
 marginLeft:23,
 flexDirection: 'column',
//   justifyContent: 'space-between',
 borderWidth: 1,
 borderColor: '#eee',
   },

   Inputcpf:{
    borderColor:'#1B63C5',
    borderWidth:2,
     padding:15,
    fontSize:18,
    borderRadius:25,
    marginHorizontal:30,
    margin:6,
     backgroundColor: '#fff',
    color:'#1B63C5',
    // marginTop:-30,
    textAlign:'center'
   },
   texto:{
    textAlign:'center',
    margin:6,
    color:'#1B63C5',
    fontWeight:'bold',
    fontSize:16
   },

   Inputquantidade:{
     borderColor:'#1B63C5',
    borderWidth:2,
     padding:18,
    fontSize:18,
    borderRadius:25,
    marginHorizontal:30,
    margin:6,
     backgroundColor: '#fff',
    color:'#1B63C5',
    // marginTop:-30,
    textAlign:'center'
   },

   InputEmpresa:{
      borderColor:'#1B63C5',
    borderWidth:2,
     padding:18,
    fontSize:18,
    borderRadius:25,
    marginHorizontal:30,
    margin:13,
     backgroundColor: '#fff',
    color:'#1B63C5',
    // marginTop:-30,
    textAlign:'center'
   },

   InputColetor:{
      borderColor:'#1B63C5',
    borderWidth:2,
     padding:18,
    fontSize:18,
    borderRadius:25,
    marginHorizontal:30,
    margin:6,
     backgroundColor: '#fff',
    color:'#1B63C5',
    // marginTop:-30,
    textAlign:'center'
   },

   cadastrar:{
      padding:10,
     width:195,
     alignItems:'center',
      alignSelf:'center',
    // marginLeft:48,
     borderRadius:10,
     borderColor:'black',
     height:48,
     backgroundColor:'#1B63C5',
     margin:25,
     borderRadius: 125,
   },

   Textcadastrar:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold',
   }


})