import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image , Button , ImageBackground , FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from'@expo/vector-icons/FontAwesome5';



export default function Locais(){
  const navigation = useNavigation();
  const [empresa, setEmpresa] = useState([]);
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [nome_local , setNome_Local] = useState('');
   const [loading, setLoading] = useState(false);

   

   const buscarEmpresas = async () => {
 setLoading(true);
 try {
 const response = await fetch('http://192.168.56.1/api_oleotech/oleotech.php');
 const data = await response.json();
 setEmpresa(data);
 } catch (error) {
 Alert.alert('Erro', 'Não foi possível carregar as pessoas. Verifique sua API e o IP.');
 console.error(error);
 } finally {
 setLoading(false);
 }
 };

 useEffect(() => {
 buscarEmpresas();
 }, []);

  
  return (
      <View style={styles.container}>
        <ImageBackground style = {styles.Background} source={require('../../imagens/Fundo01.png')}>
        <Image style ={styles.logo} source={require('../../imagens/locais_coleta.png')}></Image>
        
      
    <FlatList
 data={empresa}
 keyExtractor={(item) => item. id_empresa.toString()}
 renderItem={({ item }) => (
 <View style={styles.listaEmpresa} >
 <Text style={styles.textoNome} >Ponto de Coleta : {item.nome}</Text>
  <Text style={styles.Cep}>Cep: {item.cep}</Text>
 <Text style={styles.textoLocalidade} >Localidade: {item.nome_local}</Text> 

 <TouchableOpacity style={styles.buttomRota} onPress={() => navigation.navigate('Mapa')}>
  <Text style={styles.textoRota}>Ver Rota</Text>
 </TouchableOpacity>

 </View>
 )}
 ListEmptyComponent={<Text style={styles.listaVazia}>Nenhuma empresa por perto.</Text>}
 />

  
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

   listaEmpresa:{
   backgroundColor: '#fff',
 padding: 25,
 borderRadius: 8,
 marginBottom: 30,
 elevation:10,
 width:355,
 marginLeft:23,
 flexDirection: 'column',
  justifyContent: 'space-between',
 borderWidth: 1,
 borderColor: '#eee',


   },

   textoNome:{
   fontWeight:'bold',
   color:'#1B63C5',
   margin:10,
   fontSize:18,
   textAlign:'center',
   marginTop:-25,
   },

   Cep:{
   fontWeight:'bold',
   fontSize:16,
   color:'#000',
    margin:4,
    },

   textoLocalidade:{
    fontWeight:'bold',
   fontSize:16,
   color:'#000',
    margin:4,
   },

   buttomRota:{
   padding:10,
     width:115,
     alignItems:'center',
     borderRadius:10,
    backgroundColor:"#1B63C5",
     margin:15,
     marginLeft:180
   },

   textoRota:{
  color:'#fff',
  fontWeight:'bold',
  fontSize:16,
   },



})