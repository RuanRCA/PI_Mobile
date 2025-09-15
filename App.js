import React , {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Criar from './src/Pages/Criar';
import Sobre from './src/Pages/Sobre';
import Locais from './src/Pages/Locais';
import Mapa from './src/Pages/Mapa';
import Agradecimento from './src/Pages/Agradecimento';
import Coletor from './src/Pages/Coletor';

const Stack = createNativeStackNavigator()

export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
        <Stack.Screen name="Criar" options={{headerShown:false}} component={Criar}/> 
          <Stack.Screen name="Sobre" options={{headerShown:false}} component={Sobre}/>
            <Stack.Screen name="Locais" options={{headerShown:false}} component={Locais}/>
          <Stack.Screen name="Mapa" options={{headerShown:false}} component={Mapa}/>
          <Stack.Screen name="Agradecimento" options={{headerShown:false}} component={Agradecimento}/>
          <Stack.Screen name="Coletor" options={{headerShown:false}} component={Coletor}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }