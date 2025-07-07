import React , {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';

const Stack = createNativeStackNavigator()

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title:'Tela Inicio',
          headerStyle:{
            backgroundColor:'#4367F4',
          },
          headerTintColor:'#FFF'
        }}/>
          <Stack.Screen name="Sobre" component={Sobre}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}