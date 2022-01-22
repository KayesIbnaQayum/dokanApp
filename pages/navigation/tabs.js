import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, Button, Alert,TouchableWithoutFeedback, FlatList, ImageBackground} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import profile from '../profile';
import Home from '../home';
import Reg from '../reg';
import ProductPage from '../product';
import FrontAwesome5 from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const tabs = ()=>{

    const customTabBarStyle = {
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'white' },
    }
    return (
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        tabBarOptions={customTabBarStyle}
        shifting="false">
        <Tab.Screen
        name="Home"
        options={{
            tabBarLabel: '',
            headerShown:false,
            tabBarIcon: ({ color }) => (
                <FrontAwesome5 name="home" size={30} color="gray" />
                )
        }}
        component={Home} />
        <Tab.Screen
        name="registation"
        options={{
            headerShown:false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <FrontAwesome5 name="grid-outline" size={30} color="gray" />
                )
        }}
        component={Reg} />
        
        <Tab.Screen
        name="ProductPage"
        options={{
            headerShown:false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <View
                style={{
                    position: 'absolute',
                    bottom: -18, // space from bottombar
                    height: 68,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
               <FrontAwesome5 name="cart-outline" size={30} color="gray" />
                </View>
            )
        }}
        component={ProductPage}/>

        <Tab.Screen
        name="Profile"
        options={{
            headerShown:false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <FrontAwesome5 name="person-outline" size={30} color="gray" />
                )
        }}
        component={profile} />
        </Tab.Navigator>
    );

}

export default tabs;