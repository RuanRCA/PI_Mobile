import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image , Button , ImageBackground , FlatList} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import Icon from'@expo/vector-icons/FontAwesome5';

export default function Coletor(){

 const [cadastro, setCadastro] = useState([]);
  const [cpf, setCpf] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [empresa , setEmpresa] = useState('');
  const [matricula_coletor , setmatricula_Coletor] = useState('')
   const [loading, setLoading] = useState(false);
   

    const adicionarColeta = async () => {
if (!cpf.trim() || !quantidade.trim() || !empresa.trim() || !matricula_coletor.trim()) {
  Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
  return;
}

 
 try {
 const response = await fetch('http://192.168.56.1/api_oleotech/oleotech.php', {
 method: 'POST',
 headers: {
 'Content-Type':'application/json',
 },
 body: JSON.stringify({ cpf,  quantidade ,  empresa ,  matricula_coletor }),
 });
 
 const data = await response.json();

 if (data.sucesso) {
 // Limpa os campos e busca a lista atualizada
 setCpf('');
 setQuantidade('');
 setEmpresa('');
 setmatricula_Coletor('');
 } else {
 Alert.alert('Erro', data.mensagem || 'Ocorreu um erro ao adicionar.');
 }
 } catch (error) {
 Alert.alert('Erro', 'Não foi possível adicionar a pessoa.');
 console.error(error);
 } finally {
 setLoading(false);
 }
 };



//   useEffect(() => {
//  adicionarColeta();
//  }, []);

    return(
        <View style = {styles.container} >
            <ImageBackground style = {styles.Background} source={require('../../imagens/fundo02.png')}>
            <Image style = {styles.logo} source={require('../../imagens/Recebimento_oleo.png')}></Image>
            <View style = {styles.listaCadastro}>

              <TextInput style={styles.Inputcpf} 
              placeholder='CPF' 
              placeholderTextColor='#1B63C5'
              type={'cpf'}
              value={cpf}
               keyboardType="numeric"
               onChangeText={setCpf}
              />

              <TouchableOpacity>
                <Text style={styles.texto}>Não se Identificar</Text>
              </TouchableOpacity>

               <TextInput style={styles.Inputquantidade}
                placeholder='Quantidade de ML' 
                placeholderTextColor='#1B63C5'
                value={quantidade}
                 onChangeText={setQuantidade}
                />

               {/* <TextInput style={styles.InputEmpresa} 
               placeholder='Empresa' 
               placeholderTextColor='#1B63C5'
               value = {empresa}
                onChangeText={setEmpresa}
               /> */}

               {/* <TextInput style={styles.InputColetor}
                placeholder='Matricula-Coletor' 
                placeholderTextColor='#1B63C5'
                value={matricula_coletor}
                 keyboardType="numeric"
                 onChangeText={setmatricula_Coletor}
                /> */}

              <TouchableOpacity style={styles.cadastrar} onPress={adicionarColeta}>

    
                <Text style = {styles.Textcadastrar}>Cadastrar Coleta</Text>
              </TouchableOpacity>

            </View>

            </ImageBackground>
        </View>
        );
}

const styles =  StyleSheet.create({

container: {
    flex: 1,
  },

  Background:{
  flex:1
   },

      logo:{
   
  alignSelf:'center',
  margin:115,
    height:50,
    maxWidth:380
   },

   listaCadastro:{
 backgroundColor: '#fff',
 padding: 25,
 borderRadius: 8,
 marginBottom: 30,
 elevation:10,
 width:355,
 height:485,
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
     width:220,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:48,
     backgroundColor:'#1B63C5',
     margin:15,
     borderRadius: 125,
   },

   Textcadastrar:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold',
   }



})
