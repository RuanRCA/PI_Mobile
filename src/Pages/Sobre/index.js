
import { StyleSheet, TextInput, View, TouchableOpacity, Text , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

 
export default function Sobre(){
    
 const navigation = useNavigation();
        return(
    <View style={styles.container}>
      <Animatable.Image  animation= "flipInY" style={styles.logo} source={require('../../imagens/Logo_Oleotech.png')}
         />
         <Animatable.Image delay ={600} animation={"fadeInUp"} style={styles.bemvindo} source={require('../../imagens/Bem_Vindo.png')}/>

          <Animatable.View delay={600} animation="fadeInUp" >
           <TouchableOpacity style={styles.acessar} onPress={()=> navigation.navigate('Coleta')}>
             <Text style={styles.texto}>Acessar</Text>  
          </TouchableOpacity >
            
          </Animatable.View>

      </View>
           
        )
    }


const styles = StyleSheet.create({


 container: {   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#1B63C5'

  },

   logo:{
    width:350,
   height:150,
    marginTop:-210,
 
  } ,

  bemvindo:{
   width:355,
   height:120,
   margin:19,
   padding:55,
    marginTop:100,
  },

  acessar:{
   padding:10,
     width:220,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:58,
     backgroundColor:'#fff',
     margin:35,
     borderRadius: 125,
  },

  texto:{
   color:'#1B63C5',
  fontSize:20,
  fontWeight:'bold'
  },

})

