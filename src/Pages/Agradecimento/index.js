
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
 
export default function Agradecimento() {
  const animation = useRef(null);
 
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
});