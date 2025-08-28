
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Agradecimento() {
  const animation = useRef(null);
  const navigation = useNavigation();
 
//   useEffect(() => {
//     if (animation.current) {
//       animation.current.play(7, 21); // ou qualquer intervalo desejado
//     }
//   }, []);
 
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 980 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#2064f8ff', '#235fe0ff']}
      />
      <Text style={styles.texto}>Muito Obrigado!</Text>
 
      <LottieView
        source={require('../../imagens/Terra.json')}
        autoPlay={true}
        loop={true}
        style={{ width: 450, height: 450 }}
        ref={animation}
      />

      <TouchableOpacity style = {styles.coletor} onPress={()=> navigation.navigate('Coletor')}>
        <Text style = {styles.textColetor}>Tela Coletor</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  coletor:{
     backgroundColor:"#EFC91D",
   textAlign:'center',
   margin:20,
    padding:15,
      borderRadius:25,
      width:180,
      // margin:25,
      // marginLeft:110,
      alignItems:'center'
  },
  textColetor:{
     fontWeight:'bold',
    fontSize:19,
    textAlign:'auto',
    color:'#1B63C5'
  }
});