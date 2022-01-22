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
 import Reg from './pages/reg';
 import ProductPage from './pages/product';
 import profile from './pages/profile';
import productTabPage from './pages/productTabPage';
 
 
 
 const Stack = createNativeStackNavigator();
 
 
 export default function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen
           name="productTabPage"
           component={productTabPage}
           options={{headerShown : false}}
         />
       <Stack.Screen
           name="ProductPage"
           component={ProductPage}
           options={{headerShown : false}}
         />
         <Stack.Screen
           name="Home"
           component={Home}
           options={{headerShown : false}}
         />
         <Stack.Screen
           name="registation"
           component={Reg}
           options={{headerShown : false}}
         />

          <Stack.Screen
           name="Profile"
           component={profile}
           options={{headerShown : false}}
         />

       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 
 