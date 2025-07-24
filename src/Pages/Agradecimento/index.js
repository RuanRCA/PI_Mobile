import React, { useState , useEffect , useRef} from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity , Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

export default function Agradecimento(){
  const [save , setSave] = useState(true);
  const animation = useRef(null);
  const firstRun = useRef(true);

useEffect(()=>{
 if (firstRun.current){
  if (save){
    animation.current.play(21 ,21 );
  }
  else {
    animation.current.play(7,21);
  }
    firstRun.current = false;

 }

 else if (save){
  animation.current.play(7 , 21);
  
 }

 else {
  animation.current.play(21.7);
 }
},[save])

  return (
    <View style={styles.container}>
        
                <LinearGradient
                  style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '980',}}
              
                    start={{x:1, y:0,}}
         
                    end={{ x:0, y:1,}}
         
                   colors={['	#00BFFF'   ,'#E0FFFF']}
                    />
     <Text style={styles.texto}>Muito Obrigado!</Text>
      <TouchableOpacity onPress={()=> setSave(!save)}>

      <LottieView
      source={require('../../imagens/Terra.json')}
      autoPlay={false}
      Loop={false}
      style={{width:450 , height:450}}
      renderMode="cover"
      ref={animation}
      />

          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:''
},

texto:{
    fontSize:30,
    fontWeight:'bold',
}
});