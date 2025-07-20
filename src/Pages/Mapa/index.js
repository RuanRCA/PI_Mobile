// import React, { useEffect, useState } from "react";
// import { StyleSheet , Text , View , TouchableOpacity } from "react-native";
// import MapView , {Marker} from "react-native-maps";
// import * as Location from 'expo-location'

// // export default function Mapa(){
// //    const Mapa = () => {
// //     const [location , setLocation] = useState(null);
// //     useEffect(()=>{
// //      (async () => {
// //     let {status} = await location.requestForegroundPermissionsAsync();
// //     if (status !== 'granted'){
// //         console.log('Permission to acess location was denied');
// //         return;
// //     }
// //     let location = await Location.getCurrentPositionAsync({});
// //     setLocation(location);
// //      })();
// //     },[]);

// //     return (
// //     <View style={styles.container}>
// //     <MapView style={styles.map}
// //     initialRegion={{
// //         latitude:37.4597730214824,
// //         longitude:-122.0856026405,
// //         latitudeDelta:0.0922,
// //         longitudeDelta:0.0421,

// //     }}
// //     showsUserLocation = {true}
// //     loadingEnabled= {true}
// //     />

// //     </View>
// //     );
// // }
// // }

// export default function Mapa() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] =  useState(null);

//   useEffect(() => {
//     async function getCurrentLocation() {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     }

//     getCurrentLocation();
//   }, []);

//   let text = 'Waiting...';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>

//           {/* <MapView style={styles.location}
//     initialRegion={{
//         latitude:37.4597730214824,
//         longitude:-122.0856026405,
//         latitudeDelta:0.0922,
//         longitudeDelta:0.0421,

//     }}
//     showsUserLocation = {true}
//     loadingEnabled= {true}
//     /> */}

//       <MapView style={styles.map} />
        
//        <Text style={styles.paragraph}>{text}</Text>  
//     </View>
//   );
// }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   paragraph: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });


import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text ,Image , TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';

export default function App() {
  const [location, setLocation] = useState(null);
  // const route = useRoute();
  // const { mensagem } = route.params;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);


  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} />
        </MapView>
      )}

       <View style={styles.bottomHalf}>
        {/* Aqui você pode colocar outros componentes abaixo do mapa */}
        
                {/* <LinearGradient
                  style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '900',}}
              
                    start={{x:1, y:0,}}
         
                    end={{ x:0, y:1,}}
         
                   colors={['#cdeffaff'   ,'#54b1feff']}
                    /> */}
              
              <Image style={styles.logo} source={require('../../imagens/oleotech01.png')}>
                  </Image>

                  <Text style={styles.texto}>Endereço</Text>

                   <Text style={styles.endereco}>Av. Agostinho Ferreira, 1398 Ribeirópolis - Praia Grande SP</Text>  

                  {/* <Text>{mensagem}</Text> */}

                 
                 

                  <TouchableOpacity style={styles.codigo}>
                    <Text style={styles.texto}>Código</Text>
                  </TouchableOpacity>



                  

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map:
   { flex:1,
    //  height: Dimensions.get('window').height * 0.5, // 50% da altura da tela
    width: '100%',
    
    },

      bottomHalf: {
    flex: 1,
    // backgroundColor: '#DCDCDC',
    backgroundColor:'	#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo:{
      width:150,
      height:180,
      alignSelf:'center',
      marginTop:-147
  },
  endereco:{
    fontWeight:'bold',
    padding:10,
    fontSize:18,
    textAlign:'center'
   
  },
  texto:{
    fontWeight:'bold',
    fontSize:19,
    textAlign:'auto',

  },
  codigo:{
    padding:20,
     width:120,
     alignItems:'center',
     alignSelf:'center',
     borderRadius:10,
     borderColor:'black',
     height:70,
     backgroundColor:'#4367F4',
     marginTop:17
  },
});