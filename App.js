import React , {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
import Coleta from './src/Pages/Coleta';
import Mapa from './src/Pages/Mapa';
import Codigo from './src/Pages/Codigo';
import Agradecimento from './src/Pages/Agradecimento';

const Stack = createNativeStackNavigator()

export default function App(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
          <Stack.Screen name="Sobre" options={{headerShown:false}} component={Sobre}/>
          <Stack.Screen name="Coleta" options={{headerShown:false}} component={Coleta}/>
          <Stack.Screen name="Mapa" options={{headerShown:false}} component={Mapa}/>
          <Stack.Screen name="Codigo" options={{headerShown:false}} component={Codigo}/>
          <Stack.Screen name="Agradecimento" options={{headerShown:false}} component={Agradecimento}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
