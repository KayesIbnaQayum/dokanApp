/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Home from './pages/home';
 
 
 
 const Stack = createNativeStackNavigator();
 
 
 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="Home"
           component={Home}
           options={{headerShown : false}}
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 
 