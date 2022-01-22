import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, Button, Alert,TouchableWithoutFeedback, FlatList, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

export default ProductPageTab = ({ navigation })=>
{
  
      
    return(
        <SafeAreaView style={{backgroundColor:'#F8F8F8', height:'100%',flexDirection:'column'}}>
           <NavigationContainer independent={true}>
          <Tabs />
        </NavigationContainer>


        </SafeAreaView>
       
    )


};



const styles = StyleSheet.create({

  logo:{
      width:165.67,
      height:50.8,
      alignSelf:'center',
      top:83.05,
  },
  textSignIn:{
    fontWeight:'700',
      fontSize:25,
      lineHeight:29.3,
      textAlign:'center',
      lineHeight:29.3,
      color:'black',
      fontFamily:'Roboto',
  },
  topBox:{
    backgroundColor:'#FFFFFF',
    height:60,
    width:334,
    alignSelf:'center'
   
  },
  textForget:{
      fontFamily:'Roboto',
      textAlign:'right',
      marginRight:50,
      fontSize:13,
      lineHeight:15.23,
      fontWeight:'400',
      marginTop:20
  },
  loginBtn:{
      width:308.68,
      alignSelf:'center',
      borderRadius:10,
      height:61.11,
      backgroundColor:'#F75F55',
    marginTop:20
  },
  loginBtnText:{
    justifyContent: 'space-evenly', 
    alignItems: 'center',
    alignSelf:'center',
    fontSize:17,
    lineHeight:19.92,
    letterSpacing:0.15,
    fontWeight:'500',
    color:'white',

  },
  socialBtn:{
      width:56,
      height:56,
      borderRadius:10,
      backgroundColor:'#FFFFFF',
      marginRight:14,
      alignSelf:'center',
      elevation:1
  }
});
